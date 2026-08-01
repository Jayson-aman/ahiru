import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import CertPaywall from '../../components/CertPaywall';
import { FREE_TEXT_LIMIT } from '../../services/subscription';

const ACCENT = '#00695C';

type GuideSection = { id: string; emoji: string; title: string; body: string };

const SECTIONS: GuideSection[] = [
  {
    id: 'overview',
    emoji: '🗺️',
    title: '第二次検定の全体像',
    body: `一級土木施工管理技士の第二次検定は、土木工事の施工管理の実務能力を「記述式」で問う試験です。第一次検定合格者（技士補）等が受験できます。

━━━━━━━━━━━━━━━━━━━━━━
📋 試験の基本情報
━━━━━━━━━━━━━━━━━━━━━━
・試験時間：2時間45分程度
・実施時期：例年10月中旬
・合格発表：例年1月頃
・合格基準：得点の60%程度

━━━━━━━━━━━━━━━━━━━━━━
📝 出題の構成（例年の傾向）
━━━━━━━━━━━━━━━━━━━━━━
【図解】二次検定の出題マップ
　問題1：経験記述★最重要
　　（自分の土木工事経験を題材にした記述）
　問題2：土工（用語説明・留意事項）
　問題3：コンクリート工（記述・穴埋め）
　問題4：品質管理（記述）
　問題5：安全管理（記述）
　問題6：施工管理法（穴埋め・語句）
　問題7：法規（建設業法・安衛法等の穴埋め、選択解答）

・経験記述の出来が合否を大きく左右します
・出題テーマは「施工管理（工程・品質・安全のいずれか）」が
　中心となり、経験記述の設問形式は年度により変化します`,
  },
  {
    id: 'keiken',
    emoji: '✍️',
    title: '経験記述に何が必要か',
    body: `経験記述は「あなた自身の土木工事経験」を所定の様式で記述する問題です。事前の準備がすべてと言ってよいパートです。

━━━━━━━━━━━━━━━━━━━━━━
🔑 記述する工事の選び方
━━━━━━━━━━━━━━━━━━━━━━
・自分が「施工管理の立場」で関わった土木工事を選ぶ
　（現場代理人・主任技術者・工事主任・発注者側監督員等）
・工事概要として書く項目：
　①工事名（固有名詞で具体的に）
　②工事場所（都道府県・市区町村まで）
　③工事の内容（工種・規模・数量を具体的に）
　④工期（年月〜年月）
　⑤あなたの立場

【図解】工事概要の記述例（イメージ）
　工事名：○○道路改良工事
　場所　：○○県○○市
　内容　：道路改良、L=250m、盛土量3,500m³、擁壁工
　工期　：2023年6月〜2024年3月
　立場　：現場代理人

━━━━━━━━━━━━━━━━━━━━━━
🔑 頻出テーマと準備すべき解答
━━━━━━━━━━━━━━━━━━━━━━
以下のテーマは、それぞれ事前に解答を作り込んでおく：

■ 工程管理
・工程を短縮する必要が生じた理由
・実施した内容（工法変更・機械化・作業手順の見直し等）
・工期を守れた理由・効果

■ 品質管理
・重点品質管理項目とした理由（なぜその項目か）
・実施した内容（数値・方法を具体的に）

■ 安全管理
・重点安全管理項目とした理由
・実施した具体的対策と効果

━━━━━━━━━━━━━━━━━━━━━━
✏️ 記述のコツ
━━━━━━━━━━━━━━━━━━━━━━
・「理由 → 実施内容 → 結果・効果」の型で書く
・数値を入れる（「盛土の敷均し厚さを30cmに管理」等）
・専門用語を正しく使う（誤字は減点リスク）
・指定行数の8割以上を埋める
・第三者（添削者）に読んでもらい、伝わるかを確認する`,
  },
  {
    id: 'kijutsu',
    emoji: '📝',
    title: '記述式問題（土工・コンクリート・品質・安全）',
    body: `経験記述以外の問題は、一次検定の知識を「書ける」レベルまで引き上げれば対応できます。

━━━━━━━━━━━━━━━━━━━━━━
🔑 土工
━━━━━━━━━━━━━━━━━━━━━━
・盛土・切土施工の留意事項の記述
・軟弱地盤対策工法の特徴の記述
・語句の穴埋め（施工上の留意点に関する用語）

━━━━━━━━━━━━━━━━━━━━━━
🔑 コンクリート工
━━━━━━━━━━━━━━━━━━━━━━
・コンクリートの打込み・締固め・養生の留意事項
・不具合（コールドジョイント・ひび割れ）の原因と対策
・頻出：型枠・支保工、鉄筋工、レディーミクストコンクリートの受入検査

━━━━━━━━━━━━━━━━━━━━━━
🔑 品質管理・安全管理
━━━━━━━━━━━━━━━━━━━━━━
・品質管理項目とその試験方法（例：締固め度、スランプ）
・労働災害防止対策の記述
　（例：墜落災害・土砂崩壊災害・建設機械災害の防止対策）
【図解】解答の型
　「〜のおそれがあるため（危険性）、〜を行う（対策）」
　危険性と対策をセットで書くと説得力が出る

━━━━━━━━━━━━━━━━━━━━━━
🔑 施工管理法・法規（穴埋め）
━━━━━━━━━━━━━━━━━━━━━━
・建設業法・労働安全衛生法・建設リサイクル法等から出題
・条文の重要語句・数値を正確に
　（例：主任技術者の職務、特定建設資材、作業主任者等）`,
  },
  {
    id: 'study',
    emoji: '📅',
    title: '勉強法とスケジュール',
    body: `一次検定の合格発表から二次検定まで数か月。経験記述の完成度を軸に計画を立てます。

━━━━━━━━━━━━━━━━━━━━━━
🗓️ モデルスケジュール（3か月）
━━━━━━━━━━━━━━━━━━━━━━
■ 1か月目：経験記述の骨格づくり
・題材工事を決め、工事概要を正確にまとめる
・工程管理／品質管理／安全管理の各テーマで解答を作成
・可能なら経験者・講師に添削を受ける（最重要）

■ 2か月目：記述問題の演習
・過去問5年分を「書いて」練習（読むだけでは書けない）
・土工・コンクリート工の留意事項を工種別にストック化
・品質管理の試験方法・数値を毎日確認

■ 3か月目：仕上げ
・経験記述を時間内（30〜40分）で書き切る練習
・全体を2時間45分で通す模擬演習を2回以上
・数値・語句の最終暗記（本アプリの一次問題の復習が有効）

━━━━━━━━━━━━━━━━━━━━━━
💡 合格のポイント
━━━━━━━━━━━━━━━━━━━━━━
【図解】二次検定の得点構造（イメージ）
　経験記述 ████████ 配点大★ここで勝負が決まる
　記述問題 █████ 一次知識の記述化
　穴埋め問題 ███ 法規・施工管理法は覚えれば得点源
・空欄を作らない（部分点を拾う）
・誤字脱字・崩し字は避け、丁寧に書く
・「実際の経験に基づく具体性」が最大の加点要素
・虚偽の経験記述は失格リスク（経歴詐称は厳禁）`,
  },
];

