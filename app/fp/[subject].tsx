import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const SUBJECT_INFO: Record<string, { name: string; emoji: string; color: string }> = {
  life:        { name: 'ライフプランニングと資金計画', emoji: '👨‍👩‍👧', color: '#0D7C3D' },
  risk:        { name: 'リスク管理',                 emoji: '🛡️', color: '#1565C0' },
  asset:       { name: '金融資産運用',               emoji: '📈', color: '#6A1B9A' },
  tax:         { name: 'タックスプランニング',        emoji: '📊', color: '#E65100' },
  realestate:  { name: '不動産',                    emoji: '🏘️', color: '#4E342E' },
  inheritance: { name: '相続・事業承継',             emoji: '📜', color: '#880E4F' },
};

export default function FPQuizScreen() {
  const { subject } = useLocalSearchParams<{ subject: string }>();
  const router = useRouter();
  const info = SUBJECT_INFO[subject ?? ''] ?? { name: subject, emoji: '📖', color: '#0D7C3D' };

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

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingHorizontal: 20, paddingVertical: 16 },
  backBtn: { marginBottom: 8 },
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 18, fontWeight: '900', color: '#FFFFFF' },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  emoji: { fontSize: 64, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: '900', color: '#1A1A2E', marginBottom: 12 },
  text: { fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 22, marginBottom: 32 },
  btn: { borderRadius: 14, paddingVertical: 14, paddingHorizontal: 32 },
  btnText: { fontSize: 15, fontWeight: '800', color: '#FFFFFF' },
});
