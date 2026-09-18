# RevenueCat API v2 メモ（RC Billing 商品の一括作成用）

この環境から `revenuecat.com` はネットワークポリシーでブロックされており
公式ドキュメントを直接読めない。**RevenueCat サポートから取得した仕様を
一次資料としてここに保存する**（2026-09-16）。

用途: 本番用 Billing 設定の下に42商品を作り直す場合のスクリプト化。
背景と判断の経緯は `WEB_LAUNCH_CHECKLIST.md` を参照。

---

## 共通

- ベースURL: `https://api.revenuecat.com/v2`
- 認証: `Authorization: Bearer <v2シークレットキー>`
  （**v2 のシークレットキー。`rcb_` や v1 の `sk_` ではない**）
- `Content-Type: application/json`

## 1. 商品の作成

`POST /projects/{project_id}/products`

必須: `store_identifier`, `app_id`, `type`

| フィールド | 型 | 補足 |
|---|---|---|
| `app_id` | string | 本番 RC Billing アプリのID（`app...`） |
| `store_identifier` | string | **Stripe の商品ID（`prod_...`）。** RevenueCat がアクティブな対応デフォルト価格を自動選択する |
| `price_identifier` | string \| null | 任意。特定の Stripe 価格ID（`price_...`）を強制指定する場合 |
| `type` | enum | `subscription` / `one_time` / `consumable` / `non_consumable` / `non_renewing_subscription` |
| `display_name` | string \| null | **ダッシュボード表示専用** |
| `title` | string \| null | **チェックアウトに出る顧客向け名称** |
| `subscription.duration` | enum `P1W`/`P1M`/`P2M`/`P3M`/`P6M`/`P1Y` | テストストアのみ有効。RC Billing では無視 |

**冪等ではない。** 同じ identifier で再試行すると **409 conflict**。
→ スクリプト側で既存判定を持つ必要がある（`stripe_products.mjs` と同じ方式）。

### 🔴 RC Billing では、このエンドポイントで設定できないもの

- **価格（JPY）**: 商品作成ボディに価格フィールドが無い。RC Billing は
  `store_identifier` / `price_identifier` が指す **Stripe 側の商品・価格**から
  価格を取得する。唯一の価格設定エンドポイント
  `POST /projects/{id}/products/{product_id}/prices` は **`test_store` 専用かつ
  非推奨**で、RC Billing 商品に対してはエラーになる。
- **請求サイクル**: 同様に Stripe の価格由来。`subscription.duration` は
  **非テストストアでは無視される。**

→ **前提: 対応する Stripe の商品・価格がライブアカウントに先に存在していること。**

## 2. 商品を Entitlement に紐付け

`POST /projects/{project_id}/entitlements/{entitlement_id}/products`

```json
{ "product_ids": ["prod_abc", "prod_def"] }
```

- **冪等**（既に紐付いているものはスキップ）
- detach エンドポイントで解除可能
- Entitlement または商品がアーカイブ済みの場合 **422**

## 3. 既存 Offering 内に Package を作成

`POST /projects/{project_id}/offerings/{offering_id}/packages`

```json
{ "lookup_key": "$rc_monthly", "display_name": "Monthly", "position": 1 }
```

- 必須: `lookup_key`, `display_name`
- `lookup_key` の規約: `$rc_monthly` / `$rc_annual` / `$rc_weekly` /
  `$rc_three_month` / `$rc_two_month` / `$rc_six_month` / `$rc_lifetime`、
  またはカスタムの `$rc_custom_...`
- `position`（1以上の整数）は任意

**既存の `default` Offering をそのまま使う場合、このステップは不要な見込み。**
既存パッケージを再利用して 4 で商品を貼り直すだけで済む。

## 4. 商品を Package に紐付け

`POST /projects/{project_id}/packages/{package_id}/products`

**2 とボディの形が違う**（単なるID配列ではなくオブジェクト配列）。
`eligibility_criteria` は商品ごとに必須。

```json
{ "products": [
    { "product_id": "prod_abc", "eligibility_criteria": "all" }
] }
```

- `eligibility_criteria`: `all` / `google_sdk_lt_6` / `google_sdk_ge_6`
- Google SDK 系は Play ストア商品でのみ関係。
  **Web Billing・App Store 商品には `all` を使う。**
- 紐付けは追加式（既存の関連付けは残る）

---

## Title（チェックアウトに表示される名前）

チェックアウトに出る文字列は商品の **Name**（顧客向け商品名）で、
ドキュメントでは *"the customer-facing name of the Product… shown in the
checkout form and on invoices"* とされている。
API では商品作成時の **`title`** フィールドが対応する。

