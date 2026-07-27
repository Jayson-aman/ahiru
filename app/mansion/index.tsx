import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { mansionTextbook } from '../../data/mansion_text';

// 実テキストデータから総セクション数を集計（ハードコードせずズレを防ぐ）
const TEXT_SECTION_TOTAL = mansionTextbook.reduce((n, ch) => n + ch.sections.length, 0);

const MANSION_SUBJECTS = [
  { key: 'kubunsho',  name: '区分所有法',            emoji: '⚖️', color: '#7B1FA2', examCount: 25, desc: '専有部分・共用部分・管理組合・集会決議' },
  { key: 'tekiseika', name: 'マンション管理適正化法', emoji: '📋', color: '#1565C0', examCount: 20, desc: '管理業者・管理業務主任者・登録制度' },
  { key: 'kiyaku',    name: '標準管理規約',           emoji: '📖', color: '#2E7D32', examCount: 20, desc: '管理組合の規約・専用使用権・修繕積立金' },
  { key: 'minpo',     name: '民法・その他法令',       emoji: '🏛️', color: '#E65100', examCount: 15, desc: '民法・建築基準法・消防法・都市計画法' },
  { key: 'setsubi',   name: '建物・設備',             emoji: '🔧', color: '#4E342E', examCount: 10, desc: '建物構造・給排水・電気・エレベーター' },
  { key: 'unei',      name: '管理組合の運営',         emoji: '🏢', color: '#880E4F', examCount: 10, desc: '総会・理事会・会計・長期修繕計画' },
];

export default function MansionScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#7B1FA2', '#4A0072']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🏢 マンション管理士</Text>
        <Text style={styles.headerSub}>国家資格 ／ 管理組合のプロフェッショナル</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>全50問</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>合格点 概ね37〜38点</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>年1回（11月）</Text></View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.honshikenCard}
          onPress={() => router.push('/mansion/honshiken')}
          activeOpacity={0.85}
        >
          <View style={styles.honshikenIcon}>
            <Text style={styles.subjectEmoji}>📝</Text>
          </View>
          <View style={styles.subjectBody}>
            <Text style={styles.honshikenTitle}>本試験形式問題</Text>
            <Text style={styles.honshikenDesc}>令和6・7年度形式の再現模試／全50問・120分</Text>
          </View>
          <Text style={[styles.subjectArrow, { color: 'rgba(255,255,255,0.7)' }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.textCard}
          onPress={() => router.push('/mansion/text' as any)}
          activeOpacity={0.85}
        >
          <View style={[styles.subjectIcon, { backgroundColor: '#4A0072' }]}>
            <Text style={styles.subjectEmoji}>📖</Text>
          </View>
          <View style={styles.subjectBody}>
            <Text style={styles.subjectName}>テキスト（要点整理）</Text>
            <Text style={styles.subjectDesc}>決議要件・数値基準を図解と比較表で整理</Text>
            <Text style={[styles.subjectMeta, { color: '#7B1FA2' }]}>全{TEXT_SECTION_TOTAL}セクション収録</Text>
          </View>
          <Text style={styles.subjectArrow}>›</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>科目を選んでスタート！</Text>

        {MANSION_SUBJECTS.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.subjectCard}
            onPress={() => router.push(`/mansion/${subject.key}` as any)}
            activeOpacity={0.85}
          >
            <View style={[styles.subjectIcon, { backgroundColor: subject.color }]}>
              <Text style={styles.subjectEmoji}>{subject.emoji}</Text>
            </View>
            <View style={styles.subjectBody}>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <Text style={styles.subjectDesc}>{subject.desc}</Text>
              <Text style={[styles.subjectMeta, { color: subject.color }]}>
                本試験 約{subject.examCount}問出題
              </Text>
            </View>
            <Text style={styles.subjectArrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 マンション管理士試験について</Text>
          <Text style={styles.infoText}>・試験形式：4肢択一式50問</Text>
          <Text style={styles.infoText}>・試験日：毎年11月最終日曜日</Text>
          <Text style={styles.infoText}>・合格率：約8〜9%（難関国家資格）</Text>
          <Text style={styles.infoText}>・管理業務主任者試験との併願が一般的</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 24 },
  backBtn: { marginBottom: 8 },
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF', marginBottom: 4 },
  headerSub: { fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: '600', marginBottom: 12 },
  examInfoRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  examInfoBadge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  examInfoText: { fontSize: 11, color: '#FFFFFF', fontWeight: '700' },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 40 },
  sectionTitle: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 16 },
  subjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    gap: 14,
  },
  subjectIcon: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  textCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#7B1FA2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    gap: 14,
  },
  honshikenCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A0072',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
    gap: 14,
  },
  honshikenIcon: {
    width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  honshikenTitle: { fontSize: 15, fontWeight: '800', color: '#FFFFFF', marginBottom: 3 },
  honshikenDesc: { fontSize: 11, color: 'rgba(255,255,255,0.75)', fontWeight: '500' },
  subjectEmoji: { fontSize: 26 },
  subjectBody: { flex: 1 },
  subjectName: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 3 },
  subjectDesc: { fontSize: 11, color: '#888', fontWeight: '500', marginBottom: 4 },
  subjectMeta: { fontSize: 12, fontWeight: '700' },
  subjectArrow: { fontSize: 26, color: '#CCC' },
  infoCard: {
    backgroundColor: '#F3E5F5',
    borderRadius: 16,
    padding: 18,
    borderLeftWidth: 4,
    borderLeftColor: '#7B1FA2',
    marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#7B1FA2', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
