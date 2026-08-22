# QualiZ（クオリズ） — ストア公開ガイド（完全手順書）

最終更新: 2026-07-06
対象: iOS (App Store) / Android (Google Play) / Web

アプリ側の公開準備（アプリ名・法的ページ・再現問題表記・課金画面の審査対応）は実装済みです。
このガイドは、**あなたのアカウントで行う作業**を、順番どおりに実行できるように書いています。

---

## ⚠️ 提出前に必ず `docs/SUBMISSION_CHECKLIST.md` を見ること

過去に実際にリジェクトされた項目（App説明文にEULA・プライバシーポリシーの
**実URL**が無い／削除済みIAPを提出に含めた／買えない購入ボタンが出ている）を
チェックリスト化してある。提出ボタンを押す前に上から順に確認する。

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
| QualiZ Max | `qualiz_max_monthly` / `qualiz_max_yearly` | ¥2,800 / ¥28,000 |
| Pro 宅建 | `qualiz_pro_takkei_m2` / `qualiz_pro_takkei_y2` | ¥1,800 / ¥18,000 |

> **v1.2.0で宅建を売るための作業順序**（順番を守らないと詰まります）
> 1. App Store Connect で新グループ「Pro 宅建」を作り、`qualiz_pro_takkei_m2` / `_y2` を作成
>    （日本語ローカリゼーション・Review Notes・審査用スクショまで入れて「提出準備完了」にする）
> 2. RevenueCat の Products に2件を追加 → エンタイトルメント `pro_takkei` にアタッチ
>    → 現在の Offering に Monthly / Annual パッケージとして追加
> 3. v1.2.0 をビルドして TestFlight に上げる
> 4. TestFlight のアプリで宅建のペイウォールを開き、**その画面のスクショをIAPの審査用画像として登録**
>    （ペイウォールは iOS でしか出ないので、Web版やシミュレータ以外では撮れません）
> 5. v1.2.0 の提出画面で「App内課金」に新2件をチェックし、**削除済みの3件のチェックは外す**
>
> **手順1〜2を飛ばしてビルドすると、宅建のプランをタップしたとき「ただいま購入できません」**
> **というエラーになり、In-App Purchaseが機能しないとしてリジェクトされます。**
> （`CERTS_COMING_SOON` が空なので購入ボタン自体は表示されるため）

> **宅建の商品IDが他と異なる理由**: 旧ID `qualiz_pro_takkei_monthly` / `_yearly` は
> App Store Connect 上で削除済みです。**削除したサブスクリプションの商品IDは再利用できない**ため、
> 末尾を変えた新IDで作り直しています。
> アプリ側は商品IDに資格キー（`takkei`）が含まれるかで判定しているため
> （`components/CertPaywall.tsx` の `findPackage`）、`takkei` を残せばコード変更もリビルドも不要です。
> エンタイトルメント識別子は `pro_takkei` のまま変更しないでください。
>
> **⚠ RevenueCatのパッケージ種別に注意**: `findPackage` は期間を
> 「①パッケージ種別（ANNUAL/MONTHLY）→ ②商品IDの末尾」の順で判定します。
> 宅建の `_m2` / `_y2` は他資格の `_monthly` / `_yearly` と命名が違うため、
> 以前は②で拾えず、Offeringに **Custom パッケージ**として登録すると
> 宅建だけ「ただいま購入できません」になる不具合がありました。
> 現在は②が `_y2` / `_m2` 形式も読めるよう修正済みですが、
> **Offering への追加時は必ず Monthly / Annual のパッケージ種別を選んでください**
> （Custom にしないこと）。これが最も確実です。

| Pro FP | `qualiz_pro_fp_monthly` / `_yearly` | ¥1,800 / ¥18,000 |
| Pro マンション管理士 | `qualiz_pro_mansion_monthly` / `_yearly` | 同上 |
| Pro 建築設備士 | `qualiz_pro_kenchiku_monthly` / `_yearly` | 同上 |
| Pro 1級建築施工管理技士 | `qualiz_pro_sekokan_monthly` / `_yearly` | 同上 |
| Pro 電験三種 | `qualiz_pro_denken3_monthly` / `_yearly` | 同上 |
| Pro 気象予報士 | `qualiz_pro_kisho_monthly` / `_yearly` | ¥1,800 / ¥18,000 |
| Pro 管工事施工管理技士 | `qualiz_pro_kankoji_monthly` / `_yearly` | ¥1,800 / ¥18,000 |
| Pro 電気工事施工管理技士 | `qualiz_pro_denkisekou_monthly` / `_yearly` | 同上 |
| Pro 建設機械施工管理技士 | `qualiz_pro_kikaisekou_monthly` / `_yearly` | 同上 |
| Pro 1級土木施工管理技士 | `qualiz_pro_dobokusekou_monthly` / `_yearly` | 同上 |
| Pro 建築コスト管理士 | `qualiz_pro_cost_monthly` / `_yearly` | ¥1,800 / ¥18,000 |
| Pro 給水装置工事主任技術者 | `qualiz_pro_kyusui_monthly` / `_yearly` | ¥1,800 / ¥18,000 |
| Pro 消防設備士甲種 | `qualiz_pro_shobo_monthly` / `_yearly` | ¥1,800 / ¥18,000 |
| Pro 危険物取扱者乙4 | `qualiz_pro_kikenbutsu_monthly` / `_yearly` | ¥1,800 / ¥18,000 |
| Pro コンクリート技士・診断士 | `qualiz_pro_concrete_monthly` / `_yearly` | ¥1,800 / ¥18,000 |
| Pro 1級電気通信工事施工管理技士 | `qualiz_pro_tsushin_monthly` / `_yearly` | ¥1,800 / ¥18,000 |
| Pro 二級建築士 | `qualiz_pro_nikkyu_monthly` / `_yearly` | ¥1,800 / ¥18,000 |
| Pro 第二種電気工事士 | `qualiz_pro_denki2_monthly` / `_yearly` | ¥1,800 / ¥18,000 |
| Pro 英検 | `qualiz_pro_eiken_monthly` / `_yearly` | ¥800 / ¥8,000 |
| ~~Pro 受験対策~~ | ~~`qualiz_pro_juken_monthly` / `_yearly`~~ | **現在は提供なし** |

