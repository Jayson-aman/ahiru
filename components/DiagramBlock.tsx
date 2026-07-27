import React from 'react';
import { View, Text, StyleSheet, Platform, ScrollView, TextStyle, StyleProp } from 'react-native';

/**
 * 【図解】ブロックの本文を描画する共通レンダラー。
 *
 * 従来は全行を等幅フォントの素のテキストで出していたため、
 *  ・「｜」で区切った比較表 → 端末では列が揃わず読めない
 *  ・「┌ │ └」で囲んだ枠   → 枠線がガタつく
 * という問題があった（iOSの等幅フォントMenloは日本語グリフを持たず、
 * 日本語部分だけプロポーショナルフォントに落ちるため桁が合わない）。
 *
 * そこで行の形を判定して描き分ける：
 *  ・表      → Viewのflexboxで本物の表として描画（列が必ず揃う）
 *  ・枠      → 枠線付きViewに変換（罫線文字は取り除く）
 *  ・ツリー  → 左詰めのまま等幅で描画（├└は意味があるので残す）
 *  ・通常行  → 記号（★○×→）で色分け
 */

const MONO = Platform.select({
  ios: 'Menlo',
  android: 'monospace',
  web: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  default: 'monospace',
});

/** 表の区切り文字（全角・半角の縦棒） */
const CELL_SEP = /[｜|]/;
/** 表の罫線行（───┼─── のような行）は表示しない */
const RULE_ROW = /^[\s　─━-]*[┼┴┬├┤]*[\s　─━┼┴┬├┤-]*$/;
/** 枠線を構成する文字（描画時に取り除く） */
const BOX_CHARS = /[┌┐└┘├┤┬┴┼│┃║╔╗╚╝]/g;

type Row = { kind: 'table'; rows: string[][] } | { kind: 'lines'; lines: string[] };

/** 行の並びを「表」と「それ以外」に分割する */
function group(lines: string[]): Row[] {
  const out: Row[] = [];
  let buf: string[] = [];
  let tbl: string[][] = [];

  const flushLines = () => { if (buf.length) { out.push({ kind: 'lines', lines: buf }); buf = []; } };
  const flushTable = () => { if (tbl.length) { out.push({ kind: 'table', rows: tbl }); tbl = []; } };

  for (const raw of lines) {
    const t = raw.trim();
    // 表の罫線行はスキップ（表の途中なら継続扱い）
    if (tbl.length && RULE_ROW.test(t) && t.length > 0) continue;

    const cells = t.split(CELL_SEP);
    const isTableRow = cells.length >= 3 && CELL_SEP.test(t);

    if (isTableRow) {
      flushLines();
      // 前後の空セルを落として整形
      const cleaned = cells.map(c => c.replace(BOX_CHARS, '').trim());
      while (cleaned.length && cleaned[0] === '') cleaned.shift();
      while (cleaned.length && cleaned[cleaned.length - 1] === '') cleaned.pop();
      if (cleaned.length >= 2) tbl.push(cleaned);
    } else {
      flushTable();
      buf.push(raw);
    }
  }
  flushTable();
  flushLines();
  return out;
}

/** 行の記号に応じた色を返す */
function lineStyle(ln: string, accent: string): StyleProp<TextStyle> {
  const t = ln.trim();
  if (t.includes('★') || t.includes('⚠')) return [s.line, s.hot];
  if (/^[○◎✓]/.test(t) || t.includes('→ 有効') || t.includes(' OK')) return [s.line, s.good];
  if (/^[×✕]/.test(t) || t.startsWith('誤') || t.includes('禁止') || t.includes('不可')) return [s.line, s.bad];
  if (t.startsWith('→') || t.startsWith('⇒')) return [s.line, { color: accent, fontWeight: '700' as const }];
  return s.line;
}

/** セル内の記号で色を決める（表用） */
function cellColor(text: string): StyleProp<TextStyle> {
  if (text.includes('★')) return s.cellHot;
  if (/^[○◎✓]/.test(text)) return s.cellGood;
  if (/^[×✕]/.test(text)) return s.cellBad;
  return null;
}

/**
 * 5列以上になると1セルの幅が3〜4文字分しか取れず、「1,000千円」のような
 * 語が数行に折り返して読めなくなる（iPhone SEで7列だと1セル2.6文字）。
 * そこで列数が多い表は幅を内容に合わせて確保し、横スクロールで見せる。
 */
