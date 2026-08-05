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
import { koatsuQuestions } from '../../data/koatsu_questions';

// 実際の問題データから科目別の問題数を集計（ハードコードせずズレを防ぐ）
const COUNT: Record<string, number> = {};
koatsuQuestions.forEach((q) => { COUNT[q.subject] = (COUNT[q.subject] ?? 0) + 1; });

const EXAM_MODES = [
  {
    key: 'mogi',
    label: '模擬試験',
    desc: '本番形式・科目別出題',
    emoji: '📝',
    color: '#37474F',
    route: '/koatsu/mogi',
  },
  {
    key: 'text',
    label: 'テキスト',
    desc: '4科目の要点整理・図解付き',
    emoji: '📖',
    color: '#2E7D32',
    route: '/koatsu/text',
  },
];

export type KoatsuSubjectKey = 'hoan' | 'horei' | 'gakushiki_ka' | 'gakushiki_ki';

const KOATSU_SUBJECTS: {
  key: KoatsuSubjectKey;
  name: string;
  emoji: string;
  color: string;
  examCount: number;
  desc: string;
}[] = [
  { key: 'hoan',         name: '保安管理技術（共通）',      emoji: '🛡️', color: '#37474F', examCount: 15, desc: '高圧ガスの物性・爆発防止・保安管理体制' },
  { key: 'horei',        name: '法令（共通）',             emoji: '📜', color: '#6A1B9A', examCount: 20, desc: '高圧ガス保安法・容器保安規則・製造施設の基準' },
  { key: 'gakushiki_ka', name: '学識（化学）',             emoji: '🧪', color: '#1565C0', examCount: 15, desc: '化学熱力学・反応工学・化学設備の材料と腐食' },
  { key: 'gakushiki_ki', name: '学識（機械）',             emoji: '⚙️', color: '#C62828', examCount: 15, desc: '機械力学・材料力学・圧縮機とポンプ・熱と流体' },
];

export default function KoatsuScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#37474F', '#1B2631']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>⚙️ 高圧ガス製造保安責任者</Text>
        <Text style={styles.headerSub}>国家資格 ／ 甲種・乙種・丙種（化学・機械）に対応</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>共通2科目＋学識2系統</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>{koatsuQuestions.length}問収録</Text></View>
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

        {KOATSU_SUBJECTS.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.subjectCard}
            onPress={() => router.push(`/koatsu/${subject.key}` as any)}
            activeOpacity={0.85}
          >
            <View style={[styles.subjectIcon, { backgroundColor: subject.color }]}>
              <Text style={styles.subjectEmoji}>{subject.emoji}</Text>
            </View>
            <View style={styles.subjectBody}>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <Text style={styles.subjectDesc}>{subject.desc}</Text>
              <Text style={[styles.subjectMeta, { color: subject.color }]}>
                {COUNT[subject.key] ?? 0}問収録
              </Text>
            </View>
            <Text style={styles.subjectArrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 高圧ガス製造保安責任者について</Text>
          <Text style={styles.infoText}>・高圧ガス保安法に基づく国家資格。高圧ガス製造施設の保安管理責任者になるために必要</Text>
          <Text style={styles.infoText}>・甲種・乙種・丙種、さらに化学・機械の区分があり、扱える施設の範囲が異なる</Text>
          <Text style={styles.infoText}>・「保安管理技術」「法令」は共通科目。「学識」は化学・機械のいずれかを選択して受験する</Text>
          <Text style={styles.infoText}>・本アプリでは学識を化学・機械の両方収録。志望する区分に合わせて学習してください</Text>
          <Text style={styles.infoText}>・実施は高圧ガス保安協会（KHK）。受験区分ごとの科目免除等は最新の受験案内を必ず確認すること</Text>
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
    backgroundColor: '#ECEFF1', borderRadius: 16, padding: 18,
    borderLeftWidth: 4, borderLeftColor: '#37474F', marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#263238', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
