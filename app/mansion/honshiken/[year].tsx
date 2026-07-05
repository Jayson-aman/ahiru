import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MogiExam from '../../../components/MogiExam';
import { mansionHonshikenR07 } from '../../../data/mansion_honshiken_r07';
import { mansionHonshikenR06 } from '../../../data/mansion_honshiken_r06';

const YEAR_MAP: Record<string, { label: string; passingScore: number; getData: () => any[] }> = {
  r07: { label: '令和7年度形式 本試験レベル模試', passingScore: 38, getData: () => mansionHonshikenR07 },
  r06: { label: '令和6年度形式 本試験レベル模試', passingScore: 38, getData: () => mansionHonshikenR06 },
};

export default function MansionHonshikenYearScreen() {
  const { year } = useLocalSearchParams<{ year: string }>();
  const router = useRouter();
  const meta = YEAR_MAP[year ?? ''];

  if (!meta) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.errBody}>
          <Text style={styles.errEmoji}>🚧</Text>
          <Text style={styles.errTitle}>準備中</Text>
          <Text style={styles.errText}>この年度の問題は現在作成中です。</Text>
          <TouchableOpacity style={styles.errBtn} onPress={() => router.back()}>
            <Text style={styles.errBtnText}>← 戻る</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const questions = meta.getData();

  return (
    <SafeAreaView style={styles.safe}>
      <MogiExam
        questions={questions}
        timeLimitMinutes={120}
        passingScore={meta.passingScore}
        accentColor="#7B1FA2"
        title={meta.label}
        onBack={() => router.back()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
  errBody: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 },
  errEmoji: { fontSize: 64, marginBottom: 16 },
  errTitle: { fontSize: 22, fontWeight: '900', color: '#1A1A2E', marginBottom: 12 },
  errText: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 32, lineHeight: 22 },
  errBtn: { backgroundColor: '#7B1FA2', borderRadius: 14, paddingVertical: 14, paddingHorizontal: 32 },
  errBtnText: { fontSize: 15, fontWeight: '800', color: '#FFF' },
});
