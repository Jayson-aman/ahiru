import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getShoboText } from '../../../data/shobo_text';
import StudyText from '../../../components/StudyText';
import CertPaywall from '../../../components/CertPaywall';
import { FREE_TEXT_LIMIT } from '../../../services/subscription';

const INFO: Record<string, { name: string; emoji: string; color: string }> = {
  horei_kyotsu: { name: '消防関係法令（共通）', emoji: '📜', color: '#C62828' },
  horei_rui:    { name: '消防関係法令（類別）', emoji: '📋', color: '#AD1457' },
  kiso_kikai:   { name: '基礎的知識（機械）',   emoji: '⚙️', color: '#455A64' },
  kiso_denki:   { name: '基礎的知識（電気）',   emoji: '⚡', color: '#EF6C00' },
  kozo_kikai:   { name: '構造・機能（機械）',   emoji: '🚿', color: '#00695C' },
  kozo_denki:   { name: '構造・機能（電気）',   emoji: '🔔', color: '#1565C0' },
  kikaku:       { name: '構造・機能（規格）',   emoji: '📐', color: '#6A1B9A' },
  jitsugi:      { name: '実技（鑑別等・製図）', emoji: '✍️', color: '#D32F2F' },};

export default function ShoboTextScreen() {
  const { subject } = useLocalSearchParams<{ subject: string }>();
  const router = useRouter();
  const info = INFO[subject ?? ''] ?? { name: subject, emoji: '📖', color: '#D32F2F' };
  const sections = getShoboText(subject ?? '');
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
            <Text style={styles.btnT}>← 科目一覧に戻る</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <CertPaywall
        certKey="shobo"
        certName={`${info.emoji} ${info.name} テキスト`}
        certEmoji={info.emoji}
        accentColor={info.color}
        totalQuestions={sections.length}
        freeLimit={FREE_TEXT_LIMIT}
      >
        {(hasAccess: boolean) => {
          const visibleSections = hasAccess ? sections : sections.slice(0, FREE_TEXT_LIMIT);
          return (
            <>
              <View style={[styles.header, { backgroundColor: info.color }]}>
                <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
                <Text style={styles.title}>{info.emoji} {info.name} テキスト</Text>
                <Text style={styles.subTitle}>本試験レベル ／ {sections.length}セクション収録</Text>
              </View>
              <ScrollView contentContainerStyle={styles.content}>
                {visibleSections.map((s, i) => {
                  const open = openId === s.id;
                  return (
                    <View key={s.id} style={styles.sectionCard}>
                      <TouchableOpacity style={styles.sectionHeader} onPress={() => setOpenId(open ? null : s.id)} activeOpacity={0.8}>
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
                    甲種は筆記の各科目に40%以上、全体で60%以上の得点が必要です。苦手科目を作らないよう、法令→基礎→構造機能→実技の順に固めましょう。
                  </Text>
                </View>
              </ScrollView>
            </>
          );
        }}
      </CertPaywall>
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
  tipBox: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, borderLeftWidth: 4, marginTop: 8 },
  tipTitle: { fontSize: 14, fontWeight: '800', marginBottom: 8 },
  tipText: { fontSize: 13, color: '#555', lineHeight: 22, fontWeight: '500' },
  emptyBody: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  emptyEmoji: { fontSize: 64, marginBottom: 16 },
  emptyH: { fontSize: 20, fontWeight: '900', color: '#1A1A2E', marginBottom: 24 },
  btn: { borderRadius: 14, paddingVertical: 14, paddingHorizontal: 32 },
  btnT: { fontSize: 15, fontWeight: '800', color: '#FFFFFF' },
});
