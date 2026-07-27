import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MCQQuiz from '../../components/MCQQuiz';
import CertPaywall from '../../components/CertPaywall';
import { mansionQuestions } from '../../data/mansion_questions';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

const SUBJECT_INFO: Record<string, { name: string; emoji: string; color: string }> = {
  kubunsho:  { name: '区分所有法',            emoji: '⚖️',  color: '#7B1FA2' },
  tekiseika: { name: 'マンション管理適正化法', emoji: '📋', color: '#1565C0' },
  kiyaku:    { name: '標準管理規約',           emoji: '📖', color: '#2E7D32' },
  minpo:     { name: '民法・その他法令',       emoji: '🏛️', color: '#E65100' },
  setsubi:   { name: '建物・設備',             emoji: '🔧', color: '#4E342E' },
  unei:      { name: '管理組合の運営',         emoji: '🏢', color: '#880E4F' },
};

export default function MansionQuizScreen() {
  const { subject } = useLocalSearchParams<{ subject: string }>();
  const router = useRouter();
  const info = SUBJECT_INFO[subject ?? ''] ?? { name: subject, emoji: '📖', color: '#7B1FA2' };

  const allQuestions = mansionQuestions
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
          <Text style={styles.text}>{info.name}の問題は{'\n'}現在作成中です。近日公開予定。</Text>
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
        certKey="mansion"
        certName={`マンション管理士 ${info.name}`}
        certEmoji={info.emoji}
        accentColor={info.color}
        totalQuestions={allQuestions.length}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={PRICING.proMonthly}
        proYearlyLabel={PRICING.proYearly}
        proYearlySavingsLabel={PRICING.proYearlySavings}
      >
        {(hasAccess: boolean) => (
        <>
        <View style={[styles.header, { backgroundColor: info.color }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← 戻る</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{info.emoji} {info.name}</Text>
          <Text style={styles.headerSub}>{allQuestions.length}問収録</Text>
        </View>
        <MCQQuiz questions={hasAccess ? allQuestions : allQuestions.slice(0, FREE_QUESTION_LIMIT)} accentColor={info.color} />
        </>
        )}
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
