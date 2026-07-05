import React from 'react';
import { View } from 'react-native';
import {
  TriangleDiagram, SeriesCircuit, ParallelConductors, PointChargeField,
  ExpCurve, PeakCurve, RectifiedWave, VCurve, VectorSum, YDeltaDiagram, Steps,
} from './ZukaiSvg';

/**
 * 問題ID → SVG図解＋導出ステップのレジストリ。
 * MCQQuiz / MogiExam が解説表示時に参照する。
 */
const REGISTRY: Record<string, () => React.ReactNode> = {
  // ===== 電験三種・理論 =====
  dk3_rikigaku_001: () => (
    <View>
      <PointChargeField positive title="点電荷とクーロン力" />
      <Steps steps={[
        '公式を書く：F＝kQ₁Q₂/r²',
        '数値を代入：F＝9×10⁹×(3×10⁻⁶)×(6×10⁻⁶)÷(3×10⁻²)²',
        '分子を計算：9×10⁹×18×10⁻¹²＝162×10⁻³＝0.162',
        '分母を計算：(3×10⁻²)²＝9×10⁻⁴',
        '割り算：0.162÷(9×10⁻⁴)＝180 N ✓',
      ]} />
    </View>
  ),
  dk3_rikigaku_003: () => (
    <View>
      <PointChargeField positive title="点電荷のまわりの電位" />
      <Steps steps={[
        '電位の公式：V＝kQ/r（電界E＝kQ/r²と区別！）',
        '代入：V＝9×10⁹×2×10⁻⁶÷0.1',
        '計算：＝18×10³÷0.1＝1.8×10⁵ V ✓',
      ]} />
    </View>
  ),
  dk3_rikigaku_006: () => (
    <View>
      <SeriesCircuit items={[{ type: 'C', label: 'C₁=4μF' }, { type: 'C', label: 'C₂=6μF' }]} title="コンデンサの直列接続" />
      <Steps steps={[
        '直列の公式：1/C＝1/C₁＋1/C₂',
        '代入：1/C＝1/4＋1/6＝3/12＋2/12＝5/12',
        '逆数をとる：C＝12/5＝2.4 μF ✓（積/和：4×6/(4+6)でも同じ）',
      ]} />
    </View>
  ),
  dk3_rikigaku_008: () => (
    <Steps title="静電エネルギーの計算" steps={[
      '公式は3形：W＝½CV²＝½QV＝Q²/2C（与えられた量で選ぶ）',
      'CとVが既知 → W＝½CV²を使う',
      '代入：W＝½×10×10⁻⁶×100²＝½×10⁻⁵×10⁴',
      '計算：＝½×0.1＝0.05 J ✓',
    ]} />
  ),
  dk3_rikigaku_009: () => (
    <View>
      <SeriesCircuit items={[{ type: 'R', label: 'r=2Ω(内部)' }, { type: 'R', label: 'R=10Ω' }]} source="E=24V" title="内部抵抗のある電池回路" />
      <Steps steps={[
        '全抵抗＝R＋r＝10＋2＝12 Ω',
        '電流 I＝E/(R＋r)＝24/12＝2 A ✓',
        '端子電圧 V＝E−Ir＝24−2×2＝20 V ✓（V=IR=2×10でも確認できる）',
      ]} />
    </View>
  ),
  dk3_rikigaku_013: () => (
    <View>
      <SeriesCircuit items={[{ type: 'R', label: 'R=6Ω' }, { type: 'L', label: 'XL=8Ω' }]} title="RL直列回路" />
      <TriangleDiagram base="R＝6Ω" height="XL＝8Ω" hyp="Z＝10Ω" title="インピーダンス三角形（3:4:5）" />
    </View>
  ),
  dk3_rikigaku_014: () => (
    <PeakCurve xLabel="周波数 f" yLabel="電流 I" peakX={0.5} peakLabel="f₀（共振）" note="共振時：XL=XC → Z=R（最小）→ I最大・力率1" title="直列共振カーブ" />
  ),
  dk3_rikigaku_016: () => (
    <View>
      <SeriesCircuit items={[{ type: 'R', label: 'R=8Ω' }, { type: 'C', label: 'XC=6Ω' }]} title="RC直列回路" />
      <TriangleDiagram base="R＝8Ω" height="XC＝6Ω" hyp="Z＝10Ω" title="力率 cosφ＝R/Z＝0.8（進み）" />
    </View>
  ),
  dk3_rikigaku_017: () => (
    <View>
      <TriangleDiagram base="P＝600W（有効）" height="Q＝? var（無効）" hyp="S＝1000VA（皮相）" title="電力の三角形" />
      <Steps steps={[
        '関係式：S²＝P²＋Q²（直角三角形）',
        'Q＝√(S²−P²)＝√(1000²−600²)',
        '＝√(1,000,000−360,000)＝√640,000＝800 var ✓（3:4:5）',
      ]} />
    </View>
  ),
  dk3_rikigaku_018: () => <YDeltaDiagram title="Y結線とΔ結線の電圧・電流" />,
  dk3_rikigaku_019: () => (
    <View>
      <YDeltaDiagram title="Y結線負荷の三相電力" />
      <Steps steps={[
        'Y結線：相電圧 Vp＝VL/√3＝200/√3 V',
        '1相の電力：P₁＝Vp²/R＝(200²/3)/10＝4000/3 W',
        '三相合計：P＝3×P₁＝4000 W ✓',
      ]} />
    </View>
  ),
  dk3_rikigaku_021: () => (
    <Steps title="ファラデーの法則で起電力を求める" steps={[
      '公式：|e|＝N×ΔΦ/Δt（Nは巻数）',
      '磁束の変化率：ΔΦ/Δt＝4×10⁻³÷0.02＝0.2 Wb/s',
      '起電力：|e|＝500×0.2＝100 V ✓',
      '向きはレンツの法則：磁束の変化を妨げる向き',
    ]} />
  ),
  dk3_rikigaku_025: () => (
    <View>
      <ExpCurve mode="charge" tauLabel="τ=10ms" title="RC充電カーブ（時定数で63.2%）" />
      <Steps steps={[
        '時定数の公式：τ＝RC',
        '代入：τ＝1×10³×10×10⁻⁶＝10⁻²s＝10 ms ✓',
        '意味：τ後に最終値の63.2%へ。5τでほぼ定常（99.3%）',
      ]} />
    </View>
  ),
  dk3_rikigaku_026: () => <ExpCurve mode="charge" tauLabel="τ=L/R=0.01s" yLabel="2A" title="RL回路の電流の立ち上がり" />,
  dk3_rikigaku_027: () => <ExpCurve mode="discharge" tauLabel="τ=RC" yLabel="V₀" title="RC放電カーブ（τで36.8%に減少）" />,
  dk3_rikigaku_031: () => <RectifiedWave title="半波整流の出力波形" />,
  dk3_rikigaku_033: () => (
    <Steps title="分流器の計算" steps={[
      '公式：Rs＝r/(n−1)（n＝拡大倍率）',
      '代入：Rs＝100/(10−1)＝100/9',
      '≈11.1 Ω ✓（電流計に1/10、分流器に9/10が流れる）',
    ]} />
  ),
  dk3_rikigaku_034: () => (
    <Steps title="倍率器の計算" steps={[
      '公式：Rm＝r(n−1)（直列に接続）',
      '代入：Rm＝10k×(5−1)＝40 kΩ ✓',
      '対で暗記：分流器＝並列・r/(n−1)／倍率器＝直列・r(n−1)',
    ]} />
  ),
  dk3_rikigaku_040: () => (
    <View>
      <SeriesCircuit items={[{ type: 'R', label: 'R=4Ω' }, { type: 'L', label: 'XL=3Ω' }]} title="RL直列回路の総合計算" />
      <TriangleDiagram base="P＝1600W" height="Q＝1200var" hyp="S＝2000VA" title="電力三角形（I=20A）" />
      <Steps steps={[
        'Z＝√(4²＋3²)＝5 Ω（3:4:5）',
        'I＝V/Z＝100/5＝20 A',
        'P＝I²R＝400×4＝1600 W ✓',
        'Q＝I²XL＝400×3＝1200 var、S＝VI＝2000 VA（検算OK）',
      ]} />
    </View>
  ),
  // ===== 電験三種・電力 =====
  dk3_denryoku_001: () => (
    <Steps title="水車出力の計算" steps={[
      '公式：P[kW]＝9.8×Q×H×η',
      '代入：P＝9.8×50×60×0.9',
      '計算：9.8×50＝490 → ×60＝29,400 → ×0.9＝26,460 kW',
      '≈26.5 MW ✓',
    ]} />
  ),
  dk3_denryoku_010: () => (
    <Steps title="%Zから三相短絡電流を求める" steps={[
      '定格電流：In＝S/(√3V)＝10,000k/(1.732×6.6k)≈875 A',
      '短絡電流：Is＝In×(100/%Z)',
      '代入：Is＝875×100/8≈10,935 A≈10.9 kA ✓',
    ]} />
  ),
  dk3_denryoku_014: () => (
    <Steps title="送電線の電圧降下の計算" steps={[
      '線電流：I＝P/(√3×VL×cosφ)＝20×10⁶/(1.732×66,000×0.8)≈219 A',
      '公式：ΔV＝√3×I×(Rcosφ＋Xsinφ)',
      'かっこ内：5×0.8＋10×0.6＝4＋6＝10',
      'ΔV＝1.732×219×10≈3,790 V≈3.8 kV ✓',
    ]} />
  ),
  dk3_denryoku_019: () => (
    <View>
      <TriangleDiagram base="P＝100kW" height="Q₁＝133kvar" hyp="S₁" angle="φ₁" title="力率改善前の電力三角形（cosφ₁=0.6）" />
      <Steps steps={[
        'cosφ₁=0.6 → tanφ₁＝0.8/0.6＝4/3',
        '現在の無効電力：Q₁＝P×tanφ₁＝100×4/3≈133 kvar',
        '力率1.0にする → Q₂＝0',
        '必要なコンデンサ：Qc＝Q₁−Q₂≈133 kvar ✓（三角形の高さを削る）',
      ]} />
    </View>
  ),
  dk3_denryoku_020: () => (
    <PeakCurve xLabel="負荷角 δ" yLabel="送電電力 P" peakX={0.5} peakLabel="δ=90°" note="P＝(V₁V₂/X)sinδ。δ=90°が安定限界（超えると脱調）" title="電力-負荷角（P-δ）カーブ" />
  ),
  dk3_denryoku_035: () => <TriangleDiagram base="P＝30MW" height="Q＝40Mvar" hyp="S＝50MVA" title="皮相電力と力率（3:4:5 → cosφ=0.6）" />,
  // ===== 電験三種・機械 =====
  dk3_kikai_009: () => <VCurve title="同期電動機のV曲線" />,
  dk3_kikai_011: () => (
    <PeakCurve xLabel="負荷角 δ" yLabel="出力 P" peakX={0.5} peakLabel="δ=90°" note="P＝3(EV/Xs)sinδ。安定運転はδ<90°の範囲" title="同期機の出力と負荷角" />
  ),
  dk3_kikai_014: () => (
    <Steps title="誘導電動機の電力の流れ" steps={[
      '比率の関係：二次入力P₂ : 二次銅損 : 機械出力＝1 : s : (1−s)',
      '二次入力：P₂＝二次銅損/s＝3/0.05＝60 kW',
      '機械出力：Pm＝P₂×(1−s)＝60×0.95＝57 kW ✓',
    ]} />
  ),
  dk3_kikai_016: () => (
    <PeakCurve xLabel="すべり s（→大）" yLabel="トルク T" peakX={0.35} peakLabel="sm≈r₂/x" note="r₂を増やすと山が低速側へ移動（高さは不変＝比例推移）" title="トルク-すべり曲線" />
  ),
  dk3_kikai_018: () => (
    <Steps title="最大効率となる負荷率" steps={[
      '条件：鉄損Pi＝銅損（銅損は負荷率mの2乗に比例）',
      'm²×Pc＝Pi → m＝√(Pi/Pc)',
      '代入：m＝√(500/2000)＝√0.25＝0.5',
      '最大効率負荷＝100×0.5＝50 kVA ✓',
    ]} />
  ),
  dk3_kikai_024: () => <RectifiedWave title="単相半波整流（平均値0.45V）" />,
  dk3_kikai_026: () => (
    <Steps title="降圧チョッパの出力" steps={[
      '公式：Vout＝D×E（Dはデューティ比）',
      '代入：Vout＝0.6×100＝60 V ✓',
      'ON時間の割合だけ電圧が出る（時間平均）と理解する',
    ]} />
  ),
  dk3_kikai_027: () => (
    <Steps title="昇圧チョッパの出力" steps={[
      '公式：Vout＝E/(1−D)',
      '代入：Vout＝50/(1−0.5)＝100 V ✓',
      'D→大 で出力→大（D=0.8なら5倍）。コイルの蓄積エネルギーを上乗せ',
    ]} />
  ),
  dk3_kikai_034: () => (
    <Steps title="光束法による灯数計算" steps={[
      '公式：N＝(E×A)/(F×U×M)',
      '分子：500 lx×200 m²＝100,000',
      '分母：3000 lm×0.6×0.8＝1,440',
      'N＝100,000/1,440≈69.4 → 70灯 ✓（切り上げ）',
    ]} />
  ),
  dk3_kikai_040: () => (
    <PeakCurve xLabel="すべり s" yLabel="トルク T" peakX={0.35} peakLabel="Tmax∝V²" note="電圧10%低下→最大トルク19%低下（0.9²=0.81）" title="最大トルクは電圧の2乗に比例" />
  ),
  // ===== 電験三種・法規（計算系） =====
  dk3_houki_034: () => (
    <Steps title="B種接地抵抗値の計算" steps={[
      '条件確認：1秒以内に自動遮断 → 使う式は 600/Ig',
      '代入：600/4＝150 Ω以下 ✓',
      '比較：遮断なし150/4=37.5Ω／2秒以内300/4=75Ω（速いほど緩和）',
    ]} />
  ),
  // ===== 建築設備士・模試（代表的な計算/図解問題） =====
  'kmogi-01': () => (
    <Steps title="単純梁（等分布荷重）の最大曲げモーメント" steps={[
      '公式：Mmax＝wL²/8（中央に生じる）',
      '代入：M＝6×8²/8＝6×64/8',
      '計算：＝6×8＝48 kN・m ✓',
    ]} />
  ),
  'kmogi-29': () => (
    <Steps title="CO₂濃度基準の必要換気量" steps={[
      '公式：Q＝M/(Ci−Co)（濃度は「差」を使う）',
      'CO₂発生量：M＝20人×0.02＝0.4 m³/h',
      '濃度差：(1000−400)ppm＝0.0006',
      'Q＝0.4/0.0006≈667 m³/h ✓（1人あたり約33m³/h）',
    ]} />
  ),
  // ===== 一級建築施工管理技士・模試 =====
  'smogi-05': () => (
    <Steps title="単純梁（中央集中荷重）の最大曲げモーメント" steps={[
      '支点反力：R＝P/2＝20 kN',
      'Mmax＝R×L/2＝20×3＝60 kN・m ✓（公式PL/4でも同じ）',
    ]} />
  ),
  'smogi-30': () => (
    <Steps title="クリティカルパスの計算" steps={[
      '全経路を列挙する（並行経路は同時進行）',
      '経路A：①→②→③→⑤→⑥＝5+6+7+3＝21日',
      '経路B：①→②→④→⑤→⑥＝5+4+6+3＝18日',
      '最長の経路A＝21日がCP（＝工期）✓ 経路Bの余裕TF=3日',
    ]} />
  ),
};

export function getDiagram(questionId: string): React.ReactNode | null {
  const f = REGISTRY[questionId];
  return f ? f() : null;
}

export function hasDiagram(questionId: string): boolean {
  return questionId in REGISTRY;
}
