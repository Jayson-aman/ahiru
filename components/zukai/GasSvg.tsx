import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Line, Path, Circle, Rect, Text as SvgText, Polygon, G, Defs, LinearGradient, Stop } from 'react-native-svg';
import { C, Arrow } from './ZukaiSvg';

function Wrap({ children, ratio = 1.8, title }: { children: React.ReactNode; ratio?: number; title?: string }) {
  return (
    <View style={s.wrap}>
      {title ? <Text style={s.title}>📐 {title}</Text> : null}
      <View style={{ width: '100%', maxWidth: 420, alignSelf: 'center', aspectRatio: ratio }}>{children}</View>
    </View>
  );
}

/** 燃焼範囲（爆発範囲）の帯グラフ */
export function CombustionRangeBar({
  gases,
  title,
}: {
  gases: { name: string; lower: number; upper: number; color?: string }[];
  title?: string;
}) {
  const W = 320, rowH = 34, top = 30;
  const H = top + gases.length * rowH + 34;
  const x0 = 62, x1 = 300;
  const maxPct = 16;
  const px = (v: number) => x0 + (v / maxPct) * (x1 - x0);
  const ticks = [0, 4, 8, 12, 16];
  return (
    <Wrap ratio={W / H} title={title}>
      <Svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%">
        {ticks.map(t => (
          <G key={t}>
            <Line x1={px(t)} y1={top - 8} x2={px(t)} y2={top + gases.length * rowH - 6} stroke="#E3EAF2" strokeWidth={1} />
            <SvgText x={px(t)} y={top + gases.length * rowH + 12} fontSize={9} fill={C.gray} textAnchor="middle">{t}</SvgText>
          </G>
        ))}
        <SvgText x={(x0 + x1) / 2} y={top + gases.length * rowH + 27} fontSize={10} fill={C.dark} textAnchor="middle">
          空気中の濃度（vol%）
        </SvgText>
        {gases.map((g, i) => {
          const y = top + i * rowH;
          const col = g.color ?? C.red;
          return (
            <G key={g.name}>
              <SvgText x={x0 - 6} y={y + 12} fontSize={11} fill={C.dark} fontWeight="bold" textAnchor="end">{g.name}</SvgText>
              <Rect x={x0} y={y} width={x1 - x0} height={17} fill="#F5F8FC" rx={3} />
              <Rect x={px(g.lower)} y={y} width={px(g.upper) - px(g.lower)} height={17} fill={col} opacity={0.82} rx={3} />
              <SvgText x={px(g.lower)} y={y + 29} fontSize={9} fill={col} fontWeight="bold" textAnchor="middle">{g.lower}</SvgText>
              <SvgText x={px(g.upper)} y={y + 29} fontSize={9} fill={col} fontWeight="bold" textAnchor="middle">{g.upper}</SvgText>
            </G>
          );
        })}
        <SvgText x={x0 + 4} y={top - 14} fontSize={9} fill={C.gray}>← 薄すぎて燃えない</SvgText>
        <SvgText x={x1 - 4} y={top - 14} fontSize={9} fill={C.gray} textAnchor="end">濃すぎて燃えない →</SvgText>
      </Svg>
    </Wrap>
  );
}

