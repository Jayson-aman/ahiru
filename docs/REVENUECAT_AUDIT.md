# RevenueCat ダッシュボード 点検メモ（2026-09-16）

Offerings と Entitlements の画面を目視で照合した結果。

---

## 1. 🔴 危険物の月額パッケージに年額のWeb商品が入っている

```
qualiz_pro_kikenbutsu_monthly
  [Apple] 危険物取扱者乙4（月額）  qualiz_pro_kikenbutsu_monthly   ← 正しい
  [RC]    危険物取扱者乙4（年額）  qualiz_pro_kikenbutsu_yearly    ← 誤り
```

`components/CertPaywall.tsx` の `findPackage()` は「月額」の要求に対して
このパッケージを選び、`services/webBilling.web.ts` の `purchasePackageWeb()`
がパッケージ内のWeb商品をそのまま購入に渡す。
→ **Webで「月額 ¥1,800」を押した利用者に ¥18,000/年 が請求される。**

- iOS は Apple 側の商品が正しいため影響なし。
- Web課金は本番未公開のため、実際の誤請求は発生していない。

**直し方**: Offerings → `default` → 該当パッケージの RC 商品を外し、
`qualiz_pro_kikenbutsu_monthly` を付け直す。

**未確認**: 残り41パッケージで同じ取り違えが無いか。各パッケージの
Apple 行と RC 行が「月額の中に月額」「年額の中に年額」になっているかを
全件目視すること。1件だけこうなる理由が無いため、他にもある前提で確認する。

## 2. パッケージ識別子のタイプミス（対応不要）

`ualiz_pro_tsushin_monthly` — 先頭の `q` が欠けている。

アプリは壊れない。`findPackage()` はパッケージ識別子と商品IDを連結して
部分一致で照合し、商品ID側は `qualiz_pro_tsushin_monthly` と正しいため
`tsushin` + `month` で一致する。RevenueCat の識別子は後から変更できないので、
直すにはパッケージの作り直しが必要。優先度は低い。

## 3. Web商品の紐付けは完了している

全パッケージが Apple + RC の2件セットになっている。
Entitlement 一覧の「4 products」は **iOS 2件 + Web 2件**。

`pro_juken` / `pro_eiken` の「2 products」は想定どおり
（中学受験・英検は Web課金の42件に含めていない）。

## 3b. 宅建の月額商品に旧称が残っている

`pro_takkei` の Associated products 4件のうち、1件だけ資格名が違う。

| 商品 | 名前 | App | 作成日 |
|---|---|---|---|
| `qualiz_pro_takkei_m2` | 宅地建物取引**主任**士（月額） | App Store | Aug 1 |
| `qualiz_pro_takkei_y2` | 宅地建物取引士（年額） | RevenueCat Billing | Aug 27 |
| `qualiz_pro_takkei_y2` | 宅地建物取引士（年額） | App Store | Aug 27 |
| `qualiz_pro_takkei_m2` | 宅地建物取引士（月額） | RevenueCat Billing | Aug 27 |

**App Store Connect は確認済み・問題なし（2026-09-16）。**
サブスクリプショングループ「宅地建物取引士　QualiZ Pro」の参照名は
`qualiz_pro_takkei_m2` が「宅地建物取引士　QualiZ Pro（月額）」、
`qualiz_pro_takkei_y2` が「宅地建物取引士 QualiZ Pro（年額）」で、
どちらも正しい。**審査リスクはない。**

つまり「宅地建物取引主任士」は RevenueCat の商品表示名だけの誤りで、
RevenueCat ダッシュボード内でしか使われず顧客には表示されない。
優先度は低い。

**判断（2026-09-16）: 対応は次回リリースに繰り延べ。**
顧客に見える箇所に誤りはなく、1.3.2 の審査も通過済み。RevenueCat側の
表示名は 4. の20件とまとめて直す。

### サブスクリプションのレベル順（要検討・急ぎではない）

却下済みの旧2件（`qualiz_pro_takkei_monthly` / `_yearly`）がレベル1・2を
占めており、稼働中の `_m2` / `_y2` がレベル3・4に入っている。

