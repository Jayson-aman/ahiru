import React from 'react';
import { View, Text, StyleSheet, Platform, TextStyle, StyleProp } from 'react-native';

type Props = {
  text: string;
  /** アクセント色（各資格の科目色）。ヘッダー・図解の見出しに使う */
  accent?: string;
};

const MONO = Platform.select({
  ios: 'Menlo',
  android: 'monospace',
  web: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  default: 'monospace',
});

type Block =
  | { kind: 'header'; text: string }
  | { kind: 'diagram'; title: string; lines: string[] }
  | { kind: 'para'; lines: string[] };

const SEP = /^[━─—\-=＝]{3,}$/;

/**
 * 教科書本文（＝各資格の *_text.ts の body）を、色付きの図解つきで描画する共通レンダラー。
 *  ・「🔑 見出し」 → アクセント色の見出しバー
 *  ・「【図解】…」ブロック → 枠付きカード＋行ごとに色分け（★⚠=橙 / ○◎=緑 / ×誤=赤 / →⇒=紫）
 *  ・「・」箇条書き → ドット付き、字下げにも対応
 *  ・「━━━」等の区切り線 → 見出しの装飾として吸収
 * これ一つで全13資格の教科書表示が一斉に見やすくなる。
 */
export default function StudyText({ text, accent = '#1565C0' }: Props) {
  const blocks = parse(text ?? '');
  return (
    <View style={s.wrap}>
      {blocks.map((b, i) => {
        if (b.kind === 'header') {
          return (
            <View key={i} style={s.headerRow}>
              <View style={[s.headerBar, { backgroundColor: accent }]} />
              <Text style={[s.headerText, { color: accent }]}>{b.text}</Text>
            </View>
          );
        }
        if (b.kind === 'diagram') {
          return (
            <View key={i} style={s.figBox}>
              <View style={s.figHead}>
                <View style={[s.figChip, { backgroundColor: accent }]}>
                  <Text style={s.figChipText}>図解</Text>
                </View>
                {b.title ? <Text style={[s.figTitle, { color: shade(accent) }]}>{b.title}</Text> : null}
              </View>
              {b.lines.map((ln, j) => (
                <Text key={j} style={lineStyle(ln)}>{ln.length ? ln : ' '}</Text>
              ))}
            </View>
          );
        }
        // paragraph
        return (
          <View key={i} style={s.para}>
            {b.lines.map((ln, j) => renderParaLine(ln, j))}
          </View>
        );
      })}
    </View>
  );
}

function parse(text: string): Block[] {
  const lines = text.replace(/\r/g, '').split('\n');
  const out: Block[] = [];
  let i = 0;
  const isBoundary = (t: string) =>
    t === '' || t.startsWith('🔑') || t.includes('【図解】') || SEP.test(t);

  while (i < lines.length) {
    const t = lines[i].trim();
    if (t === '' || SEP.test(t)) { i++; continue; }

    if (t.startsWith('🔑')) {
      out.push({ kind: 'header', text: t.replace(/^🔑\s*/, '').trim() });
      i++; continue;
    }

    if (t.includes('【図解】')) {
      const title = t.slice(t.indexOf('【図解】') + 4).trim();
      const body: string[] = [];
      let j = i + 1;
      while (j < lines.length) {
        const lt = lines[j].trim();
        if (lt === '' || lt.startsWith('🔑') || lt.includes('【図解】') || SEP.test(lt)) break;
        body.push(lines[j]);
        j++;
      }
      out.push({ kind: 'diagram', title, lines: body });
      i = j; continue;
    }

    // paragraph
    const para: string[] = [];
    while (i < lines.length && !isBoundary(lines[i].trim())) {
      para.push(lines[i]);
      i++;
    }
    if (para.length) out.push({ kind: 'para', lines: para });
  }
  return out;
}

function lineStyle(ln: string): StyleProp<TextStyle> {
  const t = ln.trim();
  if (t.includes('★') || t.includes('⚠')) return [s.line, s.lineHot];
  if (/^[○◎✓]/.test(t) || t.includes('→ 有効') || t.includes(' OK')) return [s.line, s.lineGood];
  if (/^[×✕]/.test(t) || t.startsWith('誤') || t.includes('禁止') || t.includes('不可')) return [s.line, s.lineBad];
  if (t.startsWith('→') || t.startsWith('⇒')) return [s.line, s.lineArrow];
  return s.line;
}

function renderParaLine(ln: string, key: number) {
  const t = ln.replace(/\t/g, '  ');
  const trimmed = t.trim();
  if (trimmed === '') return <View key={key} style={{ height: 6 }} />;
  const hot = trimmed.includes('★') || trimmed.includes('⚠');
  // 箇条書き（・ や 全角スペース字下げ）
  const bulletMatch = trimmed.match(/^([・\-])\s?(.*)$/);
  if (bulletMatch) {
    return (
      <View key={key} style={s.bulletRow}>
        <Text style={[s.bulletDot, hot && s.bodyHot]}>•</Text>
        <Text style={[s.body, hot && s.bodyHot]}>{bulletMatch[2]}</Text>
      </View>
    );
  }
  // 字下げ（先頭が全角/半角スペース）
  const indent = /^[ 　]+/.test(t) ? 14 : 0;
  return (
    <Text key={key} style={[s.body, hot && s.bodyHot, indent ? { paddingLeft: indent } : null]}>
      {trimmed}
    </Text>
  );
}

/** アクセント色を少し濃く（見出しタイトル用） */
function shade(hex: string): string {
  const m = hex.replace('#', '');
  if (m.length !== 6) return hex;
  const r = Math.max(0, parseInt(m.slice(0, 2), 16) - 40);
  const g = Math.max(0, parseInt(m.slice(2, 4), 16) - 40);
  const b = Math.max(0, parseInt(m.slice(4, 6), 16) - 40);
  return `rgb(${r},${g},${b})`;
}

const s = StyleSheet.create({
  wrap: { gap: 10, paddingTop: 12 },
  headerRow: { flexDirection: 'row', alignItems: 'center', gap: 9, marginTop: 6 },
  headerBar: { width: 4, alignSelf: 'stretch', minHeight: 18, borderRadius: 2 },
  headerText: { flex: 1, fontSize: 15.5, fontWeight: '900', letterSpacing: 0.2, lineHeight: 22 },
  para: { gap: 3 },
  body: { fontSize: 13.5, color: '#333', lineHeight: 23, fontWeight: '500' },
  bodyHot: { backgroundColor: '#FFF3E0', color: '#B34700', fontWeight: '700' },
  bulletRow: { flexDirection: 'row', gap: 7, paddingLeft: 2 },
  bulletDot: { fontSize: 13.5, lineHeight: 23, color: '#1E5FBE', fontWeight: '900' },
  figBox: {
    backgroundColor: '#F7FAFF', borderRadius: 12, padding: 12,
    borderWidth: 1, borderColor: '#C9DCF5', gap: 1,
  },
  figHead: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  figChip: { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
  figChipText: { fontSize: 11, fontWeight: '900', color: '#FFFFFF' },
  figTitle: { flex: 1, fontSize: 13, fontWeight: '800' },
  line: { fontFamily: MONO as string, fontSize: 12.5, lineHeight: 20, color: '#1A2A44' },
  lineHot: { backgroundColor: '#FFF3E0', color: '#B34700', fontWeight: '700' },
  lineGood: { color: '#1B5E20' },
  lineBad: { color: '#B71C1C' },
  lineArrow: { color: '#4527A0', fontWeight: '600' },
});
