# App Store 用スクリーンショット（宅建を除く10枚）

サイズ **1290 × 2796 px**（6.9インチ／iPhone 16 Pro Max）。App Store Connect が
必須とするサイズなので、このまま「iPhone 6.9インチディスプレイ」の枠にアップロードできる。

実機ではなく、アプリの Web ビルドを iPhone 16 Pro Max と同じ論理解像度
（430 × 932 CSS px、DPR 3）でレンダリングして撮影している。React Native Web
なので描画に使われるコンポーネントとスタイルは実機と同一。

| # | ファイル | 内容 |
|---|---|---|
| 01 | 01-home.png | ホーム。収録資格の一覧（メイン画面） |
| 02 | 02-home-lineup.png | ホームを下へ。積算・電気・気象まで資格の幅が分かる |
| 03 | 03-denken3-top.png | 資格トップ（電験三種）。科目と収録問題数 |
| 04 | 04-quiz.png | 問題演習の画面（一級土木施工 施工管理法） |
| 05 | 05-answer-correct.png | 正解＋詳細解説＋各選択肢の解説（FP タックス） |
| 06 | 06-answer-figure.png | 図解つき解説（給水装置 構造及び性能） |
| 07 | 07-answer-figure2.png | 図解つき解説（建設コスト管理士 積算） |
| 08 | 08-answer-figure3.png | 図解つき解説（消防設備士 構造・機能） |
| 09 | 09-text-index.png | 教科書の目次（給水装置：8科目・セクション数） |
| 10 | 10-text-body.png | 教科書の本文（電験三種 理論） |

宅建の画面は意図的に含めていない。

## 撮り直しかた

```
npx expo export --platform web              # dist/ を作る
node <scratchpad>/serve.js                  # SPAフォールバック付きで dist/ を配信
node <scratchpad>/cap.js                    # 10枚すべて
node <scratchpad>/cap.js 04 08              # 番号を指定して一部だけ
```
