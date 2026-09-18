# Web課金 公開チェックリスト（2026-09-16 時点）

iOS は稼働中（1.3.2 審査通過）。Android は未着手。ここは **Web だけ**の話。

---

## 🔴 現在の状態（最初に読む）

**Web課金は本番化されていない。** 唯一のブロッカーは RevenueCat Billing が
Stripe の**サンドボックス**アカウントに紐付いていること（下記「⚠️ 残」）。
2026-09-16 に `support@revenuecat.com` へメールで問い合わせ済み、**返信待ち**。

未着手であることの明示（誤解が生じたため記録）:

- Stripe ライブ口座への42商品の作成は **していない**。
  `scripts/stripe_products.mjs` は封印されたまま
- API v2 による Entitlement / Offering の再紐付けも **していない**
- 本番 `rcb_` キーでの動作確認は **していない**（キー自体が未発行）

サポートの回答が来るまで **Billing 設定の Stripe 接続を差し替えないこと。**

---

## ✅ 済んでいる

- [x] **コード** — `services/webBilling.web.ts` / `components/CertPaywall.tsx`
- [x] **RevenueCat Billing の商品42件** — 作成・全パッケージ割当・Entitlement 紐付け
      （危険物の月額パッケージに年額が入っていた問題も修正済み）
- [x] **Vercel の環境変数** — `EXPO_PUBLIC_RC_API_KEY_WEB` を設定済み。
      ただし値は **`rcb_sb_`（サンドボックス）**。本番キーはまだ存在しない → 下記「⚠️ 残」
- [x] **CSP の修正** — `87c3ac5`（本番反映済み。下記 A 参照）
- [x] **法定ページ4本** — 特商法・規約・プライバシー・サポートが
      `https://jayson-aman.github.io/ahiru/legal/` にあり、`public/landing.html` から
      リンク済み

## ❗ 残っている

### A. ✅ 本番デプロイ 完了（2026-09-16）

`3920a34` を Promote to Production で昇格。`shikaku.zaibase.group` で
**Web課金の決済フォームが表示されることを確認した。**
CSP修正が効いており、`api.revenuecat.com` / `js.stripe.com` に到達できている。
`rcb_` キーも正しく、RevenueCat Billing の商品と価格 ¥1,800 が読めている。

以下は経緯の記録。



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

### ⚠️ 残: サンドボックスの解除（本番公開の必須項目）

決済画面の上部に黄色い **SANDBOX** バナーが出ている。テストモードなので
**本物の課金はできない。**（逆に言えば、カードを入れても課金されないので
自由に検証できる状態。）

**サンドボックスはモード切り替えではなく、どのキーを使うかで決まる。**
RevenueCat Web Billing の公開キーは2種類ある:

| キー | 用途 |
|---|---|
| `rcb_sb_...` | サンドボックス（テスト） |
| `rcb_...`（`_sb_` なし） | 本番 |

**確認済み（2026-09-16）: Vercel の `EXPO_PUBLIC_RC_API_KEY_WEB` は
`rcb_sb_` で始まっていた。** これが SANDBOX バナーの原因で確定。
アプリ側・CSP側は正常で、残るのはキーの差し替えのみ。

#### 本番化の手順

1. RevenueCat → Project settings → API keys → `QualiZ (RevenueCat Billing)`
   の公開キーのうち **`_sb_` が入っていない方**をコピー
2. Vercel → Settings → Environment Variables →
   `EXPO_PUBLIC_RC_API_KEY_WEB` を差し替え
3. **再デプロイ必須**（`EXPO_PUBLIC_*` はビルド時にバンドルへ焼き込まれるため、
   環境変数の変更だけでは反映されない）。Promote to Production を実行する。
4. **Stripe（ライブモード）→ 決済 → 決済方法のドメイン**に
   `shikaku.zaibase.group` を登録する。
   これをやらないと本番キーでも購入が通らない
   （"You need to add domains in Stripe Live mode to allow production
   purchases on those domains."）

#### 🔴 現状: 本番キーが存在しない（2026-09-16 確認）

Project settings → API keys に **`rcb_sb_` のサンドボックスキーしかなく、
本番キーが無い。** 上記手順1が実行できない状態。
つまり **RevenueCat 側の本番有効化が未完了**であり、キーの差し替えでは
解決しない。ライブの Stripe に接続済みでも本番キーが出ないケースとして
コミュニティに同じ症状の報告がある。

