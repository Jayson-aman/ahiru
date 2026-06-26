import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MCQQuiz from '../../components/MCQQuiz';
import CertPaywall from '../../components/CertPaywall';
import { denken3Questions } from '../../data/denken3_questions';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

const INFO: Record<string, { name: string; emoji: string; color: string; totalExpected: number }> = {
  rikigaku: { name: '理論',  emoji: '⚡', color: '#E65100', totalExpected: 200 },
  denryoku: { name: '電力',  emoji: '🔌', color: '#1565C0', totalExpected: 200 },
  kikai:    { name: '機械',  emoji: '⚙️',  color: '#2E7D32', totalExpected: 200 },
  houki:    { name: '法規',  emoji: '📋', color: '#7B1FA2', totalExpected: 150 },
};

export default function Denken3SubjectScreen() {
  const { subject } = useLocalSearchParams<{ subject: string }>();
  const router = useRouter();
  const info = INFO[subject ?? ''] ?? { name: subject, emoji: '⚡', color: '#E65100', totalExpected: 150 };

  const allQuestions = denken3Questions
    .filter(q => q.subject === subject)
    .map(q => ({
      id: q.id,
      question: q.question,
      choices: q.choices,
      correctKey: q.correctKey,
      explanation: q.explanation,
      difficulty: q.difficulty,
    }));

  if (allQuestions.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.header, { backgroundColor: info.color }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← 戻る</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{info.emoji} {info.name}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.emoji}>🚧</Text>
          <Text style={styles.title}>問題を準備中</Text>
          <Text style={styles.text}>電験三種 {info.name}の問題は{'\n'}現在作成中です。近日公開予定。</Text>
          <TouchableOpacity style={[styles.btn, { backgroundColor: info.color }]} onPress={() => router.back()}>
            <Text style={styles.btnText}>← 科目一覧に戻る</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <CertPaywall
        certKey="denken3"
        certName={`電験三種 ${info.name}`}
        certEmoji={info.emoji}
        accentColor={info.color}
        totalQuestions={info.totalExpected}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={PRICING.proMonthly}
        proYearlyLabel={PRICING.proYearly}
        proYearlySavingsLabel={PRICING.proYearlySavings}
      >
        <View style={[styles.header, { backgroundColor: info.color }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← 戻る</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{info.emoji} {info.name}</Text>
          <Text style={styles.headerSub}>{allQuestions.length}問収録</Text>
        </View>
        <MCQQuiz questions={allQuestions} accentColor={info.color} />
      </CertPaywall>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingHorizontal: 20, paddingVertical: 16 },
  backBtn: { marginBottom: 8 },
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 18, fontWeight: '900', color: '#FFFFFF' },
  headerSub: { fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: '600', marginTop: 2 },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  emoji: { fontSize: 64, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: '900', color: '#1A1A2E', marginBottom: 12 },
  text: { fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 22, marginBottom: 32 },
  btn: { borderRadius: 14, paddingVertical: 14, paddingHorizontal: 32 },
  btnText: { fontSize: 15, fontWeight: '800', color: '#FFFFFF' },
});
