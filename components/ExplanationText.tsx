import React from 'react';
import { View, Text, StyleSheet, Platform, TextStyle, StyleProp } from 'react-native';

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
 * 解説テキストの描画コンポーネント。
 * 「【図解】」を含む解説は、図解部分を専用の枠（等幅フォント＋背景色）で
 * 表示し、iPhone・iPad・Web いずれでも図が崩れず読みやすいようにする。
 */
export default function ExplanationText({ text, style }: Props) {
  const idx = text.indexOf('【図解】');
  if (idx === -1) {
    return <Text style={style}>{text}</Text>;
  }

  const before = text.slice(0, idx).replace(/\n+$/, '');
  const diagram = text.slice(idx);

  return (
    <View style={styles.wrap}>
      {before.length > 0 && <Text style={style}>{before}</Text>}
      <View style={styles.diagramBox}>
        <Text style={[style, styles.diagramText]}>{diagram}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 8 },
  diagramBox: {
    backgroundColor: '#F4F6FA',
    borderRadius: 12,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#1E5FBE',
  },
  diagramText: {
    fontFamily: MONO_FONT as string,
    fontSize: 13,
    lineHeight: 21,
    color: '#1A2A44',
  },
});