> **受験対策（中学受験）は現在販売していません。** ホーム画面の導線が無く
> （「資格のみ」方針）、特定商取引法に基づく表記からもプランを削除済みです。
> App Store Connect に `qualiz_pro_juken_*` を作成する必要はありません。
> 問題データ（1,000問）は将来の公開に備えてリポジトリに残置しています。

作成手順（1商品あたり2〜3分 × 32商品＝16グループ×月額/年額）:
1. マイApp → 対象アプリ → 「収益化」→「サブスクリプション」→ グループ作成
2. グループ内で「+」→ 参照名（管理用）と商品ID（上表）を入力
3. 期間: 1か月 or 1年 / 価格: 日本 ¥1,800 など（他国は自動換算でOK）
4. **App Storeローカリゼーション（日本語）**: 表示名（例: 宅建Pro 月額）と説明を入力
5. **Review Notes**: `docs/REVIEW_NOTES.md` に資格ごとの英文Review Notesをまとめてあるので、該当箇所をコピペ
6. 審査用スクリーンショット: ペイウォール画面のスクショをアップ（後述のTestFlightビルドから撮影でも可。
   `docs/REVIEW_NOTES.md`作成と同時に生成したiPhone(1284×2778)/iPad(2064×2752)のPaywallスクショが使える）

> 💡 34商品の作成が大変なら、**最初は「Max 月/年」と主力2〜3資格（宅建・施工管理など）だけ**で公開し、
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
   pro_kankoji, pro_denkisekou, pro_kikaisekou, pro_dobokusekou,
   pro_cost, pro_kyusui, pro_shobo, pro_kikenbutsu, pro_concrete,
   pro_tsushin, pro_nikkyu, pro_denki2, max
   ```
   - 各資格の月額/年額商品 → その資格の `pro_◯◯` だけに紐付け
   - `qualiz_max_*` → **`max` だけに紐付け**（`services/subscription.ts`の`hasCertAccess`が
     `ENTITLEMENT_MAX in active || ENTITLEMENTS[cert] in active` というOR条件になっているため、
     `max`さえ有効なら全資格が自動的にアンロックされる。個別の`pro_◯◯`への紐付けは不要）
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

## STEP 3-3. 手元の環境から EAS を操作できるようにする（EXPO_TOKEN）

`eas login` は対話式なので、CIやリモート環境では使えない。
アクセストークンを環境変数に入れておくと、ログインなしで
`eas env:list` や `eas build` が実行できる。

### トークンの発行

1. https://expo.dev にログイン
2. 右上のアカウント → **Account settings** → **Access tokens**
3. **Create token** → 名前を付けて発行
4. 表示された値をコピー（**この画面を閉じると二度と表示されない**）

### 環境変数に設定する

トークンは**チャットやコミットに貼らない**。環境変数として渡すこと。

- Claude Code on the web で作業する場合
  環境設定の Environment variables に `EXPO_TOKEN` を追加する
  （参照: https://code.claude.com/docs/en/claude-code-on-the-web ）
- 手元のPCで作業する場合
  ```bash
  export EXPO_TOKEN=xxxxxxxx
  eas whoami        # ユーザー名が出れば成功
  ```

### 設定できたら最初にやること

**RevenueCat のキーが本番環境に入っているかの確認**。
これが無いままビルドすると、見た目は正常なのに課金が一切
動かないバイナリができる（`services/subscription.ts:107` で
プレースホルダのまま無音で free モードに落ちる）。

```bash
eas env:list --environment production
#  EXPO_PUBLIC_RC_API_KEY_IOS が一覧にあることを確認する
#  無ければ STEP 3-2 の eas env:create を実行する
```

---

## STEP 3-4. eas.json に提出先を書いておく（任意）

`eas submit` は対話式でも動くが、毎回3つの値を聞かれる。
`eas.json` に書いておくと非対話で通る。

### 3つの値の調べ方

| キー | 何の値か | どこで見るか |
|---|---|---|
| `appleId` | Apple Developer のログイン用メールアドレス | ご自身のアカウント |
| `ascAppId` | App Store Connect のアプリ固有の数字ID | App Store Connect → 対象アプリ → **App情報** → 一般情報 → 「Apple ID」欄の数字（例: 6478123456） |
| `appleTeamId` | 開発チームの10桁ID | https://developer.apple.com/account → **Membership details** → Team ID（例: A1B2C3D4E5） |

いずれも秘密情報ではないのでコミットして問題ない
（パスワードやトークンではない）。

### 書き方

```json
"submit": {
  "production": {
    "ios": {
      "appleId": "you@example.com",
      "ascAppId": "6478123456",
      "appleTeamId": "A1B2C3D4E5"
    }
  }
}
```

書かない場合は `eas submit --platform ios --latest` を対話で実行すればよい。

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
