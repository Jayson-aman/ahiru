import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { dobokusekouTextbook } from '../../../data/dobokusekou_text';

// 実テキストデータから科目別のセクション数を集計（ハードコードせずズレを防ぐ）
const SECTION_COUNT: Record<string, number> = {};
dobokusekouTextbook.forEach((ch) => {
  SECTION_COUNT[ch.subject] = (SECTION_COUNT[ch.subject] ?? 0) + ch.sections.length;
});

const SUBJECTS = [
  { key: 'doboku', name: '土木一般', emoji: '⛰️', color: '#6D4C41', desc: '土工・締固め・コンクリート・基礎工' },
  { key: 'senmon', name: '専門土木', emoji: '🌊', color: '#00695C', desc: '河川・道路舗装・トンネル・鋼構造物・鉄道' },
  { key: 'kanri', name: '施工管理法', emoji: '📅', color: '#2E7D32', desc: '工程管理・品質管理・安全管理・環境保全' },
  { key: 'hoki', name: '土木法規', emoji: '⚖️', color: '#6A1B9A', desc: '建設業法・労働基準法・道路法・河川法' },
];

export default function DobokusekouTextIndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>📖 土木施工管理テキスト</Text>
        <Text style={styles.sub}>本試験レベルの要点整理 ／ 図解・頻出数値つき</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SUBJECTS.map(s => (
          <TouchableOpacity
            key={s.key}
            style={styles.card}
            onPress={() => router.push(`/dobokusekou/text/${s.key}` as any)}
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
  header: { backgroundColor: '#00352C', paddingHorizontal: 20, paddingVertical: 16 },
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
