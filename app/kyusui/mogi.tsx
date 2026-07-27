import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import CertPaywall from '../../components/CertPaywall';
import { kyusuiQuestions } from '../../data/kyusui_questions';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

/** 本試験の科目別出題数（学科試験1＝40問、学科試験2＝20問 の計60問） */
const DISTRIBUTION: Record<string, number> = {
  koshu: 3,
  gyosei: 6,
  koho: 10,
  kozo: 10,
  keikaku: 6,
  jimu: 5,
  gaiyo: 15,
  sekokan: 5,
};

const SUBJECT_NAMES: Record<string, string> = {
  koshu: '公衆衛生概論',
  gyosei: '水道行政',
  koho: '給水装置工事法',
  kozo: '給水装置の構造及び性能',
  keikaku: '給水装置計画論',
  jimu: '給水装置工事事務論',
  gaiyo: '給水装置の概要',
  sekokan: '給水装置施工管理法',
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
  const result: typeof kyusuiQuestions = [];
  for (const [subj, count] of Object.entries(DISTRIBUTION)) {
    const pool = kyusuiQuestions.filter(q => q.subject === subj);
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

export default function KyusuiMogiScreen() {
  const router = useRouter();

  const questions = useMemo(() => buildExam(pickRandom), []);
  // 無料枠はランダムにしない。ランダムのままだと画面を出入りするたびに
  // 別の10問が解説つきで見え、無課金で問題バンク全体を読めてしまう。
  const freeQuestions = useMemo(() => buildExam(pickHead).slice(0, FREE_QUESTION_LIMIT), []);

  return (
    <SafeAreaView style={styles.safe}>
      <CertPaywall
        certKey="kyusui"
        certName="給水装置 模擬試験"
        certEmoji="📝"
        accentColor="#0288D1"
        totalQuestions={questions.length}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={PRICING.proMonthly}
        proYearlyLabel={PRICING.proYearly}
        proYearlySavingsLabel={PRICING.proYearlySavings}
      >
        {(hasAccess: boolean) => (
          <MogiExam
            questions={hasAccess ? questions : freeQuestions}
            timeLimitMinutes={150}
            passingScore={36}
            accentColor="#0288D1"
            title="給水装置 模擬試験"
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
