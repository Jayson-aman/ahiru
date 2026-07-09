# QualiZ（クオリズ） — ストア公開ガイド（完全手順書）

最終更新: 2026-07-06
対象: iOS (App Store) / Android (Google Play) / Web

アプリ側の公開準備（アプリ名・法的ページ・再現問題表記・課金画面の審査対応）は実装済みです。
このガイドは、**あなたのアカウントで行う作業**を、順番どおりに実行できるように書いています。

---

## STEP 0. いますぐできる2つの作業（5分）

### 0-1. 特商法の事業者名を記入する【法律上必須】

`data/legal_texts.ts` の先頭にあるこの行を書き換えてください:

```ts
export const SELLER_NAME = '【公開前に事業者名（個人の場合は氏名）を記入】';
```

- 個人で販売する場合 → 戸籍上の氏名（例: `'山田 太郎'`）
- 法人の場合 → 登記上の商号（例: `'株式会社◯◯'`）

1行変えるだけで、アプリ内の特商法ページ（販売事業者・運営責任者の2箇所）に反映されます。
連絡先メールを変えたい場合は同ファイルの `CONTACT_EMAIL` を変更します。

### 0-2. プライバシーポリシーの「WebページURL」を用意する【審査必須】

App Store Connect / Google Play Console は、**ブラウザで開けるプライバシーポリシーURL**の入力が必須です
（アプリ内ページだけでは審査を通せません）。

このリポジトリの `docs/legal/` に静的HTML版（privacy.html / terms.html / tokushoho.html）を用意してあります。
公開方法はどちらでも構いません:

- **方法A: GitHub Pages（無料・最速）**
  1. このブランチを main にマージ
  2. GitHub のリポジトリ → Settings → Pages → Source: `Deploy from a branch`、Branch: `main` / `/docs` を選択 → Save
  3. 数分後、以下のURLで公開されます:
     - `https://jayson-aman.github.io/ahiru/legal/privacy.html`
     - `https://jayson-aman.github.io/ahiru/legal/terms.html`
     - `https://jayson-aman.github.io/ahiru/legal/tokushoho.html`
- **方法B: 独自ドメイン/Vercel等**（Webアプリを公開するならそのドメイン配下に置くのがきれい）

---

## STEP 1. Apple Developer Program 登録（承認まで最大48時間）

1. https://developer.apple.com/programs/ → 「登録」
2. Apple ID でサインイン（2ファクタ認証必須）
3. エンティティ種別: **個人（Individual）** を選択（法人の場合はD-U-N-S番号が必要で+1〜2週間）
4. 年会費 **99 USD/年（日本円で約13,000円）** をカード決済
5. 承認メールが来たら https://appstoreconnect.apple.com にアクセスできることを確認

### 1-2. 有料App契約（これを忘れると課金審査に出せません）

App Store Connect → 「契約 / 税金 / 口座情報」→ **Paid Applications（有料App）契約に同意**し、
- 銀行口座（振込先）
- 税務情報（日本の個人なら W-8BEN をフォームで入力）
を登録します。ここが「保留」のままだとサブスク商品が審査に出せません。

---

## STEP 2. App Store Connect でアプリとサブスク商品を作る

### 2-1. App ID とアプリの作成

1. https://developer.apple.com/account → Certificates, Identifiers & Profiles → Identifiers → 「+」
2. App IDs → App → Bundle ID: **`com.jaysonaman.qualiz`**（明示的・app.jsonと完全一致）
   - Capabilities で **In-App Purchase** にチェック
3. App Store Connect → マイApp → 「+」→ 新規App
   - 名前: `QualiZ（クオリズ）- 国家資格の試験対策`（App Store上の表示名・30文字以内。docs/STORE_LISTING.md参照）
   - プライマリ言語: 日本語 / Bundle ID: 上で作ったもの / SKU: `qualiz-001`

### 2-2. サブスクリプション商品の作成【最重要・仕組みの理解が必要】

**Appleの仕様**: 同じ「サブスクリプショングループ」内の商品は、ユーザーは同時に1つしか購読できません
（同一グループ内はアップグレード/ダウングレード扱いになる）。

このアプリは「宅建Proと電験Proを同時に買う」ことを想定しているので、**資格ごとに別グループ**にします:

