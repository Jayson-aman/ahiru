import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { getCostText } from '../../../data/cost_text';

const SUBJECTS = [
  { key: 'gairon',  name: 'コスト管理概論', emoji: '📊', color: '#4527A0', desc: 'LCC・VE・コストプランニング・CM方式・原価管理' },
  { key: 'sekisan', name: '積算・数量算出', emoji: '📐', color: '#0277BD', desc: '工事費の構成・数量積算基準・歩掛・複合単価' },
  { key: 'keiyaku', name: '契約・法規',     emoji: '⚖️', color: '#C62828', desc: '建設業法・標準約款・設計変更・入札契約制度' },
  { key: 'keizai',  name: '経済調査・価格', emoji: '💹', color: '#2E7D32', desc: '物価指数・労務単価・スライド条項・EVM' },
];

export default function CostTextIndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>📖 建設コスト管理士テキスト</Text>
        <Text style={styles.sub}>本試験レベルの要点整理 ／ 図解・比較表つき</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SUBJECTS.map(s => {
          const count = getCostText(s.key).length;
          return (
            <TouchableOpacity
              key={s.key}
              style={styles.card}
              onPress={() => router.push(`/cost/text/${s.key}` as any)}
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
  header: { backgroundColor: '#4527A0', paddingHorizontal: 20, paddingVertical: 16 },
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
