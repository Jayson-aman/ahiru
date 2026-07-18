import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getFpText } from '../../../data/fp_text';
import StudyText from '../../../components/StudyText';

const INFO: Record<string, { name: string; emoji: string; color: string }> = {
  life: { name: 'ライフプランニングと資金計画', emoji: '👨‍👩‍👧', color: '#0D7C3D' },
  risk: { name: 'リスク管理', emoji: '🛡️', color: '#1565C0' },
  asset: { name: '金融資産運用', emoji: '📈', color: '#6A1B9A' },
  tax: { name: 'タックスプランニング', emoji: '📊', color: '#E65100' },
  realestate: { name: '不動産', emoji: '🏘️', color: '#4E342E' },
  inheritance: { name: '相続・事業承継', emoji: '📜', color: '#880E4F' },
};

export default function FpTextScreen() {
  const { subject } = useLocalSearchParams<{ subject: string }>();
  const router = useRouter();
  const info = INFO[subject ?? ''] ?? { name: subject, emoji: '📖', color: '#085C2D' };
  const sections = getFpText(subject ?? '');
  const [openId, setOpenId] = React.useState<string | null>(sections[0]?.id ?? null);

  if (sections.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.header, { backgroundColor: info.color }]}>
          <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
          <Text style={styles.title}>{info.emoji} {info.name}</Text>
        </View>
        <View style={styles.emptyBody}>
          <Text style={styles.emptyEmoji}>🚧</Text>
          <Text style={styles.emptyH}>テキスト作成中</Text>
          <TouchableOpacity style={[styles.btn, { backgroundColor: info.color }]} onPress={() => router.back()}>
            <Text style={styles.btnT}>← 分野一覧に戻る</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.header, { backgroundColor: info.color }]}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>{info.emoji} {info.name} テキスト</Text>
        <Text style={styles.subTitle}>本試験レベル ／ {sections.length}セクション収録</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {sections.map((s, i) => {
          const open = openId === s.id;
          return (
            <View key={s.id} style={styles.sectionCard}>
              <TouchableOpacity
                style={styles.sectionHeader}
                onPress={() => setOpenId(open ? null : s.id)}
                activeOpacity={0.8}
              >
                <View style={[styles.sectionNum, { backgroundColor: info.color }]}>
                  <Text style={styles.sectionNumText}>{i + 1}</Text>
                </View>
                <Text style={styles.sectionTitle}>{s.emoji} {s.title}</Text>
                <Text style={styles.chevron}>{open ? '▾' : '▸'}</Text>
              </TouchableOpacity>
              {open && (
                <View style={styles.sectionBody}>
                  <StudyText text={s.body} accent={info.color} />
                </View>
              )}
            </View>
          );
        })}
        <View style={[styles.tipBox, { borderLeftColor: info.color }]}>
          <Text style={[styles.tipTitle, { color: info.color }]}>📌 学習のすすめ方</Text>
          <Text style={styles.tipText}>
            テキストで公式と数値基準を押さえたら、分野別問題で知識を定着させましょう。FPは「数値の暗記」が得点に直結します。★マークの数値は特に頻出です。
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingHorizontal: 20, paddingVertical: 16 },
  back: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700', marginBottom: 8 },
  title: { fontSize: 18, fontWeight: '900', color: '#FFFFFF' },
  subTitle: { fontSize: 12, color: 'rgba(255,255,255,0.75)', fontWeight: '600', marginTop: 2 },
  content: { padding: 16, paddingBottom: 40 },
  sectionCard: {
    backgroundColor: '#FFFFFF', borderRadius: 16, marginBottom: 12, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 6, elevation: 3,
  },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', padding: 16, gap: 12 },
  sectionNum: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  sectionNumText: { fontSize: 13, fontWeight: '900', color: '#FFFFFF' },
  sectionTitle: { flex: 1, fontSize: 15, fontWeight: '800', color: '#1A1A2E' },
  chevron: { fontSize: 16, color: '#999', fontWeight: '700' },
  sectionBody: { paddingHorizontal: 18, paddingBottom: 18, borderTopWidth: 1, borderTopColor: '#F0F0F0' },
  bodyText: { fontSize: 13.5, color: '#333', lineHeight: 24, fontWeight: '500', paddingTop: 12 },
  tipBox: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, borderLeftWidth: 4, marginTop: 8 },
  tipTitle: { fontSize: 14, fontWeight: '800', marginBottom: 8 },
  tipText: { fontSize: 13, color: '#555', lineHeight: 22, fontWeight: '500' },
  emptyBody: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  emptyEmoji: { fontSize: 64, marginBottom: 16 },
  emptyH: { fontSize: 20, fontWeight: '900', color: '#1A1A2E', marginBottom: 24 },
  btn: { borderRadius: 14, paddingVertical: 14, paddingHorizontal: 32 },
  btnT: { fontSize: 15, fontWeight: '800', color: '#FFFFFF' },
});
