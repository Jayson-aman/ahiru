# QualiZ トラブルシューティング & ビルド運用ノート

このファイルは、これまでに実際に起きた問題と解決策を「次に同じことが起きたら即対処できる」形でまとめた運用メモです。
リリース作業・不具合対応の前に、まずここを見てください。

最終更新の背景：iOS 26 実機での起動時クラッシュ対応（2026年7月）

---

## 0. 環境の基本情報（変わらない前提）

| 項目 | 値 |
|---|---|
| Expo SDK | **57**（React Native **0.86.0**） |
| JSエンジン | Hermes（New Architecture 必須。JSCへは切り替え不可） |
| iOS Bundle ID | `com.jaysonaman.qualiz` |
| EAS プロジェクト | `@masaya.nanjo/qualiz`（ID: `92fb2403-aebb-4e67-beaf-58bafbcf3179`） |
| App Store Connect App ID | `6789186637` |
| Apple Team | `ZS8968GRJ8`（MASAYA NANJO / Individual） |
| 開発ブランチ | `claude/app-identification-k8js9v` |
| 課金 | RevenueCat（`react-native-purchases` 10.x）+ App内課金34商品/17 Entitlement |

> ⚠️ 昔の別プロジェクト「entrance-exam / ZAIBASE」とは**完全に別物**です。EAS/App Store の宛先を間違えないこと（§2 参照）。

---

## 1. 依存バージョンの鉄則（これが今回の起動クラッシュの真犯人だった）

**`react` と `react-native-renderer` のバージョンは完全一致していなければならない。**

- React Native 0.86 に同梱の `react-native-renderer` は **19.2.3**。
- したがって `package.json` の `react` / `react-dom` も **19.2.3** に固定する。
- ずれていると起動時に `Incompatible React versions` という致命的JSエラーが出て、
  **iOS 26 では即クラッシュ**する（下記 §3 参照）。

```json
// package.json（正しい状態）
"react": "19.2.3",
"react-dom": "19.2.3",
"@types/react": "19.2.3",
```

### SDKを上げるときの必須チェック
SDKアップグレード後は必ず次を実行して一致を確認する：
```bash
npx expo install --fix        # 依存を一括で整合（reactの警告が出たら手で直す）
node -e "console.log('react', require('react/package.json').version)"
# → react-native 0.xx が要求する react のバージョンと一致していること
```
`expo install --fix` は `react` の警告を出しても**自動で直さないことがある**。警告が出たら `package.json` を手で直す。

---

## 2. EAS のプロジェクト／宛先を間違えない

### 症状（過去に発生）
- ビルドしたのに、自分のQualiZアプリに反映されない。
- 別アプリ（entrance-exam / ZAIBASE）に送られていた。
- `Slug ... does not match` エラー。

### 原因
- 間違ったブランチ（`main` = 昔のEntrance Exam時代）で作業していた。
- ホームディレクトリ（`~/`）など**プロジェクト外**でコマンドを実行していた。
- `~/ahiru/app.json` に古い `extra.eas.projectId` が残っていた。

### 対処（毎回ビルド前に確認）
```bash
cd ~/ahiru                       # 必ずプロジェクト直下で実行
git branch --show-current        # → claude/app-identification-k8js9v であること
eas whoami                       # → masaya.nanjo
eas project:info                 # → @masaya.nanjo/qualiz / ID 92fb2403-...
```
もし別プロジェクトに紐づいていたら：
```bash
rm -rf .expo
eas init                         # 一覧から既存の「qualiz」を選ぶ（新規作成しない）
```

---

## 3. iOS 26 実機での「ホーム画面を開いてすぐクラッシュ」

### 最終的な真因（重要）
**`react` バージョン不一致（§1）**。起動時に React が致命的エラーを投げ、
iOS 26 は「そのエラーを報告する処理」自体がクラッシュする仕様バグを持つため、
本来のエラーが握りつぶされてハードクラッシュ（SIGABRT）に化けていた。

### 回り道した誤診（教訓：ここに時間を使いすぎない）
以下はすべて「効果なし」だった。今後、同種のクラッシュで**先に §1 を疑うこと**：
- RevenueCat SDK のアップグレード / 無効化 → 無関係だった
- Hermes / iOS 26 / A18・A19 の PAC（ポインタ認証）問題 → 症状は似ているが本件の主因ではなかった
- New Architecture 無効化・静的フレームワーク・Hermesソースビルド・JSC切替 → いずれも無効

### 真因を突き止めた仕組み（今後のデバッグ資産）
`services/crashCapture.ts` を入れてある。これは本番ビルドで、
JSの致命的エラーを標準の（iOS 26で壊れる）報告処理に渡さず、
**エラー内容を AsyncStorage に保存**する。次回起動時に `app/_layout.tsx` が
それを「前回のエラー内容」ダイアログで表示する。

