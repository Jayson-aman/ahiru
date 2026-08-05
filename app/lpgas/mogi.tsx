import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import CertPaywall from '../../components/CertPaywall';
import { lpgasQuestions } from '../../data/lpgas_questions';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

/** 学科試験の科目別出題数の目安（法令10＋基礎8＋燃焼8＋供給12＋消費12 の計50問） */
const DISTRIBUTION: Record<string, number> = {
  kiso: 8,
  nensho: 8,
  kyokyu: 12,
  shohi: 12,
  horei: 10,
};

const SUBJECT_NAMES: Record<string, string> = {
  kiso: '基礎的な物理学的性質及び化学的性質',
  nensho: '燃焼工学に関する知識',
  kyokyu: '供給設備に関する知識',
  shohi: '消費設備に関する知識',
  horei: '関係法令',
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
  const result: typeof lpgasQuestions = [];
  for (const [subj, count] of Object.entries(DISTRIBUTION)) {
    const pool = lpgasQuestions.filter(q => q.subject === subj);
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

export default function LpgasMogiScreen() {
  const router = useRouter();

  const questions = useMemo(() => buildExam(pickRandom), []);
  const freeQuestions = useMemo(() => buildExam(pickHead).slice(0, FREE_QUESTION_LIMIT), []);

  return (
    <SafeAreaView style={styles.safe}>
      <CertPaywall
        certKey="lpgas"
        certName="液化石油ガス設備士 模擬試験"
        certEmoji="📝"
        accentColor="#F57F17"
        totalQuestions={questions.length}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={PRICING.proMonthly}
        proYearlyLabel={PRICING.proYearly}
        proYearlySavingsLabel={PRICING.proYearlySavings}
      >
        {(hasAccess: boolean) => (
          <MogiExam
            questions={hasAccess ? questions : freeQuestions}
            timeLimitMinutes={90}
            passingScore={30}
            accentColor="#F57F17"
            title="液化石油ガス設備士 模擬試験"
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
