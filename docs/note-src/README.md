# note記事の生成システム

## 構成

```
note-src/
  articles/    正本。1資格1ファイルだけ（22本。lpgas・koatsuも含む）
  intros/      総論記事（00）の3バリアント
  generate.py  正本から公開セットを組み立てるスクリプト
```

**articles/ の各ファイルは、どの公開パターンでも中身は同じ**なので、ここが常に1つだけの正本になる。
「総資格数」への言及（`全23資格が使い放題` `収録している23資格すべて` `収録23資格の中で最大`）だけが公開パターンごとに変わる数字で、`generate.py` が正規表現で機械的に書き換える。

かつては `docs/note/`（23資格版）・`docs/note-22gikaku/`（22資格版）・`docs/note-21hanbaichuu/`（21資格版）として全文を3重に複製していたが、この方式は片方だけ直して片方を直し忘れる事故が起きやすい（実際に一度、価格や資格名の修正が1箇所に反映されず残った）。articles/ を単一の正本にし、差分を生成時に機械的に埋める方式に変更した。

## 使い方

```bash
python3 generate.py 21-now           # 現在販売中の21資格（lpgas・koatsu を除く）
python3 generate.py 22-excl-koatsu   # koatsuのみ除く22資格
python3 generate.py full23           # 全23資格
```

`docs/note-publish-<preset名>/` に、その場で貼り付けられる状態のMarkdownが出力される。

## 資格を追加・除外したら

`services/subscription.ts` の `CERTS_COMING_SOON` が変わったら、`generate.py` の `PRESETS` もそれに合わせて更新すること。ズレたまま生成すると、実際には買えない資格を「使い放題」に含めて宣伝してしまう。

## 新しい資格記事を追加するとき

1. `articles/` に1ファイル追加する（他の記事と同じ書式。総資格数へ言及する箇所は `全N資格` `収録N資格` の形にしておけば自動で数字が入る）
2. `generate.py` の `FILE_TO_CERTKEY` にファイル名とCertKeyの対応を追加する
3. 対象資格を除く公開パターンがあれば `PRESETS` の `exclude` を更新する

## 総資格数以外の集計値（イントロにのみ登場）

問題数・セクション数・総文字数の合計（`29,150問` `5,945セクション` `約1,229万字` 等）は `intros/` の各バリアントに直書きしてある。これは資格ごとの記事には出てこない値なので generate.py では扱っていない。新しい資格を足したりCERTS_COMING_SOONを変えたりしたら、`scripts/check_content.js` と `scripts/check_all.js` を実行して実測し直し、該当する `intros/*.md` を手で更新すること。
