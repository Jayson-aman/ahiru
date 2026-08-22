import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import CertPaywall from '../../components/CertPaywall';
import { dobokusekouMogi } from '../../data/dobokusekou_mogi';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

export default function DobokusekouMogiScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <CertPaywall
        certKey="dobokusekou"
        certName="1級土木施工管理技士 模擬試験"
        certEmoji="📝"
        accentColor="#00695C"
        totalQuestions={dobokusekouMogi.length}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={PRICING.proMonthly}
        proYearlyLabel={PRICING.proYearly}
        proYearlySavingsLabel={PRICING.proYearlySavings}
        proFeatures={['全問題アンロック・図解入り詳細解説', '要点テキスト・模擬試験、「実地試験（二次検定）」記述式対策も収録', '動く図解で初心者もわかりやすい', 'iPhone・iPadでいつでも学習']}
      >
        {(hasAccess: boolean) => (
          <MogiExam
            questions={hasAccess ? dobokusekouMogi : dobokusekouMogi.slice(0, FREE_QUESTION_LIMIT)}
            timeLimitMinutes={150}
            passingScore={30}
            accentColor="#00695C"
            title="1級土木施工管理技士 模擬試験"
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
