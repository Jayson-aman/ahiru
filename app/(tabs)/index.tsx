import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

type Cert = {
  emoji: string;
  title: string;
  subtitle: string;
  meta: string;
  route: string;
};

function CertCard({ cert, onPress }: { cert: Cert; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.cardIconChip}>
        <Text style={styles.cardEmoji}>{cert.emoji}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{cert.title}</Text>
        <Text style={styles.cardSubtitle}>{cert.subtitle}</Text>
        <Text style={styles.cardMeta}>{cert.meta}</Text>
      </View>
      <Text style={styles.cardArrow}>›</Text>
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const go = (route: string) => () => router.push(route as any);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/icon.png')} style={styles.appLogo} />
        <View>
          <Text style={styles.appTitle}>QualiZ</Text>
          <Text style={styles.appSubtitle}>国家資格・検定の合格ナビ</Text>
        </View>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* 語学 */}
        <Text style={styles.sectionLabel}>🇬🇧 語学・英語</Text>

        <CertCard
          onPress={go('/eiken')}
          cert={{
            emoji: '🇬🇧', title: '英検対策', subtitle: '2級・3級・4級 ネイティブ品質問題',
            meta: '語彙・熟語・文法・読解・対話・リスニングを網羅', route: '/eiken',
          }}
        />

        {/* 資格試験：不動産系 */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>🏠 不動産・法律系</Text>

        <CertCard
          onPress={go('/takkei')}
          cert={{
            emoji: '🏠', title: '宅建試験', subtitle: '権利関係・宅建業法・法令制限・税',
            meta: '国家資格 ／ 本試験形式模試5回分収録', route: '/takkei',
          }}
        />

        <CertCard
          onPress={go('/mansion')}
          cert={{
            emoji: '🏢', title: 'マンション管理士', subtitle: '管理組合・区分所有法・設備管理',
            meta: '国家資格 ／ 分野別問題・本試験形式模試（2年分）収録', route: '/mansion',
          }}
        />

        {/* 資格試験：金融・税務系 */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>💴 金融・税務系</Text>

        <CertCard
          onPress={go('/fp')}
          cert={{
            emoji: '💴', title: 'FP試験', subtitle: 'ファイナンシャルプランナー 2・3級',
            meta: '国家資格 ／ 6分野・詳細解説付き', route: '/fp',
          }}
        />

        {/* 資格試験：建築・設備系 */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>🏛️ 建築・設備系</Text>

        <CertCard
          onPress={go('/nikkyu')}
          cert={{
            emoji: '📐', title: '二級建築士', subtitle: '建築計画・法規・構造・施工',
            meta: '国家資格 ／ テキスト・科目別問題・学科模試・製図対策', route: '/nikkyu',
          }}
        />

        <CertCard
          onPress={go('/kenchiku')}
          cert={{
            emoji: '🏛️', title: '建築設備士', subtitle: '空調・給排水・電気・法規・構造',
            meta: '国家資格 ／ テキスト・基礎/応用・模擬試験・製図ガイド', route: '/kenchiku',
          }}
        />

        <CertCard
          onPress={go('/kyusui')}
          cert={{
            emoji: '💧', title: '給水装置工事主任技術者', subtitle: '水道行政・工事法・構造性能・計画論ほか8科目',
            meta: '国家資格 ／ テキスト・科目別問題・模擬試験・全問図解つき解説', route: '/kyusui',
          }}
        />

        <CertCard
          onPress={go('/shobo')}
          cert={{
            emoji: '🧯', title: '消防設備士 甲種', subtitle: '消防法令・基礎的知識・構造機能・規格・実技',
            meta: '国家資格 ／ テキスト・科目別問題・模擬試験・全問図解つき解説', route: '/shobo',
          }}
        />

        <CertCard
          onPress={go('/concrete')}
          cert={{
            emoji: '🧱', title: 'コンクリート技士・診断士', subtitle: '材料・配合・製造・施工・各種・劣化診断',
            meta: '日本コンクリート工学会 ／ テキスト・科目別問題・模擬試験・全問図解つき解説', route: '/concrete',
          }}
        />

        {/* 危険物・保安系 */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>🛢️ 危険物・保安系</Text>

        <CertCard
          onPress={go('/kikenbutsu')}
          cert={{
            emoji: '🛢️', title: '危険物取扱者 乙種第4類', subtitle: '法令・物理化学・性質と消火',
            meta: '国家資格 ／ テキスト・科目別問題・模擬試験・全問図解つき解説', route: '/kikenbutsu',
          }}
        />

        <CertCard
          onPress={go('/lpgas')}
          cert={{
            emoji: '🔥', title: '液化石油ガス設備士', subtitle: '基礎・燃焼工学・供給設備・消費設備・法令',
            meta: '国家資格 ／ テキスト・科目別問題・模擬試験・全問図解つき解説', route: '/lpgas',
          }}
        />

        <CertCard
          onPress={go('/koatsu')}
          cert={{
            emoji: '⚙️', title: '高圧ガス製造保安責任者', subtitle: '保安管理技術・法令・学識（化学／機械）',
            meta: '国家資格（甲種・乙種・丙種） ／ テキスト・科目別問題・模擬試験・全問図解つき解説', route: '/koatsu',
          }}
        />

        {/* 施工管理系 */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>🏗️ 施工管理系</Text>

        <CertCard
          onPress={go('/sekokan')}
          cert={{
            emoji: '🏗️', title: '1級建築施工管理技士', subtitle: '建築学・施工・施工管理法・法規',
            meta: '国家資格 ／ テキスト・基礎/応用・模擬試験・二次対策', route: '/sekokan',
          }}
        />

        <CertCard
          onPress={go('/kankoji')}
          cert={{
            emoji: '🚿', title: '1級管工事施工管理技士', subtitle: '原論・空調・給排水衛生・施工管理・法規',
            meta: '国家資格 ／ テキスト・科目別問題・全問図解つき解説', route: '/kankoji',
          }}
        />

        <CertCard
          onPress={go('/denkisekou')}
          cert={{
            emoji: '💡', title: '1級電気工事施工管理技士', subtitle: '電気工学・電気設備・施工管理・法規',
            meta: '国家資格 ／ テキスト・科目別問題・全問図解つき解説', route: '/denkisekou',
          }}
        />

        <CertCard
          onPress={go('/kikaisekou')}
          cert={{
            emoji: '🚜', title: '1級建設機械施工管理技士', subtitle: '土木工学・建設機械・施工管理・法規',
            meta: '国家資格 ／ テキスト・科目別問題・全問図解つき解説', route: '/kikaisekou',
          }}
        />

        <CertCard
          onPress={go('/dobokusekou')}
          cert={{
            emoji: '🌊', title: '1級土木施工管理技士', subtitle: '土木一般・専門土木・施工管理法・法規',
            meta: '国家資格 ／ テキスト・科目別問題・全問図解つき解説', route: '/dobokusekou',
          }}
        />

        <CertCard
          onPress={go('/tsushin')}
          cert={{
            emoji: '📡', title: '1級電気通信工事施工管理技士', subtitle: '電気通信工学・設備・施工管理・法規',
            meta: '国家資格 ／ テキスト・科目別問題・模擬試験・全問図解つき解説', route: '/tsushin',
          }}
        />

        {/* 資格試験：積算・コスト管理系 */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>💰 積算・コスト管理系</Text>

        <CertCard
          onPress={go('/cost')}
          cert={{
            emoji: '💰', title: '建築コスト管理士', subtitle: 'コスト管理概論・積算・契約法規・経済調査',
            meta: '建設物価調査会 ／ テキスト・科目別問題・模擬試験・全問図解つき解説', route: '/cost',
          }}
        />

        {/* 資格試験：電気・理工系 */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>⚡ 電気・理工系</Text>

        <CertCard
          onPress={go('/denki2')}
          cert={{
            emoji: '⚡', title: '第二種電気工事士', subtitle: '基礎理論・配線設計・機器材料・法令複線図',
            meta: '国家資格 ／ テキスト・科目別問題・学科模試・複線図の描き方', route: '/denki2',
          }}
        />

        <CertCard
          onPress={go('/denken3')}
          cert={{
            emoji: '⚡', title: '電験三種', subtitle: '理論・電力・機械・法規',
            meta: '国家資格 ／ 4科目・詳細解説付き', route: '/denken3',
          }}
        />

        {/* 資格試験：気象・防災系 */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>🌤 気象・防災系</Text>

        <CertCard
          onPress={go('/kisho')}
          cert={{
            emoji: '🌤️', title: '気象予報士', subtitle: '一般知識・専門知識・実技',
            meta: '国家資格 ／ テキスト＋問題・詳細解説付き', route: '/kisho',
          }}
        />

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

// 落ち着いたクリーム/ブラウン基調（Web版ランディングページと同じトーン）
const PALETTE = {
  ground: '#F7F3E9',
  panel: '#FFFDF7',
  ink: '#2B2118',
  brown: '#5A4A32',
  accent: '#B5561B',
  accentSoft: '#E8DCC6',
  rule: '#D9CFB8',
  slate: '#6B6255',
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: PALETTE.ground },
  header: {
    backgroundColor: PALETTE.panel,
    borderBottomWidth: 1,
    borderBottomColor: PALETTE.rule,
    paddingHorizontal: 24, paddingTop: 20, paddingBottom: 20,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 16,
  },
  appLogo: { width: 56, height: 56, borderRadius: 13 },
  appTitle: { fontSize: 22, fontWeight: '900', color: PALETTE.ink, letterSpacing: 1, marginBottom: 3 },
  appSubtitle: { fontSize: 13, color: PALETTE.slate, fontWeight: '600' },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 40 },
  sectionLabel: { fontSize: 14, fontWeight: '800', color: PALETTE.brown, marginBottom: 12, letterSpacing: 0.5 },
  card: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: PALETTE.panel,
    borderRadius: 16, borderWidth: 1, borderColor: PALETTE.rule,
    borderLeftWidth: 4, borderLeftColor: PALETTE.accent,
    padding: 16, marginBottom: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 6, elevation: 2,
  },
  cardIconChip: {
    width: 44, height: 44, borderRadius: 12, backgroundColor: PALETTE.accentSoft,
    alignItems: 'center', justifyContent: 'center',
  },
  cardEmoji: { fontSize: 22 },
  cardBody: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: '800', color: PALETTE.ink, marginBottom: 3 },
  cardSubtitle: { fontSize: 12, color: PALETTE.brown, fontWeight: '600', marginBottom: 2 },
  cardMeta: { fontSize: 11, color: PALETTE.slate, fontWeight: '500' },
  cardArrow: { fontSize: 24, color: PALETTE.accent },
  footerNote: { backgroundColor: PALETTE.accentSoft, borderRadius: 12, padding: 14, marginTop: 12 },
  footerNoteText: { fontSize: 12, color: PALETTE.brown, fontWeight: '600', lineHeight: 18, textAlign: 'center' },
  disclaimerBox: { backgroundColor: PALETTE.panel, borderWidth: 1, borderColor: PALETTE.rule, borderRadius: 12, padding: 14, marginTop: 12 },
  disclaimerText: { fontSize: 10, color: PALETTE.slate, fontWeight: '500', lineHeight: 16, textAlign: 'center' },
  legalLinks: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    flexWrap: 'wrap', marginTop: 16,
  },
  legalLinkText: { fontSize: 11, color: PALETTE.accent, fontWeight: '600', paddingVertical: 4 },
  legalLinkSep: { fontSize: 11, color: PALETTE.rule },
});
