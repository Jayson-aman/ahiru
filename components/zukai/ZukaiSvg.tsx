import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Line, Path, Circle, Rect, Text as SvgText, Polygon, G } from 'react-native-svg';

// カラーパレット（TAC風のフルカラー配色）
export const C = {
  blue: '#1E5FBE', red: '#D32F2F', green: '#2E7D32', orange: '#E65100',
  gray: '#607D8B', dark: '#1A2A44', light: '#90A4AE',
};

const box = { width: '100%' as const, aspectRatio: undefined as number | undefined };

function Wrap({ children, ratio = 1.8, title }: { children: React.ReactNode; ratio?: number; title?: string }) {
  return (
    <View style={s.wrap}>
      {title ? <Text style={s.title}>📐 {title}</Text> : null}
      <View style={{ width: '100%', aspectRatio: ratio }}>{children}</View>
    </View>
  );
}

/** 矢印付き直線 */
export function Arrow({ x1, y1, x2, y2, color = C.red, w = 2.5 }: { x1: number; y1: number; x2: number; y2: number; color?: string; w?: number }) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const L = 9;
  const p1 = `${x2},${y2}`;
  const p2 = `${x2 - L * Math.cos(ang - 0.42)},${y2 - L * Math.sin(ang - 0.42)}`;
  const p3 = `${x2 - L * Math.cos(ang + 0.42)},${y2 - L * Math.sin(ang + 0.42)}`;
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={w} />
      <Polygon points={`${p1} ${p2} ${p3}`} fill={color} />
    </G>
  );
}

/** 直角三角形（インピーダンス・電力三角形） */
export function TriangleDiagram({ base, height, hyp, angle = 'φ', title }: { base: string; height: string; hyp: string; angle?: string; title?: string }) {
  return (
    <Wrap ratio={1.9} title={title}>
      <Svg viewBox="0 0 300 158" {...box}>
        <Polygon points="40,130 250,130 250,30" fill="#E3F2FD" stroke="none" />
        <Arrow x1={40} y1={130} x2={250} y2={130} color={C.green} />
        <Arrow x1={250} y1={130} x2={250} y2={30} color={C.red} />
        <Arrow x1={40} y1={130} x2={250} y2={30} color={C.blue} />
        <Path d="M 70 130 A 30 30 0 0 0 66 116" stroke={C.dark} strokeWidth={1.5} fill="none" />
        <SvgText x={80} y={122} fontSize={13} fill={C.dark}>{angle}</SvgText>
        <SvgText x={130} y={149} fontSize={13} fill={C.green} fontWeight="bold" textAnchor="middle">{base}</SvgText>
        <SvgText x={258} y={84} fontSize={13} fill={C.red} fontWeight="bold">{height}</SvgText>
        <SvgText x={120} y={68} fontSize={13} fill={C.blue} fontWeight="bold">{hyp}</SvgText>
      </Svg>
    </Wrap>
  );
}