ASCのレベルは同一グループ内での乗り換え時に即時切替か次回更新待ちかを
決めるため、現状は月額（レベル3）が年額（レベル4）より上位で、
**年額→月額が即時、月額→年額が次回更新時**という扱いになる。
年額に切り替えたい利用者が待たされる向き。

月額と年額を同じレベルに置けば乗り換え扱いになる（ASCの画面にも
「各レベルには複数のサブスクリプションを追加できます」とある）。
ただし21グループ分の手作業。**実施前にAppleのドキュメントで挙動を
確認すること**（上記は未検証の記憶に基づく）。

これも次回リリース以降で検討する。

なお月額・年額の紐付け自体は正しい（App Store と RevenueCat Billing の
両方に m2 / y2 が揃っている）。1. の危険物の問題は **Offering のパッケージ**の
中身であって、この Entitlement の画面とは別。確認すべきはOfferingsの画面。

## 3c. 🔴 Stripe に作った42商品は使われない

`scripts/stripe_products.mjs` で Stripe API に作成した42件は、
**どこからも参照されない**。作る場所が間違っていた。

商品を作るのは `docs/WEB_BILLING_PRODUCTS_SETUP.md` の冒頭にあるとおり
**RevenueCat の Products タブ**。RevenueCat Billing は Stripe 側の商品・価格を
RevenueCat が自分で作って管理する。購入経路は

    @revenuecat/purchases-js → RevenueCat → RevenueCatが作ったStripe商品

裏付け: RevenueCat Billing の商品は 2026-08-27 に既に作られており
Entitlement に紐付いている。またドキュメントの表の宅建の行は
`qualiz_pro_takkei_monthly` / `_yearly` だが実際は `_m2` / `_y2` なので、
スクリプトが付けた `lookup_key` はそもそも存在しないIDだった。

- 課金は発生しない。未使用商品は無料で、顧客にも表示されない。
- 放置すると Stripe の商品一覧に未使用の42件が残り、後で見た人が混乱する。
- **対処はアーカイブ**（削除ではなくアーカイブなら元に戻せる）。
- 確認方法: Webで1件テスト購入し、Stripe のどの商品に請求が乗るかを見る。
  この42件でなければ未使用と確定する。

スクリプトは `--yes-i-know-this-is-unused` なしでは実行できないようにした。

---

## 4. Entitlement / Offering の Display Name 修正一覧

**これらは RevenueCat ダッシュボード内でのみ使われる内部名で、顧客には
表示されない**（顧客が見るのは App Store Connect の商品名と Stripe の商品名）。
審査リスクではなく、作業ミス防止のための整備。

2026-07-13・07-27 作成分は `Quailz`（`a` と `i` が逆）、08-03 作成分は
`QualiZ` で正しく、08-21 作成のガス2件は接頭辞なし。

