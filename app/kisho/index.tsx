import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const SUBJECTS = [
  { key: 'gakka1', name: '予報業務に関する一般知識', emoji: '🌡️', color: '#1565C0', examCount: 15, desc: '大気・熱力学・流体力学・気象観測' },
  { key: 'gakka2', name: '予報業務に関する専門知識', emoji: '🌀', color: '#0097A7', examCount: 15, desc: '数値予報・予報の技術・気象災害' },
  { key: 'jitsumu', name: '実技試験', emoji: '🗺️', color: '#2E7D32', examCount: 0, desc: '天気図解析・文章記述・実況解析' },
];

export default function KishoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#1565C0', '#0D47A1']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.title}>🌤️ 気象予報士</Text>
        <Text style={styles.sub}>国家資格 ／ 気象予報の最高峰</Text>
        <View style={styles.badges}>
          <View style={styles.badge}><Text style={styles.badgeText}>学科2科目＋実技</Text></View>
          <View style={styles.badge}><Text style={styles.badgeText}>1000問収録予定</Text></View>
          <View style={styles.badge}><Text style={styles.badgeText}>年2回（1月・8月）</Text></View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.textCard}
          onPress={() => router.push('/kisho/text' as any)}
          activeOpacity={0.85}
        >
          <View style={[styles.icon, { backgroundColor: '#2E7D32' }]}>
            <Text style={styles.iconEmoji}>📖</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.cardTitle}>テキスト</Text>
            <Text style={styles.cardDesc}>一般知識・専門知識の要点整理・図解＋音声読み上げつき</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>科目を選んで演習スタート</Text>

        {SUBJECTS.map(s => (
          <TouchableOpacity
            key={s.key}
            style={styles.card}
            onPress={() => router.push(`/kisho/${s.key}` as any)}
            activeOpacity={0.85}
          >
            <View style={[styles.icon, { backgroundColor: s.color }]}>
              <Text style={styles.iconEmoji}>{s.emoji}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.cardTitle}>{s.name}</Text>
              <Text style={styles.cardDesc}>{s.desc}</Text>
              <Text style={[styles.cardMeta, { color: s.color }]}>
                {s.examCount > 0 ? `本試験 ${s.examCount}問 ／ 収録問題 準備中` : '記述式 ／ 解説準備中'}
              </Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 気象予報士試験について</Text>
          <Text style={styles.infoText}>・学科試験：一般知識（15問）・専門知識（15問）各60点以上</Text>
          <Text style={styles.infoText}>・実技試験：記述式2題、150分</Text>
          <Text style={styles.infoText}>・試験日：1月下旬・8月下旬の年2回</Text>
          <Text style={styles.infoText}>・合格率：約4〜6%（難関国家資格）</Text>
          <Text style={styles.infoText}>・学科合格は1年間有効（科目免除制度あり）</Text>
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
  textCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 16, padding: 16, marginBottom: 20, borderWidth: 1.5, borderColor: '#2E7D32', gap: 14 },
  icon: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  iconEmoji: { fontSize: 26 },
  body: { flex: 1 },
  cardTitle: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 3 },
  cardDesc: { fontSize: 11, color: '#888', fontWeight: '500', marginBottom: 4 },
  cardMeta: { fontSize: 12, fontWeight: '700' },
  arrow: { fontSize: 26, color: '#CCC' },
  infoCard: { backgroundColor: '#E3F2FD', borderRadius: 16, padding: 18, borderLeftWidth: 4, borderLeftColor: '#1565C0', marginTop: 8 },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#1565C0', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
