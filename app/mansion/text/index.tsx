import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const SUBJECTS = [
  { key: 'kubunsho', name: '区分所有法', emoji: '⚖️', color: '#7B1FA2', desc: '専有・共用部分、決議要件一覧、義務違反者への措置', sections: 2 },
  { key: 'tekiseika', name: 'マンション管理適正化法', emoji: '📋', color: '#1565C0', desc: '管理業者・管理業務主任者・管理計画認定制度', sections: 2 },
  { key: 'kiyaku', name: '標準管理規約', emoji: '📖', color: '#2E7D32', desc: '専有部分の範囲・費用負担・総会/理事会の運営', sections: 2 },
  { key: 'minpo', name: '民法・その他法令', emoji: '🏛️', color: '#E65100', desc: '意思表示・時効・円滑化法・品確法・頻出数値', sections: 2 },
  { key: 'setsubi', name: '建物・設備', emoji: '🔧', color: '#4E342E', desc: '耐震基準・劣化・給排水方式・消防設備の基準', sections: 2 },
  { key: 'unei', name: '管理組合の運営', emoji: '🏢', color: '#880E4F', desc: '会計仕訳・滞納対応・長期修繕計画・保険', sections: 2 },
];

export default function MansionTextIndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>📖 マンション管理士テキスト</Text>
        <Text style={styles.sub}>本試験レベルの要点整理 ／ 図解・比較表つき</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SUBJECTS.map(s => (
          <TouchableOpacity
            key={s.key}
            style={styles.card}
            onPress={() => router.push(`/mansion/text/${s.key}` as any)}
            activeOpacity={0.85}
          >
            <View style={[styles.icon, { backgroundColor: s.color }]}>
              <Text style={styles.emoji}>{s.emoji}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.name}>{s.name}</Text>
              <Text style={styles.desc}>{s.desc}</Text>
              <Text style={[styles.meta, { color: s.color }]}>{s.sections}章収録</Text>
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
  header: { backgroundColor: '#4A0072', paddingHorizontal: 20, paddingVertical: 16 },
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
