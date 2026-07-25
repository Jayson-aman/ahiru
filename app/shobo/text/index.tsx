import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { getShoboText } from '../../../data/shobo_text';

const SUBJECTS = [
  { key: 'horei_kyotsu', name: '消防関係法令（共通）', emoji: '📜', color: '#C62828', desc: '防火対象物・設置単位・点検報告・消防設備士制度' },
  { key: 'horei_rui',    name: '消防関係法令（類別）', emoji: '📋', color: '#AD1457', desc: '各類の設置義務・警戒区域・ヘッド配置' },
  { key: 'kiso_kikai',   name: '基礎的知識（機械）',   emoji: '⚙️', color: '#455A64', desc: '力学・材料・水理・ポンプ' },
  { key: 'kiso_denki',   name: '基礎的知識（電気）',   emoji: '⚡', color: '#EF6C00', desc: 'オームの法則・交流回路・計測' },
  { key: 'kozo_kikai',   name: '構造・機能（機械）',   emoji: '🚿', color: '#00695C', desc: '消火栓・スプリンクラー・泡・避難器具' },
  { key: 'kozo_denki',   name: '構造・機能（電気）',   emoji: '🔔', color: '#1565C0', desc: '感知器・受信機・発信機・配線・試験' },
  { key: 'kikaku',       name: '構造・機能（規格）',   emoji: '📐', color: '#6A1B9A', desc: '規格省令・表示事項・検定制度' },
  { key: 'jitsugi',      name: '実技（鑑別等・製図）', emoji: '✍️', color: '#D32F2F', desc: '工具・機器の鑑別／警戒区域・配線本数' },
];

export default function ShoboTextIndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>📖 消防設備士甲種テキスト</Text>
        <Text style={styles.sub}>本試験レベルの要点整理 ／ 図解・比較表つき</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SUBJECTS.map(s => {
          const count = getShoboText(s.key).length;
          return (
            <TouchableOpacity
              key={s.key}
              style={styles.card}
              onPress={() => router.push(`/shobo/text/${s.key}` as any)}
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
  header: { backgroundColor: '#D32F2F', paddingHorizontal: 20, paddingVertical: 16 },
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
