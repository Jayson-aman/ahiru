# 新規5資格の登録手順（App Store Connect / RevenueCat）

v1.2.0 で追加した5資格を販売可能にするための登録手順。
**アプリ側の実装は完了済み**なので、ここに書いた登録作業だけで売れるようになる。

---

## 収録内容（登録時の説明文に使う数字）

| 資格 | エンタイトルメント | 教科書 | 問題 |
|---|---|---|---|
| 危険物取扱者 乙種第4類 | `pro_kikenbutsu` | 300節・65.4万字 | 600問 |
| コンクリート技士・診断士 | `pro_concrete` | 300節・69.2万字 | 600問 |
| 1級電気通信工事施工管理技士 | `pro_tsushin` | 300節・63.4万字 | 600問 |
| 二級建築士 | `pro_nikkyu` | 300節・68.9万字 | **問題は次バージョンで追加** |
| 第二種電気工事士 | `pro_denki2` | 300節・64.6万字 | **問題は次バージョンで追加** |

> **二級建築士と第二種電気工事士は教科書のみ**の状態。
> 問題データは未収録のため、科目別問題の画面は「準備中」と表示される。
> この2つは**課金商品を作らず、`CERTS_COMING_SOON` に入れたまま**にしておくのが安全。
> 問題を収録したバージョンで商品を作って販売開始する。

---

## ⚠️ 最重要：`CERTS_COMING_SOON` の運用

`services/subscription.ts` の以下の配列に入っている資格は、
**ペイウォールで「準備中」と表示され購入ボタンが出ない**。

```ts
export const CERTS_COMING_SOON: CertKey[] = ['kikenbutsu', 'concrete', 'tsushin', 'nikkyu', 'denki2'];
```

**商品を作って Offering に入れた資格だけ、この配列から外す。**

- 外し忘れる → 商品はあるのに永久に売れない
- 外すのが早すぎる（商品が無いのに外す）→ 審査担当が買えないボタンを押して**リジェクト**

この配列を変更したら**必ずリビルドが必要**。App Store Connect側だけでは反映されない。

---

## STEP 1. App Store Connect でサブスクリプションを作る

「収益化」→「サブスクリプション」→ **資格ごとに新しいグループを作る**
（同一グループ内の商品は同時購読できないため、資格ごとに分ける）

### 作成する商品（3資格ぶん・6商品）

| グループ名 | 商品ID | 期間 | 価格（日本） |
|---|---|---|---|
| Pro 危険物乙4 | `qualiz_pro_kikenbutsu_monthly` | 1か月 | ¥1,800 |
| Pro 危険物乙4 | `qualiz_pro_kikenbutsu_yearly` | 1年 | ¥18,000 |
| Pro コンクリート技士 | `qualiz_pro_concrete_monthly` | 1か月 | ¥1,800 |
| Pro コンクリート技士 | `qualiz_pro_concrete_yearly` | 1年 | ¥18,000 |
| Pro 電気通信施工 | `qualiz_pro_tsushin_monthly` | 1か月 | ¥1,800 |
| Pro 電気通信施工 | `qualiz_pro_tsushin_yearly` | 1年 | ¥18,000 |

**商品IDには必ず資格キー（`kikenbutsu` / `concrete` / `tsushin`）を含めること。**
アプリは `components/CertPaywall.tsx` の `findPackage` で、商品IDに資格キーが含まれるかを見て
該当パッケージを探している。キーが無いと購入導線が動かない。

### 各商品に入れるもの

**① App Storeローカリゼーション（日本語）**

| 商品 | 表示名（35文字以内） | 説明（55文字以内） |
|---|---|---|
| 危険物乙4 月額 | 危険物乙4 QualiZ Pro（月額） | 危険物乙4の全600問と教科書300節が1か月使い放題 |
| 危険物乙4 年額 | 危険物乙4 QualiZ Pro（年額） | 危険物乙4の全600問と教科書300節が1年間使い放題 |
| コンクリート 月額 | コンクリート技士 QualiZ Pro（月額） | 技士・診断士の全600問と教科書300節が1か月使い放題 |
| コンクリート 年額 | コンクリート技士 QualiZ Pro（年額） | 技士・診断士の全600問と教科書300節が1年間使い放題 |
| 電気通信 月額 | 電気通信施工 QualiZ Pro（月額） | 電気通信施工の全600問と教科書300節が1か月使い放題 |
| 電気通信 年額 | 電気通信施工 QualiZ Pro（年額） | 電気通信施工の全600問と教科書300節が1年間使い放題 |

