import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import { kenchikuMogi } from '../../data/kenchiku/mogi';

export default function KenchikuMogiScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <MogiExam
        questions={kenchikuMogi}
        timeLimitMinutes={150}
        passingScore={35}
        accentColor="#37474F"
        title="建築設備士 模擬試験（本試験形式）"
        onBack={() => router.back()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
});
