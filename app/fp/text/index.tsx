import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { fpTextbook } from '../../../data/fp_text';

// 実テキストデータから分野別のセクション数を集計（ハードコードせずズレを防ぐ）
const SECTION_COUNT: Record<string, number> = {};
fpTextbook.forEach((ch) => {
  SECTION_COUNT[ch.subject] = (SECTION_COUNT[ch.subject] ?? 0) + ch.sections.length;
});

const SUBJECTS = [
  { key: 'life', name: 'ライフプランニングと資金計画', emoji: '👨‍👩‍👧', color: '#0D7C3D', desc: '6つの係数・社会保険・住宅/教育資金・iDeCo' },
  { key: 'risk', name: 'リスク管理', emoji: '🛡️', color: '#1565C0', desc: '生命保険の仕組み・税務・損害保険・地震保険' },
  { key: 'asset', name: '金融資産運用', emoji: '📈', color: '#6A1B9A', desc: '債券利回り・PER/PBR/ROE・NISA・ポートフォリオ' },
  { key: 'tax', name: 'タックスプランニング', emoji: '📊', color: '#E65100', desc: '10種類の所得・損益通算・所得控除・税額控除' },
  { key: 'realestate', name: '不動産', emoji: '🏘️', color: '#4E342E', desc: '登記・4つの価格・借地借家・譲渡特例・利回り' },
  { key: 'inheritance', name: '相続・事業承継', emoji: '📜', color: '#880E4F', desc: '法定相続分・相続税計算・贈与・宅地評価' },
];

export default function FpTextIndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>📖 FPテキスト</Text>
        <Text style={styles.sub}>6分野の要点整理 ／ 計算公式・図解つき</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SUBJECTS.map(s => (
          <TouchableOpacity
            key={s.key}
            style={styles.card}
            onPress={() => router.push(`/fp/text/${s.key}` as any)}
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
  header: { backgroundColor: '#085C2D', paddingHorizontal: 20, paddingVertical: 16 },
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
