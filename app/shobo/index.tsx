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
import { shoboQuestions } from '../../data/shobo_questions';

// 実際の問題データから科目別の問題数を集計（ハードコードせずズレを防ぐ）
const COUNT: Record<string, number> = {};
shoboQuestions.forEach((q) => { COUNT[q.subject] = (COUNT[q.subject] ?? 0) + 1; });

const EXAM_MODES = [
  {
    key: 'mogi',
    label: '模擬試験',
    desc: '筆記45問＋実技7問の本番形式',
    emoji: '📝',
    color: '#C62828',
    route: '/shobo/mogi',
  },
  {
    key: 'text',
    label: 'テキスト',
    desc: '全科目の要点整理・図解付き',
    emoji: '📖',
    color: '#2E7D32',
    route: '/shobo/text',
  },
];

export type ShoboSubjectKey =
  | 'horei_kyotsu' | 'horei_rui'
  | 'kiso_kikai' | 'kiso_denki'
  | 'kozo_kikai' | 'kozo_denki' | 'kikaku'
  | 'jitsugi';

const SHOBO_SUBJECTS: {
  key: ShoboSubjectKey;
  name: string;
  emoji: string;
  color: string;
  group: '筆記試験' | '実技試験';
  desc: string;
}[] = [
  { key: 'horei_kyotsu', name: '消防関係法令（共通）', emoji: '📜', color: '#C62828', group: '筆記試験', desc: '防火対象物・設置単位・点検報告・消防設備士制度' },
  { key: 'horei_rui',    name: '消防関係法令（類別）', emoji: '📋', color: '#AD1457', group: '筆記試験', desc: '各類の設置義務・警戒区域・ヘッド配置' },
  { key: 'kiso_kikai',   name: '基礎的知識（機械）',   emoji: '⚙️', color: '#455A64', group: '筆記試験', desc: '力学・材料・水理・ポンプの計算' },
  { key: 'kiso_denki',   name: '基礎的知識（電気）',   emoji: '⚡', color: '#EF6C00', group: '筆記試験', desc: 'オームの法則・交流回路・計測の計算' },
  { key: 'kozo_kikai',   name: '構造・機能（機械）',   emoji: '🚿', color: '#00695C', group: '筆記試験', desc: '消火栓・スプリンクラー・泡・避難器具' },
  { key: 'kozo_denki',   name: '構造・機能（電気）',   emoji: '🔔', color: '#1565C0', group: '筆記試験', desc: '感知器・受信機・発信機・配線・試験' },
  { key: 'kikaku',       name: '構造・機能（規格）',   emoji: '📐', color: '#6A1B9A', group: '筆記試験', desc: '規格省令・表示事項・検定制度' },
  { key: 'jitsugi',      name: '実技（鑑別等・製図）', emoji: '✍️', color: '#D32F2F', group: '実技試験', desc: '工具・機器の鑑別／警戒区域・配線本数の製図' },
];

export default function ShoboScreen() {
  const router = useRouter();
  let lastGroup = '';

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#D32F2F', '#8E0000']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🧯 消防設備士 甲種</Text>
        <Text style={styles.headerSub}>国家資格 ／ 消防用設備等の工事・整備ができる</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>筆記45問＋実技</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>各科目40%・全体60%</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>{shoboQuestions.length}問収録</Text></View>
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

        {SHOBO_SUBJECTS.map((subject) => {
          const showGroup = subject.group !== lastGroup;
          lastGroup = subject.group;
          return (
            <React.Fragment key={subject.key}>
              {showGroup && (
                <Text style={styles.groupLabel}>
                  {subject.group === '筆記試験' ? '📘 筆記試験（45問）' : '📗 実技試験（鑑別等・製図）'}
                </Text>
              )}
              <TouchableOpacity
                style={styles.subjectCard}
                onPress={() => router.push(`/shobo/${subject.key}` as any)}
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
            </React.Fragment>
          );
        })}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>🧯 消防設備士 甲種について</Text>
          <Text style={styles.infoText}>・甲種は工事と整備、乙種は整備のみが行える</Text>
          <Text style={styles.infoText}>・類別（特類・1〜5類）ごとに扱える設備が異なる</Text>
          <Text style={styles.infoText}>・筆記は各科目40%以上かつ全体60%以上、実技60%以上で合格</Text>
          <Text style={styles.infoText}>・受験資格や試験日程は実施団体の最新の案内をご確認ください</Text>
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
  headerTitle: { fontSize: 23, fontWeight: '900', color: '#FFFFFF', marginBottom: 4 },
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
  groupLabel: { fontSize: 13, fontWeight: '800', color: '#8E0000', marginTop: 8, marginBottom: 10 },
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
    backgroundColor: '#FFEBEE', borderRadius: 16, padding: 18,
    borderLeftWidth: 4, borderLeftColor: '#D32F2F', marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#8E0000', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
