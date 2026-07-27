import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { denkisekouTextbook } from '../../../data/denkisekou_text';

// 実テキストデータから科目別のセクション数を集計（ハードコードせずズレを防ぐ）
const SECTION_COUNT: Record<string, number> = {};
denkisekouTextbook.forEach((ch) => {
  SECTION_COUNT[ch.subject] = (SECTION_COUNT[ch.subject] ?? 0) + ch.sections.length;
});

const SUBJECTS = [
  { key: 'riron', name: '電気工学', emoji: '⚡', color: '#EF6C00', desc: '力率改善・電動機・変圧器・照明・蓄電池' },
  { key: 'setsubi', name: '電気設備', emoji: '🏭', color: '#1565C0', desc: '受変電・幹線・接地・配線工事・非常電源' },
  { key: 'sekou', name: '施工管理法', emoji: '🔧', color: '#2E7D32', desc: '絶縁抵抗・竣工検査・停電作業・工程管理' },
  { key: 'hoki', name: '法規', emoji: '⚖️', color: '#6A1B9A', desc: '電気工事士法・電気事業法・建設業法・労安法' },
];

export default function DenkisekouTextIndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>📖 電気工事テキスト</Text>
        <Text style={styles.sub}>本試験レベルの要点整理 ／ 図解・頻出数値つき</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SUBJECTS.map(s => (
          <TouchableOpacity
            key={s.key}
            style={styles.card}
            onPress={() => router.push(`/denkisekou/text/${s.key}` as any)}
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
  header: { backgroundColor: '#B34700', paddingHorizontal: 20, paddingVertical: 16 },
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
