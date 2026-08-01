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
import { denki2Questions } from '../../data/denki2_questions';

// 実際の問題データから科目別の問題数を集計（ハードコードせずズレを防ぐ）
const COUNT: Record<string, number> = {};
denki2Questions.forEach((q) => { COUNT[q.subject] = (COUNT[q.subject] ?? 0) + 1; });

const EXAM_MODES = [
  {
    key: 'mogi',
    label: '模擬試験',
    desc: '本番形式 50問・合否判定つき',
    emoji: '📝',
    color: '#C62828',
    route: '/denki2/mogi',
  },
  {
    key: 'text',
    label: 'テキスト',
    desc: '4科目の要点整理・図解付き',
    emoji: '📖',
    color: '#2E7D32',
    route: '/denki2/text',
  },
];

export type Denki2SubjectKey = 'riron' | 'haisen' | 'kiki' | 'hoki';

/** 筆記試験（学科試験）は50問。おおよその出題構成 */
const DENKI2_SUBJECTS: {
  key: Denki2SubjectKey;
  name: string;
  emoji: string;
  color: string;
  examCount: number;
  desc: string;
}[] = [
  { key: 'riron',  name: '電気の基礎理論',     emoji: '⚡', color: '#E65100', examCount: 10, desc: 'オームの法則・交流回路・三相交流・計測' },
  { key: 'haisen', name: '配電理論と配線設計', emoji: '🔌', color: '#1565C0', examCount: 8,  desc: '電圧降下・幹線・分岐回路・許容電流・接地' },
  { key: 'kiki',   name: '機器・材料・工具',   emoji: '🔧', color: '#00695C', examCount: 12, desc: '電動機・配線器具・電線管・工具・工事方法' },
  { key: 'hoki',   name: '法令・配線図',       emoji: '📜', color: '#6A1B9A', examCount: 20, desc: '電気工事士法・技術基準・検査・複線図' },
];

export default function Denki2Screen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#E65100', '#9E3800']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>⚡ 第二種電気工事士</Text>
        <Text style={styles.headerSub}>国家資格 ／ 住宅・店舗の電気工事ができる</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>学科 50問</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>30問正解で合格</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>{denki2Questions.length}問収録</Text></View>
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

        {DENKI2_SUBJECTS.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.subjectCard}
            onPress={() => router.push(`/denki2/${subject.key}` as any)}
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
          <Text style={styles.infoTitle}>📖 第二種電気工事士について</Text>
          <Text style={styles.infoText}>・一般住宅や小規模店舗（600V以下）の電気工事ができる国家資格</Text>
          <Text style={styles.infoText}>・受験資格はなく誰でも受験できる。年2回（上期・下期）実施</Text>
          <Text style={styles.infoText}>・学科試験は50問（4択）。30問正解（60%）で合格</Text>
          <Text style={styles.infoText}>・学科合格後に技能試験（候補問題13問から1問出題・40分）がある</Text>
          <Text style={styles.infoText}>・複線図は学科の配線図問題と技能試験の両方で必要</Text>
          <Text style={styles.infoText}>・受験の詳細は電気技術者試験センターの最新の試験案内をご確認ください</Text>
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
