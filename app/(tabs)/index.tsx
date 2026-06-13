import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import SubjectCard from '../../components/SubjectCard';
import { questionsBySubject, SubjectKey } from '../../data/questions';

const SUBJECTS: SubjectKey[] = ['sansu', 'kokugo', 'rika', 'shakai'];

export default function HomeScreen() {
  const router = useRouter();

  function handleSubject(subject: SubjectKey) {
    router.push(`/quiz/${subject}`);
  }

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
        <Text style={styles.sectionTitle}>科目を選んでスタート！</Text>
        <View style={styles.grid}>
          {SUBJECTS.map((subject) => (
            <SubjectCard
              key={subject}
              subject={subject}
              questionCount={questionsBySubject[subject].length}
              onPress={() => handleSubject(subject)}
            />
          ))}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 使い方</Text>
          <Text style={styles.infoText}>① 科目をタップ</Text>
          <Text style={styles.infoText}>② 問題カードをタップして答えを確認</Text>
          <Text style={styles.infoText}>③ ✓正解 / ✗不正解 を記録</Text>
          <Text style={styles.infoText}>④ 進捗タブで成績を確認</Text>
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
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 14,
    letterSpacing: 0.5,
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