**画面で確定（2026-09-16）**: Project settings → API keys は2セクションに
分かれており、

- **Sandbox API keys**: QualiZ (RevenueCat Billing) / QualiZ (Stripe)
- **SDK API keys**（本番の公開キー。*Public API keys are automatically
  generated for each of your apps*）: Test Store / QualiZ (App Store) /
  QualiZ (Stripe)

**`QualiZ (RevenueCat Billing)` は SDK API keys 側に存在しない。**
App Store と Stripe には本番キーが自動生成されているので仕組み自体は
動いており、**RevenueCat Billing アプリだけが本番化されていない。**
こちら側の設定ミスではなく、RevenueCat 側の有効化が必要と判断できる。

**サポートへ問い合わせる。** Help center には AI アシスタント（Rico）と
**Contact Support** タブがあり、**Rico に投げても人間のチケットは作られない**
（My support tickets が空のまま）。アカウント側の操作が必要な案件なので、
Rico で解決しなければ Contact Support から人間に送る。問い合わせ文の雛形:

```
Subject: Web Billing: only sandbox public API key (rcb_sb_) is available,
no production key

Our project has a RevenueCat Billing app set up, but under
Project settings → API keys we only see a sandbox public key
(rcb_sb_...). There is no production public key.

Current state:
- Stripe account is connected and fully verified (KYB complete,
  live mode accessible)
- 42 RevenueCat Billing products created, attached to entitlements
- Offering "default" configured with App Store + RevenueCat Billing
  products in each package
- Checkout renders correctly with the sandbox key, but shows the
  yellow SANDBOX banner, so no real payments are possible

Could you tell us what is still required to enable production for
RevenueCat Billing, and where the production public key will appear
once it is enabled?
```

#### RevenueCat サポート（Rico）の回答と、その裏付け（2026-09-16）

本番公開キー（`rcb_`）は、**Billing 設定が紐づく Stripe 接続を RevenueCat が
「ライブモードにアクセスできる」と認識したときに初めて出る。**

> If your connected Stripe account doesn't have access to live mode, only
> RevenueCat sandbox purchases can be made (only sandbox API keys and web
> purchase links will be available).
> — https://www.revenuecat.com/docs/web/connect-stripe-account

原因の候補は2つ:

1. **Billing 設定が Stripe のサンドボックス接続を指している**（最有力）。
   Stripe のサンドボックスは完全に別アカウントなので、そこに RevenueCat の
   Stripe アプリを入れた接続からはサンドボックスキーしか出ない。
2. Test mode の接続で、RevenueCat がライブアクセスを検出できていない。

**日付が原因1を裏付ける**: API keys の作成日は
`QualiZ (RevenueCat Billing)` のサンドボックスキーが **8/22**、
`QualiZ (Stripe)` が **8/27**。**Billing 設定は、ライブ Stripe を繋ぐ
5日前に作られている。** 当時ライブ接続が存在しなかった可能性が高い。

確認場所: RevenueCat → **Account settings**（プロジェクト設定ではない）の
Stripe 接続一覧 → ライブとサンドボックスの接続が並んでいるか。
次に Web / Billing の設定でどちらが選択されているか。
なお **Stripe を接続できるのはプロジェクトのオーナーのみ。**

#### 原因確定（2026-09-16・RevenueCatサポートが実設定を照会）

| App | Type | Stripe account | 作成 |
|---|---|---|---|
| QualiZ (RevenueCat Billing) | `rc_billing` | `acct_…qQ6n4d0r` | 8/22 |
| QualiZ (Stripe) | `stripe` | `acct_…PiPIYFnkuX` | 8/27 |

**`acct_` が異なる = 別アカウント。** Stripe のサンドボックスは独立した
アカウント（`acct_` を持つ）であり、test mode（同一アカウント内）とは違う。
**Billing 設定はサンドボックスの Stripe アカウントに紐づいており、
仕様上サンドボックスキーしか発行されない。**

`…PiPIYFnkuX` がライブの Qualiz kensetu であることは、本セッションで
Stripe アーカイブ時に出た403のエラー文（`on account
'acct_1U7F9rPiPIYFnkuX'`）と一致しており、独立に裏付けられている。