export default function DobokusekouNijiScreen() {
  const router = useRouter();
  const [openId, setOpenId] = React.useState<string | null>(SECTIONS[0].id);

  return (
    <SafeAreaView style={styles.safe}>
      <CertPaywall
        certKey="dobokusekou"
        certName="一級土木施工管理技士 二次試験対策"
        certEmoji="✍️"
        accentColor={ACCENT}
        totalQuestions={SECTIONS.length}
        freeLimit={FREE_TEXT_LIMIT}
        unitLabel="セクション"
      >
        {(hasAccess: boolean) => {
          const visibleSections = hasAccess ? SECTIONS : SECTIONS.slice(0, FREE_TEXT_LIMIT);
          return (
            <>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
                <Text style={styles.title}>✍️ 第二次検定 対策ガイド</Text>
                <Text style={styles.sub}>経験記述・記述式問題への備え方</Text>
              </View>
              <ScrollView contentContainerStyle={styles.content}>
                {visibleSections.map((s, i) => {
                  const open = openId === s.id;
                  return (
                    <View key={s.id} style={styles.card}>
                      <TouchableOpacity style={styles.cardHeader} onPress={() => setOpenId(open ? null : s.id)} activeOpacity={0.8}>
                        <View style={styles.num}><Text style={styles.numText}>{i + 1}</Text></View>
                        <Text style={styles.cardTitle}>{s.emoji} {s.title}</Text>
                        <Text style={styles.chevron}>{open ? '▾' : '▸'}</Text>
                      </TouchableOpacity>
                      {open && (
                        <View style={styles.cardBody}>
                          <Text style={styles.bodyText}>{s.body}</Text>
                        </View>
                      )}
                    </View>
                  );
                })}
              </ScrollView>
            </>
          );
        }}
      </CertPaywall>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { backgroundColor: '#00352C', paddingHorizontal: 20, paddingVertical: 16 },
  back: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700', marginBottom: 8 },
  title: { fontSize: 18, fontWeight: '900', color: '#FFFFFF' },
  sub: { fontSize: 12, color: 'rgba(255,255,255,0.75)', fontWeight: '600', marginTop: 2 },
  content: { padding: 16, paddingBottom: 40 },
  card: {
    backgroundColor: '#FFFFFF', borderRadius: 16, marginBottom: 12, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 6, elevation: 3,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', padding: 16, gap: 12 },
  num: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00695C' },
  numText: { fontSize: 13, fontWeight: '900', color: '#FFFFFF' },
  cardTitle: { flex: 1, fontSize: 15, fontWeight: '800', color: '#1A1A2E' },
  chevron: { fontSize: 16, color: '#999', fontWeight: '700' },
  cardBody: { paddingHorizontal: 18, paddingBottom: 18, borderTopWidth: 1, borderTopColor: '#F0F0F0' },
  bodyText: { fontSize: 13.5, color: '#333', lineHeight: 24, fontWeight: '500', paddingTop: 12 },
});