| Identifier | 現在 | 正しい |
|---|---|---|
| （Offering `default`） | `Quailz` | `QualiZ` |
| `pro_takkei` | Quailz 宅地建物取引主任士 | QualiZ 宅地建物取引士 |
| `pro_fp` | Quailz フィナンシャルプランナー | QualiZ ファイナンシャルプランナー |
| `pro_mansion` | Quailz マンション管理士 | QualiZ マンション管理士 |
| `pro_kenchiku` | Quailz 建築設備士 | QualiZ 建築設備士 |
| `pro_denken3` | Quailz 電験３種 | QualiZ 電験三種 |
| `pro_kisho` | Quailz␣␣気象予報士 | QualiZ 気象予報士 |
| `pro_juken` | Quailz 中学受験 | QualiZ 中学受験 |
| `pro_eiken` | Quailz 英検2・3・4級 | QualiZ 英検2・3・4級 |
| `pro_sekokan` | Quailz 一級建築施工管理技士 | QualiZ 1級建築施工管理技士 |
| `pro_kankoji` | Quailz 一級管工事施工管理技士 | QualiZ 1級管工事施工管理技士 |
| `pro_denkisekou` | Quailz 一級電気施工管理技士 | QualiZ 1級電気工事施工管理技士 |
| `pro_kikaisekou` | Quailz 一級機械施工管理技士 | QualiZ 1級建設機械施工管理技士 |
| `pro_dobokusekou` | Quailz 一級土木施工管理技士 | QualiZ 1級土木施工管理技士 |
| `max` | Quailz MAX | QualiZ MAX |
| `pro_cost` | Quailz 建設コスト管理士 | QualiZ 建築コスト管理士 |
| `pro_kyusui` | Quailz 給水装置 | QualiZ 給水装置工事主任技術者 |
| `pro_shobo` | Quailz 消防設備士 | QualiZ 消防設備士 |
| `pro_kikenbutsu` | QualiZ 危険物␣␣乙4 | QualiZ 危険物取扱者乙4 |
| `pro_tsushin` | QualiZ 電気通信工事施工管理技士 | QualiZ 1級電気通信工事施工管理技士 |
| `pro_lpgas` | 液化石油ガス設備士 | QualiZ 液化石油ガス設備士 |
| `pro_koatsu` | 高圧ガス製造保安責任者 | QualiZ 高圧ガス製造保安責任者 |

`pro_concrete` / `pro_nikkyu` / `pro_denki2` は既に正しい。

### `pro_cost` の資格名について

アプリ本体（`app/(tabs)/index.tsx`）と App Store Connect は
「**建築**コスト管理士」に修正済みだが、RevenueCat に旧称
「**建設**コスト管理士」が残っている。表示名なので審査には出ないが、
**Stripe と ASC の商品名が「建築」になっているかは別途確認が必要**。

---

## 4b. 🔴 Web課金のAPIキー取得先（要確認）

`services/webBilling.web.ts` のコメントが「`QualiZ (Stripe)` の
Public API Key（`strp_`）を使う」と指示していたが、これは誤り。
`b819e81` でコメントを訂正済み。

`@revenuecat/purchases-js` の `Package` が持つ商品は
`rcBillingProduct`（非推奨）と `webBillingProduct` の2つだけで、
Stripeストアの商品を読むフィールドが型定義に存在しない
（`node_modules/@revenuecat/purchases-js/dist/Purchases.es.d.ts` の `Package`）。

- 必要なのは **RevenueCat Billing** アプリの公開キー（`rcb_`）。
- `strp_` を設定すると全パッケージで商品が読めず、どの資格でも
  「ただいま購入できません」になる。
- 同じ理由で、Offering の各パッケージは App Store と RevenueCat Billing
  にだけ商品を割り当て、**Stripe の行は空のままが正しい**。

**要確認: 本番の `EXPO_PUBLIC_RC_API_KEY_WEB` が `rcb_` で始まっているか。**

## 5. 消費税の自動計算（未着手）

順序を守ること。1 が先でないと 2 が効かない。

1. **Stripe ダッシュボード（本番モード）で税務登録を追加**
   登録を追加した時点から、該当地域の税が新規購入に適用される。
2. **RevenueCat → Billing タブ → Tax**
   税計算を有効化 → プロバイダに Stripe Tax を選択 →
   商品税コードに `txcd_10000000`（一般 - 電子的に提供されるサービス）を設定。

税コードは**RevenueCat側で一括指定する**。Stripe の42商品それぞれに
`tax_code` を設定する必要はない。

**順序を逆にするとチェックアウトがエラー画面になる。**
`@revenuecat/purchases-js` に以下のエラーが定義されている:

- `StripeTaxNotActive` — RevenueCat側で税計算を有効にしたが Stripe Tax が未有効
- `StripeInvalidTaxOriginAddress` — Stripe の所在地（事業所住所）が不正
- `StripeMissingRequiredPermission`

つまり Stripe Tax は任意の飾りではない。Stripe 側の税務登録と
事業所住所を済ませてから RevenueCat を有効化すること。

未確認事項: 日本の法人顧客が登録番号を提示した場合の免税扱い
（B2B リバースチャージ）をどうするかは税務判断が必要。
