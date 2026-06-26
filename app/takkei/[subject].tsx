import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const SUBJECT_INFO: Record<string, { name: string; emoji: string; color: string }> = {
  kenri: { name: '権利関係', emoji: '⚖️', color: '#5B4B8A' },
  gyoho: { name: '宅建業法', emoji: '🏢', color: '#1E5799' },
  horei: { name: '法令上の制限', emoji: '📋', color: '#27AE60' },
  zei:   { name: '税・その他',  emoji: '💴', color: '#E67E22' },
};

export default function TakkeiQuizScreen() {
  const { subject } = useLocalSearchParams<{ subject: string }>();
  const router = useRouter();
  const info = SUBJECT_INFO[subject ?? ''] ?? { name: subject, emoji: '📖', color: '#1B2A5C' };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.header, { backgroundColor: info.color }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{info.emoji} {info.name}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.comingSoonEmoji}>🚧</Text>
        <Text style={styles.comingSoonTitle}>問題を準備中</Text>
        <Text style={styles.comingSoonText}>
          {info.name}の問題は現在作成中です。{'\n'}
          近日公開予定です。
        </Text>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: info.color }]}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← 科目一覧に戻る</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backBtn: { marginBottom: 8 },
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 20, fontWeight: '900', color: '#FFFFFF' },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  comingSoonEmoji: { fontSize: 64, marginBottom: 16 },
  comingSoonTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1A1A2E',
    marginBottom: 12,
  },
  comingSoonText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  backButton: {
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  backButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
