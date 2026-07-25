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
import { kyusuiQuestions } from '../../data/kyusui_questions';

// 実際の問題データから科目別の問題数を集計（ハードコードせずズレを防ぐ）
const COUNT: Record<string, number> = {};
kyusuiQuestions.forEach((q) => { COUNT[q.subject] = (COUNT[q.subject] ?? 0) + 1; });

const EXAM_MODES = [
  {
    key: 'mogi',
    label: '模擬試験',
    desc: '本番形式 60問・合否判定つき',
    emoji: '📝',
    color: '#C62828',
    route: '/kyusui/mogi',
  },
  {
    key: 'text',
    label: 'テキスト',
    desc: '8科目の要点整理・図解付き',
    emoji: '📖',
    color: '#2E7D32',
    route: '/kyusui/text',
  },
];

export type KyusuiSubjectKey =
  | 'koshu' | 'gyosei' | 'koho' | 'kozo' | 'keikaku' | 'jimu' | 'gaiyo' | 'sekokan';

/** 本試験の出題数（学科1=40問／学科2=20問 の計60問） */
const KYUSUI_SUBJECTS: {
  key: KyusuiSubjectKey;
  name: string;
  emoji: string;
  color: string;
  examCount: number;
  group: '学科試験1' | '学科試験2';
  desc: string;
}[] = [
  { key: 'koshu',   name: '公衆衛生概論',       emoji: '🧫', color: '#00838F', examCount: 3,  group: '学科試験1', desc: '水系感染症・塩素消毒・水質基準' },
  { key: 'gyosei',  name: '水道行政',           emoji: '📜', color: '#5E35B1', examCount: 6,  group: '学科試験1', desc: '水道法・主任技術者制度・指定事業者' },
  { key: 'koho',    name: '給水装置工事法',     emoji: '🔩', color: '#0277BD', examCount: 10, group: '学科試験1', desc: '分岐・埋設・接合・メーター設置' },
  { key: 'kozo',    name: '給水装置の構造及び性能', emoji: '🛡️', color: '#00695C', examCount: 10, group: '学科試験1', desc: '7つの性能基準・逆流防止・侵食防止' },
  { key: 'keikaku', name: '給水装置計画論',     emoji: '📐', color: '#E65100', examCount: 6,  group: '学科試験1', desc: '給水方式・使用水量・口径決定・損失水頭' },
  { key: 'jimu',    name: '給水装置工事事務論', emoji: '🗂️', color: '#6D4C41', examCount: 5,  group: '学科試験1', desc: '主任技術者の職務・記録・関係法令' },
  { key: 'gaiyo',   name: '給水装置の概要',     emoji: '🚰', color: '#0288D1', examCount: 15, group: '学科試験2', desc: '管種・給水用具・湯沸器・メーター' },
  { key: 'sekokan', name: '給水装置施工管理法', emoji: '🦺', color: '#F9A825', examCount: 5,  group: '学科試験2', desc: '品質・工程・原価・安全の管理' },
];

export default function KyusuiScreen() {
  const router = useRouter();
  let lastGroup = '';

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#0288D1', '#01579B']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>💧 給水装置工事主任技術者</Text>
        <Text style={styles.headerSub}>国家資格 ／ 給水装置工事のスペシャリスト</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>本試験 60問</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>8科目</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>{kyusuiQuestions.length}問収録</Text></View>
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

        {KYUSUI_SUBJECTS.map((subject) => {
          const showGroup = subject.group !== lastGroup;
          lastGroup = subject.group;
          return (
            <React.Fragment key={subject.key}>
              {showGroup && (
                <Text style={styles.groupLabel}>
                  {subject.group === '学科試験1' ? '📘 学科試験1（40問）' : '📗 学科試験2（20問）'}
                </Text>
              )}
              <TouchableOpacity
                style={styles.subjectCard}
                onPress={() => router.push(`/kyusui/${subject.key}` as any)}
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
            </React.Fragment>
          );
        })}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 給水装置工事主任技術者について</Text>
          <Text style={styles.infoText}>・水道法に基づく国家資格（指定給水装置工事事業者に選任義務）</Text>
          <Text style={styles.infoText}>・学科試験1（40問）＋学科試験2（20問）の計60問</Text>
          <Text style={styles.infoText}>・全科目に最低点があり、総得点とあわせて判定される</Text>
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