| グループ名 | 商品ID（提案） | 価格 |
|---|---|---|
| ZAIBASE Max | `qualiz_max_monthly` / `qualiz_max_yearly` | ¥8,000 / ¥80,000 |
| Pro 宅建 | `qualiz_pro_takkei_monthly` / `_yearly` | ¥5,000 / ¥50,000 |
| Pro FP | `qualiz_pro_fp_monthly` / `_yearly` | ¥5,000 / ¥50,000 |
| Pro マンション管理士 | `qualiz_pro_mansion_monthly` / `_yearly` | 同上 |
| Pro 建築設備士 | `qualiz_pro_kenchiku_monthly` / `_yearly` | 同上 |
| Pro 施工管理技士 | `qualiz_pro_sekokan_monthly` / `_yearly` | 同上 |
| Pro 電験三種 | `qualiz_pro_denken3_monthly` / `_yearly` | 同上 |
| Pro 気象予報士 | `qualiz_pro_kisho_monthly` / `_yearly` | 同上 |
| Pro 管工事 | `qualiz_pro_kankoji_monthly` / `_yearly` | ¥5,000 / ¥50,000 |
| Pro 電気工事 | `qualiz_pro_denkisekou_monthly` / `_yearly` | 同上 |
| Pro 建設機械 | `qualiz_pro_kikaisekou_monthly` / `_yearly` | 同上 |
| Pro 英検 | `qualiz_pro_eiken_monthly` / `_yearly` | ¥500 / ¥5,000 |
| Pro 受験対策 | `qualiz_pro_juken_monthly` / `_yearly` | ¥500 / ¥5,000 |

作成手順（1商品あたり2〜3分 × 20商品）:
1. マイApp → 対象アプリ → 「収益化」→「サブスクリプション」→ グループ作成
2. グループ内で「+」→ 参照名（管理用）と商品ID（上表）を入力
3. 期間: 1か月 or 1年 / 価格: 日本 ¥5,000 など（他国は自動換算でOK）
4. **App Storeローカリゼーション（日本語）**: 表示名（例: 宅建Pro 月額）と説明を入力
5. 審査用スクリーンショット: ペイウォール画面のスクショをアップ（後述のTestFlightビルドから撮影でも可）

> 💡 20商品の作成が大変なら、**最初は「Max 月/年」と主力2資格（宅建・施工管理など）だけ**で公開し、
> 後から追加する方法もあります。アプリ側は entitlement が無い資格は無料枠(10問)のまま動くので壊れません。

### 2-3. アプリのメタデータ

- カテゴリ: 教育
- 年齢制限: 4+
- プライバシーポリシーURL: STEP 0-2 のURL
- **Appプライバシー（栄養ラベル）**の回答:
  - 「識別子 → デバイスID」: 収集する（RevenueCatが匿名IDを使用）／トラッキング目的ではない
  - 「購入 → 購入履歴」: 収集する（サブスク管理目的）
  - それ以外（連絡先情報・位置情報など）: 収集しない
- スクリーンショット: 6.7インチ（iPhone 15 Pro Max等）と12.9インチ（iPad）が必須。
  シミュレータまたはTestFlight実機で、ホーム／問題画面（図解付き解説）／テキスト／模試結果あたりを撮影

---

## STEP 3. RevenueCat の設定（無料プランでOK）

RevenueCat は月間収益 $2,500 まで無料です。

1. https://app.revenuecat.com → サインアップ → 新規プロジェクト「QualiZ」
2. **Apps** → 「+ New」→ App Store → Bundle ID `com.jaysonaman.qualiz`
   - App Store Connect の **In-App Purchase Key（StoreKit 2用のAPIキー）** を発行して登録
     （App Store Connect → ユーザとアクセス → 統合 → アプリ内課金 → キーを生成 → .p8をダウンロード）
3. **Products**: App Store Connect で作った商品IDをインポート（自動取得または手入力）
4. **Entitlements** を作成（アプリのコードと完全一致させること）:
   ```
   pro_takkei, pro_fp, pro_mansion, pro_kenchiku, pro_denken3,
   pro_kisho, pro_juken, pro_eiken, pro_sekokan,
   pro_kankoji, pro_denkisekou, pro_kikaisekou, max
   ```
   - 各資格の月額/年額商品 → その資格の `pro_◯◯` に紐付け
   - `qualiz_max_*` → **`max` と全ての `pro_◯◯` に紐付け**（Maxで全資格解放されるように）
5. **Offerings**: `default` オファリングに全パッケージを追加
   - パッケージ識別子に資格キーを含めてください（例: `takkei_yearly`）。
     アプリは `identifier.includes(certKey)` で該当資格のパッケージを探します
6. **API Keys** → Apple の公開SDKキー（`appl_` で始まる）をコピー

### 3-2. APIキーをアプリに渡す

ローカルの `.env`（コミットしない）:
```
EXPO_PUBLIC_RC_API_KEY_IOS=appl_xxxxxxxxxxxx
EXPO_PUBLIC_RC_API_KEY_ANDROID=goog_xxxxxxxxxxxx
```

