import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function KoukoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={['#5B4B8A', '#3A2E6A']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🎓 高校受験</Text>
        <Text style={styles.headerSub}>公立・私立高校 受験対策</Text>
      </LinearGradient>

      <View style={styles.body}>
        <Text style={styles.comingSoonEmoji}>🚧</Text>
        <Text style={styles.comingSoonTitle}>準備中</Text>
        <Text style={styles.comingSoonText}>
          高校受験の問題は現在作成中です。{'\n'}
          近日公開予定です。
        </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← ホームに戻る</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 28 },
  backBtn: { marginBottom: 8 },
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 24, fontWeight: '900', color: '#FFFFFF', marginBottom: 4 },
  headerSub: { fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: '600' },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  comingSoonEmoji: { fontSize: 64, marginBottom: 16 },
  comingSoonTitle: { fontSize: 22, fontWeight: '900', color: '#1A1A2E', marginBottom: 12 },
  comingSoonText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  backButton: {
    backgroundColor: '#5B4B8A',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  backButtonText: { fontSize: 15, fontWeight: '800', color: '#FFFFFF' },
});
