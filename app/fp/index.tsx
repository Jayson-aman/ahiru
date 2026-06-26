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

const FP_SUBJECTS = [
  { key: 'life',        name: 'ライフプランニング\nと資金計画', emoji: '👨‍👩‍👧', color: '#0D7C3D', examCount: 20, desc: '社会保険・ローン・教育資金・老後設計' },
  { key: 'risk',        name: 'リスク管理',       emoji: '🛡️', color: '#1565C0', examCount: 15, desc: '生命保険・損害保険・保険商品の特徴' },
  { key: 'asset',       name: '金融資産運用',      emoji: '📈', color: '#6A1B9A', examCount: 20, desc: '株式・債券・投資信託・NISA・金利' },
  { key: 'tax',         name: 'タックスプランニング', emoji: '📊', color: '#E65100', examCount: 15, desc: '所得税・各種控除・確定申告' },
  { key: 'realestate',  name: '不動産',           emoji: '🏘️', color: '#4E342E', examCount: 15, desc: '不動産取引・税金・建築基準法' },
  { key: 'inheritance', name: '相続・事業承継',    emoji: '📜', color: '#880E4F', examCount: 15, desc: '相続税・贈与税・遺産分割' },
];

export default function FPScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#0D7C3D', '#085C2D']} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>💴 FP試験</Text>
        <Text style={styles.headerSub}>ファイナンシャルプランナー 2・3級</Text>
        <View style={styles.examInfoRow}>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>全60問</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>合格点 60%以上</Text></View>
          <View style={styles.examInfoBadge}><Text style={styles.examInfoText}>年3回実施</Text></View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>科目を選んでスタート！</Text>

        {FP_SUBJECTS.map((subject) => (
          <TouchableOpacity
            key={subject.key}
            style={styles.subjectCard}
            onPress={() => router.push(`/fp/${subject.key}` as any)}
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
          <Text style={styles.infoTitle}>📖 FP試験について</Text>
          <Text style={styles.infoText}>・3級：学科60問・実技（記述）</Text>
          <Text style={styles.infoText}>・2級：学科60問・実技（記述）</Text>
          <Text style={styles.infoText}>・合格基準：学科36点以上／60点満点</Text>
          <Text style={styles.infoText}>・年3回実施（1月・5月・9月）</Text>
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
  headerTitle: { fontSize: 24, fontWeight: '900', color: '#FFFFFF', marginBottom: 4 },
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
  subjectEmoji: { fontSize: 26 },
  subjectBody: { flex: 1 },
  subjectName: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 3 },
  subjectDesc: { fontSize: 11, color: '#888', fontWeight: '500', marginBottom: 4 },
  subjectMeta: { fontSize: 12, fontWeight: '700' },
  subjectArrow: { fontSize: 26, color: '#CCC' },
  infoCard: {
    backgroundColor: '#F0FFF4',
    borderRadius: 16,
    padding: 18,
    borderLeftWidth: 4,
    borderLeftColor: '#0D7C3D',
    marginTop: 8,
  },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#0D7C3D', marginBottom: 10 },
  infoText: { fontSize: 13, color: '#555', lineHeight: 24, fontWeight: '500' },
});
