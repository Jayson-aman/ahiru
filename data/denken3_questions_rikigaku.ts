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
      'クーロンの法則 F = kQ₁Q₂/r² に代入する。F = 9×10⁹ × (3×10⁻⁶ × 6×10⁻⁶) / (3×10⁻²)² = 9×10⁹ × 18×10⁻¹² / 9×10⁻⁴ = 9×10⁹ × 2×10⁻⁸ = 180 N。\n【図解】クーロン力の計算\n　Q₁=3μC ●←──r=3cm──→● Q₂=6μC\n　F＝kQ₁Q₂/r²\n　＝9×10⁹×(3×10⁻⁶×6×10⁻⁶)÷(3×10⁻²)²\n　＝9×10⁹×18×10⁻¹²÷9×10⁻⁴＝180N\n　※指数計算：分子10⁹⁻¹²=10⁻³、÷10⁻⁴で10¹',
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
      'クーロンの法則を SI 単位系で書くと F = Q₁Q₂/(4πε₀r²) となる。比例定数 k はこの係数から k = 1/(4πε₀) と定義される。真空の誘電率 ε₀ ≈ 8.85×10⁻¹² F/m を用いると k ≈ 9×10⁹ N·m²/C² となる。\n【図解】kとε₀の関係\n　F＝Q₁Q₂/(4πε₀r²)＝kQ₁Q₂/r² と書き直すと、係数の部分がk＝1/(4πε₀)であることがわかる。\n　k＝1/(4πε₀)≈9×10⁹\n　（ε₀≈8.85×10⁻¹² F/m を代入して確認できる）',
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
      '点電荷による電位は V = kQ/r で求められる。V = 9×10⁹ × 2×10⁻⁶ / 0.1 = 9×10⁹ × 2×10⁻⁵ = 18×10⁴ = 1.8×10⁵ V。\n【図解】点電荷の電位（スカラー量）\n　Q=2μC ●───r=0.1m───× 測定点\n　V＝kQ/r＝9×10⁹×2×10⁻⁶÷0.1＝1.8×10⁵V\n　比較：電界E＝kQ/r²（rの2乗）／電位V＝kQ/r（rの1乗）',
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
      '電界 E [V/m] 中の電荷 q [C] に働く力は F = qE [N]（電界方向）。電界と逆方向に d 移動するとき力と変位のなす角が 180° となり、仕事 W = qE × d × cos180° = −qEd [J]。電位の観点では、電界と逆方向に移動すると電位が上昇し、電界が行う仕事は負になる。\n【図解】電界に逆らう移動と仕事\n　電界E→→→　力F=qE（右向き）\n　＋q ←──d移動（左=逆方向）\n　電界のする仕事W＝Fdcos180°＝−qEd（負！）\n　（外力のする仕事は＋qEd、電位は上がる）',
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
      '平行平板間の電界は一様であり、電位差（電圧）V と極板間距離 d の比 E = V/d [V/m] で表される。「単位距離あたりの電位差」を意味し、d が小さいほど電界は強くなる。\n【図解】平行平板の電界\n　＋極板 ═══════ 電位V\n　　　↓E＝V/d（一様電界）　d\n　−極板 ═══════ 電位0\n　「1mあたりの電位差」＝電界の強さ',
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
      'コンデンサを直列接続したときの合成静電容量は 1/C = 1/C₁ + 1/C₂。1/C = 1/4 + 1/6 = 3/12 + 2/12 = 5/12 より C = 12/5 = 2.4 μF。\n【図解】コンデンサ直列合成\n　C₁=4μFとC₂=6μFを直列接続する。\n　1/C＝1/4＋1/6＝5/12 → C＝2.4μF\n　※「積/和」：C＝4×6/(4+6)＝2.4μF（2個の時だけ）\n　直列＝必ず小さい方より小さくなる',
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
      '平行平板コンデンサの静電容量は C = εrε₀S/d [F]。極板面積 S が大きいほど、極板間距離 d が小さいほど静電容量は大きくなる。誘電体を挟むと比誘電率 εr 倍だけ容量が増加する。\n【図解】平行平板コンデンサの容量\n　極板面積S ═══════\n　　　　　[εr の誘電体] 　d\n　　　　　═══════\n　C＝εrε₀S/d → S大・d小・εr大 ⇒ C大\n　（覚え方：広く・近く・詰めれば たくさん貯まる）',
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
      'コンデンサに蓄えられる静電エネルギーは W = CV²/2。W = (10×10⁻⁶ × 100²) / 2 = (10⁻⁵ × 10⁴) / 2 = 10⁻¹ / 2 = 0.05 J。Q = CV = 10⁻³ C として W = QV/2 = 10⁻³×100/2 = 0.05 J でも確認できる。\n【図解】静電エネルギーの3公式\n　W＝(1/2)CV²＝(1/2)QV＝Q²/(2C)\n　本問：W＝0.5×10×10⁻⁶×100²\n　　　　＝0.5×10⁻⁵×10⁴＝0.05J\n　（Q＝CV＝10⁻³C からでも同じ結果）',
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
      '回路全体の抵抗は R + r = 10 + 2 = 12 Ω。電流 I = E/(R+r) = 24/12 = 2 A。端子電圧は V = E − Ir = 24 − 2×2 = 20 V（または V = IR = 2×10 = 20 V）。\n【図解】内部抵抗のある電池回路\n　起電力E=24Vの電池に内部抵抗r=2Ωと外部抵抗R=10Ωが直列に接続された回路。\n　I＝E/(R＋r)＝24/12＝2A\n　端子電圧V＝E−Ir＝24−4＝20V（内部で2V損失）',
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
      '並列回路では各抵抗に同じ電圧 V = 100 V が加わる。P₁ = V²/R₁ = 10000/20 = 500 W、P₂ = V²/R₂ = 10000/30 ≈ 333 W。全消費電力 P = 500 + 333 ≈ 833 W。合成抵抗 R = R₁R₂/(R₁+R₂) = 600/50 = 12 Ω を使って P = V²/R = 10000/12 ≈ 833 W でも同じ結果が得られる。\n【図解】並列回路の電力\n　R₁=20ΩとR₂=30Ωを100Vの電源に並列接続する（両方に100Vが加わる）。\n　P₁＝V²/R₁＝500W、P₂＝V²/R₂≈333W\n　合計P≈833W（並列：抵抗が小さい方が多く消費）',
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
      'キルヒホッフの第1法則（電流則・KCL）：任意の節点において、その節点に流れ込む電流の総和と流れ出る電流の総和は等しい（ΣI = 0）。第2法則（電圧則・KVL）：任意の閉回路において、起電力の代数和は電圧降下の代数和に等しい（ΣE = ΣIR）。\n【図解】キルヒホッフの法則\n　第1法則(KCL)：節点で ΣI入＝ΣI出\n　　→I₁→●→I₃　（I₁+I₂＝I₃）\n　　　　↑I₂\n　第2法則(KVL)：閉回路で ΣE＝ΣIR\n　（電流則=節点・電圧則=ループ、と対応付ける）',
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
      'ホイートストンブリッジが平衡（検流計の電流がゼロ）のとき、向かい合う辺の抵抗の積が等しい：PX = QR（または P/Q = R/X）。この性質を利用して未知抵抗 X = QR/P として求められる。精密な抵抗測定に使用される。\n【図解】ホイートストンブリッジ平衡\n　電源にPとQの直列枝、RとXの直列枝を並列に接続し、両枝の中点間に検流計Gを接続したブリッジ回路。\n　平衡（G=0）⇔ 向かい合う積が等しい PX＝QR\n　→ 未知抵抗X＝QR/P',
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
      'RL 直列回路のインピーダンスは Z = √(R² + XL²) = √(6² + 8²) = √(36 + 64) = √100 = 10 Ω。R と XL は 90° の位相差があるため、ベクトル的な合成（三平方の定理）を用いる。\n【図解】RL直列のインピーダンス三角形\n　R=6ΩとXL=8Ωを直角の2辺、Z=10Ωを斜辺とする直角三角形（インピーダンス三角形）で表せる。\n　Z＝√(6²＋8²)＝10Ω（3:4:5の直角三角形×2）',
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
      'RLC 直列回路の共振条件は XL = XC（ωL = 1/ωC）。このとき誘導性リアクタンスと容量性リアクタンスが打ち消し合い、インピーダンス Z = R（最小）、電流 I = V/R（最大）、電圧と電流の位相差がゼロ（力率 cosφ = 1）になる。\n【図解】直列共振（XL＝XC）\n　XL＝XCとなり互いに打ち消し合うため、Z＝R（最小）となる。\n　電流I＝V/R（最大）\n　力率cosφ＝1（VとI同位相）\n　f₀＝1/(2π√LC)：共振周波数',
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
      '直列共振角周波数は ω₀ = 1/√(LC)。LC = 0.1 × 100×10⁻⁶ = 10⁻⁵ H·F。ω₀ = 1/√(10⁻⁵) = 10^(5/2) = 100√10 ≈ 316 rad/s。共振周波数 f₀ = ω₀/(2π) ≈ 50.3 Hz。\n【図解】共振角周波数の計算\n　ω₀＝1/√(LC)\n　LC＝0.1×100×10⁻⁶＝10⁻⁵\n　ω₀＝1/√10⁻⁵＝1/(10⁻²·√10⁻¹)…整理すると\n　＝10²·√10≈316rad/s（f₀＝ω₀/2π≈50.3Hz）',
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
      'インピーダンス Z = √(R² + XC²) = √(64 + 36) = √100 = 10 Ω。力率 cosφ = R/Z = 8/10 = 0.8。この回路は容量性（XC が存在）なので、電流は電圧より位相が進む（進み力率）。\n【図解】RC直列の力率\n　R=8ΩとXC=6Ωを直列接続する。\n　Z＝√(8²＋6²)＝10Ω\n　cosφ＝R/Z＝0.8（進み力率：容量性は電流が進む）\n　覚え方：C＝Current先行（ICE）、L＝電流遅れ（ELI）',
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
      '皮相電力 S、有効電力 P、無効電力 Q の関係は S² = P² + Q²（電力の三角形）。Q = √(S² − P²) = √(1000² − 600²) = √(1000000 − 360000) = √640000 = 800 var。\n【図解】電力の三角形\n　P=600WとQ（無効電力）を直角の2辺、S=1000VAを斜辺とする直角三角形（電力の三角形）で表せる。\n　Q＝√(S²−P²)＝√(10⁶−36×10⁴)＝800var\n　（600:800:1000＝3:4:5）',
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
      'Y 結線の三相平衡回路では線間電圧は相電圧の √3 倍となる。VL = √3 × Vp = 1.732 × 100 ≈ 173 V。一方、線電流は相電流に等しい（IL = Ip）。実際の系統では相電圧 6600/√3 ≈ 3810 V の Y 結線で線間電圧 6600 V などが用いられる。\n【図解】Y結線の電圧関係\n　中性点Nから各相端子a・b・cへ相電圧Vp=100Vが伸び、端子間（例えばb-c間）の線間電圧はVL＝√3×Vp≈173Vとなる。\n　Y：VL＝√3Vp、IL＝Ip（電圧が√3倍）\n　Δ：VL＝Vp、IL＝√3Ip（電流が√3倍）',
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
      'Y 結線の相電圧 Vp = VL/√3 = 200/√3 V。一相の消費電力 P₁ = Vp²/R = (200/√3)²/10 = 40000/(3×10) ≈ 1333 W。三相合計 P = 3P₁ = 4000 W。または三相電力の公式 P = √3 × VL × IL × cosφ で、IL = Vp/R = (200/√3)/10 を代入すると P = √3 × 200 × 200/(10√3) × 1 = 4000 W。\n【図解】三相電力の計算（Y負荷）\n　VL=200V → Vp＝200/√3\n　1相：P₁＝Vp²/R＝(200²/3)/10≈1333W\n　3相：P＝3P₁＝4000W\n　検算：P＝√3VLILcosφ でも同じ（IL＝Vp/R≈11.55A）',
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
      '平衡三相回路の Δ-Y インピーダンス変換では ZY = ZΔ/3（逆に Y→Δ では ZΔ = 3ZY）。たとえば各辺 ZΔ = 30 Ω の Δ 負荷は、各相 ZY = 10 Ω の Y 負荷と等価になる。\n【図解】Δ→Y変換\n　Δ（各辺ZΔ）→ Y（各相ZY）\n　ZY＝ZΔ/3　（Y→ΔはZΔ＝3ZY）\n　例：ZΔ=30Ω ⇒ ZY=10Ω\n　（平衡三相のときだけ使える簡易式）',
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
      'ファラデーの電磁誘導の法則より |e| = N × |ΔΦ/Δt| = 500 × (4×10⁻³ / 0.02) = 500 × 0.2 = 100 V。負号（レンツの法則）は誘導起電力が磁束変化を妨げる方向に生じることを示す。\n【図解】ファラデーの法則\n　磁束Φ：4×10⁻³Wb変化／0.02s\n　コイルN=500巻 ⇒ ∣e∣＝N·ΔΦ/Δt\n　＝500×(4×10⁻³/0.02)＝500×0.2＝100V\n　（レンツの法則：変化を妨げる向きに発生）',
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
      '自己誘導起電力は e = −L(di/dt)。i = 4sin(100t) より di/dt = 4×100×cos(100t) = 400cos(100t)。よって e = −0.5 × 400cos(100t) = −200cos(100t) V。負号はレンツの法則を反映している。\n【図解】自己誘導起電力の微分計算\n　i＝4sin(100t)\n　di/dt＝4×100cos(100t)＝400cos(100t)\n　e＝−L·di/dt＝−0.5×400cos(100t)\n　＝−200cos(100t) V\n　（sinの微分→cos、係数100が前に出る）',
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
      '結合係数 k = M/√(L₁L₂) = 3/√(2×8) = 3/√16 = 3/4 = 0.75。k = 1 が理想的な完全結合であり、0 ≤ k ≤ 1 の範囲をとる。k が大きいほど2つのコイルの磁気的結合が密であることを示す。\n【図解】結合係数\n　k＝M/√(L₁L₂)＝3/√(2×8)＝3/4＝0.75\n　L₁=2H ～M=3H～ L₂=8H\n　k=1：完全結合（漏れ磁束ゼロ）\n　0≤k≤1（Mの最大値は√(L₁L₂)＝4H）',
    difficulty: 'advanced',
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
      '強磁性体（鉄、ニッケル、コバルト等）の比透磁率 μr は 1 より非常に大きく（数百から数万）、外部磁界を大幅に強める特性がある。μr < 1 になるのは反磁性体（μr がわずかに 1 未満）の場合。したがって D の説明が誤り。\n【図解】磁性体の分類（比透磁率μr）\n　強磁性体：μr≫1（鉄・ニッケル・コバルト）\n　常磁性体：μr＞1（わずかに大）\n　反磁性体：μr＜1（わずかに小：銅・水）\n　→「強磁性体のμr<1」という記述は誤り',
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
      'RC 回路の時定数 τ = RC = 1×10³ Ω × 10×10⁻⁶ F = 10⁻² s = 10 ms。時定数は充電開始から定常状態の約 63.2%（1 − 1/e ≈ 0.632）に達するまでの時間を表す。5τ 後にほぼ定常状態（99.3%）に達する。\n【図解】RC回路の時定数\n　τ＝RC＝10³×10×10⁻⁶＝10⁻²s＝10ms\n　充電曲線は0%から立ち上がり、時定数τの時点で63.2%に達し、その後100%（定常状態）に漸近する。\n　5τで約99.3%（ほぼ定常）',
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
      'RL 直列回路に直流電圧 V を印加すると電流は i(t) = (V/R)(1 − e^{−t/τ})。時定数 τ = L/R = 0.5/50 = 0.01 s、定常電流 I∞ = V/R = 100/50 = 2 A。よって i(t) = 2(1 − e^{−t/0.01}) = 2(1 − e^{−100t}) A。\n【図解】RL回路の過渡現象\n　i(t)＝(V/R)(1−e^(−t/τ))、τ＝L/R\n　τ＝0.5/50＝0.01s、I∞＝100/50＝2A\n　電流は0Aから始まり、時間とともに指数関数的に増加して最終値2Aに漸近する（コイルは電流の急変を嫌うため）。',
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
      'RC 回路の放電においてコンデンサ電圧は vc(t) = V₀ × e^{−t/RC}。時定数 τ = RC の経過後に初期値の 1/e（≈36.8%）まで減少する。充電の場合は vc(t) = V∞(1 − e^{−t/RC}) となる。\n【図解】RC放電曲線\n　vc(t)＝V₀·e^(−t/RC)\n　電圧はV₀から始まり時間とともに指数関数的に減少し、時定数τの時点で初期値の36.8%（1/e）となり0に近づく。\n　充電は(1−e^(−t/τ))、放電はe^(−t/τ)と対で覚える',
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
      'p 形半導体の多数キャリアは正孔（ホール）、n 形半導体の多数キャリアは電子である（選択肢 C は逆に述べており誤り）。p 形は 3 価の不純物（ボロン等）をドープして正孔を多数形成し、n 形は 5 価の不純物（リン等）をドープして電子を多数形成する。\n【図解】半導体のキャリア\n　p形：3価不純物（ボロン）→ 多数キャリア＝正孔(+)\n　n形：5価不純物（リン）→ 多数キャリア＝電子(−)\n　（pはpositive正孔、nはnegative電子と対応）\n　pn接合＝ダイオード：p→n方向が順方向',
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
      'エミッタ接地のバイポーラトランジスタの直流電流増幅率は β（または hFE）= IC/IB で定義される。ベース接地の電流増幅率 α = IC/IE との関係は β = α/(1−α)、α = β/(1+β)。通常 β は数十〜数百の値をとり、スイッチング・増幅回路に利用される。\n【図解】トランジスタの電流増幅率\n　　IC（コレクタ）\n　IB→[TR]　β＝IC/IB（エミッタ接地・数十〜数百）\n　　IE（エミッタ）＝IB＋IC\n　α＝IC/IE（ベース接地・1弱）\n　変換：β＝α/(1−α)',
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
      'ツェナーダイオードは逆方向にツェナー電圧 VZ 以上の電圧が加わると急激に電流が流れ始め、端子電圧を VZ にほぼ一定に保つ特性をもつ。定電圧回路・過電圧保護回路などに広く使用される。電流制限抵抗と組み合わせて使うことが多い。\n【図解】ツェナーダイオードの使い方\n　入力に電流制限抵抗Rを直列接続し、その先の出力端子とGND間にツェナーダイオードZDを逆接続する（出力電圧はVZに一定に保たれる）。\n　逆方向にVZ以上→急に導通→電圧をVZに固定\n　用途：定電圧回路・過電圧保護',
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
      '半波整流回路の出力平均電圧は Vave = Vm/π（Vm は最大値）。実効値 V = 100 V より最大値 Vm = V√2 = 100√2 ≈ 141.4 V。平均電圧 = 141.4/π ≈ 45.0 V。全波整流では 2Vm/π ≈ 90.0 V となる。\n【図解】半波整流の平均値\n　入力：∿∿（実効値100V→最大値Vm=100√2≈141.4V）\n　出力：∩＿∩＿（正の半分だけ）\n　平均Vave＝Vm/π≈141.4/3.14≈45V\n　全波なら2Vm/π≈90V（2倍）',
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
      'n チャネル JFET では VGS = 0 のとき最大ドレイン電流（IDSS）が流れる。VGS を負方向に増加させると p-n 接合の空乏層がチャネルに広がり、実効的なチャネル幅が狭くなって ID が減少する。VGS がピンチオフ電圧 VP に達すると ID ≈ 0（ピンチオフ状態）となる。\n【図解】nチャネルJFETの動作\n　VGS=0：チャネル全開 → ID最大（IDSS）\n　VGS負に増加：空乏層拡大→チャネル狭まる→ID減少\n　VGS=VP（ピンチオフ）：ID≈0\n　（ゲート電圧で水路の幅を絞るイメージ）',
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
      '測定範囲を n 倍に拡大するための分流器（シャント）抵抗は Rs = r/(n−1)。n = 10、r = 100 Ω より Rs = 100/(10−1) = 100/9 ≈ 11.1 Ω。並列接続なので電流計と分流器の端子電圧は等しく、分流器には電流計の (n−1) 倍の電流が流れる。\n【図解】分流器（電流計の測定範囲拡大）\n　電流計（内部抵抗r=100Ω）と分流器（抵抗Rs）を並列に接続する。\n　n倍に拡大：Rs＝r/(n−1)＝100/9≈11.1Ω\n　（電流計に1/n、分流器に(n−1)/nの電流）',
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
      '電圧計の測定範囲を n 倍に拡大するための倍率器（直列抵抗）は Rm = r(n−1)。n = 5、r = 10 kΩ より Rm = 10×(5−1) = 40 kΩ。直列接続なので倍率器と電圧計に流れる電流は等しく、全体の電圧は n 倍（= 5倍）まで測定可能になる。\n【図解】倍率器（電圧計の測定範囲拡大)\n　○──倍率器Rm──電圧計r=10kΩ──○（直列)\n　n倍に拡大：Rm＝r(n−1)＝10k×4＝40kΩ\n　分流器＝並列・r/(n−1)／倍率器＝直列・r(n−1)\n　（対にして覚える）',
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
      '電力 P = VI cosφ の関係より、力率 cosφ = P/(VI) = 800/(200×5) = 800/1000 = 0.8。皮相電力 S = VI = 1000 VA に対して有効電力 P = 800 W なので力率 = 0.8、無効電力 Q = √(S²−P²) = 600 var。\n【図解】電力計の読みと力率\n　P＝VIcosφ より\n　cosφ＝P/(VI)＝800/(200×5)＝0.8\n　S＝VI＝1000VA（皮相）\n　P＝800W（有効）→ Q＝600var（3:4:5）',
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
      '2電力計法では、三相有効電力 P = W₁ + W₂ = 1200 + 400 = 1600 W、三相無効電力 Q = √3(W₁ − W₂) = √3 × (1200 − 400) = 800√3 ≈ 1386 var。力率 cosφ = P/√(P² + Q²) = 1600/√(1600² + (800√3)²) = 1600/√(2560000+1920000) = 1600/2000 = 0.8。\n【図解】2電力計法\n　P＝W₁＋W₂＝1200＋400＝1600W\n　Q＝√3(W₁−W₂)＝√3×800≈1386var\n　（W₂が負を指せば力率0.5未満）\n　2つの単相電力計で三相電力が測れる便利な方法',
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
      '可動コイル形（ダルソンバル形）電流計は、永久磁石が作る一定磁界の中に可動コイルを配置し、測定電流をコイルに流すことで生じる電磁力（F = BIL）によってコイルを回転させ、スプリングのバネ力と釣り合う角度で指針を停止させる。直流専用であり、感度が高く消費電力が小さい特徴がある。\n【図解】可動コイル形計器の原理\n　N極 →[可動コイル]← S極（永久磁石の一定磁界）\n　電流I→電磁力F＝BIL→回転トルク\n　⇔ばねの制御トルクと釣合った角度で静止\n　直流専用・高感度・目盛りは等間隔（平等目盛）',
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
      '電流力計形（ダイナモメータ形）計器は固定コイル（電流コイル）と可動コイル（電圧コイル）の電流の積に比例するトルクを利用するため、有効電力（P = VIcosφ）を直接測定できる。三相電力計や精密測定にも用いられ、交直両用である。\n【図解】電流力計形電力計の構成\n　固定コイル（電流I）×可動コイル（電圧V）\n　→ トルク∝V×I×cosφ＝有効電力P\n　交直両用・三相電力計にも使用\n　（電圧と電流の「積」を機械的に作る計器）',
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
      'オシロスコープは電圧の時間変化を画面に表示する計測器であり、電圧波形・周波数・位相差・パルス幅などを観測できる。しかし電力消費量（電力量 [Wh]）を直接測定・積算する機能はない。電力量の測定には積算電力計（電力量計）を用いる。\n【図解】オシロスコープで測れるもの\n　○：電圧波形・振幅・周期/周波数・位相差・パルス幅\n　×：電力量[Wh]（積算機能がない）\n　電力量→積算電力計（電力量計）の仕事',
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
      'インピーダンス Z = √(R² + XL²) = √(4² + 3²) = √25 = 5 Ω。電流 I = V/Z = 100/5 = 20 A。有効電力 P = I²R = 400×4 = 1600 W（または P = VIcosφ、cosφ = R/Z = 0.8、P = 100×20×0.8 = 1600 W）。無効電力 Q = I²XL = 400×3 = 1200 var。皮相電力 S = VI = 2000 VA、S² = P² + Q² = 1600² + 1200² = 4000000 = 2000² で確認できる。\n【図解】RL直列回路の総合計算\n　Z＝√(4²＋3²)＝5Ω（3:4:5）\n　I＝V/Z＝100/5＝20A\n　P＝I²R＝400×4＝1600W\n　Q＝I²XL＝400×3＝1200var\n　S＝VI＝2000VA（√(1600²+1200²)=2000で検算）',
    difficulty: 'advanced',
    examYear: '令和5年',
  },

  // ── 追加問題（064〜103問目）電磁気・回路理論・電子理論・計測の拡充 ──
  {
    id: 'dk3_rikigaku_064', subject: 'rikigaku', subjectName: '理論',
    question: '真空中に置かれた点電荷 Q = 5×10⁻⁶ C を中心とする半径 r = 0.2 m の球面を考える。この球面上における電束密度 D [C/m²] として最も近いものはどれか。',
    choices: [
      { key: 'A', text: '約 1.0×10⁻⁵ C/m²', explanation: '正しい。D＝Q/(4πr²)＝5×10⁻⁶/(4π×0.04)≈9.95×10⁻⁶≈1.0×10⁻⁵C/m²。球対称に均等分布する。' },
      { key: 'B', text: '約 1.0×10⁻⁴ C/m²', explanation: '誤り。桁を一つ誤った値。r²＝0.04を正しく計算する必要がある。' },
      { key: 'C', text: '約 4.0×10⁻⁵ C/m²', explanation: '誤り。4πを掛け忘れる、あるいはrをそのまま使うなどの誤りで生じる値。' },
      { key: 'D', text: '約 2.5×10⁻⁵ C/m²', explanation: '誤り。r²でなくrで割った場合などに現れる誤答。' },
    ],
    correctKey: 'A',
    explanation: '電束密度は単位面積を貫く電気力線（電束）の量。\n【図解】球面上の電束密度\n　Q=5μC ●（球の中心）\n　半径r=0.2mの球面全体にQが貫く\n　D＝Q/(4πr²)＝5×10⁻⁶/(4π×0.2²)≈9.95×10⁻⁶C/m²\n　※D＝ε₀E の関係もあり、E＝D/ε₀で電界も求まる',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_065', subject: 'rikigaku', subjectName: '理論',
    question: '真空中の一様電界 E = 2×10⁵ V/m の空間に蓄えられる静電エネルギーの体積密度 w [J/m³] として最も近いものはどれか。ただし真空の誘電率 ε₀ = 8.85×10⁻¹² F/m とする。',
    choices: [
      { key: 'A', text: '約 0.177 J/m³', explanation: '正しい。w＝½ε₀E²＝0.5×8.85×10⁻¹²×(2×10⁵)²＝0.5×8.85×10⁻¹²×4×10¹⁰≈0.177J/m³。' },
      { key: 'B', text: '約 1.77 J/m³', explanation: '誤り。桁を一つ誤った値。E²の指数計算を丁寧に行う必要がある。' },
      { key: 'C', text: '約 0.0177 J/m³', explanation: '誤り。½を掛け忘れる、あるいは桁を誤った場合の値。' },
      { key: 'D', text: '約 8.85 J/m³', explanation: '誤り。ε₀の値をそのまま答えた誤り。E²の項が反映されていない。' },
    ],
    correctKey: 'A',
    explanation: '電界のエネルギー密度は静電容量のエネルギー(½CV²)を単位体積あたりに直したもの。\n【図解】電界のエネルギー密度\n　w＝½ε₀E²（コンデンサの½CV²と対応）\n　＝0.5×8.85×10⁻¹²×(2×10⁵)²\n　＝0.5×8.85×10⁻¹²×4×10¹⁰≈0.177J/m³\n　★空間そのものにエネルギーが蓄えられている',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_066', subject: 'rikigaku', subjectName: '理論',
    question: '静電容量 C₁ = 4 μF と C₂ = 4 μF を並列接続し、さらにこれに C₃ = 4 μF を直列に接続した。この合成静電容量 [μF] として正しいものはどれか。',
    choices: [
      { key: 'A', text: '約 2.67 μF', explanation: '正しい。並列部Cp＝C₁＋C₂＝8μF。直列合成C＝Cp×C₃/(Cp＋C₃)＝8×4/12＝2.67μF。' },
      { key: 'B', text: '12 μF', explanation: '誤り。全部を単純に加算した値。直列部分の合成方法が反映されていない。' },
      { key: 'C', text: '4 μF', explanation: '誤り。並列部の合成を忘れてC₃のみを答えた誤り。' },
      { key: 'D', text: '1.33 μF', explanation: '誤り。並列部の合成を8μFではなく4μFのまま直列計算した場合などに生じる値。' },
    ],
    correctKey: 'A',
    explanation: '複合回路は「まず並列、次に直列」の順で段階的に合成する。\n【図解】並列→直列の合成\n　まずC₁=4μFとC₂=4μFを並列合成しCp=8μFとする。\n　次にCp=8μFとC₃=4μFを直列接続する。\n　C＝8×4/(8+4)＝32/12≈2.67μF ✓\n　（部分ごとに合成してから全体を求める）',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_067', subject: 'rikigaku', subjectName: '理論',
    question: '起電力 E = 30 V、内部抵抗 R₁ = 10 Ω の電源に、抵抗 R₂ = 20 Ω を接続した回路がある。R₂ の両端を出力端子とみなしたときのテブナンの定理による等価電圧（開放電圧）Vth [V] はいくらか。',
    choices: [
      { key: 'A', text: '30 V', explanation: '誤り。起電力そのものであり、内部抵抗による電圧降下を考慮していない。' },
      { key: 'B', text: '10 V', explanation: '誤り。R₁とR₂を取り違えた分圧計算の結果。' },
      { key: 'C', text: '15 V', explanation: '誤り。単純平均をとった値であり、正しい分圧比になっていない。' },
      { key: 'D', text: '20 V', explanation: '正しい。開放電圧はR₁とR₂の直列回路の分圧。Vth＝E×R₂/(R₁+R₂)＝30×20/30＝20V。' },
    ],
    correctKey: 'D',
    explanation: 'テブナンの定理：任意の複雑な線形回路も等価電圧源＋等価抵抗に置き換えられる。\n【図解】開放電圧の求め方\n　起電力E=30VにR₁=10Ωを直列接続し、その先にR₂=20Ωを接続、出力端子は開放（未接続）とする。\n　開放時は電流がR₁とR₂を貫通\n　Vth＝E×R₂/(R₁+R₂)＝30×20/30＝20V ✓',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_068', subject: 'rikigaku', subjectName: '理論',
    question: '前問と同じ回路（E＝30V、R₁＝10Ω、R₂＝20Ω）において、出力端子を短絡したときの短絡電流（ノートンの定理による等価電流 IN）と、内部等価抵抗 RN の組合せとして正しいものはどれか。',
    choices: [
      { key: 'A', text: 'IN = 1.5 A、RN = 30 Ω', explanation: '誤り。短絡電流はR₁のみを通るためE/R₁で求める必要がある。抵抗値も誤り。' },
      { key: 'B', text: 'IN = 2.0 A、RN = 10 Ω', explanation: '誤り。短絡電流の計算が誤り。R₂は短絡されるため電流に寄与しない。' },
      { key: 'C', text: 'IN = 1.0 A、RN = 6.67 Ω', explanation: '誤り。短絡電流の計算のみ誤り。RNの値（並列抵抗）は正しい形。' },
      { key: 'D', text: 'IN = 3.0 A、RN = 6.67 Ω', explanation: '正しい。端子短絡でR₂の電圧が0となりIN＝E/R₁＝30/10＝3A。RN＝R₁R₂/(R₁+R₂)＝200/30≈6.67Ω。' },
    ],
    correctKey: 'D',
    explanation: 'ノートンの定理：等価電流源（短絡電流）と並列抵抗（テブナン抵抗と同じ値）で表す。\n【図解】短絡電流の求め方\n　起電力E=30VにR₁=10Ωを直列接続し、出力端子を短絡する（R₂=20Ωは短絡により電流経路に関係しない）。\n　IN＝E/R₁＝30/10＝3A ✓\n　RN＝R₁‖R₂＝10×20/30≈6.67Ω（テブナン抵抗と同一）',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_069', subject: 'rikigaku', subjectName: '理論',
    question: '図のように、内部抵抗 r₁ = 2 Ω・起電力 10 V の枝路、内部抵抗 r₂ = 4 Ω・起電力 20 V の枝路、抵抗のみ r₃ = 4 Ω の枝路が1つの節点に並列接続されている。ミルマンの定理により節点の電位 V [V] を求めよ。',
    choices: [
      { key: 'A', text: '10 V', explanation: '正しい。V＝ΣE/r／Σ1/r＝(10/2＋20/4＋0/4)／(1/2＋1/4＋1/4)＝10/1＝10V。' },
      { key: 'B', text: '15 V', explanation: '誤り。分母の計算（各枝のコンダクタンスの和）を誤った値。' },
      { key: 'C', text: '30 V', explanation: '誤り。起電力を単純に加算した値であり、内部抵抗による重み付けがされていない。' },
      { key: 'D', text: '5 V', explanation: '誤り。分子または分母の一部の項を落とした場合の誤答。' },
    ],
    correctKey: 'A',
    explanation: 'ミルマンの定理：複数の電源枝路が1点で並列接続されるときの節点電位を一発で求める。\n【図解】ミルマンの定理\n　V＝(E₁/r₁＋E₂/r₂＋E₃/r₃)／(1/r₁＋1/r₂＋1/r₃)\n　＝(10/2＋20/4＋0/4)／(0.5＋0.25＋0.25)\n　＝(5＋5＋0)／1＝10V ✓\n　（各枝を電流源に変換して合成するのと同じ考え方）',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_070', subject: 'rikigaku', subjectName: '理論',
    question: 'Δ（デルタ）結線の3つの抵抗が Rab = 20 Ω、Rbc = 20 Ω、Rca = 40 Ω であるとき、これを等価な Y（スター）結線に変換した場合の a 端子側の抵抗 Ra [Ω] はいくらか。',
    choices: [
      { key: 'A', text: '5 Ω', explanation: '誤り。この値はRbの値（Rab×Rbc/ΣR）に相当する。a端子の抵抗にはRcaを用いる必要がある。' },
      { key: 'B', text: '20 Ω', explanation: '誤り。単純にRabの値をそのまま答えた誤り。変換には3辺すべての和で割る必要がある。' },
      { key: 'C', text: '8 Ω', explanation: '誤り。計算の組合せを誤った値。' },
      { key: 'D', text: '10 Ω', explanation: '正しい。Ra＝Rab×Rca/(Rab+Rbc+Rca)＝20×40/80＝10Ω。a端子に接する2辺（Rab、Rca）の積を全体の和で割る。' },
    ],
    correctKey: 'D',
    explanation: 'Δ→Y変換は「その端子に接する2辺の積 ÷ 3辺の和」で求める。\n【図解】Δ→Y変換\n　　　a\n　Rca=40／　＼Rab=20\n　　c───────b\n　　　Rbc=20\n　Ra＝Rab・Rca/ΣR＝20×40/80＝10Ω ✓\n　（Rb＝20×20/80＝5Ω、Rc＝20×40/80＝10Ω）',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_071', subject: 'rikigaku', subjectName: '理論',
    question: '重ね合わせの理（重畳の理）に関する説明として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '複数の独立電源を含む線形回路では、各電源を単独で動作させたときの応答を重ね合わせる（代数和をとる）ことで、全電源が同時に動作したときの応答が求められる。', explanation: '正しい。線形回路の性質（比例性・加法性）を利用した定理であり、電圧源は短絡・電流源は開放して他電源の影響を1つずつ計算し合成する。' },
      { key: 'B', text: '非線形素子を含む回路であっても常に成立する万能な定理である。', explanation: '誤り。重ね合わせの理は線形回路（抵抗・線形コイル・線形コンデンサ）に限り成立し、ダイオードなど非線形素子を含む回路には適用できない。' },
      { key: 'C', text: '電力についても各電源の電力を単純に加算すれば全体の消費電力が求められる。', explanation: '誤り。電力は電流や電圧の2乗に関係する量であるため、重ね合わせの理をそのまま電力に適用することはできない（電流・電圧を求めてから電力を計算する）。' },
      { key: 'D', text: '電圧源を無視するときはそのまま除去して回路を開放する。', explanation: '誤り。電圧源を無視するときは内部抵抗0とみなして短絡する。開放するのは電流源を無視するときである。' },
    ],
    correctKey: 'A',
    explanation: '重ね合わせの理は線形回路解析の基本定理の一つ。\n【図解】重ね合わせの理の手順\n　①電源E₁のみ動作（E₂は短絡、電流源は開放）→ 応答①\n　②電源E₂のみ動作（E₁は短絡）→ 応答②\n　③全体の応答＝①＋②（代数和）★\n　注意：電力には直接使えない（P∝I²のため）',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_072', subject: 'rikigaku', subjectName: '理論',
    question: '20 ℃ における抵抗値が R₀ = 100 Ω、抵抗温度係数が α = 0.004 /℃ の銅線がある。この銅線の温度が 70 ℃ まで上昇したときの抵抗値 R [Ω] はいくらか。',
    choices: [
      { key: 'A', text: '120 Ω', explanation: '正しい。R＝R₀{1＋α(T−T₀)}＝100×{1＋0.004×50}＝100×1.2＝120Ω。' },
      { key: 'B', text: '140 Ω', explanation: '誤り。温度差の計算またはαの掛け方を誤った値。' },
      { key: 'C', text: '104 Ω', explanation: '誤り。温度差50℃を5℃と誤って計算した場合などに生じる値。' },
      { key: 'D', text: '100.2 Ω', explanation: '誤り。αを1桁小さく扱った場合の誤答。' },
    ],
    correctKey: 'A',
    explanation: '金属導体の抵抗は温度上昇とともに増加する（正の温度係数）。\n【図解】抵抗の温度変化\n　R＝R₀{1＋α(T−T₀)}\n　＝100×{1＋0.004×(70−20)}\n　＝100×{1＋0.2}＝120Ω ✓\n　（半導体は逆に負の温度係数を示すことが多い）',
    difficulty: 'basic',
  },
  {
    id: 'dk3_rikigaku_073', subject: 'rikigaku', subjectName: '理論',
    question: '抵抗 R = 10 Ω と容量性リアクタンス XC = 10 Ω を並列に接続した回路に実効値 V = 100 V の交流電圧を加えた。電源から流れる全電流 I [A] として最も近いものはどれか。',
    choices: [
      { key: 'A', text: '10 A', explanation: '誤り。R側またはC側のみの電流値。並列回路なので両方の枝電流をベクトル合成する必要がある。' },
      { key: 'B', text: '20 A', explanation: '誤り。単純にIRとICを算術加算した値。位相が90°異なるためそのまま加算できない。' },
      { key: 'C', text: '7.1 A', explanation: '誤り。計算の桁や係数を誤った値。' },
      { key: 'D', text: '約 14.1 A', explanation: '正しい。IR＝V/R＝10A、IC＝V/XC＝10A。位相が90°異なるためI＝√(IR²＋IC²)＝√200≈14.1A。' },
    ],
    correctKey: 'D',
    explanation: '並列回路では各枝の電流をベクトル的に合成する（電圧が共通のため）。\n【図解】RC並列回路の電流\n　100Vの電源にR=10ΩとXC=10Ωを並列接続する（IR=10Aは電圧と同相、IC=10Aは電圧より90°進み）。\n　I＝√(IR²＋IC²)＝√(100+100)＝√200≈14.1A\n　（直列は電流共通でベクトル和、並列は電圧共通で電流のベクトル和）',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_074', subject: 'rikigaku', subjectName: '理論',
    question: '抵抗 R = 20 Ω と誘導リアクタンス XL = 20 Ω を並列に接続した回路に実効値 V = 200 V の交流電圧を加えた。電源から流れる全電流 I [A] として最も近いものはどれか。',
    choices: [
      { key: 'A', text: '10 A', explanation: '誤り。R側またはL側のみの電流値。並列回路の全電流はベクトル合成が必要。' },
      { key: 'B', text: '20 A', explanation: '誤り。単純にIRとILを算術加算した値であり、位相差90°を無視している。' },
      { key: 'C', text: '約 14.1 A', explanation: '正しい。IR＝V/R＝10A、IL＝V/XL＝10A。位相が90°異なるためI＝√(IR²＋IL²)＝√200≈14.1A。' },
      { key: 'D', text: '5 A', explanation: '誤り。V/(R+XL)のように直列と混同して単純加算した抵抗で割った値。' },
    ],
    correctKey: 'C',
    explanation: 'RL並列回路も電圧共通・電流のベクトル合成で解く。\n【図解】RL並列回路の電流\n　200Vの電源にR=20ΩとXL=20Ωを並列接続する（IR=10Aは電圧と同相、IL=10Aは電圧より90°遅れ）。\n　I＝√(IR²＋IL²)＝√200≈14.1A\n　力率cosφ＝IR/I＝10/14.1≈0.71（遅れ）',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_075', subject: 'rikigaku', subjectName: '理論',
    question: 'アドミタンス Y に関する説明として、誤っているものはどれか。',
    choices: [
      { key: 'A', text: 'アドミタンスはインピーダンスの逆数であり、Y = 1/Z で定義される。', explanation: '正しい記述。インピーダンスの逆数として定義され、並列回路の計算に便利な量である。' },
      { key: 'B', text: 'アドミタンスの単位はジーメンス [S] である。', explanation: '正しい記述。かつてはモー [℧] とも呼ばれたが、現在はジーメンス [S] が正式なSI単位。' },
      { key: 'C', text: 'アドミタンスの実部はコンダクタンス G、虚部はサセプタンス B と呼ばれる。', explanation: '正しい記述。Y＝G＋jBの形で表され、抵抗回路の逆数がコンダクタンス、リアクタンス回路の逆数に相当する量がサセプタンスである。' },
      { key: 'D', text: '並列回路の合成インピーダンスは各素子のインピーダンスを単純に加算すれば求められる。', explanation: '誤り（本問の正解）。並列回路では各素子のアドミタンスを加算してから逆数をとる（Y＝Y₁＋Y₂＋…）必要があり、インピーダンスをそのまま加算するのは誤り。' },
    ],
    correctKey: 'D',
    explanation: '並列回路はアドミタンスで考えると計算が簡単になる。\n【図解】アドミタンスの活用\n　直列回路：インピーダンスZを加算（Z＝Z₁＋Z₂）\n　並列回路：アドミタンスYを加算（Y＝Y₁＋Y₂）★\n　Y＝1/Z＝G＋jB［S］\n　（並列でインピーダンスを直接足すのは誤り）',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_076', subject: 'rikigaku', subjectName: '理論',
    question: 'RLC 並列回路において並列共振が成立したときの、回路のインピーダンス・電源から流れる電流に関する説明として正しいものはどれか。',
    choices: [
      { key: 'A', text: 'インピーダンスは最小となり、電源電流は最大になる。', explanation: '誤り。これは直列共振の特徴。並列共振ではインピーダンスは最大、電流は最小になる。' },
      { key: 'B', text: 'インピーダンスは R に等しくなり、電流は電圧と同位相になる。', explanation: '誤り。並列共振時のインピーダンスは（理想的には）非常に大きな値となり、単純にRに等しくなるとは限らない。' },
      { key: 'C', text: 'インピーダンスは最大となり、電源電流は最小になる。', explanation: '正しい。並列共振では誘導性電流と容量性電流が互いに打ち消し合い、電源から見た電流（線電流）が最小、インピーダンスが最大となる。' },
      { key: 'D', text: 'インピーダンスも電流も変化しない。', explanation: '誤り。共振点付近ではインピーダンス・電流とも周波数に対して大きく変化する。' },
    ],
    correctKey: 'C',
    explanation: '並列共振（反共振）は直列共振と対照的な特性を示す。\n【図解】直列共振と並列共振の対比\n　直列共振：Z最小＝R、I最大、電流を通しやすい\n　並列共振：Z最大、I（電源電流）最小★\n　（L側とC側の電流が回路内でループし打ち消し合う）\n　共振周波数の式ω₀＝1/√(LC)自体は同じ',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_077', subject: 'rikigaku', subjectName: '理論',
    question: '有効電力 P = 100 kW、力率 cosφ₁ = 0.6（遅れ）の負荷がある。この負荷に電力用コンデンサを並列接続して力率を cosφ₂ = 0.8（遅れ）まで改善したい。必要なコンデンサの無効電力 Qc [kvar] として最も近いものはどれか。',
    choices: [
      { key: 'A', text: '約 20 kvar', explanation: '誤り。改善量の計算が不十分な値。tanθ1とtanθ2の差を正しく求める必要がある。' },
      { key: 'B', text: '約 133 kvar', explanation: '誤り。改善前の無効電力（P×tanθ1）をそのまま答えた値であり、改善後の無効電力を差し引いていない。' },
      { key: 'C', text: '約 58 kvar', explanation: '正しい。tanθ1＝0.6の力率角のtan≈1.333、tanθ2＝0.8の力率角のtan＝0.75。Qc＝P(tanθ1−tanθ2)＝100×(1.333−0.75)≈58.3kvar。' },
      { key: 'D', text: '約 75 kvar', explanation: '誤り。改善後の無効電力（P×tanθ2）をそのまま答えた値。' },
    ],
    correctKey: 'C',
    explanation: '力率改善は「改善前の無効電力−改善後の無効電力」を打ち消すコンデンサ容量を求める。\n【図解】力率改善の計算\n　改善前：Q1＝P・tanθ1＝100×1.333≈133kvar\n　改善後：Q2＝P・tanθ2＝100×0.75＝75kvar\n　Qc＝Q1−Q2≈58kvar★（有効電力Pは不変のまま）\n　cosφ大＝tanθ小、コンデンサは遅れ無効電力を打ち消す',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_078', subject: 'rikigaku', subjectName: '理論',
    question: '単相三線式配電方式に関する記述として、誤っているものはどれか。',
    choices: [
      { key: 'A', text: '2本の電圧線と1本の中性線から構成され、電圧線間からは電圧線・中性線間の2倍の電圧が得られる。', explanation: '正しい記述。100V/200Vが同時に供給でき、電灯負荷には100V、大容量機器には200Vを利用できる。' },
      { key: 'B', text: '両側の負荷が平衡しているとき、中性線に流れる電流は理論上ゼロになる。', explanation: '正しい記述。左右の負荷電流が等しければ中性線には差分の電流が流れず、ゼロとなる。' },
      { key: 'C', text: '負荷が不平衡のとき、中性線には両負荷電流の差に相当する電流が流れる。', explanation: '正しい記述。不平衡分の電流が中性線を流れ、これが大きすぎると電圧不平衡（片側過電圧・片側電圧降下）を招く。' },
      { key: 'D', text: '中性線が万一断線しても、両負荷に加わる電圧は変化せず安全に運転が継続できる。', explanation: '誤り（本問の正解）。中性線が断線すると負荷の大小関係により電圧が不平衡になり、軽負荷側に過電圧、重負荷側に電圧降下が生じ危険である（中性線欠相事故）。' },
    ],
    correctKey: 'D',
    explanation: '単相三線式の中性線欠相事故は重大な感電・機器損傷リスクがある。\n【図解】単相三線式の構成\n　上下2本の100V線の間に中性線Nを接続する単相三線式の構成。\n　平衡時：IN＝I1−I2＝0（差電流のみ）\n　N線断線時：負荷抵抗比で分圧が崩れ、\n　軽負荷側は過電圧、重負荷側は電圧降下★危険',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_079', subject: 'rikigaku', subjectName: '理論',
    question: '同容量の単相変圧器2台を V 結線して三相電源を構成する場合、Δ結線3台に対する出力容量の利用率（V結線の出力容量比）として正しいものはどれか。',
    choices: [
      { key: 'A', text: '約 100 %', explanation: '誤り。V結線は2台のみで運転するため、3台分のΔ結線と同じ利用率にはならない。' },
      { key: 'B', text: '約 50 %', explanation: '誤り。単純に2/4=50%のような直感的な値であり、正しい計算結果ではない。' },
      { key: 'C', text: '約 100/√3 %（約57.7%）', explanation: '誤り。これはΔ結線全体の容量に対するV結線の出力容量比であり、設問の「利用率」（変圧器2台の定格容量に対する実際の出力）とは異なる指標。' },
      { key: 'D', text: '約 86.6 %（√3/2）', explanation: '正しい。V結線の出力容量＝√3×1台の定格容量。2台分の定格容量の和(2倍)に対する利用率は√3/2≈0.866＝86.6%。' },
    ],
    correctKey: 'D',
    explanation: 'V結線には「Δに対する出力比」と「変圧器容量の利用率」の2つの指標があり混同しやすい。\n【図解】V結線の2つの指標\n　①出力容量比（Δ3台との比較）＝1/√3≈57.7%\n　②利用率（2台の定格容量合計との比）＝√3/2≈86.6%★\n　V結線＝変圧器1台故障時の応急運転にも使われる方式',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_080', subject: 'rikigaku', subjectName: '理論',
    question: '三電流計法による単相交流電力の測定において、既知抵抗 R = 10 Ω を負荷と並列に接続し、R に流れる電流 I₁ = 5 A、負荷に流れる電流 I₂ = 8 A、電源から流れる全電流 I₃ = 11 A を測定した。負荷の消費電力 P [W] として正しいものはどれか。',
    choices: [
      { key: 'A', text: '400 W', explanation: '誤り。I₁とI₂の積にRを掛けただけの単純な計算であり、三電流計法の公式ではない。' },
      { key: 'B', text: '320 W', explanation: '誤り。係数（1/2）を掛け忘れた値。' },
      { key: 'C', text: '200 W', explanation: '誤り。I₃²の項の扱いに誤りがある計算結果。' },
      { key: 'D', text: '160 W', explanation: '正しい。P＝R(I₃²−I₁²−I₂²)/2＝10×(121−25−64)/2＝10×32/2＝160W。' },
    ],
    correctKey: 'D',
    explanation: '三電流計法は電力計を使わずに既知抵抗と電流計3台だけで単相電力を測定する方法（三電圧計法の双対）。\n【図解】三電流計法の原理\n　電源Vに既知抵抗R=10Ω（電流I₁）と負荷Z（電流I₂、力率角φ）を並列接続する（電流計は共通線I₃、R側I₁、負荷側I₂の3箇所に設置）。\n　I₃²＝I₁²＋I₂²＋2I₁I₂cosφ（電圧共通のベクトル和）\n　→ I₁I₂cosφ＝(I₃²−I₁²−I₂²)/2\n　P＝V・I₂cosφ＝I₁R・I₂cosφ＝R(I₃²−I₁²−I₂²)/2＝160W ✓',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_081', subject: 'rikigaku', subjectName: '理論',
    question: '磁路の平均長 ℓ = 0.5 m、断面積 A = 2.5×10⁻⁴ m²、比透磁率 μr = 800 の環状鉄心に巻数 N = 400 のコイルを巻き、電流 I = 5 A を流した。鉄心中に生じる磁束 φ [Wb] として最も近いものはどれか。ただし μ₀ = 4π×10⁻⁷ H/m とする。',
    choices: [
      { key: 'A', text: '約 5.0×10⁻⁴ Wb', explanation: '誤り。磁気抵抗の計算またはNIの計算に誤りがある値。' },
      { key: 'B', text: '約 2.0×10⁻³ Wb', explanation: '誤り。桁の取り違えによる誤答。' },
      { key: 'C', text: '約 5.0×10⁻³ Wb', explanation: '誤り。磁気抵抗を過小に見積もった場合の誤答。' },
      { key: 'D', text: '約 1.0×10⁻³ Wb', explanation: '正しい。起磁力F＝NI＝2000A、磁気抵抗Rm＝ℓ/(μ₀μrA)≈1.99×10⁶A/Wb。φ＝F/Rm≈2000/1.99×10⁶≈1.0×10⁻³Wb。' },
    ],
    correctKey: 'D',
    explanation: '磁気回路はオームの法則と同じ形式（F＝φRm）で解ける。\n【図解】磁気回路の計算\n　起磁力F＝NI＝400×5＝2000A（電気回路の起電力に相当）\n　磁気抵抗Rm＝ℓ/(μ₀μrA)（電気回路の抵抗に相当）\n　　＝0.5/(4π×10⁻⁷×800×2.5×10⁻⁴)≈1.99×10⁶A/Wb\n　φ＝F/Rm≈1.0×10⁻³Wb ✓（磁束＝起磁力/磁気抵抗）',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_082', subject: 'rikigaku', subjectName: '理論',
    question: '変圧器や電動機の鉄心で生じるヒステリシス損に関する説明として、正しいものはどれか。',
    choices: [
      { key: 'A', text: 'ヒステリシス損は周波数 f にほぼ比例し、最大磁束密度 Bmax の 1.6 乗程度（スタインメッツの実験式）に比例する。', explanation: '正しい。Ph＝khfBmax^1.6（スタインメッツの実験式、指数は材料により1.6〜2程度）で表され、鉄心材料の磁気履歴特性に起因する損失である。' },
      { key: 'B', text: 'ヒステリシス損は周波数の2乗に比例し、磁束密度には無関係である。', explanation: '誤り。周波数の2乗に比例するのは渦電流損の特徴。ヒステリシス損は周波数にほぼ比例し、磁束密度にも依存する。' },
      { key: 'C', text: 'ヒステリシス損を低減するには鉄心を積層して薄い鋼板を用いる。', explanation: '誤り。鉄心の積層（薄鋼板化）は渦電流損の低減対策である。ヒステリシス損の低減には低ヒステリシス材料（けい素鋼板等）の採用が有効。' },
      { key: 'D', text: 'ヒステリシス損は鉄心の抵抗率が高いほど大きくなる。', explanation: '誤り。抵抗率が高いほど小さくなるのは渦電流損。ヒステリシス損は抵抗率とは直接関係せず、磁区の磁化反転に伴うエネルギー損失である。' },
    ],
    correctKey: 'A',
    explanation: '鉄損＝ヒステリシス損＋渦電流損の内訳を区別して理解する。\n【図解】鉄損の内訳\n　ヒステリシス損：Ph∝f・Bmax^1.6★（材料選定で低減）\n　渦電流損：Pe∝f²・Bmax²・t²（積層鋼板の薄板化で低減）\n　鉄損＝Ph＋Pe（負荷に関係なく発生する固定損）',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_083', subject: 'rikigaku', subjectName: '理論',
    question: '変圧器の鉄心に生じる渦電流損を低減するための最も効果的な対策はどれか。',
    choices: [
      { key: 'A', text: '巻線の断面積を大きくする。', explanation: '誤り。巻線断面積は銅損（抵抗損）に関係する対策であり、鉄心の渦電流損とは無関係。' },
      { key: 'B', text: '鉄心の磁束密度を高くする。', explanation: '誤り。磁束密度を高くすると渦電流損・ヒステリシス損とも増加してしまい逆効果。' },
      { key: 'C', text: '鉄心を薄い鋼板に積層し、各鋼板間を絶縁する。', explanation: '正しい。渦電流は鋼板断面内で環状に流れるため、鋼板を薄く積層し絶縁することで渦電流の経路が制限され、損失（∝t²）が大幅に低減する。' },
      { key: 'D', text: '巻数を増やして電圧を高くする。', explanation: '誤り。巻数は起電力の大きさに関係し、渦電流損の低減とは直接関係しない。' },
    ],
    correctKey: 'C',
    explanation: '積層鉄心はほぼすべての変圧器・回転機に採用される渦電流損対策の基本。\n【図解】渦電流損の低減\n　一体の鉄心では大きな渦電流ループが生じ損失が大きい。\n　薄い鋼板を絶縁被膜を挟んで積み重ねる（積層）ことで、\n　渦電流の経路が細分化→損失∝t²で急減★\n　（t：鋼板1枚の厚さ、薄いほど有利）',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_084', subject: 'rikigaku', subjectName: '理論',
    question: 'レンツの法則に関する説明として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '誘導起電力は、それによって生じる誘導電流が作る磁束が、常に元の磁束の変化を助ける方向に生じる。', explanation: '誤り。「助ける」ではなく「妨げる」方向に生じる。これがレンツの法則の核心であり、逆であれば誤り。' },
      { key: 'B', text: '誘導起電力の大きさは、コイルの巻数に反比例する。', explanation: '誤り。ファラデーの法則よりe＝N・dΦ/dtであり、巻数Nに比例する。反比例ではない。' },
      { key: 'C', text: '誘導起電力は、それによって生じる誘導電流が作る磁束が、常に元の磁束の変化を妨げる方向に生じる。', explanation: '正しい。レンツの法則はエネルギー保存則の現れであり、誘導電流は外部からの磁束変化を打ち消す（妨げる）方向に流れる。' },
      { key: 'D', text: '誘導起電力は磁束が変化しなくても常に一定の値で発生する。', explanation: '誤り。誘導起電力は磁束の「変化」がある場合にのみ発生する（e＝−dΦ/dt）。磁束が一定なら起電力は生じない。' },
    ],
    correctKey: 'C',
    explanation: 'レンツの法則はファラデーの法則の負号（−N・dΦ/dt）の物理的意味を表す。\n【図解】レンツの法則\n　磁石を近づける→磁束Φ増加\n　→誘導電流は増加を妨げる向き（反発方向）に発生★\n　磁石を遠ざける→磁束Φ減少\n　→誘導電流は減少を妨げる向き（吸引方向）に発生\n　（エネルギー保存則：外力に逆らう向きに必ず生じる）',
    difficulty: 'basic',
  },
  {
    id: 'dk3_rikigaku_085', subject: 'rikigaku', subjectName: '理論',
    question: '自己インダクタンス L₁ = 0.2 H、L₂ = 0.3 H の2つのコイルを、互いの磁束が加わり合う向き（和動接続）で直列接続した。相互インダクタンス M = 0.1 H のとき、合成インダクタンス L [H] はいくらか。',
    choices: [
      { key: 'A', text: '0.5 H', explanation: '誤り。相互インダクタンスMの寄与（2M）を加えていない単純な和。' },
      { key: 'B', text: '0.4 H', explanation: '誤り。2Mではなく1Mのみを加えた場合の誤答。' },
      { key: 'C', text: '0.6 H', explanation: '誤り。計算の組合せに誤りがある値。' },
      { key: 'D', text: '0.7 H', explanation: '正しい。和動接続（磁束が加わり合う）のときL＝L₁＋L₂＋2M＝0.2＋0.3＋0.2＝0.7H。' },
    ],
    correctKey: 'D',
    explanation: '相互誘導のある2コイルの直列接続には和動と差動の2種類がある。\n【図解】和動接続（磁束が強め合う）\n　L₁=0.2H⌇⌇⌇M=0.1H⌇⌇⌇L₂=0.3H（同じ向きに結合）\n　L＝L₁＋L₂＋2M＝0.2＋0.3＋2×0.1＝0.7H ✓\n　（巻き方が逆なら差動接続でL＝L₁＋L₂−2M）',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_086', subject: 'rikigaku', subjectName: '理論',
    question: '前問と同じ2つのコイル（L₁ = 0.2 H、L₂ = 0.3 H、M = 0.1 H）を、互いの磁束が打ち消し合う向き（差動接続）で直列接続した場合の合成インダクタンス L [H] はいくらか。',
    choices: [
      { key: 'A', text: '0.7 H', explanation: '誤り。これは和動接続（L₁+L₂+2M）の値であり、差動接続ではない。' },
      { key: 'B', text: '0.6 H', explanation: '誤り。2Mを引く操作が正しく反映されていない値。' },
      { key: 'C', text: '0.4 H', explanation: '誤り。Mを1回分しか引いていない場合の誤答。' },
      { key: 'D', text: '0.3 H', explanation: '正しい。差動接続（磁束が打ち消し合う）のときL＝L₁＋L₂−2M＝0.2＋0.3−0.2＝0.3H。' },
    ],
    correctKey: 'D',
    explanation: '和動と差動でMの符号が反転する点が最大のポイント。\n【図解】差動接続（磁束が打ち消し合う）\n　L₁=0.2H⌇⌇⌇M=0.1H⌇⌇⌇L₂=0.3H（逆向きに結合）\n　L＝L₁＋L₂−2M＝0.2＋0.3−2×0.1＝0.3H ✓\n　（結合係数kが大きいほど和動・差動の差が顕著になる）',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_087', subject: 'rikigaku', subjectName: '理論',
    question: '単相全波整流回路の出力電圧のリプル率（脈動率）の標準的な値として最も近いものはどれか。',
    choices: [
      { key: 'A', text: '約 121 %', explanation: '誤り。これは半波整流回路のリプル率の値である。全波整流はこれより小さくなる。' },
      { key: 'B', text: '約 100 %', explanation: '誤り。全波・半波いずれのリプル率もこの値にはならない。' },
      { key: 'C', text: '約 4.2 %', explanation: '誤り。これは平滑用コンデンサを大容量にした場合など特殊な条件での近似値であり、標準的な全波整流のみの値ではない。' },
      { key: 'D', text: '約 48 %', explanation: '正しい。単相全波整流回路の理論的なリプル率は約48.2%であり、半波整流（約121%）より大幅に改善されている。' },
    ],
    correctKey: 'D',
    explanation: 'リプル率は出力の交流成分と直流成分の比で、整流回路の平滑性を表す指標。\n【図解】整流方式とリプル率\n　半波整流：リプル率≈121%（脈動が大きい）\n　全波整流：リプル率≈48%★（半波よりなめらか）\n　三相全波整流：リプル率≈4%程度（さらに平滑）\n　（平滑用コンデンサ・チョークの追加でさらに低減可能）',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_088', subject: 'rikigaku', subjectName: '理論',
    question: 'トランジスタ増幅回路の動作点（バイアス点）と負荷線に関する説明として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '負荷線はコレクタ電流とベース電流の関係を表す直線である。', explanation: '誤り。負荷線はコレクタ電流 IC とコレクタ・エミッタ間電圧 VCE の関係を表す直線であり、ベース電流とは異なる軸で描かれる。' },
      { key: 'B', text: '動作点は静的な直流負荷線と、あるベース電流（またはベース・エミッタ間電圧）に対応する特性曲線との交点で決まる。', explanation: '正しい。動作点（Qポイント）は直流負荷線とトランジスタの出力特性曲線（あるIBに対応する曲線）の交点として決定され、増幅回路の直流動作状態を表す。' },
      { key: 'C', text: '動作点を波形のひずみが最も生じやすい位置に設定することが増幅回路設計の目的である。', explanation: '誤り。増幅回路設計では通常、出力波形のひずみが最小となるよう動作点を負荷線の中央付近（飽和・遮断領域から離れた位置）に設定する。' },
      { key: 'D', text: '負荷線の傾きは負荷抵抗の値に関係しない。', explanation: '誤り。負荷線の傾きは−1/RL（RL：負荷抵抗）で決まり、負荷抵抗の値によって傾きが変化する。' },
    ],
    correctKey: 'B',
    explanation: 'トランジスタ増幅回路設計は負荷線と動作点の理解が基本となる。\n【図解】負荷線と動作点\n　IC-VCE平面上に傾き−1/RLの直流負荷線を引き、トランジスタの特性曲線との交点を動作点Qとする。\n　Qは飽和・遮断領域を避け中央付近に設定（ひずみ最小化）',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_089', subject: 'rikigaku', subjectName: '理論',
    question: '理想演算増幅器（オペアンプ）を用いた非反転増幅回路において、帰還抵抗 Rf = 40 kΩ、接地側抵抗 R₁ = 10 kΩ のとき、電圧増幅度（利得）はいくらか。',
    choices: [
      { key: 'A', text: '4 倍', explanation: '誤り。Rf/R₁のみを計算した値であり、非反転増幅回路には「1＋」の項が必要（これは反転増幅回路の式）。' },
      { key: 'B', text: '−4 倍', explanation: '誤り。非反転増幅回路の出力は入力と同位相（正の利得）であり、負号は付かない。' },
      { key: 'C', text: '5 倍', explanation: '正しい。非反転増幅回路の増幅度A＝1＋Rf/R₁＝1＋40/10＝1＋4＝5倍。出力は入力と同位相。' },
      { key: 'D', text: '0.25 倍', explanation: '誤り。R₁/Rfの逆数関係を取り違えた値。' },
    ],
    correctKey: 'C',
    explanation: '非反転増幅回路と反転増幅回路の利得公式の違いに注意する。\n【図解】非反転増幅回路\n　オペアンプの＋入力にVinを接続し、−入力はR₁を介してGNDへ、また出力Voutとの間に帰還抵抗Rfを接続する非反転増幅回路。\n　A＝1＋Rf/R₁＝1＋4＝5倍★（必ず「1＋」が付く、正の利得）\n　反転増幅：A＝−Rf/R₁（「1＋」なし、負の利得）',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_090', subject: 'rikigaku', subjectName: '理論',
    question: '理想演算増幅器を用いた積分回路（インテグレータ）の特徴として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '入力抵抗の位置に帰還コンデンサを、帰還の位置に入力抵抗を入れ替えると微分回路になる。', explanation: '誤り。積分回路は入力に抵抗、帰還にコンデンサを用いる。逆に入力にコンデンサ、帰還に抵抗を用いると微分回路になり、この説明は入れ替えの向きが逆。' },
      { key: 'B', text: '出力電圧は入力電圧に比例する（純粋な比例増幅回路である）。', explanation: '誤り。積分回路の出力は入力電圧の時間積分に比例し、単純な比例増幅（利得一定）ではない。' },
      { key: 'C', text: '入力に矩形波を加えると、出力には三角波状の波形が現れる。', explanation: '誤り。方向としては近いが、この選択肢では回路構成の説明が抜けており不完全。積分回路の基本構成（帰還にコンデンサ）を明示した記述がより正確。' },
      { key: 'D', text: '帰還素子にコンデンサ C、入力に抵抗 R を用い、出力は入力電圧の時間積分に負号を付けた値に比例する。', explanation: '正しい。積分回路はVout＝−(1/RC)∫Vin dtで表され、帰還にコンデンサを用いる構成が特徴。矩形波入力に対して出力は三角波状になる。' },
    ],
    correctKey: 'D',
    explanation: '積分回路は帰還素子にコンデンサを用いる点が反転増幅回路との違い。\n【図解】積分回路の構成\n　Vinに抵抗Rを直列接続してオペアンプの−入力へ、−入力と出力Voutの間には帰還素子としてコンデンサCを接続する積分回路。\n　Vout＝−(1/RC)∫Vin dt★\n　矩形波入力→三角波出力（電荷が時間とともに直線的に蓄積）',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_091', subject: 'rikigaku', subjectName: '理論',
    question: '理想演算増幅器を用いたボルテージフォロワ（電圧ホロワ）回路の特徴として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '電圧増幅度は 2 倍であり、出力電圧は入力電圧の2倍になる。', explanation: '誤り。ボルテージフォロワの電圧増幅度は1倍であり、出力電圧は入力電圧と等しい（2倍にはならない）。' },
      { key: 'B', text: '入力インピーダンスが非常に低く、出力インピーダンスが非常に高いため、電流増幅用として使われる。', explanation: '誤り。逆である。ボルテージフォロワは入力インピーダンスが非常に高く、出力インピーダンスが非常に低いため、インピーダンス変換（バッファ）として使われる。' },
      { key: 'C', text: '帰還抵抗 Rf と接地側抵抗 R1 の比を大きくとることで、任意の高い利得が得られる回路である。', explanation: '誤り。ボルテージフォロワは出力を反転入力端子へ直接（抵抗を介さず）全帰還する構成であり、利得は常に1に固定される。抵抗比で利得を調整する回路ではない。' },
      { key: 'D', text: '出力を反転入力端子へ直接全帰還した利得1のバッファ回路であり、入力インピーダンスが高く出力インピーダンスが低いため、回路間のインピーダンス整合（バッファリング）に利用される。', explanation: '正しい。ボルテージフォロワは利得1のバッファとして、信号源の負荷への影響を防ぐインピーダンス変換の目的で広く使われる。' },
    ],
    correctKey: 'D',
    explanation: 'ボルテージフォロワはオペアンプの高入力・低出力インピーダンス特性を最大限活用した回路。\n【図解】ボルテージフォロワ\n　オペアンプの＋入力にVinを接続し、出力Voutを−入力に直接（全帰還）接続するボルテージフォロワ回路（Rf=0・R1=∞相当）。\n　利得＝1＋Rf/R1＝1＋0＝1倍（Vout＝Vin）\n　用途：信号源と負荷の間のバッファ（インピーダンス変換）',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_092', subject: 'rikigaku', subjectName: '理論',
    question: '論理回路の AND（論理積）ゲートの真理値表として、正しいものはどれか。ただし入力を A、B、出力を Y とする。',
    choices: [
      { key: 'A', text: 'A、B がともに 1 のときのみ Y = 1 となり、それ以外は Y = 0 となる。', explanation: '正しい。AND（論理積）ゲートは全ての入力が1のときのみ出力が1になる基本論理素子である。' },
      { key: 'B', text: 'A、B のいずれか一方でも 1 であれば Y = 1 となる。', explanation: '誤り。これはOR（論理和）ゲートの真理値表の説明である。' },
      { key: 'C', text: 'A が 1 のとき Y = 0、A が 0 のとき Y = 1 となる（B に無関係）。', explanation: '誤り。これは1入力のNOT（否定）ゲートの説明であり、2入力ANDゲートの説明ではない。' },
      { key: 'D', text: 'A、B が異なる値のときのみ Y = 1 となる。', explanation: '誤り。これはXOR（排他的論理和）ゲートの真理値表の説明である。' },
    ],
    correctKey: 'A',
    explanation: '基本論理ゲート（AND・OR・NOT）の真理値表は電子回路分野の基礎知識。\n【図解】ANDゲートの真理値表\n　A｜B｜Y\n　0｜0｜0\n　0｜1｜0\n　1｜0｜0\n　1｜1｜1\n　記号は左側で入力A・Bを受け、論理積（&）を経て右側へ出力Yを出す形で描く\n　全て1のときだけY=1★\n　（掛け算のイメージ：0が1つでもあれば0）',
    difficulty: 'basic',
  },
  {
    id: 'dk3_rikigaku_093', subject: 'rikigaku', subjectName: '理論',
    question: '論理回路の OR（論理和）ゲートの動作として、正しいものはどれか。ただし入力を A、B、出力を Y とする。',
    choices: [
      { key: 'A', text: 'A、B のいずれか一方でも 1 であれば Y = 1 となり、両方 0 のときのみ Y = 0 となる。', explanation: '正しい。OR（論理和）ゲートは入力のいずれか1つでも1であれば出力が1になり、全入力が0のときのみ出力が0になる。' },
      { key: 'B', text: 'A、B がともに 1 のときのみ Y = 1 となる。', explanation: '誤り。これはAND（論理積）ゲートの動作の説明である。' },
      { key: 'C', text: '入力が1つのときにその値を反転して出力する。', explanation: '誤り。これはNOT（否定）ゲートの動作であり、OR は2つ以上の入力を持つ論理和演算を行う。' },
      { key: 'D', text: 'A、B の両方が 0 のときのみ Y = 1 となる。', explanation: '誤り。これはNOR（否定論理和）ゲートの動作の説明である。' },
    ],
    correctKey: 'A',
    explanation: 'ORゲートは「足し算」のイメージで理解すると分かりやすい。\n【図解】ORゲートの真理値表\n　A｜B｜Y\n　0｜0｜0\n　0｜1｜1\n　1｜0｜1\n　1｜1｜1\n　記号は左側で入力A・Bを受け、論理和（≥1）を経て右側へ出力Yを出す形で描く\n　1つでも1があればY=1★\n　（NOT：入力1つを反転、AND：全部1で1）',
    difficulty: 'basic',
  },
  {
    id: 'dk3_rikigaku_094', subject: 'rikigaku', subjectName: '理論',
    question: 'NAND（否定論理積）ゲートが「万能ゲート」と呼ばれる理由として、最も適切なものはどれか。',
    choices: [
      { key: 'A', text: 'NAND ゲートは他の論理ゲートより動作速度が最も速いため。', explanation: '誤り。動作速度は使用する半導体プロセスや回路方式によって決まり、NANDが「万能ゲート」と呼ばれる理由ではない。' },
      { key: 'B', text: 'NAND ゲートは入力数を無制限に増やせるため。', explanation: '誤り。入力数の拡張性は万能ゲートと呼ばれる理由とは直接関係しない。' },
      { key: 'C', text: 'NAND ゲートは消費電力が最も小さいため。', explanation: '誤り。消費電力は使用する論理ファミリ（CMOS・TTL等）によって決まり、NANDに限った特性ではない。' },
      { key: 'D', text: 'NAND ゲートだけを組み合わせることで、NOT・AND・OR など他のすべての基本論理演算を構成できるため。', explanation: '正しい。NANDゲートの入力を共通にすればNOTが、NANDの出力をさらにNOTで反転すればANDが得られるなど、NANDのみで任意の論理回路を構成できるため万能（普遍）ゲートと呼ばれる。' },
    ],
    correctKey: 'D',
    explanation: 'NAND（およびNOR）は組合せだけで全ての論理関数を実現できる完全性を持つ。\n【図解】NANDによる基本回路の構成\n　NOT：NANDの両入力にAを接続すればY＝NOT Aが得られる。\n　AND：A・Bを1つ目のNANDに入力し、その出力をもう1つのNAND（NOTとして使用）に通すとY＝A・Bが得られる。\n　OR：ド・モルガンの定理を使い、NANDを組合せて実現\n　→ NANDのみでNOT・AND・OR全てが作れる★（万能ゲート）',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_095', subject: 'rikigaku', subjectName: '理論',
    question: '2進数 101101₍₂₎ を10進数に変換した値として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '43', explanation: '誤り。桁の重み付けの計算にミスがある値。' },
      { key: 'B', text: '46', explanation: '誤り。最下位ビットの扱いに誤りがある値。' },
      { key: 'C', text: '53', explanation: '誤り。桁の位置を1つずらして計算した場合の誤答。' },
      { key: 'D', text: '45', explanation: '正しい。101101₍₂₎＝1×32＋0×16＋1×8＋1×4＋0×2＋1×1＝32+8+4+1＝45。' },
    ],
    correctKey: 'D',
    explanation: '2進数の各桁は右から2⁰、2¹、2²…の重みを持つ。\n【図解】2進数→10進数変換\n　桁の重み： 32 16 8 4 2 1\n　2進数　：  1  0 1 1 0 1\n　　　　　＝32＋0＋8＋4＋0＋1＝45 ✓\n　（1が立っている桁の重みだけを合計する）',
    difficulty: 'basic',
  },
  {
    id: 'dk3_rikigaku_096', subject: 'rikigaku', subjectName: '理論',
    question: '絶縁抵抗計（メガー）を用いた絶縁抵抗測定の原理と使用上の注意として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '内蔵の直流高電圧発生装置により被測定物に高電圧の直流を加え、そのときに流れるわずかな漏れ電流から絶縁抵抗値を求める。測定前には必ず被測定回路を停電・放電させる。', explanation: '正しい。メガーはハンドル発電機や電子式の直流高電圧源を内蔵し、被測定物に印加した高電圧と漏れ電流の比（オームの法則）から絶縁抵抗を算出する。感電・機器損傷防止のため測定前の停電・残留電荷の放電が必須。' },
      { key: 'B', text: '交流の商用電圧をそのまま被測定物に印加し、流れる電流の実効値から抵抗値を計算する。', explanation: '誤り。メガーは絶縁抵抗測定用に内蔵した直流高電圧（例：125V、250V、500V、1000V等）を用いる。商用交流電圧をそのまま用いるものではない。' },
      { key: 'C', text: '測定対象に電圧を加えず、テスタと同様に導通の有無のみを確認する計器である。', explanation: '誤り。導通確認のみを行うのはテスタの抵抗測定レンジや導通チェッカーの機能。メガーは高電圧を印加して微小な漏れ電流を検出する専用計器である。' },
      { key: 'D', text: '測定は通電状態（負荷が稼働中）のまま安全に実施できる。', explanation: '誤り。絶縁抵抗測定は必ず被測定回路を停電・無充電状態にしてから行う必要があり、通電状態での測定は感電・機器損傷の重大な危険がある。' },
    ],
    correctKey: 'A',
    explanation: '絶縁抵抗測定は電気設備の安全確認に欠かせない基本測定。\n【図解】メガーによる絶縁抵抗測定\n　メガー内蔵の直流高電圧源→被測定物に印加\n　絶縁抵抗R＝印加電圧V／漏れ電流I（オームの法則）\n　手順：①停電・放電確認→②メガー接続→③測定★\n　（低圧回路：0.1〜0.4MΩ以上、電技解釈で基準あり）',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_097', subject: 'rikigaku', subjectName: '理論',
    question: '指示電気計器の階級（精度階級）0.5級の意味として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '最大目盛（フルスケール）に対する誤差が ±0.5 % 以内であることを表す。', explanation: '正しい。精度階級は計器の最大目盛値（フルスケール）に対する許容誤差の百分率で表され、0.5級は誤差が最大目盛の±0.5%以内であることを保証する。' },
      { key: 'B', text: '測定値に対する誤差が常に ±0.5 % 以内であることを表す。', explanation: '誤り。精度階級の基準は「測定値」ではなく「最大目盛（フルスケール）」に対する誤差である。目盛の低い位置での測定では相対誤差が大きくなる点に注意が必要。' },
      { key: 'C', text: '計器の内部抵抗が 0.5 Ω であることを表す。', explanation: '誤り。精度階級は誤差の許容範囲を表す指標であり、内部抵抗の値とは無関係。' },
      { key: 'D', text: '計器の測定範囲が 0.5 倍まで拡大できることを表す。', explanation: '誤り。精度階級は測定範囲の拡大とは無関係であり、誤差の精度を表す指標である。' },
    ],
    correctKey: 'A',
    explanation: '精度階級は「最大目盛基準」である点が最重要ポイント。\n【図解】精度階級0.5級の意味\n　誤差の許容範囲＝最大目盛値×0.5%\n　例：最大目盛100Vの計器→誤差は±0.5V以内★\n　（同じ計器で50V付近を測ると相対誤差は±1%に拡大）\n　→ なるべく最大目盛に近い範囲で測定するのが望ましい',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_098', subject: 'rikigaku', subjectName: '理論',
    question: '計器用変流器（CT）の使用上の注意事項として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '一次側に電流が流れている状態で、二次側の電流計などを取り外す場合は、必ず二次側を短絡してから行う。', explanation: '正しい。CTの二次側を開放すると一次電流がすべて励磁電流となり、鉄心が過度に磁化されて二次側に危険な高電圧が発生するため、point取り外し前に必ず短絡する必要がある。' },
      { key: 'B', text: '二次側は常に開放状態で使用しなければならない。', explanation: '誤り。CTの二次側を開放すると高電圧が発生し、絶縁破壊や感電の危険がある。二次側は常に電流計などの負荷を接続するか短絡しておく必要がある。' },
      { key: 'C', text: '二次側の定格電流は一次側と同じ大電流（数百〜数千A）である。', explanation: '誤り。CTの二次側定格電流は通常5A（または1A）に標準化されており、大電流の一次側を小電流の二次側に変換して計測しやすくするのがCTの役割。' },
      { key: 'D', text: '二次側を短絡すると、一次側の大電流がそのまま二次側の短絡回路に流れ込み危険なため、短絡は絶対に避けるべきである。', explanation: '誤り。逆である。CTの二次側短絡は通常運転状態（負荷インピーダンスがほぼ0のCT）に近く安全であり、危険なのはむしろ二次側の開放である。' },
    ],
    correctKey: 'A',
    explanation: 'CT（電流変成器）とVT（計器用変圧器）は取り扱いが正反対な点が試験の頻出ポイント。\n【図解】CTの取扱い\n　CT二次側：開放は絶対禁止★（高電圧発生・鉄心過飽和）\n　　→ 取り外し前に必ず短絡してから作業\n　（VTは逆：二次側短絡が禁止、開放して使用可）\n　二次定格：通常5A規格',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_099', subject: 'rikigaku', subjectName: '理論',
    question: '計器用変圧器（VT）の使用上の注意事項として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '二次側を開放すると大電流が流れて焼損する危険があるため、開放してはならない。', explanation: '誤り。二次開放で危険なのはCT（電流変成器）である。VTは二次開放でも大きな問題は生じにくく、逆に二次側短絡が危険となる。' },
      { key: 'B', text: '二次側を短絡すると、一次巻線に近い大電流が二次側に流れ込み、巻線焼損など機器損傷のおそれがあるため、短絡してはならない。', explanation: '正しい。VTは電圧変成用の変圧器であり、二次側を短絡すると一次電圧がほぼそのまま印加された状態となって過大な電流が流れ、巻線焼損等の重大な損傷を招くため厳禁である。' },
      { key: 'C', text: '一次側と二次側の定格電圧は常に等しい。', explanation: '誤り。VTは高電圧（例：6600V等）を計器で扱いやすい低電圧（標準110V）に変成する機器であり、一次・二次の定格電圧は異なる。' },
      { key: 'D', text: '二次側には保護ヒューズを設けてはならない。', explanation: '誤り。VTの二次側回路には短絡事故等から保護するためヒューズや配線用遮断器を設けるのが一般的である。' },
    ],
    correctKey: 'B',
    explanation: 'VTはCTと真逆の注意点（開放OK・短絡NG）を持つことを対で覚える。\n【図解】VTとCTの対比\n　VT（計器用変圧器）：二次「短絡」が禁止★\n　　（一次は高電圧のまま、短絡で過大電流→焼損）\n　CT（計器用変流器）：二次「開放」が禁止\n　　（一次は大電流のまま、開放で異常高電圧）\n　→ 「VT短絡NG、CT開放NG」と対で暗記',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_100', subject: 'rikigaku', subjectName: '理論',
    question: '導体に高周波電流を流したときに生じる表皮効果に関する説明として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '周波数が高くなるほど電流は導体の中心部に集中して流れるようになる。', explanation: '誤り。周波数が高くなるほど電流は導体の「表面」に集中して流れるようになる。中心部ではなく表面が正しい。' },
      { key: 'B', text: '周波数が高くなるほど電流は導体の表面近くに集中して流れ、実効的な断面積が減少するため交流抵抗が増加する。', explanation: '正しい。表皮効果により高周波電流ほど導体表面近くに集中し（表皮の厚さが薄くなり）、実効断面積の減少により交流抵抗（実効抵抗）が直流抵抗より大きくなる。' },
      { key: 'C', text: '表皮効果は直流回路においても交流回路と同程度に生じる。', explanation: '誤り。表皮効果は電流の時間変化（周波数）に起因する現象であり、直流（周波数0）では原理的に生じない。' },
      { key: 'D', text: '表皮効果を軽減するには、より断面積の大きい単一の太い導体を使用するのがよい。', explanation: '誤り。太い単一導体は表皮効果の影響をむしろ強く受ける。対策としては素線を細くして撚り合わせるより線（より線）や中空導体が有効。' },
    ],
    correctKey: 'B',
    explanation: '表皮効果は送電線・高周波回路の設計で重要な現象。\n【図解】表皮効果のイメージ\n　直流：導体断面全体に均一に電流が流れる\n　高周波：電流は表面近くの薄い層に集中★\n　　→ 実効断面積↓ → 交流抵抗↑（直流抵抗より大）\n　対策：より線化・中空導体・表面積を増やす形状',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_101', subject: 'rikigaku', subjectName: '理論',
    question: '未知のインダクタンスを精密に測定するために用いられる交流ブリッジ（マクスウェルブリッジなど）に関する説明として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '直流電源とホイートストンブリッジのみで、未知のインダクタンスを直接測定できる。', explanation: '誤り。インダクタンスは交流的な性質（リアクタンス）を持つため、直流のホイートストンブリッジでは測定できず、交流電源と交流ブリッジが必要。' },
      { key: 'B', text: '交流ブリッジの平衡条件は、印加する交流電圧の大きさのみに依存し、周波数には依存しない。', explanation: '誤り。交流ブリッジの平衡条件式にはリアクタンス（ωLや1/ωC）の項が含まれるため、一般に周波数に依存する（周波数が変われば平衡状態も変化しうる）。' },
      { key: 'C', text: '交流ブリッジは、既知の抵抗・静電容量などの標準器を用いて平衡条件（検流計の振れがゼロ）をつくり、その条件式から未知のインダクタンスとその損失抵抗を精密に算出する測定法である。', explanation: '正しい。交流ブリッジ法は既知の標準器（抵抗・コンデンサ等）でブリッジを平衡させ、平衡条件の数式から未知素子の値（インダクタンスと直列等価抵抗）を求める精密測定法であり、周波数に依存する測定にも対応できる。' },
      { key: 'D', text: '交流ブリッジは電力測定専用の装置であり、インダクタンスの測定には使用できない。', explanation: '誤り。交流ブリッジはインダクタンス・静電容量・抵抗など各種インピーダンス素子の精密測定に広く使用される測定法である。' },
    ],
    correctKey: 'C',
    explanation: '交流ブリッジはホイートストンブリッジの交流版で、L・C・Rの精密測定に使われる。\n【図解】交流ブリッジ（マクスウェルブリッジ等）\n　既知の標準R・Cで検流計（またはヘッドホン等）の\n　振れがゼロになるよう調整→平衡条件式が成立★\n　平衡条件から未知のL（とその等価抵抗）を算出\n　（直流のホイートストンブリッジのL・C版に相当）',
    difficulty: 'advanced',
  },
  {
    id: 'dk3_rikigaku_102', subject: 'rikigaku', subjectName: '理論',
    question: '真空中に置かれた点電荷 Q = 8.85×10⁻¹² C から出る電気力線の総数 N（ガウスの法則による）として、正しいものはどれか。ただし真空の誘電率 ε₀ = 8.85×10⁻¹² F/m とする。',
    choices: [
      { key: 'A', text: '1 本', explanation: '正しい。ガウスの法則より電気力線の総数はN＝Q/ε₀＝8.85×10⁻¹²/8.85×10⁻¹²＝1本。電気力線の本数の定義そのものを確認する基本問題。' },
      { key: 'B', text: '4π 本', explanation: '誤り。4πは立体角の全体（球の全立体角）に関する数値であり、N＝Q/ε₀の値そのものではない。' },
      { key: 'C', text: '8.85×10⁻¹² 本', explanation: '誤り。Qの値をそのまま答えており、ε₀で割る操作が抜けている。' },
      { key: 'D', text: '0 本', explanation: '誤り。電荷が存在する限り、必ずN＝Q/ε₀本の電気力線が出る（Qが0でない限りNは0にならない）。' },
    ],
    correctKey: 'A',
    explanation: '電気力線の本数の定義N＝Q/ε₀は電界・電束密度の理解の基礎となる。\n【図解】電気力線の本数の定義\n　電荷Qから出る電気力線の総数 N＝Q/ε₀\n　（電束Ψ＝Qは常に成立、電気力線本数だけがε₀に依存）\n　本問：N＝8.85×10⁻¹²/8.85×10⁻¹²＝1本 ✓\n　（実務計算というより定義の理解を問う問題）',
    difficulty: 'standard',
  },
  {
    id: 'dk3_rikigaku_103', subject: 'rikigaku', subjectName: '理論',
    question: '物質の電気抵抗率 ρ [Ω・m] と導電率（電気伝導率）σ [S/m] の関係として、正しいものはどれか。',
    choices: [
      { key: 'A', text: 'σ = 1/ρ の関係にあり、抵抗率が小さいほど導電率は大きくなる。', explanation: '正しい。導電率は抵抗率の逆数（σ＝1/ρ）として定義され、電気を通しやすい良導体ほど抵抗率が小さく導電率が大きい。' },
      { key: 'B', text: 'σ = ρ の関係にあり、両者は常に等しい値をとる。', explanation: '誤り。抵抗率と導電率は互いに逆数の関係にあり、通常は等しい値にはならない（単位も[Ω・m]と[S/m]で異なる）。' },
      { key: 'C', text: 'σ = ρ² の関係にある。', explanation: '誤り。抵抗率の2乗の関係ではなく、単純な逆数の関係である。' },
      { key: 'D', text: '抵抗率が大きい物質ほど導電率も大きくなる。', explanation: '誤り。抵抗率と導電率は逆数の関係にあるため、抵抗率が大きい物質ほど導電率は小さくなる（電気を通しにくい）。' },
    ],
    correctKey: 'A',
    explanation: '抵抗率と導電率は同じ現象を異なる視点（通しにくさ／通しやすさ）で表した量。\n【図解】抵抗率と導電率\n　抵抗率ρ［Ω・m］：電気の「通しにくさ」\n　導電率σ［S/m］：電気の「通しやすさ」\n　σ＝1/ρ（互いに逆数）★\n　良導体（銅等）：ρ小・σ大／絶縁体：ρ大・σ小',
    difficulty: 'basic',
  },
];
