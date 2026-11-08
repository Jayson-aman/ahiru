import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import CertPaywall from '../../components/CertPaywall';
import { ikkyu1Questions } from '../../data/ikkyu1_questions';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

/** 本試験の科目別出題数（計画20・環境設備20・法規30・構造30・施工25 の計125問） */
const DISTRIBUTION: Record<string, number> = {
  keikaku: 20,
  kankyo: 20,
  hoki: 30,
  kozo: 30,
  sekou: 25,
};

const SUBJECT_NAMES: Record<string, string> = {
  keikaku: '建築計画',
  kankyo: '環境・設備',
  hoki: '建築法規',
  kozo: '建築構造',
  sekou: '建築施工',
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
  const result: typeof ikkyu1Questions = [];
  for (const [subj, count] of Object.entries(DISTRIBUTION)) {
    const pool = ikkyu1Questions.filter(q => q.subject === subj);
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

export default function Ikkyu1MogiScreen() {
  const router = useRouter();

  const questions = useMemo(() => buildExam(pickRandom), []);
  // 無料枠はランダムにしない。ランダムのままだと画面を出入りするたびに
  // 別の10問が解説つきで見え、無課金で問題バンク全体を読めてしまう。
  const freeQuestions = useMemo(() => buildExam(pickHead).slice(0, FREE_QUESTION_LIMIT), []);

  return (
    <SafeAreaView style={styles.safe}>
      <CertPaywall
        certKey="ikkyu1"
        certName="一級建築士 学科模擬試験"
        certEmoji="📝"
        accentColor="#283593"
        totalQuestions={questions.length}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={PRICING.proMonthly}
        proYearlyLabel={PRICING.proYearly}
        proYearlySavingsLabel={PRICING.proYearlySavings}
        proFeatures={['全問題アンロック・図解入り詳細解説', '要点テキスト・模擬試験を収録', '動く図解で初心者もわかりやすい', 'iPhone・iPadでいつでも学習']}
      >
        {(hasAccess: boolean) => (
          <MogiExam
            questions={hasAccess ? questions : freeQuestions}
            timeLimitMinutes={390}
            // 学科の合格基準は総得点90点前後（年により変動）。各科目にも足切りがある
            passingScore={90}
            accentColor="#283593"
            title="一級建築士 学科模擬試験"
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
