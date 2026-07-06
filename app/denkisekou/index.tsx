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

const SUBJECTS = [
  { key: 'riron', name: '電気工学', emoji: '⚡', color: '#EF6C00', desc: '力率改善・電動機・変圧器・照明・蓄電池', count: 6 },
  { key: 'setsubi', name: '電気設備', emoji: '🏭', color: '#1565C0', desc: '受変電・幹線・接地・配線工事・非常電源', count: 6 },
  { key: 'sekou', name: '施工管理法', emoji: '🔧', color: '#2E7D32', desc: '絶縁抵抗・竣工検査・停電作業・工程管理', count: 6 },
  { key: 'hoki', name: '法規', emoji: '⚖️', color: '#6A1B9A', desc: '電気工事士法・電気事業法・建設業法・労安法', count: 6 },
];

export default function DenkisekouScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#EF6C00', '#B34700']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>💡 一級電気工事施工管理技士</Text>
        <Text style={styles.headerSub}>国家資格 ／ 電気設備工事のスペシャリスト</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>一次検定 四肢択一</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>合格基準 60%程度</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>年2回（一次）</Text></View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.textCard}
          onPress={() => router.push('/denkisekou/text' as any)}
          activeOpacity={0.85}
        >
          <View style={[styles.subjectIcon, { backgroundColor: '#B34700' }]}>
            <Text style={styles.subjectEmoji}>📖</Text>
          </View>
          <View style={styles.subjectBody}>
            <Text style={styles.subjectName}>テキスト（要点整理）</Text>
            <Text style={styles.subjectDesc}>4科目の要点整理・図解と頻出数値つき</Text>
            <Text style={[styles.subjectMeta, { color: '#EF6C00' }]}>全8章収録</Text>
          </View>
          <Text style={styles.subjectArrow}>›</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>科目を選んでスタート！</Text>

        {SUBJECTS.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.subjectCard}
            onPress={() => router.push(`/denkisekou/${subject.key}` as any)}
            activeOpacity={0.85}
          >
            <View style={[styles.subjectIcon, { backgroundColor: subject.color }]}>
              <Text style={styles.subjectEmoji}>{subject.emoji}</Text>
            </View>
            <View style={styles.subjectBody}>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <Text style={styles.subjectDesc}>{subject.desc}</Text>
              <Text style={[styles.subjectMeta, { color: subject.color }]}>
                {subject.count}問収録・全問図解つき解説
              </Text>
            </View>
            <Text style={styles.subjectArrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 一級電気工事施工管理技士試験について</Text>
          <Text style={styles.infoText}>・一次検定：四肢択一（学科）／二次検定：施工経験記述等</Text>
          <Text style={styles.infoText}>・電気＝指定建設業：監理技術者は1級資格者</Text>
          <Text style={styles.infoText}>・受変電から幹線・動力・照明まで電気設備工事を統括</Text>
          <Text style={styles.infoText}>・電気工事士とセットで取得価値が高い資格</Text>
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
  headerTitle: { fontSize: 20, fontWeight: '900', color: '#FFFFFF', marginBottom: 4 },
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
  textCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#EF6C00',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    gap: 14,
  },
  subjectIcon: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  subjectEmoji: { fontSize: 26 },
  subjectBody: { flex: 1 },
  subjectName: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 3 },
  subjectDesc: { fontSize: 11, color: '#888', fontWeight: '500', marginBottom: 4 },
  subjectMeta: { fontSize: 12, fontWeight: '700' },
  subjectArrow: { fontSize: 26, color: '#CCC' },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderLeftWidth: 4,
    borderLeftColor: '#EF6C00',
    marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#EF6C00', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
