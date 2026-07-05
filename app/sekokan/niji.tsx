import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

type GuideSection = { id: string; emoji: string; title: string; body: string };

const SECTIONS: GuideSection[] = [
  {
    id: 'overview',
    emoji: '🗺️',
    title: '第二次検定の全体像',
    body: `一級建築施工管理技士の第二次検定は、施工管理の実務能力を「記述式」で問う試験です。第一次検定合格者（技士補）等が受験できます。

━━━━━━━━━━━━━━━━━━━━━━
📋 試験の基本情報
━━━━━━━━━━━━━━━━━━━━━━
・試験時間：3時間程度
・実施時期：例年10月中旬（一次と同日実施の日程もあり）
・合格発表：例年1月頃
・合格率：例年40〜50%程度
・合格基準：得点の60%程度

━━━━━━━━━━━━━━━━━━━━━━
📝 出題の構成（例年の傾向）
━━━━━━━━━━━━━━━━━━━━━━
【図解】二次検定の出題マップ
　問題1：経験記述★最重要
　　（自分の工事経験を題材にした記述）
　問題2：仮設・安全（用語説明・留意事項）
　問題3：躯体施工（記述・穴埋め）
　問題4：仕上施工（記述・穴埋め）
　問題5：施工管理（ネットワーク工程等）
　問題6：法規（建設業法・安衛法等の穴埋め）

・経験記述の出来が合否を大きく左右します
・出題テーマは「品質管理」「施工の合理化」「建設副産物」等が
　年度によりローテーションで出題される傾向があります`,
  },
  {
    id: 'keiken',
    emoji: '✍️',
    title: '経験記述に何が必要か',
    body: `経験記述は「あなた自身の工事経験」を所定の様式で記述する問題です。事前の準備がすべてと言ってよいパートです。

━━━━━━━━━━━━━━━━━━━━━━
🔑 記述する工事の選び方
━━━━━━━━━━━━━━━━━━━━━━
・自分が「施工管理の立場」で関わった建築工事を選ぶ
　（現場代理人・主任技術者・工事主任・発注者側監督員等）
・工事概要として書く項目：
　①工事名（固有名詞で具体的に）
　②工事場所（都道府県・市区町村まで）
　③工事の内容（用途・構造・階数・延べ面積・主な工事内容）
　④工期（年月〜年月）
　⑤あなたの立場

【図解】工事概要の記述例（イメージ）
　工事名：○○ビル新築工事
　場所　：東京都○○区
　内容　：事務所、S造、地上8階、延べ5,200m²
　工期　：2023年4月〜2024年8月
　立場　：工事主任

━━━━━━━━━━━━━━━━━━━━━━
🔑 頻出テーマと準備すべき解答
━━━━━━━━━━━━━━━━━━━━━━
以下の3テーマは、それぞれ事前に解答を作り込んでおく：

■ 品質管理
・重点品質管理項目とした理由（なぜその項目か）
・実施した内容（数値・方法を具体的に）

■ 施工の合理化（工程・生産性）
・合理化の必要性が生じた理由
・実施した内容と得られた効果（工期短縮・省人化等）
・品質を確保できた理由

■ 建設副産物・環境
・発生抑制（リデュース）・再使用（リユース）・
　再生利用（リサイクル）の取組み
・実施内容と得られた効果

━━━━━━━━━━━━━━━━━━━━━━
✏️ 記述のコツ
━━━━━━━━━━━━━━━━━━━━━━
・「理由 → 実施内容 → 結果・効果」の型で書く
・数値を入れる（「養生期間を5日確保」「打設速度を○m³/h」等）
・専門用語を正しく使う（誤字は減点リスク）
・指定行数の8割以上を埋める
・第三者（添削者）に読んでもらい、伝わるかを確認する`,
  },
  {
    id: 'kijutsu',
    emoji: '📝',
    title: '記述式問題（仮設・躯体・仕上・法規）',
    body: `経験記述以外の問題は、一次検定の知識を「書ける」レベルまで引き上げれば対応できます。

━━━━━━━━━━━━━━━━━━━━━━
🔑 仮設・安全
━━━━━━━━━━━━━━━━━━━━━━
・仮設物の設置計画の留意事項を記述させる問題
　（例：乗入れ構台、荷受け構台、仮設事務所、外部足場）
・災害防止対策の記述
　（例：墜落災害・崩壊災害・重機災害の防止対策を各2つ）
【図解】解答の型
　「〜のおそれがあるため（危険性）、〜を行う（対策）」
　危険性と対策をセットで書くと説得力が出る

━━━━━━━━━━━━━━━━━━━━━━
🔑 躯体施工・仕上施工
━━━━━━━━━━━━━━━━━━━━━━
・施工上の留意事項の記述（各工種2つ程度）
・不具合（ひび割れ・浮き・漏水等）の原因と対策
・語句の穴埋め（数値の暗記が直結）
・頻出：山留め、場所打ち杭、鉄筋（ガス圧接）、型枠、
　コンクリート打設・養生、鉄骨（高力ボルト・溶接）、
　防水、タイル、左官、塗装、内装、改修工事

━━━━━━━━━━━━━━━━━━━━━━
🔑 施工管理（ネットワーク工程表）
━━━━━━━━━━━━━━━━━━━━━━
・所要日数・クリティカルパスの計算
・フリーフロート／トータルフロートの算出
・作業日数短縮後の工期再計算
【図解】計算の手順
　①前進計算でEST（合流は最大値）
　②後退計算でLFT（分岐は最小値）
　③TF=0の経路＝クリティカルパス

━━━━━━━━━━━━━━━━━━━━━━
🔑 法規（穴埋め）
━━━━━━━━━━━━━━━━━━━━━━
・建設業法・建築基準法（施行令）・労働安全衛生法から出題
・条文の重要語句・数値を正確に
　（例：主任技術者の職務、施工体制台帳、作業主任者等）`,
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
・品質管理／合理化／建設副産物の3テーマで解答を作成
・可能なら経験者・講師に添削を受ける（最重要）

■ 2か月目：記述問題の演習
・過去問5年分を「書いて」練習（読むだけでは書けない）
・躯体・仕上の留意事項を工種別にストック化
・ネットワーク計算を毎日1問

■ 3か月目：仕上げ
・経験記述を時間内（30〜40分）で書き切る練習
・全体を3時間で通す模擬演習を2回以上
・数値・語句の最終暗記（本アプリの一次問題の復習が有効）

━━━━━━━━━━━━━━━━━━━━━━
💡 合格のポイント
━━━━━━━━━━━━━━━━━━━━━━
【図解】二次検定の得点構造（イメージ）
　経験記述 ████████ 配点大★ここで勝負が決まる
　記述問題 █████ 一次知識の記述化
　計算問題 ███ ネットワークは満点を狙える
・空欄を作らない（部分点を拾う）
・誤字脱字・崩し字は避け、丁寧に書く
・「実際の経験に基づく具体性」が最大の加点要素
・虚偽の経験記述は失格リスク（経歴詐称は厳禁）`,
  },
];

export default function SekokanNijiScreen() {
  const router = useRouter();
  const [openId, setOpenId] = React.useState<string | null>(SECTIONS[0].id);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>✍️ 第二次検定 対策ガイド</Text>
        <Text style={styles.sub}>経験記述・記述式問題への備え方</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SECTIONS.map((s, i) => {
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { backgroundColor: '#A0522D', paddingHorizontal: 20, paddingVertical: 16 },
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
  num: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: '#A0522D' },
  numText: { fontSize: 13, fontWeight: '900', color: '#FFFFFF' },
  cardTitle: { flex: 1, fontSize: 15, fontWeight: '800', color: '#1A1A2E' },
  chevron: { fontSize: 16, color: '#999', fontWeight: '700' },
  cardBody: { paddingHorizontal: 18, paddingBottom: 18, borderTopWidth: 1, borderTopColor: '#F0F0F0' },
  bodyText: { fontSize: 13.5, color: '#333', lineHeight: 24, fontWeight: '500', paddingTop: 12 },
});
