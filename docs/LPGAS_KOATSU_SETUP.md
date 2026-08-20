# 液化石油ガス設備士・高圧ガス製造保安責任者の販売開始手順（v1.3.2）

v1.3.0 で追加したこの2資格を販売可能にするための登録作業。
**アプリ側の実装は完了済み**なので、ここに書いた登録だけで売れるようになる。

---

## 収録内容（登録時の説明文に使う数字）

| 資格 | エンタイトルメント | 教科書 | 問題 |
|---|---|---|---|
| 液化石油ガス設備士 | `pro_lpgas` | 312節・13.2万字 | 600問 |
| 高圧ガス製造保安責任者 | `pro_koatsu` | 320節・13.6万字 | 600問 |

いずれも全600問に、選択肢ごとの個別解説とテキスト図解が入っている。
加えてベクター図解（SVG）が lpgas 312問・koatsu 234問（計546問・全1,200問の45.5%）に表示される。

---

## ⚠️ 最重要：作業の順番を守る

`services/subscription.ts` の `CERTS_COMING_SOON` に入っている資格は、
ペイウォールで「準備中」と表示され購入ボタンが出ない。

```ts
export const CERTS_COMING_SOON: CertKey[] = ['lpgas', 'koatsu'];
```

**必ずこの順番で進める。**

1. App Store Connect で商品を作る（STEP 1）
2. RevenueCat でエンタイトルメントと Offering に紐づける（STEP 2）
3. **商品が有効になったことを確認してから** `CERTS_COMING_SOON` を空配列にする（STEP 3）
4. リビルドして提出（STEP 4）

順番を誤ったときに起きること:

- 外し忘れる → 商品はあるのに永久に「準備中」のまま売れない
- **外すのが早すぎる（商品が無いのに外す）→ 審査担当が買えないボタンを押してリジェクト**
  過去に実際にこの理由でリジェクトされている（`docs/SUBMISSION_CHECKLIST.md` C-6）

この配列を変更したら**必ずリビルドが必要**。App Store Connect 側だけでは反映されない。

---

## STEP 1. App Store Connect でサブスクリプションを作る

「収益化」→「サブスクリプション」→ **資格ごとに新しいグループを作る**
（同一グループ内の商品は同時購読できないため、資格ごとに分ける）

### 作成する商品（2資格ぶん・4商品）

| グループ名 | 商品ID | 期間 | 価格（日本） |
|---|---|---|---|
| Pro 液化石油ガス設備士 | `qualiz_pro_lpgas_monthly` | 1か月 | ¥1,800 |
| Pro 液化石油ガス設備士 | `qualiz_pro_lpgas_yearly` | 1年 | ¥18,000 |
| Pro 高圧ガス製造保安責任者 | `qualiz_pro_koatsu_monthly` | 1か月 | ¥1,800 |
| Pro 高圧ガス製造保安責任者 | `qualiz_pro_koatsu_yearly` | 1年 | ¥18,000 |

他の個別資格プランと同じ価格帯（月額1,800円・年額18,000円）に揃えている。
年額は2か月分お得という訴求も同じ。

各商品に必要なもの:

- 表示名・説明（審査で見られる）
- **スクリーンショット1枚**（ペイウォール画面。未添付だと審査に出せない）
- 価格（上表のとおり）

---

## STEP 2. RevenueCat で紐づける

1. Products に STEP 1 の商品ID 4件を追加
2. Entitlements に `pro_lpgas` / `pro_koatsu` を作成
   - `pro_lpgas` ← `qualiz_pro_lpgas_monthly` と `qualiz_pro_lpgas_yearly`
   - `pro_koatsu` ← `qualiz_pro_koatsu_monthly` と `qualiz_pro_koatsu_yearly`
3. Offering に4商品を入れる（アプリは Offering 経由で商品を取得する）

エンタイトルメント名はダッシュボードとコードで**完全一致**していること。
コード側の定義は `services/subscription.ts` の `ENTITLEMENTS`。

---

## STEP 3. コードを1行変える

商品が有効になったことを確認してから:

```ts
export const CERTS_COMING_SOON: CertKey[] = [];
```

---

## STEP 4. ビルドと提出

```bash
# RevenueCat のキーが EAS 環境変数に入っているか先に確認する
eas env:list --environment production   # EXPO_PUBLIC_RC_API_KEY_IOS があること

npx tsc --noEmit
python3 scripts/check_diagrams.py
node scripts/check_all.js
node scripts/check_content.js
npx expo export --platform web
node scripts/serve.js & node scripts/smoke.js

eas build --platform ios --profile production
eas submit --platform ios --profile production
```

### 提出時に忘れやすいもの

- App Store の説明文に **利用規約と プライバシーポリシーのURLをリンクとして明記**する
  （v1.1.0 はこれが無くてリジェクトされている）
- スクリーンショットは 1290×2796
- `supportsTablet: true` なので **iPad のスクリーンショットも必要**
- アプリのバージョンは `app.json` の `1.3.2` と App Store Connect 側を一致させる
