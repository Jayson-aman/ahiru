import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { getConcreteText } from '../../../data/concrete_text';

const SUBJECTS = [
  { key: 'zairyo',  name: 'コンクリート用材料', emoji: '🧱', color: '#6D4C41', desc: 'セメント・骨材・混和材料・水・鋼材' },
  { key: 'haigo',   name: '配合設計と性質',     emoji: '📐', color: '#1565C0', desc: '水セメント比・単位量計算・強度・収縮' },
  { key: 'seizo',   name: '製造・品質管理',     emoji: '🏭', color: '#00695C', desc: 'JIS A 5308・計量・試験・検査' },
  { key: 'sekou',   name: '施工',               emoji: '🏗️', color: '#EF6C00', desc: '圧送・打込み・締固め・養生・型枠' },
  { key: 'kakushu', name: '各種コンクリート',   emoji: '🧊', color: '#5E35B1', desc: '寒中暑中・マス・高強度・PC・PCa' },
  { key: 'shindan', name: '劣化診断・補修補強', emoji: '🔍', color: '#C62828', desc: '中性化・塩害・ASR・診断技術・補修工法' },
];

export default function ConcreteTextIndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>📖 コンクリート技士・診断士テキスト</Text>
        <Text style={styles.sub}>本試験レベルの要点整理 ／ 図解・比較表つき</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SUBJECTS.map(s => {
          const count = getConcreteText(s.key).length;
          return (
            <TouchableOpacity
              key={s.key}
              style={styles.card}
              onPress={() => router.push(`/concrete/text/${s.key}` as any)}
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
  header: { backgroundColor: '#6D4C41', paddingHorizontal: 20, paddingVertical: 16 },
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
