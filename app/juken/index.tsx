import React, { useState } from 'react';
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
import SubjectCard from '../../components/SubjectCard';
import { questionsBySubject, SubjectKey } from '../../data/questions';

type ExamType = 'chugaku' | 'kouko';
type Difficulty = 'all' | 'basic' | 'standard' | 'advanced';

const CHUGAKU_SUBJECTS: SubjectKey[] = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'];

const KOUKO_SUBJECTS = [
  { key: 'math',    name: '数学', emoji: '📐', color: '#4A90D9' },
  { key: 'kokugo',  name: '国語', emoji: '📖', color: '#E74C3C' },
  { key: 'rika',    name: '理科', emoji: '🔬', color: '#27AE60' },
  { key: 'shakai',  name: '社会', emoji: '🌍', color: '#F39C12' },
  { key: 'eigo',    name: '英語', emoji: '🔤', color: '#9B59B6' },
];

const DIFFICULTY_OPTIONS: { key: Difficulty; label: string; icon: string; color: string }[] = [
  { key: 'all',      label: 'すべて', icon: '📚', color: '#1E5FBE' },
  { key: 'basic',    label: '基礎',   icon: '🌱', color: '#27AE60' },
  { key: 'standard', label: '標準',   icon: '⭐', color: '#F39C12' },
  { key: 'advanced', label: '発展',   icon: '🔥', color: '#E74C3C' },
];

function getQuestionCount(subject: SubjectKey, difficulty: Difficulty): number {
  const qs = questionsBySubject[subject];
  if (difficulty === 'all') return qs.length;
  return qs.filter((q) => q.difficulty === difficulty).length;
}

export default function JukenScreen() {
  const router = useRouter();
  const [examType, setExamType] = useState<ExamType>('chugaku');
  const [difficulty, setDifficulty] = useState<Difficulty>('all');

  function handleChugakuSubject(subject: SubjectKey) {
    const params = difficulty !== 'all' ? `?difficulty=${difficulty}` : '';
    router.push(`/quiz/${subject}${params}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#1E5FBE', '#0D3D8A']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>📚 受験対策</Text>

        {/* 中学 / 高校 タブ */}
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tab, examType === 'chugaku' && styles.tabActive]}
            onPress={() => setExamType('chugaku')}
          >
            <Text style={[styles.tabText, examType === 'chugaku' && styles.tabTextActive]}>
              中学受験
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, examType === 'kouko' && styles.tabActive]}
            onPress={() => setExamType('kouko')}
          >
            <Text style={[styles.tabText, examType === 'kouko' && styles.tabTextActive]}>
              高校受験
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {examType === 'chugaku' ? (
          <>
            <View style={styles.schoolBadges}>
              {['灘 🏅', '開成 🏅', '甲陽 🏅', '麻布 🏅'].map((b) => (
                <View key={b} style={styles.badge}><Text style={styles.badgeText}>{b}</Text></View>
              ))}
            </View>

            <Text style={styles.sectionTitle}>難易度を選ぶ</Text>
            <View style={styles.difficultyRow}>
              {DIFFICULTY_OPTIONS.map((opt) => {
                const active = difficulty === opt.key;
                return (
                  <TouchableOpacity
                    key={opt.key}
                    style={[styles.diffBtn, active && { backgroundColor: opt.color }]}
                    onPress={() => setDifficulty(opt.key)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.diffBtnIcon}>{opt.icon}</Text>
                    <Text style={[styles.diffBtnLabel, active && styles.diffBtnLabelActive]}>
                      {opt.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Text style={[styles.sectionTitle, { marginTop: 16 }]}>科目を選んでスタート！</Text>
            <View style={styles.grid}>
              {CHUGAKU_SUBJECTS.map((subject) => (
                <SubjectCard
                  key={subject}
                  subject={subject}
                  questionCount={getQuestionCount(subject, difficulty)}
                  onPress={() => handleChugakuSubject(subject)}
                />
              ))}
            </View>
          </>
        ) : (
          <>
            <View style={styles.schoolBadges}>
              {['公立高校 🏫', '早慶 🏅', 'MARCH 🏅'].map((b) => (
                <View key={b} style={styles.badge}><Text style={styles.badgeText}>{b}</Text></View>
              ))}
            </View>

            <Text style={styles.sectionTitle}>科目を選んでスタート！</Text>
            <View style={styles.komingSoonBox}>
              <Text style={styles.comingSoonEmoji}>🚧</Text>
              <Text style={styles.comingSoonTitle}>高校受験 問題作成中</Text>
              <Text style={styles.comingSoonText}>
                5教科（数学・国語・理科・社会・英語）の問題を{'\n'}
                現在作成中です。近日公開予定です。
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 20 },
  backBtn: { marginBottom: 8 },
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF', marginBottom: 16 },
  tabRow: { flexDirection: 'row', gap: 8 },
  tab: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabActive: { backgroundColor: '#FFFFFF' },
  tabText: { fontSize: 14, fontWeight: '700', color: 'rgba(255,255,255,0.8)' },
  tabTextActive: { color: '#1E5FBE' },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 40 },
  schoolBadges: { flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginBottom: 20 },
  badge: {
    backgroundColor: '#EEF4FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  badgeText: { fontSize: 12, color: '#1E5FBE', fontWeight: '700' },
  sectionTitle: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 12 },
  difficultyRow: { flexDirection: 'row', gap: 8, marginBottom: 8 },
  diffBtn: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  diffBtnIcon: { fontSize: 18, marginBottom: 3 },
  diffBtnLabel: { fontSize: 12, fontWeight: '700', color: '#555' },
  diffBtnLabelActive: { color: '#FFFFFF' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
  komingSoonBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  comingSoonEmoji: { fontSize: 48, marginBottom: 12 },
  comingSoonTitle: { fontSize: 18, fontWeight: '800', color: '#1A1A2E', marginBottom: 10 },
  comingSoonText: { fontSize: 13, color: '#666', textAlign: 'center', lineHeight: 22 },
});
