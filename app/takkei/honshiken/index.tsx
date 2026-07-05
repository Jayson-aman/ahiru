import React from 'react';
import {
  View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

const YEARS = [
  { key: 'r05', label: '令和5年（2023年）', badge: '50問', available: true },
  { key: 'r04', label: '令和4年（2022年）', badge: '50問', available: true },
  { key: 'r03', label: '令和3年（2021年）', badge: '50問', available: true },
  { key: 'r02', label: '令和2年（2020年）', badge: '50問', available: true },
  { key: 'r01', label: '令和元年（2019年）', badge: '50問', available: false },
];

export default function HonshikenIndexScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>📝 本試験問題</Text>
        <Text style={styles.headerSub}>年度別・全50問・本番形式で挑戦</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionNote}>
          実際の宅建試験と同じ出題形式で収録。解説は各選択肢ごとに詳しく掲載しています。
        </Text>
        {YEARS.map(y => (
          <TouchableOpacity
            key={y.key}
            style={[styles.card, !y.available && styles.cardDisabled]}
            onPress={() => y.available && router.push(`/takkei/honshiken/${y.key}`)}
            activeOpacity={y.available ? 0.8 : 1}
          >
            <View style={styles.cardLeft}>
              <Text style={[styles.cardLabel, !y.available && styles.cardLabelDisabled]}>
                {y.label}
              </Text>
              <Text style={[styles.cardBadge, !y.available && styles.cardBadgeDisabled]}>
                {y.available ? `全${y.badge}収録` : '準備中'}
              </Text>
            </View>
            {y.available && <Text style={styles.cardArrow}>›</Text>}
          </TouchableOpacity>
        ))}

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>💡 本試験問題の使い方</Text>
          <Text style={styles.infoText}>・本番同様に120分タイマーで取り組む</Text>
          <Text style={styles.infoText}>・提出後に選択肢ごとの詳細解説を確認</Text>
          <Text style={styles.infoText}>・36点以上が合格ライン（年度により変動）</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { backgroundColor: '#6B3210', paddingHorizontal: 20, paddingVertical: 16 },
  backBtn: { marginBottom: 8 },
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#FFF', marginBottom: 4 },
  headerSub: { fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: '600' },
  content: { padding: 16, paddingBottom: 40 },
  sectionNote: { fontSize: 13, color: '#555', lineHeight: 22, marginBottom: 20, fontWeight: '500' },
  card: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF',
    borderRadius: 16, padding: 18, marginBottom: 10,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 6, elevation: 3,
  },
  cardDisabled: { backgroundColor: '#F5F5F5', shadowOpacity: 0 },
  cardLeft: { flex: 1 },
  cardLabel: { fontSize: 16, fontWeight: '800', color: '#1A1A2E', marginBottom: 4 },
  cardLabelDisabled: { color: '#AAA' },
  cardBadge: { fontSize: 12, fontWeight: '700', color: '#6B3210' },
  cardBadgeDisabled: { color: '#BBB' },
  cardArrow: { fontSize: 26, color: '#CCC' },
  infoBox: {
    backgroundColor: '#FFF8F0', borderRadius: 16, padding: 16,
    borderLeftWidth: 4, borderLeftColor: '#6B3210', marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#6B3210', marginBottom: 8 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
