#!/usr/bin/env python3
"""
note掲載用の資格記事を、公開可能な資格だけに絞って生成する。

正本は note-src/articles/ に1資格1ファイルだけ置いてある。
「全23資格」のような総資格数への言及は articles/ 内に
そのまま書かれているので、生成時に "全(\d+)資格" という
数字+「資格」の並びだけを対象にした正規表現で機械的に
書き換える。問題数（"全600問"等）は「問」で終わるので、
この正規表現には一切ひっかからない。過去に一括置換で
英検の3択問題数を巻き添えにした反省から、置換対象を
この形にだけ絞ってある。

使い方:
    python3 generate.py 21-now
    python3 generate.py 22-excl-koatsu
    python3 generate.py full23
"""
import io
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
ARTICLES = ROOT / "articles"
INTROS = ROOT / "intros"

# ファイル名 → CertKey（services/subscription.ts の ENTITLEMENTS と一致させること）
FILE_TO_CERTKEY = {
    "01-koatsu.md": "koatsu",
    "02-lpgas.md": "lpgas",
    "03-sekokan-kenchiku.md": "sekokan",
    "04-kankoji.md": "kankoji",
    "05-denkisekou.md": "denkisekou",
    "06-dobokusekou.md": "dobokusekou",
    "07-kikaisekou.md": "kikaisekou",
    "08-tsushin.md": "tsushin",
    "09-kenchiku-setsubishi.md": "kenchiku",
    "10-kyusui.md": "kyusui",
    "11-shobo.md": "shobo",
    "12-kikenbutsu.md": "kikenbutsu",
    "13-denki2.md": "denki2",
    "14-denken3.md": "denken3",
    "15-nikkyu-kenchikushi.md": "nikkyu",
    "16-concrete.md": "concrete",
    "17-cost.md": "cost",
    "18-takkei.md": "takkei",
    "19-mansion.md": "mansion",
    "20-fp.md": "fp",
    "21-kisho.md": "kisho",
    "22-eiken-juken.md": None,  # eiken と juken の両方を扱う記事。単独除外の対象にしない
}

# 3つの公開パターン。CERTS_COMING_SOON の中身と必ず一致させること。
PRESETS = {
    "full23": {
        "exclude": set(),
        "intro": "intro-full23.md",
        "count": 23,
    },
    "22-excl-koatsu": {
        "exclude": {"koatsu"},
        "intro": "intro-22-excl-koatsu.md",
        "count": 22,
    },
    "21-now": {
        "exclude": {"koatsu", "lpgas"},
        "intro": "intro-21-now.md",
        "count": 21,
    },
}

# 総資格数への言及は、確認できている限りこの2パターンのみ。
#   「全23資格が使い放題」「収録している23資格すべて」「収録23資格の中で」
# いずれも「(全 or 収録)…数字…資格」という並びで、単なる「N資格」だと
# 英検記事の「他の資格と異なり」のような無関係な文にも当たりかねないので、
# 前方に「全」または「収録」を要求して絞る。
COUNT_RE = re.compile(r"(全|収録(?:している)?)(\d+)資格")


def main():
    if len(sys.argv) != 2 or sys.argv[1] not in PRESETS:
        print(f"使い方: python3 generate.py {{{'|'.join(PRESETS)}}}", file=sys.stderr)
        sys.exit(1)

    name = sys.argv[1]
    preset = PRESETS[name]
    out_dir = ROOT.parent / f"note-publish-{name}"
    out_dir.mkdir(exist_ok=True)

    # 00: イントロ
    intro_src = INTROS / preset["intro"]
    (out_dir / "00-souron-hoan-jinzai.md").write_text(
        intro_src.read_text(encoding="utf-8"), encoding="utf-8"
    )

    written = 0
    for path in sorted(ARTICLES.glob("*.md")):
        certkey = FILE_TO_CERTKEY.get(path.name, "__unknown__")
        if certkey == "__unknown__":
            print(f"警告: {path.name} が対応表に無い。生成をスキップしないよう確認すること。", file=sys.stderr)
            sys.exit(1)
        if certkey in preset["exclude"]:
            continue
        text = path.read_text(encoding="utf-8")
        text = COUNT_RE.sub(lambda m: f"{m.group(1)}{preset['count']}資格", text)
        (out_dir / path.name).write_text(text, encoding="utf-8")
        written += 1

    print(f"{out_dir} に {written + 1} 本を生成した（イントロ込み）。")


if __name__ == "__main__":
    main()
