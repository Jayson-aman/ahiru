import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MogiExam from '../../../components/MogiExam';
import { takkeiHonshikenR05 } from '../../../data/takkei_honshiken_r05';
import { takkeiHonshikenR04 } from '../../../data/takkei_honshiken_r04';
import { takkeiHonshikenR03 } from '../../../data/takkei_honshiken_r03';
import { takkeiHonshikenR02 } from '../../../data/takkei_honshiken_r02';
import { takkeiHonshikenR01 } from '../../../data/takkei_honshiken_r01';

const YEAR_MAP: Record<string, { label: string; passingScore: number; getData: () => any[] }> = {
  r05: { label: '令和5年（2023）宅建試験', passingScore: 36, getData: () => takkeiHonshikenR05 },
  r04: { label: '令和4年（2022）宅建試験', passingScore: 36, getData: () => takkeiHonshikenR04 },
  r03: { label: '令和3年（2021）宅建試験', passingScore: 34, getData: () => takkeiHonshikenR03 },
  r02: { label: '令和2年（2020）宅建試験', passingScore: 38, getData: () => takkeiHonshikenR02 },
  r01: { label: '令和元年（2019）宅建試験', passingScore: 35, getData: () => takkeiHonshikenR01 },
};

export default function HonshikenYearScreen() {
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
        accentColor="#6B3210"
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
  errBtn: { backgroundColor: '#6B3210', borderRadius: 14, paddingVertical: 14, paddingHorizontal: 32 },
  errBtnText: { fontSize: 15, fontWeight: '800', color: '#FFF' },
});
