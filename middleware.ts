// @ts-nocheck
// Vercel Edge Middleware — QualiZ Web の入口ガード
// 役割：危険パスの自動探査を404、怪しいUA/AIボット/スキャナを403、連打を429。
// 注意：レート制限は「同一エッジ内・ベストエフォート」。厳密な制限には Vercel KV/Upstash が必要（下部コメント参照）。

export const config = {
  // 全リクエストに適用（静的アセットも含む＝ボットのアセット取得も遮断できる）
  matcher: '/(.*)',
};

// AIボット・スキャナ・スクレイパー・自動化ツールのUA
const BLOCKED_UA = /(sqlmap|nikto|nmap|masscan|zgrab|nuclei|acunetix|wpscan|gptbot|oai-searchbot|chatgpt-user|ccbot|bytespider|claudebot|claude-web|anthropic-ai|google-extended|applebot-extended|perplexitybot|amazonbot|meta-externalagent|diffbot|cohere-ai|scrapy|httrack|python-requests|python-urllib|go-http-client|libwww-perl|wget|kimi|moonshot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|dataforseo)/i;

// ブラウザを偽装しない curl 単体（例：curl/8.4.0）
const CURL_ONLY = /^curl\/[\d.]+$/i;

// よくある脆弱性スキャンの探索パス
const BAD_PATH = /(^|\/)(\.env|\.git|\.aws|\.ssh|\.svn|\.hg|wp-admin|wp-login|xmlrpc\.php|phpmyadmin|phpunit|vendor\/|actuator|\.DS_Store|\.htaccess|config\.php|id_rsa|\.npmrc|\.pem|backup\.zip|dump\.sql)(\/|$|\.)/i;

// 静的アセットはレート制限の対象外（1ページ表示で多数のファイルを取得するため）
const IS_ASSET = /^\/(_expo|assets|favicon)/i;
const ASSET_EXT = /\.(js|mjs|css|png|jpe?g|gif|svg|webp|ico|woff2?|ttf|otf|map|json|txt|xml|wasm)$/i;

// --- 簡易レート制限（同一エッジ内・ベストエフォート） ---
const WINDOW_MS = 10000; // 10秒
const MAX_HITS = 80; // 10秒あたり80「ページ」リクエストまで
const hits = new Map(); // ip -> number[]（タイムスタンプ）

function rateLimited(ip, now) {
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  hits.set(ip, arr);
  // メモリ肥大の抑制
  if (hits.size > 5000) {
    for (const k of hits.keys()) {
      hits.delete(k);
      if (hits.size < 4000) break;
    }
  }
  return arr.length > MAX_HITS;
}

export default function middleware(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  const ua = (request.headers.get('user-agent') || '').trim();
  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  const now = Date.now();

  // 1) 危険パスの自動探査 → 404（存在を悟らせない）
  if (BAD_PATH.test(path)) {
    return new Response('Not Found', { status: 404 });
  }

  // 2) 怪しいUA / AIボット / スキャナ / UA空 / curl単体 → 403
  if (!ua || BLOCKED_UA.test(ua) || CURL_ONLY.test(ua)) {
    return new Response('Forbidden', { status: 403 });
  }

  // 3) 連打 → 429（静的アセットは除外）
  const isAsset = IS_ASSET.test(path) || ASSET_EXT.test(path);
  if (!isAsset && rateLimited(ip, now)) {
    return new Response('Too Many Requests', {
      status: 429,
      headers: { 'Retry-After': '10' },
    });
  }

  return undefined; // 通過
}

// --- 厳密なレート制限を行いたい場合（推奨・任意） ---
// 上記の Map はエッジのインスタンスごとに独立し、インスタンスをまたいで共有されない。
// 分散環境で確実に効かせるには Vercel KV（または Upstash Redis）で
// IP 単位のカウンタを持たせる。導入時はこの middleware から KV を参照する形に置き換える。
