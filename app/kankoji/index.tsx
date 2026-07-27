import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { kankojiQuestions } from '../../data/kankoji_questions';
import { kankojiTextbook } from '../../data/kankoji_text';

// 実際の問題データから科目別の問題数を集計（ハードコードせずズレを防ぐ）
const COUNT: Record<string, number> = {};
kankojiQuestions.forEach((q) => { COUNT[q.subject] = (COUNT[q.subject] ?? 0) + 1; });

// 実テキストデータから総セクション数を集計（ハードコードせずズレを防ぐ）
const TEXT_SECTION_TOTAL = kankojiTextbook.reduce((n, ch) => n + ch.sections.length, 0);

const SUBJECTS = [
  { key: 'genron', name: '原論・電気・建築', emoji: '🌡️', color: '#455A64', desc: '流体・熱・湿り空気・電動機・梁貫通' },
  { key: 'kucho', name: '空調設備', emoji: '❄️', color: '#1565C0', desc: '熱負荷・空調方式・換気・排煙・熱源機器' },
  { key: 'eisei', name: '給排水衛生設備', emoji: '🚰', color: '#00838F', desc: '給水・給湯・排水通気・消火・ガス' },
  { key: 'sekou', name: '施工管理法', emoji: '🔧', color: '#E65100', desc: '機器据付・配管・ダクト・試験・工程' },
  { key: 'hoki', name: '法規', emoji: '⚖️', color: '#6A1B9A', desc: '労安法・建設業法・消防法・建基法・水道法' },
];

export default function KankojiScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#00695C', '#004D40']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🚿 一級管工事施工管理技士</Text>
        <Text style={styles.headerSub}>国家資格 ／ 空調・衛生設備工事のスペシャリスト</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>一次検定 四肢択一</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>合格基準 60%程度</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>年2回（一次）</Text></View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.textCard}
          onPress={() => router.push('/kankoji/text' as any)}
          activeOpacity={0.85}
        >
          <View style={[styles.subjectIcon, { backgroundColor: '#004D40' }]}>
            <Text style={styles.subjectEmoji}>📖</Text>
          </View>
          <View style={styles.subjectBody}>
            <Text style={styles.subjectName}>テキスト（要点整理）</Text>
            <Text style={styles.subjectDesc}>5科目の要点整理・図解と頻出数値つき</Text>
            <Text style={[styles.subjectMeta, { color: '#00695C' }]}>全{TEXT_SECTION_TOTAL}セクション収録</Text>
          </View>
          <Text style={styles.subjectArrow}>›</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>科目を選んでスタート！</Text>

        {SUBJECTS.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.subjectCard}
            onPress={() => router.push(`/kankoji/${subject.key}` as any)}
            activeOpacity={0.85}
          >
            <View style={[styles.subjectIcon, { backgroundColor: subject.color }]}>
              <Text style={styles.subjectEmoji}>{subject.emoji}</Text>
            </View>
            <View style={styles.subjectBody}>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <Text style={styles.subjectDesc}>{subject.desc}</Text>
              <Text style={[styles.subjectMeta, { color: subject.color }]}>
                {COUNT[subject.key] ?? 0}問収録・全問図解つき解説
              </Text>
            </View>
            <Text style={styles.subjectArrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 一級管工事施工管理技士試験について</Text>
          <Text style={styles.infoText}>・一次検定：四肢択一（学科）／二次検定：施工経験記述等</Text>
          <Text style={styles.infoText}>・受検資格：令和6年度から19歳以上で一次受検可</Text>
          <Text style={styles.infoText}>・空調・給排水衛生の施工管理のプロを証明する国家資格</Text>
          <Text style={styles.infoText}>・監理技術者（管工事業）への必須ルート</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 24 },
  backBtn: { marginBottom: 8 },
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 20, fontWeight: '900', color: '#FFFFFF', marginBottom: 4 },
  headerSub: { fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: '600', marginBottom: 12 },
  examInfoRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  examInfoBadge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  examInfoText: { fontSize: 11, color: '#FFFFFF', fontWeight: '700' },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 40 },
  sectionTitle: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 16 },
  subjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    gap: 14,
  },
  textCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#00695C',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    gap: 14,
  },
  subjectIcon: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  subjectEmoji: { fontSize: 26 },
  subjectBody: { flex: 1 },
  subjectName: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 3 },
  subjectDesc: { fontSize: 11, color: '#888', fontWeight: '500', marginBottom: 4 },
  subjectMeta: { fontSize: 12, fontWeight: '700' },
  subjectArrow: { fontSize: 26, color: '#CCC' },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderLeftWidth: 4,
    borderLeftColor: '#00695C',
    marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#00695C', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
