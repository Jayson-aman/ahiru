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
import { tsushinQuestions } from '../../data/tsushin_questions';

// 実際の問題データから科目別の問題数を集計（ハードコードせずズレを防ぐ）
const COUNT: Record<string, number> = {};
tsushinQuestions.forEach((q) => { COUNT[q.subject] = (COUNT[q.subject] ?? 0) + 1; });

const EXAM_MODES = [
  {
    key: 'mogi',
    label: '模擬試験',
    desc: '本番形式 60問・合否判定つき',
    emoji: '📝',
    color: '#C62828',
    route: '/tsushin/mogi',
  },
  {
    key: 'text',
    label: 'テキスト',
    desc: '4科目の要点整理・図解付き',
    emoji: '📖',
    color: '#2E7D32',
    route: '/tsushin/text',
  },
];

export type TsushinSubjectKey = 'kogaku' | 'setsubi' | 'kanri' | 'hoki';

/** 一次検定のおおよその出題構成（全60問回答） */
const TSUSHIN_SUBJECTS: {
  key: TsushinSubjectKey;
  name: string;
  emoji: string;
  color: string;
  examCount: number;
  desc: string;
}[] = [
  { key: 'kogaku',  name: '電気通信工学',  emoji: '📡', color: '#1565C0', examCount: 18, desc: '電気理論・通信理論・光と電波・情報工学' },
  { key: 'setsubi', name: '電気通信設備',  emoji: '🌐', color: '#00695C', examCount: 22, desc: 'FTTH・LAN・無線・放送・防災設備' },
  { key: 'kanri',   name: '施工管理法',    emoji: '📅', color: '#EF6C00', examCount: 12, desc: '施工計画・工程・品質・安全管理' },
  { key: 'hoki',    name: '法規',          emoji: '⚖️', color: '#6A1B9A', examCount: 8,  desc: '建設業法・電気通信事業法・電波法ほか' },
];

export default function TsushinScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#1565C0', '#0A3D91']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>📡 1級電気通信工事施工管理技士</Text>
        <Text style={styles.headerSub}>国家資格 ／ 通信インフラ工事のスペシャリスト</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>一次検定 60問回答</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>合格基準 60%</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>{tsushinQuestions.length}問収録</Text></View>
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

        {TSUSHIN_SUBJECTS.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.subjectCard}
            onPress={() => router.push(`/tsushin/${subject.key}` as any)}
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
          <Text style={styles.infoTitle}>📖 1級電気通信工事施工管理技士について</Text>
          <Text style={styles.infoText}>・2019年に新設された比較的新しい国家資格。通信インフラ工事の監理技術者になれる</Text>
          <Text style={styles.infoText}>・一次検定は四肢択一。合格基準は全体の60%以上</Text>
          <Text style={styles.infoText}>・一次合格で「技士補」、二次合格で「技士」の称号</Text>
          <Text style={styles.infoText}>・5G基地局・光回線・防災無線など需要が拡大中</Text>
          <Text style={styles.infoText}>・受験の詳細は全国建設研修センターの最新の試験案内をご確認ください</Text>
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
