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

export type TakkeiSubjectKey = 'kenri' | 'gyoho' | 'horei' | 'zei';

const TAKKEI_SUBJECTS: {
  key: TakkeiSubjectKey;
  name: string;
  emoji: string;
  color: string;
  examCount: number;
  desc: string;
}[] = [
  {
    key: 'kenri',
    name: '権利関係',
    emoji: '⚖️',
    color: '#5B4B8A',
    examCount: 14,
    desc: '民法・借地借家法・区分所有法・不動産登記法',
  },
  {
    key: 'gyoho',
    name: '宅建業法',
    emoji: '🏢',
    color: '#1E5799',
    examCount: 20,
    desc: '宅地建物取引業法・報酬額・免許・取引士',
  },
  {
    key: 'horei',
    name: '法令上の制限',
    emoji: '📋',
    color: '#27AE60',
    examCount: 8,
    desc: '都市計画法・建築基準法・宅地造成法',
  },
  {
    key: 'zei',
    name: '税・その他',
    emoji: '💴',
    color: '#E67E22',
    examCount: 8,
    desc: '印紙税・固定資産税・地価公示・不動産鑑定',
  },
];

export default function TakkeiScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#6B3210', '#4A2208']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🏠 宅建試験</Text>
        <Text style={styles.headerSub}>宅地建物取引士 国家資格対策</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}>
            <Text style={styles.examInfoText}>本試験 50問</Text>
          </View>
          <View style={styles.examInfoBadge}>
            <Text style={styles.examInfoText}>合格点 約36点前後</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>科目を選んでスタート！</Text>

        {TAKKEI_SUBJECTS.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.subjectCard}
            onPress={() => router.push(`/takkei/${subject.key}`)}
            activeOpacity={0.85}
          >
            <View style={[styles.subjectIcon, { backgroundColor: subject.color }]}>
              <Text style={styles.subjectEmoji}>{subject.emoji}</Text>
            </View>
            <View style={styles.subjectBody}>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <Text style={styles.subjectDesc}>{subject.desc}</Text>
              <Text style={[styles.subjectMeta, { color: subject.color }]}>
                本試験 {subject.examCount}問出題
              </Text>
            </View>
            <Text style={styles.subjectArrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 宅建試験について</Text>
          <Text style={styles.infoText}>・毎年10月に実施（年1回）</Text>
          <Text style={styles.infoText}>・試験問題 50問 ／ 合格点は毎年変動</Text>
          <Text style={styles.infoText}>・合格率 約15〜17%</Text>
          <Text style={styles.infoText}>・登録講習修了者は5問免除</Text>
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
  examInfoRow: { flexDirection: 'row', gap: 8 },
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
    backgroundColor: '#FFF8F0',
    borderRadius: 16,
    padding: 18,
    borderLeftWidth: 4,
    borderLeftColor: '#6B3210',
    marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#6B3210', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