注意2点:

1. API の `title` は null 可で、`title` → チェックアウトの Name への対応は
   ドキュメント上**明記されていない。**
   → **まず1商品だけ作ってチェックアウト画面で確認してから42件を流す。**
2. `title` は**作成時に設定する。** 既存商品に後から
   `PATCH /projects/{id}/products/{product_id}` で更新できるかは未確認。
   どのみち作り直すなら、作成時に正しい値を入れれば
   2026-09-16 に見つかった頭欠けの問題は恒久的に解決する。

正しい Title 42件の一覧は `WEB_LAUNCH_CHECKLIST.md` にある。

---

## スクリプト設計時の要点

- **キーは RevenueCat の Secret API key（v2）。** これも `sk_` で始まるが
  **Stripe の `sk_` とは別物。** 環境変数のみで渡し、引数には書かない。
- 商品作成は非冪等（409）なので、既存一覧を取得して差分だけ作る。
- Entitlement 紐付けは冪等なので再実行に強い。
- `--apply` を付けない限り書き込まない（既存スクリプトと同じ作法）。
- 実行前に、ライブ Stripe 側に対応する商品・価格が存在することを確認する。

## 移行用データ: `docs/revenuecat_migration_map.json`

`store_identifier` は **Stripe の商品ID**なので、2026-09-16 のアーカイブ作業の
出力から42件すべてのIDを回収して保存した。商品作成に必要な値が揃っている:

```json
{
  "store_identifier": "prod_VGjWYqP7F8qtPM",
  "title": "コンクリート技士 Pro（月額）",
  "entitlement": "pro_concrete",
  "qualiz_id": "qualiz_pro_concrete_monthly",
  "amount": 1800,
  "interval": "month"
}
```

`amount` / `interval` は確認用（API では設定できない。Stripe 側の値）。

**この42商品はライブ Stripe アカウントでアーカイブ済み。** 使う前に
アーカイブ解除が必要（1クリックで戻せる）。**削除しないこと。**

実行時に別途必要なもの:

- `project_id` = **`projd63a8ebf`**（2026-09-17 確認。
  Project settings → General → Project ID）
- RC Billing アプリの `app_id` = **`appa8c271a3d2`**（2026-09-17 確認。
  左サイドバー Web → QualiZ (RevenueCat Billing)）
  - これは**現在サンドボックスStripeに紐付いている設定**のID。
    サポートが「接続の差し替え」を認めればこのIDがそのまま本番用になる。
    「新設定を作れ」と言われた場合は別IDが発行される（`+ Add web provider`）
  - 参考: QualiZ (Stripe) は `app234ab1e259`。**SDKから使えないので触らない**
    （`services/webBilling.web.ts` の経緯参照）
- v2 シークレットキー

## 実装: `scripts/revenuecat_migrate.mjs`

上記4操作を実装済み。**42件の手入力は発生しない**（`title` も API で入る）。

```bash
read -s RC_V2_SECRET_KEY && export RC_V2_SECRET_KEY

node scripts/revenuecat_migrate.mjs --discover              # 現状取得（読み取りのみ）
node scripts/revenuecat_migrate.mjs --app-id=appXXXX        # 計画確認（読み取りのみ）
node scripts/revenuecat_migrate.mjs --app-id=appXXXX --limit=1 --apply   # 1件だけ
node scripts/revenuecat_migrate.mjs --app-id=appXXXX --apply             # 全件
```

設計上の要点:

- `--discover` が `revenuecat_state.json` を書き、移行はそれを読む。
  既存商品を `store_identifier` で引いて**作成済みを飛ばす**（作成は非冪等）
- **パッケージの照合**: サンドボックス側商品の `store_identifier` から
  そのパッケージを引き、同じパッケージへ本番商品を追加で貼る。
  照合できなかった商品は最後に警告として列挙する（Entitlement には
  紐付くが Offering に出ないため購入画面に現れない）
- **1件目で失敗したら中断する。** 42件分の同じエラーを出しても意味がない
- `appa8c271a3d2`（サンドボックス側）を `--app-id` に渡すと拒否する

⚠ GET 系のパスは仕様メモに無く、v2 の慣例からの推測。404 ならパスが違うだけで
何も壊れていない。`--discover` は読み取りのみ。

⚠ 実行前に**ライブ Stripe 側42件のアーカイブ解除が必要。** RC Billing は価格を
Stripe から取得し、API では設定できない。

## 参考

- API v2 リファレンス: https://www.revenuecat.com/docs/api-v2
  （この環境からはアクセス不可）