→ **原因不明のクラッシュが出たら、まずこのダイアログの文面を読む**こと。
これが実際のJSエラー（今回は "Incompatible React versions"）を教えてくれた。

---

## 4. 正しいビルド〜TestFlight提出の手順

EASのクラウドビルドを使う。**Mac側に CocoaPods や Xcode の準備は不要**。
`npx expo prebuild` も**実行しない**（EASサーバー側が自動でやる）。

```bash
cd ~/ahiru
git checkout -- package.json package-lock.json   # 前回のローカル変更が残っていれば捨てる
git pull origin claude/app-identification-k8js9v

# 依存を変えた（package.jsonを更新した）ときだけ：
rm -rf node_modules package-lock.json && npm install
node -e "console.log('react', require('react/package.json').version)"   # 19.2.3 を確認

eas build --platform ios --profile production
eas submit --platform ios --latest
```
提出後、Appleの処理（5〜10分）を待ち、TestFlightアプリで最新ビルドに更新して実機確認。

### よくある詰まりどころ
| 症状 | 意味 | 対処 |
|---|---|---|
| `Failed to upload ... write EPIPE` | 通信の一時切断。コードは無関係 | 同じ `eas build` を再実行（2〜3回で通る）。電波の良い場所で |
| CocoaPods を入れようとして止まる | `expo prebuild` を実行してしまった | prebuild は不要。`n` で中断し `rm -rf ios android` して `eas build` だけ実行 |
| `git pull` が `Your local changes would be overwritten` | Mac側に prebuild 等のローカル変更が残存 | `git checkout -- package.json package-lock.json` してから pull |
| EAS無料枠上限 `used its iOS builds from the Free plan` | 月15回の無料ビルドを使い切った | Starterプラン($19/月)にアップグレード、または翌月まで待つ |

---

## 5. Paywall（課金画面）のレイアウト方針

`components/CertPaywall.tsx` は全クイズ画面で共通。無料体験中は：
- **問題を画面いっぱいに表示**（`contentArea` が `flex:1`）
- 下部に**細いバナー1本**（「無料体験中 — Proを見る」）だけ
- 料金カードの詳細はバナータップで**モーダル（pageSheet）**で開く

→ 料金カードを問題の下に常時全部並べると問題が読めなくなる（過去の不具合）。
この構造を崩さないこと。1箇所直せば全資格に反映される。

---

## 6. コンテンツ（問題）の品質メモ

- 全16資格・約29,000問。データは `data/*.ts`。ビルドや審査とは独立してGitで管理。
- 解説の `【図解】` ブロックは `components/ExplanationText.tsx` が記号で自動色分け
  （★/⚠→橙、行頭○◎→緑、行頭×/誤→赤、→/⇒→紫）。
- AI生成コンテンツのため、実試験問題での抜き取り検算を継続推奨。
  これまでに `建築設備士 一般知識` は精査済み（dk-023の事実誤り、ippanの文章途切れ174件を修正）。
  他資格は構造・整合チェックのみで一次資料照合は未実施。

---

## 6.5. 保留中の「別アプリ切り出し」候補（QualiZリリース後に判断）

QualiZ本体には含めるが、ホーム画面の主要導線からは意図的に外し、
リリース後の反応を見てから独立アプリ化を検討する候補：

- **中学受験（`app/juken/`, `data/questions.ts`+`data/questions_part2.ts`, 1,000問）**
  ホーム画面にカードなし、他画面からのリンクもなし（意図的に到達不可）。
  高校受験（`app/kouko/`）は元々「準備中」のプレースホルダーのみで問題データなし。
- **気象予報士**（`app/kisho/`）
  ホーム画面には表示中（🌤 気象・防災系セクション）。ターゲット層・課金導線が
  他の実務系資格（宅建・FP等）と異なる（個人の趣味・志望動機での受験者が中心、
  法人負担が薄い）ため、独立アプリ化の候補として保留。

いずれも今はQualiZ本体のリリース準備を優先し、着手しない方針（2026年7月時点）。

---

## 7. 「原因不明の不具合が出たら」クイックチェック順

1. 起動時に「前回のエラー内容」ダイアログが出ていないか（§3）。出ていたら文面が答え。
2. `react` == `react-native-renderer` のバージョン一致（§1）。
3. 正しいブランチ・正しいEASプロジェクトか（§2）。
4. `npx tsc --noEmit` が通るか。
5. それでも不明なら、`crashCapture` の保存内容 or Mac の Console.app（実機USB接続）でJSエラーを直接確認。
