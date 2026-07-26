import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Line, Path, Circle, Rect, Text as SvgText, Polygon, G, Ellipse } from 'react-native-svg';

/**
 * 設備系（消防設備士・給水装置工事主任技術者）のSVG図解部品。
 * 文字で描くと崩れる「平面の配置」「立面の高さ関係」「系統のつながり」を、
 * 実際の形として描く。
 */

export const C = {
  blue: '#1E5FBE', red: '#D32F2F', green: '#2E7D32', orange: '#E65100',
  purple: '#6A1B9A', cyan: '#0097A7', gray: '#607D8B', dark: '#1A2A44', light: '#B0BEC5',
};

const box = { width: '100%' as const, height: '100%' as const };

function Wrap({ children, ratio = 1.9, title, note }:
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

/** 寸法線（両端矢印＋ラベル） */
function Dim({ x1, y1, x2, y2, label, color = C.gray }:
  { x1: number; y1: number; x2: number; y2: number; label: string; color?: string }) {
  const horiz = y1 === y2;
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={1.1} />
      {horiz ? (
        <>
          <Line x1={x1} y1={y1 - 4} x2={x1} y2={y1 + 4} stroke={color} strokeWidth={1.1} />
          <Line x1={x2} y1={y2 - 4} x2={x2} y2={y2 + 4} stroke={color} strokeWidth={1.1} />
          <SvgText x={mx} y={my - 5} fontSize={10.5} fill={color} fontWeight="bold" textAnchor="middle">{label}</SvgText>
        </>
      ) : (
        <>
          <Line x1={x1 - 4} y1={y1} x2={x1 + 4} y2={y1} stroke={color} strokeWidth={1.1} />
          <Line x1={x2 - 4} y1={y2} x2={x2 + 4} y2={y2} stroke={color} strokeWidth={1.1} />
          <SvgText x={mx + 6} y={my + 3} fontSize={10.5} fill={color} fontWeight="bold">{label}</SvgText>
        </>
      )}
    </G>
  );
}

/* ══════════════════════════════════════════
   警戒区域の設定（消防設備士 甲種4類）
   ══════════════════════════════════════════ */
export function WarningZone({
  title = '警戒区域の分け方', note,
}: { title?: string; note?: string }) {
  return (
    <Wrap ratio={1.55} title={title} note={note}>
      <Svg viewBox="0 0 380 245" {...box}>
        {/* 建物の外形 */}
        <Rect x={30} y={40} width={230} height={150} fill="#F7FAFF" stroke={C.dark} strokeWidth={2} />
        {/* 区域分割線 */}
        <Line x1={145} y1={40} x2={145} y2={190} stroke={C.red} strokeWidth={2} strokeDasharray="6,4" />
        <SvgText x={87} y={118} fontSize={13} fill={C.red} fontWeight="bold" textAnchor="middle">警戒区域①</SvgText>
        <SvgText x={87} y={136} fontSize={11} fill={C.gray} textAnchor="middle">600m²以下</SvgText>
        <SvgText x={202} y={118} fontSize={13} fill={C.red} fontWeight="bold" textAnchor="middle">警戒区域②</SvgText>
        <SvgText x={202} y={136} fontSize={11} fill={C.gray} textAnchor="middle">600m²以下</SvgText>
        {/* 寸法 */}
        <Dim x1={30} y1={30} x2={260} y2={30} label="一辺は50m以下★" />
        {/* たて穴区画 */}
        <Rect x={300} y={40} width={52} height={150} fill="#FFF3E0" stroke={C.orange} strokeWidth={2} />
        <SvgText x={326} y={92} fontSize={11} fill={C.orange} fontWeight="bold" textAnchor="middle">階段</SvgText>
        <SvgText x={326} y={108} fontSize={11} fill={C.orange} fontWeight="bold" textAnchor="middle">EV</SvgText>
        <SvgText x={326} y={130} fontSize={9.5} fill={C.orange} textAnchor="middle">たて穴は</SvgText>
        <SvgText x={326} y={143} fontSize={9.5} fill={C.orange} textAnchor="middle">別の区域★</SvgText>
        {/* 注記 */}
        <SvgText x={30} y={212} fontSize={11} fill={C.dark} fontWeight="bold">原則：1警戒区域は600m²以下・一辺50m以下</SvgText>
        <SvgText x={30} y={229} fontSize={11} fill={C.green} fontWeight="bold">例外：主要な出入口から内部を見通せる場合は1,000m²以下</SvgText>
      </Svg>
    </Wrap>
  );
}

