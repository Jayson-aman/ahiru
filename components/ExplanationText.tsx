import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Platform, TextStyle, StyleProp, Animated } from 'react-native';
import DiagramBlock from './DiagramBlock';

type Props = {
  text: string;
  style?: StyleProp<TextStyle>;
};

// 等幅系フォント（図解の桁ずれ防止）。iOS/Android/Web それぞれで利用可能なものを指定
const MONO_FONT = Platform.select({
  ios: 'Menlo',
  android: 'monospace',
  web: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  default: 'monospace',
});

/**
 * 解説テキストの描画コンポーネント（フルカラー版）。
 * 「【図解】」ブロックを検出し、行の内容に応じて色分けして描画する：
 *  ・タイトル行 → 青のヘッダーチップ
 *  ・★/⚠ を含む行 → オレンジのハイライト（最重要ポイント）
 *  ・○/◎ で始まる行 → 緑（正しい・適合）
 *  ・×/誤 を含む行頭 → 赤（誤り・禁止）
 * 画像ではなくコード描画のため、iPhone/iPad/Webで崩れず拡大にも強い。
 */
export default function ExplanationText({ text, style }: Props) {
  const idx = text.indexOf('【図解】');
  if (idx === -1) {
    return <Text style={style}>{text}</Text>;
  }

  const before = text.slice(0, idx).replace(/\n+$/, '');
  const diagram = text.slice(idx);
  const lines = diagram.split('\n');
  const titleLine = lines[0].replace('【図解】', '').trim();
  const body = lines.slice(1);

  const lineStyle = (ln: string): StyleProp<TextStyle> => {
    const t = ln.trim();
    if (t.includes('★') || t.includes('⚠')) return [s.line, s.lineHot];
    if (/^[○◎]/.test(t) || t.includes('→ 有効') || t.includes('OK')) return [s.line, s.lineGood];
    if (/^[××]/.test(t) || t.startsWith('誤') || t.includes('禁止') || t.includes('不可')) return [s.line, s.lineBad];
    if (t.startsWith('→') || t.startsWith('⇒')) return [s.line, s.lineArrow];
    return s.line;
  };

  return (
    <View style={s.wrap}>
      {before.length > 0 && <Text style={style}>{before}</Text>}
      <AnimatedDiagram>
        <View style={s.diagramBox}>
          <View style={s.headerRow}>
            <View style={s.headerChip}><Text style={s.headerChipText}>図解</Text></View>
            <Text style={s.headerTitle}>{titleLine}</Text>
          </View>
          <DiagramBlock lines={body} accent="#1E5FBE" />
        </View>
      </AnimatedDiagram>
    </View>
  );
}

/** 図解カードを、表示時にふわっと現れる「動く図解」にする */
function AnimatedDiagram({ children }: { children: React.ReactNode }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 380, useNativeDriver: true }),
      Animated.timing(translateY, { toValue: 0, duration: 380, useNativeDriver: true }),
    ]).start();
  }, []);
  return (
    <Animated.View style={{ opacity, transform: [{ translateY }] }}>
      {children}
    </Animated.View>
  );
}

const s = StyleSheet.create({
  wrap: { gap: 8 },
  diagramBox: {
    backgroundColor: '#F7FAFF',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#C9DCF5',
  },
  headerRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  headerChip: { backgroundColor: '#1E5FBE', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
  headerChipText: { fontSize: 11, fontWeight: '900', color: '#FFFFFF' },
  headerTitle: { flex: 1, fontSize: 13, fontWeight: '800', color: '#123B78' },
  line: {
    fontFamily: MONO_FONT as string,
    fontSize: 13,
    lineHeight: 21,
    color: '#1A2A44',
  },
  lineHot: {
    backgroundColor: '#FFF3E0',
    color: '#B34700',
    fontWeight: '700',
  },
  lineGood: { color: '#1B5E20' },
  lineBad: { color: '#B71C1C' },
  lineArrow: { color: '#4527A0', fontWeight: '600' },
});
