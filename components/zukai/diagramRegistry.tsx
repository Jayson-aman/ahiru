import React from 'react';
import { View } from 'react-native';
import {
  TriangleDiagram, SeriesCircuit, ParallelConductors, PointChargeField,
  ExpCurve, PeakCurve, RectifiedWave, VCurve, VectorSum, YDeltaDiagram, Steps,
} from './ZukaiSvg';
import {
  SimpleBeamUDL, SimpleBeamPoint, SimpleBeamLoads,
  Cantilever, CantileverLoads, BeamQMDiagram, SupportTypes,
  Steps as KozoSteps,
} from './KozoSvg';
import {
  CombustionRangeBar, GasCylinder, CombustionCompare, HeinrichPyramid,
  StressConcentration, MultiStageCompressor, DBTTCurve, PDCACycle,
  LegalHierarchy, SafetyCultureLadder, FlowSteps, ComparePanel, TrendCurve,
  AlarmPlacement, RiskMatrix, CorrosionCell, VaporPressureCurve,
  SafetyDistance, TwoStageRegulator, DefenseLayers,
  SupplyConsumerBoundary, InspectionTimeline, ResponsibilityChart,
  ClearanceDistance, PressureScale, TemperaturePoints, HeatValueBar,
  VentilationTypes, PipeSupportSpan, HeatExchangerU,
  ProducerCategory, SafetyOrgChart, InspectionMatrix, ContainerMarking,
  PenaltyLadder, StorageCategory, GasLaws, LeChatelier, CatalystEnergy,
  HenryLaw, PHScale, AdiabaticPV, ConcentrationUnits,
  AirRatio, CombustionTypes, FlameAnomaly, FlueGasComposition, ProtectiveGear,
} from './GasSvg';

const GasSteps = Steps;

