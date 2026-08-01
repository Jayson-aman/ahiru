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
import { concreteQuestions } from '../../data/concrete_questions';

// 実際の問題データから科目別の問題数を集計（ハードコードせずズレを防ぐ）
const COUNT: Record<string, number> = {};
concreteQuestions.forEach((q) => { COUNT[q.subject] = (COUNT[q.subject] ?? 0) + 1; });

const EXAM_MODES = [
  {
    key: 'mogi',
    label: '模擬試験',
    desc: '本番形式 40問・合否判定つき',
    emoji: '📝',
    color: '#C62828',
    route: '/concrete/mogi',
  },
  {
    key: 'text',
    label: 'テキスト',
    desc: '6科目の要点整理・図解付き',
    emoji: '📖',
    color: '#2E7D32',
    route: '/concrete/text',
  },
];

export type ConcreteSubjectKey =
  | 'zairyo' | 'haigo' | 'seizo' | 'sekou' | 'kakushu' | 'shindan';

/** 本試験（技士 四肢択一40問）のおおよその出題数 */
const CONCRETE_SUBJECTS: {
  key: ConcreteSubjectKey;
  name: string;
  emoji: string;
  color: string;
  examCount: number;
  desc: string;
}[] = [
  { key: 'zairyo',  name: 'コンクリート用材料', emoji: '🧱', color: '#6D4C41', examCount: 8, desc: 'セメント・骨材・混和材料・水・鋼材' },
  { key: 'haigo',   name: '配合設計と性質',     emoji: '📐', color: '#1565C0', examCount: 8, desc: '水セメント比・単位量計算・強度・収縮' },
  { key: 'seizo',   name: '製造・品質管理',     emoji: '🏭', color: '#00695C', examCount: 7, desc: 'JIS A 5308・計量・試験・検査' },
  { key: 'sekou',   name: '施工',               emoji: '🏗️', color: '#EF6C00', examCount: 8, desc: '圧送・打込み・締固め・養生・型枠' },
  { key: 'kakushu', name: '各種コンクリート',   emoji: '🧊', color: '#5E35B1', examCount: 5, desc: '寒中暑中・マス・高強度・PC・PCa' },
  { key: 'shindan', name: '劣化診断・補修補強', emoji: '🔍', color: '#C62828', examCount: 4, desc: '中性化・塩害・ASR・診断技術・補修工法' },
];

export default function ConcreteScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#6D4C41', '#3E2723']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🧱 コンクリート技士・診断士</Text>
        <Text style={styles.headerSub}>日本コンクリート工学会 ／ 施工と維持管理の専門資格</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>本試験 40問＋論文</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>技士・診断士に対応</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>{concreteQuestions.length}問収録</Text></View>
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

        {CONCRETE_SUBJECTS.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.subjectCard}
            onPress={() => router.push(`/concrete/${subject.key}` as any)}
            activeOpacity={0.85}
          >
            <View style={[styles.subjectIcon, { backgroundColor: subject.color }]}>
              <Text style={styles.subjectEmoji}>{subject.emoji}</Text>
            </View>
            <View style={styles.subjectBody}>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <Text style={styles.subjectDesc}>{subject.desc}</Text>
              <Text style={[styles.subjectMeta, { color: subject.color }]}>
                本試験{subject.examCount}問出題 ／ {COUNT[subject.key] ?? 0}問収録
              </Text>
            </View>
            <Text style={styles.subjectArrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 コンクリート技士・診断士について</Text>
          <Text style={styles.infoText}>・日本コンクリート工学会が実施する民間資格。施工・製造・維持管理の実務で評価される</Text>
          <Text style={styles.infoText}>・技士：四肢択一40問＋小論文。診断士：四肢択一40問＋記述式</Text>
          <Text style={styles.infoText}>・診断士は技士など所定の資格と実務経験が受験要件</Text>
          <Text style={styles.infoText}>・配合計算と劣化機構は毎年出題される最重要分野</Text>
          <Text style={styles.infoText}>・受験の詳細は日本コンクリート工学会の最新の試験案内をご確認ください</Text>
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
  groupLabel: { fontSize: 13, fontWeight: '800', color: '#01579B', marginTop: 8, marginBottom: 10 },
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
    backgroundColor: '#E3F2FD', borderRadius: 16, padding: 18,
    borderLeftWidth: 4, borderLeftColor: '#0288D1', marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#01579B', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
