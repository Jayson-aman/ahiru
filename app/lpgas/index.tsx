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
import { lpgasQuestions } from '../../data/lpgas_questions';

// 実際の問題データから科目別の問題数を集計（ハードコードせずズレを防ぐ）
const COUNT: Record<string, number> = {};
lpgasQuestions.forEach((q) => { COUNT[q.subject] = (COUNT[q.subject] ?? 0) + 1; });

const EXAM_MODES = [
  {
    key: 'mogi',
    label: '模擬試験',
    desc: '本番形式・科目別出題',
    emoji: '📝',
    color: '#F57F17',
    route: '/lpgas/mogi',
  },
  {
    key: 'text',
    label: 'テキスト',
    desc: '5科目の要点整理・図解付き',
    emoji: '📖',
    color: '#2E7D32',
    route: '/lpgas/text',
  },
];

export type LpgasSubjectKey = 'kiso' | 'nensho' | 'kyokyu' | 'shohi' | 'horei';

const LPGAS_SUBJECTS: {
  key: LpgasSubjectKey;
  name: string;
  emoji: string;
  color: string;
  examCount: number;
  desc: string;
}[] = [
  { key: 'kiso',    name: '基礎的な物理学的性質及び化学的性質', emoji: '🧪', color: '#1565C0', examCount: 8,  desc: 'LPガスの性状・気化熱・比重・蒸気圧' },
  { key: 'nensho',  name: '燃焼工学に関する知識',           emoji: '🔥', color: '#C62828', examCount: 8,  desc: '燃焼理論・完全燃焼と不完全燃焼・理論空気量' },
  { key: 'kyokyu',  name: '供給設備に関する知識',           emoji: '🚚', color: '#00838F', examCount: 12, desc: '容器・調整器・供給管・気化装置' },
  { key: 'shohi',   name: '消費設備に関する知識',           emoji: '🏠', color: '#EF6C00', examCount: 12, desc: '配管・燃焼器具・換気・ガス漏れ警報器' },
  { key: 'horei',   name: '関係法令',                      emoji: '📜', color: '#6A1B9A', examCount: 10, desc: 'LPガス法・保安業務・設備士の義務' },
];

export default function LpgasScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#F57F17', '#E65100']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🔥 液化石油ガス設備士</Text>
        <Text style={styles.headerSub}>国家資格 ／ LPガス消費設備の設置・変更工事に必須</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>学科試験 5科目</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>実技（技能）試験は別途</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>{lpgasQuestions.length}問収録</Text></View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        <Text style={styles.sectionTitle}>試験モード</Text>
        <View style={styles.modeRow}>
          {EXAM_MODES.map(mode => (
            <TouchableOpacity
              key={mode.key}
              style={[styles.modeCard, { borderColor: mode.color }]}
              onPress={() => router.push(mode.route as any)}
              activeOpacity={0.8}
            >
              <Text style={styles.modeEmoji}>{mode.emoji}</Text>
              <Text style={[styles.modeLabel, { color: mode.color }]}>{mode.label}</Text>
              <Text style={styles.modeDesc}>{mode.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 8 }]}>科目別練習</Text>

        {LPGAS_SUBJECTS.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.subjectCard}
            onPress={() => router.push(`/lpgas/${subject.key}` as any)}
            activeOpacity={0.85}
          >
            <View style={[styles.subjectIcon, { backgroundColor: subject.color }]}>
              <Text style={styles.subjectEmoji}>{subject.emoji}</Text>
            </View>
            <View style={styles.subjectBody}>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <Text style={styles.subjectDesc}>{subject.desc}</Text>
              <Text style={[styles.subjectMeta, { color: subject.color }]}>
                本試験目安{subject.examCount}問前後 ／ {COUNT[subject.key] ?? 0}問収録
              </Text>
            </View>
            <Text style={styles.subjectArrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 液化石油ガス設備士について</Text>
          <Text style={styles.infoText}>・液化石油ガスの保安の確保及び取引の適正化に関する法律（LPガス法）に基づく国家資格</Text>
          <Text style={styles.infoText}>・LPガスを消費するための設備の設置・変更の工事に従事するために必要</Text>
          <Text style={styles.infoText}>・学科試験（法令・基礎・燃焼・供給・消費）と実技（技能）試験で構成される</Text>
          <Text style={styles.infoText}>・都道府県知事登録の試験機関等が実施。詳細は最新の試験案内を必ず確認すること</Text>
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
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF', marginBottom: 4 },
  headerSub: { fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: '600', marginBottom: 12 },
  examInfoRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  examInfoBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12,
  },
  examInfoText: { fontSize: 11, color: '#FFFFFF', fontWeight: '700' },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 40 },
  sectionTitle: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 16 },
  modeRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  modeCard: {
    flex: 1, backgroundColor: '#FFF', borderRadius: 16, padding: 14, alignItems: 'center',
    borderWidth: 2,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 6, elevation: 3,
  },
  modeEmoji: { fontSize: 30, marginBottom: 8 },
  modeLabel: { fontSize: 15, fontWeight: '900', marginBottom: 4 },
  modeDesc: { fontSize: 10, color: '#888', fontWeight: '600', textAlign: 'center', lineHeight: 14 },
  subjectCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF',
    borderRadius: 16, padding: 16, marginBottom: 12, gap: 14,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  subjectIcon: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  subjectEmoji: { fontSize: 26 },
  subjectBody: { flex: 1 },
  subjectName: { fontSize: 16, fontWeight: '800', color: '#1A1A2E', marginBottom: 3 },
  subjectDesc: { fontSize: 11, color: '#888', fontWeight: '500', marginBottom: 4 },
  subjectMeta: { fontSize: 12, fontWeight: '700' },
  subjectArrow: { fontSize: 26, color: '#CCC', fontWeight: '300' },
  infoCard: {
    backgroundColor: '#FFF3E0', borderRadius: 16, padding: 18,
    borderLeftWidth: 4, borderLeftColor: '#F57F17', marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#E65100', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
