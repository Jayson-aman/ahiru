import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MCQQuiz from '../../components/MCQQuiz';
import CertPaywall from '../../components/CertPaywall';
import { fpQuestions } from '../../data/fp_questions';
import { fpExpandedQuestions } from '../../data/fp_questions_expanded';
import { fpLifeQuestions2 } from '../../data/fp_questions_life2';
import { fpLifeQuestions3 } from '../../data/fp_questions_life3';
import { fpRiskQuestions2 } from '../../data/fp_questions_risk2';
import { fpRiskQuestions3 } from '../../data/fp_questions_risk3';
import { fpAssetQuestions2 } from '../../data/fp_questions_asset2';
import { fpAssetQuestions3 } from '../../data/fp_questions_asset3';
import { fpTaxQuestions2 } from '../../data/fp_questions_tax2';
import { fpTaxQuestions3 } from '../../data/fp_questions_tax3';
import { fpEstateQuestions2 } from '../../data/fp_questions_estate2';
import { fpEstateQuestions3 } from '../../data/fp_questions_estate3';
import { fpInhQuestions2 } from '../../data/fp_questions_inh2';
import { fpInhQuestions3 } from '../../data/fp_questions_inh3';
import { fpInhQuestions4 } from '../../data/fp_questions_inh4';
import { fpLifeQuestions4 } from '../../data/fp_questions_life4';
import { fpLifeQuestions5 } from '../../data/fp_questions_life5';
import { fpRiskQuestions5 } from '../../data/fp_questions_risk5';
import { fpAssetQuestions5 } from '../../data/fp_questions_asset5';
import { fpTaxQuestions5 } from '../../data/fp_questions_tax5';
import { fpEstateQuestions5 } from '../../data/fp_questions_estate5';
import { fpInhQuestions5 } from '../../data/fp_questions_inh5';
import { fpRiskQuestions4 } from '../../data/fp_questions_risk4';
import { fpAssetQuestions4 } from '../../data/fp_questions_asset4';
import { fpTaxQuestions4 } from '../../data/fp_questions_tax4';
import { fpEstateQuestions4 } from '../../data/fp_questions_estate4';
import { FREE_QUESTION_LIMIT, PRICING } from '../../services/subscription';

const allFpQuestions = [
  ...fpQuestions,
  ...fpExpandedQuestions,
  ...fpLifeQuestions2,
  ...fpLifeQuestions3,
  ...fpLifeQuestions4,
  ...fpRiskQuestions2,
  ...fpRiskQuestions3,
  ...fpRiskQuestions4,
  ...fpAssetQuestions2,
  ...fpAssetQuestions3,
  ...fpAssetQuestions4,
  ...fpTaxQuestions2,
  ...fpTaxQuestions3,
  ...fpTaxQuestions4,
  ...fpEstateQuestions2,
  ...fpEstateQuestions3,
  ...fpEstateQuestions4,
  ...fpInhQuestions2,
  ...fpInhQuestions3,
  ...fpInhQuestions4,
  ...fpLifeQuestions5,
  ...fpRiskQuestions5,
  ...fpAssetQuestions5,
  ...fpTaxQuestions5,
  ...fpEstateQuestions5,
  ...fpInhQuestions5,
];

const SUBJECT_INFO: Record<string, { name: string; emoji: string; color: string; totalExpected: number }> = {
  life:        { name: 'ライフプランニングと資金計画', emoji: '👨‍👩‍👧', color: '#0D7C3D', totalExpected: 100 },
  risk:        { name: 'リスク管理',                 emoji: '🛡️', color: '#1565C0', totalExpected: 100 },
  asset:       { name: '金融資産運用',               emoji: '📈', color: '#6A1B9A', totalExpected: 100 },
  tax:         { name: 'タックスプランニング',        emoji: '📊', color: '#E65100', totalExpected: 100 },
  realestate:  { name: '不動産',                    emoji: '🏘️', color: '#4E342E', totalExpected: 100 },
  inheritance: { name: '相続・事業承継',             emoji: '📜', color: '#880E4F', totalExpected: 100 },
};

export default function FPQuizScreen() {
  const { subject } = useLocalSearchParams<{ subject: string }>();
  const router = useRouter();
  const info = SUBJECT_INFO[subject ?? ''] ?? { name: subject, emoji: '📖', color: '#0D7C3D', totalExpected: 100 };

  const allQuestions = allFpQuestions
    .filter(q => q.subject === subject)
    .map(q => ({
      id: q.id,
      question: q.question,
      choices: q.choices,
      correctKey: q.correctKey,
      explanation: q.explanation,
      difficulty: q.difficulty,
    }));

  if (allQuestions.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.header, { backgroundColor: info.color }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← 戻る</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{info.emoji} {info.name}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.emoji}>🚧</Text>
          <Text style={styles.title}>問題を準備中</Text>
          <Text style={styles.text}>FP {info.name}の問題は{'\n'}現在作成中です。近日公開予定。</Text>
          <TouchableOpacity style={[styles.btn, { backgroundColor: info.color }]} onPress={() => router.back()}>
            <Text style={styles.btnText}>← 科目一覧に戻る</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <CertPaywall
        certKey="fp"
        certName={`FP ${info.name}`}
        certEmoji={info.emoji}
        accentColor={info.color}
        totalQuestions={info.totalExpected}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={PRICING.proMonthly}
        proYearlyLabel={PRICING.proYearly}
        proYearlySavingsLabel={PRICING.proYearlySavings}
      >
        <View style={[styles.header, { backgroundColor: info.color }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← 戻る</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{info.emoji} {info.name}</Text>
          <Text style={styles.headerSub}>{allQuestions.length}問収録</Text>
        </View>
        <MCQQuiz questions={allQuestions} accentColor={info.color} />
      </CertPaywall>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingHorizontal: 20, paddingVertical: 16 },
  backBtn: { marginBottom: 8 },
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 18, fontWeight: '900', color: '#FFFFFF' },
  headerSub: { fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: '600', marginTop: 2 },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  emoji: { fontSize: 64, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: '900', color: '#1A1A2E', marginBottom: 12 },
  text: { fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 22, marginBottom: 32 },
  btn: { borderRadius: 14, paddingVertical: 14, paddingHorizontal: 32 },
  btnText: { fontSize: 15, fontWeight: '800', color: '#FFFFFF' },
});
