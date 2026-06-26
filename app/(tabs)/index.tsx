import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const CATEGORIES = [
  {
    key: 'juken',
    title: '中学受験',
    subtitle: '算数・国語・理科・社会・英語',
    meta: '250問以上 ／ 難易度3段階',
    emoji: '📚',
    colors: ['#1E5FBE', '#0D3D8A'] as [string, string],
    route: '/juken',
    badge: '灘・開成・甲陽',
  },
  {
    key: 'kouko',
    title: '高校受験',
    subtitle: '5教科・公立〜難関校対策',
    meta: '準備中 ／ 近日公開',
    emoji: '🎓',
    colors: ['#5B4B8A', '#3A2E6A'] as [string, string],
    route: '/kouko',
    badge: '公立・私立対応',
  },
  {
    key: 'takkei',
    title: '宅建試験',
    subtitle: '権利関係・宅建業法・法令制限・税',
    meta: '国家資格 ／ 本試験50問対応',
    emoji: '🏠',
    colors: ['#6B3210', '#4A2208'] as [string, string],
    route: '/takkei',
    badge: '合格率15〜17%',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#1B2A5C', '#0D3D8A']} style={styles.header}>
        <Text style={styles.appTitle}>ZAIBASE 資格・受験</Text>
        <Text style={styles.appSubtitle}>一問一答トレーニング</Text>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionLabel}>カテゴリーを選んでください</Text>

        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.key}
            style={styles.card}
            onPress={() => router.push(cat.route as any)}
            activeOpacity={0.85}
          >
            <LinearGradient colors={cat.colors} style={styles.cardGradient}>
              <Text style={styles.cardEmoji}>{cat.emoji}</Text>
              <View style={styles.cardBody}>
                <View style={styles.cardTitleRow}>
                  <Text style={styles.cardTitle}>{cat.title}</Text>
                  <View style={styles.cardBadge}>
                    <Text style={styles.cardBadgeText}>{cat.badge}</Text>
                  </View>
                </View>
                <Text style={styles.cardSubtitle}>{cat.subtitle}</Text>
                <Text style={styles.cardMeta}>{cat.meta}</Text>
              </View>
              <Text style={styles.cardArrow}>›</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}

        <View style={styles.footerNote}>
          <Text style={styles.footerNoteText}>
            🎧 聞き流しモードは各科目ページの 🎧 ボタンから利用できます（Pro機能）
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
    marginBottom: 4,
  },
  appSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    fontWeight: '600',
  },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 20, paddingTop: 28, paddingBottom: 40 },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
  },
  card: {
    borderRadius: 20,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 6,
  },
  cardGradient: {
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  cardEmoji: { fontSize: 38 },
  cardBody: { flex: 1 },
  cardTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 },
  cardTitle: { fontSize: 20, fontWeight: '900', color: '#FFFFFF' },
  cardBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  cardBadgeText: { fontSize: 10, color: '#FFFFFF', fontWeight: '700' },
  cardSubtitle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '600',
    marginBottom: 3,
  },
  cardMeta: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '500',
  },
  cardArrow: {
    fontSize: 32,
    color: 'rgba(255,255,255,0.4)',
    fontWeight: '300',
  },
  footerNote: {
    backgroundColor: '#EEF4FF',
    borderRadius: 12,
    padding: 14,
    marginTop: 8,
  },
  footerNoteText: {
    fontSize: 12,
    color: '#1E5FBE',
    fontWeight: '600',
    lineHeight: 18,
    textAlign: 'center',
  },
});
