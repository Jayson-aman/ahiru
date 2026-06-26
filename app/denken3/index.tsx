import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const SUBJECTS = [
  { key: 'rikigaku', name: '理論', emoji: '⚡', color: '#E65100', examCount: 15, desc: '電気回路・電磁気・電気計測' },
  { key: 'denryoku', name: '電力', emoji: '🔌', color: '#1565C0', examCount: 15, desc: '発電・変電・送配電・電力品質' },
  { key: 'kikai',   name: '機械', emoji: '⚙️',  color: '#2E7D32', examCount: 20, desc: '電動機・変圧器・パワエレ・照明' },
  { key: 'houki',   name: '法規', emoji: '📋', color: '#7B1FA2', examCount: 10, desc: '電気事業法・電気設備技術基準' },
];

export default function Denken3Screen() {
  const router = useRouter();
  const total = SUBJECTS.reduce((s, x) => s + x.examCount, 0);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#E65100', '#BF360C']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.title}>⚡ 電験三種</Text>
        <Text style={styles.sub}>第三種電気主任技術者試験</Text>
        <View style={styles.badges}>
          <View style={styles.badge}><Text style={styles.badgeText}>4科目 {total}問</Text></View>
          <View style={styles.badge}><Text style={styles.badgeText}>1000問収録予定</Text></View>
          <View style={styles.badge}><Text style={styles.badgeText}>年2回（上期・下期）</Text></View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>科目を選んで演習スタート</Text>

        {SUBJECTS.map(s => (
          <TouchableOpacity
            key={s.key}
            style={styles.card}
            onPress={() => router.push(`/denken3/${s.key}` as any)}
            activeOpacity={0.85}
          >
            <View style={[styles.icon, { backgroundColor: s.color }]}>
              <Text style={styles.iconEmoji}>{s.emoji}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.cardTitle}>{s.name}</Text>
              <Text style={styles.cardDesc}>{s.desc}</Text>
              <Text style={[styles.cardMeta, { color: s.color }]}>本試験 {s.examCount}問 ／ 収録問題 準備中</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 電験三種について</Text>
          <Text style={styles.infoText}>・科目：理論・電力・機械・法規の4科目</Text>
          <Text style={styles.infoText}>・合格基準：各科目60点以上（調整あり）</Text>
          <Text style={styles.infoText}>・試験日：上期（8月）・下期（3月）年2回</Text>
          <Text style={styles.infoText}>・科目合格制度あり（3年間有効）</Text>
          <Text style={styles.infoText}>・合格率：約8〜12%（最難関の電気系資格）</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 20 },
  backBtn: { marginBottom: 8 },
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  title: { fontSize: 22, fontWeight: '900', color: '#FFF', marginBottom: 4 },
  sub: { fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: '600', marginBottom: 12 },
  badges: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  badge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeText: { fontSize: 11, color: '#FFF', fontWeight: '700' },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 40 },
  sectionTitle: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 16 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 16, padding: 16, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 3, gap: 14 },
  icon: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  iconEmoji: { fontSize: 26 },
  body: { flex: 1 },
  cardTitle: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 3 },
  cardDesc: { fontSize: 11, color: '#888', fontWeight: '500', marginBottom: 4 },
  cardMeta: { fontSize: 12, fontWeight: '700' },
  arrow: { fontSize: 26, color: '#CCC' },
  infoCard: { backgroundColor: '#FFF3E0', borderRadius: 16, padding: 18, borderLeftWidth: 4, borderLeftColor: '#E65100', marginTop: 8 },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#E65100', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
