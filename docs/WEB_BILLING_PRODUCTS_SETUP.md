# RevenueCat Web Billing 商品作成 対応表

`QualiZ (RevenueCat Billing)` アプリの Products タブで、1件ずつ「+ Add product」から作成する。
全項目共通のルール：

- **Product type**: Auto-renewing subscription
- **Free trial / Introductory period / Grace period**: すべてチェック不要
- **Billing cycle**: 表の「月額/年額」に合わせて Monthly / Yearly を選ぶ
- 保存後、必ず **Associated Entitlements → Attach** で該当Entitlementを紐付ける
- 通貨は JPY で入力（プロジェクトのDefault currencyが既にJPYなので数字だけ入れればよい）

進捗管理用に、完了したら `[ ]` を `[x]` に変えて使ってください。

---

## 1. 宅地建物取引士 — ✅ 月額は完了済み

- [x] Identifier: `qualiz_pro_takkei_monthly` / Display name: `宅地建物取引士（月額）` / Name: `宅地建物取引士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_takkei`
- [ ] Identifier: `qualiz_pro_takkei_yearly` / Display name: `宅地建物取引士（年額）` / Name: `宅地建物取引士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_takkei`
- Description（共通）: `宅地建物取引士の全問題・全教科書・模擬試験が使い放題になります。`

## 2. FP（ファイナンシャルプランナー）

- [ ] Identifier: `qualiz_pro_fp_monthly` / Display name: `FP（月額）` / Name: `FP Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_fp`
- [ ] Identifier: `qualiz_pro_fp_yearly` / Display name: `FP（年額）` / Name: `FP Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_fp`
- Description（共通）: `ファイナンシャルプランナーの全問題・全教科書・模擬試験が使い放題になります。`

## 3. マンション管理士

- [ ] Identifier: `qualiz_pro_mansion_monthly` / Display name: `マンション管理士（月額）` / Name: `マンション管理士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_mansion`
- [ ] Identifier: `qualiz_pro_mansion_yearly` / Display name: `マンション管理士（年額）` / Name: `マンション管理士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_mansion`
- Description（共通）: `マンション管理士の全問題・全教科書・模擬試験が使い放題になります。`

## 4. 建築設備士

- [ ] Identifier: `qualiz_pro_kenchiku_monthly` / Display name: `建築設備士（月額）` / Name: `建築設備士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_kenchiku`
- [ ] Identifier: `qualiz_pro_kenchiku_yearly` / Display name: `建築設備士（年額）` / Name: `建築設備士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_kenchiku`
- Description（共通）: `建築設備士の全問題・全教科書・模擬試験が使い放題になります。`

## 5. 電験三種

- [ ] Identifier: `qualiz_pro_denken3_monthly` / Display name: `電験三種（月額）` / Name: `電験三種 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_denken3`
- [ ] Identifier: `qualiz_pro_denken3_yearly` / Display name: `電験三種（年額）` / Name: `電験三種 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_denken3`
- Description（共通）: `電験三種の全問題・全教科書・模擬試験が使い放題になります。`

## 6. 気象予報士

- [ ] Identifier: `qualiz_pro_kisho_monthly` / Display name: `気象予報士（月額）` / Name: `気象予報士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_kisho`
- [ ] Identifier: `qualiz_pro_kisho_yearly` / Display name: `気象予報士（年額）` / Name: `気象予報士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_kisho`
- Description（共通）: `気象予報士の全問題・全教科書・模擬試験が使い放題になります。`

## 7. 1級建築施工管理技士

- [ ] Identifier: `qualiz_pro_sekokan_monthly` / Display name: `1級建築施工管理技士（月額）` / Name: `1級建築施工管理技士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_sekokan`
- [ ] Identifier: `qualiz_pro_sekokan_yearly` / Display name: `1級建築施工管理技士（年額）` / Name: `1級建築施工管理技士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_sekokan`
- Description（共通）: `1級建築施工管理技士の全問題・全教科書・模擬試験が使い放題になります。`

