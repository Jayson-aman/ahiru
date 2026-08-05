import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { getKoatsuText } from '../../../data/koatsu_text';

const SUBJECTS = [
  { key: 'hoan',         name: '保安管理技術（共通）', emoji: '🛡️', color: '#37474F', desc: '高圧ガスの物性・爆発防止・保安管理体制' },
  { key: 'horei',        name: '法令（共通）',        emoji: '📜', color: '#6A1B9A', desc: '高圧ガス保安法・容器保安規則・製造施設の基準' },
  { key: 'gakushiki_ka', name: '学識（化学）',        emoji: '🧪', color: '#1565C0', desc: '化学熱力学・反応工学・化学設備の材料と腐食' },
  { key: 'gakushiki_ki', name: '学識（機械）',        emoji: '⚙️', color: '#C62828', desc: '機械力学・材料力学・圧縮機とポンプ・熱と流体' },
];

export default function KoatsuTextIndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>📖 高圧ガス製造保安責任者テキスト</Text>
        <Text style={styles.sub}>要点整理 ／ 図解・比較表つき</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SUBJECTS.map(s => {
          const count = getKoatsuText(s.key).length;
          return (
            <TouchableOpacity
              key={s.key}
              style={styles.card}
              onPress={() => router.push(`/koatsu/text/${s.key}` as any)}
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
  header: { backgroundColor: '#37474F', paddingHorizontal: 20, paddingVertical: 16 },
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
