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

const DIFFICULTY_OPTIONS: { key: Difficulty; label: string; icon: string; color: string; desc: string }[] = [
  { key: 'all',      label: 'すべて', icon: '📚', color: '#1E5FBE', desc: '全問題' },
  { key: 'basic',    label: '基礎',   icon: '🌱', color: '#27AE60', desc: '基礎レベル' },
  { key: 'standard', label: '標準',   icon: '⭐', color: '#F39C12', desc: '開成・甲陽レベル' },
  { key: 'advanced', label: '発展',   icon: '🔥', color: '#E74C3C', desc: '灘・東大寺レベル' },
];

function getQuestionCount(subject: SubjectKey, difficulty: Difficulty): number {
  const qs = questionsBySubject[subject];
  if (difficulty === 'all') return qs.length;
  return qs.filter((q) => q.difficulty === difficulty).length;
}

export default function HomeScreen() {
  const router = useRouter();
  const [difficulty, setDifficulty] = useState<Difficulty>('all');

  function handleSubject(subject: SubjectKey) {
    const params = difficulty !== 'all' ? `?difficulty=${difficulty}` : '';
    router.push(`/quiz/${subject}${params}`);
  }

  const selectedDiff = DIFFICULTY_OPTIONS.find((d) => d.key === difficulty)!;

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#1E5FBE', '#0D3D8A']} style={styles.header}>
        <Text style={styles.appTitle}>📚 中学受験対策</Text>
        <Text style={styles.appSubtitle}>一問一答トレーニング</Text>
        <View style={styles.schoolBadges}>
          <Text style={styles.schoolBadge}>灘 🏅</Text>
          <Text style={styles.schoolBadge}>開成 🏅</Text>
          <Text style={styles.schoolBadge}>甲陽 🏅</Text>
          <Text style={styles.schoolBadge}>麻布 🏅</Text>
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Difficulty filter */}
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

        {difficulty !== 'all' && (
          <View style={[styles.diffInfoBanner, { borderColor: selectedDiff.color }]}>
            <Text style={[styles.diffInfoText, { color: selectedDiff.color }]}>
              {selectedDiff.icon} {selectedDiff.desc}の問題のみ表示
            </Text>
          </View>
        )}

        {/* Subject grid */}
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

        {/* How to use */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 使い方</Text>
          <Text style={styles.infoText}>① 難易度と科目をタップ</Text>
          <Text style={styles.infoText}>② カードをタップして答えを確認</Text>
          <Text style={styles.infoText}>③ ✓正解 / ✗不正解 を記録</Text>
          <Text style={styles.infoText}>④ 進捗タブで成績を確認</Text>
        </View>

        {/* School level guide */}
        <View style={styles.schoolGuideCard}>
          <Text style={styles.schoolGuideTitle}>🏫 難易度の目安</Text>
          <View style={styles.schoolGuideRow}>
            <Text style={[styles.schoolGuideLevel, { color: '#27AE60' }]}>🌱 基礎</Text>
            <Text style={styles.schoolGuideSchools}>一般的な中学受験対策</Text>
          </View>
          <View style={styles.schoolGuideRow}>
            <Text style={[styles.schoolGuideLevel, { color: '#F39C12' }]}>⭐ 標準</Text>
            <Text style={styles.schoolGuideSchools}>開成・麻布・桜蔭・甲陽・西大和</Text>
          </View>
          <View style={styles.schoolGuideRow}>
            <Text style={[styles.schoolGuideLevel, { color: '#E74C3C' }]}>🔥 発展</Text>
            <Text style={styles.schoolGuideSchools}>灘・東大寺・聖光・筑波大附属駒場</Text>
          </View>
        </View>

        <View style={styles.proCard}>
          <View style={styles.proCardHeader}>
            <Text style={styles.proBadge}>PRO</Text>
            <Text style={styles.proCardTitle}>🎧 聞き流しモード</Text>
          </View>
          <Text style={styles.proCardText}>
            ながら勉強に最適！問題と解答を自動で読み上げます。各科目ページの 🎧 ボタンからアクセスできます。
          </Text>
        </View>

        <View style={styles.inspirationCard}>
          <Text style={styles.inspirationText}>
            「継続は力なり」毎日少しずつ積み重ねよう！ 💪
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 28,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
    marginBottom: 4,
  },
  appSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '600',
    marginBottom: 14,
  },
  schoolBadges: {
    flexDirection: 'row',
    gap: 8,
  },
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
  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  difficultyRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
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
  diffBtnIcon: {
    fontSize: 18,
    marginBottom: 3,
  },
  diffBtnLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#555',
  },
  diffBtnLabelActive: {
    color: '#FFFFFF',
  },
  diffInfoBanner: {
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 4,
    backgroundColor: '#FAFAFA',
  },
  diffInfoText: {
    fontSize: 13,
    fontWeight: '700',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 24,
    fontWeight: '500',
  },
  schoolGuideCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  schoolGuideTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 12,
  },
  schoolGuideRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 10,
  },
  schoolGuideLevel: {
    fontSize: 14,
    fontWeight: '800',
    width: 60,
  },
  schoolGuideSchools: {
    fontSize: 13,
    color: '#555',
    fontWeight: '500',
    flex: 1,
  },
  proCard: {
    backgroundColor: '#2D1B69',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
  },
  proCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  proBadge: {
    backgroundColor: '#FFD700',
    color: '#1A1A2E',
    fontSize: 11,
    fontWeight: '900',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    overflow: 'hidden',
  },
  proCardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  proCardText: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 20,
    fontWeight: '500',
  },
  inspirationCard: {
    backgroundColor: '#1E5FBE',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
  },
  inspirationText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
  },
});