#### 42商品への影響（サポート回答）

- **RevenueCat 側のカタログ構造は安全。** 商品・Entitlement の紐付け・
  Offering のパッケージはいずれも RevenueCat の商品IDを参照しており、
  Stripe アカウントを参照していない。接続を変えてもこれらのレコードは消えない。
- **不確実なのは Stripe 側のオブジェクト。** RevenueCat Billing は接続先の
  Stripe アカウントに対応する product/price を作る。今の42件はサンドボックス
  アカウント側にあり、ライブ側には存在しない。接続を差し替えたときに
  ライブ側へ自動再作成されるのか、作り直しが必要なのかはドキュメントに
  明記されていない。
- **RevenueCat の公式パターンはサンドボックスと本番で2つの Billing 設定を
  持つ形**であり、これは「その場で接続を差し替える」のが想定された道では
  ないことを示唆する。

#### サポート（Rico）の回答（2026-09-16）

| 論点 | 回答 |
|---|---|
| 接続の差し替え | `rc_billing.stripe_account_id` は編集可能なフィールドで、アプリを削除せず live へ再指定できる |
| RevenueCat側のレコード | **残る。** 商品・Entitlement紐付け・Offeringのパッケージはいずれも RevenueCat の商品IDを参照しており、Stripe接続の変更では壊れない |
| **Stripe側の商品/価格** | **未文書＝唯一の未確定点。** 42件はサンドボックス側にあり live 側に存在しない。再指定で live 側へ自動再作成されるのか、存在しない価格を指したまま壊れるのか不明 |
| 新設定を作る場合 | Entitlement と Offering 自体は残るが、**商品ごとの紐付け（product→entitlement / product→package）は作り直し** |
| 2設定の併用 | **これが意図された最終形。** 本番 `rcb_` とサンドボックス `rcb_sb_` を環境別に使い、サンドボックス設定はテスト用に残す |
| API での一括作成 | **可能。** 商品作成・Entitlement紐付け・Package作成・Package紐付けのすべてに v2 エンドポイントがある |

**→ 残る不確定はStripe側の商品の扱い1点のみ。ここだけサポートの確定回答を待つ。
それまで Billing 設定の Stripe 接続を差し替えないこと。**

チケットは **https://app.revenuecat.com/settings/support** から手動で提出する
（Help center のアシスタント経由はチケットAPIが4回連続で失敗した。
RevenueCat側の不具合であり、こちらの操作の問題ではない）。

次に Rico から取得するもの: **v2 API の正確な仕様**（4操作の HTTP メソッド・
パス・必須ボディ・認証ヘッダ形式）。あわせて **商品作成エンドポイントで
Customer-facing Title も設定できるか**を確認する。設定できるなら、今回確認した
42件のTitle入力が二度と発生しない。スクリプトはこのリポジトリ側で書く。

以前サポートへ確認を依頼した3点:

1. 新しい本番 Billing 設定を作る場合、42商品の Entitlement 紐付けと
   Offering のパッケージ登録をやり直す必要があるか
2. 最終形はサンドボックスと本番の2設定を恒久的に併用する形か
3. RevenueCat API (v2) に商品の一括作成・Entitlement紐付けのエンドポイントが
   あるか（作り直しになるならスクリプト化したい）
   → **自前で調査済み・答えは Yes（2026-09-16）**

#### 最悪ケース（作り直し）の作業量は見積もり済み

RevenueCat の REST API v2 は商品の作成と、Entitlement・Offering・Package への
紐付けをプログラムから実行できる。

> RevenueCat's new REST API allows you to programmatically create RevenueCat
> products and attach your products to entitlements, offerings, and packages.
> — https://www.revenuecat.com/blog/engineering/were-rebuilding-our-rest-apis/

したがって「本番用 Billing 設定の下に42商品を作り直す」ことになっても、

1. 42商品の作成
2. Entitlement への紐付け
3. default Offering のパッケージへの登録

をスクリプトで一括実行できる（今日の `scripts/stripe_archive_unused.mjs` と
同じ形）。**手入力42件には戻らない。**

必要なもの: **RevenueCat の Secret API key（v2）**。
これも `sk_` で始まるが **Stripe の `sk_` とは別物**なので混同しないこと。

