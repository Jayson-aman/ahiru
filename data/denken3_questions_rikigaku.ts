import type { Denken3Question } from './denken3_questions';

export const denken3Rikigaku: Denken3Question[] = [
  // ── 電荷・クーロンの法則 ──────────────────────────────────────
  {
    id: 'dk3_rikigaku_001',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '真空中において、2つの点電荷 Q₁ = 3×10⁻⁶ C、Q₂ = 6×10⁻⁶ C が距離 r = 3×10⁻² m 離れて置かれている。この2点電荷間に働くクーロン力の大きさ [N] として正しいものはどれか。ただし、クーロンの比例定数を k = 9×10⁹ N·m²/C² とする。',
    choices: [
      {
        key: 'A',
        text: '90 N',
        explanation: 'F = kQ₁Q₂/r² に代入すると 180 N となる。90 N は誤り。',
      },
      {
        key: 'B',
        text: '180 N',
        explanation:
          'F = kQ₁Q₂/r² = 9×10⁹×(3×10⁻⁶×6×10⁻⁶)/(3×10⁻²)² = 9×10⁹×18×10⁻¹²/9×10⁻⁴ = 180 N。正しい。',
      },
      {
        key: 'C',
        text: '1800 N',
        explanation: '分母 r² = (3×10⁻²)² = 9×10⁻⁴ を誤って計算した場合の誤答。',
      },
      {
        key: 'D',
        text: '18 N',
        explanation: '電荷の積の計算を誤った場合の誤答。',
      },
    ],
    correctKey: 'B',
    explanation:
      'クーロンの法則 F = kQ₁Q₂/r² に代入する。F = 9×10⁹ × (3×10⁻⁶ × 6×10⁻⁶) / (3×10⁻²)² = 9×10⁹ × 18×10⁻¹² / 9×10⁻⁴ = 9×10⁹ × 2×10⁻⁸ = 180 N。',
    difficulty: 'basic',
    examYear: '令和5年',
  },
  {
    id: 'dk3_rikigaku_002',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '真空の誘電率を ε₀ とするとき、クーロンの比例定数 k と ε₀ の関係を正しく表した式はどれか。',
    choices: [
      {
        key: 'A',
        text: 'k = 4πε₀',
        explanation: 'k と ε₀ は積ではなく逆数の関係にある。k = 1/(4πε₀) が正しい。',
      },
      {
        key: 'B',
        text: 'k = ε₀/(4π)',
        explanation: 'k は ε₀ の逆数に比例するため、この式は誤り。',
      },
      {
        key: 'C',
        text: 'k = 1/(4πε₀)',
        explanation:
          'SI 単位系でクーロンの法則を F = Q₁Q₂/(4πε₀r²) と書くと k = 1/(4πε₀)。正しい。',
      },
      {
        key: 'D',
        text: 'k = 4π/ε₀',
        explanation: '4π が分子にくることはない。正しくは分母に 4πε₀ がくる。',
      },
    ],
    correctKey: 'C',
    explanation:
      'クーロンの法則を SI 単位系で書くと F = Q₁Q₂/(4πε₀r²) となる。比例定数 k はこの係数から k = 1/(4πε₀) と定義される。真空の誘電率 ε₀ ≈ 8.85×10⁻¹² F/m を用いると k ≈ 9×10⁹ N·m²/C² となる。',
    difficulty: 'basic',
    examYear: '令和4年',
  },

  // ── 電界と電位 ────────────────────────────────────────────────
  {
    id: 'dk3_rikigaku_003',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '真空中の点電荷 Q = 2×10⁻⁶ C から距離 r = 0.1 m の点における電位 [V] を求めよ。ただし k = 9×10⁹ N·m²/C² とし、無限遠を基準電位（0 V）とする。',
    choices: [
      {
        key: 'A',
        text: '1.8×10⁴ V',
        explanation: 'V = kQ/r の計算で桁を一つ誤った場合の誤答。正しくは 1.8×10⁵ V。',
      },
      {
        key: 'B',
        text: '1.8×10⁵ V',
        explanation: 'V = kQ/r = 9×10⁹ × 2×10⁻⁶ / 0.1 = 1.8×10⁵ V。正しい。',
      },
      {
        key: 'C',
        text: '9×10⁴ V',
        explanation: '係数を誤った計算結果。',
      },
      {
        key: 'D',
        text: '2×10⁵ V',
        explanation: 'k を考慮せず Q/r だけ計算した誤り。',
      },
    ],
    correctKey: 'B',
    explanation:
      '点電荷による電位は V = kQ/r で求められる。V = 9×10⁹ × 2×10⁻⁶ / 0.1 = 9×10⁹ × 2×10⁻⁵ = 18×10⁴ = 1.8×10⁵ V。',
    difficulty: 'basic',
    examYear: '令和3年',
  },
  {
    id: 'dk3_rikigaku_004',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '一様な電界 E [V/m] の中に、電荷 q [C] の正電荷を電界と逆方向に距離 d [m] だけ移動させた場合、電界がこの電荷に対して行う仕事 W [J] を正しく表した式はどれか。',
    choices: [
      {
        key: 'A',
        text: 'W = qEd',
        explanation: '電界方向と移動方向が逆なので仕事は負の値になる。符号が誤り。',
      },
      {
        key: 'B',
        text: 'W = −qEd',
        explanation:
          '力 F = qE（電界方向）に対し変位が逆方向なので W = F·d·cos180° = −qEd。正しい。',
      },
      {
        key: 'C',
        text: 'W = qE/d',
        explanation: '仕事は力×距離であり、距離で割る式は誤り。',
      },
      {
        key: 'D',
        text: 'W = 0',
        explanation: '電界と移動が平行（逆向き）なので仕事はゼロにならない。',
      },
    ],
    correctKey: 'B',
    explanation:
      '電界 E [V/m] 中の電荷 q [C] に働く力は F = qE [N]（電界方向）。電界と逆方向に d 移動するとき力と変位のなす角が 180° となり、仕事 W = qE × d × cos180° = −qEd [J]。電位の観点では、電界と逆方向に移動すると電位が上昇し、電界が行う仕事は負になる。',
    difficulty: 'standard',
    examYear: '令和5年',
  },
  {
    id: 'dk3_rikigaku_005',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '平行平板コンデンサの極板間距離が d [m]、極板間電圧が V [V] であるとき、極板間の一様な電界の強さ E [V/m] を正しく表す式はどれか。',
    choices: [
      {
        key: 'A',
        text: 'E = Vd',
        explanation: '電界は電圧を距離で割った値である。積ではない。',
      },
      {
        key: 'B',
        text: 'E = V/d',
        explanation: '一様電界では E = V/d [V/m]。正しい。',
      },
      {
        key: 'C',
        text: 'E = d/V',
        explanation: 'V と d の位置が逆。',
      },
      {
        key: 'D',
        text: 'E = V²/d',
        explanation: '電界の次元は [V/m] であり、V² の項は現れない。',
      },
    ],
    correctKey: 'B',
    explanation:
      '平行平板間の電界は一様であり、電位差（電圧）V と極板間距離 d の比 E = V/d [V/m] で表される。「単位距離あたりの電位差」を意味し、d が小さいほど電界は強くなる。',
    difficulty: 'basic',
    examYear: '令和2年',
  },

  // ── コンデンサと静電容量 ──────────────────────────────────────
  {
    id: 'dk3_rikigaku_006',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '静電容量 C₁ = 4 μF と C₂ = 6 μF のコンデンサを直列接続したときの合成静電容量 [μF] はいくらか。',
    choices: [
      {
        key: 'A',
        text: '10 μF',
        explanation: '10 μF は並列接続（4+6）のときの値。直列では逆数の和の逆数を使う。',
      },
      {
        key: 'B',
        text: '2.4 μF',
        explanation: '1/C = 1/4 + 1/6 = 5/12 より C = 12/5 = 2.4 μF。正しい。',
      },
      {
        key: 'C',
        text: '5 μF',
        explanation: '算術平均を取った誤り。直列合成の公式ではない。',
      },
      {
        key: 'D',
        text: '1.2 μF',
        explanation: '逆数の和の逆数をとり忘れた場合の誤り。',
      },
    ],
    correctKey: 'B',
    explanation:
      'コンデンサを直列接続したときの合成静電容量は 1/C = 1/C₁ + 1/C₂。1/C = 1/4 + 1/6 = 3/12 + 2/12 = 5/12 より C = 12/5 = 2.4 μF。',
    difficulty: 'basic',
    examYear: '令和4年',
  },
  {
    id: 'dk3_rikigaku_007',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '極板面積 S [m²]、極板間距離 d [m]、比誘電率 εr の誘電体を挟んだ平行平板コンデンサの静電容量 C [F] を正しく表す式はどれか。ただし、真空の誘電率を ε₀ とする。',
    choices: [
      {
        key: 'A',
        text: 'C = ε₀S/d',
        explanation: '比誘電率 εr が抜けている。誘電体を挟む場合は εr を掛ける必要がある。',
      },
      {
        key: 'B',
        text: 'C = εrε₀d/S',
        explanation: 'd と S の位置が逆。距離が大きくなると容量は減少する。',
      },
      {
        key: 'C',
        text: 'C = εrε₀S/d',
        explanation: '平行平板コンデンサの静電容量は C = εrε₀S/d。正しい。',
      },
      {
        key: 'D',
        text: 'C = εrε₀Sd',
        explanation: '面積と距離の積ではなく、面積を距離で割った値になる。',
      },
    ],
    correctKey: 'C',
    explanation:
      '平行平板コンデンサの静電容量は C = εrε₀S/d [F]。極板面積 S が大きいほど、極板間距離 d が小さいほど静電容量は大きくなる。誘電体を挟むと比誘電率 εr 倍だけ容量が増加する。',
    difficulty: 'basic',
    examYear: '令和3年',
  },
  {
    id: 'dk3_rikigaku_008',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      'C = 10 μF のコンデンサに V = 100 V の電圧を印加したとき、蓄えられる静電エネルギー W [J] として正しいものはどれか。',
    choices: [
      {
        key: 'A',
        text: '0.05 J',
        explanation: 'W = CV²/2 = 10×10⁻⁶×10000/2 = 0.05 J。正しい。',
      },
      {
        key: 'B',
        text: '0.1 J',
        explanation: '1/2 を掛け忘れた誤り（CV² = 0.1 J）。',
      },
      {
        key: 'C',
        text: '5 J',
        explanation: '単位換算を忘れて μF をそのまま計算した場合のミス。',
      },
      {
        key: 'D',
        text: '0.5 J',
        explanation: '単位変換を誤った場合のミス。',
      },
    ],
    correctKey: 'A',
    explanation:
      'コンデンサに蓄えられる静電エネルギーは W = CV²/2。W = (10×10⁻⁶ × 100²) / 2 = (10⁻⁵ × 10⁴) / 2 = 10⁻¹ / 2 = 0.05 J。Q = CV = 10⁻³ C として W = QV/2 = 10⁻³×100/2 = 0.05 J でも確認できる。',
    difficulty: 'standard',
    examYear: '令和5年',
  },

  // ── 直流回路（オームの法則・キルヒホッフの法則） ──────────────
  {
    id: 'dk3_rikigaku_009',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '起電力 E = 24 V、内部抵抗 r = 2 Ω の電池に外部抵抗 R = 10 Ω を接続したとき、回路に流れる電流 I [A] と端子電圧 V [V] の組合せとして正しいものはどれか。',
    choices: [
      {
        key: 'A',
        text: 'I = 2 A、V = 20 V',
        explanation:
          'I = E/(R+r) = 24/12 = 2 A、V = E − Ir = 24 − 4 = 20 V。正しい。',
      },
      {
        key: 'B',
        text: 'I = 2.4 A、V = 21.6 V',
        explanation: '内部抵抗を無視して I = E/R = 2.4 A と計算した誤り。',
      },
      {
        key: 'C',
        text: 'I = 2 A、V = 24 V',
        explanation: '電流は正しいが、端子電圧は内部抵抗の電圧降下（Ir = 4 V）を差し引く必要がある。',
      },
      {
        key: 'D',
        text: 'I = 1.5 A、V = 15 V',
        explanation: '抵抗値の合計を誤って計算した場合のミス。',
      },
    ],
    correctKey: 'A',
    explanation:
      '回路全体の抵抗は R + r = 10 + 2 = 12 Ω。電流 I = E/(R+r) = 24/12 = 2 A。端子電圧は V = E − Ir = 24 − 2×2 = 20 V（または V = IR = 2×10 = 20 V）。',
    difficulty: 'standard',
    examYear: '令和4年',
  },
  {
    id: 'dk3_rikigaku_010',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '電源電圧 V = 100 V、R₁ = 20 Ω と R₂ = 30 Ω が並列接続されている回路がある。この回路全体で消費される電力 P [W] はいくらか。',
    choices: [
      {
        key: 'A',
        text: '200 W',
        explanation: '一相分の電力のみを計算した誤りや、抵抗値を誤った場合のミス。',
      },
      {
        key: 'B',
        text: '500 W',
        explanation: '一方の抵抗のみの消費電力（100²/20 = 500 W）を答えた誤り。',
      },
      {
        key: 'C',
        text: '833 W',
        explanation:
          'P = V²/R₁ + V²/R₂ = 10000/20 + 10000/30 ≈ 500 + 333 = 833 W。正しい。',
      },
      {
        key: 'D',
        text: '400 W',
        explanation: '直列接続と混同した場合のミス。',
      },
    ],
    correctKey: 'C',
    explanation:
      '並列回路では各抵抗に同じ電圧 V = 100 V が加わる。P₁ = V²/R₁ = 10000/20 = 500 W、P₂ = V²/R₂ = 10000/30 ≈ 333 W。全消費電力 P = 500 + 333 ≈ 833 W。合成抵抗 R = R₁R₂/(R₁+R₂) = 600/50 = 12 Ω を使って P = V²/R = 10000/12 ≈ 833 W でも同じ結果が得られる。',
    difficulty: 'standard',
    examYear: '令和5年',
  },
  {
    id: 'dk3_rikigaku_011',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      'キルヒホッフの第1法則（電流則）と第2法則（電圧則）の説明として正しいものはどれか。',
    choices: [
      {
        key: 'A',
        text: '第1法則：任意の閉回路において、起電力の和は電圧降下の和に等しい。第2法則：任意の節点において、流入電流の和は流出電流の和に等しい。',
        explanation: '第1法則と第2法則の説明が入れ替わっている。',
      },
      {
        key: 'B',
        text: '第1法則：任意の節点において、流入電流の和は流出電流の和に等しい。第2法則：任意の閉回路において、起電力の和は電圧降下の和に等しい。',
        explanation: '第1法則は電流則（節点）、第2法則は電圧則（ループ）の正しい説明。正しい。',
      },
      {
        key: 'C',
        text: '第1法則：回路の電流はすべての素子で同じ値である。第2法則：回路の電圧はすべての素子で同じ値である。',
        explanation: 'これは直列・並列回路の特性の説明であり、キルヒホッフの法則の一般的記述ではない。',
      },
      {
        key: 'D',
        text: '第1法則：電圧は抵抗と電流の積に等しい。第2法則：電力は電圧と電流の積に等しい。',
        explanation: 'オームの法則と電力の定義であり、キルヒホッフの法則ではない。',
      },
    ],
    correctKey: 'B',
    explanation:
      'キルヒホッフの第1法則（電流則・KCL）：任意の節点において、その節点に流れ込む電流の総和と流れ出る電流の総和は等しい（ΣI = 0）。第2法則（電圧則・KVL）：任意の閉回路において、起電力の代数和は電圧降下の代数和に等しい（ΣE = ΣIR）。',
    difficulty: 'standard',
    examYear: '令和3年',
  },
  {
    id: 'dk3_rikigaku_012',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      'ホイートストンブリッジが平衡条件にあるとき、4辺の抵抗 P、Q、R、X の間に成立する関係式として正しいものはどれか。ただし P と X、Q と R が向かい合う辺とする。',
    choices: [
      {
        key: 'A',
        text: 'P + Q = R + X',
        explanation: '平衡条件は積の関係であり、和の関係ではない。',
      },
      {
        key: 'B',
        text: 'PQ = RX',
        explanation: '対辺同士の積として正しく表す必要がある。PX = QR が正しい。',
      },
      {
        key: 'C',
        text: 'PX = QR',
        explanation: '向かい合う辺の積が等しい。PX = QR。正しい。',
      },
      {
        key: 'D',
        text: 'P/Q = X/R',
        explanation: '正しくは P/Q = R/X（PX = QR と等価）であり、X/R は誤り。',
      },
    ],
    correctKey: 'C',
    explanation:
      'ホイートストンブリッジが平衡（検流計の電流がゼロ）のとき、向かい合う辺の抵抗の積が等しい：PX = QR（または P/Q = R/X）。この性質を利用して未知抵抗 X = QR/P として求められる。精密な抵抗測定に使用される。',
    difficulty: 'standard',
    examYear: '令和4年',
  },

  // ── 交流回路（RLC回路・インピーダンス・共振） ─────────────────
  {
    id: 'dk3_rikigaku_013',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '抵抗 R = 6 Ω と誘導リアクタンス XL = 8 Ω が直列接続された回路のインピーダンス Z [Ω] はいくらか。',
    choices: [
      {
        key: 'A',
        text: '14 Ω',
        explanation: '単純に R + XL = 14 Ω と計算した誤り。R と XL は位相が 90° 異なるため単純加算できない。',
      },
      {
        key: 'B',
        text: '10 Ω',
        explanation: 'Z = √(R² + XL²) = √(36+64) = √100 = 10 Ω。正しい。',
      },
      {
        key: 'C',
        text: '7 Ω',
        explanation: '計算ミスによる誤答。',
      },
      {
        key: 'D',
        text: '2 Ω',
        explanation: 'XL − R を計算した誤り。',
      },
    ],
    correctKey: 'B',
    explanation:
      'RL 直列回路のインピーダンスは Z = √(R² + XL²) = √(6² + 8²) = √(36 + 64) = √100 = 10 Ω。R と XL は 90° の位相差があるため、ベクトル的な合成（三平方の定理）を用いる。',
    difficulty: 'standard',
    examYear: '令和5年',
  },
  {
    id: 'dk3_rikigaku_014',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      'RLC 直列回路において直列共振が成立したとき、回路のインピーダンス・電流・力率に関する説明として正しいものはどれか。',
    choices: [
      {
        key: 'A',
        text: 'インピーダンスは最大となり、電流は最小、力率は 0 になる。',
        explanation: '直列共振ではインピーダンスは最小（= R）となり電流は最大になる。最大・最小が逆。',
      },
      {
        key: 'B',
        text: 'インピーダンスは R（抵抗値のみ）となり、電流が最大、力率は 1 になる。',
        explanation: '直列共振では XL = XC となりリアクタンスが打ち消し合い Z = R、電流最大、力率 = 1。正しい。',
      },
      {
        key: 'C',
        text: 'インピーダンスはゼロとなり、電流は無限大になる。',
        explanation: '理想 LC 回路（R = 0）の理論値。現実には抵抗成分が残り Z = R > 0。',
      },
      {
        key: 'D',
        text: 'インピーダンスは最大となり、電流は最小、力率は 1 になる。',
        explanation: 'インピーダンス最大・電流最小は並列共振の説明。',
      },
    ],
    correctKey: 'B',
    explanation:
      'RLC 直列回路の共振条件は XL = XC（ωL = 1/ωC）。このとき誘導性リアクタンスと容量性リアクタンスが打ち消し合い、インピーダンス Z = R（最小）、電流 I = V/R（最大）、電圧と電流の位相差がゼロ（力率 cosφ = 1）になる。',
    difficulty: 'standard',
    examYear: '令和3年',
  },
  {
    id: 'dk3_rikigaku_015',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      'R = 10 Ω、L = 0.1 H、C = 100 μF からなる RLC 直列回路の直列共振角周波数 ω₀ [rad/s] として正しいものはどれか。',
    choices: [
      {
        key: 'A',
        text: '100 rad/s',
        explanation:
          'ω₀ = 1/√(LC) = 1/√(0.1×100×10⁻⁶) = 1/√(10⁻⁵) ≈ 316 rad/s であり、100 は誤り。',
      },
      {
        key: 'B',
        text: '200 rad/s',
        explanation: '計算値が合わない誤答。',
      },
      {
        key: 'C',
        text: '約 316 rad/s',
        explanation: 'ω₀ = 1/√(10⁻⁵) = 10^(5/2) = 100√10 ≈ 316 rad/s。正しい。',
      },
      {
        key: 'D',
        text: '1000 rad/s',
        explanation: '単位換算を誤った場合のミス。',
      },
    ],
    correctKey: 'C',
    explanation:
      '直列共振角周波数は ω₀ = 1/√(LC)。LC = 0.1 × 100×10⁻⁶ = 10⁻⁵ H·F。ω₀ = 1/√(10⁻⁵) = 10^(5/2) = 100√10 ≈ 316 rad/s。共振周波数 f₀ = ω₀/(2π) ≈ 50.3 Hz。',
    difficulty: 'advanced',
    examYear: '令和4年',
  },
  {
    id: 'dk3_rikigaku_016',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '実効値 V = 100 V の交流電圧を、R = 8 Ω と容量性リアクタンス XC = 6 Ω が直列接続された回路に加えたとき、回路の力率 cosφ はいくらか。',
    choices: [
      {
        key: 'A',
        text: '0.6',
        explanation: '0.6 は sinφ = XC/Z に相当する値。力率は R/Z。',
      },
      {
        key: 'B',
        text: '0.75',
        explanation: '計算が合わない誤答。',
      },
      {
        key: 'C',
        text: '0.8',
        explanation: 'Z = √(8²+6²) = 10 Ω、cosφ = R/Z = 8/10 = 0.8。正しい。',
      },
      {
        key: 'D',
        text: '1.0',
        explanation: '純抵抗回路でのみ成立する値。容量性リアクタンスがある場合は 1.0 にならない。',
      },
    ],
    correctKey: 'C',
    explanation:
      'インピーダンス Z = √(R² + XC²) = √(64 + 36) = √100 = 10 Ω。力率 cosφ = R/Z = 8/10 = 0.8。この回路は容量性（XC が存在）なので、電流は電圧より位相が進む（進み力率）。',
    difficulty: 'standard',
    examYear: '令和5年',
  },
  {
    id: 'dk3_rikigaku_017',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '交流回路において有効電力 P = 600 W、皮相電力 S = 1000 VA のとき、無効電力 Q [var] はいくらか。',
    choices: [
      {
        key: 'A',
        text: '400 var',
        explanation: 'Q = √(S² − P²) = √(10⁶ − 3.6×10⁵) = √640000 = 800 var であり、400 は誤り。',
      },
      {
        key: 'B',
        text: '600 var',
        explanation: '有効電力の値をそのまま無効電力とした誤り。',
      },
      {
        key: 'C',
        text: '800 var',
        explanation: 'Q = √(S² − P²) = √(1000² − 600²) = √640000 = 800 var。正しい。',
      },
      {
        key: 'D',
        text: '1600 var',
        explanation: 'S + P を計算した誤り。',
      },
    ],
    correctKey: 'C',
    explanation:
      '皮相電力 S、有効電力 P、無効電力 Q の関係は S² = P² + Q²（電力の三角形）。Q = √(S² − P²) = √(1000² − 600²) = √(1000000 − 360000) = √640000 = 800 var。',
    difficulty: 'standard',
    examYear: '令和4年',
  },

  // ── 三相交流 ─────────────────────────────────────────────────
  {
    id: 'dk3_rikigaku_018',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '三相平衡 Y（スター）結線において、相電圧 Vp = 100 V のとき線間電圧 VL [V] はいくらか。',
    choices: [
      {
        key: 'A',
        text: '100 V',
        explanation: 'VL = Vp となるのは Δ（デルタ）結線の場合。Y 結線では √3 倍になる。',
      },
      {
        key: 'B',
        text: '約 173 V',
        explanation: 'VL = √3 × Vp = √3 × 100 ≈ 173 V。正しい。',
      },
      {
        key: 'C',
        text: '200 V',
        explanation: '2倍と混同した誤り。',
      },
      {
        key: 'D',
        text: '300 V',
        explanation: '3倍と混同した誤り。',
      },
    ],
    correctKey: 'B',
    explanation:
      'Y 結線の三相平衡回路では線間電圧は相電圧の √3 倍となる。VL = √3 × Vp = 1.732 × 100 ≈ 173 V。一方、線電流は相電流に等しい（IL = Ip）。実際の系統では相電圧 6600/√3 ≈ 3810 V の Y 結線で線間電圧 6600 V などが用いられる。',
    difficulty: 'standard',
    examYear: '令和3年',
  },
  {
    id: 'dk3_rikigaku_019',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '三相平衡 Y 結線の電源に Y 結線の三相平衡負荷（各相の抵抗 R = 10 Ω）が接続されている。線間電圧が VL = 200 V のとき、三相合計の消費電力 P [W] はいくらか。',
    choices: [
      {
        key: 'A',
        text: '2000 W',
        explanation: '一相分の電力しか計算していない場合のミス、または相電圧の計算誤り。',
      },
      {
        key: 'B',
        text: '4000 W',
        explanation:
          '相電圧 Vp = 200/√3、一相分 P₁ = Vp²/R = 40000/(3×10) ≈ 1333 W、三相合計 P = 3P₁ = 4000 W。正しい。',
      },
      {
        key: 'C',
        text: '6000 W',
        explanation: '線間電圧を相電圧と誤って P = 3×200²/10 = 12000 W などを計算した誤り。',
      },
      {
        key: 'D',
        text: '1333 W',
        explanation: '三相合計ではなく一相分の消費電力。',
      },
    ],
    correctKey: 'B',
    explanation:
      'Y 結線の相電圧 Vp = VL/√3 = 200/√3 V。一相の消費電力 P₁ = Vp²/R = (200/√3)²/10 = 40000/(3×10) ≈ 1333 W。三相合計 P = 3P₁ = 4000 W。または三相電力の公式 P = √3 × VL × IL × cosφ で、IL = Vp/R = (200/√3)/10 を代入すると P = √3 × 200 × 200/(10√3) × 1 = 4000 W。',
    difficulty: 'advanced',
    examYear: '令和5年',
  },
  {
    id: 'dk3_rikigaku_020',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '三相平衡回路の Δ（デルタ）結線を等価な Y（スター）結線に変換する場合、Δ 結線の各辺のインピーダンス ZΔ と Y 結線の各相インピーダンス ZY の関係として正しいものはどれか。',
    choices: [
      {
        key: 'A',
        text: 'ZY = 3ZΔ',
        explanation: 'Δ→Y 変換ではインピーダンスは 1/3 になる。3倍は逆方向（Y→Δ）の変換。',
      },
      {
        key: 'B',
        text: 'ZY = ZΔ/3',
        explanation: '平衡三相の Δ-Y 変換ではインピーダンスが 1/3 になる。ZY = ZΔ/3。正しい。',
      },
      {
        key: 'C',
        text: 'ZY = √3 × ZΔ',
        explanation: '√3 倍は電圧変換に関係するが、インピーダンス変換式ではない。',
      },
      {
        key: 'D',
        text: 'ZY = ZΔ',
        explanation: 'Δ と Y では接続が異なり、等価置換にはインピーダンス値の変換が必要。',
      },
    ],
    correctKey: 'B',
    explanation:
      '平衡三相回路の Δ-Y インピーダンス変換では ZY = ZΔ/3（逆に Y→Δ では ZΔ = 3ZY）。たとえば各辺 ZΔ = 30 Ω の Δ 負荷は、各相 ZY = 10 Ω の Y 負荷と等価になる。',
    difficulty: 'advanced',
    examYear: '令和4年',
  },

  // ── 電磁気（磁束・インダクタンス・相互誘導） ─────────────────
  {
    id: 'dk3_rikigaku_021',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '巻数 N = 500 のコイルに鎖交する磁束が Δt = 0.02 s の間に ΔΦ = 4×10⁻³ Wb 変化した。このコイルに誘導される起電力の大きさ [V] はいくらか。',
    choices: [
      {
        key: 'A',
        text: '10 V',
        explanation: 'N を掛けずに ΔΦ/Δt = 0.2 V を計算した誤りなど。正しくは 100 V。',
      },
      {
        key: 'B',
        text: '40 V',
        explanation: 'N と ΔΦ/Δt の計算を誤った場合のミス。',
      },
      {
        key: 'C',
        text: '100 V',
        explanation: '|e| = N × |ΔΦ/Δt| = 500 × (4×10⁻³/0.02) = 500 × 0.2 = 100 V。正しい。',
      },
      {
        key: 'D',
        text: '1000 V',
        explanation: '時間を誤って代入した場合のミス。',
      },
    ],
    correctKey: 'C',
    explanation:
      'ファラデーの電磁誘導の法則より |e| = N × |ΔΦ/Δt| = 500 × (4×10⁻³ / 0.02) = 500 × 0.2 = 100 V。負号（レンツの法則）は誘導起電力が磁束変化を妨げる方向に生じることを示す。',
    difficulty: 'advanced',
    examYear: '令和3年',
  },
  {
    id: 'dk3_rikigaku_022',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '自己インダクタンス L = 0.5 H のコイルに電流 i = 4sin(100t) A が流れているとき、コイルに発生する自己誘導起電力 e [V] を正しく表す式はどれか。',
    choices: [
      {
        key: 'A',
        text: 'e = 200cos(100t) V',
        explanation: 'e = −L(di/dt) = −200cos(100t)。符号が反対の誤り。',
      },
      {
        key: 'B',
        text: 'e = −200cos(100t) V',
        explanation:
          'e = −L(di/dt) = −0.5 × 400cos(100t) = −200cos(100t) V。正しい。',
      },
      {
        key: 'C',
        text: 'e = −200sin(100t) V',
        explanation: 'di/dt を誤った場合の誤答。sin の微分は cos であって sin ではない。',
      },
      {
        key: 'D',
        text: 'e = 2cos(100t) V',
        explanation: '角周波数 ω = 100 を掛け忘れた場合のミス。',
      },
    ],
    correctKey: 'B',
    explanation:
      '自己誘導起電力は e = −L(di/dt)。i = 4sin(100t) より di/dt = 4×100×cos(100t) = 400cos(100t)。よって e = −0.5 × 400cos(100t) = −200cos(100t) V。負号はレンツの法則を反映している。',
    difficulty: 'standard',
    examYear: '令和5年',
  },
  {
    id: 'dk3_rikigaku_023',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '自己インダクタンス L₁ = 2 H、L₂ = 8 H の2つのコイルの相互インダクタンスが M = 3 H のとき、結合係数 k はいくらか。',
    choices: [
      {
        key: 'A',
        text: '0.5',
        explanation: 'k = M/√(L₁L₂) = 3/√16 = 3/4 = 0.75 であり、0.5 は誤り。',
      },
      {
        key: 'B',
        text: '0.6',
        explanation: '計算値が合わない誤答。',
      },
      {
        key: 'C',
        text: '0.75',
        explanation: 'k = M/√(L₁L₂) = 3/√(2×8) = 3/4 = 0.75。正しい。',
      },
      {
        key: 'D',
        text: '1.0',
        explanation: '完全結合のとき k = 1.0 となるが、本問の数値では 0.75。',
      },
    ],
    correctKey: 'C',
    explanation:
      '結合係数 k = M/√(L₁L₂) = 3/√(2×8) = 3/√16 = 3/4 = 0.75。k = 1 が理想的な完全結合であり、0 ≤ k ≤ 1 の範囲をとる。k が大きいほど2つのコイルの磁気的結合が密であることを示す。',
    difficulty: 'standard',
    examYear: '令和4年',
  },
  {
    id: 'dk3_rikigaku_024',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '磁性体の磁化特性に関する説明として誤っているものはどれか。',
    choices: [
      {
        key: 'A',
        text: '強磁性体は外部磁界を除いても残留磁気が残り、ヒステリシス現象を示す。',
        explanation: '鉄・ニッケル・コバルトなどの強磁性体にはヒステリシス（磁気履歴）現象がある。正しい説明。',
      },
      {
        key: 'B',
        text: '常磁性体は外部磁界と同方向にわずかに磁化される。',
        explanation: 'アルミニウム・白金などの常磁性体は外部磁界と同方向に弱く磁化される。正しい説明。',
      },
      {
        key: 'C',
        text: '反磁性体は外部磁界と反対方向にわずかに磁化される。',
        explanation: '銅・ビスマスなどの反磁性体は外部磁界と逆方向に弱く磁化される。正しい説明。',
      },
      {
        key: 'D',
        text: '強磁性体の比透磁率 μr は常に 1 より小さい値をとる。',
        explanation: '強磁性体の比透磁率は 1 より非常に大きく（数百〜数万）、1 より小さくなることはない。誤りである。',
      },
    ],
    correctKey: 'D',
    explanation:
      '強磁性体（鉄、ニッケル、コバルト等）の比透磁率 μr は 1 より非常に大きく（数百から数万）、外部磁界を大幅に強める特性がある。μr < 1 になるのは反磁性体（μr がわずかに 1 未満）の場合。したがって D の説明が誤り。',
    difficulty: 'advanced',
    examYear: '令和3年',
  },

  // ── 過渡現象 ─────────────────────────────────────────────────
  {
    id: 'dk3_rikigaku_025',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      'R = 1 kΩ、C = 10 μF の RC 直列回路に直流電圧 V = 100 V を印加したとき、時定数 τ [ms] はいくらか。',
    choices: [
      {
        key: 'A',
        text: '1 ms',
        explanation: 'τ = RC = 10³ × 10⁻⁵ = 10⁻² s = 10 ms。1 ms は誤り。',
      },
      {
        key: 'B',
        text: '5 ms',
        explanation: '計算が合わない誤答。',
      },
      {
        key: 'C',
        text: '10 ms',
        explanation: 'τ = RC = 1×10³ × 10×10⁻⁶ = 10⁻² s = 10 ms。正しい。',
      },
      {
        key: 'D',
        text: '100 ms',
        explanation: '単位換算ミスによる誤答。',
      },
    ],
    correctKey: 'C',
    explanation:
      'RC 回路の時定数 τ = RC = 1×10³ Ω × 10×10⁻⁶ F = 10⁻² s = 10 ms。時定数は充電開始から定常状態の約 63.2%（1 − 1/e ≈ 0.632）に達するまでの時間を表す。5τ 後にほぼ定常状態（99.3%）に達する。',
    difficulty: 'standard',
    examYear: '令和5年',
  },
  {
    id: 'dk3_rikigaku_026',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      'RL 直列回路（R = 50 Ω、L = 0.5 H）に直流電圧 V = 100 V を t = 0 で印加したとき、時刻 t における電流 i(t) [A] を正しく表す式はどれか。',
    choices: [
      {
        key: 'A',
        text: 'i(t) = 2(1 − e^{−100t}) A',
        explanation:
          '時定数 τ = L/R = 0.01 s より指数部 = −t/0.01 = −100t、定常値 V/R = 2 A。i(t) = 2(1−e^{−100t})。正しい。',
      },
      {
        key: 'B',
        text: 'i(t) = 2e^{−100t} A',
        explanation: 'これは RL 回路の放電（電流減衰）の式。充電では (1−e^{…}) の形になる。',
      },
      {
        key: 'C',
        text: 'i(t) = 2(1 − e^{−50t}) A',
        explanation: '時定数を τ = R/L = 100 s⁻¹ と誤って計算した場合。',
      },
      {
        key: 'D',
        text: 'i(t) = 100(1 − e^{−100t}) A',
        explanation: '定常電流を V/L = 200 A と誤った場合のミス。',
      },
    ],
    correctKey: 'A',
    explanation:
      'RL 直列回路に直流電圧 V を印加すると電流は i(t) = (V/R)(1 − e^{−t/τ})。時定数 τ = L/R = 0.5/50 = 0.01 s、定常電流 I∞ = V/R = 100/50 = 2 A。よって i(t) = 2(1 − e^{−t/0.01}) = 2(1 − e^{−100t}) A。',
    difficulty: 'advanced',
    examYear: '令和4年',
  },
  {
    id: 'dk3_rikigaku_027',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      'RC 直列回路において、コンデンサに初期電圧 V₀ が蓄えられており、t = 0 でスイッチを閉じて放電させたときのコンデンサ電圧 vc(t) を表す式として正しいものはどれか。',
    choices: [
      {
        key: 'A',
        text: 'vc(t) = V₀(1 − e^{−t/RC})',
        explanation: 'これは充電のときの式。放電では単純な指数減衰 e^{−t/RC} の形になる。',
      },
      {
        key: 'B',
        text: 'vc(t) = V₀ × e^{−t/RC}',
        explanation: '放電時のコンデンサ電圧は指数関数的に減衰する。vc(t) = V₀e^{−t/RC}。正しい。',
      },
      {
        key: 'C',
        text: 'vc(t) = V₀ × e^{t/RC}',
        explanation: '指数部の符号が正では電圧が発散してしまい物理的に誤り。',
      },
      {
        key: 'D',
        text: 'vc(t) = V₀ − V₀t/RC',
        explanation: '線形近似であり、RC 回路の正確な指数減衰式ではない（t が小さい場合の近似にすぎない）。',
      },
    ],
    correctKey: 'B',
    explanation:
      'RC 回路の放電においてコンデンサ電圧は vc(t) = V₀ × e^{−t/RC}。時定数 τ = RC の経過後に初期値の 1/e（≈36.8%）まで減少する。充電の場合は vc(t) = V∞(1 − e^{−t/RC}) となる。',
    difficulty: 'standard',
    examYear: '令和5年',
  },

  // ── 半導体素子（ダイオード・トランジスタ） ───────────────────
  {
    id: 'dk3_rikigaku_028',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      'p-n 接合ダイオードに関する説明として誤っているものはどれか。',
    choices: [
      {
        key: 'A',
        text: '順バイアスを加えると接合部の空乏層が狭くなり、電流が流れやすくなる。',
        explanation: '順バイアス（p 側を正）では空乏層が縮小し、キャリアが移動して電流が流れる。正しい説明。',
      },
      {
        key: 'B',
        text: '逆バイアスを加えると空乏層が広がり、電流はほとんど流れない。',
        explanation: '逆バイアスでは空乏層が拡大し、わずかな漏れ電流のみが流れる。正しい説明。',
      },
      {
        key: 'C',
        text: 'p 形半導体の多数キャリアは電子であり、n 形半導体の多数キャリアは正孔（ホール）である。',
        explanation: 'p 形の多数キャリアは正孔（ホール）、n 形は電子。説明が逆であり、誤りである。',
      },
      {
        key: 'D',
        text: 'ダイオードは交流を直流に変換する整流作用をもつ。',
        explanation: 'ダイオードの一方向性を利用した整流回路（半波・全波）は基本的な応用。正しい説明。',
      },
    ],
    correctKey: 'C',
    explanation:
      'p 形半導体の多数キャリアは正孔（ホール）、n 形半導体の多数キャリアは電子である（選択肢 C は逆に述べており誤り）。p 形は 3 価の不純物（ボロン等）をドープして正孔を多数形成し、n 形は 5 価の不純物（リン等）をドープして電子を多数形成する。',
    difficulty: 'basic',
    examYear: '令和3年',
  },
  {
    id: 'dk3_rikigaku_029',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      'npn 形バイポーラトランジスタをエミッタ接地で使用したとき、コレクタ電流 IC とベース電流 IB の比として定義される直流電流増幅率を正しく表す記号と式はどれか。',
    choices: [
      {
        key: 'A',
        text: 'α = IC/IB',
        explanation: 'α はベース接地での電流増幅率（IC/IE）を表す記号。エミッタ接地では β を使用する。',
      },
      {
        key: 'B',
        text: 'β = IC/IB',
        explanation: 'エミッタ接地の直流電流増幅率 hFE（または β）= IC/IB。正しい。',
      },
      {
        key: 'C',
        text: 'β = IB/IC',
        explanation: 'IC と IB の比が逆。β = IC/IB であり通常は 1 より大きい。',
      },
      {
        key: 'D',
        text: 'α = IE/IB',
        explanation: 'IE = IC + IB の関係があり、IE/IB は α の定義とは異なる。',
      },
    ],
    correctKey: 'B',
    explanation:
      'エミッタ接地のバイポーラトランジスタの直流電流増幅率は β（または hFE）= IC/IB で定義される。ベース接地の電流増幅率 α = IC/IE との関係は β = α/(1−α)、α = β/(1+β)。通常 β は数十〜数百の値をとり、スイッチング・増幅回路に利用される。',
    difficulty: 'standard',
    examYear: '令和4年',
  },
  {
    id: 'dk3_rikigaku_030',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      'ツェナーダイオード（定電圧ダイオード）の主な用途として最も適切なものはどれか。',
    choices: [
      {
        key: 'A',
        text: '交流電圧を整流して直流を得る。',
        explanation: 'これは一般整流ダイオードの用途。ツェナーは逆方向降伏を利用する。',
      },
      {
        key: 'B',
        text: '逆方向に一定の電圧（ツェナー電圧 VZ）で安定動作する定電圧回路。',
        explanation: 'ツェナーダイオードはアバランシェまたはツェナー降伏を利用して端子電圧を一定に保つ。正しい。',
      },
      {
        key: 'C',
        text: '光を受けると電流が流れる光センサとして使用する。',
        explanation: 'これはフォトダイオードの用途。',
      },
      {
        key: 'D',
        text: '高周波信号を発振させる発振素子として使用する。',
        explanation: 'これはガン・ダイオードやトンネルダイオードの用途。',
      },
    ],
    correctKey: 'B',
    explanation:
      'ツェナーダイオードは逆方向にツェナー電圧 VZ 以上の電圧が加わると急激に電流が流れ始め、端子電圧を VZ にほぼ一定に保つ特性をもつ。定電圧回路・過電圧保護回路などに広く使用される。電流制限抵抗と組み合わせて使うことが多い。',
    difficulty: 'standard',
    examYear: '令和5年',
  },
  {
    id: 'dk3_rikigaku_031',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '半波整流回路に実効値 100 V の交流電圧を加えたとき、出力の平均電圧（直流分）として最も近い値はどれか。ただし、ダイオードは理想的（順方向電圧降下ゼロ）とする。',
    choices: [
      {
        key: 'A',
        text: '約 31.8 V',
        explanation: '31.8 V は Vm/(2π)×2 など誤った計算の結果。正しくは Vm/π ≈ 45 V。',
      },
      {
        key: 'B',
        text: '約 45.0 V',
        explanation: 'Vave = Vm/π = 100√2/π ≈ 141.4/3.14 ≈ 45.0 V。正しい。',
      },
      {
        key: 'C',
        text: '約 63.7 V',
        explanation: '63.7 V は Vm/π × (2/π) などの計算ミス。全波整流の 1/2 でもない。',
      },
      {
        key: 'D',
        text: '約 90.0 V',
        explanation: '全波整流の平均電圧 2Vm/π ≈ 90 V であり、半波ではない。',
      },
    ],
    correctKey: 'B',
    explanation:
      '半波整流回路の出力平均電圧は Vave = Vm/π（Vm は最大値）。実効値 V = 100 V より最大値 Vm = V√2 = 100√2 ≈ 141.4 V。平均電圧 = 141.4/π ≈ 45.0 V。全波整流では 2Vm/π ≈ 90.0 V となる。',
    difficulty: 'standard',
    examYear: '令和4年',
  },
  {
    id: 'dk3_rikigaku_032',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      'n チャネル接合形 FET（電界効果トランジスタ）において、ゲート・ソース間電圧 VGS を負方向に大きくしたとき、ドレイン電流 ID はどのように変化するか。',
    choices: [
      {
        key: 'A',
        text: 'ID は増加する。',
        explanation: 'n チャネル JFET では VGS を負にするとチャネルが狭くなり電流は減少する。',
      },
      {
        key: 'B',
        text: 'ID は変化しない。',
        explanation: 'VGS はドレイン電流を制御するパラメータ。変化しないことはない。',
      },
      {
        key: 'C',
        text: 'ID は減少し、ピンチオフ電圧（VP）に達するとほぼゼロになる。',
        explanation:
          'n チャネル JFET では VGS を負にするほど空乏層が広がりチャネルが狭まり、ID が減少してピンチオフに達する。正しい。',
      },
      {
        key: 'D',
        text: 'ゲートからソースへ大きな電流が流れる。',
        explanation: 'JFET のゲート電流は非常に小さい（pA〜nA オーダー）。',
      },
    ],
    correctKey: 'C',
    explanation:
      'n チャネル JFET では VGS = 0 のとき最大ドレイン電流（IDSS）が流れる。VGS を負方向に増加させると p-n 接合の空乏層がチャネルに広がり、実効的なチャネル幅が狭くなって ID が減少する。VGS がピンチオフ電圧 VP に達すると ID ≈ 0（ピンチオフ状態）となる。',
    difficulty: 'advanced',
    examYear: '令和3年',
  },

  // ── 電気計測（電流計・電圧計・電力計） ───────────────────────
  {
    id: 'dk3_rikigaku_033',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '内部抵抗 r = 100 Ω の電流計を用いて、最大測定電流の 10 倍まで測定できるように分流器（シャント）を接続する場合、分流器の抵抗値 Rs [Ω] はいくらにすればよいか。',
    choices: [
      {
        key: 'A',
        text: '10 Ω',
        explanation: 'Rs = r/(n−1) = 100/9 ≈ 11.1 Ω。10 Ω は誤り。',
      },
      {
        key: 'B',
        text: '100/9 Ω（≈ 11.1 Ω）',
        explanation: 'Rs = r/(n−1) = 100/(10−1) = 100/9 ≈ 11.1 Ω。正しい。',
      },
      {
        key: 'C',
        text: '900 Ω',
        explanation: 'Rs = r(n−1) = 900 Ω は電圧計用倍率器の式。分流器には使用しない。',
      },
      {
        key: 'D',
        text: '1000 Ω',
        explanation: 'r × n = 1000 Ω と誤って計算した場合のミス。',
      },
    ],
    correctKey: 'B',
    explanation:
      '測定範囲を n 倍に拡大するための分流器（シャント）抵抗は Rs = r/(n−1)。n = 10、r = 100 Ω より Rs = 100/(10−1) = 100/9 ≈ 11.1 Ω。並列接続なので電流計と分流器の端子電圧は等しく、分流器には電流計の (n−1) 倍の電流が流れる。',
    difficulty: 'standard',
    examYear: '令和5年',
  },
  {
    id: 'dk3_rikigaku_034',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '内部抵抗 r = 10 kΩ の電圧計を使って最大測定電圧の 5 倍まで測定できるよう直列に倍率器を接続したい。倍率器の抵抗値 Rm [kΩ] はいくらか。',
    choices: [
      {
        key: 'A',
        text: '10 kΩ',
        explanation: 'Rm = r(n−1) = 10×4 = 40 kΩ。10 kΩ は誤り。',
      },
      {
        key: 'B',
        text: '40 kΩ',
        explanation: 'Rm = r(n−1) = 10×(5−1) = 40 kΩ。正しい。',
      },
      {
        key: 'C',
        text: '50 kΩ',
        explanation: 'r × n = 10×5 = 50 kΩ と計算した誤り。正しくは (n−1) 倍。',
      },
      {
        key: 'D',
        text: '2 kΩ',
        explanation: 'r/(n−1) を計算した誤り（分流器の式を適用した場合）。',
      },
    ],
    correctKey: 'B',
    explanation:
      '電圧計の測定範囲を n 倍に拡大するための倍率器（直列抵抗）は Rm = r(n−1)。n = 5、r = 10 kΩ より Rm = 10×(5−1) = 40 kΩ。直列接続なので倍率器と電圧計に流れる電流は等しく、全体の電圧は n 倍（= 5倍）まで測定可能になる。',
    difficulty: 'standard',
    examYear: '令和4年',
  },
  {
    id: 'dk3_rikigaku_035',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '電力計（ワットメータ）の読みが P = 800 W、電圧計の読みが V = 200 V、電流計の読みが I = 5 A であった。負荷の力率 cosφ として正しいものはどれか。',
    choices: [
      {
        key: 'A',
        text: '0.6',
        explanation: 'cosφ = P/(VI) = 800/1000 = 0.8。0.6 は誤り。',
      },
      {
        key: 'B',
        text: '0.7',
        explanation: '計算値が合わない誤答。',
      },
      {
        key: 'C',
        text: '0.8',
        explanation: 'cosφ = P/(VI) = 800/(200×5) = 800/1000 = 0.8。正しい。',
      },
      {
        key: 'D',
        text: '1.0',
        explanation: '電力計の読みと電圧×電流が等しい（P = VI）場合のみ力率 1.0 となるが、800 ≠ 1000。',
      },
    ],
    correctKey: 'C',
    explanation:
      '電力 P = VI cosφ の関係より、力率 cosφ = P/(VI) = 800/(200×5) = 800/1000 = 0.8。皮相電力 S = VI = 1000 VA に対して有効電力 P = 800 W なので力率 = 0.8、無効電力 Q = √(S²−P²) = 600 var。',
    difficulty: 'standard',
    examYear: '令和5年',
  },
  {
    id: 'dk3_rikigaku_036',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '2電力計法による三相電力測定において、2つの電力計の読みが W₁ = 1200 W、W₂ = 400 W であった。三相有効電力 P [W] と三相無効電力 Q [var] の組合せとして正しいものはどれか。',
    choices: [
      {
        key: 'A',
        text: 'P = 1600 W、Q = 800√3 var',
        explanation:
          'P = W₁ + W₂ = 1600 W、Q = √3(W₁ − W₂) = √3 × 800 = 800√3 var。正しい。',
      },
      {
        key: 'B',
        text: 'P = 800 W、Q = 800√3 var',
        explanation: 'P の計算を W₁ − W₂ としてしまった誤り。',
      },
      {
        key: 'C',
        text: 'P = 1600 W、Q = 400√3 var',
        explanation: 'Q = √3 × (W₁ − W₂) = 800√3 であり、800√3 ≠ 400√3。',
      },
      {
        key: 'D',
        text: 'P = 1600 W、Q = 1600√3 var',
        explanation: '無効電力の計算で W₁ + W₂ を使った誤り。',
      },
    ],
    correctKey: 'A',
    explanation:
      '2電力計法では、三相有効電力 P = W₁ + W₂ = 1200 + 400 = 1600 W、三相無効電力 Q = √3(W₁ − W₂) = √3 × (1200 − 400) = 800√3 ≈ 1386 var。力率 cosφ = P/√(P² + Q²) = 1600/√(1600² + (800√3)²) = 1600/√(2560000+1920000) = 1600/2000 = 0.8。',
    difficulty: 'advanced',
    examYear: '令和3年',
  },
  {
    id: 'dk3_rikigaku_037',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '可動コイル形電流計（ダルソンバル形）の動作原理として正しいものはどれか。',
    choices: [
      {
        key: 'A',
        text: '永久磁石の磁界中に置かれた可動コイルに電流を流したとき生じる電磁力（トルク）によって指針が回転する。',
        explanation: '可動コイル形（ダルソンバル形）は永久磁石の磁界中のコイルに電流が流れることで生じるトルクで動作する。正しい。',
      },
      {
        key: 'B',
        text: '2本の固定コイルと1本の可動コイルの間の電磁力を利用する。',
        explanation: 'これは電流力計形（ダイナモメータ形）の説明。',
      },
      {
        key: 'C',
        text: '電流によって熱せられた熱電対の起電力を利用する。',
        explanation: 'これは熱電形計器の説明。',
      },
      {
        key: 'D',
        text: '電流が流れる固定コイルと軟鉄片の間の吸引力を利用する。',
        explanation: 'これは可動鉄片形計器の説明。',
      },
    ],
    correctKey: 'A',
    explanation:
      '可動コイル形（ダルソンバル形）電流計は、永久磁石が作る一定磁界の中に可動コイルを配置し、測定電流をコイルに流すことで生じる電磁力（F = BIL）によってコイルを回転させ、スプリングのバネ力と釣り合う角度で指針を停止させる。直流専用であり、感度が高く消費電力が小さい特徴がある。',
    difficulty: 'basic',
    examYear: '令和4年',
  },
  {
    id: 'dk3_rikigaku_038',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '交流回路における電力を測定するための計器として最も適切なものはどれか。',
    choices: [
      {
        key: 'A',
        text: '可動コイル形（ダルソンバル形）計器',
        explanation: '可動コイル形は直流専用。交流では正味のトルクが生じず正確な電力測定はできない。',
      },
      {
        key: 'B',
        text: '電流力計形（ダイナモメータ形）計器',
        explanation:
          '固定コイルと可動コイルの電流の積に比例するトルクが生じるため、電力（V×I×cosφ）の測定が可能。交直両用の電力計として使われる。正しい。',
      },
      {
        key: 'C',
        text: '可動鉄片形計器',
        explanation: '交流の電流実効値測定に適するが、力率を含む電力測定には適さない。',
      },
      {
        key: 'D',
        text: '静電形計器',
        explanation: '高電圧の電圧測定に使用されるが、電力計としては用いない。',
      },
    ],
    correctKey: 'B',
    explanation:
      '電流力計形（ダイナモメータ形）計器は固定コイル（電流コイル）と可動コイル（電圧コイル）の電流の積に比例するトルクを利用するため、有効電力（P = VIcosφ）を直接測定できる。三相電力計や精密測定にも用いられ、交直両用である。',
    difficulty: 'standard',
    examYear: '令和5年',
  },
  {
    id: 'dk3_rikigaku_039',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      'オシロスコープを用いて直接測定できないものはどれか。',
    choices: [
      {
        key: 'A',
        text: '電圧波形の形状と振幅',
        explanation: 'オシロスコープは電圧波形を時間軸で表示するため、波形形状と振幅の観測は基本機能。',
      },
      {
        key: 'B',
        text: '信号の周波数（周期から算出）',
        explanation: '周期 T が測定できれば f = 1/T で周波数も求められる。',
      },
      {
        key: 'C',
        text: '2信号間の位相差',
        explanation: 'デュアルトレースのオシロスコープを用いれば2信号を同時表示し位相差を観測できる。',
      },
      {
        key: 'D',
        text: '電力消費量（電力量 [Wh]）',
        explanation: 'オシロスコープは電圧波形の観測装置。電力量（エネルギーの積算）の測定には積算電力計が必要。正しい（直接測定できないもの）。',
      },
    ],
    correctKey: 'D',
    explanation:
      'オシロスコープは電圧の時間変化を画面に表示する計測器であり、電圧波形・周波数・位相差・パルス幅などを観測できる。しかし電力消費量（電力量 [Wh]）を直接測定・積算する機能はない。電力量の測定には積算電力計（電力量計）を用いる。',
    difficulty: 'standard',
    examYear: '令和4年',
  },
  {
    id: 'dk3_rikigaku_040',
    subject: 'rikigaku',
    subjectName: '理論',
    question:
      '抵抗 R = 4 Ω、誘導リアクタンス XL = 3 Ω の RL 直列回路に実効値 V = 100 V の交流電圧を印加した。電流の実効値 I [A]、有効電力 P [W]、無効電力 Q [var] の組合せとして正しいものはどれか。',
    choices: [
      {
        key: 'A',
        text: 'I = 20 A、P = 1600 W、Q = 1200 var',
        explanation:
          'Z = √(16+9) = 5 Ω、I = 100/5 = 20 A、P = I²R = 1600 W、Q = I²XL = 1200 var。正しい。',
      },
      {
        key: 'B',
        text: 'I ≈ 14.3 A、P ≈ 817 W、Q ≈ 613 var',
        explanation: 'Z = R + XL = 7 Ω と単純加算した誤り。インピーダンスはベクトル和で求める。',
      },
      {
        key: 'C',
        text: 'I = 20 A、P = 2000 W、Q = 1500 var',
        explanation: 'P = VI = 2000 W と力率を無視して計算した誤り。',
      },
      {
        key: 'D',
        text: 'I = 25 A、P = 2500 W、Q = 1875 var',
        explanation: 'Z を誤って計算した場合（例：Z = R または Z = XL のみで計算）のミス。',
      },
    ],
    correctKey: 'A',
    explanation:
      'インピーダンス Z = √(R² + XL²) = √(4² + 3²) = √25 = 5 Ω。電流 I = V/Z = 100/5 = 20 A。有効電力 P = I²R = 400×4 = 1600 W（または P = VIcosφ、cosφ = R/Z = 0.8、P = 100×20×0.8 = 1600 W）。無効電力 Q = I²XL = 400×3 = 1200 var。皮相電力 S = VI = 2000 VA、S² = P² + Q² = 1600² + 1200² = 4000000 = 2000² で確認できる。',
    difficulty: 'advanced',
    examYear: '令和5年',
  },
];
