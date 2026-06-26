import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
const INFO: Record<string, { name: string; emoji: string; color: string }> = {
  ippan: { name: '建築一般知識', emoji: '🏗️', color: '#1565C0' },
  hoki: { name: '建築法規', emoji: '📋', color: '#2E7D32' },
  kucho: { name: '空調・換気設備', emoji: '❄️', color: '#0097A7' },
  kyuhaisui: { name: '給排水衛生設備', emoji: '🚿', color: '#1976D2' },
  denki: { name: '電気設備', emoji: '⚡', color: '#F57F17' },
  bousai: { name: '防災設備', emoji: '🚒', color: '#C62828' },
};
export default function KenchikuQuizScreen() {
  const { subject } = useLocalSearchParams<{ subject: string }>();
  const router = useRouter();
  const info = INFO[subject ?? ''] ?? { name: subject, emoji: '📖', color: '#37474F' };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.header, { backgroundColor: info.color }]}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>{info.emoji} {info.name}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.emoji}>🚧</Text>
        <Text style={styles.h}>問題データ作成中</Text>
        <Text style={styles.t}>{info.name}の1200問は現在生成中です。{'\n'}近日公開予定。</Text>
        <TouchableOpacity style={[styles.btn, { backgroundColor: info.color }]} onPress={() => router.back()}>
          <Text style={styles.btnT}>← 科目一覧に戻る</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingHorizontal: 20, paddingVertical: 16 },
  back: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700', marginBottom: 8 },
  title: { fontSize: 18, fontWeight: '900', color: '#FFFFFF' },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  emoji: { fontSize: 64, marginBottom: 16 },
  h: { fontSize: 20, fontWeight: '900', color: '#1A1A2E', marginBottom: 12 },
  t: { fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 22, marginBottom: 32 },
  btn: { borderRadius: 14, paddingVertical: 14, paddingHorizontal: 32 },
  btnT: { fontSize: 15, fontWeight: '800', color: '#FFFFFF' },
});
