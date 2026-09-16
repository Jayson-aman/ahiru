# Web課金 公開チェックリスト（2026-09-16 時点）

iOS は稼働中（1.3.2 審査通過）。Android は未着手。ここは **Web だけ**の話。

---

## ✅ 済んでいる

- [x] **コード** — `services/webBilling.web.ts` / `components/CertPaywall.tsx`
- [x] **RevenueCat Billing の商品42件** — 作成・全パッケージ割当・Entitlement 紐付け
      （危険物の月額パッケージに年額が入っていた問題も修正済み）
- [x] **Vercel の環境変数** — `EXPO_PUBLIC_RC_API_KEY_WEB` を `rcb_` に変更
- [x] **CSP の修正** — `87c3ac5`（※リポジトリ内のみ。本番未反映）
- [x] **法定ページ4本** — 特商法・規約・プライバシー・サポートが
      `https://jayson-aman.github.io/ahiru/legal/` にあり、`public/landing.html` から
      リンク済み

## ❗ 残っている

### A. 最新コミットを本番にデプロイ ← Stripe と無関係。今すぐできる

本番（`shikaku.zaibase.group`）は **`64b0b25e`（2026-08-27）の再デプロイ**。
本番に入っていない変更:

```
vercel.json                ← CSPの修正（致命的）
components/CertPaywall.tsx ← 購入導線
public/landing.html        ← LPの修正
services/webBilling.web.ts ← コメント修正（無害）
```

2つの理由で再ビルドが必須:

1. 本番の CSP が `connect-src 'self'` のままで `api.revenuecat.com` に届かない
2. `EXPO_PUBLIC_*` はビルド時にバンドルへ焼き込まれるため、環境変数を
   変えただけでは反映されない（前回は Redeploy だったのでビルドキャッシュが
   使われた可能性もある）

手順: Vercel → zaibase-shikaku → Deployments → 最新コミット →
「…」→ Promote to Production（ビルドキャッシュを使わない設定で）

### B. RevenueCat Billing と Stripe の接続確認（おそらく済み）

**Stripe アカウントは認証済み（2026-09-16 確認）。** 設定ガイドの
「アカウントを認証」の3項目（メールアドレス確認・法人情報の確認(KYB)・
Stripe プロファイル作成）すべてにチェックが付いており、ライブモードにも
入れている。当初「本人確認未完了」と記録したのは誤りだった。

またダッシュボード右上に RevenueCat の Stripe アプリのアイコンが入って
おり、**RevenueCat がこの Stripe アカウントに接続されている**ことを示す。

確実に見るなら Stripe → アプリ → RevenueCat、または
RevenueCat → Billing タブ。

### C. RevenueCat Billing のストアフロント設定（未確認）

チェックアウト画面に表示される 会社名・サポートメール・返金ポリシー・
規約URL。RevenueCat → Billing タブ。

### D. デプロイ後のテスト購入

- [ ] ブラウザのコンソールに CSP 違反が出ていないか
      （出たらそのエラー文から必要なドメインを `vercel.json` に追加）
- [ ] 資格ページで「ただいま購入できません」が出ないか
- [ ] 1件購入して、どの Stripe 商品に請求が乗るか
      （これで未使用42件の判定も確定する）

## ⏸ 保留していいもの

| 項目 | 状態 | 詳細 |
|---|---|---|
| 消費税 | RevenueCat 側 OFF のままが正しい | `REVENUECAT_AUDIT.md` 5. |
| Stripe 商品42件のアーカイブ | いつでも実行可 | `scripts/stripe_archive_unused.mjs` |
| RevenueCat の表示名20件 | 内部表示のみ・次回 | `REVENUECAT_AUDIT.md` 4. |
| ロゴ | 未選定 | — |

---

## 作業順

Stripe の認証は済んでいるため、**前提条件による待ちは無い。**

```
1. 最新コミットを本番デプロイ      ← A。これが最優先
2. B と C を確認（Billing タブ）
3. テスト購入（D）
4. Stripe 商品42件をアーカイブ → キーを即失効
```

1 と 4 は互いに独立しているので、どちらから着手してもよい。

## Stripe シークレットキーの取り扱い

ライブのシークレットキー（`sk_live_`）は**作成時の一度しか表示されない。**
そして標準キーには「失効」が無く、**「ローテーション」**しかない
（古いキーをブロックして新しいキーを生成する操作）。

Stripe → 開発者 → APIキー → 標準キー → 該当キーの「…」→ APIキーのローテーション

ローテーション時の**有効期限は「今すぐ」**を選ぶ。1時間後などの猶予を
選ぶと、その間は古いキーが生きたままになる。Webhook エンドポイントは
ローテーション後も有効なまま（Stripeのダイアログに明記されている）。

### アーカイブには制限付きキー（`rk_`）を使う

ローテーションで出てくる新しい `sk_live_` を使うこともできるが、
フル権限のキーを再びターミナルに置くことになる。**制限付きキーのほうが
安全**で、必要な権限は3つだけ:

| リソース | 権限 |
|---|---|
| Products | 書き込み |
| Prices | 書き込み |
| Subscriptions | 読み取り |

他はすべて「なし」。漏れても商品の操作しかできない。
制限付きキーは標準キーと違い**削除できる。**

### 順番

1. Stripe → 開発者 → APIキー → **「+ 制限付きのキーを作成」**
2. アーカイブを実行（`scripts/stripe_archive_unused.mjs --apply`）
3. その制限付きキーを削除
4. 標準のシークレットキーをローテーション（有効期限=今すぐ）。
   生成された新しいキーはどこにも使わない

```bash
unset STRIPE_SECRET_KEY
# ~/.zsh_history を開いて export STRIPE_SECRET_KEY= の行を削除する
```

`EXPO_PUBLIC_` 付きの環境変数はブラウザに配信されるため、
**シークレットキーを Vercel に入れてはいけない。**

### ローテーション前の確認

`sk_live_` を他のツール（Zapier、自作サーバー等）で使っていないか。
2026-09-16 時点では `scripts/stripe_products.mjs` の実行にしか使われて
いない。Vercel には `rcb_` が入っており、RevenueCat は Stripe アプリ
（OAuth）経由で接続しているため、どちらもこのキーを使っていない。