/* ══════════════════════════════════════════
   感知器の取付位置（はり・換気口との距離）
   ══════════════════════════════════════════ */
export function DetectorMount({
  title = '感知器の取付位置', note,
}: { title?: string; note?: string }) {
  return (
    <Wrap ratio={1.75} title={title} note={note}>
      <Svg viewBox="0 0 380 217" {...box}>
        {/* 天井 */}
        <Rect x={24} y={40} width={330} height={10} fill="#CFD8DC" stroke={C.dark} strokeWidth={1.8} />
        <SvgText x={28} y={34} fontSize={11} fill={C.gray} fontWeight="bold">天井面</SvgText>
        {/* はり */}
        <Rect x={168} y={50} width={22} height={40} fill="#B0BEC5" stroke={C.dark} strokeWidth={1.8} />
        <SvgText x={179} y={102} fontSize={10.5} fill={C.dark} fontWeight="bold" textAnchor="middle">はり</SvgText>
        {/* 感知器（左：適正） */}
        <Circle cx={100} cy={60} r={11} fill="#FFF" stroke={C.green} strokeWidth={2.4} />
        <Circle cx={100} cy={60} r={4} fill={C.green} />
        <SvgText x={100} y={88} fontSize={10.5} fill={C.green} fontWeight="bold" textAnchor="middle">○適正</SvgText>
        <Dim x1={100} y1={116} x2={168} y2={116} label="0.6m以上" color={C.green} />
        {/* 感知器（右：不適） */}
        <Circle cx={205} cy={60} r={11} fill="#FFF" stroke={C.red} strokeWidth={2.4} />
        <Line x1={198} y1={53} x2={212} y2={67} stroke={C.red} strokeWidth={2.4} />
        <Line x1={212} y1={53} x2={198} y2={67} stroke={C.red} strokeWidth={2.4} />
        <SvgText x={205} y={88} fontSize={10.5} fill={C.red} fontWeight="bold" textAnchor="middle">×近すぎ</SvgText>
        {/* 換気口 */}
        <Rect x={300} y={40} width={40} height={10} fill="#E1F5FE" stroke={C.cyan} strokeWidth={1.8} />
        <SvgText x={320} y={34} fontSize={10} fill={C.cyan} fontWeight="bold" textAnchor="middle">換気口</SvgText>
        {[0, 1, 2].map(i => (
          <Path key={i} d={`M ${306 + i * 12} 52 q 4 8 0 16`} stroke={C.cyan} strokeWidth={1.4} fill="none" />
        ))}
        <Dim x1={262} y1={116} x2={300} y2={116} label="1.5m以上" color={C.cyan} />
        <Circle cx={262} cy={60} r={11} fill="#FFF" stroke={C.green} strokeWidth={2.4} />
        <Circle cx={262} cy={60} r={4} fill={C.green} />
        {/* 凡例 */}
        <SvgText x={24} y={158} fontSize={11.5} fill={C.dark} fontWeight="bold">はりからの距離</SvgText>
        <SvgText x={24} y={176} fontSize={11} fill={C.orange} fontWeight="bold">★熱感知器：0.4m以上　★煙感知器：0.6m以上</SvgText>
        <SvgText x={24} y={196} fontSize={11} fill={C.cyan} fontWeight="bold">★換気口等の吹出口から1.5m以上離す</SvgText>
        <SvgText x={24} y={212} fontSize={10.5} fill={C.gray}>（空気の流れで煙が届かず、作動が遅れるため）</SvgText>
      </Svg>
    </Wrap>
  );
}