EASビルドに埋め込む場合:
```bash
eas env:create --name EXPO_PUBLIC_RC_API_KEY_IOS --value appl_xxxx --environment production
eas env:create --name EXPO_PUBLIC_RC_API_KEY_ANDROID --value goog_xxxx --environment production
```

---

## STEP 4. EAS でビルドして TestFlight へ

```bash
npm install -g eas-cli
eas login                        # Expoアカウント（無料）でログイン
eas init                         # プロジェクトをEASに紐付け（app.jsonにprojectIdが追記される）
eas build --platform ios --profile production
#  → 初回は「Appleアカウントでログインして証明書を自動生成するか」聞かれる → Yes でOK（全部自動管理）
eas submit --platform ios --latest
#  → App Store Connect にアップロードされ、TestFlightに反映（処理15〜30分）
```

### 4-2. TestFlight 実機テストのチェックリスト

- [ ] iPhoneとiPadの両方でレイアウト崩れがないか（特に図解・SVG）
- [ ] **サンドボックス課金**: 設定 → App Store → サンドボックスアカウントでテスト購入
  - 購入 → 全問アンロックされるか
  - 「購入を復元する」→ 復元されるか
  - Max購入 → 全資格が解放されるか
- [ ] ペイウォールの価格表示がApp Store Connectの設定と一致しているか
- [ ] 利用規約・プライバシーポリシー・特商法ページが開くか
- [ ] 機内モード（オフライン）で問題演習が動くか

---

## STEP 5. 審査提出（iOS）

1. App Store Connect → 対象ビルドを選択 → メタデータ入力済みを確認
2. **サブスクリプション商品も同時に審査に出す**（初回は必ずアプリ本体と一緒に提出）
3. 審査メモ（Review Notes）に書いておくとリジェクトされにくい内容:
   ```
   ・本アプリは資格試験学習アプリです。各科目10問まで無料、全問題の利用はサブスクリプション（Pro/Max）が必要です。
   ・課金の確認は、任意の資格 → 科目を選択 → 画面下部のペイウォールから可能です。
   ・「本試験形式問題」はすべて出題傾向を分析して作成したオリジナル問題であり、実際の試験問題の転載ではありません。
   ・アカウント登録機能はなく、学習データは端末内にのみ保存されます。
   ```
4. 審査期間の目安: 1〜3営業日。リジェクトされたら理由が明記されるので、そのまま私に貼り付けてもらえれば対応します。

---

## STEP 6. Google Play（iOSが通ってからでOK）

1. https://play.google.com/console → デベロッパー登録（**初回のみ $25**）
2. アプリ作成 → パッケージ名 `com.jaysonaman.qualiz`
3. 「収益化」→ 定期購入 → iOSと同じ商品構成で作成（商品IDも同じにするとRevenueCat設定が楽）
4. RevenueCat に Play アプリを追加（サービスアカウントJSONで連携）→ `goog_` キーを取得
5. `eas build --platform android --profile production` → `eas submit --platform android`
6. 内部テスト → クローズドテスト（Googleは新規個人アカウントの場合、20人×14日間のクローズドテストが必須）→ 製品版

---

## STEP 7. Web版の公開（任意・いつでも可）

```bash
npx expo export --platform web    # dist/ に静的ファイルが生成される
```

生成された `dist/` を Vercel / Netlify / Cloudflare Pages のいずれかにデプロイするだけです（無料枠で十分）。
Web版は現状「購入導線なし・無料枠で閲覧」の動作になります（モバイルで購入したユーザー向けの
Web閲覧を許可するにはアカウント同期が必要になるため、公開後の次フェーズとして検討）。

---

## よくあるリジェクト理由と本アプリでの対策状況

| 審査項目 | 状況 |
|---|---|
| 3.1.2 サブスクの自動更新説明・規約リンク | ✅ ペイウォールに実装済み |
| 復元ボタンがない | ✅ 「購入を復元する」実装済み |
| プライバシーポリシーURL | ⚠️ STEP 0-2 でWeb公開が必要 |
| 特商法表記（日本） | ⚠️ SELLER_NAME の記入が必要 |
| 実際の過去問の無断転載 | ✅ オリジナル再現問題である旨を明記済み |
| iPadでの表示崩れ | ✅ 対応済み（TestFlightで最終確認を） |

## 費用まとめ

| 項目 | 金額 |
|---|---|
| Apple Developer Program | 約13,000円/年 |
| Google Play Console | 約3,800円（$25・初回のみ） |
| RevenueCat | 無料（月間収益$2,500まで） |
| EAS Build | 無料枠あり（月30ビルドまで） |
| Web ホスティング | 無料（Vercel等の無料枠） |