/** LPガス容器の構造と充填率 */
export function GasCylinder({ fillPct = 85, title }: { fillPct?: number; title?: string }) {
  const bodyTop = 44, bodyBot = 168, bodyH = bodyBot - bodyTop;
  const liqTop = bodyBot - (bodyH * fillPct) / 100;
  return (
    <Wrap ratio={1.55} title={title}>
      <Svg viewBox="0 0 300 195" width="100%" height="100%">
        <Rect x={128} y={12} width={16} height={16} fill={C.gray} rx={2} />
        <Rect x={120} y={26} width={32} height={10} fill={C.dark} rx={2} />
        <SvgText x={160} y={22} fontSize={10} fill={C.dark}>← バルブ・安全弁</SvgText>
        <Path d="M 96 60 Q 96 44 136 44 Q 176 44 176 60 L 176 160 Q 176 172 136 172 Q 96 172 96 160 Z"
          fill="#FFFFFF" stroke={C.dark} strokeWidth={2.4} />
        <Path d={`M 97 ${liqTop} L 175 ${liqTop} L 175 160 Q 175 171 136 171 Q 97 171 97 160 Z`}
          fill={C.blue} opacity={0.28} />
        <Line x1={97} y1={liqTop} x2={175} y2={liqTop} stroke={C.blue} strokeWidth={2} />
        <SvgText x={136} y={liqTop - 8} fontSize={10} fill={C.gray} textAnchor="middle">気相（ボイルオフガス）</SvgText>
        <SvgText x={136} y={liqTop + 22} fontSize={11} fill={C.blue} fontWeight="bold" textAnchor="middle">液相 LPガス</SvgText>
        <Arrow x1={210} y1={bodyBot} x2={210} y2={liqTop} color={C.green} w={2} />
        <SvgText x={218} y={(bodyBot + liqTop) / 2} fontSize={11} fill={C.green} fontWeight="bold">充填率</SvgText>
        <SvgText x={218} y={(bodyBot + liqTop) / 2 + 14} fontSize={13} fill={C.green} fontWeight="bold">{fillPct}%以下</SvgText>
        <SvgText x={16} y={bodyTop + 26} fontSize={9} fill={C.red}>温度↑で</SvgText>
        <SvgText x={16} y={bodyTop + 38} fontSize={9} fill={C.red}>圧力↑</SvgText>
        <Arrow x1={44} y1={bodyTop + 46} x2={44} y2={bodyTop + 14} color={C.red} w={2} />
        <SvgText x={150} y={190} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 過充填は温度上昇時の安全弁作動を招く
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 完全燃焼と不完全燃焼の比較 */
export function CombustionCompare({ title }: { title?: string }) {
  const panel = (x: number, ok: boolean) => {
    const col = ok ? C.green : C.red;
    return (
      <G>
        <Rect x={x} y={22} width={130} height={126} fill={ok ? '#F1F8F2' : '#FDF2F2'} stroke={col} strokeWidth={1.6} rx={7} />
        <SvgText x={x + 65} y={40} fontSize={12} fill={col} fontWeight="bold" textAnchor="middle">
          {ok ? '完全燃焼' : '不完全燃焼'}
        </SvgText>
        <Path
          d={ok
            ? `M ${x + 65} 96 q -17 -12 -17 -28 q 0 -14 17 -24 q 17 10 17 24 q 0 16 -17 28 z`
            : `M ${x + 65} 96 q -19 -10 -19 -26 q 0 -16 19 -26 q 19 10 19 26 q 0 16 -19 26 z`}
          fill={ok ? '#1E88E5' : '#F9A825'}
          opacity={0.85}
        />
        <SvgText x={x + 65} y={78} fontSize={9} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">
          {ok ? '青い炎' : '黄色い炎'}
        </SvgText>
        <SvgText x={x + 65} y={116} fontSize={10} fill={C.dark} textAnchor="middle">
          {ok ? '酸素が十分' : '酸素が不足'}
        </SvgText>
        <SvgText x={x + 65} y={134} fontSize={11} fill={col} fontWeight="bold" textAnchor="middle">
          {ok ? 'CO₂ + H₂O' : 'CO 発生 ☠'}
        </SvgText>
      </G>
    );
  };
  return (
    <Wrap ratio={1.85} title={title}>
      <Svg viewBox="0 0 300 162" width="100%" height="100%">
        {panel(10, true)}
        {panel(160, false)}
        <SvgText x={150} y={158} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 給排気の確保がCO中毒を防ぐ
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** ハインリッヒの法則（1:29:300ピラミッド） */
export function HeinrichPyramid({ title }: { title?: string }) {
  const rows = [
    { label: '重大事故', n: '1件', color: C.red, w: 60 },
    { label: '軽微な事故', n: '29件', color: C.orange, w: 140 },
    { label: 'ヒヤリハット', n: '300件', color: C.green, w: 230 },
  ];
  return (
    <Wrap ratio={1.8} title={title}>
      <Svg viewBox="0 0 300 166" width="100%" height="100%">
        {rows.map((r, i) => {
          const y = 16 + i * 42;
          const x = 150 - r.w / 2;
          return (
            <G key={r.label}>
              <Rect x={x} y={y} width={r.w} height={34} fill={r.color} opacity={0.85} rx={4} />
              <SvgText x={150} y={y + 15} fontSize={11} fill="#FFFFFF" fontWeight="bold" textAnchor="middle">{r.label}</SvgText>
              <SvgText x={150} y={y + 28} fontSize={11} fill="#FFFFFF" fontWeight="bold" textAnchor="middle">{r.n}</SvgText>
            </G>
          );
        })}
        <Arrow x1={286} y1={140} x2={286} y2={26} color={C.blue} w={2} />
        <SvgText x={296} y={92} fontSize={9} fill={C.blue} textAnchor="middle" transform="rotate(90 296 92)">
          底辺の対策が頂点を防ぐ
        </SvgText>
        <SvgText x={150} y={160} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          ⚠ ヒヤリハット報告が重大事故を未然に防ぐ
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 圧力容器の開口部と応力集中 */
export function StressConcentration({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.9} title={title}>
      <Svg viewBox="0 0 300 158" width="100%" height="100%">
        <Defs>
          <LinearGradient id="stressGrad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#D32F2F" stopOpacity="0.55" />
            <Stop offset="1" stopColor="#D32F2F" stopOpacity="0" />
          </LinearGradient>
        </Defs>
        <Rect x={24} y={44} width={252} height={72} fill="#ECEFF1" stroke={C.dark} strokeWidth={2} rx={5} />
        <Circle cx={150} cy={80} r={34} fill="url(#stressGrad)" />
        <Circle cx={150} cy={80} r={19} fill="#FFFFFF" stroke={C.red} strokeWidth={2.4} />
        <SvgText x={150} y={84} fontSize={10} fill={C.red} textAnchor="middle" fontWeight="bold">開口部</SvgText>
        <Circle cx={150} cy={80} r={27} fill="none" stroke={C.red} strokeWidth={1.4} strokeDasharray="4 3" />
        <SvgText x={150} y={34} fontSize={10} fill={C.red} textAnchor="middle" fontWeight="bold">応力集中（理論上 約3倍）</SvgText>
        <Arrow x1={150} y1={40} x2={150} y2={56} color={C.red} w={1.8} />
        {[62, 80, 98].map(y => (
          <G key={y}>
            <Arrow x1={4} y1={y} x2={22} y2={y} color={C.blue} w={1.6} />
            <Arrow x1={296} y1={y} x2={278} y2={y} color={C.blue} w={1.6} />
          </G>
        ))}
        <SvgText x={62} y={136} fontSize={10} fill={C.green} fontWeight="bold">対策：補強リング／肉厚増加</SvgText>
        <SvgText x={150} y={152} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 開口部周辺が構造上の弱点となる
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 多段圧縮＋中間冷却 */
export function MultiStageCompressor({ stages = 3, title }: { stages?: number; title?: string }) {
  const W = 320, H = 150;
  const x0 = 22, seg = (W - 52) / stages;
  return (
    <Wrap ratio={W / H} title={title}>
      <Svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%">
        <Line x1={4} y1={60} x2={x0} y2={60} stroke={C.dark} strokeWidth={2} />
        <SvgText x={6} y={50} fontSize={9} fill={C.gray}>低圧</SvgText>
        {Array.from({ length: stages }).map((_, i) => {
          const x = x0 + i * seg;
          const last = i === stages - 1;
          return (
            <G key={i}>
              <Rect x={x} y={42} width={44} height={36} fill="#E3F2FD" stroke={C.blue} strokeWidth={2} rx={4} />
              <SvgText x={x + 22} y={58} fontSize={10} fill={C.blue} fontWeight="bold" textAnchor="middle">{i + 1}段</SvgText>
              <SvgText x={x + 22} y={71} fontSize={9} fill={C.red} textAnchor="middle">温度↑</SvgText>
              {!last && (
                <G>
                  <Line x1={x + 44} y1={60} x2={x + 60} y2={60} stroke={C.dark} strokeWidth={2} />
                  <Rect x={x + 60} y={46} width={26} height={28} fill="#E8F5E9" stroke={C.green} strokeWidth={1.8} rx={3} />
                  <SvgText x={x + 73} y={58} fontSize={8} fill={C.green} textAnchor="middle" fontWeight="bold">中間</SvgText>
                  <SvgText x={x + 73} y={69} fontSize={8} fill={C.green} textAnchor="middle" fontWeight="bold">冷却</SvgText>
                  <Line x1={x + 86} y1={60} x2={x + seg} y2={60} stroke={C.dark} strokeWidth={2} />
                </G>
              )}
              {last && <Arrow x1={x + 44} y1={60} x2={W - 6} y2={60} color={C.dark} w={2} />}
            </G>
          );
        })}
        <SvgText x={W - 8} y={50} fontSize={9} fill={C.gray} textAnchor="end">高圧</SvgText>
        <Rect x={16} y={94} width={W - 32} height={22} fill="#FFF8E1" stroke={C.orange} strokeWidth={1.4} rx={4} />
        <SvgText x={W / 2} y={109} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          断熱圧縮 → 温度上昇 → 段間で冷却して効率回復
        </SvgText>
        <SvgText x={W / 2} y={136} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          ⚠ 単段の高圧縮比は温度上昇・効率低下を招く
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 延性脆性遷移温度（低温脆性）カーブ */
export function DBTTCurve({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.75} title={title}>
      <Svg viewBox="0 0 300 172" width="100%" height="100%">
        <Line x1={40} y1={132} x2={286} y2={132} stroke={C.dark} strokeWidth={1.8} />
        <Line x1={40} y1={132} x2={40} y2={20} stroke={C.dark} strokeWidth={1.8} />
        <SvgText x={163} y={150} fontSize={10} fill={C.dark} textAnchor="middle">温度 →</SvgText>
        <SvgText x={12} y={76} fontSize={10} fill={C.dark}>靭性</SvgText>
        <Rect x={40} y={20} width={112} height={112} fill="#FDF2F2" />
        <Rect x={172} y={20} width={114} height={112} fill="#F1F8F2" />
        <Path d="M 46 122 L 100 118 Q 140 114 162 70 Q 184 30 276 26" stroke={C.blue} strokeWidth={2.8} fill="none" />
        <Line x1={162} y1={132} x2={162} y2={26} stroke={C.orange} strokeWidth={1.8} strokeDasharray="5 4" />
        <SvgText x={162} y={16} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">遷移温度(DBTT)</SvgText>
        <SvgText x={94} y={56} fontSize={11} fill={C.red} textAnchor="middle" fontWeight="bold">脆性破壊域</SvgText>
        <SvgText x={94} y={70} fontSize={9} fill={C.red} textAnchor="middle">前兆なく急激に破断</SvgText>
        <SvgText x={228} y={98} fontSize={11} fill={C.green} textAnchor="middle" fontWeight="bold">延性破壊域</SvgText>
        <SvgText x={228} y={112} fontSize={9} fill={C.green} textAnchor="middle">変形を伴う</SvgText>
        <SvgText x={150} y={166} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 低温用設備はステンレス鋼等の低温靭性材料を選定
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** PDCAサイクル */
export function PDCACycle({
  labels = ['Plan 計画', 'Do 実施', 'Check 評価', 'Act 改善'],
  title,
}: { labels?: string[]; title?: string }) {
  const cx = 150, cy = 84, r = 56;
  const cols = [C.blue, C.green, C.orange, C.red];
  const pos = [
    { x: cx, y: cy - r }, { x: cx + r, y: cy },
    { x: cx, y: cy + r }, { x: cx - r, y: cy },
  ];
  return (
    <Wrap ratio={1.72} title={title}>
      <Svg viewBox="0 0 300 175" width="100%" height="100%">
        <Circle cx={cx} cy={cy} r={r} fill="none" stroke="#CFD8DC" strokeWidth={2.4} strokeDasharray="6 5" />
        {[0, 1, 2, 3].map(i => {
          const a0 = -Math.PI / 2 + (i * Math.PI) / 2 + 0.34;
          const a1 = -Math.PI / 2 + ((i + 1) * Math.PI) / 2 - 0.34;
          return (
            <Arrow key={i}
              x1={cx + r * Math.cos(a0)} y1={cy + r * Math.sin(a0)}
              x2={cx + r * Math.cos(a1)} y2={cy + r * Math.sin(a1)}
              color={cols[i]} w={2} />
          );
        })}
        {pos.map((p, i) => (
          <G key={i}>
            <Circle cx={p.x} cy={p.y} r={25} fill={cols[i]} opacity={0.9} />
            <SvgText x={p.x} y={p.y + 4} fontSize={9.5} fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
              {labels[i]}
            </SvgText>
          </G>
        ))}
        <SvgText x={150} y={169} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          ⚠ 回し続けることが継続的改善の本質
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 法令の階層構造 */
export function LegalHierarchy({
  levels = [
    { name: '法律（高圧ガス保安法）', desc: '規制の大枠・基本制度', color: C.blue },
    { name: '政令・省令', desc: '詳細な技術基準', color: C.green },
    { name: '告示・例示基準', desc: '具体的な仕様例', color: C.orange },
  ],
  title,
}: { levels?: { name: string; desc: string; color: string }[]; title?: string }) {
  const H = 34 + levels.length * 40;
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        {levels.map((lv, i) => {
          const y = 10 + i * 40;
          const w = 150 + i * 55;
          const x = 150 - w / 2;
          return (
            <G key={lv.name}>
              <Rect x={x} y={y} width={w} height={32} fill={lv.color} opacity={0.88} rx={4} />
              <SvgText x={150} y={y + 14} fontSize={10.5} fill="#FFFFFF" fontWeight="bold" textAnchor="middle">{lv.name}</SvgText>
              <SvgText x={150} y={y + 26} fontSize={9} fill="#FFFFFF" textAnchor="middle">{lv.desc}</SvgText>
              {i < levels.length - 1 && <Arrow x1={150} y1={y + 32} x2={150} y2={y + 39} color={C.gray} w={1.6} />}
            </G>
          );
        })}
        <SvgText x={150} y={H - 6} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          ⚠ 委任立法が技術進歩への機動的な対応を可能にする
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 安全文化の成熟度段階 */
export function SafetyCultureLadder({ title }: { title?: string }) {
  const steps = [
    { name: '安全文化', desc: '自発的にリスクを察知・改善', color: C.green },
    { name: 'コンプライアンス', desc: 'ルールは守るが受動的', color: C.orange },
    { name: '無知', desc: 'リスクに気づいていない', color: C.red },
  ];
  return (
    <Wrap ratio={1.72} title={title}>
      <Svg viewBox="0 0 300 175" width="100%" height="100%">
        {steps.map((st, i) => {
          const y = 14 + i * 44;
          const x = 30 + (steps.length - 1 - i) * 26;
          const w = 244 - (steps.length - 1 - i) * 26;
          return (
            <G key={st.name}>
              <Rect x={x} y={y} width={w} height={36} fill={st.color} opacity={0.85} rx={4} />
              <SvgText x={x + 12} y={y + 16} fontSize={11} fill="#FFFFFF" fontWeight="bold">{st.name}</SvgText>
              <SvgText x={x + 12} y={y + 29} fontSize={9} fill="#FFFFFF">{st.desc}</SvgText>
            </G>
          );
        })}
        <Arrow x1={16} y1={140} x2={16} y2={22} color={C.blue} w={2.2} />
        <SvgText x={12} y={92} fontSize={9} fill={C.blue} textAnchor="middle" transform="rotate(-90 12 92)">成熟度</SvgText>
        <SvgText x={150} y={168} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          ⚠ 主体性の有無が安全文化の分かれ目
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 横並びフロー図（供給チェーン・プロセス手順など） */
export function FlowSteps({
  steps,
  note,
  title,
}: { steps: { label: string; sub?: string }[]; note?: string; title?: string }) {
  const n = steps.length;
  const W = 320, boxW = Math.min(74, (W - 20 - (n - 1) * 12) / n);
  const gap = (W - 20 - n * boxW) / Math.max(1, n - 1);
  const H = note ? 120 : 96;
  const cols = [C.blue, C.green, C.orange, C.red, C.gray];
  return (
    <Wrap ratio={W / H} title={title}>
      <Svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%">
        {steps.map((st, i) => {
          const x = 10 + i * (boxW + gap);
          const col = cols[i % cols.length];
          return (
            <G key={i}>
              <Rect x={x} y={22} width={boxW} height={44} fill="#FFFFFF" stroke={col} strokeWidth={2} rx={5} />
              <SvgText x={x + boxW / 2} y={40} fontSize={10} fill={col} fontWeight="bold" textAnchor="middle">{st.label}</SvgText>
              {st.sub ? (
                <SvgText x={x + boxW / 2} y={55} fontSize={8.5} fill={C.gray} textAnchor="middle">{st.sub}</SvgText>
              ) : null}
              {i < n - 1 && (
                <Arrow x1={x + boxW + 1} y1={44} x2={x + boxW + gap - 1} y2={44} color={C.gray} w={1.8} />
              )}
            </G>
          );
        })}
        {note ? (
          <SvgText x={W / 2} y={92} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">{note}</SvgText>
        ) : null}
      </Svg>
    </Wrap>
  );
}

/** 2項目の対比パネル */
export function ComparePanel({
  left,
  right,
  note,
  title,
}: {
  left: { head: string; items: string[] };
  right: { head: string; items: string[] };
  note?: string;
  title?: string;
}) {
  const rows = Math.max(left.items.length, right.items.length);
  const H = 46 + rows * 17 + (note ? 22 : 6);
  const panel = (x: number, d: { head: string; items: string[] }, col: string, bg: string) => (
    <G>
      <Rect x={x} y={12} width={138} height={26 + rows * 17} fill={bg} stroke={col} strokeWidth={1.7} rx={6} />
      <Rect x={x} y={12} width={138} height={22} fill={col} rx={6} />
      <Rect x={x} y={26} width={138} height={8} fill={col} />
      <SvgText x={x + 69} y={28} fontSize={11} fill="#FFFFFF" fontWeight="bold" textAnchor="middle">{d.head}</SvgText>
      {d.items.map((it, i) => (
        <SvgText key={i} x={x + 8} y={50 + i * 17} fontSize={9.5} fill={C.dark}>• {it}</SvgText>
      ))}
    </G>
  );
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        {panel(8, left, C.blue, '#F2F7FD')}
        {panel(154, right, C.green, '#F1F8F2')}
        {note ? (
          <SvgText x={150} y={H - 8} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">{note}</SvgText>
        ) : null}
      </Svg>
    </Wrap>
  );
}

/** 単調増加／減少カーブ（S-N曲線・Z因子など汎用） */
export function TrendCurve({
  xLabel,
  yLabel,
  path,
  zones,
  note,
  title,
}: {
  xLabel: string;
  yLabel: string;
  path: string;
  zones?: { x: number; w: number; color: string; label: string }[];
  note?: string;
  title?: string;
}) {
  return (
    <Wrap ratio={1.78} title={title}>
      <Svg viewBox="0 0 300 168" width="100%" height="100%">
        {zones?.map((z, i) => (
          <G key={i}>
            <Rect x={z.x} y={22} width={z.w} height={106} fill={z.color} opacity={0.14} />
            <SvgText x={z.x + z.w / 2} y={38} fontSize={9.5} fill={z.color} textAnchor="middle" fontWeight="bold">{z.label}</SvgText>
          </G>
        ))}
        <Line x1={40} y1={128} x2={288} y2={128} stroke={C.dark} strokeWidth={1.8} />
        <Line x1={40} y1={128} x2={40} y2={20} stroke={C.dark} strokeWidth={1.8} />
        <SvgText x={164} y={146} fontSize={10} fill={C.dark} textAnchor="middle">{xLabel}</SvgText>
        <SvgText x={6} y={76} fontSize={10} fill={C.dark}>{yLabel}</SvgText>
        <Path d={path} stroke={C.blue} strokeWidth={2.8} fill="none" />
        {note ? (
          <SvgText x={150} y={162} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">{note}</SvgText>
        ) : null}
      </Svg>
    </Wrap>
  );
}

const s = StyleSheet.create({
  wrap: {
    backgroundColor: '#FFFFFF', borderRadius: 12, padding: 10, marginTop: 8,
    borderWidth: 1, borderColor: '#E3EAF2',
  },
  title: { fontSize: 12, fontWeight: '700', color: '#1A2A44', marginBottom: 6 },
});