/** 同じ図解を複数の問題IDに割り当てる。 */
function gasEntry(ids: string[], render: () => React.ReactNode): Record<string, () => React.ReactNode> {
  return Object.fromEntries(ids.map(id => [id, render]));
}

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
  'kmogi-29': () => (
    <Steps title="CO₂濃度基準の必要換気量" steps={[
      '公式：Q＝M/(Ci−Co)（濃度は「差」を使う）',
      'CO₂発生量：M＝20人×0.02＝0.4 m³/h',
      '濃度差：(1000−400)ppm＝0.0006',
      'Q＝0.4/0.0006≈667 m³/h ✓（1人あたり約33m³/h）',
    ]} />
  ),
  // ===== 一級建築施工管理技士・模試 =====
  'smogi-30': () => (
    <Steps title="クリティカルパスの計算" steps={[
      '全経路を列挙する（並行経路は同時進行）',
      '経路A：①→②→③→⑤→⑥＝5+6+7+3＝21日',
      '経路B：①→②→④→⑤→⑥＝5+4+6+3＝18日',
      '最長の経路A＝21日がCP（＝工期）✓ 経路Bの余裕TF=3日',
    ]} />
  ),

  // ===== 電験・理論 追加分（41〜63） =====
  dk3_rikigaku_041: () => (
    <View>
      <SeriesCircuit items={[{ type: 'C', label: '10μF' }, { type: 'C', label: '20μF' }]} source="30V" title="コンデンサ直列の分圧" />
      <Steps steps={[
        '合成C＝積/和＝10×20/30＝20/3 μF',
        '共通電荷Q＝CV＝(20/3)×30＝200 μC',
        'V₁₀＝Q/C＝200/10＝20V ✓（小さい容量に大きい電圧）',
      ]} />
    </View>
  ),
  dk3_rikigaku_042: () => (
    <Steps title="電荷保存則（TAC H26型）" steps={[
      '孤立部分（b点）の電荷合計＝0（初期電荷0）',
      'ΣC(V相手−Vb)＝0 を立てる',
      '10(20−Vb)＋20(0−Vb)＋10(−10−Vb)＝0',
      '200−100＝40Vb → Vb＝2.5V ✓',
    ]} />
  ),
  dk3_rikigaku_044: () => (
    <PeakCurve xLabel="外部抵抗R" yLabel="供給電力P" peakX={0.35} peakLabel="R=r" note="整合条件R=rでPmax=E²/4r" title="最大電力供給の定理" />
  ),
  dk3_rikigaku_045: () => <PointChargeField positive title="直線電流の磁界 H=I/(2πr)（同心円状）" />,
  dk3_rikigaku_046: () => <ParallelConductors same title="電磁力 F=BIL（フレミング左手）" />,
  dk3_rikigaku_048: () => (
    <Steps title="環状鉄心のインダクタンス" steps={[
      'L＝μN²A/ℓ（N²に注意！）',
      'μ＝μrμ₀＝500×4π×10⁻⁷≈6.28×10⁻⁴',
      'N²A/ℓ＝200²×4×10⁻⁴/0.2＝80',
      'L≈6.28×10⁻⁴×80≈0.050H＝50mH ✓',
    ]} />
  ),
  dk3_rikigaku_051: () => (
    <View>
      <SeriesCircuit items={[{ type: 'R', label: 'R=30Ω' }, { type: 'L', label: 'XL=80Ω' }, { type: 'C', label: 'XC=40Ω' }]} title="RLC直列回路" />
      <TriangleDiagram base="R＝30Ω" height="X＝XL−XC＝40Ω" hyp="Z＝50Ω" title="正味リアクタンスで三角形（3:4:5）" />
    </View>
  ),
  dk3_rikigaku_056: () => (
    <Steps title="分流器の倍率" steps={[
      '倍率n＝1＋r/Rs＝1＋9/1＝10倍',
      '最大測定電流＝10mA×10＝100mA ✓',
      '検算：電流計10mA×9Ω＝分流器90mA×1Ω（同電圧）',
    ]} />
  ),
  dk3_rikigaku_058: () => (
    <View>
      <TriangleDiagram base="P＝500W" height="Q＝866var" hyp="S＝1000VA" angle="60°" title="位相差60°の電力三角形" />
      <Steps steps={[
        '実効値：V＝141/√2＝100V、I＝14.1/√2＝10A',
        '位相差φ＝π/3＝60°→cosφ＝0.5',
        'P＝VIcosφ＝100×10×0.5＝500W ✓',
      ]} />
    </View>
  ),
  dk3_rikigaku_060: () => <RectifiedWave full title="全波整流（平均値0.9V）" />,
  // ===== 電験・電力 追加分 =====
  dk3_denryoku_041: () => (
    <Steps title="発電機出力の計算" steps={[
      '理論出力＝9.8QH＝9.8×20×100＝19,600kW',
      '×水車効率0.88→17,248kW',
      '×発電機効率0.96→16,558kW≈16.6MW ✓',
    ]} />
  ),
  dk3_denryoku_043: () => (
    <Steps title="%Zの基準容量換算" steps={[
      '%Zは基準容量に比例する',
      '%Z(100MVA)＝7.5×(100/20)＝37.5% ✓',
      '合成時は全機器を同一基準に揃えてから直並列計算',
    ]} />
  ),
  dk3_denryoku_044: () => (
    <Steps title="たるみ（弛度）の計算" steps={[
      'D＝wS²/(8T)',
      '＝20×200²/(8×20,000)',
      '＝800,000/160,000＝5.0m ✓',
    ]} />
  ),
  dk3_denryoku_047: () => (
    <Steps title="三相配電線の損失計算" steps={[
      'I＝P/(√3VLcosφ)＝30,000/(1.732×200×0.8)≈108.3A',
      'PL＝3I²R＝3×108.3²×0.5≈17.6kW ✓',
      '損失率59%!→低圧大電流の配電が不利な理由',
    ]} />
  ),
  dk3_denryoku_051: () => (
    <Steps title="合成最大需要電力" steps={[
      'Σ各最大需要＝設備×需要率＝500×0.6＝300kW',
      '合成最大＝Σ最大÷不等率＝300/1.25＝240kW ✓',
      '（不等率≥1：ピークがずれる分だけ小さくなる）',
    ]} />
  ),
  dk3_denryoku_062: () => (
    <Steps title="揚水電動機入力（効率で割る！）" steps={[
      '理論動力＝9.8QH＝9.8×30×200＝58,800kW',
      '÷ポンプη0.85÷電動機η0.95',
      '＝58,800/0.8075≈72.8MW ✓',
      '発電＝効率を掛ける／揚水＝効率で割る★',
    ]} />
  ),
  // ===== 電験・機械 追加分 =====
  dk3_kikai_041: () => (
    <Steps title="誘導電動機の回転速度" steps={[
      'Ns＝120f/P＝120×60/4＝1,800min⁻¹',
      'N＝Ns(1−s)＝1,800×0.96＝1,728min⁻¹ ✓',
    ]} />
  ),
  dk3_kikai_042: () => (
    <Steps title="二次銅損（1:s:(1−s)）" steps={[
      'P₂:銅損:機械出力＝1:s:(1−s)',
      '銅損＝sP₂＝0.03×50＝1.5kW ✓',
      '機械出力＝(1−s)P₂＝48.5kW',
    ]} />
  ),
  dk3_kikai_043: () => (
    <Steps title="電動機の線電流" steps={[
      '入力＝出力/効率＝15,000/0.9≈16,667W',
      'I＝入力/(√3Vcosφ)',
      '＝16,667/(1.732×200×0.85)≈57A ✓',
    ]} />
  ),
  dk3_kikai_044: () => (
    <Steps title="インピーダンスのa²換算" steps={[
      'V₁＝aV₂、I₁＝I₂/a',
      'Z₁＝V₁/I₁＝a²Z₂',
      '＝20²×8＝3,200Ω＝3.2kΩ ✓',
    ]} />
  ),
  dk3_kikai_052: () => (
    <Steps title="変圧器の効率" steps={[
      '出力＝50,000W（力率1）',
      '損失＝鉄損400＋銅損900＝1,300W',
      'η＝50,000/51,300≈97.5% ✓',
    ]} />
  ),
  dk3_kikai_053: () => (
    <PeakCurve xLabel="すべり s" yLabel="トルク T" peakX={0.35} peakLabel="Tmax∝V²" note="電圧10%低下→Tmax19%低下・滑り増・電流増" title="電圧低下と誘導機" />
  ),
  dk3_kikai_062: () => (
    <Steps title="巻上機の所要出力" steps={[
      'v＝30m/min÷60＝0.5m/s',
      '理論動力＝Wv＝9.8×0.5＝4.9kW',
      '÷効率0.8→6.125kW ✓（効率で割る）',
    ]} />
  ),
  // ===== 電験・法規 追加分 =====
  dk3_houki_042: () => (
    <Steps title="幹線許容電流の計算" steps={[
      'IM(40)＞IH(30)かつIM≦50A→係数1.25',
      'Ia≧1.25×40＋30＝80A ✓',
      '（IM>50Aなら1.1倍／IM≦IHなら割増なし）',
    ]} />
  ),
  dk3_houki_047: () => (
    <Steps title="調整池の必要貯水量" steps={[
      '発電中の不足＝25−10＝15m³/s',
      '8時間分＝15×3,600×8＝432,000m³＝43.2万m³ ✓',
      '検算：停止16hの貯水57.6万m³≧43.2万m³で成立',
    ]} />
  ),
  dk3_houki_049: () => (
    <View>
      <TriangleDiagram base="P＝200kW" height="Q₁=150→Q₂=66kvar" hyp="S" title="力率改善0.8→0.95" />
      <Steps steps={[
        'Q₁＝P·tanφ₁＝200×0.75＝150kvar',
        'Q₂＝P·tanφ₂＝200×0.329≈66kvar',
        'Qc＝Q₁−Q₂≈84kvar ✓',
      ]} />
    </View>
  ),
  dk3_houki_052: () => (
    <Steps title="日負荷率の計算" steps={[
      '平均電力＝4,800kWh÷24h＝200kW',
      '負荷率＝平均/最大＝200/250＝80% ✓',
      '（分母は最大需要電力。契約電力ではない★）',
    ]} />
  ),
  dk3_houki_054: () => (
    <Steps title="B種接地の計算（1.2秒遮断）" steps={[
      '遮断1秒超2秒以内→式は300/Ig',
      '300/5＝60Ω以下 ✓',
      '（なし150/Ig・1秒以内600/Igと使い分け）',
    ]} />
  ),
  dk3_houki_056: () => (
    <Steps title="変圧器の皮相容量" steps={[
      'S＝P/cosφ＝80/0.8＝100kV·A',
      '→100kV·A変圧器はちょうど100%使用 ✓',
      '力率0.95に改善→S=84.2kV·Aで余裕が生まれる',
    ]} />
  ),
  // ===== 施工管理 追加分 =====
  'souyou-031': () => (
    <Steps title="フリーフロートの計算" steps={[
      '作業AのEFT＝EST＋所要＝10＋5＝15日',
      'FF＝後続のEST−EFT＝18−15＝3日 ✓',
      '（FF≦TF。FFは後続に影響しない余裕）',
    ]} />
  ),
  // ===== 構造力学：単純梁・片持ち梁（SVGで実際の形を描く） =====
  'souyou-021': () => (
    <View>
      <SimpleBeamUDL w="w＝8kN/m" L="L＝6m" title="単純梁＋等分布荷重" />
      <BeamQMDiagram load="udl" />
      <KozoSteps title="最大曲げモーメントの計算" steps={[
        '公式：Mmax＝wL²/8（Q＝0となる中央で最大）',
        '代入：8×6²/8',
        '計算：8×36÷8＝36 kN・m ✓',
        '反力：R＝wL/2＝8×6/2＝24kN（両支点とも）',
      ]} />
    </View>
  ),
  'skiso-081': () => (
    <View>
      <SimpleBeamUDL w="w＝16kN/m" L="L＝6m" title="単純梁＋等分布荷重（長期荷重）" />
      <BeamQMDiagram load="udl" />
      <KozoSteps title="最大曲げモーメントの計算" steps={[
        '公式：Mmax＝wL²/8',
        '代入：16×6²/8',
        '計算：16×36÷8＝72 kN・m ✓',
        '反力：R＝wL/2＝48kN',
      ]} />
    </View>
  ),
  'ip2-093': () => (
    <View>
      <SimpleBeamUDL w="w＝10kN/m" L="L＝8m" title="単純梁＋等分布荷重" />
      <BeamQMDiagram load="udl" />
      <KozoSteps title="最大曲げモーメントの計算" steps={[
        '公式：Mmax＝wL²/8',
        '代入：10×8²/8',
        '計算：10×64÷8＝80 kN・m ✓',
      ]} />
    </View>
  ),
  'kmogi-01': () => (
    <View>
      <SimpleBeamUDL w="w＝6kN/m" L="L＝8m" title="単純梁＋等分布荷重" />
      <BeamQMDiagram load="udl" />
      <KozoSteps title="最大曲げモーメントの計算" steps={[
        '公式：Mmax＝wL²/8',
        '代入：6×8²/8',
        '計算：6×64÷8＝48 kN・m ✓',
      ]} />
    </View>
  ),
  'kozo-001': () => (
    <View>
      <SimpleBeamPoint P="P" L="L" title="単純梁＋中央集中荷重" />
      <BeamQMDiagram load="point" />
      <KozoSteps title="公式の導き方" steps={[
        '反力：対称なので R＝P/2（両支点）',
        '中央の曲げモーメント：M＝R×(L/2)＝(P/2)×(L/2)',
        'したがって Mmax＝PL/4 ✓（M図は中央が頂点の三角形）',
      ]} />
    </View>
  ),
  'smogi-05': () => (
    <View>
      <SimpleBeamPoint P="P＝40kN" L="L＝6m" title="単純梁＋中央集中荷重" />
      <BeamQMDiagram load="point" />
      <KozoSteps title="最大曲げモーメントの計算" steps={[
        '公式：Mmax＝PL/4（中央）',
        '代入：40×6/4',
        '計算：240÷4＝60 kN・m ✓',
      ]} />
    </View>
  ),
  'ip2-009': () => (
    <View>
      <SimpleBeamPoint P="P＝40kN" L="L＝6m" title="単純梁＋中央集中荷重" />
      <BeamQMDiagram load="point" />
      <KozoSteps title="最大曲げモーメントの計算" steps={[
        '公式：Mmax＝PL/4',
        '代入：40×6/4＝60 kN・m ✓',
      ]} />
    </View>
  ),
  'skyoka-107': () => (
    <View>
      <SimpleBeamPoint P="P＝40kN" L="L＝8m" title="単純梁＋中央集中荷重" />
      <BeamQMDiagram load="point" />
      <KozoSteps title="最大曲げモーメントの計算" steps={[
        '公式：Mmax＝PL/4',
        '代入：40×8/4',
        '計算：320÷4＝80 kN・m ✓',
      ]} />
    </View>
  ),
  'kozo-015': () => (
    <View>
      <SimpleBeamPoint P="P" L="L" title="単純梁＋中央集中荷重のたわみ" />
      <KozoSteps title="たわみの公式" steps={[
        '中央集中荷重：δ＝PL³/(48EI) ✓',
        '（等分布荷重の場合は δ＝5wL⁴/(384EI)）',
        'Lの3乗・4乗で効くので、スパンが伸びるとたわみは急増する★',
        'EI（曲げ剛性）が大きいほどたわみは小さい',
      ]} />
    </View>
  ),
  'souyou-056': () => (
    <View>
      <SimpleBeamLoads
        L="L＝10m"
        RA="RA＝27kN"
        RB="RB＝23kN"
        loads={[
          { label: 'P1＝30kN', pos: 0.3, at: 'A から3m' },
          { label: 'P2＝20kN', pos: 0.7, at: 'A から7m' },
        ]}
        title="単純梁＋集中荷重2つ"
        note="反力は「反対側の支点まわりのモーメントのつり合い」で求める。"
      />
      <KozoSteps title="支点反力RAの求め方" steps={[
        'B点まわりのモーメントのつり合い ΣMB＝0 をとる',
        'RA×10 ＝ P1×(10−3) ＋ P2×(10−7)',
        '＝30×7 ＋ 20×3 ＝ 210＋60 ＝ 270',
        'RA ＝ 270÷10 ＝ 27 kN ✓',
        '検算：RB＝(30＋20)−27＝23 kN（鉛直のつり合い）',
      ]} />
    </View>
  ),
  'kozo-002': () => (
    <View>
      <Cantilever load="point" P="P" L="L" title="片持ち梁＋先端集中荷重" />
      <KozoSteps title="固定端のせん断力" steps={[
        'せん断力は「その断面より先にある荷重の合計」',
        '片持ち梁の固定端より先にある荷重は P だけ',
        'したがって Qmax＝P ✓（位置によらず一定）',
        '一方、曲げモーメントは M＝PL で固定端が最大★',
      ]} />
    </View>
  ),
  'souyou-036': () => (
    <View>
      <Cantilever load="point" P="P＝6kN" L="L＝3m" title="片持ち梁＋先端集中荷重" />
      <KozoSteps title="固定端モーメントの計算" steps={[
        '公式：M＝P×L（荷重×固定端までの距離）',
        '代入：6×3',
        '計算：18 kN・m ✓',
      ]} />
    </View>
  ),
  'ip2-021': () => (
    <View>
      <Cantilever load="point" P="P＝15kN" L="L＝2m" title="片持ち梁＋先端集中荷重" />
      <KozoSteps title="固定端モーメントの計算" steps={[
        '公式：M＝P×L',
        '代入：15×2＝30 kN・m ✓',
      ]} />
    </View>
  ),
  'souyou-071': () => (
    <View>
      <CantileverLoads
        L="L＝6m"
        M="M＝56kN・m"
        loads={[
          { label: 'P1＝8kN', pos: 0.667, at: '固定端から4m' },
          { label: 'P2＝4kN', pos: 1.0, at: '自由端（6m）' },
        ]}
        title="片持ち梁＋集中荷重2つ"
        note="各荷重について「荷重×固定端までの距離」を求め、合計する。"
      />
      <KozoSteps title="固定端モーメントの計算" steps={[
        'P1の寄与：8kN×4m ＝ 32 kN・m',
        'P2の寄与：4kN×6m ＝ 24 kN・m',
        '合計：32＋24 ＝ 56 kN・m ✓',
        '距離は「固定端から荷重までの長さ」で数える★',
      ]} />
    </View>
  ),

  // ===== LPガス =====
  ...gasEntry(
    ['lp-q-ne-013', 'lp-q-ne-117', 'lp-q-ne-153', 'ka-q-ho-001', 'ka-q-gk-084'],
    () => (
      <CombustionRangeBar
        title="燃焼範囲（爆発範囲）"
        gases={[
          { name: 'プロパン', lower: 2.1, upper: 9.5, color: '#D32F2F' },
          { name: 'ブタン', lower: 1.9, upper: 8.4, color: '#E65100' },
          { name: '水素（参考）', lower: 4.0, upper: 75, color: '#1E5FBE' },
        ]}
      />
    )
  ),
  ...gasEntry(['ka-q-gk-040'], () => (
    <View>
      <CombustionRangeBar
        title="燃焼範囲は温度で変化する"
        gases={[
          { name: '常温', lower: 2.1, upper: 9.5, color: '#1E5FBE' },
          { name: '高温', lower: 1.6, upper: 11.5, color: '#D32F2F' },
        ]}
      />
      <GasSteps title="温度依存性のポイント" steps={[
        '温度が上がると分子運動が活発になり反応性が高まる',
        '下限界は下がり、上限界は上がる → 範囲が広がる',
        '高温環境では常温データより広い濃度域を危険とみなす★',
      ]} />
    </View>
  )),
  ...gasEntry(['lp-q-ho-025', 'lp-q-ki-117', 'lp-q-ky-015'], () => (
    <GasCylinder fillPct={85} title="LPガス容器の充填率と安全弁" />
  )),
  ...gasEntry(
    ['lp-q-ne-001', 'lp-q-ne-056', 'lp-q-ne-116', 'lp-q-ne-023', 'lp-q-ne-154', 'lp-q-ne-005', 'lp-q-ne-158', 'lp-q-sh-047'],
    () => <CombustionCompare title="完全燃焼と不完全燃焼" />
  ),
  ...gasEntry(['lp-q-ki-005', 'lp-q-ki-023', 'lp-q-ki-119'], () => (
    <ComparePanel
      title="プロパンとブタンの物性比較"
      left={{ head: 'プロパン C₃H₈', items: ['沸点 −42℃', '低温でも気化しやすい', '冬期・寒冷地に適する', '同温度で蒸気圧が高い'] }}
      right={{ head: 'ブタン C₄H₁₀', items: ['沸点 −0.5℃', '低温では気化しにくい', '夏期・温暖地向き', '同温度で蒸気圧が低い'] }}
      note="⚠ 日本のLPガスがプロパン主体なのは冬期の気化確保のため"
    />
  )),
  ...gasEntry(['lp-q-ky-151'], () => (
    <FlowSteps
      title="LPガス供給の全体フロー"
      steps={[
        { label: '輸入・製造', sub: '一次基地' },
        { label: '二次基地', sub: '貯蔵' },
        { label: '充填所', sub: '容器充填' },
        { label: '販売店', sub: '配送' },
        { label: '消費者', sub: '使用' },
      ]}
      note="⚠ 各段階に保安責任があり、全体で安全が確保される"
    />
  )),
  ...gasEntry(['lp-q-ho-056', 'lp-q-ho-120', 'ka-q-hr-039', 'ka-q-hr-067', 'ka-q-ho-r116', 'ka-q-ho-r124', 'ka-q-ho-r142'], () => (
    <LegalHierarchy title="保安法令の階層構造" />
  )),

  // ===== 高圧ガス =====
  ...gasEntry(['ka-q-ho-029', 'ka-q-ho-121'], () => (
    <HeinrichPyramid title="ハインリッヒの法則（1:29:300）" />
  )),
  ...gasEntry(['ka-q-gk-048', 'ka-q-gk-101', 'ka-q-gm-109', 'ka-q-gm-115'], () => (
    <StressConcentration title="開口部まわりの応力集中" />
  )),
  ...gasEntry(['ka-q-gm-058', 'ka-q-gm-061', 'ka-q-gm-140'], () => (
    <MultiStageCompressor stages={3} title="多段圧縮と中間冷却" />
  )),
  ...gasEntry(['ka-q-gm-014', 'ka-q-gm-023', 'ka-q-gm-119', 'ka-q-gk-062'], () => (
    <DBTTCurve title="延性脆性遷移温度（低温脆性）" />
  )),
  ...gasEntry(['ka-q-ho-132', 'ka-q-ho-152'], () => (
    <PDCACycle title="PDCAサイクルによる継続的改善" />
  )),
  ...gasEntry(['ka-q-ho-063', 'ka-q-ho-120'], () => (
    <SafetyCultureLadder title="安全文化の成熟度段階" />
  )),
  ...gasEntry(['ka-q-gk-115'], () => (
    <TrendCurve
      title="圧縮率因子 Z と実在気体のずれ"
      xLabel="圧力 P →"
      yLabel="Z"
      path="M 46 74 Q 90 92 130 88 Q 190 82 280 34"
      zones={[
        { x: 40, w: 96, color: '#2E7D32', label: '低圧：Z≒1' },
        { x: 176, w: 112, color: '#D32F2F', label: '高圧：Zが1から乖離' },
      ]}
      note="⚠ 高圧設計では理想気体の式をそのまま使えない"
    />
  )),
  ...gasEntry(['ka-q-gm-116'], () => (
    <TrendCurve
      title="S-N曲線（疲労寿命）"
      xLabel="繰り返し回数 N →"
      yLabel="応力振幅"
      path="M 46 34 Q 110 52 160 82 Q 210 108 282 112"
      zones={[
        { x: 40, w: 100, color: '#D32F2F', label: '高応力：短寿命' },
        { x: 180, w: 108, color: '#2E7D32', label: '疲労限度に漸近' },
      ]}
      note="⚠ 繰り返し荷重の累積が疲労破壊を招く"
    />
  )),

  // ===== 追加分 =====
  ...gasEntry(['lp-q-sh-001', 'lp-q-sh-022', 'lp-q-sh-055', 'lp-q-ki-041'], () => (
    <AlarmPlacement title="ガス漏れ警報器の設置位置" />
  )),
  ...gasEntry(['ka-q-ho-105', 'ka-q-ho-119', 'ka-q-ho-126'], () => (
    <RiskMatrix title="リスクアセスメント・マトリクス" />
  )),
  ...gasEntry(['ka-q-gk-002', 'ka-q-gk-022', 'ka-q-gk-031', 'ka-q-gk-118', 'ka-q-ho-016'], () => (
    <CorrosionCell title="腐食電池（電気化学的な腐食）" />
  )),
  ...gasEntry(['lp-q-ki-013', 'lp-q-ki-032', 'lp-q-ki-040', 'lp-q-ki-044'], () => (
    <VaporPressureCurve title="蒸気圧曲線（温度と飽和蒸気圧）" />
  )),
  ...gasEntry(['lp-q-ky-096', 'ka-q-ho-022', 'ka-q-ho-030', 'ka-q-ho-r122'], () => (
    <SafetyDistance title="保安距離の考え方" />
  )),
  ...gasEntry(['lp-q-ky-001', 'lp-q-ky-020', 'lp-q-ky-049', 'lp-q-ky-078'], () => (
    <TwoStageRegulator title="二段減圧方式の圧力段階" />
  )),
  ...gasEntry(['lp-q-sh-074', 'ka-q-ho-013', 'ka-q-ho-135', 'ka-q-gk-068'], () => (
    <DefenseLayers title="多重防護の考え方" />
  )),
  ...gasEntry(['ka-q-gm-027', 'ka-q-gm-038', 'ka-q-gm-123'], () => (
    <ComparePanel
      title="非破壊検査手法の使い分け"
      left={{ head: '内部の欠陥', items: ['RT：放射線透過試験', 'UT：超音波探傷試験', '空洞・介在物を検出', '溶接部の内部品質確認'] }}
      right={{ head: '表面の欠陥', items: ['PT：浸透探傷試験', 'MT：磁粉探傷試験', 'き裂・ピンホールを検出', 'MTは磁性材料のみ'] }}
      note="⚠ 欠陥の位置に応じて手法を選ぶ"
    />
  )),
  ...gasEntry(['ka-q-ho-046', 'ka-q-ho-133'], () => (
    <FlowSteps
      title="作業許可制度（パーミット）の流れ"
      steps={[
        { label: '作業申請', sub: '内容を明記' },
        { label: 'リスク評価', sub: '危険源の特定' },
        { label: '事前確認', sub: 'ガス濃度測定' },
        { label: '許可発行', sub: '責任者承認' },
        { label: '作業開始', sub: '監視下で実施' },
      ]}
      note="⚠ 許可なき着手が重大事故を招く"
    />
  )),
  ...gasEntry(['lp-q-ky-003', 'lp-q-ky-025'], () => (
    <FlowSteps
      title="気化装置（ベーパライザー）の役割"
      steps={[
        { label: '容器', sub: '液相LPガス' },
        { label: '気化器', sub: '加温して気化' },
        { label: '調整器', sub: '減圧' },
        { label: '燃焼器', sub: '安定供給' },
      ]}
      note="⚠ 冬期・大量消費時の気化能力不足を補う"
    />
  )),

  // ===== 第3次拡充：法令・消費分野の強化 =====
  ...gasEntry(['lp-q-ho-028', 'lp-q-ky-050', 'lp-q-ky-012', 'lp-q-ky-027', 'lp-q-ky-154'], () => (
    <SupplyConsumerBoundary title="供給設備と消費設備の区分" />
  )),
  ...gasEntry(
    ['lp-q-ho-083', 'lp-q-ky-055', 'lp-q-ky-097', 'lp-q-sh-010', 'lp-q-sh-034',
     'lp-q-sh-057', 'lp-q-sh-059', 'lp-q-sh-082', 'lp-q-ne-043'],
    () => <InspectionTimeline title="点検・交換の周期" />
  ),
  ...gasEntry(
    ['lp-q-ho-002', 'lp-q-ho-026', 'lp-q-ho-029', 'lp-q-ho-035', 'lp-q-ho-051',
     'lp-q-ho-058', 'lp-q-ho-061', 'lp-q-ho-072', 'lp-q-ky-016'],
    () => <ResponsibilityChart title="保安体制の役割分担" />
  ),
  ...gasEntry(['lp-q-sh-026', 'lp-q-sh-041', 'lp-q-sh-060', 'lp-q-ky-023', 'lp-q-ky-031'], () => (
    <ClearanceDistance title="燃焼器具の離隔距離" />
  )),
  ...gasEntry(['lp-q-ki-058', 'lp-q-ki-068'], () => (
    <PressureScale title="圧力単位のスケールと換算" />
  )),
  ...gasEntry(['lp-q-ki-026', 'lp-q-ki-066', 'lp-q-ki-089', 'lp-q-ne-007'], () => (
    <TemperaturePoints title="引火点と発火点の違い" />
  )),
  ...gasEntry(['lp-q-ki-004', 'lp-q-ki-055', 'lp-q-ki-090', 'lp-q-ki-097', 'lp-q-ne-060'], () => (
    <HeatValueBar title="高発熱量と低発熱量" />
  )),
  ...gasEntry(['lp-q-sh-011', 'lp-q-sh-017', 'lp-q-sh-023', 'lp-q-sh-028', 'lp-q-sh-046', 'lp-q-ne-082'], () => (
    <VentilationTypes title="燃焼器具の給排気方式" />
  )),
  ...gasEntry(['ka-q-gm-051', 'ka-q-gm-131'], () => (
    <PipeSupportSpan title="配管の支持間隔とたわみ" />
  )),
  ...gasEntry(
    ['ka-q-gm-010', 'ka-q-gm-046', 'ka-q-gm-084', 'ka-q-gm-089',
     'ka-q-gm-093', 'ka-q-gm-098', 'ka-q-gm-104', 'ka-q-gm-108'],
    () => <HeatExchangerU title="熱交換器（U字管型）の構造" />
  ),

  // 既存コンポーネントの再利用
  ...gasEntry(['lp-q-ki-036'], () => (
    <ComparePanel
      title="LPガスと都市ガスの違い"
      left={{ head: 'LPガス', items: ['プロパン主体', '空気より重い（約1.5）', '容器で個別配送', '発熱量が大きい'] }}
      right={{ head: '都市ガス', items: ['メタン主体', '空気より軽い（約0.55）', '導管で供給', '発熱量は約半分'] }}
      note="⚠ 比重の違いが警報器の設置位置を分ける"
    />
  )),
  ...gasEntry(['lp-q-ky-018', 'lp-q-ky-022', 'lp-q-ky-098', 'lp-q-sh-003'], () => (
    <ComparePanel
      title="鋼管とポリエチレン管（PE管）"
      left={{ head: '鋼管', items: ['強度が高い', '腐食対策が必要', 'ねじ・溶接で接合', '露出配管に適する'] }}
      right={{ head: 'PE管', items: ['腐食しない', '可とう性があり耐震的', '融着で接合', '埋設配管に適する'] }}
      note="⚠ 埋設部の腐食対策が材料選定の分かれ目"
    />
  )),
  ...gasEntry(['lp-q-ki-092'], () => (
    <ComparePanel
      title="容器安全弁の型式"
      left={{ head: '溶栓式', items: ['金属が溶けて開放', '一度作動すると戻らない', '主に温度で作動', '全量を放出'] }}
      right={{ head: 'ばね式', items: ['ばね力に打ち勝って開く', '圧力低下で再閉止', '主に圧力で作動', '過圧分だけ放出'] }}
      note="⚠ 作動要因（温度か圧力か）で区別する"
    />
  )),
  ...gasEntry(['lp-q-ky-032', 'lp-q-ky-060'], () => (
    <FlowSteps
      title="容器交換作業の手順"
      steps={[
        { label: '閉栓', sub: '容器バルブを閉' },
        { label: '取外し', sub: '残ガス確認' },
        { label: '新容器', sub: '設置・固定' },
        { label: '接続', sub: '調整器を締結' },
        { label: '漏れ検査', sub: '開栓して確認' },
      ]}
      note="⚠ 最後の漏えい検査を省略しない"
    />
  )),
  ...gasEntry(['lp-q-ho-108', 'lp-q-sh-061', 'ka-q-ho-015', 'ka-q-ho-052'], () => (
    <FlowSteps
      title="ガス漏えい時の初動対応"
      steps={[
        { label: '火気厳禁', sub: '電気操作も不可' },
        { label: '元栓閉止', sub: '供給を止める' },
        { label: '換気', sub: '窓を開ける' },
        { label: '退避', sub: '安全な場所へ' },
        { label: '通報', sub: '販売店・消防' },
      ]}
      note="⚠ 換気扇のスイッチは着火源になる"
    />
  )),
  ...gasEntry(['ka-q-hr-038'], () => <SafetyDistance title="製造施設の位置に関する基準" />),
  ...gasEntry(['ka-q-gm-076'], () => <StressConcentration title="ノズル配置と応力集中" />),

  // ===== 第4次拡充：高圧ガス 法令・学識(化学)の底上げ =====
  ...gasEntry(
    ['ka-q-hr-004', 'ka-q-hr-019', 'ka-q-hr-033', 'ka-q-hr-046', 'ka-q-hr-050',
     'ka-q-hr-055', 'ka-q-hr-090', 'ka-q-ho-r133'],
    () => <ProducerCategory title="第一種製造者と第二種製造者" />
  ),
  ...gasEntry(
    ['ka-q-hr-049', 'ka-q-hr-051', 'ka-q-hr-076', 'ka-q-hr-086', 'ka-q-hr-097', 'ka-q-hr-101'],
    () => <SafetyOrgChart title="保安組織の階層と選任" />
  ),
  ...gasEntry(
    ['ka-q-hr-013', 'ka-q-hr-020', 'ka-q-hr-029', 'ka-q-hr-030',
     'ka-q-hr-042', 'ka-q-hr-074', 'ka-q-ho-r154'],
    () => <InspectionMatrix title="検査制度の種類と位置づけ" />
  ),
  ...gasEntry(['ka-q-hr-024', 'ka-q-hr-044', 'ka-q-hr-085', 'ka-q-ho-r153'], () => (
    <ContainerMarking title="容器の塗色と刻印" />
  )),
  ...gasEntry(['ka-q-hr-014', 'ka-q-hr-041', 'ka-q-hr-107', 'ka-q-hr-113', 'ka-q-ho-r138'], () => (
    <PenaltyLadder title="行政処分と罰則の段階" />
  )),
  ...gasEntry(['ka-q-hr-006', 'ka-q-hr-023', 'ka-q-hr-032', 'ka-q-hr-047', 'ka-q-hr-089'], () => (
    <StorageCategory title="貯蔵所の区分と移動の規制" />
  )),
  ...gasEntry(['ka-q-gk-001', 'ka-q-gk-004', 'ka-q-gk-025'], () => (
    <GasLaws title="ボイル・シャルルの法則と状態方程式" />
  )),
  ...gasEntry(['ka-q-gk-020', 'ka-q-gk-061', 'ka-q-gk-095'], () => (
    <LeChatelier title="ルシャトリエの原理" />
  )),
  ...gasEntry(['ka-q-gk-018', 'ka-q-gk-021', 'ka-q-gk-066'], () => (
    <CatalystEnergy title="触媒と活性化エネルギー" />
  )),
  ...gasEntry(['ka-q-gk-012', 'ka-q-gk-047', 'ka-q-gk-120'], () => (
    <HenryLaw title="ヘンリーの法則（溶解度と圧力）" />
  )),
  ...gasEntry(['ka-q-gk-009', 'ka-q-gk-079', 'ka-q-gk-091'], () => (
    <PHScale title="pHスケールと酸・アルカリ" />
  )),
  ...gasEntry(['ka-q-gk-060', 'ka-q-gk-116', 'ka-q-gk-123'], () => (
    <AdiabaticPV title="断熱変化のP-V線図" />
  )),
  ...gasEntry(['ka-q-gk-052', 'ka-q-gk-076'], () => (
    <ConcentrationUnits title="濃度の表し方" />
  )),

  // ===== 第5次拡充：燃焼分野と保安管理の仕上げ =====
  ...gasEntry(
    ['lp-q-ne-002', 'lp-q-ne-018', 'lp-q-ne-021', 'lp-q-ne-024',
     'lp-q-ne-091', 'lp-q-ne-104', 'lp-q-ne-156'],
    () => <AirRatio title="理論空気量と空気比" />
  ),
  ...gasEntry(['lp-q-ne-004', 'lp-q-ne-015', 'lp-q-ne-031', 'lp-q-ne-076'], () => (
    <CombustionTypes title="予混合燃焼と拡散燃焼" />
  )),
  ...gasEntry(['lp-q-ne-022', 'lp-q-ne-026', 'lp-q-ne-046', 'lp-q-ne-089'], () => (
    <FlameAnomaly title="炎の異常（逆火・リフティング・イエローチップ）" />
  )),
  ...gasEntry(
    ['lp-q-ne-010', 'lp-q-ne-019', 'lp-q-ne-028', 'lp-q-ne-050', 'lp-q-ne-054'],
    () => <FlueGasComposition title="排ガス成分と燃焼状態" />
  ),
  ...gasEntry(
    ['ka-q-ho-011', 'ka-q-ho-047', 'ka-q-ho-099', 'ka-q-ho-129'],
    () => <ProtectiveGear title="保護具の選定" />
  ),
  ...gasEntry(['ka-q-ho-008', 'ka-q-ho-024', 'ka-q-ho-031', 'ka-q-ho-130'], () => (
    <DefenseLayers
      title="緊急遮断装置とインターロック"
      layers={[
        { name: '常時監視', desc: '圧力・温度・流量を計測', color: '#1E5FBE' },
        { name: '警報', desc: 'しきい値超過を知らせる', color: '#2E7D32' },
        { name: 'インターロック', desc: '危険な操作を機械的に禁止', color: '#E65100' },
        { name: '緊急遮断弁', desc: '流れを止める最終手段', color: '#D32F2F' },
      ]}
    />
  )),
  ...gasEntry(['ka-q-ho-049', 'ka-q-ho-071', 'ka-q-ho-081', 'ka-q-ho-122', 'ka-q-ho-137'], () => (
    <PDCACycle
      title="教育訓練の計画と改善"
      labels={['計画 立案', '訓練 実施', '効果 測定', '内容 改善']}
    />
  )),
};

export function getDiagram(questionId: string): React.ReactNode | null {
  const f = REGISTRY[questionId];
  return f ? f() : null;
}

export function hasDiagram(questionId: string): boolean {
  return questionId in REGISTRY;
}