/** 直列回路（R/L/C/電源を横一列に描画） */
export function SeriesCircuit({ items, source = 'V', title }: { items: { type: 'R' | 'L' | 'C'; label: string }[]; source?: string; title?: string }) {
  const n = items.length;
  const w = 300, y = 60, x0 = 44, x1 = 272;
  const seg = (x1 - x0) / n;
  return (
    <Wrap ratio={2.4} title={title}>
      <Svg viewBox={`0 0 ${w} 125`} {...box}>
        {/* 電源 */}
        <Circle cx={22} cy={y} r={13} stroke={C.dark} strokeWidth={2} fill="#FFF" />
        <SvgText x={22} y={y + 4} fontSize={10} fill={C.dark} textAnchor="middle">{source}</SvgText>
        <Line x1={22} y1={y - 13} x2={22} y2={20} stroke={C.dark} strokeWidth={2} />
        <Line x1={22} y1={20} x2={x0} y2={20} stroke={C.dark} strokeWidth={2} />
        <Line x1={22} y1={y + 13} x2={22} y2={100} stroke={C.dark} strokeWidth={2} />
        <Line x1={22} y1={100} x2={x1 + 6} y2={100} stroke={C.dark} strokeWidth={2} />
        <Line x1={x1 + 6} y1={100} x2={x1 + 6} y2={20} stroke={C.dark} strokeWidth={2} />
        {/* 素子 */}
        {items.map((it, i) => {
          const xs = x0 + i * seg, xe = x0 + (i + 1) * seg;
          const cx = (xs + xe) / 2;
          const lead = (xe - xs - 44) / 2;
          const colors = { R: C.orange, L: C.blue, C: C.green } as const;
          const col = colors[it.type];
          return (
            <G key={i}>
              <Line x1={xs} y1={20} x2={xs + lead} y2={20} stroke={C.dark} strokeWidth={2} />
              {it.type === 'R' && (
                <Path d={`M ${xs + lead} 20 l 5 -8 l 7 16 l 7 -16 l 7 16 l 7 -16 l 7 16 l 4 -8`} stroke={col} strokeWidth={2.2} fill="none" />
              )}
              {it.type === 'L' && (
                <Path d={`M ${xs + lead} 20 a 5.5 7 0 0 1 11 0 a 5.5 7 0 0 1 11 0 a 5.5 7 0 0 1 11 0 a 5.5 7 0 0 1 11 0`} stroke={col} strokeWidth={2.2} fill="none" />
              )}
              {it.type === 'C' && (
                <G>
                  <Line x1={xs + lead} y1={20} x2={cx - 5} y2={20} stroke={C.dark} strokeWidth={2} />
                  <Line x1={cx - 5} y1={7} x2={cx - 5} y2={33} stroke={col} strokeWidth={2.6} />
                  <Line x1={cx + 5} y1={7} x2={cx + 5} y2={33} stroke={col} strokeWidth={2.6} />
                  <Line x1={cx + 5} y1={20} x2={xe - lead} y2={20} stroke={C.dark} strokeWidth={2} />
                </G>
              )}
              {it.type !== 'C' && <Line x1={xe - lead} y1={20} x2={xe} y2={20} stroke={C.dark} strokeWidth={2} />}
              {it.type === 'C' && <Line x1={xe - lead} y1={20} x2={xe} y2={20} stroke={C.dark} strokeWidth={2} />}
              <SvgText x={cx} y={52} fontSize={12} fill={col} fontWeight="bold" textAnchor="middle">{it.label}</SvgText>
            </G>
          );
        })}
        <Arrow x1={60} y1={112} x2={110} y2={112} color={C.red} />
        <SvgText x={118} y={116} fontSize={11} fill={C.red}>電流 I</SvgText>
      </Svg>
    </Wrap>
  );
}

