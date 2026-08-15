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

/** ガス漏れ警報器の設置位置（比重で上下が変わる） */
export function AlarmPlacement({ title }: { title?: string }) {
  const ceil = 34, floor = 148;
  return (
    <Wrap ratio={1.66} title={title}>
      <Svg viewBox="0 0 300 181" width="100%" height="100%">
        <Rect x={26} y={ceil} width={248} height={floor - ceil} fill="#FAFCFE" stroke={C.dark} strokeWidth={2} />
        <Line x1={26} y1={ceil} x2={274} y2={ceil} stroke={C.dark} strokeWidth={3} />
        <Line x1={26} y1={floor} x2={274} y2={floor} stroke={C.dark} strokeWidth={3} />
        <SvgText x={30} y={ceil - 6} fontSize={9} fill={C.gray}>天井</SvgText>
        <SvgText x={30} y={floor + 12} fontSize={9} fill={C.gray}>床面</SvgText>

        {/* 燃焼器 */}
        <Rect x={132} y={floor - 30} width={38} height={30} fill="#ECEFF1" stroke={C.dark} strokeWidth={1.6} rx={3} />
        <SvgText x={151} y={floor - 12} fontSize={9} fill={C.dark} textAnchor="middle">燃焼器</SvgText>

        {/* 都市ガス（軽い）＝天井側 */}
        <Rect x={210} y={ceil + 5} width={46} height={19} fill="#E3F2FD" stroke={C.blue} strokeWidth={2} rx={3} />
        <SvgText x={233} y={ceil + 18} fontSize={9} fill={C.blue} textAnchor="middle" fontWeight="bold">警報器</SvgText>
        <Line x1={210} y1={ceil + 24} x2={210} y2={ceil + 30} stroke={C.blue} strokeWidth={1.2} strokeDasharray="3 2" />
        <SvgText x={204} y={ceil + 40} fontSize={8.5} fill={C.blue} textAnchor="end">天井から30cm以内</SvgText>
        <SvgText x={262} y={ceil - 6} fontSize={9.5} fill={C.blue} textAnchor="end" fontWeight="bold">都市ガス（軽い）</SvgText>
        <Arrow x1={100} y1={100} x2={100} y2={ceil + 12} color={C.blue} w={1.8} />

        {/* LPガス（重い）＝床側 */}
        <Rect x={44} y={floor - 26} width={46} height={19} fill="#FDECEA" stroke={C.red} strokeWidth={2} rx={3} />
        <SvgText x={67} y={floor - 13} fontSize={9} fill={C.red} textAnchor="middle" fontWeight="bold">警報器</SvgText>
        <SvgText x={44} y={floor + 24} fontSize={8.5} fill={C.red}>床面から30cm以内</SvgText>
        <Arrow x1={196} y1={84} x2={196} y2={floor - 8} color={C.red} w={1.8} />
        <SvgText x={204} y={78} fontSize={9.5} fill={C.red} fontWeight="bold">LPガス（重い）</SvgText>
        <SvgText x={204} y={90} fontSize={8.5} fill={C.red}>比重 約1.5 → 下に滞留</SvgText>

        <SvgText x={150} y={176} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 比重を誤ると警報器が全く働かない
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** リスクアセスメント・マトリクス（頻度×影響度） */
export function RiskMatrix({ title }: { title?: string }) {
  const cols = ['小', '中', '大'];
  const rows = ['高', '中', '低'];
  const level = [
    [1, 2, 2],
    [0, 1, 2],
    [0, 0, 1],
  ];
  const fills = ['#E8F5E9', '#FFF8E1', '#FDECEA'];
  const strokes = [C.green, C.orange, C.red];
  const names = ['許容', '要低減', '直ちに対策'];
  const x0 = 62, y0 = 30, cw = 58, ch = 32;
  return (
    <Wrap ratio={1.64} title={title}>
      <Svg viewBox="0 0 300 183" width="100%" height="100%">
        {cols.map((c, j) => (
          <SvgText key={c} x={x0 + cw * j + cw / 2} y={y0 - 7} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">{c}</SvgText>
        ))}
        <SvgText x={x0 + (cw * 3) / 2} y={y0 + ch * 3 + 18} fontSize={10} fill={C.dark} textAnchor="middle">影響度（被害の大きさ）→</SvgText>
        {rows.map((r, i) => (
          <SvgText key={r} x={x0 - 8} y={y0 + ch * i + ch / 2 + 4} fontSize={10} fill={C.dark} textAnchor="end" fontWeight="bold">{r}</SvgText>
        ))}
        <SvgText x={16} y={y0 + ch * 1.5} fontSize={10} fill={C.dark} textAnchor="middle" transform={`rotate(-90 16 ${y0 + ch * 1.5})`}>発生頻度</SvgText>
        {level.map((row, i) =>
          row.map((lv, j) => (
            <G key={`${i}-${j}`}>
              <Rect x={x0 + cw * j} y={y0 + ch * i} width={cw - 3} height={ch - 3} fill={fills[lv]} stroke={strokes[lv]} strokeWidth={1.6} rx={3} />
              <SvgText x={x0 + cw * j + (cw - 3) / 2} y={y0 + ch * i + ch / 2 + 3} fontSize={9} fill={strokes[lv]} textAnchor="middle" fontWeight="bold">{names[lv]}</SvgText>
            </G>
          ))
        )}
        <SvgText x={150} y={178} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 頻度×影響度で対策の優先順位を決める
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 腐食電池（電気化学的な腐食メカニズム） */
export function CorrosionCell({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.8} title={title}>
      <Svg viewBox="0 0 300 167" width="100%" height="100%">
        <Path d="M 40 54 L 260 54 L 250 132 L 50 132 Z" fill="#E1F5FE" stroke={C.blue} strokeWidth={1.6} />
        <SvgText x={150} y={126} fontSize={9} fill={C.blue} textAnchor="middle">電解質（水分・湿分）</SvgText>
        <Rect x={78} y={34} width={26} height={72} fill="#B0BEC5" stroke={C.dark} strokeWidth={1.8} rx={2} />
        <Rect x={196} y={34} width={26} height={72} fill="#CFD8DC" stroke={C.dark} strokeWidth={1.8} rx={2} />
        <SvgText x={91} y={26} fontSize={10} fill={C.red} textAnchor="middle" fontWeight="bold">アノード</SvgText>
        <SvgText x={91} y={122} fontSize={9} fill={C.red} textAnchor="middle">溶け出す（腐食）</SvgText>
        <SvgText x={209} y={26} fontSize={10} fill={C.green} textAnchor="middle" fontWeight="bold">カソード</SvgText>
        <SvgText x={209} y={122} fontSize={9} fill={C.green} textAnchor="middle">保護される</SvgText>
        <Line x1={91} y1={34} x2={91} y2={14} stroke={C.dark} strokeWidth={2} />
        <Line x1={209} y1={34} x2={209} y2={14} stroke={C.dark} strokeWidth={2} />
        <Line x1={91} y1={14} x2={209} y2={14} stroke={C.dark} strokeWidth={2} />
        <Arrow x1={175} y1={14} x2={125} y2={14} color={C.orange} w={2} />
        <SvgText x={150} y={9} fontSize={9.5} fill={C.orange} textAnchor="middle" fontWeight="bold">電子 e⁻ の流れ</SvgText>
        <SvgText x={112} y={66} fontSize={9} fill={C.red} fontWeight="bold">Fe → Fe²⁺ + 2e⁻</SvgText>
        <Arrow x1={110} y1={76} x2={140} y2={82} color={C.red} w={1.5} />
        <Circle cx={150} cy={86} r={4} fill={C.red} opacity={0.6} />
        <Circle cx={163} cy={92} r={3} fill={C.red} opacity={0.45} />
        <SvgText x={150} y={162} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 湿分の除去・耐食材料・電気防食が対策の柱
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 蒸気圧曲線（温度と飽和蒸気圧の関係） */
export function VaporPressureCurve({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.72} title={title}>
      <Svg viewBox="0 0 300 175" width="100%" height="100%">
        <Line x1={44} y1={132} x2={286} y2={132} stroke={C.dark} strokeWidth={1.8} />
        <Line x1={44} y1={132} x2={44} y2={18} stroke={C.dark} strokeWidth={1.8} />
        <SvgText x={168} y={150} fontSize={10} fill={C.dark} textAnchor="middle">温度 →</SvgText>
        <SvgText x={8} y={72} fontSize={10} fill={C.dark}>飽和</SvgText>
        <SvgText x={8} y={84} fontSize={10} fill={C.dark}>蒸気圧</SvgText>
        {[-40, -20, 0, 20, 40].map((t, i) => (
          <SvgText key={t} x={44 + i * 58} y={144} fontSize={8.5} fill={C.gray} textAnchor="middle">{t}℃</SvgText>
        ))}
        <Path d="M 46 128 Q 110 122 160 100 Q 215 72 282 22" stroke={C.red} strokeWidth={2.8} fill="none" />
        <Path d="M 104 130 Q 160 126 210 112 Q 250 100 282 80" stroke={C.orange} strokeWidth={2.8} fill="none" />
        <SvgText x={244} y={38} fontSize={10} fill={C.red} fontWeight="bold">プロパン</SvgText>
        <SvgText x={238} y={96} fontSize={10} fill={C.orange} fontWeight="bold">ブタン</SvgText>
        <Line x1={44} y1={130} x2={286} y2={130} stroke={C.gray} strokeWidth={1} strokeDasharray="4 3" />
        <SvgText x={50} y={126} fontSize={8} fill={C.gray}>大気圧</SvgText>
        <SvgText x={150} y={166} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 温度が上がると蒸気圧は急激に上昇する
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 保安距離（平面図） */
export function SafetyDistance({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.82} title={title}>
      <Svg viewBox="0 0 300 165" width="100%" height="100%">
        <Circle cx={104} cy={78} r={66} fill="#FFF8E1" stroke={C.orange} strokeWidth={1.6} strokeDasharray="6 4" />
        <Rect x={80} y={58} width={48} height={40} fill="#E3F2FD" stroke={C.blue} strokeWidth={2} rx={4} />
        <SvgText x={104} y={74} fontSize={9.5} fill={C.blue} textAnchor="middle" fontWeight="bold">高圧ガス</SvgText>
        <SvgText x={104} y={87} fontSize={9.5} fill={C.blue} textAnchor="middle" fontWeight="bold">製造施設</SvgText>
        <Rect x={218} y={44} width={62} height={30} fill="#E8F5E9" stroke={C.green} strokeWidth={1.8} rx={4} />
        <SvgText x={249} y={63} fontSize={9.5} fill={C.green} textAnchor="middle" fontWeight="bold">住宅・学校</SvgText>
        <Rect x={218} y={92} width={62} height={30} fill="#E8F5E9" stroke={C.green} strokeWidth={1.8} rx={4} />
        <SvgText x={249} y={111} fontSize={9.5} fill={C.green} textAnchor="middle" fontWeight="bold">病院など</SvgText>
        <SvgText x={249} y={36} fontSize={9} fill={C.green} textAnchor="middle">保安物件</SvgText>
        <Arrow x1={128} y1={78} x2={214} y2={78} color={C.red} w={2} />
        <SvgText x={171} y={72} fontSize={10} fill={C.red} textAnchor="middle" fontWeight="bold">保安距離</SvgText>
        <SvgText x={171} y={94} fontSize={8.5} fill={C.gray} textAnchor="middle">ガスの種類・数量で決まる</SvgText>
        <SvgText x={104} y={158} fontSize={8.5} fill={C.orange} textAnchor="middle">事故時の影響が及ばない緩衝地帯</SvgText>
        <SvgText x={150} y={14} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          ⚠ 発生確率ではなく「被害範囲」を抑える規制
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 二段減圧方式の圧力段階 */
export function TwoStageRegulator({ title }: { title?: string }) {
  const stages = [
    { x: 12, w: 62, label: '容器内', val: '約0.7～\n1.5MPa', col: C.red, h: 74 },
    { x: 118, w: 62, label: '中間圧', val: '約0.1MPa', col: C.orange, h: 44 },
    { x: 224, w: 62, label: '燃焼器', val: '2.8kPa', col: C.green, h: 20 },
  ];
  const base = 108;
  return (
    <Wrap ratio={1.9} title={title}>
      <Svg viewBox="0 0 300 158" width="100%" height="100%">
        <Line x1={6} y1={base} x2={294} y2={base} stroke={C.dark} strokeWidth={1.8} />
        {stages.map(st => (
          <G key={st.label}>
            <Rect x={st.x} y={base - st.h} width={st.w} height={st.h} fill={st.col} opacity={0.24} stroke={st.col} strokeWidth={1.8} rx={3} />
            <SvgText x={st.x + st.w / 2} y={base - st.h - 6} fontSize={9.5} fill={st.col} textAnchor="middle" fontWeight="bold">{st.label}</SvgText>
            <SvgText x={st.x + st.w / 2} y={base + 13} fontSize={9} fill={st.col} textAnchor="middle" fontWeight="bold">
              {st.val.replace('\n', '')}
            </SvgText>
          </G>
        ))}
        <Rect x={82} y={base - 34} width={30} height={26} fill="#FFFFFF" stroke={C.blue} strokeWidth={1.8} rx={3} />
        <SvgText x={97} y={base - 23} fontSize={8} fill={C.blue} textAnchor="middle" fontWeight="bold">一段</SvgText>
        <SvgText x={97} y={base - 14} fontSize={8} fill={C.blue} textAnchor="middle" fontWeight="bold">調整器</SvgText>
        <Rect x={188} y={base - 34} width={30} height={26} fill="#FFFFFF" stroke={C.blue} strokeWidth={1.8} rx={3} />
        <SvgText x={203} y={base - 23} fontSize={8} fill={C.blue} textAnchor="middle" fontWeight="bold">二段</SvgText>
        <SvgText x={203} y={base - 14} fontSize={8} fill={C.blue} textAnchor="middle" fontWeight="bold">調整器</SvgText>
        <SvgText x={150} y={28} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">段階的に減圧して安定した供給圧を得る</SvgText>
        <SvgText x={150} y={152} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 一段目で大きく落とし、二段目で精密に整える
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 多重防護（層状の防護壁） */
export function DefenseLayers({
  layers = [
    { name: '設計・材料', desc: 'そもそも壊れない', color: C.blue },
    { name: '制御・監視', desc: '異常を早期に検知', color: C.green },
    { name: '安全装置', desc: '自動で止める', color: C.orange },
    { name: '緊急対応', desc: '被害を最小化', color: C.red },
  ],
  title,
}: { layers?: { name: string; desc: string; color: string }[]; title?: string }) {
  const H = 40 + layers.length * 31;
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        {layers.map((lv, i) => {
          const y = 8 + i * 31;
          return (
            <G key={lv.name}>
              <Rect x={22} y={y} width={256} height={26} fill={lv.color} opacity={0.16} stroke={lv.color} strokeWidth={1.7} rx={4} />
              <Rect x={22} y={y} width={7} height={26} fill={lv.color} rx={2} />
              <SvgText x={38} y={y + 12} fontSize={10} fill={lv.color} fontWeight="bold">第{i + 1}層　{lv.name}</SvgText>
              <SvgText x={38} y={y + 23} fontSize={9} fill={C.gray}>{lv.desc}</SvgText>
            </G>
          );
        })}
        <Arrow x1={10} y1={8} x2={10} y2={H - 34} color={C.gray} w={1.6} />
        <SvgText x={150} y={H - 8} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 1層が破られても次の層が止める＝多重防護
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 供給設備と消費設備の区分 */
export function SupplyConsumerBoundary({ title }: { title?: string }) {
  const y = 62, bx = 158;
  const node = (x: number, w: number, label: string, col: string) => (
    <G>
      <Rect x={x} y={y} width={w} height={30} fill="#FFFFFF" stroke={col} strokeWidth={1.9} rx={4} />
      <SvgText x={x + w / 2} y={y + 19} fontSize={9} fill={col} textAnchor="middle" fontWeight="bold">{label}</SvgText>
    </G>
  );
  return (
    <Wrap ratio={1.72} title={title}>
      <Svg viewBox="0 0 300 174" width="100%" height="100%">
        <Rect x={8} y={38} width={bx - 12} height={62} fill="#E3F2FD" opacity={0.55} rx={6} />
        <Rect x={bx + 4} y={38} width={288 - bx} height={62} fill="#E8F5E9" opacity={0.55} rx={6} />
        <SvgText x={80} y={32} fontSize={10.5} fill={C.blue} textAnchor="middle" fontWeight="bold">供給設備</SvgText>
        <SvgText x={80} y={114} fontSize={8.5} fill={C.blue} textAnchor="middle">販売事業者が所有・管理</SvgText>
        <SvgText x={224} y={32} fontSize={10.5} fill={C.green} textAnchor="middle" fontWeight="bold">消費設備</SvgText>
        <SvgText x={224} y={114} fontSize={8.5} fill={C.green} textAnchor="middle">消費者が所有</SvgText>

        {node(14, 40, '容器', C.blue)}
        {node(62, 40, '調整器', C.blue)}
        {node(110, 42, 'メーター', C.blue)}
        {node(170, 40, '配管', C.green)}
        {node(218, 34, 'ガス栓', C.green)}
        {node(258, 34, '燃焼器', C.green)}

        <Line x1={54} y1={y + 15} x2={62} y2={y + 15} stroke={C.dark} strokeWidth={1.6} />
        <Line x1={102} y1={y + 15} x2={110} y2={y + 15} stroke={C.dark} strokeWidth={1.6} />
        <Line x1={210} y1={y + 15} x2={218} y2={y + 15} stroke={C.dark} strokeWidth={1.6} />
        <Line x1={252} y1={y + 15} x2={258} y2={y + 15} stroke={C.dark} strokeWidth={1.6} />

        <Line x1={bx} y1={26} x2={bx} y2={108} stroke={C.red} strokeWidth={2.4} strokeDasharray="6 4" />
        <SvgText x={bx} y={20} fontSize={9.5} fill={C.red} textAnchor="middle" fontWeight="bold">責任の境界</SvgText>
        <SvgText x={bx} y={124} fontSize={8.5} fill={C.red} textAnchor="middle">メーター出口が分岐点</SvgText>

        <SvgText x={150} y={148} fontSize={10} fill={C.dark} textAnchor="middle">
          点検・調査の義務者が境界で切り替わる
        </SvgText>
        <SvgText x={150} y={166} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ どちらの設備かで責任の所在が変わる
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 点検・交換の周期タイムライン */
export function InspectionTimeline({ title }: { title?: string }) {
  const items = [
    { name: '供給設備の点検', every: 4, color: C.blue },
    { name: '消費設備の調査', every: 4, color: C.green },
    { name: '容器の再検査', every: 5, color: C.orange },
    { name: 'ガス漏れ警報器', every: 5, color: C.red, note: '有効期限で交換' },
  ];
  const x0 = 96, x1 = 292, span = 20;
  const px = (yr: number) => x0 + (yr / span) * (x1 - x0);
  const H = 44 + items.length * 28;
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        {[0, 4, 8, 12, 16, 20].map(t => (
          <G key={t}>
            <Line x1={px(t)} y1={20} x2={px(t)} y2={20 + items.length * 28} stroke="#E3EAF2" strokeWidth={1} />
            <SvgText x={px(t)} y={14} fontSize={8.5} fill={C.gray} textAnchor="middle">{t}年</SvgText>
          </G>
        ))}
        {items.map((it, i) => {
          const y = 26 + i * 28;
          const marks = [];
          for (let t = it.every; t <= span; t += it.every) marks.push(t);
          return (
            <G key={it.name}>
              <SvgText x={x0 - 6} y={y + 10} fontSize={9.5} fill={C.dark} textAnchor="end" fontWeight="bold">{it.name}</SvgText>
              <Line x1={x0} y1={y + 6} x2={x1} y2={y + 6} stroke={it.color} strokeWidth={1.4} opacity={0.4} />
              {marks.map(t => (
                <G key={t}>
                  <Circle cx={px(t)} cy={y + 6} r={5.5} fill={it.color} />
                  <SvgText x={px(t)} y={y + 9.5} fontSize={7} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">{it.every}</SvgText>
                </G>
              ))}
            </G>
          );
        })}
        <SvgText x={150} y={H - 8} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 周期の数字は試験で問われやすい
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 保安体制の役割分担 */
export function ResponsibilityChart({ title }: { title?: string }) {
  const actors = [
    { name: '販売事業者', duty: '供給・周知・緊急対応', color: C.blue },
    { name: '保安機関', duty: '点検・調査の実施', color: C.green },
    { name: '設備士', duty: '設置・変更工事', color: C.orange },
    { name: '消費者', duty: '日常の使用管理', color: C.gray },
  ];
  const H = 40 + actors.length * 30;
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        <SvgText x={150} y={13} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          保安は複数の主体で分担される
        </SvgText>
        {actors.map((a, i) => {
          const y = 20 + i * 30;
          return (
            <G key={a.name}>
              <Rect x={16} y={y} width={98} height={25} fill={a.color} opacity={0.9} rx={4} />
              <SvgText x={65} y={y + 16} fontSize={10} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">{a.name}</SvgText>
              <Arrow x1={116} y1={y + 12} x2={136} y2={y + 12} color={a.color} w={1.6} />
              <Rect x={138} y={y} width={146} height={25} fill="#FFFFFF" stroke={a.color} strokeWidth={1.5} rx={4} />
              <SvgText x={211} y={y + 16} fontSize={9.5} fill={C.dark} textAnchor="middle">{a.duty}</SvgText>
            </G>
          );
        })}
        <SvgText x={150} y={H - 8} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 誰の義務かを取り違えないこと
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 燃焼器具の離隔距離 */
export function ClearanceDistance({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.7} title={title}>
      <Svg viewBox="0 0 300 176" width="100%" height="100%">
        <Rect x={20} y={22} width={190} height={112} fill="#FAFCFE" stroke={C.dark} strokeWidth={2} />
        <Line x1={20} y1={134} x2={210} y2={134} stroke={C.dark} strokeWidth={3} />
        <SvgText x={24} y={18} fontSize={9} fill={C.gray}>可燃性の壁・天井</SvgText>
        <Rect x={96} y={90} width={54} height={44} fill="#ECEFF1" stroke={C.dark} strokeWidth={1.8} rx={3} />
        <SvgText x={123} y={116} fontSize={9.5} fill={C.dark} textAnchor="middle" fontWeight="bold">燃焼器具</SvgText>
        <Path d="M 123 88 q -8 -8 -8 -16 q 0 -8 8 -14 q 8 6 8 14 q 0 8 -8 16 z" fill="#1E88E5" opacity={0.8} />

        <Arrow x1={123} y1={58} x2={123} y2={26} color={C.red} w={1.8} />
        <SvgText x={130} y={44} fontSize={9.5} fill={C.red} fontWeight="bold">上方</SvgText>
        <Arrow x1={94} y1={112} x2={24} y2={112} color={C.red} w={1.8} />
        <SvgText x={56} y={106} fontSize={9.5} fill={C.red} textAnchor="middle" fontWeight="bold">側方</SvgText>
        <Arrow x1={152} y1={112} x2={206} y2={112} color={C.red} w={1.8} />
        <SvgText x={180} y={106} fontSize={9.5} fill={C.red} textAnchor="middle" fontWeight="bold">側方</SvgText>

        <Rect x={222} y={40} width={68} height={72} fill="#FFF8E1" stroke={C.orange} strokeWidth={1.5} rx={5} />
        <SvgText x={256} y={56} fontSize={9.5} fill={C.orange} textAnchor="middle" fontWeight="bold">離隔距離</SvgText>
        <SvgText x={256} y={72} fontSize={8.5} fill={C.dark} textAnchor="middle">機器ごとに</SvgText>
        <SvgText x={256} y={84} fontSize={8.5} fill={C.dark} textAnchor="middle">定められた</SvgText>
        <SvgText x={256} y={96} fontSize={8.5} fill={C.dark} textAnchor="middle">寸法を確保</SvgText>

        <SvgText x={150} y={154} fontSize={10} fill={C.dark} textAnchor="middle">
          不燃材で仕上げれば距離を短縮できる場合がある
        </SvgText>
        <SvgText x={150} y={170} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 距離不足は壁面の炭化・出火につながる
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 圧力単位のスケール */
export function PressureScale({ title }: { title?: string }) {
  const marks = [
    { label: '供給圧（燃焼器入口）', val: '2.8 kPa', pos: 0.10, color: C.green },
    { label: '大気圧', val: '101.3 kPa', pos: 0.34, color: C.gray },
    { label: '高圧ガスの境界', val: '1 MPa', pos: 0.62, color: C.orange },
    { label: '容器内圧（夏期）', val: '約1.5 MPa', pos: 0.86, color: C.red },
  ];
  const x0 = 26, x1 = 286, y = 52;
  return (
    <Wrap ratio={1.72} title={title}>
      <Svg viewBox="0 0 300 175" width="100%" height="100%">
        <Defs>
          <LinearGradient id="presGrad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#2E7D32" stopOpacity="0.35" />
            <Stop offset="1" stopColor="#D32F2F" stopOpacity="0.35" />
          </LinearGradient>
        </Defs>
        <Rect x={x0} y={y} width={x1 - x0} height={16} fill="url(#presGrad)" rx={4} />
        <Line x1={x0} y1={y + 16} x2={x1} y2={y + 16} stroke={C.dark} strokeWidth={1.6} />
        <SvgText x={x0} y={y - 8} fontSize={9} fill={C.gray}>低圧</SvgText>
        <SvgText x={x1} y={y - 8} fontSize={9} fill={C.gray} textAnchor="end">高圧</SvgText>
        {marks.map((m, i) => {
          const mx = x0 + (x1 - x0) * m.pos;
          const up = i % 2 === 0;
          const ty = up ? y - 20 : y + 34;
          return (
            <G key={m.label}>
              <Line x1={mx} y1={up ? y : y + 16} x2={mx} y2={up ? ty + 6 : ty - 10} stroke={m.color} strokeWidth={1.5} />
              <Circle cx={mx} cy={up ? y : y + 16} r={3.4} fill={m.color} />
              <SvgText x={mx} y={ty} fontSize={9.5} fill={m.color} textAnchor="middle" fontWeight="bold">{m.val}</SvgText>
              <SvgText x={mx} y={up ? ty - 11 : ty + 11} fontSize={8} fill={C.dark} textAnchor="middle">{m.label}</SvgText>
            </G>
          );
        })}
        <Rect x={40} y={116} width={220} height={30} fill="#F5F8FC" stroke="#E3EAF2" strokeWidth={1} rx={5} />
        <SvgText x={150} y={129} fontSize={9.5} fill={C.dark} textAnchor="middle" fontWeight="bold">1 MPa ＝ 1,000 kPa ＝ 1,000,000 Pa</SvgText>
        <SvgText x={150} y={141} fontSize={8.5} fill={C.gray} textAnchor="middle">桁を3つずつ繰り上げる</SvgText>
        <SvgText x={150} y={166} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 単位換算の取り違えは計算問題の失点源
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 引火点・発火点の温度軸 */
export function TemperaturePoints({ title }: { title?: string }) {
  const x0 = 30, x1 = 284, y = 66;
  const px = (t: number) => x0 + ((t + 150) / 650) * (x1 - x0);
  return (
    <Wrap ratio={1.74} title={title}>
      <Svg viewBox="0 0 300 172" width="100%" height="100%">
        <Line x1={x0} y1={y} x2={x1} y2={y} stroke={C.dark} strokeWidth={1.8} />
        {[-100, 0, 200, 400].map(t => (
          <G key={t}>
            <Line x1={px(t)} y1={y - 4} x2={px(t)} y2={y + 4} stroke={C.dark} strokeWidth={1.4} />
            <SvgText x={px(t)} y={y + 17} fontSize={8.5} fill={C.gray} textAnchor="middle">{t}℃</SvgText>
          </G>
        ))}
        <Circle cx={px(-104)} cy={y} r={5} fill={C.blue} />
        <Line x1={px(-104)} y1={y - 6} x2={px(-104)} y2={y - 26} stroke={C.blue} strokeWidth={1.4} />
        <SvgText x={px(-104)} y={y - 30} fontSize={9.5} fill={C.blue} textAnchor="middle" fontWeight="bold">引火点</SvgText>
        <SvgText x={px(-104)} y={y - 41} fontSize={9} fill={C.blue} textAnchor="middle">−104℃</SvgText>
        <SvgText x={px(-104) + 6} y={y + 34} fontSize={8} fill={C.blue}>火種があれば燃える下限</SvgText>

        <Circle cx={px(450)} cy={y} r={5} fill={C.red} />
        <Line x1={px(450)} y1={y - 6} x2={px(450)} y2={y - 26} stroke={C.red} strokeWidth={1.4} />
        <SvgText x={px(450)} y={y - 30} fontSize={9.5} fill={C.red} textAnchor="middle" fontWeight="bold">発火点</SvgText>
        <SvgText x={px(450)} y={y - 41} fontSize={9} fill={C.red} textAnchor="middle">約450℃</SvgText>
        <SvgText x={px(450)} y={y + 34} fontSize={8} fill={C.red} textAnchor="end">火種なしで自然発火</SvgText>

        <Rect x={x0} y={y - 4} width={px(-104) - x0} height={8} fill={C.gray} opacity={0.25} />
        <SvgText x={150} y={122} fontSize={9.5} fill={C.dark} textAnchor="middle">
          LPガスの引火点は極めて低く、常温では常に引火の危険がある
        </SvgText>
        <SvgText x={150} y={140} fontSize={9.5} fill={C.dark} textAnchor="middle">
          発火点は高いため、通常は「火種」が着火の引き金になる
        </SvgText>
        <SvgText x={150} y={164} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 引火点＝火種あり／発火点＝火種なし
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 高発熱量と低発熱量 */
export function HeatValueBar({ title }: { title?: string }) {
  const base = 128, scale = 0.86;
  const hi = 99, lo = 91;
  return (
    <Wrap ratio={1.8} title={title}>
      <Svg viewBox="0 0 300 167" width="100%" height="100%">
        <Line x1={26} y1={base} x2={286} y2={base} stroke={C.dark} strokeWidth={1.6} />
        <Rect x={64} y={base - hi * scale} width={62} height={hi * scale} fill={C.red} opacity={0.75} rx={3} />
        <SvgText x={95} y={base - hi * scale - 8} fontSize={11} fill={C.red} textAnchor="middle" fontWeight="bold">約99</SvgText>
        <SvgText x={95} y={base + 14} fontSize={9.5} fill={C.red} textAnchor="middle" fontWeight="bold">高発熱量</SvgText>
        <SvgText x={95} y={base + 25} fontSize={8.5} fill={C.gray} textAnchor="middle">（総発熱量）</SvgText>

        <Rect x={172} y={base - lo * scale} width={62} height={lo * scale} fill={C.blue} opacity={0.75} rx={3} />
        <SvgText x={203} y={base - lo * scale - 8} fontSize={11} fill={C.blue} textAnchor="middle" fontWeight="bold">約91</SvgText>
        <SvgText x={203} y={base + 14} fontSize={9.5} fill={C.blue} textAnchor="middle" fontWeight="bold">低発熱量</SvgText>
        <SvgText x={203} y={base + 25} fontSize={8.5} fill={C.gray} textAnchor="middle">（真発熱量）</SvgText>

        <Line x1={126} y1={base - hi * scale} x2={172} y2={base - hi * scale} stroke={C.orange} strokeWidth={1.3} strokeDasharray="4 3" />
        <Rect x={130} y={base - hi * scale} width={38} height={(hi - lo) * scale} fill={C.orange} opacity={0.35} />
        <SvgText x={149} y={base - hi * scale - 8} fontSize={9} fill={C.orange} textAnchor="middle" fontWeight="bold">差＝潜熱</SvgText>
        <SvgText x={16} y={40} fontSize={9} fill={C.gray}>MJ/m³N</SvgText>

        <SvgText x={150} y={148} fontSize={9.5} fill={C.dark} textAnchor="middle">
          差は燃焼で生じた水蒸気が持ち去る潜熱ぶん
        </SvgText>
        <SvgText x={150} y={163} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 潜熱を回収するのが潜熱回収型（エコジョーズ）
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 給排気方式（開放式・半密閉式・密閉式） */
export function VentilationTypes({ title }: { title?: string }) {
  const panel = (x: number, name: string, sub: string, col: string, intake: 'in' | 'out', exhaust: 'in' | 'out') => (
    <G>
      <Rect x={x} y={26} width={88} height={92} fill="#FAFCFE" stroke={C.dark} strokeWidth={1.7} rx={3} />
      <SvgText x={x + 44} y={20} fontSize={10} fill={col} textAnchor="middle" fontWeight="bold">{name}</SvgText>
      <Rect x={x + 30} y={82} width={28} height={26} fill="#ECEFF1" stroke={C.dark} strokeWidth={1.4} rx={2} />
      <SvgText x={x + 44} y={99} fontSize={7.5} fill={C.dark} textAnchor="middle">器具</SvgText>
      {intake === 'in'
        ? <Arrow x1={x + 12} y1={60} x2={x + 28} y2={78} color={C.blue} w={1.5} />
        : <Arrow x1={x - 4} y1={92} x2={x + 26} y2={92} color={C.blue} w={1.5} />}
      {exhaust === 'in'
        ? <Arrow x1={x + 60} y1={78} x2={x + 74} y2={56} color={C.red} w={1.5} />
        : <Arrow x1={x + 62} y1={86} x2={x + 92} y2={54} color={C.red} w={1.5} />}
      <SvgText x={x + 44} y={132} fontSize={8.5} fill={C.dark} textAnchor="middle">{sub}</SvgText>
    </G>
  );
  return (
    <Wrap ratio={1.68} title={title}>
      <Svg viewBox="0 0 300 179" width="100%" height="100%">
        {panel(6, '開放式', '給気・排気とも室内', C.red, 'in', 'in')}
        {panel(104, '半密閉式', '給気は室内／排気は屋外', C.orange, 'in', 'out')}
        {panel(202, '密閉式(FF)', '給気・排気とも屋外', C.green, 'out', 'out')}
        <SvgText x={16} y={148} fontSize={9} fill={C.blue}>青＝給気</SvgText>
        <SvgText x={70} y={148} fontSize={9} fill={C.red}>赤＝排気</SvgText>
        <SvgText x={150} y={166} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 開放式ほど室内の換気確保が重要になる
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 配管の支持間隔とたわみ */
export function PipeSupportSpan({ title }: { title?: string }) {
  const sup = (x: number, y: number) => (
    <Polygon points={`${x},${y} ${x - 7},${y + 12} ${x + 7},${y + 12}`} fill={C.gray} />
  );
  return (
    <Wrap ratio={1.86} title={title}>
      <Svg viewBox="0 0 300 161" width="100%" height="100%">
        <SvgText x={150} y={14} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">支持間隔がたわみを決める</SvgText>

        <Path d="M 26 36 Q 84 46 142 36" stroke={C.green} strokeWidth={3.4} fill="none" />
        {sup(26, 36)}{sup(84, 36)}{sup(142, 36)}
        <SvgText x={84} y={66} fontSize={9.5} fill={C.green} textAnchor="middle" fontWeight="bold">適切な間隔</SvgText>
        <SvgText x={84} y={78} fontSize={8.5} fill={C.gray} textAnchor="middle">たわみが小さい</SvgText>

        <Path d="M 166 36 Q 226 66 286 36" stroke={C.red} strokeWidth={3.4} fill="none" />
        {sup(166, 36)}{sup(286, 36)}
        <Line x1={226} y1={38} x2={226} y2={58} stroke={C.red} strokeWidth={1.3} strokeDasharray="3 2" />
        <SvgText x={226} y={70} fontSize={9.5} fill={C.red} textAnchor="middle" fontWeight="bold">間隔が広すぎ</SvgText>
        <SvgText x={226} y={82} fontSize={8.5} fill={C.gray} textAnchor="middle">たわみ・応力集中</SvgText>

        <Rect x={26} y={96} width={248} height={34} fill="#F5F8FC" stroke="#E3EAF2" strokeWidth={1} rx={5} />
        <SvgText x={150} y={110} fontSize={9} fill={C.dark} textAnchor="middle">
          自重＝配管＋内容物＋保温材　を見込んで間隔を決める
        </SvgText>
        <SvgText x={150} y={123} fontSize={9} fill={C.dark} textAnchor="middle">
          管径が小さいほど支持間隔は短くする
        </SvgText>
        <SvgText x={150} y={152} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 過大なたわみは疲労・振動の原因になる
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 熱交換器（U字管型）の構造と流れ */
export function HeatExchangerU({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.76} title={title}>
      <Svg viewBox="0 0 300 170" width="100%" height="100%">
        <Rect x={40} y={38} width={220} height={74} fill="#E1F5FE" stroke={C.dark} strokeWidth={2} rx={8} />
        <SvgText x={150} y={128} fontSize={9} fill={C.blue} textAnchor="middle">胴側（シェル）</SvgText>
        <Rect x={40} y={38} width={16} height={74} fill="#CFD8DC" stroke={C.dark} strokeWidth={1.6} />
        <SvgText x={48} y={30} fontSize={8} fill={C.gray} textAnchor="middle">管板</SvgText>

        <Path d="M 56 56 L 224 56 Q 246 56 246 70 Q 246 84 224 84 L 56 84" stroke={C.red} strokeWidth={3} fill="none" />
        <Path d="M 56 66 L 208 66 Q 224 66 224 72 Q 224 78 208 78 L 56 78" stroke={C.red} strokeWidth={2.4} fill="none" opacity={0.55} />
        <Arrow x1={16} y1={56} x2={54} y2={56} color={C.red} w={2} />
        <SvgText x={12} y={50} fontSize={9} fill={C.red}>高温流体 in</SvgText>
        <Arrow x1={54} y1={84} x2={16} y2={84} color={C.red} w={2} />
        <SvgText x={12} y={98} fontSize={9} fill={C.red}>out</SvgText>

        <Arrow x1={262} y1={104} x2={262} y2={46} color={C.blue} w={2} />
        <SvgText x={268} y={78} fontSize={9} fill={C.blue}>冷却流体</SvgText>
        <SvgText x={150} y={104} fontSize={9} fill={C.blue} textAnchor="middle">対向流で温度差を保つ</SvgText>

        <Rect x={40} y={140} width={220} height={0} fill="none" />
        <SvgText x={150} y={148} fontSize={9.5} fill={C.dark} textAnchor="middle">
          U字管なら片端が自由になり、熱膨張差を吸収できる
        </SvgText>
        <SvgText x={150} y={164} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 熱応力対策としてU字管・伸縮継手を使う
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 第一種製造者と第二種製造者（許可と届出） */
export function ProducerCategory({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.72} title={title}>
      <Svg viewBox="0 0 300 174" width="100%" height="100%">
        <Rect x={10} y={26} width={134} height={94} fill="#FDF2F2" stroke={C.red} strokeWidth={1.9} rx={6} />
        <Rect x={10} y={26} width={134} height={24} fill={C.red} rx={6} />
        <Rect x={10} y={42} width={134} height={8} fill={C.red} />
        <SvgText x={77} y={43} fontSize={11} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">第一種製造者</SvgText>
        <SvgText x={77} y={70} fontSize={13} fill={C.red} textAnchor="middle" fontWeight="bold">許 可</SvgText>
        <SvgText x={20} y={90} fontSize={9} fill={C.dark}>• 処理能力が大きい</SvgText>
        <SvgText x={20} y={103} fontSize={9} fill={C.dark}>• 都道府県知事の許可</SvgText>
        <SvgText x={20} y={116} fontSize={9} fill={C.dark}>• 保安統括者の選任</SvgText>

        <Rect x={156} y={26} width={134} height={94} fill="#F1F8F2" stroke={C.green} strokeWidth={1.9} rx={6} />
        <Rect x={156} y={26} width={134} height={24} fill={C.green} rx={6} />
        <Rect x={156} y={42} width={134} height={8} fill={C.green} />
        <SvgText x={223} y={43} fontSize={11} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">第二種製造者</SvgText>
        <SvgText x={223} y={70} fontSize={13} fill={C.green} textAnchor="middle" fontWeight="bold">届 出</SvgText>
        <SvgText x={166} y={90} fontSize={9} fill={C.dark}>• 処理能力が小さい</SvgText>
        <SvgText x={166} y={103} fontSize={9} fill={C.dark}>• 事前の届出で足りる</SvgText>
        <SvgText x={166} y={116} fontSize={9} fill={C.dark}>• 保安係員などを選任</SvgText>

        <SvgText x={150} y={18} fontSize={9.5} fill={C.gray} textAnchor="middle">処理能力（規模）で区分される</SvgText>
        <SvgText x={150} y={140} fontSize={9.5} fill={C.dark} textAnchor="middle">
          規模が大きいほど手続きも保安体制も重くなる
        </SvgText>
        <SvgText x={150} y={164} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠「許可＝第一種／届出＝第二種」が最頻出
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 保安組織の階層（第一種製造者） */
export function SafetyOrgChart({ title }: { title?: string }) {
  const rows = [
    { name: '保安統括者', duty: '事業所の保安を統括管理', color: C.blue },
    { name: '保安技術管理者', duty: '技術的事項を管理（免状必要）', color: C.green },
    { name: '保安係員', duty: '現場の保安を実務で担当', color: C.orange },
  ];
  const H = 46 + rows.length * 32;
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        <SvgText x={150} y={14} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          第一種製造者に求められる保安組織
        </SvgText>
        {rows.map((r, i) => {
          const y = 22 + i * 32;
          return (
            <G key={r.name}>
              <Rect x={26} y={y} width={106} height={26} fill={r.color} opacity={0.9} rx={4} />
              <SvgText x={79} y={y + 17} fontSize={10} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">{r.name}</SvgText>
              <SvgText x={142} y={y + 17} fontSize={9} fill={C.dark}>{r.duty}</SvgText>
              {i < rows.length - 1 && <Arrow x1={79} y1={y + 26} x2={79} y2={y + 31} color={C.gray} w={1.5} />}
            </G>
          );
        })}
        <SvgText x={150} y={H - 8} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 選任義務と免状要件は役職ごとに異なる
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 検査制度の比較 */
export function InspectionMatrix({ title }: { title?: string }) {
  const rows = [
    { name: '完成検査', when: '新設・変更工事の完了時', freq: '一度', color: C.blue },
    { name: '保安検査', when: '特定施設の稼働後', freq: '定期', color: C.green },
    { name: '定期自主検査', when: '事業者自らが実施', freq: '定期', color: C.orange },
    { name: '容器再検査', when: '容器の経年劣化確認', freq: '定期', color: C.red },
  ];
  const H = 48 + rows.length * 27;
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        <SvgText x={70} y={16} fontSize={9} fill={C.gray} textAnchor="middle" fontWeight="bold">検査の種類</SvgText>
        <SvgText x={180} y={16} fontSize={9} fill={C.gray} textAnchor="middle" fontWeight="bold">対象・時期</SvgText>
        <SvgText x={268} y={16} fontSize={9} fill={C.gray} textAnchor="middle" fontWeight="bold">回数</SvgText>
        <Line x1={14} y1={20} x2={288} y2={20} stroke={C.dark} strokeWidth={1.4} />
        {rows.map((r, i) => {
          const y = 24 + i * 27;
          return (
            <G key={r.name}>
              <Rect x={14} y={y} width={274} height={23} fill={i % 2 ? '#F7FAFD' : '#FFFFFF'} rx={3} />
              <Rect x={14} y={y} width={4} height={23} fill={r.color} rx={2} />
              <SvgText x={24} y={y + 15} fontSize={9.5} fill={r.color} fontWeight="bold">{r.name}</SvgText>
              <SvgText x={110} y={y + 15} fontSize={9} fill={C.dark}>{r.when}</SvgText>
              <SvgText x={268} y={y + 15} fontSize={9} fill={C.dark} textAnchor="middle">{r.freq}</SvgText>
            </G>
          );
        })}
        <SvgText x={150} y={H - 8} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 完成検査は一度きり、他は繰り返し行う
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 容器の塗色と刻印 */
export function ContainerMarking({ title }: { title?: string }) {
  const colors = [
    { gas: '酸素', c: '#000000', t: '#FFFFFF' },
    { gas: '水素', c: '#D32F2F', t: '#FFFFFF' },
    { gas: '液化炭酸', c: '#2E7D32', t: '#FFFFFF' },
    { gas: '液化アンモニア', c: '#FFFFFF', t: '#1A2A44' },
    { gas: '液化塩素', c: '#F9C400', t: '#1A2A44' },
    { gas: 'アセチレン', c: '#7B4A22', t: '#FFFFFF' },
    { gas: 'その他', c: '#9E9E9E', t: '#FFFFFF' },
  ];
  return (
    <Wrap ratio={1.5} title={title}>
      <Svg viewBox="0 0 300 200" width="100%" height="100%">
        <SvgText x={150} y={14} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">容器の塗色（ガスの種類で決まる）</SvgText>
        {colors.map((cl, i) => {
          const x = 12 + (i % 4) * 71;
          const y = 22 + Math.floor(i / 4) * 40;
          return (
            <G key={cl.gas}>
              <Rect x={x} y={y} width={62} height={26} fill={cl.c} stroke={C.dark} strokeWidth={1.2} rx={3} />
              <SvgText x={x + 31} y={y + 17} fontSize={8.5} fill={cl.t} textAnchor="middle" fontWeight="bold">{cl.gas}</SvgText>
            </G>
          );
        })}
        <Line x1={12} y1={108} x2={288} y2={108} stroke="#E3EAF2" strokeWidth={1.4} />
        <SvgText x={150} y={124} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">主な刻印事項</SvgText>
        {[
          ['V', '内容積'], ['W', '容器質量'],
          ['TP', '耐圧試験圧力'], ['FP', '最高充填圧力'],
        ].map(([sym, mean], i) => {
          const x = 16 + (i % 2) * 142;
          const y = 134 + Math.floor(i / 2) * 24;
          return (
            <G key={sym}>
              <Rect x={x} y={y} width={30} height={19} fill="#EDF3FA" stroke={C.blue} strokeWidth={1.3} rx={3} />
              <SvgText x={x + 15} y={y + 13} fontSize={9.5} fill={C.blue} textAnchor="middle" fontWeight="bold">{sym}</SvgText>
              <SvgText x={x + 36} y={y + 13} fontSize={9} fill={C.dark}>{mean}</SvgText>
            </G>
          );
        })}
        <SvgText x={150} y={192} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 塗色と記号はそのまま出題される
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 行政処分・罰則の段階 */
export function PenaltyLadder({ title }: { title?: string }) {
  const steps = [
    { name: '行政指導', desc: '自主的な是正を促す', color: C.green },
    { name: '改善命令', desc: '法的な義務として命令', color: C.orange },
    { name: '許可の取消し', desc: '事業の継続が不可に', color: C.red },
    { name: '罰則（刑事）', desc: '罰金・懲役／両罰規定', color: '#7B1FA2' },
  ];
  const H = 42 + steps.length * 29;
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        <SvgText x={150} y={13} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          違反の重大性に応じて段階的に重くなる
        </SvgText>
        {steps.map((st, i) => {
          const y = 20 + i * 29;
          const w = 150 + i * 42;
          return (
            <G key={st.name}>
              <Rect x={20} y={y} width={w} height={24} fill={st.color} opacity={0.86} rx={4} />
              <SvgText x={30} y={y + 16} fontSize={10} fill="#FFFFFF" fontWeight="bold">{st.name}</SvgText>
              <SvgText x={w + 26} y={y + 16} fontSize={8.5} fill={C.gray}>{st.desc}</SvgText>
            </G>
          );
        })}
        <SvgText x={150} y={H - 8} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 軽微な違反にいきなり取消しは行われない
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 貯蔵所の区分 */
export function StorageCategory({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.8} title={title}>
      <Svg viewBox="0 0 300 167" width="100%" height="100%">
        <SvgText x={150} y={14} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">貯蔵量で規制の重さが変わる</SvgText>
        <Line x1={26} y1={92} x2={286} y2={92} stroke={C.dark} strokeWidth={1.8} />
        <Rect x={26} y={70} width={78} height={22} fill={C.gray} opacity={0.3} rx={3} />
        <Rect x={104} y={62} width={90} height={30} fill={C.green} opacity={0.45} rx={3} />
        <Rect x={194} y={48} width={92} height={44} fill={C.red} opacity={0.45} rx={3} />
        <SvgText x={65} y={85} fontSize={9} fill={C.dark} textAnchor="middle" fontWeight="bold">規制対象外</SvgText>
        <SvgText x={149} y={81} fontSize={9.5} fill={C.green} textAnchor="middle" fontWeight="bold">第二種貯蔵所</SvgText>
        <SvgText x={149} y={70} fontSize={9} fill={C.green} textAnchor="middle" fontWeight="bold">届 出</SvgText>
        <SvgText x={240} y={81} fontSize={9.5} fill={C.red} textAnchor="middle" fontWeight="bold">第一種貯蔵所</SvgText>
        <SvgText x={240} y={70} fontSize={9} fill={C.red} textAnchor="middle" fontWeight="bold">許 可</SvgText>
        <SvgText x={240} y={59} fontSize={8} fill={C.red} textAnchor="middle">保安距離も必要</SvgText>
        <SvgText x={104} y={106} fontSize={8.5} fill={C.gray} textAnchor="middle">300m³</SvgText>
        <SvgText x={194} y={106} fontSize={8.5} fill={C.gray} textAnchor="middle">1,000m³</SvgText>
        <SvgText x={286} y={106} fontSize={8.5} fill={C.gray} textAnchor="end">貯蔵量 →</SvgText>
        <SvgText x={150} y={132} fontSize={9.5} fill={C.dark} textAnchor="middle">
          移動（運搬）時は別途、移動監視者やイエローカードが必要
        </SvgText>
        <SvgText x={150} y={158} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 数量の境界と「許可／届出」の対応を押さえる
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** ボイル・シャルルの法則と状態方程式 */
export function GasLaws({ title }: { title?: string }) {
  const card = (x: number, name: string, cond: string, formula: string, col: string) => (
    <G>
      <Rect x={x} y={26} width={88} height={62} fill="#FFFFFF" stroke={col} strokeWidth={1.8} rx={5} />
      <Rect x={x} y={26} width={88} height={19} fill={col} rx={5} />
      <Rect x={x} y={38} width={88} height={7} fill={col} />
      <SvgText x={x + 44} y={40} fontSize={9.5} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">{name}</SvgText>
      <SvgText x={x + 44} y={60} fontSize={8.5} fill={C.gray} textAnchor="middle">{cond}</SvgText>
      <SvgText x={x + 44} y={78} fontSize={11} fill={col} textAnchor="middle" fontWeight="bold">{formula}</SvgText>
    </G>
  );
  return (
    <Wrap ratio={1.78} title={title}>
      <Svg viewBox="0 0 300 169" width="100%" height="100%">
        <SvgText x={150} y={16} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          2つの法則をまとめたものが状態方程式
        </SvgText>
        {card(10, 'ボイルの法則', '温度が一定', 'PV = 一定', C.blue)}
        {card(106, 'シャルルの法則', '圧力が一定', 'V/T = 一定', C.green)}
        {card(202, 'ボイル・シャルル', '物質量が一定', 'PV/T = 一定', C.orange)}
        <Arrow x1={54} y1={94} x2={128} y2={112} color={C.gray} w={1.5} />
        <Arrow x1={150} y1={94} x2={150} y2={112} color={C.gray} w={1.5} />
        <Arrow x1={246} y1={94} x2={172} y2={112} color={C.gray} w={1.5} />
        <Rect x={80} y={114} width={140} height={26} fill="#FDF2F2" stroke={C.red} strokeWidth={1.8} rx={5} />
        <SvgText x={150} y={132} fontSize={12} fill={C.red} textAnchor="middle" fontWeight="bold">PV = nRT</SvgText>
        <SvgText x={150} y={160} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 温度は必ず絶対温度（K）で代入する
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** ルシャトリエの原理（平衡移動） */
export function LeChatelier({ title }: { title?: string }) {
  const row = (y: number, cause: string, dir: string, col: string) => (
    <G>
      <Rect x={16} y={y} width={106} height={24} fill="#FFFFFF" stroke={col} strokeWidth={1.6} rx={4} />
      <SvgText x={69} y={y + 16} fontSize={9.5} fill={col} textAnchor="middle" fontWeight="bold">{cause}</SvgText>
      <Arrow x1={124} y1={y + 12} x2={148} y2={y + 12} color={col} w={1.7} />
      <Rect x={150} y={y} width={134} height={24} fill={col} opacity={0.15} rx={4} />
      <SvgText x={217} y={y + 16} fontSize={9.5} fill={C.dark} textAnchor="middle">{dir}</SvgText>
    </G>
  );
  return (
    <Wrap ratio={1.72} title={title}>
      <Svg viewBox="0 0 300 175" width="100%" height="100%">
        <Rect x={16} y={12} width={268} height={24} fill="#EDF3FA" stroke={C.blue} strokeWidth={1.5} rx={5} />
        <SvgText x={150} y={28} fontSize={10} fill={C.blue} textAnchor="middle" fontWeight="bold">
          平衡は「加えられた変化を打ち消す向き」へ移動する
        </SvgText>
        {row(46, '温度を上げる', '吸熱反応の向きへ', C.red)}
        {row(76, '圧力を上げる', '気体分子数が減る向きへ', C.orange)}
        {row(106, '濃度を増やす', 'それを消費する向きへ', C.green)}
        <SvgText x={150} y={148} fontSize={9.5} fill={C.dark} textAnchor="middle">
          触媒は平衡の位置を変えず、到達を速めるだけ
        </SvgText>
        <SvgText x={150} y={167} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠「打ち消す向き」と覚えれば全て導ける
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 触媒と活性化エネルギー */
export function CatalystEnergy({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.74} title={title}>
      <Svg viewBox="0 0 300 172" width="100%" height="100%">
        <Line x1={34} y1={124} x2={288} y2={124} stroke={C.dark} strokeWidth={1.6} />
        <Line x1={34} y1={124} x2={34} y2={18} stroke={C.dark} strokeWidth={1.6} />
        <SvgText x={8} y={70} fontSize={9} fill={C.dark}>エネ</SvgText>
        <SvgText x={8} y={82} fontSize={9} fill={C.dark}>ルギー</SvgText>
        <SvgText x={162} y={140} fontSize={9.5} fill={C.dark} textAnchor="middle">反応の進行 →</SvgText>
        <Path d="M 46 100 Q 100 100 140 30 Q 180 100 276 100" stroke={C.red} strokeWidth={2.6} fill="none" />
        <Path d="M 46 100 Q 104 100 140 62 Q 176 100 276 100" stroke={C.green} strokeWidth={2.6} fill="none" strokeDasharray="6 4" />
        <Line x1={140} y1={100} x2={140} y2={30} stroke={C.red} strokeWidth={1.2} strokeDasharray="3 2" />
        <SvgText x={188} y={30} fontSize={9.5} fill={C.red} fontWeight="bold">触媒なし</SvgText>
        <SvgText x={188} y={42} fontSize={8.5} fill={C.red}>活性化エネルギー大</SvgText>
        <SvgText x={188} y={62} fontSize={9.5} fill={C.green} fontWeight="bold">触媒あり</SvgText>
        <SvgText x={188} y={74} fontSize={8.5} fill={C.green}>山が低くなり反応が速い</SvgText>
        <SvgText x={54} y={96} fontSize={8.5} fill={C.gray}>反応物</SvgText>
        <SvgText x={272} y={96} fontSize={8.5} fill={C.gray} textAnchor="end">生成物</SvgText>
        <SvgText x={150} y={164} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 触媒は反応熱（両端の高さの差）を変えない
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** ヘンリーの法則（溶解度と圧力） */
export function HenryLaw({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.78} title={title}>
      <Svg viewBox="0 0 300 169" width="100%" height="100%">
        <Line x1={40} y1={118} x2={182} y2={118} stroke={C.dark} strokeWidth={1.6} />
        <Line x1={40} y1={118} x2={40} y2={20} stroke={C.dark} strokeWidth={1.6} />
        <Line x1={46} y1={114} x2={176} y2={28} stroke={C.blue} strokeWidth={2.8} />
        <SvgText x={111} y={134} fontSize={9} fill={C.dark} textAnchor="middle">分圧 P →</SvgText>
        <SvgText x={10} y={66} fontSize={9} fill={C.dark}>溶解度</SvgText>
        <SvgText x={132} y={48} fontSize={9.5} fill={C.blue} fontWeight="bold">C = kH・P</SvgText>
        <SvgText x={111} y={16} fontSize={9} fill={C.gray} textAnchor="middle">分圧に比例</SvgText>

        <Rect x={200} y={26} width={38} height={62} fill="#E1F5FE" stroke={C.blue} strokeWidth={1.6} rx={3} />
        <SvgText x={219} y={20} fontSize={8.5} fill={C.dark} textAnchor="middle">高圧</SvgText>
        {[38, 50, 62, 74].map((y, i) => <Circle key={y} cx={210 + (i % 2) * 16} cy={y} r={3} fill={C.blue} />)}
        <Rect x={250} y={26} width={38} height={62} fill="#F5F8FC" stroke={C.gray} strokeWidth={1.6} rx={3} />
        <SvgText x={269} y={20} fontSize={8.5} fill={C.dark} textAnchor="middle">減圧</SvgText>
        <Circle cx={262} cy={70} r={3} fill={C.blue} />
        <Arrow x1={269} y1={44} x2={269} y2={24} color={C.red} w={1.6} />
        <SvgText x={269} y={100} fontSize={8} fill={C.red} textAnchor="middle">泡になって出る</SvgText>

        <SvgText x={150} y={146} fontSize={9.5} fill={C.dark} textAnchor="middle">
          減圧時に溶解ガスが急放出される現象（発泡）に注意
        </SvgText>
        <SvgText x={150} y={163} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 炭酸飲料の栓を開けたときと同じ原理
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** pHスケール */
export function PHScale({ title }: { title?: string }) {
  const x0 = 20, x1 = 284;
  const px = (p: number) => x0 + (p / 14) * (x1 - x0);
  return (
    <Wrap ratio={1.9} title={title}>
      <Svg viewBox="0 0 300 158" width="100%" height="100%">
        <Defs>
          <LinearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#D32F2F" />
            <Stop offset="0.5" stopColor="#2E7D32" />
            <Stop offset="1" stopColor="#1E5FBE" />
          </LinearGradient>
        </Defs>
        <Rect x={x0} y={40} width={x1 - x0} height={22} fill="url(#phGrad)" opacity={0.75} rx={4} />
        {[0, 2, 4, 6, 7, 8, 10, 12, 14].map(p => (
          <G key={p}>
            <Line x1={px(p)} y1={62} x2={px(p)} y2={68} stroke={C.dark} strokeWidth={1.2} />
            <SvgText x={px(p)} y={79} fontSize={8.5} fill={C.dark} textAnchor="middle">{p}</SvgText>
          </G>
        ))}
        <Line x1={px(7)} y1={34} x2={px(7)} y2={68} stroke={C.dark} strokeWidth={2} />
        <SvgText x={px(7)} y={30} fontSize={9.5} fill={C.dark} textAnchor="middle" fontWeight="bold">中性</SvgText>
        <SvgText x={px(2.5)} y={30} fontSize={10} fill={C.red} textAnchor="middle" fontWeight="bold">酸性</SvgText>
        <SvgText x={px(11.5)} y={30} fontSize={10} fill={C.blue} textAnchor="middle" fontWeight="bold">アルカリ性</SvgText>
        <SvgText x={px(2.5)} y={96} fontSize={8.5} fill={C.red} textAnchor="middle">H⁺が多い</SvgText>
        <SvgText x={px(11.5)} y={96} fontSize={8.5} fill={C.blue} textAnchor="middle">OH⁻が多い</SvgText>
        <SvgText x={150} y={118} fontSize={9.5} fill={C.dark} textAnchor="middle">
          pHが1変わると水素イオン濃度は10倍変わる（対数目盛）
        </SvgText>
        <SvgText x={150} y={136} fontSize={9.5} fill={C.dark} textAnchor="middle">
          酸性・アルカリ性のいずれも金属腐食を促進しうる
        </SvgText>
        <SvgText x={150} y={152} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 塩素などの毒性ガスはアルカリで中和処理する
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 断熱変化のP-V線図 */
export function AdiabaticPV({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.76} title={title}>
      <Svg viewBox="0 0 300 170" width="100%" height="100%">
        <Line x1={40} y1={124} x2={286} y2={124} stroke={C.dark} strokeWidth={1.6} />
        <Line x1={40} y1={124} x2={40} y2={18} stroke={C.dark} strokeWidth={1.6} />
        <SvgText x={163} y={140} fontSize={9.5} fill={C.dark} textAnchor="middle">体積 V →</SvgText>
        <SvgText x={12} y={70} fontSize={9.5} fill={C.dark}>圧力 P</SvgText>
        <Path d="M 56 28 Q 110 92 274 116" stroke={C.red} strokeWidth={2.8} fill="none" />
        <Path d="M 56 52 Q 120 104 274 120" stroke={C.blue} strokeWidth={2.4} fill="none" strokeDasharray="6 4" />
        <SvgText x={200} y={82} fontSize={9.5} fill={C.red} fontWeight="bold">断熱変化</SvgText>
        <SvgText x={200} y={94} fontSize={8.5} fill={C.red}>熱の出入りなし・温度変化</SvgText>
        <SvgText x={140} y={114} fontSize={9.5} fill={C.blue} fontWeight="bold">等温変化</SvgText>
        <Arrow x1={100} y1={44} x2={70} y2={30} color={C.orange} w={1.6} />
        <SvgText x={104} y={42} fontSize={8.5} fill={C.orange}>圧縮 → 温度上昇</SvgText>
        <Arrow x1={230} y1={106} x2={266} y2={114} color={C.green} w={1.6} />
        <SvgText x={226} y={102} fontSize={8.5} fill={C.green} textAnchor="end">膨張 → 温度低下</SvgText>
        <SvgText x={150} y={162} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 断熱線は等温線より急な傾きになる
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 濃度の表し方 */
export function ConcentrationUnits({ title }: { title?: string }) {
  const rows = [
    { name: 'モル濃度', def: '溶質のmol ÷ 溶液のL', unit: 'mol/L', color: C.blue },
    { name: '質量パーセント', def: '溶質の質量 ÷ 全体の質量', unit: '%', color: C.green },
    { name: 'モル分率', def: '成分のmol ÷ 全体のmol', unit: '—', color: C.orange },
    { name: '体積濃度', def: '成分の体積 ÷ 全体の体積', unit: 'vol%・ppm', color: C.red },
  ];
  const H = 42 + rows.length * 26;
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        <SvgText x={150} y={14} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          「何を何で割るか」で区別する
        </SvgText>
        {rows.map((r, i) => {
          const y = 20 + i * 26;
          return (
            <G key={r.name}>
              <Rect x={14} y={y} width={272} height={22} fill={i % 2 ? '#F7FAFD' : '#FFFFFF'} rx={3} />
              <Rect x={14} y={y} width={4} height={22} fill={r.color} rx={2} />
              <SvgText x={24} y={y + 15} fontSize={9.5} fill={r.color} fontWeight="bold">{r.name}</SvgText>
              <SvgText x={120} y={y + 15} fontSize={8.5} fill={C.dark}>{r.def}</SvgText>
              <SvgText x={282} y={y + 15} fontSize={8.5} fill={C.gray} textAnchor="end">{r.unit}</SvgText>
            </G>
          );
        })}
        <SvgText x={150} y={H - 8} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 分母が「溶液全体」か「溶媒」かを取り違えない
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 理論空気量と空気比 */
export function AirRatio({ title }: { title?: string }) {
  const zones = [
    { x: 26, w: 78, col: C.red, name: '空気不足', sub: 'm < 1', note: 'CO発生' },
    { x: 106, w: 78, col: C.green, name: '適正', sub: 'm ≈ 1.2', note: '効率が最良' },
    { x: 186, w: 100, col: C.blue, name: '空気過剰', sub: 'm > 1.5', note: '排ガスが熱を持ち去る' },
  ];
  return (
    <Wrap ratio={1.74} title={title}>
      <Svg viewBox="0 0 300 172" width="100%" height="100%">
        <SvgText x={150} y={16} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          空気比 m ＝ 実際の空気量 ÷ 理論空気量
        </SvgText>
        {zones.map(z => (
          <G key={z.name}>
            <Rect x={z.x} y={28} width={z.w} height={52} fill={z.col} opacity={0.2} stroke={z.col} strokeWidth={1.7} rx={4} />
            <SvgText x={z.x + z.w / 2} y={46} fontSize={10} fill={z.col} textAnchor="middle" fontWeight="bold">{z.name}</SvgText>
            <SvgText x={z.x + z.w / 2} y={60} fontSize={9.5} fill={z.col} textAnchor="middle" fontWeight="bold">{z.sub}</SvgText>
            <SvgText x={z.x + z.w / 2} y={73} fontSize={8} fill={C.dark} textAnchor="middle">{z.note}</SvgText>
          </G>
        ))}
        <Line x1={26} y1={88} x2={286} y2={88} stroke={C.dark} strokeWidth={1.5} />
        <Path d="M 40 130 Q 100 128 145 104 Q 190 118 276 132" stroke={C.orange} strokeWidth={2.6} fill="none" />
        <Circle cx={145} cy={104} r={4.5} fill={C.orange} />
        <SvgText x={145} y={98} fontSize={8.5} fill={C.orange} textAnchor="middle" fontWeight="bold">効率のピーク</SvgText>
        <SvgText x={16} y={118} fontSize={9} fill={C.gray}>効率</SvgText>
        <SvgText x={150} y={150} fontSize={9.5} fill={C.dark} textAnchor="middle">
          理論空気量ちょうどでは混合が不完全 → 少し過剰にする
        </SvgText>
        <SvgText x={150} y={166} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 少なすぎるとCO、多すぎると排熱損失
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 予混合燃焼と拡散燃焼 */
export function CombustionTypes({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.8} title={title}>
      <Svg viewBox="0 0 300 167" width="100%" height="100%">
        <Rect x={10} y={22} width={132} height={102} fill="#F1F8F2" stroke={C.green} strokeWidth={1.7} rx={6} />
        <SvgText x={76} y={38} fontSize={10.5} fill={C.green} textAnchor="middle" fontWeight="bold">予混合燃焼</SvgText>
        <Rect x={40} y={92} width={72} height={22} fill="#ECEFF1" stroke={C.dark} strokeWidth={1.4} rx={2} />
        <Path d="M 76 90 q -11 -12 -11 -24 q 0 -11 11 -20 q 11 9 11 20 q 0 12 -11 24 z" fill="#1E88E5" opacity={0.85} />
        <SvgText x={76} y={64} fontSize={8} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">青炎</SvgText>
        <SvgText x={76} y={110} fontSize={8} fill={C.dark} textAnchor="middle">ガス＋空気を先に混合</SvgText>
        <SvgText x={76} y={135} fontSize={8.5} fill={C.green} textAnchor="middle">高温・短炎・ガスコンロ</SvgText>

        <Rect x={158} y={22} width={132} height={102} fill="#FFF8E1" stroke={C.orange} strokeWidth={1.7} rx={6} />
        <SvgText x={224} y={38} fontSize={10.5} fill={C.orange} textAnchor="middle" fontWeight="bold">拡散燃焼</SvgText>
        <Rect x={188} y={92} width={72} height={22} fill="#ECEFF1" stroke={C.dark} strokeWidth={1.4} rx={2} />
        <Path d="M 224 90 q -14 -16 -14 -32 q 0 -14 14 -26 q 14 12 14 26 q 0 16 -14 32 z" fill="#F9A825" opacity={0.85} />
        <SvgText x={224} y={62} fontSize={8} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">黄炎</SvgText>
        <SvgText x={224} y={110} fontSize={8} fill={C.dark} textAnchor="middle">燃焼しながら空気と混合</SvgText>
        <SvgText x={224} y={135} fontSize={8.5} fill={C.orange} textAnchor="middle">長炎・ろうそく・すすが出やすい</SvgText>

        <SvgText x={150} y={158} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 混合のタイミングが炎の性質を決める
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 炎の異常（逆火・リフティング・イエローチップ） */
export function FlameAnomaly({ title }: { title?: string }) {
  const panel = (x: number, name: string, cause: string, col: string, draw: React.ReactNode) => (
    <G>
      <Rect x={x} y={24} width={88} height={94} fill="#FFFFFF" stroke={col} strokeWidth={1.7} rx={5} />
      <SvgText x={x + 44} y={40} fontSize={10} fill={col} textAnchor="middle" fontWeight="bold">{name}</SvgText>
      {draw}
      <SvgText x={x + 44} y={112} fontSize={8} fill={C.dark} textAnchor="middle">{cause}</SvgText>
    </G>
  );
  return (
    <Wrap ratio={1.66} title={title}>
      <Svg viewBox="0 0 300 181" width="100%" height="100%">
        {panel(8, '逆火', '燃焼速度＞噴出速度', C.red,
          <G>
            <Rect x={30} y={88} width={44} height={12} fill="#ECEFF1" stroke={C.dark} strokeWidth={1.2} />
            <Path d="M 52 88 q -7 -8 -7 -16 q 0 -7 7 -12 q 7 5 7 12 q 0 8 -7 16 z" fill={C.red} opacity={0.8} />
            <Arrow x1={52} y1={78} x2={52} y2={92} color={C.red} w={1.6} />
            <SvgText x={52} y={70} fontSize={7.5} fill={C.red} textAnchor="middle">内部へ戻る</SvgText>
          </G>)}
        {panel(106, 'リフティング', '噴出速度＞燃焼速度', C.orange,
          <G>
            <Rect x={128} y={88} width={44} height={12} fill="#ECEFF1" stroke={C.dark} strokeWidth={1.2} />
            <Path d="M 150 76 q -7 -8 -7 -14 q 0 -6 7 -11 q 7 5 7 11 q 0 6 -7 14 z" fill={C.orange} opacity={0.85} />
            <Line x1={136} y1={82} x2={164} y2={82} stroke={C.orange} strokeWidth={1.2} strokeDasharray="3 2" />
            <SvgText x={150} y={60} fontSize={7.5} fill={C.orange} textAnchor="middle">炎が離れる</SvgText>
          </G>)}
        {panel(204, 'イエローチップ', '一次空気の不足', '#F9A825',
          <G>
            <Rect x={226} y={88} width={44} height={12} fill="#ECEFF1" stroke={C.dark} strokeWidth={1.2} />
            <Path d="M 248 88 q -9 -12 -9 -22 q 0 -9 9 -16 q 9 7 9 16 q 0 10 -9 22 z" fill="#1E88E5" opacity={0.7} />
            <Path d="M 248 62 q -4 -6 -4 -10 q 0 -4 4 -7 q 4 3 4 7 q 0 4 -4 10 z" fill="#F9A825" />
            <SvgText x={248} y={54} fontSize={7.5} fill="#B26A00" textAnchor="middle">先端が黄色</SvgText>
          </G>)}
        <SvgText x={150} y={140} fontSize={9.5} fill={C.dark} textAnchor="middle">
          いずれも「燃焼速度」と「ガスの噴出速度」の釣り合いが崩れた状態
        </SvgText>
        <SvgText x={150} y={158} fontSize={9.5} fill={C.dark} textAnchor="middle">
          一次空気孔の調整・ノズルの清掃で改善することが多い
        </SvgText>
        <SvgText x={150} y={174} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ イエローチップは不完全燃焼の前触れ
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 排ガス成分と燃焼状態 */
export function FlueGasComposition({ title }: { title?: string }) {
  const rows = [
    { g: 'CO₂', mean: '燃焼で必ず生じる。高いほど完全燃焼に近い', col: C.green },
    { g: 'O₂', mean: '残存酸素。高いほど空気過剰', col: C.blue },
    { g: 'CO', mean: '不完全燃焼の指標。検出は異常', col: C.red },
    { g: 'NOx', mean: '高温燃焼で増える。大気汚染の原因', col: C.orange },
  ];
  const H = 44 + rows.length * 26;
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        <SvgText x={150} y={14} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          排ガスを測れば燃焼状態がわかる
        </SvgText>
        {rows.map((r, i) => {
          const y = 22 + i * 26;
          return (
            <G key={r.g}>
              <Rect x={14} y={y} width={272} height={22} fill={i % 2 ? '#F7FAFD' : '#FFFFFF'} rx={3} />
              <Rect x={16} y={y + 3} width={38} height={16} fill={r.col} rx={3} />
              <SvgText x={35} y={y + 15} fontSize={9.5} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">{r.g}</SvgText>
              <SvgText x={62} y={y + 15} fontSize={8.5} fill={C.dark}>{r.mean}</SvgText>
            </G>
          );
        })}
        <SvgText x={150} y={H - 8} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ COが出ていれば直ちに燃焼調整が必要
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 保護具の選定 */
export function ProtectiveGear({ title }: { title?: string }) {
  const rows = [
    { risk: '毒性ガス', gear: '防毒マスク・空気呼吸器', col: C.red },
    { risk: '可燃性ガス', gear: '防爆工具・帯電防止服', col: C.orange },
    { risk: '低温液化ガス', gear: '耐低温手袋・保護面', col: C.blue },
    { risk: '酸欠のおそれ', gear: '送気マスク・酸素濃度計', col: C.green },
  ];
  const H = 44 + rows.length * 26;
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        <SvgText x={150} y={14} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          ガスの性状に応じて保護具を選ぶ
        </SvgText>
        {rows.map((r, i) => {
          const y = 22 + i * 26;
          return (
            <G key={r.risk}>
              <Rect x={14} y={y} width={112} height={22} fill={r.col} opacity={0.88} rx={4} />
              <SvgText x={70} y={y + 15} fontSize={9.5} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">{r.risk}</SvgText>
              <Arrow x1={128} y1={y + 11} x2={146} y2={y + 11} color={r.col} w={1.5} />
              <Rect x={148} y={y} width={138} height={22} fill="#FFFFFF" stroke={r.col} strokeWidth={1.4} rx={4} />
              <SvgText x={217} y={y + 15} fontSize={9} fill={C.dark} textAnchor="middle">{r.gear}</SvgText>
            </G>
          );
        })}
        <SvgText x={150} y={H - 8} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 一つの保護具で全ての危険はカバーできない
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 汎用：項目表（種類・分類・要件の一覧） */
export function SpecTable({
  rows,
  head,
  note,
  title,
}: {
  rows: { k: string; v: string; color?: string }[];
  head?: [string, string];
  note?: string;
  title?: string;
}) {
  const pal = [C.blue, C.green, C.orange, C.red, '#7B1FA2', C.gray];
  const top = head ? 26 : 12;
  const H = top + rows.length * 25 + (note ? 24 : 8);
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        {head ? (
          <G>
            <SvgText x={76} y={15} fontSize={9} fill={C.gray} textAnchor="middle" fontWeight="bold">{head[0]}</SvgText>
            <SvgText x={200} y={15} fontSize={9} fill={C.gray} textAnchor="middle" fontWeight="bold">{head[1]}</SvgText>
            <Line x1={12} y1={20} x2={288} y2={20} stroke={C.dark} strokeWidth={1.3} />
          </G>
        ) : null}
        {rows.map((r, i) => {
          const y = top + i * 25;
          const col = r.color ?? pal[i % pal.length];
          return (
            <G key={r.k}>
              <Rect x={12} y={y} width={276} height={21} fill={i % 2 ? '#F7FAFD' : '#FFFFFF'} rx={3} />
              <Rect x={12} y={y} width={4} height={21} fill={col} rx={2} />
              <SvgText x={22} y={y + 14} fontSize={9.5} fill={col} fontWeight="bold">{r.k}</SvgText>
              <SvgText x={124} y={y + 14} fontSize={8.5} fill={C.dark}>{r.v}</SvgText>
            </G>
          );
        })}
        {note ? (
          <SvgText x={150} y={H - 8} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">{note}</SvgText>
        ) : null}
      </Svg>
    </Wrap>
  );
}

/** 汎用：3項目の並列比較 */
export function ThreeWayCompare({
  panels,
  note,
  title,
}: {
  panels: { head: string; items: string[]; color?: string }[];
  note?: string;
  title?: string;
}) {
  const pal = [C.blue, C.green, C.orange];
  const rows = Math.max(...panels.map(p => p.items.length));
  const H = 40 + rows * 15 + (note ? 22 : 6);
  const w = 92;
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        {panels.slice(0, 3).map((p, i) => {
          const x = 6 + i * 98;
          const col = p.color ?? pal[i];
          return (
            <G key={p.head}>
              <Rect x={x} y={10} width={w} height={20 + rows * 15} fill="#FFFFFF" stroke={col} strokeWidth={1.6} rx={5} />
              <Rect x={x} y={10} width={w} height={19} fill={col} rx={5} />
              <Rect x={x} y={23} width={w} height={6} fill={col} />
              <SvgText x={x + w / 2} y={24} fontSize={9.5} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">{p.head}</SvgText>
              {p.items.map((it, j) => (
                <SvgText key={j} x={x + 6} y={44 + j * 15} fontSize={8} fill={C.dark}>• {it}</SvgText>
              ))}
            </G>
          );
        })}
        {note ? (
          <SvgText x={150} y={H - 8} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">{note}</SvgText>
        ) : null}
      </Svg>
    </Wrap>
  );
}

/** 付臭剤と臭気の役割 */
export function OdorantLevel({ title }: { title?: string }) {
  const x0 = 30, x1 = 286;
  return (
    <Wrap ratio={1.8} title={title}>
      <Svg viewBox="0 0 300 167" width="100%" height="100%">
        <SvgText x={150} y={16} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          爆発下限界に達する「はるか手前」で気づけるようにする
        </SvgText>
        <Rect x={x0} y={44} width={x1 - x0} height={20} fill="#F5F8FC" rx={4} />
        <Rect x={x0} y={44} width={26} height={20} fill={C.green} opacity={0.8} rx={4} />
        <Rect x={x0 + 130} y={44} width={100} height={20} fill={C.red} opacity={0.72} />
        <SvgText x={x0 + 13} y={38} fontSize={9} fill={C.green} textAnchor="middle" fontWeight="bold">臭気で感知</SvgText>
        <SvgText x={x0 + 13} y={78} fontSize={8.5} fill={C.green} textAnchor="middle">下限の1/1000</SvgText>
        <SvgText x={x0 + 180} y={38} fontSize={9} fill={C.red} textAnchor="middle" fontWeight="bold">爆発範囲</SvgText>
        <SvgText x={x0 + 130} y={78} fontSize={8.5} fill={C.red} textAnchor="middle">2.1%</SvgText>
        <Arrow x1={x0 + 20} y1={92} x2={x0 + 126} y2={92} color={C.gray} w={1.5} />
        <SvgText x={x0 + 73} y={104} fontSize={8.5} fill={C.gray} textAnchor="middle">この余裕が避難の時間を生む</SvgText>

        <Rect x={30} y={112} width={240} height={30} fill="#FFF8E1" stroke={C.orange} strokeWidth={1.4} rx={5} />
        <SvgText x={150} y={125} fontSize={9} fill={C.dark} textAnchor="middle">
          LPガス自体は無臭 → メルカプタン等を法令で添加
        </SvgText>
        <SvgText x={150} y={137} fontSize={9} fill={C.dark} textAnchor="middle">
          玉ねぎの腐ったような特有のにおい
        </SvgText>
        <SvgText x={150} y={160} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 付臭が漏えい発見の最初の手がかり
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** マイコンメーターの遮断機能 */
export function MicomMeter({ title }: { title?: string }) {
  const items = [
    { n: '合計流量遮断', d: '同時に使いすぎ・大量漏えい', c: C.red },
    { n: '継続時間遮断', d: '長時間の連続使用', c: C.orange },
    { n: '感震遮断', d: '震度5相当以上の地震', c: C.blue },
    { n: '圧力低下遮断', d: '容器切れ・配管の異常', c: C.green },
  ];
  const H = 46 + items.length * 25;
  return (
    <Wrap ratio={300 / H} title={title}>
      <Svg viewBox={`0 0 300 ${H}`} width="100%" height="100%">
        <SvgText x={150} y={14} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          異常を検知すると自動でガスを止める
        </SvgText>
        {items.map((it, i) => {
          const y = 22 + i * 25;
          return (
            <G key={it.n}>
              <Rect x={14} y={y} width={272} height={21} fill={i % 2 ? '#F7FAFD' : '#FFFFFF'} rx={3} />
              <Circle cx={26} cy={y + 10} r={6} fill={it.c} />
              <SvgText x={26} y={y + 13.5} fontSize={8} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">{i + 1}</SvgText>
              <SvgText x={40} y={y + 14} fontSize={9.5} fill={it.c} fontWeight="bold">{it.n}</SvgText>
              <SvgText x={150} y={y + 14} fontSize={8.5} fill={C.dark}>{it.d}</SvgText>
            </G>
          );
        })}
        <SvgText x={150} y={H - 8} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 復帰操作は原因を確かめてから行う
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 耐震対策 */
export function SeismicMeasures({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.7} title={title}>
      <Svg viewBox="0 0 300 176" width="100%" height="100%">
        <SvgText x={150} y={15} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          「倒さない・切らない・止める」の3段構え
        </SvgText>
        <Rect x={22} y={58} width={40} height={62} fill="#FFFFFF" stroke={C.dark} strokeWidth={1.9} rx={5} />
        <SvgText x={42} y={94} fontSize={9} fill={C.dark} textAnchor="middle">容器</SvgText>
        <Line x1={16} y1={76} x2={68} y2={76} stroke={C.red} strokeWidth={2.4} />
        <Line x1={16} y1={102} x2={68} y2={102} stroke={C.red} strokeWidth={2.4} />
        <SvgText x={42} y={134} fontSize={8.5} fill={C.red} textAnchor="middle" fontWeight="bold">鎖で2点固定</SvgText>
        <SvgText x={42} y={146} fontSize={8} fill={C.gray} textAnchor="middle">転倒防止</SvgText>

        <Path d="M 68 88 q 16 -10 22 0 q 6 10 18 0" stroke={C.green} strokeWidth={3} fill="none" />
        <SvgText x={100} y={68} fontSize={8.5} fill={C.green} textAnchor="middle" fontWeight="bold">フレキ管</SvgText>
        <SvgText x={100} y={134} fontSize={8} fill={C.gray} textAnchor="middle">変位を吸収</SvgText>

        <Rect x={128} y={70} width={48} height={38} fill="#E3F2FD" stroke={C.blue} strokeWidth={1.8} rx={4} />
        <SvgText x={152} y={86} fontSize={8.5} fill={C.blue} textAnchor="middle" fontWeight="bold">マイコン</SvgText>
        <SvgText x={152} y={98} fontSize={8.5} fill={C.blue} textAnchor="middle" fontWeight="bold">メーター</SvgText>
        <SvgText x={152} y={134} fontSize={8} fill={C.gray} textAnchor="middle">感震で自動遮断</SvgText>

        <Line x1={176} y1={89} x2={200} y2={89} stroke={C.dark} strokeWidth={1.6} />
        <Rect x={200} y={70} width={44} height={38} fill="#ECEFF1" stroke={C.dark} strokeWidth={1.6} rx={4} />
        <SvgText x={222} y={93} fontSize={8.5} fill={C.dark} textAnchor="middle">燃焼器</SvgText>

        <Path d="M 258 62 l 8 14 l -8 0 l 8 14" stroke={C.orange} strokeWidth={2.2} fill="none" />
        <SvgText x={268} y={104} fontSize={8.5} fill={C.orange} textAnchor="middle" fontWeight="bold">地震動</SvgText>
        <SvgText x={150} y={168} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 復旧時は漏えい確認をしてから復帰させる
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 埋設配管の深さと表示 */
export function BuriedPipe({ title }: { title?: string }) {
  const gl = 46;
  return (
    <Wrap ratio={1.76} title={title}>
      <Svg viewBox="0 0 300 170" width="100%" height="100%">
        <Rect x={14} y={gl} width={272} height={84} fill="#EFEBE4" />
        <Line x1={14} y1={gl} x2={286} y2={gl} stroke={C.dark} strokeWidth={2.4} />
        <SvgText x={18} y={gl - 8} fontSize={9} fill={C.gray}>地表面</SvgText>
        <Rect x={14} y={gl + 26} width={272} height={7} fill="#F9C400" />
        <SvgText x={150} y={gl + 32} fontSize={7} fill="#5D4200" textAnchor="middle" fontWeight="bold">
          ガス管あり注意（表示テープ）
        </SvgText>
        <Circle cx={150} cy={gl + 62} r={13} fill="#FFC107" stroke={C.dark} strokeWidth={1.8} />
        <SvgText x={150} y={gl + 66} fontSize={8} fill={C.dark} textAnchor="middle" fontWeight="bold">管</SvgText>
        <Rect x={124} y={gl + 46} width={52} height={32} fill="none" stroke={C.gray} strokeWidth={1.2} strokeDasharray="3 2" />
        <SvgText x={182} y={gl + 68} fontSize={8} fill={C.gray}>砂で埋戻し</SvgText>

        <Arrow x1={64} y1={gl} x2={64} y2={gl + 26} color={C.blue} w={1.6} />
        <SvgText x={70} y={gl + 18} fontSize={8.5} fill={C.blue}>テープまでの深さ</SvgText>
        <Arrow x1={40} y1={gl} x2={40} y2={gl + 62} color={C.red} w={1.6} />
        <SvgText x={16} y={gl + 96} fontSize={8.5} fill={C.red} fontWeight="bold">埋設深さ</SvgText>
        <SvgText x={16} y={gl + 107} fontSize={8} fill={C.gray}>車両通行の有無で変わる</SvgText>

        <SvgText x={150} y={148} fontSize={9.5} fill={C.dark} textAnchor="middle">
          掘削事故を防ぐため、管の上に表示テープを敷設する
        </SvgText>
        <SvgText x={150} y={164} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 深さ・表示・防食の3点が埋設配管の基本
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 圧力損失の要因 */
export function PressureLossFactors({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.72} title={title}>
      <Svg viewBox="0 0 300 174" width="100%" height="100%">
        <Rect x={20} y={26} width={260} height={28} fill="#EDF3FA" stroke={C.blue} strokeWidth={1.6} rx={5} />
        <SvgText x={150} y={45} fontSize={10.5} fill={C.blue} textAnchor="middle" fontWeight="bold">
          圧力損失 ∝ (流量)² × 長さ ÷ (管径)⁵
        </SvgText>
        {[
          { n: '流量が増える', e: '損失は 2乗 で増える', c: C.red, up: true },
          { n: '配管が長い', e: '長さに比例して増える', c: C.orange, up: true },
          { n: '管径を太くする', e: '5乗で効くので劇的に減る', c: C.green, up: false },
        ].map((r, i) => {
          const y = 66 + i * 28;
          return (
            <G key={r.n}>
              <Rect x={20} y={y} width={116} height={22} fill={r.c} opacity={0.85} rx={4} />
              <SvgText x={78} y={y + 15} fontSize={9.5} fill="#FFFFFF" textAnchor="middle" fontWeight="bold">{r.n}</SvgText>
              <Arrow x1={140} y1={y + 11} x2={158} y2={y + 11} color={r.c} w={1.6} />
              <SvgText x={164} y={y + 15} fontSize={9} fill={C.dark}>{r.e}</SvgText>
            </G>
          );
        })}
        <SvgText x={150} y={166} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 口径を1段太くするのが最も効果的な対策
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 静電気の発生と対策 */
export function StaticElectricity({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.74} title={title}>
      <Svg viewBox="0 0 300 172" width="100%" height="100%">
        <SvgText x={150} y={15} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          流動・摩擦で電荷がたまり、放電が着火源になる
        </SvgText>
        <Rect x={20} y={30} width={124} height={62} fill="#FDF2F2" stroke={C.red} strokeWidth={1.7} rx={5} />
        <SvgText x={82} y={46} fontSize={9.5} fill={C.red} textAnchor="middle" fontWeight="bold">発生しやすい条件</SvgText>
        <SvgText x={28} y={62} fontSize={8.5} fill={C.dark}>• 流速が速い／噴出</SvgText>
        <SvgText x={28} y={74} fontSize={8.5} fill={C.dark}>• 乾燥している</SvgText>
        <SvgText x={28} y={86} fontSize={8.5} fill={C.dark}>• 絶縁体が多い</SvgText>

        <Rect x={156} y={30} width={124} height={62} fill="#F1F8F2" stroke={C.green} strokeWidth={1.7} rx={5} />
        <SvgText x={218} y={46} fontSize={9.5} fill={C.green} textAnchor="middle" fontWeight="bold">対策</SvgText>
        <SvgText x={164} y={62} fontSize={8.5} fill={C.dark}>• 接地（アース）</SvgText>
        <SvgText x={164} y={74} fontSize={8.5} fill={C.dark}>• 流速を下げる</SvgText>
        <SvgText x={164} y={86} fontSize={8.5} fill={C.dark}>• 帯電防止服・加湿</SvgText>

        <Line x1={60} y1={106} x2={60} y2={126} stroke={C.dark} strokeWidth={2} />
        <Line x1={48} y1={126} x2={72} y2={126} stroke={C.dark} strokeWidth={2.4} />
        <Line x1={52} y1={131} x2={68} y2={131} stroke={C.dark} strokeWidth={2} />
        <Line x1={56} y1={136} x2={64} y2={136} stroke={C.dark} strokeWidth={1.6} />
        <SvgText x={82} y={124} fontSize={8.5} fill={C.green} fontWeight="bold">接地で電荷を逃がす</SvgText>

        <Path d="M 210 104 l 6 12 l -6 0 l 6 12" stroke={C.orange} strokeWidth={2.2} fill="none" />
        <SvgText x={226} y={122} fontSize={8.5} fill={C.orange} fontWeight="bold">放電＝着火源</SvgText>
        <SvgText x={150} y={164} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 可燃性ガスの周りでは微小な火花でも致命的
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 電気防食の原理 */
export function CathodicProtection({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.8} title={title}>
      <Svg viewBox="0 0 300 167" width="100%" height="100%">
        <SvgText x={150} y={15} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          守りたい配管を「カソード」側にして腐食を止める
        </SvgText>
        <Rect x={14} y={54} width={272} height={62} fill="#EFEBE4" />
        <Line x1={14} y1={54} x2={286} y2={54} stroke={C.dark} strokeWidth={2} />
        <Rect x={60} y={82} width={180} height={12} fill="#B0BEC5" stroke={C.dark} strokeWidth={1.6} rx={2} />
        <SvgText x={150} y={107} fontSize={9} fill={C.green} textAnchor="middle" fontWeight="bold">配管（保護される）</SvgText>
        <Rect x={38} y={76} width={16} height={26} fill="#90A4AE" stroke={C.dark} strokeWidth={1.6} rx={2} />
        <SvgText x={30} y={116} fontSize={8.5} fill={C.red} fontWeight="bold">犠牲陽極</SvgText>
        <SvgText x={30} y={127} fontSize={8} fill={C.gray}>先に溶ける</SvgText>
        <Line x1={46} y1={76} x2={46} y2={42} stroke={C.dark} strokeWidth={1.8} />
        <Line x1={150} y1={82} x2={150} y2={42} stroke={C.dark} strokeWidth={1.8} />
        <Line x1={46} y1={42} x2={150} y2={42} stroke={C.dark} strokeWidth={1.8} />
        <Arrow x1={70} y1={42} x2={128} y2={42} color={C.orange} w={1.8} />
        <SvgText x={99} y={36} fontSize={8.5} fill={C.orange} textAnchor="middle" fontWeight="bold">電子の流れ</SvgText>
        <SvgText x={150} y={140} fontSize={9} fill={C.dark} textAnchor="middle">
          外部電源方式では直流電源で強制的に電位を下げる
        </SvgText>
        <SvgText x={150} y={158} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 埋設配管の腐食対策として広く使われる
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** バルク供給の構成 */
export function BulkSupply({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.78} title={title}>
      <Svg viewBox="0 0 300 169" width="100%" height="100%">
        <SvgText x={150} y={15} fontSize={10} fill={C.dark} textAnchor="middle" fontWeight="bold">
          容器交換のかわりに、貯槽へ直接充填する方式
        </SvgText>
        <Rect x={16} y={38} width={70} height={34} fill="#ECEFF1" stroke={C.dark} strokeWidth={1.7} rx={5} />
        <SvgText x={51} y={53} fontSize={9} fill={C.dark} textAnchor="middle" fontWeight="bold">バルク</SvgText>
        <SvgText x={51} y={65} fontSize={9} fill={C.dark} textAnchor="middle" fontWeight="bold">ローリー</SvgText>
        <Arrow x1={88} y1={55} x2={116} y2={55} color={C.blue} w={2} />
        <SvgText x={102} y={48} fontSize={8} fill={C.blue} textAnchor="middle">充填</SvgText>
        <Path d="M 120 40 q 0 -8 30 -8 q 30 0 30 8 L 180 82 q 0 8 -30 8 q -30 0 -30 -8 Z"
          fill="#E3F2FD" stroke={C.blue} strokeWidth={2} />
        <SvgText x={150} y={62} fontSize={9.5} fill={C.blue} textAnchor="middle" fontWeight="bold">バルク貯槽</SvgText>
        <Arrow x1={182} y1={62} x2={210} y2={62} color={C.green} w={2} />
        <Rect x={212} y={44} width={38} height={34} fill="#FFFFFF" stroke={C.green} strokeWidth={1.8} rx={4} />
        <SvgText x={231} y={65} fontSize={9} fill={C.green} textAnchor="middle" fontWeight="bold">消費者</SvgText>
        <Circle cx={268} cy={44} r={12} fill="#FFF8E1" stroke={C.orange} strokeWidth={1.6} />
        <SvgText x={268} y={47} fontSize={7.5} fill={C.orange} textAnchor="middle" fontWeight="bold">残量</SvgText>
        <SvgText x={268} y={66} fontSize={7.5} fill={C.orange} textAnchor="middle">遠隔監視</SvgText>
        <Rect x={20} y={102} width={260} height={30} fill="#F5F8FC" stroke="#E3EAF2" strokeWidth={1} rx={5} />
        <SvgText x={150} y={115} fontSize={9} fill={C.dark} textAnchor="middle">
          容器の運搬・交換作業が減り、配送の効率が上がる
        </SvgText>
        <SvgText x={150} y={127} fontSize={9} fill={C.dark} textAnchor="middle">
          大口消費（集合住宅・業務用）に向く
        </SvgText>
        <SvgText x={150} y={158} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 貯槽は定期的な検査と残量管理が必要
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** ポンプの特性曲線 */
export function PumpCurve({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.74} title={title}>
      <Svg viewBox="0 0 300 172" width="100%" height="100%">
        <Line x1={40} y1={126} x2={286} y2={126} stroke={C.dark} strokeWidth={1.7} />
        <Line x1={40} y1={126} x2={40} y2={18} stroke={C.dark} strokeWidth={1.7} />
        <SvgText x={166} y={142} fontSize={9.5} fill={C.dark} textAnchor="middle">流量 Q →</SvgText>
        <SvgText x={10} y={70} fontSize={9.5} fill={C.dark}>揚程 H</SvgText>
        <Path d="M 48 34 Q 130 44 190 78 Q 240 106 280 122" stroke={C.blue} strokeWidth={2.8} fill="none" />
        <SvgText x={92} y={34} fontSize={9} fill={C.blue} fontWeight="bold">ポンプ性能曲線</SvgText>
        <Path d="M 48 118 Q 130 108 200 76 Q 245 56 280 40" stroke={C.orange} strokeWidth={2.4} fill="none" strokeDasharray="6 4" />
        <SvgText x={214} y={44} fontSize={9} fill={C.orange} fontWeight="bold">管路抵抗曲線</SvgText>
        <Circle cx={196} cy={80} r={5.5} fill={C.red} />
        <SvgText x={200} y={98} fontSize={9} fill={C.red} fontWeight="bold">運転点</SvgText>
        <SvgText x={200} y={110} fontSize={8} fill={C.gray}>2曲線の交点で決まる</SvgText>
        <SvgText x={150} y={164} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 弁を絞ると抵抗曲線が立ち、流量が減る
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** サージング現象 */
export function SurgingCurve({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.74} title={title}>
      <Svg viewBox="0 0 300 172" width="100%" height="100%">
        <Line x1={40} y1={124} x2={286} y2={124} stroke={C.dark} strokeWidth={1.7} />
        <Line x1={40} y1={124} x2={40} y2={18} stroke={C.dark} strokeWidth={1.7} />
        <SvgText x={166} y={140} fontSize={9.5} fill={C.dark} textAnchor="middle">流量 →</SvgText>
        <SvgText x={10} y={70} fontSize={9.5} fill={C.dark}>圧力比</SvgText>
        <Rect x={40} y={18} width={92} height={106} fill={C.red} opacity={0.12} />
        <Path d="M 48 76 Q 96 40 132 34 Q 200 44 278 96" stroke={C.blue} strokeWidth={2.8} fill="none" />
        <Line x1={132} y1={124} x2={132} y2={30} stroke={C.red} strokeWidth={1.8} strokeDasharray="5 4" />
        <SvgText x={132} y={26} fontSize={9} fill={C.red} textAnchor="middle" fontWeight="bold">サージ線</SvgText>
        <SvgText x={86} y={62} fontSize={9.5} fill={C.red} textAnchor="middle" fontWeight="bold">サージング域</SvgText>
        <SvgText x={86} y={74} fontSize={8} fill={C.red} textAnchor="middle">流量が少なすぎる</SvgText>
        <SvgText x={210} y={70} fontSize={9.5} fill={C.green} textAnchor="middle" fontWeight="bold">安定運転域</SvgText>
        <SvgText x={150} y={152} fontSize={9} fill={C.dark} textAnchor="middle">
          流量が減りすぎると流れが逆流・脈動し、機械を損傷する
        </SvgText>
        <SvgText x={150} y={166} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 放風（アンチサージ）弁で最低流量を確保する
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 比重と滞留の違い */
export function GasDensityDrift({ title }: { title?: string }) {
  const room = (x: number, name: string, heavy: boolean, col: string) => (
    <G>
      <Rect x={x} y={34} width={124} height={80} fill="#FAFCFE" stroke={C.dark} strokeWidth={1.8} />
      <SvgText x={x + 62} y={28} fontSize={10} fill={col} textAnchor="middle" fontWeight="bold">{name}</SvgText>
      {[0, 1, 2, 3, 4, 5].map(i => (
        <Circle key={i}
          cx={x + 22 + (i % 3) * 34 + (i > 2 ? 14 : 0)}
          cy={heavy ? 96 - (i > 2 ? 10 : 0) : 48 + (i > 2 ? 10 : 0)}
          r={5} fill={col} opacity={0.6} />
      ))}
      <Arrow x1={x + 62} y1={heavy ? 58 : 92} x2={x + 62} y2={heavy ? 84 : 60} color={col} w={1.6} />
      <SvgText x={x + 62} y={128} fontSize={8.5} fill={C.dark} textAnchor="middle">
        {heavy ? '床付近に滞留' : '天井付近に滞留'}
      </SvgText>
    </G>
  );
  return (
    <Wrap ratio={1.78} title={title}>
      <Svg viewBox="0 0 300 169" width="100%" height="100%">
        {room(16, 'LPガス（重い）', true, C.red)}
        {room(160, '都市ガス（軽い）', false, C.blue)}
        <SvgText x={150} y={148} fontSize={9.5} fill={C.dark} textAnchor="middle">
          比重が滞留する高さを決め、換気口や警報器の位置を左右する
        </SvgText>
        <SvgText x={150} y={164} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 重いガスは地下ピット・くぼ地にたまる
        </SvgText>
      </Svg>
    </Wrap>
  );
}

/** 圧力容器の各部名称 */
export function VesselParts({ title }: { title?: string }) {
  return (
    <Wrap ratio={1.7} title={title}>
      <Svg viewBox="0 0 300 176" width="100%" height="100%">
        <Path d="M 70 54 Q 70 36 100 36 L 200 36 Q 230 36 230 54 L 230 116 Q 230 134 200 134 L 100 134 Q 70 134 70 116 Z"
          fill="#E3F2FD" stroke={C.dark} strokeWidth={2.2} />
        <Line x1={100} y1={36} x2={100} y2={134} stroke={C.gray} strokeWidth={1.2} strokeDasharray="4 3" />
        <Line x1={200} y1={36} x2={200} y2={134} stroke={C.gray} strokeWidth={1.2} strokeDasharray="4 3" />
        <Rect x={136} y={22} width={28} height={16} fill="#CFD8DC" stroke={C.dark} strokeWidth={1.6} rx={2} />
        <SvgText x={150} y={16} fontSize={8.5} fill={C.blue} textAnchor="middle" fontWeight="bold">ノズル・マンホール</SvgText>
        <SvgText x={150} y={90} fontSize={10} fill={C.blue} textAnchor="middle" fontWeight="bold">胴板</SvgText>
        <SvgText x={150} y={102} fontSize={8} fill={C.gray} textAnchor="middle">内圧で周方向応力が最大</SvgText>
        <SvgText x={54} y={90} fontSize={9} fill={C.green} textAnchor="end" fontWeight="bold">鏡板</SvgText>
        <Arrow x1={56} y1={86} x2={76} y2={80} color={C.green} w={1.5} />
        <SvgText x={246} y={90} fontSize={9} fill={C.green} fontWeight="bold">鏡板</SvgText>
        <Arrow x1={244} y1={86} x2={224} y2={80} color={C.green} w={1.5} />
        <Rect x={110} y={134} width={22} height={14} fill={C.gray} />
        <Rect x={168} y={134} width={22} height={14} fill={C.gray} />
        <SvgText x={150} y={158} fontSize={8.5} fill={C.gray} textAnchor="middle">サドル・脚（支持構造）</SvgText>
        <SvgText x={150} y={172} fontSize={10} fill={C.orange} textAnchor="middle" fontWeight="bold">
          ⚠ 開口部と溶接継手が強度上の要注意箇所
        </SvgText>
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
