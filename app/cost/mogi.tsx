import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import CertPaywall from '../../components/CertPaywall';
import { costQuestions } from '../../data/cost_questions';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

// 本番形式 40問の科目配分
const DISTRIBUTION: Record<string, number> = {
  gairon: 8,
  sekisan: 14,
  keiyaku: 10,
  keizai: 8,
};

const SUBJECT_NAMES: Record<string, string> = {
  gairon: 'コスト管理概論',
  sekisan: '積算・数量算出',
  keiyaku: '契約・法規',
  keizai: '経済調査・価格',
};

function pickRandom<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

export default function CostMogiScreen() {
  const router = useRouter();

  const questions = useMemo(() => {
    const result: typeof costQuestions = [];
    for (const [subj, count] of Object.entries(DISTRIBUTION)) {
      const pool = costQuestions.filter(q => q.subject === subj);
      result.push(...pickRandom(pool, count));
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
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <CertPaywall
        certKey="cost"
        certName="建設コスト管理士 模擬試験"
        certEmoji="📝"
        accentColor="#4527A0"
        totalQuestions={questions.length}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={PRICING.proMonthly}
        proYearlyLabel={PRICING.proYearly}
        proYearlySavingsLabel={PRICING.proYearlySavings}
      >
        {(hasAccess: boolean) => (
          <MogiExam
            questions={hasAccess ? questions : questions.slice(0, FREE_QUESTION_LIMIT)}
            timeLimitMinutes={120}
            passingScore={24}
            accentColor="#4527A0"
            title="建設コスト管理士 模擬試験"
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
