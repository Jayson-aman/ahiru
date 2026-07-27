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
import { kenchikuQuestions } from '../../data/kenchiku/index';
import { kenchikuMogi } from '../../data/kenchiku/mogi';
import { kenchikuTextbook } from '../../data/kenchiku/text';

type Mode = 'kiso' | 'ouyou' | 'text';

// 実テキストデータから科目別のセクション数を集計（ハードコードせずズレを防ぐ）
const TEXT_SECTION_COUNT: Record<string, number> = {};
kenchikuTextbook.forEach((ch) => {
  TEXT_SECTION_COUNT[ch.subject] = (TEXT_SECTION_COUNT[ch.subject] ?? 0) + ch.sections.length;
});

const SUBJECTS = [
  {
    key: 'ippan',
    name: '建築一般知識',
    emoji: '🏗️',
    color: '#1565C0',
    examCount: 20,
    desc: '構造力学・材料・施工・建築計画',
  },
  {
    key: 'hoki',
    name: '建築法規',
    emoji: '📋',
    color: '#2E7D32',
    examCount: 20,
    desc: '建築基準法・消防法・省エネ法・バリアフリー法',
  },
  {
    key: 'kucho',
    name: '空調・換気設備',
    emoji: '❄️',
    color: '#0097A7',
    examCount: 20,
    desc: '熱負荷計算・空調方式・換気設計・省エネ',
  },
  {
    key: 'kyuhaisui',
    name: '給排水衛生設備',
    emoji: '🚿',
    color: '#1976D2',
    examCount: 20,
    desc: '給水・排水・衛生器具・ガス設備',
  },
  {
    key: 'denki',
    name: '電気設備',
    emoji: '⚡',
    color: '#F57F17',
    examCount: 15,
    desc: '受変電・幹線・照明・弱電・自家発電',
  },
  {
    key: 'bousai',
    name: '防災設備',
    emoji: '🚒',
    color: '#C62828',
    examCount: 5,
    desc: 'スプリンクラー・自動火災報知・排煙設備',
  },
];