const WIDE_COLS = 5;
const CHAR_W = 11.5;      // 全角1文字ぶんの目安（fontSize と同じ）
const CELL_PAD = 14;      // paddingHorizontal:7 × 2
const MIN_COL_W = 58;
const MAX_COL_W = 150;

function TableView({ rows, accent }: { rows: string[][]; accent: string }) {
  const cols = Math.max(...rows.map(r => r.length));
  // 1列目は項目名なので少し広めに
  const flexOf = (i: number) => (cols > 2 && i === 0 ? 1.25 : 1);
  const wide = cols >= WIDE_COLS;

  // 横スクロール時は列ごとに「中身が収まる幅」を割り当てる
  const widthOf = (ci: number) => {
    const longest = rows.reduce((m, r) => Math.max(m, (r[ci] ?? '').length), 0);
    return Math.min(MAX_COL_W, Math.max(MIN_COL_W, longest * CHAR_W + CELL_PAD));
  };

  const table = (
    <View style={s.table}>
      {rows.map((row, ri) => {
        const header = ri === 0;
        return (
          <View
            key={ri}
            style={[
              s.tr,
              header && { backgroundColor: accent },
              !header && ri % 2 === 0 && s.trAlt,
            ]}
          >
            {Array.from({ length: cols }).map((_, ci) => {
              const txt = row[ci] ?? '';
              return (
                <View
                  key={ci}
                  style={[s.td, wide ? { width: widthOf(ci) } : { flex: flexOf(ci) }, ci > 0 && s.tdBorder]}
                >
                  <Text style={[s.cell, header ? s.cellHead : cellColor(txt)]}>{txt}</Text>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );

  if (!wide) return table;
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator contentContainerStyle={s.wideScroll}>
      {table}
    </ScrollView>
  );
}

/** 枠線文字で囲まれた行のかたまりを、枠付きViewに変換して描画 */
function LinesView({ lines, accent }: { lines: string[]; accent: string }) {
  // ┌ や │ が使われている行が過半なら「枠」とみなして枠線Viewにする
  const boxed = lines.filter(l => /[┌┐└┘│┃║╔╗╚╝]/.test(l)).length;
  const isFrame = boxed >= 2 && boxed >= lines.filter(l => l.trim()).length * 0.5;

  const body = lines.map((ln, i) => {
    const shown = isFrame ? ln.replace(BOX_CHARS, '').replace(/\s+$/, '') : ln;
    if (!shown.trim()) return <View key={i} style={{ height: 4 }} />;
    return (
      <Text key={i} style={lineStyle(shown, accent)}>
        {shown.length ? shown : ' '}
      </Text>
    );
  });

  if (isFrame) {
    return <View style={[s.frame, { borderColor: accent }]}>{body}</View>;
  }
  return <>{body}</>;
}

export default function DiagramBlock({ lines, accent }: { lines: string[]; accent: string }) {
  const groups = group(lines);
  return (
    <>
      {groups.map((g, i) =>
        g.kind === 'table'
          ? <TableView key={i} rows={g.rows} accent={accent} />
          : <LinesView key={i} lines={g.lines} accent={accent} />
      )}
    </>
  );
}

const s = StyleSheet.create({
  line: { fontFamily: MONO as string, fontSize: 12.5, lineHeight: 20, color: '#1A2A44' },
  hot: { backgroundColor: '#FFF3E0', color: '#B34700', fontWeight: '700' },
  good: { color: '#1B5E20' },
  bad: { color: '#B71C1C' },

  // 枠線で囲まれていた部分
  frame: {
    borderWidth: 1.5, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 8,
    marginVertical: 6, backgroundColor: '#FFFFFF',
  },

  // 表
  table: {
    borderWidth: 1, borderColor: '#C9DCF5', borderRadius: 8,
    overflow: 'hidden', marginVertical: 8,
  },
  // 列数が多い表を横スクロールで見せるときの外枠
  wideScroll: { paddingRight: 2 },
  tr: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#E3ECF8' },
  trAlt: { backgroundColor: '#F4F8FF' },
  td: { paddingHorizontal: 7, paddingVertical: 6, justifyContent: 'center' },
  tdBorder: { borderLeftWidth: 1, borderLeftColor: '#E3ECF8' },
  cell: { fontSize: 11.5, lineHeight: 17, color: '#1A2A44', fontWeight: '500' },
  cellHead: { color: '#FFFFFF', fontWeight: '800', fontSize: 11.5 },
  cellHot: { color: '#B34700', fontWeight: '700' },
  cellGood: { color: '#1B5E20', fontWeight: '600' },
  cellBad: { color: '#B71C1C', fontWeight: '600' },
});
