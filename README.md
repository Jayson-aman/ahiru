# Entrance Exam

日本の中学受験対策アプリ（一問一答トレーニング）

## 概要

日能研・四谷大塚・四谷学院の学習スタイルを参考にした、中学受験対策の一問一答アプリです。

## 対応科目

- 📐 算数（15問）
- 📖 国語（15問）
- 🔬 理科（15問）
- 🌍 社会（15問）

## 対象校

**東京**: 開成・麻布・武蔵・桜蔭・女子学院  
**関西**: 灘・甲陽学院・星光学院・洛南・西大和学園・東大寺学園

## 対応プラットフォーム

- iPhone / iPad
- Android スマートフォン / タブレット
- Web（将来対応予定）

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
4. [RevenueCat](https://app.revenuecat.com) で `pro` / `max` エンタイトルメントと App Store / Google Play 商品を紐付け
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

`app.json` の `bundleIdentifier` / `package` は `com.jaysonaman.entranceexam` です。App Store Connect / Google Play Console で同じ ID を登録してください。

## Pull Request

- **PR #1**: `claude/app-identification-k8js9v` → `main`（アプリ本体・250問・RevenueCat・聞き流しモード）
- マージ前に RevenueCat キーとストア商品 ID の設定が必要です。

## 技術スタック

- Expo (React Native)
- TypeScript
- expo-router
- AsyncStorage（進捗保存）
- expo-linear-gradient（UI）