export default function KenchikuScreen() {
  const router = useRouter();
  const [mode, setMode] = React.useState<Mode>('kiso');

  const countFor = (subjectKey: string): number =>
    kenchikuQuestions.filter(q =>
      q.subject === subjectKey &&
      (mode === 'kiso'
        ? q.difficulty === 'basic' || q.difficulty === 'standard'
        : q.difficulty === 'advanced')
    ).length;

  const totalCollected = kenchikuQuestions.length + kenchikuMogi.length;

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#37474F', '#1C2B33']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🏛️ 建築設備士</Text>
        <Text style={styles.headerSub}>国家資格 ／ 建築設備の最高峰</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>1次学科 105問</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>収録{totalCollected}問</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>年1回（1次は6月）</Text></View>
        </View>

        {/* モード切替 */}
        <View style={styles.modeRow}>
          <TouchableOpacity
            style={[styles.modeBtn, mode === 'kiso' && styles.modeBtnActive]}
            onPress={() => setMode('kiso')}
          >
            <Text style={[styles.modeBtnText, mode === 'kiso' && styles.modeBtnTextActive]}>
              📝 基礎問題
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeBtn, mode === 'ouyou' && styles.modeBtnActive]}
            onPress={() => setMode('ouyou')}
          >
            <Text style={[styles.modeBtnText, mode === 'ouyou' && styles.modeBtnTextActive]}>
              🔥 応用問題
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeBtn, mode === 'text' && styles.modeBtnActive]}
            onPress={() => setMode('text')}
          >
            <Text style={[styles.modeBtnText, mode === 'text' && styles.modeBtnTextActive]}>
              📖 テキスト
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* 試験対策メニュー */}
        <TouchableOpacity
          style={styles.mogiCard}
          onPress={() => router.push('/kenchiku/mogi' as any)}
          activeOpacity={0.85}
        >
          <View style={styles.mogiIcon}><Text style={styles.subjectEmoji}>🎯</Text></View>
          <View style={styles.subjectBody}>
            <Text style={styles.mogiTitle}>模擬試験（本試験形式）</Text>
            <Text style={styles.mogiDesc}>全50問・タイマー付き・全科目横断</Text>
          </View>
          <Text style={[styles.subjectArrow, { color: 'rgba(255,255,255,0.7)' }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.seizuCard}
          onPress={() => router.push('/kenchiku/seizu' as any)}
          activeOpacity={0.85}
        >
          <View style={styles.seizuIcon}><Text style={styles.subjectEmoji}>📐</Text></View>
          <View style={styles.subjectBody}>
            <Text style={styles.mogiTitle}>第二次試験（設計製図）対策ガイド</Text>
            <Text style={styles.mogiDesc}>試験内容・必要な道具・勉強法を解説</Text>
          </View>
          <Text style={[styles.subjectArrow, { color: 'rgba(255,255,255,0.7)' }]}>›</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>
          {mode === 'text' ? '科目を選んでテキストを読む' : mode === 'kiso' ? '科目を選んで基礎問題スタート' : '科目を選んで応用問題スタート'}
        </Text>

        {SUBJECTS.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.subjectCard}
            onPress={() =>
              router.push(
                mode === 'text'
                  ? (`/kenchiku/text/${subject.key}` as any)
                  : (`/kenchiku/quiz/${subject.key}?level=${mode}` as any)
              )
            }
            activeOpacity={0.85}
          >
            <View style={[styles.subjectIcon, { backgroundColor: subject.color }]}>
              <Text style={styles.subjectEmoji}>{subject.emoji}</Text>
            </View>
            <View style={styles.subjectBody}>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <Text style={styles.subjectDesc}>{subject.desc}</Text>
              {mode === 'text' ? (
                <Text style={[styles.subjectMeta, { color: subject.color }]}>
                  {TEXT_SECTION_COUNT[subject.key] ?? 0}セクション収録
                </Text>
              ) : (
                <Text style={[styles.subjectMeta, { color: subject.color }]}>
                  収録{countFor(subject.key)}問 ／ {mode === 'kiso' ? '基礎〜標準レベル' : '本試験応用レベル'}
                </Text>
              )}
            </View>
            <Text style={styles.subjectArrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 建築設備士試験について</Text>
          <Text style={styles.infoText}>・1次試験（学科）：建築一般知識・建築法規・建築設備 計105問</Text>
          <Text style={styles.infoText}>・2次試験（設計製図）：空調・給排水・電気いずれか1科目</Text>
          <Text style={styles.infoText}>・試験日：1次8月中旬、2次11月</Text>
          <Text style={styles.infoText}>・合格率：1次約30%、2次約60%</Text>
          <Text style={styles.infoText}>・受験資格：実務経験2年以上（学歴による）</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 20 },
  backBtn: { marginBottom: 8 },
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF', marginBottom: 4 },
  headerSub: { fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: '600', marginBottom: 12 },
  examInfoRow: { flexDirection: 'row', gap: 6, flexWrap: 'wrap', marginBottom: 14 },
  examInfoBadge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  examInfoText: { fontSize: 11, color: '#FFFFFF', fontWeight: '700' },
  modeRow: { flexDirection: 'row', gap: 8 },
  modeBtn: { flex: 1, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 12, paddingVertical: 10, alignItems: 'center' },
  modeBtnActive: { backgroundColor: '#FFFFFF' },
  modeBtnText: { fontSize: 13, fontWeight: '700', color: 'rgba(255,255,255,0.8)' },
  modeBtnTextActive: { color: '#37474F' },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 40 },
  sectionTitle: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 16 },
  subjectCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF',
    borderRadius: 16, padding: 16, marginBottom: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3, gap: 14,
  },
  subjectIcon: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  subjectEmoji: { fontSize: 26 },
  mogiCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#1C2B33',
    borderRadius: 16, padding: 16, marginBottom: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15, shadowRadius: 8, elevation: 3, gap: 14,
  },
  mogiIcon: {
    width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  seizuCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#455A64',
    borderRadius: 16, padding: 16, marginBottom: 20,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15, shadowRadius: 8, elevation: 3, gap: 14,
  },
  seizuIcon: {
    width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  mogiTitle: { fontSize: 15, fontWeight: '800', color: '#FFFFFF', marginBottom: 3 },
  mogiDesc: { fontSize: 11, color: 'rgba(255,255,255,0.75)', fontWeight: '500' },
  subjectBody: { flex: 1 },
  subjectName: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 3 },
  subjectDesc: { fontSize: 11, color: '#888', fontWeight: '500', marginBottom: 4 },
  subjectMeta: { fontSize: 12, fontWeight: '700' },
  subjectArrow: { fontSize: 26, color: '#CCC' },
  infoCard: {
    backgroundColor: '#ECEFF1', borderRadius: 16, padding: 18,
    borderLeftWidth: 4, borderLeftColor: '#37474F', marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#37474F', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
