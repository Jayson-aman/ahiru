import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import CertPaywall from '../../components/CertPaywall';
import { tsushinQuestions } from '../../data/tsushin_questions';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

/** 本試験の科目別出題数（法令15＋物理化学10＋性質消火10 の計35問） */
const DISTRIBUTION: Record<string, number> = {
  kogaku: 18,
  setsubi: 22,
  kanri: 12,
  hoki: 8,
};

const SUBJECT_NAMES: Record<string, string> = {
  kogaku: '電気通信工学',
  setsubi: '電気通信設備',
  kanri: '施工管理法',
  hoki: '法規',
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
  const result: typeof tsushinQuestions = [];
  for (const [subj, count] of Object.entries(DISTRIBUTION)) {
    const pool = tsushinQuestions.filter(q => q.subject === subj);
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

export default function TsushinMogiScreen() {
  const router = useRouter();

  const questions = useMemo(() => buildExam(pickRandom), []);
  // 無料枠はランダムにしない。ランダムのままだと画面を出入りするたびに
  // 別の10問が解説つきで見え、無課金で問題バンク全体を読めてしまう。
  const freeQuestions = useMemo(() => buildExam(pickHead).slice(0, FREE_QUESTION_LIMIT), []);

  return (
    <SafeAreaView style={styles.safe}>
      <CertPaywall
        certKey="tsushin"
        certName="電気通信施工 模擬試験"
        certEmoji="📝"
        accentColor="#1565C0"
        totalQuestions={questions.length}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={PRICING.proMonthly}
        proYearlyLabel={PRICING.proYearly}
        proYearlySavingsLabel={PRICING.proYearlySavings}
      >
        {(hasAccess: boolean) => (
          <MogiExam
            questions={hasAccess ? questions : freeQuestions}
            timeLimitMinutes={160}
            // 一次検定の合格基準は全体の60%以上
            passingScore={36}
            accentColor="#1565C0"
            title="電気通信施工 模擬試験"
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
