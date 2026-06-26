import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const INFO: Record<string, { name: string; emoji: string; color: string }> = {
  rikigaku: { name: '理論',  emoji: '⚡', color: '#E65100' },
  denryoku: { name: '電力',  emoji: '🔌', color: '#1565C0' },
  kikai:    { name: '機械',  emoji: '⚙️',  color: '#2E7D32' },
  houki:    { name: '法規',  emoji: '📋', color: '#7B1FA2' },
};

export default function Denken3SubjectScreen() {
  const { subject } = useLocalSearchParams<{ subject: string }>();
  const router = useRouter();
  const info = INFO[subject ?? ''] ?? { name: subject, emoji: '⚡', color: '#E65100' };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={[styles.header, { backgroundColor: info.color }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.back}>
          <Text style={styles.backText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{info.emoji} {info.name}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.emoji}>🚧</Text>
        <Text style={styles.h}>問題データ作成中</Text>
        <Text style={styles.t}>電験三種 {info.name}の問題は{'\n'}現在作成中です。近日公開予定。</Text>
        <TouchableOpacity style={[styles.btn, { backgroundColor: info.color }]} onPress={() => router.back()}>
          <Text style={styles.btnText}>← 科目一覧に戻る</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingHorizontal: 20, paddingVertical: 16 },
  back: { marginBottom: 8 },
  backText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  title: { fontSize: 18, fontWeight: '900', color: '#FFF' },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  emoji: { fontSize: 64, marginBottom: 16 },
  h: { fontSize: 20, fontWeight: '900', color: '#1A1A2E', marginBottom: 12 },
  t: { fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 22, marginBottom: 32 },
  btn: { borderRadius: 14, paddingVertical: 14, paddingHorizontal: 32 },
  btnText: { fontSize: 15, fontWeight: '800', color: '#FFF' },
});
