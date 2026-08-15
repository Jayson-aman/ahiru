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

const s = StyleSheet.create({
  wrap: {
    backgroundColor: '#FFFFFF', borderRadius: 12, padding: 10, marginTop: 8,
    borderWidth: 1, borderColor: '#E3EAF2',
  },
  title: { fontSize: 12, fontWeight: '700', color: '#1A2A44', marginBottom: 6 },
});
