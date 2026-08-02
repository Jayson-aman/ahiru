import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import CertPaywall from '../../components/CertPaywall';
import { kenchikuMogi } from '../../data/kenchiku/mogi';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

export default function KenchikuMogiScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <CertPaywall
        certKey="kenchiku"
        certName="建築設備士 模擬試験"
        certEmoji="📝"
        accentColor="#37474F"
        totalQuestions={kenchikuMogi.length}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={PRICING.proMonthly}
        proYearlyLabel={PRICING.proYearly}
        proYearlySavingsLabel={PRICING.proYearlySavings}
        proFeatures={['全問題アンロック・図解入り詳細解説', '要点テキスト・模擬試験、製図（プレゼンテーション・アプローチ計画）対策も収録', '動く図解で初心者もわかりやすい', 'iPhone・iPadでいつでも学習']}
      >
        {(hasAccess: boolean) => (
          <MogiExam
            questions={hasAccess ? kenchikuMogi : kenchikuMogi.slice(0, FREE_QUESTION_LIMIT)}
            timeLimitMinutes={150}
            passingScore={35}
            accentColor="#37474F"
            title="建築設備士 模擬試験（本試験形式）"
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