/* ══════════════════════════════════════════
   給水方式の3類型（給水装置）
   ══════════════════════════════════════════ */
export function WaterSupplyTypes({
  title = '給水方式の3類型', note,
}: { title?: string; note?: string }) {
  // 縦の配置：見出し(上) → 建物 → 機器 → 配水管(下) と層を分け、重なりを防ぐ
  const yTitle = 18, ySub = 31, yB0 = 42, yB1 = 132, yEq = 150, yMain = 200;
  const bldg = (x: number, label: string, sub: string, color: string) => (
    <G>
      <SvgText x={x + 36} y={yTitle} fontSize={11.5} fill={color} fontWeight="bold" textAnchor="middle">{label}</SvgText>
      <SvgText x={x + 36} y={ySub} fontSize={9.5} fill={C.gray} textAnchor="middle">{sub}</SvgText>
      <Rect x={x} y={yB0} width={72} height={yB1 - yB0} fill="#F7FAFF" stroke={C.dark} strokeWidth={1.8} />
      {[1, 2, 3].map(i => (
        <Line key={i} x1={x} y1={yB0 + (i * (yB1 - yB0)) / 4} x2={x + 72} y2={yB0 + (i * (yB1 - yB0)) / 4}
              stroke={C.light} strokeWidth={1} />
      ))}
    </G>
  );
  return (
    <Wrap ratio={1.48} title={title} note={note}>
      <Svg viewBox="0 0 380 257" {...box}>
        {/* 配水管（最下層） */}
        <Rect x={10} y={yMain} width={360} height={12} fill="#B3E5FC" stroke={C.blue} strokeWidth={1.8} />
        <SvgText x={190} y={228} fontSize={10.5} fill={C.blue} fontWeight="bold" textAnchor="middle">
          配水管（水道事業者）
        </SvgText>

        {/* ① 直結直圧式：配水管から建物頂部まで一本 */}
        {bldg(22, '①直結直圧式', '配水管の圧力で直接', C.green)}
        <Line x1={58} y1={yMain} x2={58} y2={yB0 + 10} stroke={C.blue} strokeWidth={2.6} />
        <Polygon points={`58,${yB0 + 2} 54,${yB0 + 12} 62,${yB0 + 12}`} fill={C.blue} />
        <SvgText x={58} y={yEq + 22} fontSize={9.5} fill={C.green} fontWeight="bold" textAnchor="middle">機器なし</SvgText>

        {/* ② 直結増圧式：途中に増圧ポンプ */}
        {bldg(150, '②直結増圧式', 'ポンプで押し上げ', C.orange)}
        <Line x1={186} y1={yMain} x2={186} y2={yEq + 22} stroke={C.blue} strokeWidth={2.6} />
        <Circle cx={186} cy={yEq + 11} r={11} fill="#FFF3E0" stroke={C.orange} strokeWidth={2.2} />
        <SvgText x={186} y={yEq + 15} fontSize={9.5} fill={C.orange} fontWeight="bold" textAnchor="middle">P</SvgText>
        <Line x1={186} y1={yEq} x2={186} y2={yB0 + 10} stroke={C.blue} strokeWidth={2.6} />
        <Polygon points={`186,${yB0 + 2} 182,${yB0 + 12} 190,${yB0 + 12}`} fill={C.blue} />
        <SvgText x={186} y={yEq + 38} fontSize={9.5} fill={C.orange} fontWeight="bold" textAnchor="middle">増圧ポンプ</SvgText>

        {/* ③ 受水槽式：受水槽＋揚水ポンプ */}
        {bldg(278, '③受水槽式', 'いったん貯める', C.purple)}
        <Line x1={314} y1={yMain} x2={314} y2={yEq + 26} stroke={C.blue} strokeWidth={2.6} />
        <Rect x={292} y={yEq + 6} width={44} height={20} fill="#EDE7F6" stroke={C.purple} strokeWidth={2} />
        <SvgText x={314} y={yEq + 20} fontSize={9.5} fill={C.purple} fontWeight="bold" textAnchor="middle">受水槽</SvgText>
        <Line x1={314} y1={yEq + 6} x2={314} y2={yB0 + 10} stroke={C.blue} strokeWidth={2.6} />
        <Polygon points={`314,${yB0 + 2} 310,${yB0 + 12} 318,${yB0 + 12}`} fill={C.blue} />
        {/* 給水装置の境界 */}
        <Line x1={272} y1={yEq + 2} x2={356} y2={yEq + 2} stroke={C.red} strokeWidth={1.6} strokeDasharray="5,3" />
        <SvgText x={314} y={yEq + 38} fontSize={9} fill={C.red} fontWeight="bold" textAnchor="middle">受水槽以降は</SvgText>
        <SvgText x={314} y={yEq + 48} fontSize={9} fill={C.red} fontWeight="bold" textAnchor="middle">給水装置ではない★</SvgText>

        {/* 最下部の注記 */}
        <SvgText x={190} y={248} fontSize={10} fill={C.gray} textAnchor="middle">
          直結式は配水管の水圧を利用、受水槽式はいったん縁を切る
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/* ══════════════════════════════════════════
   吐水口空間（逆流防止）
   ══════════════════════════════════════════ */
export function AirGap({
  title = '吐水口空間（逆流防止の基本）', note,
}: { title?: string; note?: string }) {
  const yOver = 132, yTap = 78;
  return (
    <Wrap ratio={1.62} title={title} note={note}>
      <Svg viewBox="0 0 380 235" {...box}>
        {/* 水受け容器 */}
        <Path d="M 92 132 L 92 196 L 268 196 L 268 132" fill="#E1F5FE" stroke={C.dark} strokeWidth={2.2} />
        {/* 越流面 */}
        <Line x1={80} y1={yOver} x2={280} y2={yOver} stroke={C.red} strokeWidth={2} strokeDasharray="7,4" />
        <SvgText x={286} y={yOver + 4} fontSize={10.5} fill={C.red} fontWeight="bold">越流面</SvgText>
        {/* 水面 */}
        <Rect x={94} y={150} width={172} height={44} fill="#B3E5FC" opacity={0.75} />
        {/* 給水栓 */}
        <Rect x={168} y={34} width={14} height={30} fill="#CFD8DC" stroke={C.dark} strokeWidth={1.8} />
        <Rect x={158} y={64} width={34} height={14} fill="#90A4AE" stroke={C.dark} strokeWidth={1.8} />
        <SvgText x={200} y={54} fontSize={10.5} fill={C.gray} fontWeight="bold">給水栓</SvgText>
        {/* 吐水口空間の寸法 */}
        <Dim x1={175} y1={yTap} x2={175} y2={yOver} label="" color={C.green} />
        <SvgText x={186} y={(yTap + yOver) / 2 + 4} fontSize={12} fill={C.green} fontWeight="bold">吐水口空間★</SvgText>
        {/* 落下する水 */}
        {[0, 1, 2].map(i => (
          <Line key={i} x1={175} y1={yTap + 6 + i * 14} x2={175} y2={yTap + 14 + i * 14} stroke={C.blue} strokeWidth={2} />
        ))}
        {/* 説明 */}
        <SvgText x={20} y={218} fontSize={11.5} fill={C.dark} fontWeight="bold">吐水口と越流面を離すことで、水が逆に吸い込まれても</SvgText>
        <SvgText x={20} y={232} fontSize={11.5} fill={C.dark} fontWeight="bold">給水管に戻らない（空気で縁が切れている）★</SvgText>
      </Svg>
    </Wrap>
  );
}

/** 計算ステップ（式→代入→答え） */
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
