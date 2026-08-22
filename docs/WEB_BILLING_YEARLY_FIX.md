# 年額(yearly)商品 作り直しチェックリスト

## 何が起きたか

21件の `_yearly` 商品すべてが、作成時に **Billing cycle を Monthly から Yearly に変更し忘れた**まま保存されていた（`qualiz_pro_koatsu_yearly` で発覚、確認の結果21件全部が同じ状態）。

RevenueCatは商品保存後にBilling cycle・価格を編集できないため、**全21件を削除して作り直す**必要がある。

## 手順（1商品につき）

1. Products一覧で対象の `_yearly` 商品を開く
2. ページ下部（または「...」メニュー）から **Delete product**
   - すでにEntitlementにAttach済み・Offeringに追加済みでも、削除すれば紐付けごと消える（後で作り直して再度Attach・再選択すればよい）
3. **New Product** で以下の内容で再作成。**Billing cycle は必ず Yearly を選ぶこと**
4. 保存後、**Associated Entitlements → Attach** で該当Entitlementを紐付け
5. `default` Offeringの該当Packageを開き、「QualiZ (RevenueCat Billing)」の選択を新しい商品に選び直す
6. 下のチェックボックスを `[x]` にする

Product type: Auto-renewing subscription / Free trial・Introductory period・Grace period: なし / 通貨: JPY

---

- [ ] `qualiz_pro_takkei_yearly` / 宅地建物取引士（年額）/ Pro（年額）/ 18000 / `pro_takkei`
- [ ] `qualiz_pro_fp_yearly` / FP（年額）/ FP Pro（年額）/ 18000 / `pro_fp`
- [ ] `qualiz_pro_mansion_yearly` / マンション管理士（年額）/ Pro（年額）/ 18000 / `pro_mansion`
- [ ] `qualiz_pro_kenchiku_yearly` / 建築設備士（年額）/ Pro（年額）/ 18000 / `pro_kenchiku`
- [ ] `qualiz_pro_denken3_yearly` / 電験三種（年額）/ Pro（年額）/ 18000 / `pro_denken3`
- [ ] `qualiz_pro_kisho_yearly` / 気象予報士（年額）/ Pro（年額）/ 18000 / `pro_kisho`
- [ ] `qualiz_pro_sekokan_yearly` / 1級建築施工管理技士（年額）/ Pro（年額）/ 18000 / `pro_sekokan`
- [ ] `qualiz_pro_kankoji_yearly` / 1級管工事施工管理技士（年額）/ Pro（年額）/ 18000 / `pro_kankoji`
- [ ] `qualiz_pro_denkisekou_yearly` / 1級電気工事施工管理技士（年額）/ Pro（年額）/ 18000 / `pro_denkisekou`
- [ ] `qualiz_pro_kikaisekou_yearly` / 1級建設機械施工管理技士（年額）/ Pro（年額）/ 18000 / `pro_kikaisekou`
- [ ] `qualiz_pro_dobokusekou_yearly` / 1級土木施工管理技士（年額）/ Pro（年額）/ 18000 / `pro_dobokusekou`
- [ ] `qualiz_pro_cost_yearly` / 建築コスト管理士（年額）/ Pro（年額）/ 18000 / `pro_cost`
- [ ] `qualiz_pro_kyusui_yearly` / 給水装置工事主任技術者（年額）/ Pro（年額）/ 18000 / `pro_kyusui`
- [ ] `qualiz_pro_shobo_yearly` / 消防設備士（年額）/ Pro（年額）/ 18000 / `pro_shobo`
- [ ] `qualiz_pro_kikenbutsu_yearly` / 危険物取扱者乙4（年額）/ Pro（年額）/ 18000 / `pro_kikenbutsu`
- [ ] `qualiz_pro_concrete_yearly` / コンクリート技士（年額）/ Pro（年額）/ 18000 / `pro_concrete`
- [ ] `qualiz_pro_tsushin_yearly` / 1級電気通信工事施工管理技士（年額）/ Pro（年額）/ 18000 / `pro_tsushin`
- [ ] `qualiz_pro_nikkyu_yearly` / 二級建築士（年額）/ Pro（年額）/ 18000 / `pro_nikkyu`
- [ ] `qualiz_pro_denki2_yearly` / 第二種電気工事士（年額）/ Pro（年額）/ 18000 / `pro_denki2`
- [ ] `qualiz_pro_lpgas_yearly` / 液化石油ガス設備士（年額）/ Pro（年額）/ 18000 / `pro_lpgas`
- [ ] `qualiz_pro_koatsu_yearly` / 高圧ガス製造保安責任者（年額）/ Pro（年額）/ 18000 / `pro_koatsu`

Description は各資格とも共通で「{資格名}の全問題・全教科書・模擬試験が使い放題になります。」（例外: 危険物取扱者乙4は「危険物取扱者（乙種第4類）の...」、消防設備士は「消防設備士（甲種）の...」、コンクリート技士は「コンクリート技士・コンクリート診断士の...」）
