import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import { sekokanMogi } from '../../data/sekokan';

export default function SekokanMogiScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <MogiExam
        questions={sekokanMogi}
        timeLimitMinutes={150}
        passingScore={30}
        accentColor="#BF360C"
        title="一級建築施工管理技士 模擬試験"
        onBack={() => router.back()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
});
