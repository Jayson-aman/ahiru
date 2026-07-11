# QualiZ（クオリズ）

国家資格・検定試験の合格を目指すための本格学習アプリ（全問図解つき解説）

## 概要

各試験の出題傾向・難易度・科目構成を分析して作成したオリジナル問題を、全問「図解つきの丁寧な解説」とともに収録した資格試験対策アプリです。本試験形式の模試・要点テキストも搭載しています。

## 対応資格・検定

- 宅地建物取引士（宅建）
- ファイナンシャルプランナー（FP2級・3級）
- マンション管理士
- 一級建築施工管理技士
- 一級管工事施工管理技士
- 一級電気工事施工管理技士
- 一級建設機械施工管理技士
- 建築設備士
- 電験三種（第三種電気主任技術者）
- 気象予報士
- 英検（2級・3級・4級）

## 対応プラットフォーム

- iPhone / iPad
- Android スマートフォン / タブレット
- Web

## 開発環境のセットアップ

```bash
npm install
cp .env.example .env   # RevenueCat の API キーを設定
npm run ios      # iOS シミュレータ
npm run android  # Android エミュレータ
npm run web      # Web（開発用）
```

## ストア公開（EAS Build）

1. [Expo](https://expo.dev) アカウント作成 → `npm install -g eas-cli` → `eas login`
2. プロジェクト作成: `eas init`（初回のみ）
3. `.env` に RevenueCat の iOS/Android 公開 API キーを設定
4. [RevenueCat](https://app.revenuecat.com) で各資格の `pro_◯◯` / `max` エンタイトルメントと App Store / Google Play 商品を紐付け
5. ビルド:
   ```bash
   eas build --platform ios --profile production
   eas build --platform android --profile production
   ```
6. ストア申請:
   ```bash
   eas submit --platform ios
   eas submit --platform android
   ```

詳細な公開手順は `docs/RELEASE_GUIDE.md` を参照してください。
`app.json` の `bundleIdentifier` / `package` は `com.jaysonaman.qualiz` です。App Store Connect / Google Play Console で同じ ID を登録してください。

## 技術スタック

- Expo (React Native)
- TypeScript
- expo-router
- react-native-svg（図解エンジン）
- AsyncStorage（進捗保存）
- expo-linear-gradient（UI）
- react-native-purchases / RevenueCat（サブスクリプション）
