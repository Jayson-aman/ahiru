import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Line, Path, Circle, Rect, Text as SvgText, Polygon, G } from 'react-native-svg';

/**
 * 構造力学（はり）のSVG図解部品。
 *
 * 文字で「梁」を描くと端末では崩れて読めないため、実際の形として描く：
 *  ・梁と支点（ピン＝三角、ローラー＝三角＋ローラー、固定＝ハッチ）
 *  ・荷重（等分布＝並んだ下向き矢印／集中＝1本の太い矢印）
 *  ・反力（上向き矢印）
 *  ・力の伝わり方（せん断力図Q・曲げモーメント図M）
 * 「どこで最大になるか」が一目で分かることを最優先にしている。
 */

export const C = {
  blue: '#1E5FBE', red: '#D32F2F', green: '#2E7D32', orange: '#E65100',
  purple: '#6A1B9A', gray: '#607D8B', dark: '#1A2A44', light: '#B0BEC5',
};

const box = { width: '100%' as const, height: '100%' as const };

function Wrap({ children, ratio = 2.0, title, note }:
  { children: React.ReactNode; ratio?: number; title?: string; note?: string }) {
  return (
    <View style={s.wrap}>
      {title ? <Text style={s.title}>📐 {title}</Text> : null}
      <View style={{ width: '100%', maxWidth: 440, alignSelf: 'center', aspectRatio: ratio }}>
        {children}
      </View>
      {note ? <Text style={s.note}>{note}</Text> : null}
    </View>
  );
}

/** 下向き矢印（荷重） */
function DownArrow({ x, y1, y2, color = C.red, w = 2 }: { x: number; y1: number; y2: number; color?: string; w?: number }) {
  return (
    <G>
      <Line x1={x} y1={y1} x2={x} y2={y2 - 5} stroke={color} strokeWidth={w} />
      <Polygon points={`${x},${y2} ${x - 3.5},${y2 - 7} ${x + 3.5},${y2 - 7}`} fill={color} />
    </G>
  );
}

/** 上向き矢印（反力） */
function UpArrow({ x, y1, y2, color = C.blue, w = 2.4 }: { x: number; y1: number; y2: number; color?: string; w?: number }) {
  return (
    <G>
      <Line x1={x} y1={y1} x2={x} y2={y2 + 5} stroke={color} strokeWidth={w} />
      <Polygon points={`${x},${y2} ${x - 4},${y2 + 8} ${x + 4},${y2 + 8}`} fill={color} />
    </G>
  );
}

/** ピン支点（三角形＋ハッチ） */
function PinSupport({ x, y }: { x: number; y: number }) {
  return (
    <G>
      <Polygon points={`${x},${y} ${x - 9},${y + 15} ${x + 9},${y + 15}`} fill="#FFF" stroke={C.dark} strokeWidth={1.8} />
      <Line x1={x - 13} y1={y + 15} x2={x + 13} y2={y + 15} stroke={C.dark} strokeWidth={2} />
      {[-10, -5, 0, 5, 10].map((d, i) => (
        <Line key={i} x1={x + d} y1={y + 15} x2={x + d - 4} y2={y + 21} stroke={C.dark} strokeWidth={1.2} />
      ))}
    </G>
  );
}

/** ローラー支点（三角形＋ころ） */
function RollerSupport({ x, y }: { x: number; y: number }) {
  return (
    <G>
      <Polygon points={`${x},${y} ${x - 9},${y + 12} ${x + 9},${y + 12}`} fill="#FFF" stroke={C.dark} strokeWidth={1.8} />
      <Circle cx={x - 5} cy={y + 15.5} r={3.2} fill="#FFF" stroke={C.dark} strokeWidth={1.5} />
      <Circle cx={x + 5} cy={y + 15.5} r={3.2} fill="#FFF" stroke={C.dark} strokeWidth={1.5} />
      <Line x1={x - 13} y1={y + 19} x2={x + 13} y2={y + 19} stroke={C.dark} strokeWidth={2} />
      {[-10, -5, 0, 5, 10].map((d, i) => (
        <Line key={i} x1={x + d} y1={y + 19} x2={x + d - 4} y2={y + 25} stroke={C.dark} strokeWidth={1.2} />
      ))}
    </G>
  );
}