制約: この環境から revenuecat.com はネットワークポリシーでブロックされており
（上記も検索結果の要約）、エンドポイントの正確な仕様を読めない。
実装時はドキュメントのページを貼ってもらうのが確実。

参考:
- https://www.revenuecat.com/docs/api-v2
- https://www.revenuecat.com/docs/offerings/overview

#### 2設定を併用する場合のコード側の影響

`EXPO_PUBLIC_RC_API_KEY_WEB` は現在1つの値だが、**Vercel の環境変数は
Production / Preview / Development で別の値を設定できる。**

| 環境 | キー |
|---|---|
| Production | `rcb_...`（本番） |
| Preview / Development | `rcb_sb_...`（サンドボックス） |

これでプレビューは安全にテストでき、本番だけが実課金になる。
**コード変更は不要で Vercel の設定だけで済む。**

#### RevenueCat API v2 の仕様（サポートから取得・2026-09-16）

**完全版は `docs/REVENUECAT_API_V2_NOTES.md` に保存した。**
この環境から revenuecat.com は読めないため、あれが唯一の一次資料。
以下は要点のみ。

```
2. 商品をEntitlementに紐付け
   POST /projects/{project_id}/entitlements/{entitlement_id}/products
   { "product_ids": ["prod_abc", "prod_def"] }
   冪等。detach で解除。アーカイブ済みだと 422。

3. 既存Offering内にPackageを作成
   POST /projects/{project_id}/offerings/{offering_id}/packages
   { "lookup_key": "$rc_monthly", "display_name": "Monthly", "position": 1 }
   lookup_key は $rc_monthly / $rc_annual / … / $rc_custom_*
   ※ 既存の "default" Offering のパッケージは再利用できる可能性が高い

4. 商品をPackageに紐付け（2とボディの形が違う）
   POST /projects/{project_id}/packages/{package_id}/products
   { "products": [ { "product_id": "prod_abc", "eligibility_criteria": "all" } ] }
   Web Billing / App Store 商品は "all" を使う。追加式。
```

#### 🔴 決定的な制約: API では価格を設定できない

**RC Billing の商品作成エンドポイントに価格フィールドが無い。**
JPY 価格と請求サイクルは `store_identifier` が指す **Stripe 側の商品・価格**から
取得される（価格設定エンドポイントは `test_store` 専用かつ非推奨）。

→ **API 経路で移行するには、対応する Stripe の商品・価格が
ライブアカウントに先に存在している必要がある。**

#### ✅ その前提は、すでに満たされている

2026-09-16 に `scripts/stripe_products.mjs` で作った42件は
**ライブアカウント `acct_…PiPIYFnkuX` にあり**、金額（¥1,800 / ¥18,000）・
請求間隔（月/年）・通貨（JPY）がすべて一致する。

そして **削除ではなくアーカイブにしたため、Stripe の画面から1クリックで戻せる。**

**🔴 この42件を削除しないこと。** 「未使用だから掃除する」と判断したが、
API 経路を採る場合は必要になる。アーカイブのまま残す。

#### Title（チェックアウトに出る名前）について

チェックアウトに表示されるのは商品の **Name**（顧客向け商品名）で、
API では商品作成時の `title` フィールドが対応する。ただし:

- API の `title` → チェックアウトの Name への対応はドキュメント上未明記。
  **まず1件作ってチェックアウト画面で確認してから42件をスクリプト化する。**
- `title` は**作成時に設定する**もので、既存商品に後から PATCH できるかは未確認。
  どのみち作り直すなら、作成時に正しい値を入れれば誤字問題は恒久的に解決する。

#### ⚠️ 切り替える前に必ず確認すること

Billing 設定の Stripe 接続を切り替える／新しい Billing 設定を作り直す場合、
**すでに作成済みの42商品と Entitlement・Offering への紐付けがどうなるか**が
不明。作り直しになるなら今日と同じ作業をもう一度やることになる。
**サポートに確認してから動く。** 確認せずに切り替えると
「42商品が消えて、しかも本番キーも出ない」状態になりうる。

**急ぐ必要はない。** iOS は App Store 経由で稼働中（この作業で一切触っていない）。
Web はサンドボックスのまま置いておけるため誤課金のリスクはゼロ。
決済フォームの表示までは到達済みで、残るのは RevenueCat 側の有効化のみ。