## 8. 1級管工事施工管理技士

- [ ] Identifier: `qualiz_pro_kankoji_monthly` / Display name: `1級管工事施工管理技士（月額）` / Name: `1級管工事施工管理技士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_kankoji`
- [ ] Identifier: `qualiz_pro_kankoji_yearly` / Display name: `1級管工事施工管理技士（年額）` / Name: `1級管工事施工管理技士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_kankoji`
- Description（共通）: `1級管工事施工管理技士の全問題・全教科書・模擬試験が使い放題になります。`

## 9. 1級電気工事施工管理技士

- [ ] Identifier: `qualiz_pro_denkisekou_monthly` / Display name: `1級電気工事施工管理技士（月額）` / Name: `1級電気工事施工管理技士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_denkisekou`
- [ ] Identifier: `qualiz_pro_denkisekou_yearly` / Display name: `1級電気工事施工管理技士（年額）` / Name: `1級電気工事施工管理技士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_denkisekou`
- Description（共通）: `1級電気工事施工管理技士の全問題・全教科書・模擬試験が使い放題になります。`

## 10. 1級建設機械施工管理技士

- [ ] Identifier: `qualiz_pro_kikaisekou_monthly` / Display name: `1級建設機械施工管理技士（月額）` / Name: `1級建設機械施工管理技士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_kikaisekou`
- [ ] Identifier: `qualiz_pro_kikaisekou_yearly` / Display name: `1級建設機械施工管理技士（年額）` / Name: `1級建設機械施工管理技士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_kikaisekou`
- Description（共通）: `1級建設機械施工管理技士の全問題・全教科書・模擬試験が使い放題になります。`

## 11. 1級土木施工管理技士

- [ ] Identifier: `qualiz_pro_dobokusekou_monthly` / Display name: `1級土木施工管理技士（月額）` / Name: `1級土木施工管理技士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_dobokusekou`
- [ ] Identifier: `qualiz_pro_dobokusekou_yearly` / Display name: `1級土木施工管理技士（年額）` / Name: `1級土木施工管理技士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_dobokusekou`
- Description（共通）: `1級土木施工管理技士の全問題・全教科書・模擬試験が使い放題になります。`

## 12. 建築コスト管理士

- [ ] Identifier: `qualiz_pro_cost_monthly` / Display name: `建築コスト管理士（月額）` / Name: `建築コスト管理士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_cost`
- [ ] Identifier: `qualiz_pro_cost_yearly` / Display name: `建築コスト管理士（年額）` / Name: `建築コスト管理士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_cost`
- Description（共通）: `建築コスト管理士の全問題・全教科書・模擬試験が使い放題になります。`

## 13. 給水装置工事主任技術者

- [ ] Identifier: `qualiz_pro_kyusui_monthly` / Display name: `給水装置工事主任技術者（月額）` / Name: `給水装置工事主任技術者 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_kyusui`
- [ ] Identifier: `qualiz_pro_kyusui_yearly` / Display name: `給水装置工事主任技術者（年額）` / Name: `給水装置工事主任技術者 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_kyusui`
- Description（共通）: `給水装置工事主任技術者の全問題・全教科書・模擬試験が使い放題になります。`

## 14. 消防設備士（甲種）

- [ ] Identifier: `qualiz_pro_shobo_monthly` / Display name: `消防設備士（月額）` / Name: `消防設備士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_shobo`
- [ ] Identifier: `qualiz_pro_shobo_yearly` / Display name: `消防設備士（年額）` / Name: `消防設備士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_shobo`
- Description（共通）: `消防設備士（甲種）の全問題・全教科書・模擬試験が使い放題になります。`

## 15. 危険物取扱者（乙種第4類）