/** 固定端（壁＋ハッチ） */
function FixedSupport({ x, y }: { x: number; y: number }) {
  return (
    <G>
      <Line x1={x} y1={y - 22} x2={x} y2={y + 22} stroke={C.dark} strokeWidth={3} />
      {[-18, -12, -6, 0, 6, 12, 18].map((d, i) => (
        <Line key={i} x1={x} y1={y + d} x2={x - 8} y2={y + d + 7} stroke={C.dark} strokeWidth={1.2} />
      ))}
    </G>
  );
}

/* ══════════════════════════════════════════
   単純梁 ＋ 等分布荷重
   ══════════════════════════════════════════ */
export function SimpleBeamUDL({
  w = 'w', L = 'L', showReactions = true, title = '単純梁＋等分布荷重', note,
}: { w?: string; L?: string; showReactions?: boolean; title?: string; note?: string }) {
  const x0 = 50, x1 = 330, yBeam = 78, yLoadTop = 34;
  const n = 9;
  return (
    <Wrap ratio={2.15} title={title} note={note}>
      <Svg viewBox="0 0 380 177" {...box}>
        {/* 荷重の帯 */}
        <Rect x={x0} y={yLoadTop - 12} width={x1 - x0} height={12} fill="#FFEBEE" stroke={C.red} strokeWidth={1.2} />
        <SvgText x={(x0 + x1) / 2} y={yLoadTop - 17} fontSize={12} fill={C.red} fontWeight="bold" textAnchor="middle">
          {w}（等分布荷重）
        </SvgText>
        {/* 等分布荷重の矢印を等間隔に */}
        {Array.from({ length: n }).map((_, i) => {
          const x = x0 + ((x1 - x0) * i) / (n - 1);
          return <DownArrow key={i} x={x} y1={yLoadTop} y2={yBeam - 4} color={C.red} w={1.6} />;
        })}
        {/* 梁 */}
        <Rect x={x0} y={yBeam} width={x1 - x0} height={9} fill="#CFD8DC" stroke={C.dark} strokeWidth={2} />
        {/* 支点 */}
        <PinSupport x={x0} y={yBeam + 9} />
        <RollerSupport x={x1} y={yBeam + 9} />
        {/* 反力 */}
        {showReactions && (
          <>
            <UpArrow x={x0} y1={yBeam + 52} y2={yBeam + 13} color={C.blue} />
            <UpArrow x={x1} y1={yBeam + 52} y2={yBeam + 13} color={C.blue} />
            <SvgText x={x0 - 4} y={yBeam + 64} fontSize={11.5} fill={C.blue} fontWeight="bold" textAnchor="middle">
              R=wL/2
            </SvgText>
            <SvgText x={x1 + 4} y={yBeam + 64} fontSize={11.5} fill={C.blue} fontWeight="bold" textAnchor="middle">
              R=wL/2
            </SvgText>
          </>
        )}
        {/* 寸法線 */}
        <Line x1={x0} y1={yBeam + 78} x2={x1} y2={yBeam + 78} stroke={C.gray} strokeWidth={1.2} />
        <Line x1={x0} y1={yBeam + 73} x2={x0} y2={yBeam + 83} stroke={C.gray} strokeWidth={1.2} />
        <Line x1={x1} y1={yBeam + 73} x2={x1} y2={yBeam + 83} stroke={C.gray} strokeWidth={1.2} />
        <SvgText x={(x0 + x1) / 2} y={yBeam + 92} fontSize={12} fill={C.gray} fontWeight="bold" textAnchor="middle">
          スパン {L}
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/* ══════════════════════════════════════════
   単純梁 ＋ 中央集中荷重
   ══════════════════════════════════════════ */
export function SimpleBeamPoint({
  P = 'P', L = 'L', title = '単純梁＋中央集中荷重', note,
}: { P?: string; L?: string; title?: string; note?: string }) {
  const x0 = 50, x1 = 330, xc = (x0 + x1) / 2, yBeam = 78;
  return (
    <Wrap ratio={2.15} title={title} note={note}>
      <Svg viewBox="0 0 380 177" {...box}>
        <DownArrow x={xc} y1={24} y2={yBeam - 4} color={C.red} w={3} />
        <SvgText x={xc + 10} y={34} fontSize={14} fill={C.red} fontWeight="bold">{P}</SvgText>
        <Rect x={x0} y={yBeam} width={x1 - x0} height={9} fill="#CFD8DC" stroke={C.dark} strokeWidth={2} />
        <PinSupport x={x0} y={yBeam + 9} />
        <RollerSupport x={x1} y={yBeam + 9} />
        <UpArrow x={x0} y1={yBeam + 52} y2={yBeam + 13} color={C.blue} />
        <UpArrow x={x1} y1={yBeam + 52} y2={yBeam + 13} color={C.blue} />
        <SvgText x={x0} y={yBeam + 64} fontSize={11.5} fill={C.blue} fontWeight="bold" textAnchor="middle">R=P/2</SvgText>
        <SvgText x={x1} y={yBeam + 64} fontSize={11.5} fill={C.blue} fontWeight="bold" textAnchor="middle">R=P/2</SvgText>
        {/* 中央位置の補助線 */}
        <Line x1={xc} y1={yBeam + 9} x2={xc} y2={yBeam + 70} stroke={C.light} strokeWidth={1} strokeDasharray="3,3" />
        <Line x1={x0} y1={yBeam + 78} x2={x1} y2={yBeam + 78} stroke={C.gray} strokeWidth={1.2} />
        <Line x1={x0} y1={yBeam + 73} x2={x0} y2={yBeam + 83} stroke={C.gray} strokeWidth={1.2} />
        <Line x1={xc} y1={yBeam + 73} x2={xc} y2={yBeam + 83} stroke={C.gray} strokeWidth={1.2} />
        <Line x1={x1} y1={yBeam + 73} x2={x1} y2={yBeam + 83} stroke={C.gray} strokeWidth={1.2} />
        <SvgText x={(x0 + xc) / 2} y={yBeam + 92} fontSize={11.5} fill={C.gray} textAnchor="middle">{L}/2</SvgText>
        <SvgText x={(xc + x1) / 2} y={yBeam + 92} fontSize={11.5} fill={C.gray} textAnchor="middle">{L}/2</SvgText>
      </Svg>
    </Wrap>
  );
}

/* ══════════════════════════════════════════
   片持ち梁
   ══════════════════════════════════════════ */
export function Cantilever({
  load = 'udl', P = 'P', w = 'w', L = 'L', title, note,
}: { load?: 'udl' | 'point'; P?: string; w?: string; L?: string; title?: string; note?: string }) {
  const x0 = 60, x1 = 330, yBeam = 80;
  const n = 8;
  const udl = load === 'udl';
  return (
    <Wrap ratio={2.15} title={title ?? (udl ? '片持ち梁＋等分布荷重' : '片持ち梁＋先端集中荷重')} note={note}>
      <Svg viewBox="0 0 380 177" {...box}>
        {udl ? (
          <>
            <Rect x={x0} y={26} width={x1 - x0} height={12} fill="#FFEBEE" stroke={C.red} strokeWidth={1.2} />
            <SvgText x={(x0 + x1) / 2} y={21} fontSize={12} fill={C.red} fontWeight="bold" textAnchor="middle">{w}</SvgText>
            {Array.from({ length: n }).map((_, i) => {
              const x = x0 + ((x1 - x0) * i) / (n - 1);
              return <DownArrow key={i} x={x} y1={38} y2={yBeam - 4} color={C.red} w={1.6} />;
            })}
          </>
        ) : (
          <>
            <DownArrow x={x1} y1={26} y2={yBeam - 4} color={C.red} w={3} />
            <SvgText x={x1 + 10} y={36} fontSize={14} fill={C.red} fontWeight="bold">{P}</SvgText>
          </>
        )}
        <Rect x={x0} y={yBeam} width={x1 - x0} height={9} fill="#CFD8DC" stroke={C.dark} strokeWidth={2} />
        <FixedSupport x={x0} y={yBeam + 4.5} />
        {/* 固定端モーメント */}
        <Path d={`M ${x0 + 16} ${yBeam + 34} A 18 18 0 1 1 ${x0 + 30} ${yBeam + 24}`}
              stroke={C.purple} strokeWidth={2} fill="none" />
        <Polygon points={`${x0 + 30},${yBeam + 24} ${x0 + 24},${yBeam + 22} ${x0 + 29},${yBeam + 31}`} fill={C.purple} />
        <SvgText x={x0 + 40} y={yBeam + 40} fontSize={11.5} fill={C.purple} fontWeight="bold">
          {udl ? 'M＝wL²/2' : 'M＝PL'}（固定端で最大★）
        </SvgText>
        <Line x1={x0} y1={yBeam + 62} x2={x1} y2={yBeam + 62} stroke={C.gray} strokeWidth={1.2} />
        <Line x1={x0} y1={yBeam + 57} x2={x0} y2={yBeam + 67} stroke={C.gray} strokeWidth={1.2} />
        <Line x1={x1} y1={yBeam + 57} x2={x1} y2={yBeam + 67} stroke={C.gray} strokeWidth={1.2} />
        <SvgText x={(x0 + x1) / 2} y={yBeam + 76} fontSize={12} fill={C.gray} fontWeight="bold" textAnchor="middle">{L}</SvgText>
      </Svg>
    </Wrap>
  );
}

/* ══════════════════════════════════════════
   せん断力図 Q ＋ 曲げモーメント図 M
   （単純梁の 等分布 / 中央集中 を切替）
   ══════════════════════════════════════════ */
export function BeamQMDiagram({
  load = 'udl', qLabel, mLabel, title = 'Q図とM図（力の伝わり方）',
}: { load?: 'udl' | 'point'; qLabel?: string; mLabel?: string; title?: string }) {
  const x0 = 50, x1 = 330, xc = (x0 + x1) / 2;
  const yQ = 68, yM = 178;                 // 各図の基準線
  const udl = load === 'udl';
  const qh = 28, mh = 34;
  const mBottom = yM + (udl ? mh * 2 : mh);

  // M図のパス：等分布＝放物線、集中＝三角形
  const mPath = udl
    ? `M ${x0} ${yM} Q ${xc} ${yM + mh * 2.6} ${x1} ${yM}`
    : `M ${x0} ${yM} L ${xc} ${yM + mh} L ${x1} ${yM}`;

  return (
    <Wrap ratio={1.28} title={title}>
      <Svg viewBox="0 0 380 297" {...box}>
        {/* ── Q図 ── */}
        <SvgText x={8} y={18} fontSize={12} fill={C.orange} fontWeight="bold">せん断力図 Q</SvgText>
        <Line x1={x0} y1={yQ} x2={x1} y2={yQ} stroke={C.dark} strokeWidth={1.5} />
        {udl ? (
          <>
            {/* 直線的に変化し中央で0 */}
            <Polygon points={`${x0},${yQ} ${xc},${yQ} ${x0},${yQ - qh}`} fill="#FFE0B2" stroke={C.orange} strokeWidth={1.8} />
            <Polygon points={`${xc},${yQ} ${x1},${yQ} ${x1},${yQ + qh}`} fill="#FFE0B2" stroke={C.orange} strokeWidth={1.8} />
            <SvgText x={x0 + 14} y={yQ - qh - 6} fontSize={11} fill={C.orange} fontWeight="bold">＋wL/2</SvgText>
            <SvgText x={x1 - 6} y={yQ + qh + 14} fontSize={11} fill={C.orange} fontWeight="bold" textAnchor="end">−wL/2</SvgText>
            <Circle cx={xc} cy={yQ} r={3.5} fill={C.red} />
            <SvgText x={xc + 8} y={yQ - 9} fontSize={11} fill={C.red} fontWeight="bold">Q＝0 → ここでMが最大★</SvgText>
          </>
        ) : (
          <>
            <Rect x={x0} y={yQ - qh} width={xc - x0} height={qh} fill="#FFE0B2" stroke={C.orange} strokeWidth={1.8} />
            <Rect x={xc} y={yQ} width={x1 - xc} height={qh} fill="#FFE0B2" stroke={C.orange} strokeWidth={1.8} />
            <SvgText x={x0 + 14} y={yQ - qh - 6} fontSize={11} fill={C.orange} fontWeight="bold">＋P/2</SvgText>
            <SvgText x={x1 - 6} y={yQ + qh + 14} fontSize={11} fill={C.orange} fontWeight="bold" textAnchor="end">−P/2</SvgText>
            <SvgText x={xc + 8} y={yQ - 9} fontSize={11} fill={C.red} fontWeight="bold">中央で符号が反転★</SvgText>
          </>
        )}
        {qLabel ? <SvgText x={8} y={yQ + qh + 30} fontSize={10} fill={C.orange}>{qLabel}</SvgText> : null}

        {/* ── M図 ── */}
        <SvgText x={8} y={yM - 26} fontSize={12} fill={C.purple} fontWeight="bold">曲げモーメント図 M</SvgText>
        <Line x1={x0} y1={yM} x2={x1} y2={yM} stroke={C.dark} strokeWidth={1.5} />
        <Path d={mPath} fill="#EDE7F6" stroke={C.purple} strokeWidth={2.2} />
        <Line x1={xc} y1={yM} x2={xc} y2={mBottom} stroke={C.purple} strokeWidth={1.2} strokeDasharray="3,3" />
        {/* 支点・中央の位置（M図の基準線のすぐ上に置いて重なりを避ける） */}
        <SvgText x={x0} y={yM - 7} fontSize={10.5} fill={C.gray} textAnchor="middle">支点</SvgText>
        <SvgText x={x1} y={yM - 7} fontSize={10.5} fill={C.gray} textAnchor="middle">支点</SvgText>
        <SvgText x={xc} y={yM - 7} fontSize={10.5} fill={C.gray} textAnchor="middle">中央</SvgText>
        <SvgText x={xc} y={mBottom + 26} fontSize={12.5} fill={C.purple} fontWeight="bold" textAnchor="middle">
          {udl ? 'M最大＝wL²/8（中央・放物線）' : 'M最大＝PL/4（中央・三角形）'}
        </SvgText>
        {mLabel ? <SvgText x={xc} y={mBottom + 44} fontSize={10.5} fill={C.gray} textAnchor="middle">{mLabel}</SvgText> : null}
      </Svg>
    </Wrap>
  );
}

/* ══════════════════════════════════════════
   支点の種類と反力数
   ══════════════════════════════════════════ */
export function SupportTypes({ title = '支点の種類と反力の数' }: { title?: string }) {
  const y = 62;
  return (
    <Wrap ratio={2.6} title={title}>
      <Svg viewBox="0 0 380 146" {...box}>
        {/* ローラー */}
        <Rect x={22} y={y - 9} width={70} height={8} fill="#CFD8DC" stroke={C.dark} strokeWidth={1.6} />
        <RollerSupport x={57} y={y - 1} />
        <UpArrow x={57} y1={y + 46} y2={y + 26} color={C.blue} w={2} />
        <SvgText x={57} y={22} fontSize={11.5} fill={C.dark} fontWeight="bold" textAnchor="middle">ローラー</SvgText>
        <SvgText x={57} y={y + 60} fontSize={11.5} fill={C.blue} fontWeight="bold" textAnchor="middle">反力1（鉛直）</SvgText>
        {/* ピン */}
        <Rect x={150} y={y - 9} width={70} height={8} fill="#CFD8DC" stroke={C.dark} strokeWidth={1.6} />
        <PinSupport x={185} y={y - 1} />
        <UpArrow x={185} y1={y + 46} y2={y + 26} color={C.blue} w={2} />
        <Line x1={205} y1={y + 34} x2={185} y2={y + 34} stroke={C.green} strokeWidth={2} />
        <Polygon points={`${185},${y + 34} ${191},${y + 31} ${191},${y + 37}`} fill={C.green} />
        <SvgText x={185} y={22} fontSize={11.5} fill={C.dark} fontWeight="bold" textAnchor="middle">ピン</SvgText>
        <SvgText x={185} y={y + 60} fontSize={11.5} fill={C.blue} fontWeight="bold" textAnchor="middle">反力2（鉛直＋水平）</SvgText>
        {/* 固定 */}
        <Rect x={286} y={y - 9} width={70} height={8} fill="#CFD8DC" stroke={C.dark} strokeWidth={1.6} />
        <FixedSupport x={286} y={y - 5} />
        <UpArrow x={302} y1={y + 46} y2={y + 26} color={C.blue} w={2} />
        <Path d={`M 320 ${y + 30} A 14 14 0 1 1 331 ${y + 22}`} stroke={C.purple} strokeWidth={2} fill="none" />
        <Polygon points={`331,${y + 22} 325,${y + 20} 330,${y + 28}`} fill={C.purple} />
        <SvgText x={320} y={22} fontSize={11.5} fill={C.dark} fontWeight="bold" textAnchor="middle">固定</SvgText>
        <SvgText x={318} y={y + 60} fontSize={11.5} fill={C.blue} fontWeight="bold" textAnchor="middle">反力3（＋モーメント）</SvgText>
      </Svg>
    </Wrap>
  );
}

/* ══════════════════════════════════════════
   計算ステップ（式→代入→答え）
   ══════════════════════════════════════════ */
export function Steps({ steps, title }: { steps: string[]; title?: string }) {
  return (
    <View style={s.steps}>
      {title ? <Text style={s.stepsTitle}>🧮 {title}</Text> : null}
      {steps.map((t, i) => (
        <View key={i} style={s.stepRow}>
          <View style={s.stepNum}><Text style={s.stepNumText}>{i + 1}</Text></View>
          <Text style={s.stepText}>{t}</Text>
        </View>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {
    backgroundColor: '#FFFFFF', borderRadius: 12, paddingVertical: 12, paddingHorizontal: 8,
    marginVertical: 8, borderWidth: 1, borderColor: '#C9DCF5',
  },
  title: { fontSize: 12.5, fontWeight: '800', color: '#123B78', marginBottom: 8, marginLeft: 4 },
  note: { fontSize: 11.5, color: '#555', marginTop: 8, marginHorizontal: 4, lineHeight: 18, fontWeight: '500' },
  steps: {
    backgroundColor: '#F7FAFF', borderRadius: 12, padding: 12, marginVertical: 8,
    borderWidth: 1, borderColor: '#C9DCF5',
  },
  stepsTitle: { fontSize: 12.5, fontWeight: '800', color: '#123B78', marginBottom: 8 },
  stepRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginBottom: 6 },
  stepNum: {
    width: 20, height: 20, borderRadius: 10, backgroundColor: '#1E5FBE',
    alignItems: 'center', justifyContent: 'center', marginTop: 1,
  },
  stepNumText: { fontSize: 11, fontWeight: '900', color: '#FFF' },
  stepText: { flex: 1, fontSize: 12.5, color: '#1A2A44', lineHeight: 19, fontWeight: '500' },
});
