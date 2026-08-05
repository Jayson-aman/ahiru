import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import CertPaywall from '../../components/CertPaywall';
import { koatsuQuestions } from '../../data/koatsu_questions';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

/** 模擬試験の科目別出題数の目安（保安管理技術15＋法令20＋学識化学15＋学識機械15 の計65問） */
const DISTRIBUTION: Record<string, number> = {
  hoan: 15,
  horei: 20,
  gakushiki_ka: 15,
  gakushiki_ki: 15,
};

const SUBJECT_NAMES: Record<string, string> = {
  hoan: '保安管理技術（共通）',
  horei: '法令（共通）',
  gakushiki_ka: '学識（化学）',
  gakushiki_ki: '学識（機械）',
};

function pickRandom<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

/** 無料プレビュー用。毎回まったく同じ問題を返す */
function pickHead<T>(arr: T[], n: number): T[] {
  return arr.slice(0, Math.min(n, arr.length));
}

function buildExam(pick: <T>(arr: T[], n: number) => T[]) {
  const result: typeof koatsuQuestions = [];
  for (const [subj, count] of Object.entries(DISTRIBUTION)) {
    const pool = koatsuQuestions.filter(q => q.subject === subj);
    result.push(...pick(pool, count));
  }
  return result.map(q => ({
    id: q.id,
    subject: q.subject,
    subjectName: SUBJECT_NAMES[q.subject] ?? q.subjectName,
    question: q.question,
    choices: q.choices,
    correctKey: q.correctKey,
    explanation: q.explanation,
    examYear: q.examYear,
  }));
}

export default function KoatsuMogiScreen() {
  const router = useRouter();

  const questions = useMemo(() => buildExam(pickRandom), []);
  const freeQuestions = useMemo(() => buildExam(pickHead).slice(0, FREE_QUESTION_LIMIT), []);

  return (
    <SafeAreaView style={styles.safe}>
      <CertPaywall
        certKey="koatsu"
        certName="高圧ガス製造保安責任者 模擬試験"
        certEmoji="📝"
        accentColor="#37474F"
        totalQuestions={questions.length}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={PRICING.proMonthly}
        proYearlyLabel={PRICING.proYearly}
        proYearlySavingsLabel={PRICING.proYearlySavings}
      >
        {(hasAccess: boolean) => (
          <MogiExam
            questions={hasAccess ? questions : freeQuestions}
            timeLimitMinutes={120}
            passingScore={39}
            accentColor="#37474F"
            title="高圧ガス製造保安責任者 模擬試験"
            onBack={() => router.back()}
          />
        )}
      </CertPaywall>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
});
