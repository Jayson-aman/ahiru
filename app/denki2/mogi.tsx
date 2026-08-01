import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import CertPaywall from '../../components/CertPaywall';
import { denki2Questions } from '../../data/denki2_questions';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

/** 本試験の科目別出題数（法令15＋物理化学10＋性質消火10 の計35問） */
const DISTRIBUTION: Record<string, number> = {
  riron: 10,
  haisen: 8,
  kiki: 12,
  hoki: 20,
};

const SUBJECT_NAMES: Record<string, string> = {
  riron: '電気の基礎理論',
  haisen: '配電理論と配線設計',
  kiki: '機器・材料・工具',
  hoki: '法令・配線図',
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
  const result: typeof denki2Questions = [];
  for (const [subj, count] of Object.entries(DISTRIBUTION)) {
    const pool = denki2Questions.filter(q => q.subject === subj);
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

export default function Denki2MogiScreen() {
  const router = useRouter();

  const questions = useMemo(() => buildExam(pickRandom), []);
  // 無料枠はランダムにしない。ランダムのままだと画面を出入りするたびに
  // 別の10問が解説つきで見え、無課金で問題バンク全体を読めてしまう。
  const freeQuestions = useMemo(() => buildExam(pickHead).slice(0, FREE_QUESTION_LIMIT), []);

  return (
    <SafeAreaView style={styles.safe}>
      <CertPaywall
        certKey="denki2"
        certName="第二種電気工事士 学科模擬試験"
        certEmoji="📝"
        accentColor="#E65100"
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
            // 学科試験は50問中30問（60%）で合格
            passingScore={30}
            accentColor="#E65100"
            title="第二種電気工事士 学科模擬試験"
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
