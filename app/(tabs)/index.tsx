import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#1B2A5C', '#0D3D8A']} style={styles.header}>
        <Image source={require('../../assets/icon.png')} style={styles.appLogo} />
        <View>
          <Text style={styles.appTitle}>QualiZ</Text>
          <Text style={styles.appSubtitle}>国家資格・検定の合格ナビ</Text>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* 語学 */}
        <Text style={styles.sectionLabel}>🇬🇧 語学・英語</Text>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/eiken')} activeOpacity={0.85}>
          <LinearGradient colors={['#7B1FA2', '#4A0072']} style={styles.cardGradient}>
            <Text style={styles.cardEmoji}>🇬🇧</Text>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>英検対策</Text>
              <Text style={styles.cardSubtitle}>2級・3級・4級 ネイティブ品質問題</Text>
              <Text style={styles.cardMeta}>語彙・文法・読解・対話・リスニング ／ 各160問収録</Text>
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
              <Text style={styles.cardMeta}>国家資格 ／ 本試験形式模試5回分収録</Text>
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
              <Text style={styles.cardMeta}>国家資格 ／ 分野別問題・本試験形式模試（2年分）収録</Text>
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
              <Text style={styles.cardMeta}>国家資格 ／ 6分野・詳細解説付き</Text>
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
              <Text style={styles.cardMeta}>国家資格 ／ テキスト・基礎/応用・模擬試験・製図ガイド</Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* 施工管理系 */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>🏗️ 施工管理系</Text>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/sekokan')} activeOpacity={0.85}>
          <LinearGradient colors={['#BF360C', '#7F2408']} style={styles.cardGradient}>
            <Text style={styles.cardEmoji}>🏗️</Text>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>一級建築施工管理技士</Text>
              <Text style={styles.cardSubtitle}>建築学・施工・施工管理法・法規</Text>
              <Text style={styles.cardMeta}>国家資格 ／ テキスト・基礎/応用・模擬試験・二次対策</Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/kankoji' as any)} activeOpacity={0.85}>
          <LinearGradient colors={['#00695C', '#004D40']} style={styles.cardGradient}>
            <Text style={styles.cardEmoji}>🚿</Text>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>一級管工事施工管理技士</Text>
              <Text style={styles.cardSubtitle}>原論・空調・給排水衛生・施工管理・法規</Text>
              <Text style={styles.cardMeta}>国家資格 ／ テキスト・科目別問題・全問図解つき解説</Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/denkisekou' as any)} activeOpacity={0.85}>
          <LinearGradient colors={['#EF6C00', '#B34700']} style={styles.cardGradient}>
            <Text style={styles.cardEmoji}>💡</Text>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>一級電気工事施工管理技士</Text>
              <Text style={styles.cardSubtitle}>電気工学・電気設備・施工管理・法規</Text>
              <Text style={styles.cardMeta}>国家資格 ／ テキスト・科目別問題・全問図解つき解説</Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/kikaisekou' as any)} activeOpacity={0.85}>
          <LinearGradient colors={['#546E7A', '#263238']} style={styles.cardGradient}>
            <Text style={styles.cardEmoji}>🚜</Text>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>一級建設機械施工管理技士</Text>
              <Text style={styles.cardSubtitle}>土木工学・建設機械・施工管理・法規</Text>
              <Text style={styles.cardMeta}>国家資格 ／ テキスト・科目別問題・全問図解つき解説</Text>
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
              <Text style={styles.cardMeta}>国家資格 ／ 4科目・詳細解説付き</Text>
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
              <Text style={styles.cardMeta}>国家資格 ／ テキスト＋問題・詳細解説付き</Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.footerNote}>
          <Text style={styles.footerNoteText}>
            🎧 聞き流しモードは各科目ページの 🎧 ボタンから利用できます（Pro機能）
          </Text>
        </View>

        <View style={styles.disclaimerBox}>
          <Text style={styles.disclaimerText}>
            収録している「本試験形式問題」は、各試験の出題傾向・難易度を分析して作成したオリジナルの再現問題です。
            実際の試験問題の転載ではありません。受験の際は各試験実施団体の最新の試験案内をご確認ください。
          </Text>
        </View>

        <View style={styles.legalLinks}>
          <TouchableOpacity onPress={() => router.push('/legal/terms' as any)}>
            <Text style={styles.legalLinkText}>利用規約</Text>
          </TouchableOpacity>
          <Text style={styles.legalLinkSep}>｜</Text>
          <TouchableOpacity onPress={() => router.push('/legal/privacy' as any)}>
            <Text style={styles.legalLinkText}>プライバシーポリシー</Text>
          </TouchableOpacity>
          <Text style={styles.legalLinkSep}>｜</Text>
          <TouchableOpacity onPress={() => router.push('/legal/tokushoho' as any)}>
            <Text style={styles.legalLinkText}>特定商取引法に基づく表記</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    paddingHorizontal: 24, paddingTop: 20, paddingBottom: 26,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 16,
  },
  appLogo: { width: 64, height: 64, borderRadius: 15 },
  appTitle: { fontSize: 24, fontWeight: '900', color: '#FFFFFF', letterSpacing: 1.5, marginBottom: 3 },
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
  disclaimerBox: { backgroundColor: '#F0F0F0', borderRadius: 12, padding: 14, marginTop: 12 },
  disclaimerText: { fontSize: 10, color: '#888', fontWeight: '500', lineHeight: 16, textAlign: 'center' },
  legalLinks: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    flexWrap: 'wrap', marginTop: 16,
  },
  legalLinkText: { fontSize: 11, color: '#1E5FBE', fontWeight: '600', paddingVertical: 4 },
  legalLinkSep: { fontSize: 11, color: '#CCC' },
});
