import React from 'react';
import {
  View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { sekokanQuestions, sekokanMogi } from '../../data/sekokan';

type Mode = 'kiso' | 'ouyou' | 'text';

const SUBJECTS = [
  {
    key: 'kenchikugaku',
    name: '建築学等',
    emoji: '📐',
    color: '#1565C0',
    desc: '環境工学・構造力学・建築材料・共通（設備・契約）',
    textSections: 4,
  },
  {
    key: 'sekou',
    name: '躯体・仕上施工',
    emoji: '🏗️',
    color: '#E65100',
    desc: '土工事・鉄筋・型枠・コンクリート・鉄骨・防水・内装',
    textSections: 4,
  },
  {
    key: 'kanri',
    name: '施工管理法',
    emoji: '📋',
    color: '#2E7D32',
    desc: '施工計画・工程管理・品質管理・安全管理',
    textSections: 4,
  },
  {
    key: 'hoki',
    name: '法規',
    emoji: '⚖️',
    color: '#7B1FA2',
    desc: '建設業法・建築基準法・労働安全衛生法・環境関連法',
    textSections: 4,
  },
];

export default function SekokanScreen() {
  const router = useRouter();
  const [mode, setMode] = React.useState<Mode>('kiso');

  const countFor = (subject: string): number =>
    sekokanQuestions.filter(q =>
      q.subject === subject &&
      (mode === 'kiso'
        ? q.difficulty === 'basic' || q.difficulty === 'standard'
        : q.difficulty === 'advanced')
    ).length;

  const totalCount = sekokanQuestions.length + sekokanMogi.length;

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#BF360C', '#7F2408']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🏗️ 一級建築施工管理技士</Text>
        <Text style={styles.headerSub}>国家資格 ／ 建築工事の施工管理のスペシャリスト</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>一次検定 72問中60問解答</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>収録{totalCount}問</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>年2回（前期・後期）</Text></View>
        </View>

        <View style={styles.modeRow}>
          <TouchableOpacity
            style={[styles.modeBtn, mode === 'kiso' && styles.modeBtnActive]}
            onPress={() => setMode('kiso')}
          >
            <Text style={[styles.modeBtnText, mode === 'kiso' && styles.modeBtnTextActive]}>📝 基礎問題</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeBtn, mode === 'ouyou' && styles.modeBtnActive]}
            onPress={() => setMode('ouyou')}
          >
            <Text style={[styles.modeBtnText, mode === 'ouyou' && styles.modeBtnTextActive]}>🔥 応用問題</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeBtn, mode === 'text' && styles.modeBtnActive]}
            onPress={() => setMode('text')}
          >
            <Text style={[styles.modeBtnText, mode === 'text' && styles.modeBtnTextActive]}>📖 テキスト</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.mogiCard}
          onPress={() => router.push('/sekokan/mogi' as any)}
          activeOpacity={0.85}
        >
          <View style={styles.mogiIcon}><Text style={styles.subjectEmoji}>🎯</Text></View>
          <View style={styles.subjectBody}>
            <Text style={styles.mogiTitle}>模擬試験（本試験形式）</Text>
            <Text style={styles.mogiDesc}>全{sekokanMogi.length}問・タイマー付き・図解入り詳細解説</Text>
          </View>
          <Text style={[styles.subjectArrow, { color: 'rgba(255,255,255,0.7)' }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nijiCard}
          onPress={() => router.push('/sekokan/niji' as any)}
          activeOpacity={0.85}
        >
          <View style={styles.mogiIcon}><Text style={styles.subjectEmoji}>✍️</Text></View>
          <View style={styles.subjectBody}>
            <Text style={styles.mogiTitle}>第二次検定 対策ガイド</Text>
            <Text style={styles.mogiDesc}>経験記述に何が必要か・出題構成・勉強法を解説</Text>
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
                  ? (`/sekokan/text/${subject.key}` as any)
                  : (`/sekokan/quiz/${subject.key}?level=${mode}` as any)
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
                  {subject.textSections}セクション収録
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
          <Text style={styles.infoTitle}>📖 一級建築施工管理技士について</Text>
          <Text style={styles.infoText}>・一次検定：四肢一択等 72問中60問解答（マークシート）</Text>
          <Text style={styles.infoText}>・二次検定：経験記述＋記述式問題</Text>
          <Text style={styles.infoText}>・一次合格で「一級建築施工管理技士補」の資格が得られる</Text>
          <Text style={styles.infoText}>・監理技術者（建築一式等）になれる国家資格</Text>
          <Text style={styles.infoText}>・合格基準：一次は総得点の60%程度（施工管理法の足切りあり）</Text>
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
  modeBtnTextActive: { color: '#BF360C' },
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
  subjectBody: { flex: 1 },
  subjectName: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 3 },
  subjectDesc: { fontSize: 11, color: '#888', fontWeight: '500', marginBottom: 4 },
  subjectMeta: { fontSize: 12, fontWeight: '700' },
  subjectArrow: { fontSize: 26, color: '#CCC' },
  mogiCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#7F2408',
    borderRadius: 16, padding: 16, marginBottom: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15, shadowRadius: 8, elevation: 3, gap: 14,
  },
  nijiCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#A0522D',
    borderRadius: 16, padding: 16, marginBottom: 20,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15, shadowRadius: 8, elevation: 3, gap: 14,
  },
  mogiIcon: {
    width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  mogiTitle: { fontSize: 15, fontWeight: '800', color: '#FFFFFF', marginBottom: 3 },
  mogiDesc: { fontSize: 11, color: 'rgba(255,255,255,0.75)', fontWeight: '500' },
  infoCard: {
    backgroundColor: '#FBE9E7', borderRadius: 16, padding: 18,
    borderLeftWidth: 4, borderLeftColor: '#BF360C', marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#BF360C', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
