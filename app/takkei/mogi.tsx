import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import { takkeiQuestions } from '../../data/takkei_questions';

const DISTRIBUTION: Record<string, number> = {
  kenri: 14,
  gyoho: 20,
  horei: 8,
  zei: 8,
};

const SUBJECT_NAMES: Record<string, string> = {
  kenri: '権利関係',
  gyoho: '宅建業法',
  horei: '法令上の制限',
  zei: '税・その他',
};

function pickRandom<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

export default function TakkeiMogiScreen() {
  const router = useRouter();

  const questions = useMemo(() => {
    const result: typeof takkeiQuestions = [];
    for (const [subj, count] of Object.entries(DISTRIBUTION)) {
      const pool = takkeiQuestions.filter(q => q.subject === subj);
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
      <MogiExam
        questions={questions}
        timeLimitMinutes={120}
        passingScore={36}
        accentColor="#6B3210"
        title="宅建 模擬試験"
        onBack={() => router.back()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
});
