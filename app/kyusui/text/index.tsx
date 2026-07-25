import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { getKyusuiText } from '../../../data/kyusui_text';

const SUBJECTS = [
  { key: 'koshu',   name: '公衆衛生概論',           emoji: '🧫', color: '#00838F', desc: '水系感染症・塩素消毒・水質基準' },
  { key: 'gyosei',  name: '水道行政',               emoji: '📜', color: '#5E35B1', desc: '水道法・主任技術者制度・指定事業者' },
  { key: 'koho',    name: '給水装置工事法',         emoji: '🔩', color: '#0277BD', desc: '分岐・埋設・接合・メーター設置' },
  { key: 'kozo',    name: '給水装置の構造及び性能', emoji: '🛡️', color: '#00695C', desc: '7つの性能基準・逆流防止・侵食防止' },
  { key: 'keikaku', name: '給水装置計画論',         emoji: '📐', color: '#E65100', desc: '給水方式・使用水量・口径決定' },
  { key: 'jimu',    name: '給水装置工事事務論',     emoji: '🗂️', color: '#6D4C41', desc: '主任技術者の職務・記録・関係法令' },
  { key: 'gaiyo',   name: '給水装置の概要',         emoji: '🚰', color: '#0288D1', desc: '管種・給水用具・湯沸器・メーター' },
  { key: 'sekokan', name: '給水装置施工管理法',     emoji: '🦺', color: '#F9A825', desc: '品質・工程・原価・安全の管理' },
];

export default function KyusuiTextIndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>📖 給水装置テキスト</Text>
        <Text style={styles.sub}>本試験レベルの要点整理 ／ 図解・比較表つき</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SUBJECTS.map(s => {
          const count = getKyusuiText(s.key).length;
          return (
            <TouchableOpacity
              key={s.key}
              style={styles.card}
              onPress={() => router.push(`/kyusui/text/${s.key}` as any)}
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
  header: { backgroundColor: '#0288D1', paddingHorizontal: 20, paddingVertical: 16 },
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
