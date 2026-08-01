# App Store 提出前チェックリスト

**提出ボタンを押す前に、必ずこのファイルを上から順に確認すること。**

過去に実際にリジェクトされた項目には ⚠️ を付けている。ここを飛ばすと同じ理由でまた弾かれる。

---

## A. サブスクリプションの表示義務（ガイドライン 3.1.2）

自動更新サブスクリプションを持つアプリは、**次の5点をすべて満たさないと必ずリジェクトされる**。
1つでも欠けると審査に落ちる。

| # | 項目 | どこに書くか | 状態 |
|---|---|---|---|
| A-1 | サブスクリプションの**名称** | App説明文 | `docs/STORE_LISTING.md` の「■ 料金」に記載済み |
| A-2 | サブスクリプションの**期間**（1か月／1年） | App説明文 | 同上 |
| A-3 | **期間あたりの価格** | App説明文 | 同上 |
| A-4 | ⚠️ **利用規約（EULA）へのクリックできる実URL** | App説明文 | **要確認** |
| A-5 | ⚠️ **プライバシーポリシーへのクリックできる実URL** | App説明文 | **要確認** |

### ⚠️ A-4 / A-5 は v1.1.0 で実際にリジェクトされた項目

**「利用規約・プライバシーポリシーはアプリ内からご確認いただけます」という文言では通らない。**
Appleは説明文の中に**そのままクリックできるURL**が書かれていることを求めている。

App説明文に、次の3行がそのまま入っていることを目で確認する：

```
利用規約（EULA）：https://jayson-aman.github.io/ahiru/legal/terms.html
プライバシーポリシー：https://jayson-aman.github.io/ahiru/legal/privacy.html
特定商取引法に基づく表記：https://jayson-aman.github.io/ahiru/legal/tokushoho.html
```

### さらに、次の3か所にも同じURLが必要（説明文とは別要件）

| 場所 | 何を入れるか |
|---|---|
| App Store Connect → App情報 → **プライバシーポリシーURL** | privacy.html のURL（必須欄） |
| App Store Connect → App情報 → **使用許諾契約（License Agreement）** | Appleの標準EULAを使うか、terms.html の内容を貼る |
| **アプリ内のペイウォール画面** | 利用規約・プライバシーポリシーへのリンク（`components/CertPaywall.tsx` に実装済み） |

---

## B. URLが本当に開けるか

**提出前に、ブラウザのシークレットウィンドウで3つのURLを実際に開くこと。**
GitHub PagesがOFFになっていたり、ブランチをマージし忘れていると404になる。
審査担当がリンクを踏んで404だった場合、それだけでリジェクトされる。

- [ ] https://jayson-aman.github.io/ahiru/legal/terms.html が開ける
- [ ] https://jayson-aman.github.io/ahiru/legal/privacy.html が開ける
- [ ] https://jayson-aman.github.io/ahiru/legal/tokushoho.html が開ける

404の場合：GitHub → Settings → Pages → Source が `main` / `/docs` になっているか確認し、
このブランチを main にマージする。

---

## C. App内課金（IAP）

| # | 項目 | 落とし穴 |
|---|---|---|
| C-1 | 提出する商品が**すべて「提出準備完了」**になっている | 「メタデータ不足」のままだと提出できない |
| C-2 | ⚠️ **削除済みの商品にチェックが入っていない** | 削除済み商品を含めると提出自体がブロックされる（実際に発生） |
| C-3 | 各商品に**日本語のローカリゼーション**（表示名・説明）がある | |
| C-4 | 各商品に **Review Notes**（英文）が入っている | `docs/REVIEW_NOTES.md` からコピペ |
| C-5 | 各商品に**審査用スクリーンショット**（ペイウォール画面）がある | ペイウォールはiOSでしか出ないのでTestFlightから撮る |
| C-6 | ⚠️ **アプリ内に「買えないボタン」が存在しない** | 商品未登録の資格は `CERTS_COMING_SOON` に入れて購入UIを隠すこと |

### C-6 の確認方法

`services/subscription.ts` の `CERTS_COMING_SOON` に入っている資格は、
ペイウォールで「準備中」と表示され購入ボタンが出ない。

**商品を登録したら配列から外し、外していない資格は必ず配列に入っている**状態にする。
審査担当が買えないボタンをタップすると「In-App Purchaseが機能しない」として弾かれる。

```bash
# 現在の設定を確認
grep -A2 "CERTS_COMING_SOON" services/subscription.ts
```

---

## D. バージョンとビルド

| # | 項目 |
|---|---|
| D-1 | `app.json` の `version` と、App Store Connect のバージョン番号が**一致**している |
| D-2 | 前のバージョンが「審査待ち」のままなら、先に「このバージョンを審査から削除」する |
| D-3 | スクリーンショットが最新のビルドの画面になっている（1290×2796） |
| D-4 | 「このバージョンの新機能」欄が埋まっている（`docs/STORE_LISTING.md` に文面あり） |

---

## E. コード側の自動チェック（提出前に必ず実行）

```bash
npx tsc --noEmit                    # 型エラー0
python3 scripts/check_diagrams.py   # 図解の崩れ0
node scripts/check_all.js           # 整合性チェック [OK]
npx expo export --platform web      # ビルドが通るか
node scripts/serve.js & node scripts/smoke.js   # 全画面が描画されるか
```

5つすべてがエラーなしになってから提出すること。

---

## F. アプリ全体の Review Notes

App Store Connect → App情報 → App Review Information → Notes に
`docs/REVIEW_NOTES.md` の「1. アプリ全体の Review Notes」を貼る。

**資格を追加したら、この文中の資格数（現在は「15」）を更新すること。**
数が合っていないと審査担当が混乱し、追加の問い合わせで審査が長引く。

```bash
# 実際の資格数を数える
grep -c "cardTitle}>" "app/(tabs)/index.tsx"
```
