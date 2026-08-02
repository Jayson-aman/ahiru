import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import CertPaywall from '../../components/CertPaywall';
import { sekokanMogi } from '../../data/sekokan';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

export default function SekokanMogiScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <CertPaywall
        certKey="sekokan"
        certName="一級建築施工管理技士 模擬試験"
        certEmoji="📝"
        accentColor="#BF360C"
        totalQuestions={sekokanMogi.length}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={PRICING.proMonthly}
        proYearlyLabel={PRICING.proYearly}
        proYearlySavingsLabel={PRICING.proYearlySavings}
        proFeatures={['全問題アンロック・図解入り詳細解説', '要点テキスト・模擬試験、「二次検定（旧・実地試験）」記述式対策も収録', '動く図解で初心者もわかりやすい', 'iPhone・iPadでいつでも学習']}
      >
        {(hasAccess: boolean) => (
          <MogiExam
            questions={hasAccess ? sekokanMogi : sekokanMogi.slice(0, FREE_QUESTION_LIMIT)}
            timeLimitMinutes={150}
            passingScore={30}
            accentColor="#BF360C"
            title="一級建築施工管理技士 模擬試験"
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
