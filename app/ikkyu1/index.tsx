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
import { ikkyu1Questions } from '../../data/ikkyu1_questions';

// 実際の問題データから科目別の問題数を集計（ハードコードせずズレを防ぐ）
const COUNT: Record<string, number> = {};
ikkyu1Questions.forEach((q) => { COUNT[q.subject] = (COUNT[q.subject] ?? 0) + 1; });

const EXAM_MODES = [
  {
    key: 'mogi',
    label: '模擬試験',
    desc: '学科125問・科目別合否判定つき',
    emoji: '📝',
    color: '#C62828',
    route: '/ikkyu1/mogi',
  },
  {
    key: 'text',
    label: 'テキスト',
    desc: '5科目の要点整理・図解付き',
    emoji: '📖',
    color: '#2E7D32',
    route: '/ikkyu1/text',
  },
];

export type Ikkyu1SubjectKey = 'keikaku' | 'kankyo' | 'hoki' | 'kozo' | 'sekou';

/** 学科試験は5科目 計125問（計画20・環境設備20・法規30・構造30・施工25） */
const IKKYU1_SUBJECTS: {
  key: Ikkyu1SubjectKey;
  name: string;
  emoji: string;
  color: string;
  examCount: number;
  desc: string;
}[] = [
  { key: 'keikaku', name: '建築計画',   emoji: '📐', color: '#00695C', examCount: 20, desc: '各種建築物の計画・建築史・都市計画・バリアフリー' },
  { key: 'kankyo',  name: '環境・設備', emoji: '🌡️', color: '#00838F', examCount: 20, desc: '環境工学・空調/給排水/電気などの建築設備' },
  { key: 'hoki',    name: '建築法規',   emoji: '⚖️', color: '#6A1B9A', examCount: 30, desc: '建築基準法・集団規定・建築士法・関係法令' },
  { key: 'kozo',    name: '建築構造',   emoji: '🏛️', color: '#283593', examCount: 30, desc: '構造力学・各種構造・建築材料' },
  { key: 'sekou',   name: '建築施工',   emoji: '🏗️', color: '#EF6C00', examCount: 25, desc: '躯体・仕上・施工管理・積算・契約' },
];

export default function Ikkyu1Screen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#283593', '#1A237E']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🏛️ 一級建築士</Text>
        <Text style={styles.headerSub}>国家資格 ／ 学科試験（計画・環境設備・法規・構造・施工）</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>学科 125問</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>5科目・足切りあり</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>{ikkyu1Questions.length}問収録</Text></View>
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

        {IKKYU1_SUBJECTS.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.subjectCard}
            onPress={() => router.push(`/ikkyu1/${subject.key}` as any)}
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
          <Text style={styles.infoTitle}>📖 一級建築士について</Text>
          <Text style={styles.infoText}>・建築士法に基づく国家資格。建築物の規模・構造の制限なく設計・工事監理ができる</Text>
          <Text style={styles.infoText}>・学科試験は計画・環境設備・法規・構造・施工の5科目 計125問</Text>
          <Text style={styles.infoText}>・各科目に足切り点があり、総得点だけでは合格できない</Text>
          <Text style={styles.infoText}>・学科合格後に設計製図試験がある</Text>
          <Text style={styles.infoText}>・法規は法令集の持込みが認められている</Text>
          <Text style={styles.infoText}>・受験資格や試験日程の詳細は建築技術教育普及センターの最新の試験案内をご確認ください</Text>
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
    backgroundColor: '#E8EAF6', borderRadius: 16, padding: 18,
    borderLeftWidth: 4, borderLeftColor: '#283593', marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#1A237E', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