出典（この環境から revenuecat.com への直接アクセスはネットワークポリシーで
ブロックされており、検索結果の要約に基づく。画面の実物と要確認）:

- https://www.revenuecat.com/docs/web/web-billing/testing
- https://www.revenuecat.com/docs/web/connect-stripe-account
- https://www.revenuecat.com/docs/web/web-billing/web-purchase-links
- https://community.revenuecat.com/general-questions-7/web-billing-config-linked-to-live-stripe-account-only-rcb-sb-key-visible-no-production-rcb-key-7686

### ✅ 済: RevenueCat の Title の頭欠け（2026-09-16 42件確認完了）

**原因確定（2026-09-16）。** RevenueCat → Product catalog → Products →
`qualiz_pro_takkei_m2` → **Customer-facing product details → Title** が

```
Title:       地建物取引士 Pro（月額）        ← 誤り（頭7文字が欠けている）
Description: 宅地建物取引士の全問題・全教科書…  ← 正しい
```

となっていた。**表示の切れではなく、入力値そのものが欠けている。**
Products 一覧に出る商品名（`宅地建物取引士（月額）`）は正しいが、
決済画面が表示するのはこの **Title** の方。

`QualiZ 宅地建物取引士 Pro（月額）` の頭7文字（`QualiZ 宅`）が欠けた形なので、
2026-08-27 の入力時にコピペの選択範囲がずれたと見られる。
**同じ原因で他の商品も欠けている可能性が高いため、42件すべて確認する。**

修正は Customer-facing product details の **Edit** から。
`QualiZ` の接頭辞は不要（決済画面の上部に既に QualiZ と表示されるため重複）。

#### 正しい Title 一覧（42件）

| 商品ID | Title（正しい値） |
|---|---|
| `qualiz_pro_concrete_monthly` | `コンクリート技士 Pro（月額）` |
| `qualiz_pro_concrete_yearly` | `コンクリート技士 Pro（年額）` |
| `qualiz_pro_cost_monthly` | `建築コスト管理士 Pro（月額）` |
| `qualiz_pro_cost_yearly` | `建築コスト管理士 Pro（年額）` |
| `qualiz_pro_denken3_monthly` | `電験三種 Pro（月額）` |
| `qualiz_pro_denken3_yearly` | `電験三種 Pro（年額）` |
| `qualiz_pro_denki2_monthly` | `第二種電気工事士 Pro（月額）` |
| `qualiz_pro_denki2_yearly` | `第二種電気工事士 Pro（年額）` |
| `qualiz_pro_denkisekou_monthly` | `1級電気工事施工管理技士 Pro（月額）` |
| `qualiz_pro_denkisekou_yearly` | `1級電気工事施工管理技士 Pro（年額）` |
| `qualiz_pro_dobokusekou_monthly` | `1級土木施工管理技士 Pro（月額）` |
| `qualiz_pro_dobokusekou_yearly` | `1級土木施工管理技士 Pro（年額）` |
| `qualiz_pro_fp_monthly` | `FP Pro（月額）` |
| `qualiz_pro_fp_yearly` | `FP Pro（年額）` |
| `qualiz_pro_kankoji_monthly` | `1級管工事施工管理技士 Pro（月額）` |
| `qualiz_pro_kankoji_yearly` | `1級管工事施工管理技士 Pro（年額）` |
| `qualiz_pro_kenchiku_monthly` | `建築設備士 Pro（月額）` |
| `qualiz_pro_kenchiku_yearly` | `建築設備士 Pro（年額）` |
| `qualiz_pro_kikaisekou_monthly` | `1級建設機械施工管理技士 Pro（月額）` |
| `qualiz_pro_kikaisekou_yearly` | `1級建設機械施工管理技士 Pro（年額）` |
| `qualiz_pro_kikenbutsu_monthly` | `危険物取扱者乙4 Pro（月額）` |
| `qualiz_pro_kikenbutsu_yearly` | `危険物取扱者乙4 Pro（年額）` |
| `qualiz_pro_kisho_monthly` | `気象予報士 Pro（月額）` |
| `qualiz_pro_kisho_yearly` | `気象予報士 Pro（年額）` |
| `qualiz_pro_koatsu_monthly` | `高圧ガス製造保安責任者 Pro（月額）` |
| `qualiz_pro_koatsu_yearly` | `高圧ガス製造保安責任者 Pro（年額）` |
| `qualiz_pro_kyusui_monthly` | `給水装置工事主任技術者 Pro（月額）` |
| `qualiz_pro_kyusui_yearly` | `給水装置工事主任技術者 Pro（年額）` |
| `qualiz_pro_lpgas_monthly` | `液化石油ガス設備士 Pro（月額）` |
| `qualiz_pro_lpgas_yearly` | `液化石油ガス設備士 Pro（年額）` |
| `qualiz_pro_mansion_monthly` | `マンション管理士 Pro（月額）` |
| `qualiz_pro_mansion_yearly` | `マンション管理士 Pro（年額）` |
| `qualiz_pro_nikkyu_monthly` | `二級建築士 Pro（月額）` |
| `qualiz_pro_nikkyu_yearly` | `二級建築士 Pro（年額）` |
| `qualiz_pro_sekokan_monthly` | `1級建築施工管理技士 Pro（月額）` |
| `qualiz_pro_sekokan_yearly` | `1級建築施工管理技士 Pro（年額）` |
| `qualiz_pro_shobo_monthly` | `消防設備士 Pro（月額）` |
| `qualiz_pro_shobo_yearly` | `消防設備士 Pro（年額）` |
| `qualiz_pro_takkei_monthly` | `宅地建物取引士 Pro（月額）` |
| `qualiz_pro_takkei_yearly` | `宅地建物取引士 Pro（年額）` |
| `qualiz_pro_tsushin_monthly` | `1級電気通信工事施工管理技士 Pro（月額）` |
| `qualiz_pro_tsushin_yearly` | `1級電気通信工事施工管理技士 Pro（年額）` |

