/**
 * playwright-core の解決を1か所にまとめる。
 *
 * 環境によって playwright がどこに入っているかが変わるため、
 * 各スクリプトに絶対パスを直書きすると別のマシンで動かなくなる。
 * ここで順に探し、見つからなければ導入方法を示して終了する。
 *
 * 使い方:
 *   const { chromium } = require('./_playwright');
 */
const { execSync } = require('child_process');
const path = require('path');

const candidates = [];

// 1) 環境変数で明示された場所
if (process.env.PLAYWRIGHT_CORE_PATH) {
  candidates.push(process.env.PLAYWRIGHT_CORE_PATH);
}

// 2) プロジェクト内（devDependency として入れた場合）
candidates.push('playwright-core', 'playwright');

// 3) グローバル install（npm root -g 配下）
try {
  const globalRoot = execSync('npm root -g', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  if (globalRoot) {
    candidates.push(path.join(globalRoot, 'playwright-core'));
    candidates.push(path.join(globalRoot, 'playwright'));
    candidates.push(path.join(globalRoot, 'playwright', 'node_modules', 'playwright-core'));
  }
} catch {
  // npm が無い環境では黙って次の候補へ
}

let loaded = null;
for (const c of candidates) {
  try {
    loaded = require(c);
    break;
  } catch {
    // 次の候補へ
  }
}

if (!loaded || !loaded.chromium) {
  console.error(
    [
      'playwright が見つかりません。次のいずれかで用意してください:',
      '  npm i -D playwright-core',
      '  npm i -g playwright',
      '  PLAYWRIGHT_CORE_PATH=/path/to/playwright-core node scripts/smoke.js',
    ].join('\n')
  );
  process.exit(1);
}

module.exports = loaded;
