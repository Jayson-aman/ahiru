import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { getLpgasText } from '../../../data/lpgas_text';

const SUBJECTS = [
  { key: 'kiso',    name: '基礎的な物理学的性質及び化学的性質', emoji: '🧪', color: '#1565C0', desc: 'LPガスの性状・気化熱・比重・蒸気圧' },
  { key: 'nensho',  name: '燃焼工学に関する知識',           emoji: '🔥', color: '#C62828', desc: '燃焼理論・完全燃焼と不完全燃焼・理論空気量' },
  { key: 'kyokyu',  name: '供給設備に関する知識',           emoji: '🚚', color: '#00838F', desc: '容器・調整器・供給管・気化装置' },
  { key: 'shohi',   name: '消費設備に関する知識',           emoji: '🏠', color: '#EF6C00', desc: '配管・燃焼器具・換気・ガス漏れ警報器' },
  { key: 'horei',   name: '関係法令',                      emoji: '📜', color: '#6A1B9A', desc: 'LPガス法・保安業務・設備士の義務' },
];

export default function LpgasTextIndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>📖 液化石油ガス設備士テキスト</Text>
        <Text style={styles.sub}>学科試験レベルの要点整理 ／ 図解・比較表つき</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SUBJECTS.map(s => {
          const count = getLpgasText(s.key).length;
          return (
            <TouchableOpacity
              key={s.key}
              style={styles.card}
              onPress={() => router.push(`/lpgas/text/${s.key}` as any)}
              activeOpacity={0.85}
            >
              <View style={[styles.icon, { backgroundColor: s.color }]}>
                <Text style={styles.emoji}>{s.emoji}</Text>
              </View>
              <View style={styles.body}>
                <Text style={styles.name}>{s.name}</Text>
                <Text style={styles.desc}>{s.desc}</Text>
                <Text style={[styles.meta, { color: s.color }]}>{count}セクション収録</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { backgroundColor: '#F57F17', paddingHorizontal: 20, paddingVertical: 16 },
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
