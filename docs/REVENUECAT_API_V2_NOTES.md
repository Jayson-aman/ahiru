# RevenueCat API v2 メモ（RC Billing 商品の一括作成用）

この環境から `revenuecat.com` はネットワークポリシーでブロックされており
公式ドキュメントを直接読めない。**RevenueCat サポートから取得した仕様を
一次資料としてここに保存する**（2026-09-16）。

用途: 本番用 Billing 設定の下に42商品を作り直す場合のスクリプト化。
背景と判断の経緯は `WEB_LAUNCH_CHECKLIST.md` を参照。

---

## 1. 商品の作成

`POST /projects/{project_id}/products`

| フィールド | 型 |
|---|---|
| `title` | string \| null |
| `subscription.duration` | enum `P1W` / `P1M` / `P2M` / `P3M` / `P6M` / `P1Y` |

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

## 参考

- API v2 リファレンス: https://www.revenuecat.com/docs/api-v2
  （この環境からはアクセス不可）