/** 平行導体間に働く力 */
export function ParallelConductors({ same = true, title }: { same?: boolean; title?: string }) {
  return (
    <Wrap ratio={1.9} title={title}>
      <Svg viewBox="0 0 300 158" {...box}>
        <Rect x={70} y={20} width={12} height={118} fill="#FFB300" stroke={C.dark} strokeWidth={1} />
        <Rect x={218} y={20} width={12} height={118} fill="#FFB300" stroke={C.dark} strokeWidth={1} />
        <Arrow x1={76} y1={112} x2={76} y2={40} color={C.blue} w={3} />
        {same
          ? <Arrow x1={224} y1={112} x2={224} y2={40} color={C.blue} w={3} />
          : <Arrow x1={224} y1={40} x2={224} y2={112} color={C.blue} w={3} />}
        <SvgText x={56} y={30} fontSize={12} fill={C.blue} fontWeight="bold">Ia</SvgText>
        <SvgText x={236} y={30} fontSize={12} fill={C.blue} fontWeight="bold">Ib</SvgText>
        {same ? (
          <G>
            <Arrow x1={94} y1={79} x2={134} y2={79} color={C.red} w={3} />
            <Arrow x1={206} y1={79} x2={166} y2={79} color={C.red} w={3} />
            <SvgText x={150} y={70} fontSize={12} fill={C.red} fontWeight="bold" textAnchor="middle">引き合う</SvgText>
          </G>
        ) : (
          <G>
            <Arrow x1={58} y1={79} x2={20} y2={79} color={C.red} w={3} />
            <Arrow x1={242} y1={79} x2={280} y2={79} color={C.red} w={3} />
            <SvgText x={150} y={70} fontSize={12} fill={C.red} fontWeight="bold" textAnchor="middle">反発し合う</SvgText>
          </G>
        )}
        <SvgText x={150} y={152} fontSize={11} fill={C.gray} textAnchor="middle">
          {same ? '同方向の電流 → 吸引力' : '逆方向の電流 → 反発力'}
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 点電荷と放射状の電気力線 */
export function PointChargeField({ positive = true, title }: { positive?: boolean; title?: string }) {
  const cx = 150, cy = 78, r = 16, R = 62;
  const rays = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);
  return (
    <Wrap ratio={1.9} title={title}>
      <Svg viewBox="0 0 300 158" {...box}>
        {rays.map((a, i) => {
          const sx = cx + (r + 4) * Math.cos(a), sy = cy + (r + 4) * Math.sin(a);
          const ex = cx + R * Math.cos(a), ey = cy + R * Math.sin(a);
          return positive
            ? <Arrow key={i} x1={sx} y1={sy} x2={ex} y2={ey} color={C.red} w={1.8} />
            : <Arrow key={i} x1={ex} y1={ey} x2={sx} y2={sy} color={C.blue} w={1.8} />;
        })}
        <Circle cx={cx} cy={cy} r={r} fill={positive ? '#EF5350' : '#42A5F5'} stroke={C.dark} strokeWidth={1.5} />
        <SvgText x={cx} y={cy + 5} fontSize={15} fill="#FFF" fontWeight="bold" textAnchor="middle">{positive ? '+Q' : '−Q'}</SvgText>
        <SvgText x={150} y={152} fontSize={11} fill={C.gray} textAnchor="middle">
          電気力線の本数 N＝Q/ε［本］（{positive ? '正電荷から湧き出す' : '負電荷へ吸い込まれる'}）
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 指数関数カーブ（RC/RL過渡現象） */
export function ExpCurve({ mode = 'charge', tauLabel = 'τ', yLabel, title }: { mode?: 'charge' | 'discharge'; tauLabel?: string; yLabel?: string; title?: string }) {
  const pts: string[] = [];
  for (let i = 0; i <= 100; i++) {
    const t = (i / 100) * 5;
    const v = mode === 'charge' ? 1 - Math.exp(-t) : Math.exp(-t);
    pts.push(`${40 + i * 2.3},${125 - v * 90}`);
  }
  const yAt1 = mode === 'charge' ? 1 - Math.exp(-1) : Math.exp(-1);
  const pct = mode === 'charge' ? '63.2%' : '36.8%';
  return (
    <Wrap ratio={1.9} title={title}>
      <Svg viewBox="0 0 300 158" {...box}>
        <Arrow x1={40} y1={125} x2={285} y2={125} color={C.dark} w={1.5} />
        <Arrow x1={40} y1={125} x2={40} y2={15} color={C.dark} w={1.5} />
        <Line x1={40} y1={35} x2={285} y2={35} stroke={C.light} strokeWidth={1} strokeDasharray="4 3" />
        <Path d={`M ${pts.join(' L ')}`} stroke={C.blue} strokeWidth={2.6} fill="none" />
        <Line x1={40 + 46} y1={125} x2={40 + 46} y2={125 - yAt1 * 90} stroke={C.red} strokeWidth={1.4} strokeDasharray="4 3" />
        <Line x1={40} y1={125 - yAt1 * 90} x2={40 + 46} y2={125 - yAt1 * 90} stroke={C.red} strokeWidth={1.4} strokeDasharray="4 3" />
        <SvgText x={40 + 46} y={140} fontSize={12} fill={C.red} fontWeight="bold" textAnchor="middle">{tauLabel}</SvgText>
        <SvgText x={36} y={125 - yAt1 * 90 + 4} fontSize={10} fill={C.red} textAnchor="end">{pct}</SvgText>
        <SvgText x={30} y={30} fontSize={10} fill={C.gray} textAnchor="end">{yLabel ?? '100%'}</SvgText>
        <SvgText x={288} y={140} fontSize={11} fill={C.dark} textAnchor="end">t</SvgText>
      </Svg>
    </Wrap>
  );
}

/** 山型カーブ（共振・P-δ・トルク-すべり・効率など） */
export function PeakCurve({ xLabel, yLabel, peakX = 0.5, peakLabel, note, title }: { xLabel: string; yLabel: string; peakX?: number; peakLabel?: string; note?: string; title?: string }) {
  const pts: string[] = [];
  for (let i = 0; i <= 100; i++) {
    const x = i / 100;
    const v = Math.exp(-Math.pow((x - peakX) / 0.26, 2));
    pts.push(`${40 + i * 2.4},${118 - v * 88}`);
  }
  const px = 40 + peakX * 240;
  return (
    <Wrap ratio={1.9} title={title}>
      <Svg viewBox="0 0 300 158" {...box}>
        <Arrow x1={40} y1={118} x2={288} y2={118} color={C.dark} w={1.5} />
        <Arrow x1={40} y1={118} x2={40} y2={12} color={C.dark} w={1.5} />
        <Path d={`M ${pts.join(' L ')}`} stroke={C.orange} strokeWidth={2.6} fill="none" />
        <Line x1={px} y1={118} x2={px} y2={30} stroke={C.red} strokeWidth={1.4} strokeDasharray="4 3" />
        {peakLabel ? <SvgText x={px} y={136} fontSize={12} fill={C.red} fontWeight="bold" textAnchor="middle">{peakLabel}</SvgText> : null}
        <SvgText x={286} y={134} fontSize={11} fill={C.dark} textAnchor="end">{xLabel}</SvgText>
        <SvgText x={46} y={20} fontSize={11} fill={C.dark}>{yLabel}</SvgText>
        {note ? <SvgText x={160} y={152} fontSize={10.5} fill={C.gray} textAnchor="middle">{note}</SvgText> : null}
      </Svg>
    </Wrap>
  );
}

/** 整流波形（半波・全波） */
export function RectifiedWave({ full = false, title }: { full?: boolean; title?: string }) {
  const wave = (offset: number, flip: boolean) => {
    const pts: string[] = [];
    for (let i = 0; i <= 40; i++) {
      const t = (i / 40) * Math.PI;
      const v = Math.sin(t);
      pts.push(`${offset + i * 1.5},${105 - v * 62}`);
    }
    return pts.join(' L ');
  };
  return (
    <Wrap ratio={2.1} title={title}>
      <Svg viewBox="0 0 300 143" {...box}>
        <Line x1={20} y1={105} x2={290} y2={105} stroke={C.dark} strokeWidth={1.5} />
        <Path d={`M ${wave(30, false)}`} stroke={C.red} strokeWidth={2.6} fill="none" />
        {full
          ? <Path d={`M ${wave(95, false)}`} stroke={C.red} strokeWidth={2.6} fill="none" />
          : <Line x1={90} y1={105} x2={155} y2={105} stroke={C.blue} strokeWidth={2.6} />}
        <Path d={`M ${wave(160, false)}`} stroke={C.red} strokeWidth={2.6} fill="none" />
        {full
          ? <Path d={`M ${wave(225, false)}`} stroke={C.red} strokeWidth={2.6} fill="none" />
          : <Line x1={220} y1={105} x2={285} y2={105} stroke={C.blue} strokeWidth={2.6} />}
        <Line x1={20} y1={43} x2={290} y2={43} stroke={C.light} strokeWidth={1} strokeDasharray="4 3" />
        <SvgText x={24} y={38} fontSize={10} fill={C.gray}>Vm</SvgText>
        <SvgText x={155} y={130} fontSize={11.5} fill={C.dark} textAnchor="middle">
          {full ? '全波整流：平均値＝2Vm/π ≈ 0.9V（実効値V）' : '半波整流：平均値＝Vm/π ≈ 0.45V（実効値V）'}
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** V曲線（同期電動機） */
export function VCurve({ title }: { title?: string }) {
  const pts: string[] = [];
  for (let i = 0; i <= 100; i++) {
    const x = i / 100;
    const v = Math.abs(x - 0.5) * 1.7;
    pts.push(`${40 + i * 2.4},${40 + (1 - v) * 0 + v * 78}`);
  }
  return (
    <Wrap ratio={1.9} title={title}>
      <Svg viewBox="0 0 300 158" {...box}>
        <Arrow x1={40} y1={125} x2={288} y2={125} color={C.dark} w={1.5} />
        <Arrow x1={40} y1={125} x2={40} y2={15} color={C.dark} w={1.5} />
        <Path d={`M ${pts.join(' L ')}`} stroke={C.blue} strokeWidth={2.6} fill="none" />
        <Line x1={160} y1={125} x2={160} y2={40} stroke={C.red} strokeWidth={1.4} strokeDasharray="4 3" />
        <SvgText x={160} y={140} fontSize={11} fill={C.red} fontWeight="bold" textAnchor="middle">力率1.0</SvgText>
        <SvgText x={80} y={35} fontSize={11} fill={C.dark} textAnchor="middle">遅れ（弱め励磁）</SvgText>
        <SvgText x={240} y={35} fontSize={11} fill={C.dark} textAnchor="middle">進み（強め励磁）</SvgText>
        <SvgText x={286} y={140} fontSize={11} fill={C.dark} textAnchor="end">界磁電流 If</SvgText>
        <SvgText x={46} y={22} fontSize={11} fill={C.dark}>電機子電流 Ia</SvgText>
      </Svg>
    </Wrap>
  );
}

/** ベクトル合成（電界・力の合成） */
export function VectorSum({ l1 = 'E₁', l2 = 'E₂', lr = 'E（合成）', title }: { l1?: string; l2?: string; lr?: string; title?: string }) {
  return (
    <Wrap ratio={1.9} title={title}>
      <Svg viewBox="0 0 300 158" {...box}>
        <Circle cx={150} cy={110} r={5} fill={C.dark} />
        <Arrow x1={150} y1={110} x2={60} y2={80} color={C.green} w={3} />
        <Arrow x1={150} y1={110} x2={210} y2={40} color={C.red} w={3} />
        <Arrow x1={150} y1={110} x2={120} y2={22} color={C.blue} w={3.4} />
        <Line x1={60} y1={80} x2={120} y2={22} stroke={C.light} strokeWidth={1.3} strokeDasharray="5 4" />
        <Line x1={210} y1={40} x2={120} y2={22} stroke={C.light} strokeWidth={1.3} strokeDasharray="5 4" />
        <SvgText x={52} y={70} fontSize={13} fill={C.green} fontWeight="bold">{l1}</SvgText>
        <SvgText x={218} y={36} fontSize={13} fill={C.red} fontWeight="bold">{l2}</SvgText>
        <SvgText x={104} y={16} fontSize={13} fill={C.blue} fontWeight="bold">{lr}</SvgText>
        <SvgText x={150} y={150} fontSize={11} fill={C.gray} textAnchor="middle">平行四辺形の法則でベクトル合成（大きさと向き）</SvgText>
      </Svg>
    </Wrap>
  );
}

/** Y結線とΔ結線 */
export function YDeltaDiagram({ title }: { title?: string }) {
  return (
    <Wrap ratio={2.1} title={title}>
      <Svg viewBox="0 0 300 143" {...box}>
        {/* Y */}
        <Line x1={75} y1={72} x2={75} y2={26} stroke={C.blue} strokeWidth={2.4} />
        <Line x1={75} y1={72} x2={40} y2={104} stroke={C.blue} strokeWidth={2.4} />
        <Line x1={75} y1={72} x2={110} y2={104} stroke={C.blue} strokeWidth={2.4} />
        <Circle cx={75} cy={72} r={4} fill={C.dark} />
        <SvgText x={75} y={126} fontSize={12} fill={C.blue} fontWeight="bold" textAnchor="middle">Y結線</SvgText>
        <SvgText x={75} y={139} fontSize={10} fill={C.gray} textAnchor="middle">VL=√3Vp／IL=Ip</SvgText>
        {/* Δ */}
        <Polygon points="225,26 190,96 260,96" fill="none" stroke={C.orange} strokeWidth={2.4} />
        <SvgText x={225} y={126} fontSize={12} fill={C.orange} fontWeight="bold" textAnchor="middle">Δ結線</SvgText>
        <SvgText x={225} y={139} fontSize={10} fill={C.gray} textAnchor="middle">VL=Vp／IL=√3Ip</SvgText>
      </Svg>
    </Wrap>
  );
}

/** 導出ステップ（タップで1段ずつ表示） */
export function Steps({ steps, title = '導出ステップ' }: { steps: string[]; title?: string }) {
  const [shown, setShown] = React.useState(1);
  return (
    <View style={s.stepsWrap}>
      <Text style={s.stepsTitle}>🧮 {title}（タップで次へ）</Text>
      {steps.slice(0, shown).map((st, i) => (
        <View key={i} style={s.stepRow}>
          <View style={s.stepNum}><Text style={s.stepNumText}>{i + 1}</Text></View>
          <Text style={s.stepText}>{st}</Text>
        </View>
      ))}
      {shown < steps.length ? (
        <TouchableOpacity style={s.stepBtn} onPress={() => setShown(n => n + 1)} activeOpacity={0.8}>
          <Text style={s.stepBtnText}>▼ 次のステップ（{shown}/{steps.length}）</Text>
        </TouchableOpacity>
      ) : (
        <Text style={s.stepDone}>✅ 導出完了（{steps.length}ステップ）</Text>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {
    backgroundColor: '#FFFFFF', borderRadius: 12, padding: 10, marginTop: 8,
    borderWidth: 1, borderColor: '#E3EAF2',
  },
  title: { fontSize: 12.5, fontWeight: '800', color: '#1E5FBE', marginBottom: 4 },
  stepsWrap: {
    backgroundColor: '#FFF8F0', borderRadius: 12, padding: 12, marginTop: 8,
    borderLeftWidth: 3, borderLeftColor: '#E65100',
  },
  stepsTitle: { fontSize: 12.5, fontWeight: '800', color: '#E65100', marginBottom: 8 },
  stepRow: { flexDirection: 'row', gap: 8, marginBottom: 6, alignItems: 'flex-start' },
  stepNum: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#E65100', alignItems: 'center', justifyContent: 'center', marginTop: 1 },
  stepNumText: { fontSize: 11, fontWeight: '900', color: '#FFF' },
  stepText: { flex: 1, fontSize: 13, color: '#333', lineHeight: 20, fontWeight: '500' },
  stepBtn: { backgroundColor: '#FFE0B2', borderRadius: 8, paddingVertical: 8, alignItems: 'center', marginTop: 4 },
  stepBtnText: { fontSize: 12.5, fontWeight: '800', color: '#E65100' },
  stepDone: { fontSize: 12, fontWeight: '700', color: '#2E7D32', marginTop: 4 },
});
