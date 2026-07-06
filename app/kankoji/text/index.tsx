import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const SUBJECTS = [
  { key: 'genron', name: '原論・電気・建築', emoji: '🌡️', color: '#455A64', desc: '流体・熱・湿り空気・電動機・梁貫通' },
  { key: 'kucho', name: '空調設備', emoji: '❄️', color: '#1565C0', desc: '熱負荷・空調方式・換気・排煙・熱源機器' },
  { key: 'eisei', name: '給排水衛生設備', emoji: '🚰', color: '#00838F', desc: '給水・給湯・排水通気・消火・ガス' },
  { key: 'sekou', name: '施工管理法', emoji: '🔧', color: '#E65100', desc: '機器据付・配管・ダクト・試験・工程' },
  { key: 'hoki', name: '法規', emoji: '⚖️', color: '#6A1B9A', desc: '労安法・建設業法・消防法・建基法・水道法' },
];

export default function KankojiTextIndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>📖 管工事テキスト</Text>
        <Text style={styles.sub}>本試験レベルの要点整理 ／ 図解・頻出数値つき</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SUBJECTS.map(s => (
          <TouchableOpacity
            key={s.key}
            style={styles.card}
            onPress={() => router.push(`/kankoji/text/${s.key}` as any)}
            activeOpacity={0.85}
          >
            <View style={[styles.icon, { backgroundColor: s.color }]}>
              <Text style={styles.emoji}>{s.emoji}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.name}>{s.name}</Text>
              <Text style={styles.desc}>{s.desc}</Text>
              <Text style={[styles.meta, { color: s.color }]}>2章収録</Text>
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
  header: { backgroundColor: '#004D40', paddingHorizontal: 20, paddingVertical: 16 },
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
