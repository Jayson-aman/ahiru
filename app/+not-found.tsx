import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

/**
 * ルート解決に失敗したときのフォールバック。
 * これが無いとリンク切れがそのまま真っ白な画面になり、
 * ユーザーはアプリが壊れたと判断して離脱してしまう。
 */
export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.body}>
        <Text style={styles.emoji}>🧭</Text>
        <Text style={styles.title}>ページが見つかりません</Text>
        <Text style={styles.text}>
          お探しの画面は移動または削除された可能性があります。
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
          <Text style={styles.buttonText}>ホームに戻る</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 },
  emoji: { fontSize: 56, marginBottom: 16 },
  title: { fontSize: 20, fontWeight: '700', color: '#1B2A5C', marginBottom: 8 },
  text: { fontSize: 14, color: '#5A6785', textAlign: 'center', lineHeight: 22, marginBottom: 28 },
  button: { backgroundColor: '#1B2A5C', paddingHorizontal: 28, paddingVertical: 14, borderRadius: 10 },
  buttonText: { color: '#FFF', fontSize: 15, fontWeight: '700' },
});