`max` の2件は `qualiz_max_monthly` / `qualiz_max_yearly` で、
Products 一覧では `QualiZ Max Pro（月額/年額）` と正しく入っていた
（2026-09-16 の画面で確認）。Title 側も要確認。

### ✅ 済: 法定ページの販売経路（2026-09-17）

法定ページ4本とアプリ内文言が **Apple / Google のアプリ内課金のみ**を
前提にしており、Webのカード決済が未記載だった（13か所）。
特商法は支払方法と解約方法の正確な表示を求めるため、Web公開の必須修正。
**サポート返信待ちとは独立して完了。**

手順と考え方は `LEGAL_PAGES_GUIDE.md` に記録。

未確定: Web購入者に届く解約リンクの実体（`managementURL` が埋まるか）。
文言はメール解約との両対応で書いてあるため、どちらでも成立する。
**本番テスト購入ができたら実際のメールを確認する**（下記 D に追記）。

### ✅ 済: RevenueCat ストアフロント設定の確認（C / 2026-09-17）

左サイドバー **Web → QualiZ (RevenueCat Billing) → App info** タブ。
（Project settings の中ではない）

| 項目 | 値 | 判定 |
|---|---|---|
| App name | `QualiZ` | ✅ チェックアウト・メール・レシートに出る欄 |
| Support email | `info@zaibase.group` | ✅ 特商法・サポートページと一致 |
| Google Play Store URL | 空 | ✅ Android未着手なので正しい |
| Logo | 空 | ✅ ロゴ未選定。アイコンがあれば成立する |
| REST API Identifier | `appa8c271a3d2` | ✅ |

**未入力（ブロッカーではない。任意のタイミングで）**

- Apple App Store URL → `https://apps.apple.com/app/id6789186637`
  （`eas.json` の `ascAppId` と `public/landing.html` の2か所で一致確認済み）
- App icon → `assets/icon.png`。**1MBあるので弾かれたら縮小が必要**

規約URL・返金ポリシーの入力欄は **App info には無い。** RevenueCat Billing に
そもそも該当欄が存在しない可能性が高く、未確認のまま。チェックアウトに
規約リンクを出す必要があるかは、本番テスト購入時に実画面で確認する。

このタブに **「Sandbox API Key」セクションしか無い**ことも確認。
本番キー不在の3つ目の裏付け。

### 参考: 販売事業者名の表示（低優先・専門家確認）