- [ ] Identifier: `qualiz_pro_kikenbutsu_monthly` / Display name: `危険物取扱者乙4（月額）` / Name: `危険物取扱者乙4 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_kikenbutsu`
- [ ] Identifier: `qualiz_pro_kikenbutsu_yearly` / Display name: `危険物取扱者乙4（年額）` / Name: `危険物取扱者乙4 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_kikenbutsu`
- Description（共通）: `危険物取扱者（乙種第4類）の全問題・全教科書・模擬試験が使い放題になります。`

## 16. コンクリート技士・診断士

- [ ] Identifier: `qualiz_pro_concrete_monthly` / Display name: `コンクリート技士（月額）` / Name: `コンクリート技士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_concrete`
- [ ] Identifier: `qualiz_pro_concrete_yearly` / Display name: `コンクリート技士（年額）` / Name: `コンクリート技士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_concrete`
- Description（共通）: `コンクリート技士・コンクリート診断士の全問題・全教科書・模擬試験が使い放題になります。`

## 17. 1級電気通信工事施工管理技士

- [ ] Identifier: `qualiz_pro_tsushin_monthly` / Display name: `1級電気通信工事施工管理技士（月額）` / Name: `1級電気通信工事施工管理技士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_tsushin`
- [ ] Identifier: `qualiz_pro_tsushin_yearly` / Display name: `1級電気通信工事施工管理技士（年額）` / Name: `1級電気通信工事施工管理技士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_tsushin`
- Description（共通）: `1級電気通信工事施工管理技士の全問題・全教科書・模擬試験が使い放題になります。`

## 18. 二級建築士

- [ ] Identifier: `qualiz_pro_nikkyu_monthly` / Display name: `二級建築士（月額）` / Name: `二級建築士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_nikkyu`
- [ ] Identifier: `qualiz_pro_nikkyu_yearly` / Display name: `二級建築士（年額）` / Name: `二級建築士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_nikkyu`
- Description（共通）: `二級建築士の全問題・全教科書・模擬試験が使い放題になります。`

## 19. 第二種電気工事士

- [ ] Identifier: `qualiz_pro_denki2_monthly` / Display name: `第二種電気工事士（月額）` / Name: `第二種電気工事士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_denki2`
- [ ] Identifier: `qualiz_pro_denki2_yearly` / Display name: `第二種電気工事士（年額）` / Name: `第二種電気工事士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_denki2`
- Description（共通）: `第二種電気工事士の全問題・全教科書・模擬試験が使い放題になります。`

## 20. 液化石油ガス設備士

- [ ] Identifier: `qualiz_pro_lpgas_monthly` / Display name: `液化石油ガス設備士（月額）` / Name: `液化石油ガス設備士 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_lpgas`
- [ ] Identifier: `qualiz_pro_lpgas_yearly` / Display name: `液化石油ガス設備士（年額）` / Name: `液化石油ガス設備士 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_lpgas`
- Description（共通）: `液化石油ガス設備士の全問題・全教科書・模擬試験が使い放題になります。`

## 21. 高圧ガス製造保安責任者

- [ ] Identifier: `qualiz_pro_koatsu_monthly` / Display name: `高圧ガス製造保安責任者（月額）` / Name: `高圧ガス製造保安責任者 Pro（月額）` / Billing cycle: Monthly / 価格: 1800 / Entitlement: `pro_koatsu`
- [ ] Identifier: `qualiz_pro_koatsu_yearly` / Display name: `高圧ガス製造保安責任者（年額）` / Name: `高圧ガス製造保安責任者 Pro（年額）` / Billing cycle: Yearly / 価格: 18000 / Entitlement: `pro_koatsu`
- Description（共通）: `高圧ガス製造保安責任者の全問題・全教科書・模擬試験が使い放題になります。`

---

## 全部終わったら

1. RevenueCatの **Web → Offerings**（または通常のOfferings画面）で、Web用のOfferingを作り、42商品すべてを追加する
2. `services/subscription.ts` にWeb課金用のコードを実装（こちらは私が担当します）
