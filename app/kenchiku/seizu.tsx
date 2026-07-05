import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

type GuideSection = { id: string; emoji: string; title: string; body: string };

const SECTIONS: GuideSection[] = [
  {
    id: 'overview',
    emoji: '🗺️',
    title: '第二次試験（設計製図）の全体像',
    body: `建築設備士試験の第二次試験は「設計製図」試験です。第一次試験(学科)の合格者だけが受験できます。

━━━━━━━━━━━━━━━━━━━━━━
📋 試験の基本情報
━━━━━━━━━━━━━━━━━━━━━━
・試験時間：5時間30分（長丁場の体力勝負）
・実施時期：例年11月中旬の日曜日
・合格発表：例年1月頃
・合格率：例年50〜60%程度（学科より高いが油断禁物）

━━━━━━━━━━━━━━━━━━━━━━
📝 出題の構成
━━━━━━━━━━━━━━━━━━━━━━
① 建築設備基本計画（必須・記述式）
　建物条件に対する設備計画の考え方を文章・計算で解答します。
　（例：熱源方式の選定理由、給水方式の比較、受変電容量の想定、
　　環境配慮・省エネ手法の提案 など）

② 建築設備基本設計製図（選択科目）
　次の3科目から1科目を「申込時に」選択します。
　・空調・換気設備
　・給排水衛生設備
　・電気設備

　選択科目について、系統図・平面図への機器/配管/ダクト/配線の
　作図、機器容量等の計算を行います。

━━━━━━━━━━━━━━━━━━━━━━
📢 課題の事前公表
━━━━━━━━━━━━━━━━━━━━━━
建物用途等の「課題」は例年7月頃に事前公表されます。
（過去の課題例：事務所ビル、ホテル、病院、複合施設 等）
課題発表後は、その建物用途に特化した対策を進めるのが鉄則です。`,
  },
  {
    id: 'tools',
    emoji: '🧰',
    title: '製図試験に必要な道具',
    body: `当日持参すべき道具のチェックリストです。使い慣れたものを試験までに揃え、必ず「本番と同じ道具」で練習しましょう。

━━━━━━━━━━━━━━━━━━━━━━
✅ 必須の道具
━━━━━━━━━━━━━━━━━━━━━━
□ シャープペンシル（0.5mm／0.7mm）
　・作図用と記述用で使い分けると効率的
　・芯はB〜2B程度が濃くて見やすい
□ 消しゴム（＋字消し板があると細部修正に便利）
□ 直定規（30cm程度）
□ 三角定規（大きめのもの）
□ 三角スケール（縮尺の読み取りに必須）
□ テンプレート（円・四角）
　・機器記号、ダクト・配管記号の作図に多用します
□ 電卓（√機能付きの一般電卓。関数電卓は不可）
　・容量計算・熱負荷概算で必ず使います
　・予備をもう1台持っておくと安心
□ 時計（会場に時計がない場合に備える）

━━━━━━━━━━━━━━━━━━━━━━
🔶 あると有利な道具
━━━━━━━━━━━━━━━━━━━━━━
□ 蛍光ペン（問題文の条件チェック用・複数色）
□ マグネット式や滑り止め付きの定規
□ 芯ホルダー・替芯
□ 製図用ブラシ（消しカス払い）
□ クッション（長時間着席対策）

━━━━━━━━━━━━━━━━━━━━━━
⚠️ 注意事項
━━━━━━━━━━━━━━━━━━━━━━
・平行定規（製図板）は建築設備士では通常「不要」です
　（一級建築士の設計製図と異なりA2図面のフリーハンド＋定規作図が主体）
・持込み可能な道具は必ず受験票・試験案内で最終確認してください
・関数電卓・スマートウォッチ等は使用不可です`,
  },
  {
    id: 'keikaku',
    emoji: '✍️',
    title: '基本計画（記述）で問われること',
    body: `基本計画は「設備設計者としての判断力」を文章で示すパートです。暗記した模範解答の丸写しではなく、課題条件に即した理由付けが得点の鍵です。

━━━━━━━━━━━━━━━━━━━━━━
🔑 頻出テーマ（全科目共通で対策必須）
━━━━━━━━━━━━━━━━━━━━━━
■ 空調
・熱源方式の選定（中央熱源 vs 個別分散、比較と選定理由）
・空調方式のゾーニング（方位別・用途別・時間帯別）
・省エネ手法（全熱交換器、外気冷房、大温度差、VAV/VWV…）

■ 給排水衛生
・給水方式の選定理由（直結増圧 vs 受水槽方式）
・給湯方式（中央式/局所式）とレジオネラ対策
・排水系統の分け方、雨水利用・節水計画

■ 電気
・受変電方式と設置場所（屋上 or 地下、浸水対策）
・非常電源の構成（自家発・蓄電池・UPSの役割分担）
・幹線計画・EPS配置の考え方

■ 共通・環境
・ZEB化の手法、再エネ（太陽光）の導入
・浸水・地震などの防災（BCP）対応
・機械室・シャフトの面積確保と配置（建築計画との調整）

━━━━━━━━━━━━━━━━━━━━━━
✏️ 記述のコツ
━━━━━━━━━━━━━━━━━━━━━━
・「結論 → 理由 → 効果」の3段構成で書く
・課題建物の用途・規模の条件を必ず引用して書く
　（例：「本建物は病院であり停電が人命に直結するため…」）
・数値（目安値）を織り込むと説得力が増す
・箇条書き指定か文章指定か、設問の指示に必ず従う`,
  },
  {
    id: 'seizu',
    emoji: '📐',
    title: '基本設計製図で問われること',
    body: `選択科目ごとに、系統図と平面図プロットが出題の柱です。「きれいさ」より「設備計画として正しいこと・整合していること」が採点の中心です。

━━━━━━━━━━━━━━━━━━━━━━
❄️ 空調・換気設備を選択した場合
━━━━━━━━━━━━━━━━━━━━━━
・空調系統図（熱源〜2次側までの冷温水配管・機器の接続）
・ダクト系統図／平面図へのダクト・吹出口・制気口の作図
・熱負荷計算、機器容量（熱源・空調機・ファン）の算定
・換気量計算（居室・火気使用室・駐車場等）
・排煙系統の作図（防煙区画・排煙口・排煙機）

━━━━━━━━━━━━━━━━━━━━━━
🚿 給排水衛生設備を選択した場合
━━━━━━━━━━━━━━━━━━━━━━
・給水系統図（受水槽・ポンプ・上向き/下向き配管方式）
・排水・通気系統図（トラップ・通気管の正しい取り方）
・器具数からの給水量・受水槽/高置水槽容量の計算
・給湯系統（循環配管）・消火設備（屋内消火栓・SP）の計画
・平面図への衛生器具・配管ルートのプロット

━━━━━━━━━━━━━━━━━━━━━━
⚡ 電気設備を選択した場合
━━━━━━━━━━━━━━━━━━━━━━
・単線結線図（受変電設備の構成、保護装置の配置）
・幹線系統図（変圧器〜分電盤・動力盤）
・照明・コンセント・動力の平面図プロット
・設備容量・変圧器容量・需要率の計算
・防災設備（自火報・誘導灯・非常照明）の配置

━━━━━━━━━━━━━━━━━━━━━━
🎯 作図共通の注意点
━━━━━━━━━━━━━━━━━━━━━━
・凡例・記号は問題指定のものを必ず使用する
・系統図と平面図の内容を一致させる（不整合は大減点）
・機器・配管サイズの根拠（計算値）と作図を対応させる
・時間配分：計画1.5h＋計算1h＋作図2.5h＋見直し0.5h が目安`,
  },
  {
    id: 'study',
    emoji: '📅',
    title: '合格までの勉強法・スケジュール',
    body: `学科合格発表（例年7月下旬）から二次試験（11月）までは約3か月半。課題公表を起点に計画的に進めます。

━━━━━━━━━━━━━━━━━━━━━━
🗓️ モデルスケジュール
━━━━━━━━━━━━━━━━━━━━━━
■ 7月（課題公表〜）
・課題建物の用途を徹底研究（類似建物の設備構成を調べる）
・選択科目を最終決定し、過去問の出題形式を把握
・道具を揃え、記号・凡例の描き方に慣れる

■ 8〜9月
・過去問5年分を「時間無制限」で丁寧に解く
・基本計画の頻出テーマについて自分の解答パターンを作る
・計算問題（熱負荷・換気量・給水量・変圧器容量）を反復

■ 10月
・5時間30分の通し演習を最低2〜3回行う
・時間配分を体に覚え込ませる（作図の時短が最重要）
・記述解答の暗記ではなく「構成の型」を固める

■ 11月（直前）
・道具の最終チェック、当日の時間配分シミュレーション
・体調管理（5時間30分を戦える生活リズムに）

━━━━━━━━━━━━━━━━━━━━━━
💡 合格のポイント
━━━━━━━━━━━━━━━━━━━━━━
・完璧な図面より「未完成を出さない」こと（未完は致命傷）
・問題文の条件の見落としが最大の失点源 → 蛍光ペンでマーキング
・選択科目は「実務経験のある分野」または「学科で得意だった分野」
・本アプリの学科問題（空調/給排水/電気）の知識が計算・計画の
　土台になるので、二次対策中も基礎知識の復習を継続する`,
  },
];

export default function KenchikuSeizuScreen() {
  const router = useRouter();
  const [openId, setOpenId] = React.useState<string | null>(SECTIONS[0].id);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>📐 第二次試験（設計製図）対策ガイド</Text>
        <Text style={styles.sub}>試験内容・必要な道具・勉強法</Text>
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
  header: { backgroundColor: '#455A64', paddingHorizontal: 20, paddingVertical: 16 },
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
  num: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: '#455A64' },
  numText: { fontSize: 13, fontWeight: '900', color: '#FFFFFF' },
  cardTitle: { flex: 1, fontSize: 15, fontWeight: '800', color: '#1A1A2E' },
  chevron: { fontSize: 16, color: '#999', fontWeight: '700' },
  cardBody: { paddingHorizontal: 18, paddingBottom: 18, borderTopWidth: 1, borderTopColor: '#F0F0F0' },
  bodyText: { fontSize: 13.5, color: '#333', lineHeight: 24, fontWeight: '500', paddingTop: 12 },
});
