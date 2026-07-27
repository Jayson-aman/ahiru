import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { takkeiTextbook } from '../../../data/takkei_text';

// 実テキストデータから科目別のセクション数を集計（ハードコードせずズレを防ぐ）
const SECTION_COUNT: Record<string, number> = {};
takkeiTextbook.forEach((ch) => {
  SECTION_COUNT[ch.subject] = (SECTION_COUNT[ch.subject] ?? 0) + ch.sections.length;
});

const SUBJECTS = [
  { key: 'kenri', name: '権利関係', emoji: '🤝', color: '#1565C0', desc: '意思表示・物権変動・抵当権・借地借家・相続' },
  { key: 'gyoho', name: '宅建業法', emoji: '📋', color: '#C62828', desc: '免許・宅建士・保証金・媒介・35/37条・8種制限・報酬' },
  { key: 'horei', name: '法令上の制限', emoji: '🏙️', color: '#2E7D32', desc: '都市計画・開発許可・建築基準・国土法・農地法' },
  { key: 'zei', name: '税・その他', emoji: '🧾', color: '#E65100', desc: '不動産取得税・固定資産税・譲渡所得・印紙税・地価公示' },
];

export default function TakkeiTextIndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>📖 宅建テキスト</Text>
        <Text style={styles.sub}>本試験レベルの要点整理 ／ 図解・比較表つき</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SUBJECTS.map(s => (
          <TouchableOpacity
            key={s.key}
            style={styles.card}
            onPress={() => router.push(`/takkei/text/${s.key}` as any)}
            activeOpacity={0.85}
          >
            <View style={[styles.icon, { backgroundColor: s.color }]}>
              <Text style={styles.emoji}>{s.emoji}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.name}>{s.name}</Text>
              <Text style={styles.desc}>{s.desc}</Text>
              <Text style={[styles.meta, { color: s.color }]}>{SECTION_COUNT[s.key] ?? 0}セクション収録</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { backgroundColor: '#6B3210', paddingHorizontal: 20, paddingVertical: 16 },
  back: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700', marginBottom: 8 },
  title: { fontSize: 20, fontWeight: '900', color: '#FFF' },
  sub: { fontSize: 12, color: 'rgba(255,255,255,0.75)', fontWeight: '600', marginTop: 2 },
  content: { padding: 16, paddingBottom: 40 },
  card: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF',
    borderRadius: 16, padding: 16, marginBottom: 12, gap: 14,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 6, elevation: 3,
  },
  icon: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  emoji: { fontSize: 26 },
  body: { flex: 1 },
  name: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 3 },
  desc: { fontSize: 11, color: '#888', fontWeight: '500', marginBottom: 4 },
  meta: { fontSize: 12, fontWeight: '700' },
  arrow: { fontSize: 26, color: '#CCC' },
});