**② Review Notes**（英文）
`docs/REVIEW_NOTES.md` の各資格の節をコピペする。

**③ 審査用スクリーンショット**
TestFlightのビルドで対象資格のペイウォールを開いて撮影する。
**ペイウォールはiOSでしか表示されない**ので、Web版やこのリポジトリからは撮れない。

---

## STEP 2. RevenueCat に登録

### ① Products
「Product catalog」→「Products」→「+ New」で6商品を追加。
App: **QualiZ (App Store)**、商品IDは上表のとおり。

### ② Entitlements
「Entitlements」→「+ New」で3つ作る（**識別子はアプリのコードと完全一致させること**）。

```
pro_kikenbutsu
pro_concrete
pro_tsushin
```

作成後、各エンタイトルメントの「Associated products」に対応する月額・年額を **Attach**。

| エンタイトルメント | アタッチする商品 |
|---|---|
| `pro_kikenbutsu` | `qualiz_pro_kikenbutsu_monthly` / `_yearly` |
| `pro_concrete` | `qualiz_pro_concrete_monthly` / `_yearly` |
| `pro_tsushin` | `qualiz_pro_tsushin_monthly` / `_yearly` |

> `max` エンタイトルメントには紐付けなくてよい。
> `services/subscription.ts` の `hasCertAccess` が
> `ENTITLEMENT_MAX in active || ENTITLEMENTS[cert] in active` というOR条件なので、
> `max` が有効なら全資格が自動的に開く。

### ③ Offerings
「Offerings」→ `default` →「Edit」で6パッケージを追加。

| パッケージ識別子 | 入れる商品 |
|---|---|
| `kikenbutsu_monthly` | `qualiz_pro_kikenbutsu_monthly` |
| `kikenbutsu_yearly` | `qualiz_pro_kikenbutsu_yearly` |
| `concrete_monthly` | `qualiz_pro_concrete_monthly` |
| `concrete_yearly` | `qualiz_pro_concrete_yearly` |
| `tsushin_monthly` | `qualiz_pro_tsushin_monthly` |
| `tsushin_yearly` | `qualiz_pro_tsushin_yearly` |

**パッケージ識別子にも資格キーを含めること。**
アプリは `パッケージ識別子 + 商品ID` の文字列に資格キーが含まれるかで判定している。

---

## STEP 3. コードから「準備中」を外してリビルド

STEP 1〜2 が完了したら、`services/subscription.ts` を次のように変更する。

```ts
// 変更前
export const CERTS_COMING_SOON: CertKey[] = ['kikenbutsu', 'concrete', 'tsushin', 'nikkyu', 'denki2'];

// 変更後（商品を作った3つを外す）
export const CERTS_COMING_SOON: CertKey[] = ['nikkyu', 'denki2'];
```

変更後に**必ずリビルドして新しいビルドを提出する**。

---

## STEP 4. 提出

`docs/SUBMISSION_CHECKLIST.md` を上から順に確認してから提出する。
特に次の2点は過去に実際にリジェクトされている。

- App説明文に**利用規約・プライバシーポリシーの実URL**が入っているか
- 提出するIAPに**削除済みの商品が混ざっていないか**

また、アプリ全体の Review Notes（`docs/REVIEW_NOTES.md` の1章）に書いてある
**資格数の記載を更新すること**。現在の実際の資格数はこれで数えられる。

```bash
grep -c "cardTitle}>" "app/(tabs)/index.tsx"
```

---

## まとめ：今回やること・やらないこと

| | 資格 | 商品を作る | `CERTS_COMING_SOON` |
|---|---|---|---|
| ✅ | 危険物取扱者 乙4 | 作る | 外す |
| ✅ | コンクリート技士・診断士 | 作る | 外す |
| ✅ | 1級電気通信工事施工管理技士 | 作る | 外す |
| ⏸ | 二級建築士 | **作らない** | **残す**（問題が未収録） |
| ⏸ | 第二種電気工事士 | **作らない** | **残す**（問題が未収録） |
