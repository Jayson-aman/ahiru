import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#1B2A5C', '#0D3D8A']} style={styles.header}>
        <Text style={styles.appTitle}>ZAIBASE 資格・受験</Text>
        <Text style={styles.appSubtitle}>一問一答トレーニング</Text>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* 受験対策 */}
        <Text style={styles.sectionLabel}>📚 受験対策</Text>
        <TouchableOpacity style={styles.card} onPress={() => router.push('/juken')} activeOpacity={0.85}>
          <LinearGradient colors={['#1E5FBE', '#0D3D8A']} style={styles.cardGradient}>
            <Text style={styles.cardEmoji}>📚</Text>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>受験対策</Text>
              <Text style={styles.cardSubtitle}>中学受験・高校受験</Text>
              <Text style={styles.cardMeta}>算数・国語・理科・社会・英語 ／ 250問以上</Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* 資格試験：不動産系 */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>🏠 不動産・法律系</Text>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/takkei')} activeOpacity={0.85}>
          <LinearGradient colors={['#6B3210', '#4A2208']} style={styles.cardGradient}>
            <Text style={styles.cardEmoji}>🏠</Text>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>宅建試験</Text>
              <Text style={styles.cardSubtitle}>権利関係・宅建業法・法令制限・税</Text>
              <Text style={styles.cardMeta}>国家資格 ／ 本試験50問対応</Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/mansion')} activeOpacity={0.85}>
          <LinearGradient colors={['#7B1FA2', '#4A0072']} style={styles.cardGradient}>
            <Text style={styles.cardEmoji}>🏢</Text>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>マンション管理士</Text>
              <Text style={styles.cardSubtitle}>管理組合・区分所有法・設備管理</Text>
              <Text style={styles.cardMeta}>国家資格 ／ 1000問収録予定</Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* 資格試験：金融・税務系 */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>💴 金融・税務系</Text>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/fp')} activeOpacity={0.85}>
          <LinearGradient colors={['#0D7C3D', '#085C2D']} style={styles.cardGradient}>
            <Text style={styles.cardEmoji}>💴</Text>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>FP試験</Text>
              <Text style={styles.cardSubtitle}>ファイナンシャルプランナー 2・3級</Text>
              <Text style={styles.cardMeta}>国家資格 ／ 1000問収録予定</Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* 資格試験：建築・設備系 */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>🏛️ 建築・設備系</Text>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/kenchiku')} activeOpacity={0.85}>
          <LinearGradient colors={['#37474F', '#1C2B33']} style={styles.cardGradient}>
            <Text style={styles.cardEmoji}>🏛️</Text>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>建築設備士</Text>
              <Text style={styles.cardSubtitle}>空調・給排水・電気・法規・構造</Text>
              <Text style={styles.cardMeta}>国家資格 ／ 1200問＋テキスト収録予定</Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* 資格試験：電気・理工系 */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>⚡ 電気・理工系</Text>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/denken3')} activeOpacity={0.85}>
          <LinearGradient colors={['#E65100', '#BF360C']} style={styles.cardGradient}>
            <Text style={styles.cardEmoji}>⚡</Text>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>電験三種</Text>
              <Text style={styles.cardSubtitle}>理論・電力・機械・法規</Text>
              <Text style={styles.cardMeta}>国家資格 ／ 1000問収録予定</Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/kisho')} activeOpacity={0.85}>
          <LinearGradient colors={['#1565C0', '#0D47A1']} style={styles.cardGradient}>
            <Text style={styles.cardEmoji}>🌤️</Text>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>気象予報士</Text>
              <Text style={styles.cardSubtitle}>一般知識・専門知識・実技</Text>
              <Text style={styles.cardMeta}>国家資格 ／ 1000問収録予定</Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </LinearGradient>
        </TouchableOpacity>

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
  header: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 32, alignItems: 'center' },
  appTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF', letterSpacing: 1, marginBottom: 4 },
  appSubtitle: { fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: '600' },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 40 },
  sectionLabel: { fontSize: 14, fontWeight: '800', color: '#1B2A5C', marginBottom: 12, letterSpacing: 0.5 },
  card: { borderRadius: 18, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 10, elevation: 5 },
  cardGradient: { borderRadius: 18, padding: 18, flexDirection: 'row', alignItems: 'center', gap: 14 },
  cardEmoji: { fontSize: 36 },
  cardBody: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: '900', color: '#FFFFFF', marginBottom: 3 },
  cardSubtitle: { fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: '600', marginBottom: 2 },
  cardMeta: { fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: '500' },
  cardArrow: { fontSize: 28, color: 'rgba(255,255,255,0.4)' },
  footerNote: { backgroundColor: '#EEF4FF', borderRadius: 12, padding: 14, marginTop: 12 },
  footerNoteText: { fontSize: 12, color: '#1E5FBE', fontWeight: '600', lineHeight: 18, textAlign: 'center' },
});