App Store の DEVELOPER は `MASAYA NANJO`、特商法ページの販売事業者は
`Zaibase.group`。屋号運用は実務上あるが、特商法は氏名または法人名の表示を
求めるため、屋号のみで足りるかは要確認。**iOSは審査通過済みで、
Web公開のブロッカーでもない。**

### Stripe からの RevenueCat 権限再承認依頼（2026-09-16 受信 / 別件）

`notifications@stripe.com` → 「RevenueCat の権限とアクセスをご確認ください」。
対象は **`acct_1U7F9rPiPIYFnkuX` = Qualiz kensetu（ライブ）**。

**これはブロッカーとは別件。** ライブ口座に繋がっている RevenueCat アプリは
`QualiZ (Stripe)`（ストア連携）であり、サンドボックスに繋がっている
`QualiZ (RevenueCat Billing)` とは別。承認してもサンドボックス問題は解決しない。

RevenueCat からのチケット返信でもない（差出人が Stripe、参照IDが `em_` 形式。
プラットフォーム側のアプリ更新に伴う一斉配信と読める）。

**それでも承認しておく:** サポートが「RC Billing の接続をライブへ差し替えてよい」と
回答した場合、ライブ接続の権限が古いとそこで詰まる。先に潰せる障害。

**承認は「接続の差し替え」ではない。** 既存接続のスコープ更新であり、
`rc_billing.stripe_account_id` を触らないという取り決めには抵触しない。

手順（**メール内リンクは踏まない**）:

1. `dashboard.stripe.com` に自分でログイン
2. **左上が「Qualiz kensetu」であることを確認**（Zaibase入札ニュースなら即中止）
3. 設定 → アプリ（`settings/apps`）→ RevenueCat
4. **要求スコープを読んでから**承認。商品・価格・サブスクリプション・顧客・
   チェックアウトの読み書きなら妥当。**入金・送金・アカウント設定の変更**が
   含まれていたら承認せず内容を確認する

#### 通知の宛先について

この通知は `info@zaibase.group` ではなく **`masaya.happylife@gmail.com` に直送**
された。Stripe アカウントの登録メールが Gmail 側であることを意味する。

RevenueCat のサポートチケットは `info@zaibase.group` から送信済み。
**返信が来ない場合、アカウント照合ができていない可能性がある。**
数日音沙汰がなければ Gmail からも追送する。

### D. デプロイ後のテスト購入

- [ ] ブラウザのコンソールに CSP 違反が出ていないか
      （出たらそのエラー文から必要なドメインを `vercel.json` に追加）
- [ ] 資格ページで「ただいま購入できません」が出ないか
- [ ] 1件購入して、どの Stripe 商品に請求が乗るか
      （これで未使用42件の判定も確定する）
- [ ] **購入完了メールに解約用の管理リンクがあるか**
      （無ければ法定ページの解約文言をメール解約のみに寄せる。
      `LEGAL_PAGES_GUIDE.md` 9. 参照）
- [ ] チェックアウト画面に規約・返金ポリシーのリンクが出るか
      （出ないなら別途どこかに表示する必要があるか検討）

## ⏸ 保留していいもの

| 項目 | 状態 | 詳細 |
|---|---|---|
| 消費税 | RevenueCat 側 OFF のままが正しい。**公開の必須条件ではない** | `REVENUECAT_AUDIT.md` 5. |
| ~~Stripe 商品42件のアーカイブ~~ | **✅ 完了 2026-09-16（42/42）** | `scripts/stripe_archive_unused.mjs` |
| RevenueCat の表示名20件 | 内部表示のみ・次回 | `REVENUECAT_AUDIT.md` 4. |
| ロゴ | 未選定 | — |

---

## 作業順

Stripe の認証は済んでいるため、**前提条件による待ちは無い。**

```
1. 最新コミットを本番デプロイ      ← A。残っているのはこれだけ
2. B と C を確認（Billing タブ）
3. テスト購入（D）
4. ✅ Stripe 商品42件のアーカイブ（完了）
```

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

### 🔴 Stripeアカウントが2つある — 取り違え厳禁

| アカウント | シークレットキー | 用途 |
|---|---|---|
| **Qualiz kensetu** | `sk_live_...U8ZE` | QualiZ。ローテーション対象 |
| **Zaibase入札ニュース** | `sk_live_...Gl0C` | **別事業。稼働中。絶対に触らない** |

