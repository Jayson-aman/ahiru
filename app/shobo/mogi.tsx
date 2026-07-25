import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import CertPaywall from '../../components/CertPaywall';
import { shoboQuestions } from '../../data/shobo_questions';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

/**
 * 甲種の本試験構成に合わせた配分。
 * 筆記45問（法令15＝共通8＋類別7／基礎的知識10／構造機能20＝機械or電気12＋規格8）＋実技7問。
 * 機械系（1・2・3・5類）と電気系（4類）は基礎・構造で択一のため、
 * ここでは両系統から均等に出題して総合演習とする。
 */
const DISTRIBUTION: Record<string, number> = {
  horei_kyotsu: 8,
  horei_rui: 7,
  kiso_kikai: 5,
  kiso_denki: 5,
  kozo_kikai: 6,
  kozo_denki: 6,
  kikaku: 8,
  jitsugi: 7,
};

const SUBJECT_NAMES: Record<string, string> = {
  horei_kyotsu: '消防関係法令（共通）',
  horei_rui: '消防関係法令（類別）',
  kiso_kikai: '基礎的知識（機械）',
  kiso_denki: '基礎的知識（電気）',
  kozo_kikai: '構造・機能（機械）',
  kozo_denki: '構造・機能（電気）',
  kikaku: '構造・機能（規格）',
  jitsugi: '実技（鑑別等・製図）',
};

function pickRandom<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

export default function ShoboMogiScreen() {
  const router = useRouter();

  const questions = useMemo(() => {
    const result: typeof shoboQuestions = [];
    for (const [subj, count] of Object.entries(DISTRIBUTION)) {
      const pool = shoboQuestions.filter(q => q.subject === subj);
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
        certKey="shobo"
        certName="消防設備士甲種 模擬試験"
        certEmoji="📝"
        accentColor="#D32F2F"
        totalQuestions={questions.length}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={PRICING.proMonthly}
        proYearlyLabel={PRICING.proYearly}
        proYearlySavingsLabel={PRICING.proYearlySavings}
      >
        {(hasAccess: boolean) => (
          <MogiExam
            questions={hasAccess ? questions : questions.slice(0, FREE_QUESTION_LIMIT)}
            timeLimitMinutes={195}
            passingScore={32}
            accentColor="#D32F2F"
            title="消防設備士甲種 模擬試験"
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
