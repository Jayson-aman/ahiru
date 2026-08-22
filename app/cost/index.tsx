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
import { costQuestions } from '../../data/cost_questions';

// 実際の問題データから科目別の問題数を集計（ハードコードせずズレを防ぐ）
const COUNT: Record<string, number> = {};
costQuestions.forEach((q) => { COUNT[q.subject] = (COUNT[q.subject] ?? 0) + 1; });

const EXAM_MODES = [
  {
    key: 'mogi',
    label: '模擬試験',
    desc: '本番形式 40問・120分・合否判定',
    emoji: '📝',
    color: '#C62828',
    route: '/cost/mogi',
  },
  {
    key: 'text',
    label: 'テキスト',
    desc: '4科目の要点整理・図解付き',
    emoji: '📖',
    color: '#2E7D32',
    route: '/cost/text',
  },
  {
    key: 'ronbun',
    label: '論文対策',
    desc: '記述式の型・頻出4テーマ・答案作成術',
    emoji: '✍️',
    color: '#6A1B9A',
    route: '/cost/ronbun',
  },
];

export type CostSubjectKey = 'gairon' | 'sekisan' | 'keiyaku' | 'keizai';

const COST_SUBJECTS: {
  key: CostSubjectKey;
  name: string;
  emoji: string;
  color: string;
  desc: string;
}[] = [
  {
    key: 'gairon',
    name: 'コスト管理概論',
    emoji: '📊',
    color: '#4527A0',
    desc: 'LCC・VE・コストプランニング・CM方式',
  },
  {
    key: 'sekisan',
    name: '積算・数量算出',
    emoji: '📐',
    color: '#0277BD',
    desc: '工事費の構成・数量積算基準・歩掛・単価',
  },
  {
    key: 'keiyaku',
    name: '契約・法規',
    emoji: '⚖️',
    color: '#C62828',
    desc: '建設業法・標準約款・入札契約制度・発注方式',
  },
  {
    key: 'keizai',
    name: '経済調査・価格',
    emoji: '💹',
    color: '#2E7D32',
    desc: '物価指数・労務単価・原価管理・EVM',
  },
];

export default function CostScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#4527A0', '#2A1465']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>💰 建築コスト管理士</Text>
        <Text style={styles.headerSub}>建設コストマネジメントの専門資格</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}>
            <Text style={styles.examInfoText}>4科目</Text>
          </View>
          <View style={styles.examInfoBadge}>
            <Text style={styles.examInfoText}>{costQuestions.length}問収録</Text>
          </View>
          <View style={styles.examInfoBadge}>
            <Text style={styles.examInfoText}>全問図解つき解説</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* Exam modes */}
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

        {COST_SUBJECTS.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.subjectCard}
            onPress={() => router.push(`/cost/${subject.key}` as any)}
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
          <Text style={styles.infoTitle}>📖 建築コスト管理士について</Text>
          <Text style={styles.infoText}>・一般財団法人 建設物価調査会が実施する資格</Text>
          <Text style={styles.infoText}>・建設工事の積算・コストマネジメントの専門知識を証明</Text>
          <Text style={styles.infoText}>・発注者支援・設計事務所・ゼネコン・積算事務所で評価される</Text>
          <Text style={styles.infoText}>・受験の詳細は実施団体の最新の試験案内をご確認ください</Text>
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
  headerTitle: { fontSize: 24, fontWeight: '900', color: '#FFFFFF', marginBottom: 4 },
  headerSub: { fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: '600', marginBottom: 12 },
  examInfoRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  examInfoBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
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
  subjectIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subjectEmoji: { fontSize: 26 },
  subjectBody: { flex: 1 },
  subjectName: { fontSize: 17, fontWeight: '800', color: '#1A1A2E', marginBottom: 3 },
  subjectDesc: { fontSize: 11, color: '#888', fontWeight: '500', marginBottom: 4 },
  subjectMeta: { fontSize: 12, fontWeight: '700' },
  subjectArrow: { fontSize: 26, color: '#CCC', fontWeight: '300' },
  infoCard: {
    backgroundColor: '#F3F0FF',
    borderRadius: 16,
    padding: 18,
    borderLeftWidth: 4,
    borderLeftColor: '#4527A0',
    marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#4527A0', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
