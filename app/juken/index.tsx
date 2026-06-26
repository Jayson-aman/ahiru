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

const SUBJECTS: SubjectKey[] = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'];

type Difficulty = 'all' | 'basic' | 'standard' | 'advanced';

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
  const [difficulty, setDifficulty] = useState<Difficulty>('all');

  function handleSubject(subject: SubjectKey) {
    const params = difficulty !== 'all' ? `?difficulty=${difficulty}` : '';
    router.push(`/quiz/${subject}${params}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#1E5FBE', '#0D3D8A']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>📚 中学受験</Text>
        <View style={styles.schoolBadges}>
          <Text style={styles.schoolBadge}>灘 🏅</Text>
          <Text style={styles.schoolBadge}>開成 🏅</Text>
          <Text style={styles.schoolBadge}>甲陽 🏅</Text>
          <Text style={styles.schoolBadge}>麻布 🏅</Text>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
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
          {SUBJECTS.map((subject) => (
            <SubjectCard
              key={subject}
              subject={subject}
              questionCount={getQuestionCount(subject, difficulty)}
              onPress={() => handleSubject(subject)}
            />
          ))}
        </View>

        <View style={styles.schoolGuideCard}>
          <Text style={styles.schoolGuideTitle}>🏫 難易度の目安</Text>
          {[
            { icon: '🌱', label: '基礎', desc: '一般的な中学受験対策', color: '#27AE60' },
            { icon: '⭐', label: '標準', desc: '開成・麻布・桜蔭・甲陽・西大和', color: '#F39C12' },
            { icon: '🔥', label: '発展', desc: '灘・東大寺・聖光・筑波大附属駒場', color: '#E74C3C' },
          ].map((item) => (
            <View key={item.label} style={styles.schoolGuideRow}>
              <Text style={[styles.schoolGuideLevel, { color: item.color }]}>{item.icon} {item.label}</Text>
              <Text style={styles.schoolGuideSchools}>{item.desc}</Text>
            </View>
          ))}
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
  headerTitle: { fontSize: 24, fontWeight: '900', color: '#FFFFFF', marginBottom: 12 },
  schoolBadges: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  schoolBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 40 },
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
  schoolGuideCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  schoolGuideTitle: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 12 },
  schoolGuideRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 10 },
  schoolGuideLevel: { fontSize: 14, fontWeight: '800', width: 70 },
  schoolGuideSchools: { fontSize: 13, color: '#555', fontWeight: '500', flex: 1 },
});
