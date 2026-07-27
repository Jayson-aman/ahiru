# -*- coding: utf-8 -*-
"""DiagramBlock.tsx の描画ロジックをそのまま再現し、
実際に壊れて描画される【図解】ブロックを漏れなく洗い出す。

推測の判定基準ではなく、レンダラーの実装を移植して判定する。
"""
import re, glob, collections

CELL_SEP  = re.compile(r'[｜|]')
RULE_ROW  = re.compile(r'^[\s　─━-]*[┼┴┬├┤]*[\s　─━┼┴┬├┤-]*$')
BOX_CHARS = re.compile(r'[┌┐└┘├┤┬┴┼│┃║╔╗╚╝]')
FRAME_DET = re.compile(r'[┌┐└┘│┃║╔╗╚╝]')       # isFrame の判定に使われる文字集合
STRUCT    = re.compile(r'[├└┬┴┼┤]')             # 消えると構造が失われる文字
PAD       = re.compile(r'\S　{2,}\S.*?\S　{2,}\S')  # 全角空白での桁揃え


def group(lines):
    """DiagramBlock.group() の移植"""
    out, buf, tbl = [], [], []
    def flush_lines():
        nonlocal buf
        if buf: out.append(('lines', buf)); buf = []
    def flush_table():
        nonlocal tbl
        if tbl: out.append(('table', tbl)); tbl = []

    for raw in lines:
        t = raw.strip()
        if tbl and RULE_ROW.match(t) and len(t) > 0:
            continue
        cells = CELL_SEP.split(t)
        is_table_row = len(cells) >= 3 and CELL_SEP.search(t)
        if is_table_row:
            flush_lines()
            cleaned = [BOX_CHARS.sub('', c).strip() for c in cells]
            while cleaned and cleaned[0] == '': cleaned.pop(0)
            while cleaned and cleaned[-1] == '': cleaned.pop()
            if len(cleaned) >= 2: tbl.append(cleaned)
        else:
            flush_table()
            buf.append(raw)
    flush_table(); flush_lines()
    return out


def audit_block(lines):
    """このブロックが壊れて描画されるか判定し、理由を返す"""
    problems = []
    for kind, payload in group(lines):
        if kind == 'table':
            widths = {len(r) for r in payload}
            if len(widths) > 1:
                problems.append('表の列数が不揃い' + str(sorted(widths)))
        else:
            body = [l for l in payload if l.strip()]
            if not body: continue
            boxed = len([l for l in payload if FRAME_DET.search(l)])
            is_frame = boxed >= 2 and boxed >= len(body) * 0.5
            if is_frame:
                # 罫線が全部剥がされる。構造文字が含まれていれば意味が失われる
                if any(STRUCT.search(l) for l in payload):
                    problems.append('枠と誤判定され├└┬┴┼が削除される')
                else:
                    problems.append('枠と誤判定され罫線が削除される')
            else:
                # 枠でない＝素のテキスト。桁揃えに依存していれば崩れる
                if len([l for l in body if PAD.search(l)]) >= 2:
                    problems.append('全角空白の桁揃えが崩れる')
                elif len([l for l in body if FRAME_DET.search(l)]) >= 2:
                    problems.append('罫線が等幅前提で崩れる')
    return problems


counter = collections.Counter()
per_file = collections.Counter()
examples = collections.defaultdict(list)

for f in sorted(glob.glob('data/**/*.ts', recursive=True)):
    t = open(f, encoding='utf-8').read()
    st = [m.start() for m in re.finditer(r'【図解】', t)]
    if not st: continue
    st.append(len(t))
    for i in range(len(st) - 1):
        blk = t[st[i]:st[i+1]]
        e = blk.find('⚠')
        if e != -1: blk = blk[:e]
        sep = '\\n' if '\\n' in blk else '\n'
        raw_lines = blk.split(sep)
        title = raw_lines[0][:40]
        body = raw_lines[1:]
        probs = audit_block(body)
        if probs:
            per_file[f] += 1
            for p in probs:
                counter[p] += 1
                if len(examples[p]) < 3:
                    examples[p].append(f + ' :: ' + title)

print('=== 実装を再現した判定：壊れて描画されるブロック ===')
total = sum(per_file.values())
print('合計 ' + str(total) + ' ブロック / ' + str(len(per_file)) + ' ファイル\n')
print('--- 原因別 ---')
for k, v in counter.most_common():
    print('  ' + str(v).rjust(5) + '  ' + k)
    for ex in examples[k]: print('           ' + ex)
print('\n--- ファイル別（上位25） ---')
for f, n in per_file.most_common(25):
    print('  ' + str(n).rjust(4) + '  ' + f)