Zaibase入札ニュース側の最終使用日が当日になっているのは、稼働中の
本番システムが毎日そのキーを使っているためで、正常。
**こちらをローテーションするとその事業が止まる。**

作業前に必ず**ダッシュボード左上のアカウント名**を確認する。

### 商品が混ざっていないことの確認

`scripts/stripe_products.mjs` の実行結果は「既存18件スキップ／
価格のみ8件／商品ごと16件」だった。既存判定は商品名の完全一致なので、
`QualiZ ...` が既に18件あったアカウント（= Qualiz kensetu）でしか
この結果にならない。Zaibase入札ニュース側に走っていれば一致0件・
42件すべて新規作成になっていたはず。

**確認済み（2026-09-16）: 混ざっていない。**
Zaibase入札ニュースの商品カタログは9件（ZAIBASE クリッククレジット3件、
官公庁入札ニュース Standard/Pro/Max 6件）で、QualiZ の商品は0件。
42商品はすべて Qualiz kensetu 側にある。

なお `scripts/stripe_archive_unused.mjs` は商品名が42件と完全一致する
ものだけを対象にするため、アカウントを取り違えて実行しても
Zaibase の商品には触らない（対象0件で終わる）。

### ローテーション前の確認

`sk_live_` を他のツール（Zapier、自作サーバー等）で使っていないか。
2026-09-16 時点では `scripts/stripe_products.mjs` の実行にしか使われて
いない。Vercel には `rcb_` が入っており、RevenueCat は Stripe アプリ
（OAuth）経由で接続しているため、どちらもこのキーを使っていない。


---

# 付録: 未使用Stripe商品42件のアーカイブ 実行手順

## A. Stripe で権限を設定する

1. `dashboard.stripe.com` を開き、**左上が「Qualiz kensetu」**であることを確認
2. 左メニュー下部の **開発者** → **APIキー** タブ
3. 「制限付きのキー」の該当行 → 右端の **「…」** → **「キーを編集」**
4. 権限を3つ設定する

   | 「リソースを絞り込む」に打つ | 出てきた行の右端で押す |
   |---|---|
   | `Products` | 書き込み |
   | `Prices` | 書き込み |
   | `Subscriptions` | 読み取り |

   1つ設定したら検索ボックスを空にして次の単語を打つ。似た名前の行
   （`Subscription Schedules` 等）は「なし」のままにする。
5. 下までスクロールして **保存**

制限付きキーが無い場合は「+ 制限付きのキーを作成」→ 使用方法は
**「構築した連携を強化」**（「AIエージェントのオーソリ」ではない）。

## B. ターミナル（macOS の Xcode ライセンス）

`git` が「You have not agreed to the Xcode and Apple SDKs license」で
止まった場合:

6. `q` を押してページャーを抜ける（抜けなければ `Control + C`）
7. `sudo xcodebuild -license accept`（Macのパスワードを入力）

## C. 実行

8. ```bash
   cd ~/ahiru
   git pull origin claude/app-identification-k8js9v
   ```
9. `export STRIPE_SECRET_KEY=` の後ろに値をペースト
   （**値は引数に書かない。チャットにも貼らない**）
10. `node scripts/stripe_archive_unused.mjs` — 確認のみ。何も変更しない
11. 出力を確認
12. `node scripts/stripe_archive_unused.mjs --apply` — 本番実行

A を飛ばしても安全。10 が403で止まるだけで商品には触らず、
エラー文が必要な権限を表示する。

## D. 後片付け

13. Stripe で そのキーの「…」→ **「キーを期限切れにする」**
    （制限付きキーは削除できる。標準キーはローテーションのみ）
14. `unset STRIPE_SECRET_KEY`
15. `~/.zsh_history` から `export STRIPE_SECRET_KEY=` の行を削除

## キーの値が分からなくなったとき

Stripe は作成時にしか値を表示しない。「…」→ **キーのローテーション** →
有効期限 **「今すぐ」** で値を再発行できる。**権限設定は引き継がれる。**
猶予期間を選ぶとその間は古い値も有効なままなので、漏洩対応では
必ず「今すぐ」を選ぶ。
