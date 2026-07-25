import { ShoboQuestion } from './shobo_questions';

export const shoboKiso1: ShoboQuestion[] = [
  // ══════════════════════════════════════════════════════
  // 基礎的知識（機械） sb-kisok-001 〜 sb-kisok-050
  // ══════════════════════════════════════════════════════
  {
    id: 'sb-kisok-001',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '1つの物体に、東向きに 30 N の力と、北向きに 40 N の力が同時に働いている。この2力の合力の大きさとして、正しいものはどれか。',
    choices: [
      { key: 'A', text: '50 N', explanation: '互いに直交する2力の合力は三平方の定理で求め、√(30²+40²)＝√2500＝50 N。正しい。' },
      { key: 'B', text: '70 N', explanation: '30＋40 と単純に足した誤答。向きが異なる力は算術和にはならない。' },
      { key: 'C', text: '35 N', explanation: '2力の平均値を取った誤答。合力は平均では求まらない。' },
      { key: 'D', text: '10 N', explanation: '40－30 と差を取った誤答。差になるのは同一直線上で逆向きの場合である。' },
    ],
    correctKey: 'A' as const,
    explanation:
      '互いに直角をなす2力の合力は、その2力を2辺とする長方形の対角線となる。したがって合力Rは R＝√(F₁²＋F₂²)＝√(30²＋40²)＝√(900＋1600)＝√2500＝50 N となる。3：4：5 の直角三角形の関係である。\n【図解】計算のしかた\n★式：R＝√(F₁²＋F₂²)（直交2力の合力）\n　代入：R＝√(30²＋40²)＝√(900＋1600)＝√2500\n○答え：50 N\n×よくある誤り：30＋40＝70 N と算術和にしない\n→ 3：4：5 の直角三角形を思い出せば暗算できる',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-002',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '水平なてこがある。支点から左へ 0.4 m の位置に 600 N の荷重が下向きに掛かっている。支点から右へ 1.2 m の位置に下向きの力 F を加えてつり合わせるとき、F の大きさとして正しいものはどれか。てこの自重は無視する。',
    choices: [
      { key: 'A', text: '150 N', explanation: '腕の長さの比を逆にとった誤答。600×1.2÷0.4 の逆算をしている。' },
      { key: 'B', text: '200 N', explanation: '左回りのモーメント 600×0.4＝240 N・m と右回りの F×1.2 が等しいので F＝200 N。正しい。' },
      { key: 'C', text: '300 N', explanation: '腕の長さの比を 1.2÷0.4＝3 ではなく 2 として計算した誤答。' },
      { key: 'D', text: '1800 N', explanation: '600×1.2÷0.4＝1800 と分母分子を取り違えた誤答。腕が長い側ほど小さい力でつり合う。' },
    ],
    correctKey: 'B' as const,
    explanation:
      'てこのつり合いは、支点まわりのモーメントの和がゼロになることで表される。左回りのモーメントは 600 N×0.4 m＝240 N・m、右回りのモーメントは F×1.2 m である。240＝1.2F より F＝240÷1.2＝200 N となる。腕が長いほど小さい力でつり合う。\n【図解】計算のしかた\n★式：W×a＝F×b（モーメントのつり合い）\n　代入：600×0.4＝F×1.2 → 240＝1.2F\n○答え：F＝200 N\n×よくある誤り：600×1.2÷0.4＝1800 N と分母分子を逆にしない\n→ 「荷重×荷重側の腕＝力×力側の腕」と唱える',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-003',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '水平面から 30° 上向きの方向に、大きさ 200 N の力を加えた。この力の水平方向の分力の大きさとして、最も近いものはどれか。ただし sin30°＝0.500、cos30°＝0.866 とする。',
    choices: [
      { key: 'A', text: '100 N', explanation: '200×sin30°＝100 N であり、これは鉛直分力である。水平分力ではない。' },
      { key: 'B', text: '141 N', explanation: '200×cos45°＝141 N に相当し、角度を45°と取り違えた誤答。' },
      { key: 'C', text: '173 N', explanation: '水平分力は Fcos θ＝200×0.866＝173.2 N。正しい。' },
      { key: 'D', text: '200 N', explanation: '力の大きさそのもの。角度が0°でない限り分力は元の力より小さい。' },
    ],
    correctKey: 'C' as const,
    explanation:
      '斜め方向の力は、水平分力 Fx＝Fcos θ と鉛直分力 Fy＝Fsin θ に分解できる。水平分力は Fx＝200×cos30°＝200×0.866＝173.2 N である。なお鉛直分力は 200×0.500＝100 N であり、両者を三平方の定理で合成すると元の 200 N に戻る。\n【図解】計算のしかた\n★式：Fx＝F cos θ、Fy＝F sin θ\n　代入：Fx＝200×cos30°＝200×0.866\n○答え：約173 N（鉛直分力は100 N）\n×よくある誤り：sin と cos を取り違えて100 N としない\n→ 「水平（横）はコサイン、鉛直（縦）はサイン」で固定して覚える',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-004',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '断面積 200 mm² の丸棒に、軸方向の引張荷重 10 kN を加えた。この棒に生じる引張応力の値として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '0.05 N/mm²', explanation: '荷重を kN のまま 10÷200 と計算した誤答。単位を N に直す必要がある。' },
      { key: 'B', text: '5 N/mm²', explanation: '断面積を 2000 mm² として計算した誤答。桁が1つ違う。' },
      { key: 'C', text: '500 N/mm²', explanation: '断面積を 20 mm² として計算した誤答。実際の断面積は 200 mm² である。' },
      { key: 'D', text: '50 N/mm²', explanation: 'σ＝W／A＝10000 N÷200 mm²＝50 N/mm²。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      '引張応力は荷重を断面積で割って求める。荷重 10 kN＝10000 N を断面積 200 mm² で割ると σ＝10000÷200＝50 N/mm² となる。なお 1 N/mm²＝1 MPa なので、50 MPa と表しても同じ値である。\n【図解】計算のしかた\n★式：σ＝W／A（応力＝荷重÷断面積）\n　代入：σ＝10×10³ N ÷ 200 mm²\n○答え：50 N/mm²（＝50 MPa）\n×よくある誤り：kN を N に直し忘れて0.05としない\n→ 1 N/mm²＝1 MPa、まず kN→N の換算を書いてから割る',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-005',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '長さ 2000 mm の棒に引張荷重を加えたところ、全体で 1.2 mm 伸びた。このときの縦ひずみの値として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '6×10⁻³', explanation: '1.2÷200 と計算した誤答。元の長さは 2000 mm である。' },
      { key: 'B', text: '6×10⁻⁴', explanation: 'ε＝λ／L＝1.2÷2000＝0.0006＝6×10⁻⁴。正しい。' },
      { key: 'C', text: '1.67×10³', explanation: '2000÷1.2 と逆に割った誤答。ひずみは伸びを元の長さで割る。' },
      { key: 'D', text: '0.6', explanation: '小数点の位置を3桁誤った値。ひずみは無次元量で通常きわめて小さい。' },
    ],
    correctKey: 'B' as const,
    explanation:
      'ひずみは変形量を元の寸法で割った無次元量である。ε＝λ／L＝1.2 mm÷2000 mm＝0.0006＝6×10⁻⁴ となる。金属材料の弾性域のひずみは 10⁻³ 程度以下の非常に小さな値になる点を押さえておく。\n【図解】計算のしかた\n★式：ε＝λ／L（ひずみ＝伸び÷元の長さ）\n　代入：ε＝1.2 mm ÷ 2000 mm＝0.0006\n○答え：6×10⁻⁴（無次元）\n×よくある誤り：L／λ と逆に割らない、単位を付けない\n→ 「変形量÷もとの長さ」、答えはいつも小さな無次元の数',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-006',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      'ある金属材料の弾性域において、引張応力 120 N/mm² のとき縦ひずみが 6×10⁻⁴ であった。この材料の縦弾性係数（ヤング率）として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '約 200 GPa', explanation: 'E＝σ／ε＝120÷6×10⁻⁴＝2×10⁵ N/mm²＝200 GPa。正しい。' },
      { key: 'B', text: '約 20 GPa', explanation: '桁を1つ落とした誤答。軟鋼のヤング率は約 206 GPa である。' },
      { key: 'C', text: '約 2000 GPa', explanation: '桁を1つ多くした誤答。金属でこの値になるものはない。' },
      { key: 'D', text: '約 0.072 GPa', explanation: 'σ×ε と掛け算した誤答。ヤング率は応力をひずみで割る。' },
    ],
    correctKey: 'A' as const,
    explanation:
      'フックの法則 σ＝Eε より、縦弾性係数は E＝σ／ε で求まる。E＝120÷(6×10⁻⁴)＝120÷0.0006＝200000 N/mm²＝2×10⁵ MPa＝200 GPa となる。軟鋼のヤング率が約 206 GPa であることを知っていれば検算できる。\n【図解】計算のしかた\n★式：σ＝Eε → E＝σ／ε（フックの法則）\n　代入：E＝120 ÷ 6×10⁻⁴＝2×10⁵ N/mm²\n○答え：約200 GPa（＝2×10⁵ N/mm²）\n×よくある誤り：E＝σ×ε と掛けない\n→ 鋼のヤング率は約206 GPaと暗記し、桁の検算に使う',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-007',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '長さ 3 m、断面積 100 mm² の鋼棒に、軸方向の引張荷重 20 kN を加えた。この棒の伸びとして正しいものはどれか。ただし縦弾性係数を 200 kN/mm²（2×10⁵ N/mm²）とする。',
    choices: [
      { key: 'A', text: '0.3 mm', explanation: '長さを 300 mm として計算した誤答。3 m は 3000 mm である。' },
      { key: 'B', text: '30 mm', explanation: '縦弾性係数の桁を1つ落とした誤答。伸びが大きすぎ弾性域を超える。' },
      { key: 'C', text: '1.5 mm', explanation: '断面積を 200 mm² として計算した誤答。断面積は 100 mm² である。' },
      { key: 'D', text: '3 mm', explanation: 'λ＝WL／(AE)＝20000×3000÷(100×200000)＝3 mm。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      '伸びの公式は λ＝WL／(AE) である。単位を mm と N にそろえると、λ＝(20000 N×3000 mm)÷(100 mm²×200000 N/mm²)＝6×10⁷÷2×10⁷＝3 mm となる。分子は荷重と長さ、分母は断面積とヤング率という並びで覚える。\n【図解】計算のしかた\n★式：λ＝WL／(AE)（伸び＝荷重×長さ÷(断面積×ヤング率)）\n　代入：λ＝20000×3000 ÷ (100×200000)＝6×10⁷÷2×10⁷\n○答え：3 mm\n×よくある誤り：m と mm を混在させない（3 m→3000 mm）\n→ 上は「掛けたい方（W・L）」、下は「守る方（A・E）」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-008',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '引張強さ 400 N/mm² の材料を用い、許容応力を 100 N/mm² と定めて設計した。このときの安全率として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '0.25', explanation: '許容応力÷引張強さと逆に割った誤答。安全率は1より大きい値になる。' },
      { key: 'B', text: '2', explanation: '400÷200 とした場合の値。許容応力は 100 N/mm² である。' },
      { key: 'C', text: '4', explanation: 'S＝基準強さ÷許容応力＝400÷100＝4。正しい。' },
      { key: 'D', text: '40', explanation: '桁を1つ多く取った誤答。実務上の安全率は概ね3〜8程度である。' },
    ],
    correctKey: 'C' as const,
    explanation:
      '安全率は基準強さ（一般に引張強さ）を許容応力で割った値である。S＝400÷100＝4 となる。安全率が大きいほど余裕のある設計だが、部材が重く不経済になる。逆に許容応力は σa＝基準強さ÷安全率 で求める。\n【図解】計算のしかた\n★式：安全率 S＝基準強さ／許容応力\n　代入：S＝400 N/mm² ÷ 100 N/mm²\n○答え：4（無次元）\n×よくある誤り：逆数の0.25としない。安全率は必ず1より大きい\n→ 許容応力＝引張強さ÷安全率、と裏返しでも言えるようにする',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-009',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '引張荷重 60 kN を受ける部材を、許容引張応力 120 N/mm² で設計する。必要な最小断面積として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '50 mm²', explanation: '荷重を kN のまま 60÷1.2 のように扱った誤答。単位換算が必要である。' },
      { key: 'B', text: '200 mm²', explanation: '許容応力を 300 N/mm² としたときの値であり、条件と合わない。' },
      { key: 'C', text: '500 mm²', explanation: 'A＝W／σa＝60000 N÷120 N/mm²＝500 mm²。正しい。' },
      { key: 'D', text: '5000 mm²', explanation: '桁を1つ多く取った誤答。60000÷120 は 500 である。' },
    ],
    correctKey: 'C' as const,
    explanation:
      '許容応力以下に応力を収めるには σ＝W／A ≦ σa すなわち A ≧ W／σa が必要である。A＝60000 N÷120 N/mm²＝500 mm² となる。これが必要最小断面積であり、実際にはこれ以上の断面をもつ部材を選定する。\n【図解】計算のしかた\n★式：σ＝W／A を変形して A＝W／σa\n　代入：A＝60×10³ N ÷ 120 N/mm²\n○答え：500 mm²（これ以上必要）\n×よくある誤り：kN のまま割って50 mm²としない\n→ 応力の式は「σ・W・A」の三角形で、隠した文字が求める式',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-010',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '直径 20 mm のボルト1本が、1面せん断で 31.4 kN のせん断荷重を受けている。ボルトに生じる平均せん断応力として、最も近いものはどれか。ただし円周率は3.14とする。',
    choices: [
      { key: 'A', text: '50 N/mm²', explanation: '断面積を 628 mm²（直径をそのまま円周と混同）として計算した誤答。' },
      { key: 'B', text: '157 N/mm²', explanation: '断面積を 200 mm² 程度と見積もった誤答。実際の断面積は 314 mm² である。' },
      { key: 'C', text: '1570 N/mm²', explanation: '桁を1つ多く取った誤答。この応力では鋼ボルトは破断する。' },
      { key: 'D', text: '100 N/mm²', explanation: 'A＝π/4×20²＝314 mm²、τ＝31400÷314＝100 N/mm²。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      'ボルトの断面積は A＝πd²／4＝3.14×20²÷4＝3.14×400÷4＝314 mm² である。1面せん断なのでせん断応力は τ＝W／A＝31400 N÷314 mm²＝100 N/mm² となる。2面せん断であれば受圧断面が2倍になり応力は半分になる。\n【図解】計算のしかた\n★式：A＝πd²／4、τ＝W／A\n　代入：A＝3.14×400÷4＝314 mm²、τ＝31400÷314\n○答え：100 N/mm²\n×よくある誤り：円の面積 πd²／4 と円周 πd を混同しない\n→ 2面せん断なら A を2倍にして応力は半分になる',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-011',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '軟鋼の応力ひずみ線図に関する記述として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '比例限度とは、応力とひずみが正比例する限界の点をいう。', explanation: 'フックの法則が成り立つ上限が比例限度である。正しい。' },
      { key: 'B', text: '弾性限度を超えても、荷重を除けば必ず元の形状に戻る。', explanation: '弾性限度を超えると永久ひずみが残るため誤り。元に戻るのは弾性限度までである。' },
      { key: 'C', text: '上降伏点は下降伏点より低い応力で現れる。', explanation: '上降伏点のほうが高い応力で現れる。名称のとおり上が先で高い。' },
      { key: 'D', text: '引張強さは、破断した瞬間の応力をいう。', explanation: '引張強さは線図上の最大応力であり、破断応力（破断点）とは異なるので誤り。' },
    ],
    correctKey: 'A' as const,
    explanation:
      '軟鋼の応力ひずみ線図は、原点から比例限度までが直線でフックの法則が成り立つ。その先に弾性限度、上降伏点、下降伏点があり、さらに応力が最大となる点が引張強さ（極限強さ）である。その後くびれが生じ、破断点で破断する。弾性限度を超えると除荷しても永久ひずみが残る。\n【図解】計算のしかた\n★式：σ＝Eε が成り立つのは比例限度まで\n　代入：順序＝比例限度→弾性限度→上降伏点→下降伏点→引張強さ→破断点\n○答え：比例限度は応力とひずみが正比例する限界\n×よくある誤り：引張強さ（最大応力）と破断応力を混同しない\n→ 「ヒ・ダン・コウ・ゲ・ヒキ・ハ」の順で線図をなぞる',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-012',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '同じ引張荷重を受ける丸棒について、その直径を2倍にした場合、棒に生じる引張応力は元の何倍になるか。正しいものはどれか。',
    choices: [
      { key: 'A', text: '2分の1倍', explanation: '断面積は直径の2乗に比例するため 2分の1 ではない。' },
      { key: 'B', text: '4分の1倍', explanation: '断面積が4倍になるので応力は 4分の1 になる。正しい。' },
      { key: 'C', text: '2倍', explanation: '直径を太くすれば応力は下がる。増えるとした時点で誤り。' },
      { key: 'D', text: '4倍', explanation: '断面積の増加と応力の関係を逆に捉えた誤答。' },
    ],
    correctKey: 'B' as const,
    explanation:
      '丸棒の断面積は A＝πd²／4 であり、直径 d を2倍にすると断面積は 2²＝4 倍になる。応力は σ＝W／A で断面積に反比例するから、応力は 4分の1 になる。例えば d＝20 mm（A＝314 mm²）を d＝40 mm（A＝1256 mm²）にすると、同じ荷重で応力は 4分の1 である。\n【図解】計算のしかた\n★式：A＝πd²／4、σ＝W／A（応力は面積に反比例）\n　代入：d→2d で A→4A、よって σ→σ／4\n○答え：4分の1倍\n×よくある誤り：直径2倍＝面積2倍と勘違いしない（2乗で効く）\n→ 「直径n倍なら面積n²倍、応力は1／n²」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-013',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '長さ 2 m の片持ちばりの自由端に、集中荷重 5 kN が鉛直下向きに作用している。固定端に生じる曲げモーメントの大きさとして、正しいものはどれか。はりの自重は無視する。',
    choices: [
      { key: 'A', text: '2.5 kN・m', explanation: 'WL／2 と計算した誤答。片持ちばり先端集中荷重は WL である。' },
      { key: 'B', text: '5 kN・m', explanation: '荷重の値をそのまま答えた誤答。長さを掛ける必要がある。' },
      { key: 'C', text: '1.25 kN・m', explanation: 'WL／4（単純ばり中央集中荷重の式）を用いた誤答。支持条件が異なる。' },
      { key: 'D', text: '10 kN・m', explanation: 'M＝WL＝5×2＝10 kN・m。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      '片持ちばりの自由端に集中荷重が作用する場合、曲げモーメントは固定端で最大となり M＝WL である。M＝5 kN×2 m＝10 kN・m となる。曲げモーメント図は固定端で最大、自由端でゼロの三角形分布になる。\n【図解】計算のしかた\n★式：片持ちばり＋先端集中荷重 → Mmax＝WL（固定端）\n　代入：M＝5 kN×2 m\n○答え：10 kN・m\n×よくある誤り：単純ばりの WL／4 と混同しない\n→ 片持ちは「そのまま WL」、単純ばり中央は「4で割る」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-014',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '長さ 3 m の片持ちばりの全長にわたって、等分布荷重 4 kN/m が作用している。固定端に生じる最大曲げモーメントとして、正しいものはどれか。',
    choices: [
      { key: 'A', text: '6 kN・m', explanation: 'wL²／6 のような誤った係数を用いた誤答。正しい係数は 2分の1 である。' },
      { key: 'B', text: '12 kN・m', explanation: '全荷重 wL＝12 kN をそのままモーメントとした誤答。長さの掛け方が不足している。' },
      { key: 'C', text: '18 kN・m', explanation: 'M＝wL²／2＝4×3²÷2＝18 kN・m。正しい。' },
      { key: 'D', text: '36 kN・m', explanation: 'wL²＝36 と 2 で割り忘れた誤答。' },
    ],
    correctKey: 'C' as const,
    explanation:
      '片持ちばりに等分布荷重が全長に作用する場合、固定端の曲げモーメントは M＝wL²／2 である。M＝4×3²÷2＝4×9÷2＝18 kN・m となる。これは全荷重 wL＝12 kN が重心位置（固定端から 1.5 m）に集中したと考えても 12×1.5＝18 kN・m で一致する。\n【図解】計算のしかた\n★式：片持ちばり＋等分布荷重 → Mmax＝wL²／2\n　代入：M＝4×3²÷2＝4×9÷2\n○答え：18 kN・m\n×よくある誤り：2で割り忘れて36 kN・mとしない\n→ 検算：全荷重wL＝12 kNが中央1.5 mに載ると考えて12×1.5＝18',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-015',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      'スパン 6 m の単純ばりの中央に、集中荷重 8 kN が作用している。このはりに生じる最大曲げモーメントとして、正しいものはどれか。',
    choices: [
      { key: 'A', text: '6 kN・m', explanation: 'WL／8（等分布荷重の式）を用いた誤答。荷重は集中荷重である。' },
      { key: 'B', text: '12 kN・m', explanation: 'M＝WL／4＝8×6÷4＝12 kN・m。正しい。' },
      { key: 'C', text: '24 kN・m', explanation: 'WL／2 とした誤答。単純ばりの中央集中荷重は 4 で割る。' },
      { key: 'D', text: '48 kN・m', explanation: 'WL＝48 と割り算を忘れた誤答。片持ちばりの式と混同している。' },
    ],
    correctKey: 'B' as const,
    explanation:
      '単純ばりの中央に集中荷重が作用する場合、最大曲げモーメントは中央に生じ M＝WL／4 である。M＝8 kN×6 m÷4＝12 kN・m となる。左右の支点反力はそれぞれ 4 kN で、中央でのモーメントは 4×3＝12 kN・m と検算できる。\n【図解】計算のしかた\n★式：単純ばり＋中央集中荷重 → Mmax＝WL／4\n　代入：M＝8×6÷4\n○答え：12 kN・m（中央位置）\n×よくある誤り：等分布の WL²／8 と混同しない\n→ 検算：反力4 kN×半スパン3 m＝12 kN・m',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-016',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      'スパン 4 m の単純ばりの全長にわたって、等分布荷重 2 kN/m が作用している。最大曲げモーメントとして、正しいものはどれか。',
    choices: [
      { key: 'A', text: '4 kN・m', explanation: 'M＝wL²／8＝2×4²÷8＝4 kN・m。正しい。' },
      { key: 'B', text: '8 kN・m', explanation: 'wL²／4 とした誤答。単純ばりの等分布荷重は 8 で割る。' },
      { key: 'C', text: '16 kN・m', explanation: 'wL²／2（片持ちばりの式）を用いた誤答。' },
      { key: 'D', text: '2 kN・m', explanation: '係数を 16 として計算した誤答。正しい係数は 8 分の1 である。' },
    ],
    correctKey: 'A' as const,
    explanation:
      '単純ばりに等分布荷重が全長に作用する場合、最大曲げモーメントは中央に生じ M＝wL²／8 である。M＝2×4²÷8＝2×16÷8＝4 kN・m となる。支点反力は左右とも wL／2＝4 kN である。\n【図解】計算のしかた\n★式：単純ばり＋等分布荷重 → Mmax＝wL²／8\n　代入：M＝2×4²÷8＝32÷8\n○答え：4 kN・m（中央位置）\n×よくある誤り：片持ちばりの wL²／2 と混同しない\n→ 係数の暗記：片持ち集中WL／片持ち等分布wL²/2／単純中央WL/4／単純等分布wL²/8',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-017',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      'スパン 6 m の単純ばりがあり、左支点Aから 2 m の位置に集中荷重 9 kN が作用している。支点Aに生じる反力の大きさとして、正しいものはどれか。',
    choices: [
      { key: 'A', text: '6 kN', explanation: 'B点まわりのモーメントより RA×6＝9×4、RA＝6 kN。正しい。' },
      { key: 'B', text: '3 kN', explanation: '支点Bの反力の値である。荷重に近い側の反力のほうが大きくなる。' },
      { key: 'C', text: '4.5 kN', explanation: '荷重を単純に2等分した誤答。荷重位置が中央でないため等分にはならない。' },
      { key: 'D', text: '9 kN', explanation: '荷重の全量である。2つの支点で分担するので片方が全量を負担することはない。' },
    ],
    correctKey: 'A' as const,
    explanation:
      '支点Bまわりのモーメントのつり合いをとる。荷重はB点から 6－2＝4 m の位置にあるので、RA×6＝9×4＝36、よって RA＝6 kN である。鉛直方向のつり合いから RB＝9－6＝3 kN となる。荷重に近い支点ほど大きな反力を負担する。\n【図解】計算のしかた\n★式：RA＝W×b／L（bは反対側支点から荷重までの距離）\n　代入：RA＝9×4÷6＝6 kN、RB＝9－6＝3 kN\n○答え：RA＝6 kN\n×よくある誤り：距離の取り方を逆にして3 kNとしない\n→ 「荷重に近い支点ほど反力は大きい」で答えの妥当性を確認',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-018',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '長さ 3 m の片持ちばりの全長にわたって、等分布荷重 4 kN/m が作用している。このはりに生じる最大せん断力として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '4 kN', explanation: '単位長さ当たりの荷重の値であり、全長分の合計になっていない。' },
      { key: 'B', text: '6 kN', explanation: 'wL／2 とした誤答。単純ばりの支点反力と混同している。' },
      { key: 'C', text: '12 kN', explanation: 'Fmax＝wL＝4×3＝12 kN（固定端）。正しい。' },
      { key: 'D', text: '18 kN', explanation: 'wL²／2＝18 で、これは曲げモーメント（kN・m）の値である。' },
    ],
    correctKey: 'C' as const,
    explanation:
      '片持ちばりでは、固定端が全荷重を支えるためせん断力は固定端で最大となる。全荷重は w×L＝4 kN/m×3 m＝12 kN であり、これがそのまま最大せん断力である。自由端ではせん断力はゼロで、固定端に向かって直線的に増加する。\n【図解】計算のしかた\n★式：片持ちばり＋等分布荷重 → Fmax＝wL（固定端）\n　代入：F＝4 kN/m×3 m\n○答え：12 kN\n×よくある誤り：18（＝wL²／2）はモーメントで単位が kN・m、混同しない\n→ せん断力の単位は kN、曲げモーメントは kN・m で見分ける',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-019',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '重さ 500 N の物体を、鉛直上方に 3 m 持ち上げた。このときになされた仕事の大きさとして、正しいものはどれか。',
    choices: [
      { key: 'A', text: '500 J', explanation: '力の大きさをそのまま答えた誤答。距離を掛ける必要がある。' },
      { key: 'B', text: '1500 J', explanation: 'W＝F×s＝500 N×3 m＝1500 J。正しい。' },
      { key: 'C', text: '167 J', explanation: '500÷3 と割った誤答。仕事は力と距離の積である。' },
      { key: 'D', text: '4900 J', explanation: '重さ 500 N をさらに質量とみなして 9.8 を掛けた誤答。N はすでに力の単位である。' },
    ],
    correctKey: 'B' as const,
    explanation:
      '仕事は力と、力の向きに移動した距離の積である。W＝F×s＝500 N×3 m＝1500 N・m＝1500 J となる。物体の重さがすでに N（力の単位）で与えられているので、重力加速度を重ねて掛けてはならない。\n【図解】計算のしかた\n★式：W＝F×s（仕事＝力×距離）\n　代入：W＝500 N×3 m＝1500 N・m\n○答え：1500 J\n×よくある誤り：N で与えられた重さにさらに9.8を掛けない\n→ 1 J＝1 N・m。質量[kg]なら×9.8で力[N]に直してから使う',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-020',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '重さ 500 N の物体を鉛直上方に 3 m 持ち上げるのに 5 秒を要した。このときの仕事率として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '75 W', explanation: '仕事と時間の関係を取り違えた誤答。1500÷5＝300 である。' },
      { key: 'B', text: '7500 W', explanation: '仕事に時間を掛けた誤答。仕事率は仕事を時間で割る。' },
      { key: 'C', text: '100 W', explanation: '500÷5 と力だけを時間で割った誤答。距離を掛けていない。' },
      { key: 'D', text: '300 W', explanation: 'P＝W／t＝1500 J÷5 s＝300 W。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      '仕事率は単位時間当たりの仕事である。まず仕事を求めると W＝500 N×3 m＝1500 J、これを所要時間 5 s で割ると P＝1500÷5＝300 W となる。1 W＝1 J/s であり、同じ仕事でも短時間で行うほど仕事率は大きい。\n【図解】計算のしかた\n★式：P＝W／t＝F×s／t（＝F×v）\n　代入：W＝500×3＝1500 J、P＝1500÷5\n○答え：300 W\n×よくある誤り：仕事×時間としない。割り算である\n→ 1 W＝1 J/s。P＝F×v（速度形）でも 500×0.6＝300 Wと検算できる',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-021',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '定滑車1個と動滑車2個を組み合わせた滑車装置で、重さ 800 N の荷物をつり上げる。ロープを引く力として正しいものはどれか。ただし滑車とロープの重さおよび摩擦は無視する。',
    choices: [
      { key: 'A', text: '800 N', explanation: '定滑車だけを使った場合の値。動滑車を用いれば力は小さくなる。' },
      { key: 'B', text: '400 N', explanation: '動滑車1個の場合の値である。動滑車は2個使用している。' },
      { key: 'C', text: '200 N', explanation: '動滑車2個なので 800÷2²＝200 N。正しい。' },
      { key: 'D', text: '100 N', explanation: '動滑車3個の場合の値。個数を1つ多く数えた誤答。' },
    ],
    correctKey: 'C' as const,
    explanation:
      '動滑車を1個使うごとに必要な引く力は2分の1になる。動滑車が n 個であれば F＝W／2ⁿ である。n＝2 なので F＝800÷2²＝800÷4＝200 N となる。ただし力が 4分の1 になる代わりに、引くロープの長さは4倍必要であり、仕事の総量は変わらない（仕事の原理）。\n【図解】計算のしかた\n★式：F＝W／2ⁿ（nは動滑車の個数、定滑車は向きを変えるだけ）\n　代入：F＝800÷2²＝800÷4\n○答え：200 N（引く長さは荷の4倍必要）\n×よくある誤り：定滑車を数に入れない。定滑車は力を減らさない\n→ 仕事の原理「力が1／nなら距離はn倍」で必ず検算',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-022',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '質量 20 kg の物体を、基準面から高さ 5 m の位置に置いた。この物体がもつ位置エネルギーとして正しいものはどれか。ただし重力加速度を 9.8 m/s² とする。',
    choices: [
      { key: 'A', text: '980 J', explanation: 'E＝mgh＝20×9.8×5＝980 J。正しい。' },
      { key: 'B', text: '98 J', explanation: '高さを掛け忘れ、あるいは桁を1つ落とした誤答。' },
      { key: 'C', text: '100 J', explanation: '質量×高さ＝100 として重力加速度を掛け忘れた誤答。' },
      { key: 'D', text: '1960 J', explanation: '高さを 10 m とした場合の値であり、条件と合わない。' },
    ],
    correctKey: 'A' as const,
    explanation:
      '位置エネルギーは E＝mgh で求める。E＝20 kg×9.8 m/s²×5 m＝980 J となる。質量 20 kg の物体に働く重力（重さ）は 20×9.8＝196 N であり、これを 5 m 持ち上げる仕事 196×5＝980 J と一致する。\n【図解】計算のしかた\n★式：E＝mgh（位置エネルギー）\n　代入：E＝20×9.8×5＝196 N×5 m\n○答え：980 J\n×よくある誤り：g＝9.8 を掛け忘れて100 Jとしない\n→ 「重さ[N]＝質量×9.8」を先に出してから高さを掛けると間違えにくい',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-023',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '質量 2000 kg の車両が、速さ 10 m/s で走行している。この車両がもつ運動エネルギーとして正しいものはどれか。',
    choices: [
      { key: 'A', text: '20 kJ', explanation: 'mv＝20000 と質量×速度で求めた誤答。これは運動量である。' },
      { key: 'B', text: '100 kJ', explanation: 'E＝½mv²＝0.5×2000×10²＝100000 J＝100 kJ。正しい。' },
      { key: 'C', text: '200 kJ', explanation: 'mv²＝200000 と 2 で割り忘れた誤答。' },
      { key: 'D', text: '10 kJ', explanation: '速度を2乗せずに計算した誤答。運動エネルギーは速度の2乗に比例する。' },
    ],
    correctKey: 'B' as const,
    explanation:
      '運動エネルギーは E＝½mv² で求める。E＝0.5×2000 kg×(10 m/s)²＝0.5×2000×100＝100000 J＝100 kJ となる。速度の2乗に比例するため、速度が2倍になればエネルギーは4倍になる点が重要である。\n【図解】計算のしかた\n★式：E＝½mv²（運動エネルギー）\n　代入：E＝0.5×2000×10²＝0.5×2000×100\n○答え：100 kJ（＝1×10⁵ J）\n×よくある誤り：½を忘れて200 kJ、または運動量 mv と混同しない\n→ 速度2倍でエネルギーは4倍（2乗で効く）',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-024',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '水平な床の上に置かれた質量 50 kg の物体を、水平方向に滑らせようとしている。床と物体の間の静止摩擦係数を 0.3、重力加速度を 9.8 m/s² とするとき、滑り始める直前の最大静止摩擦力として正しいものはどれか。',
    choices: [
      { key: 'A', text: '15 N', explanation: '質量に摩擦係数を掛けただけの誤答。重力加速度を掛けて力[N]に直す必要がある。' },
      { key: 'B', text: '490 N', explanation: '垂直抗力そのものの値である。これに摩擦係数を掛けなければならない。' },
      { key: 'C', text: '1470 N', explanation: '摩擦係数で割った誤答。摩擦力は垂直抗力より小さくなる（μ＜1のとき）。' },
      { key: 'D', text: '147 N', explanation: 'F＝μN＝0.3×(50×9.8)＝0.3×490＝147 N。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      '水平面上では垂直抗力 N は物体の重さに等しく、N＝mg＝50×9.8＝490 N である。最大静止摩擦力は F＝μN＝0.3×490＝147 N となる。摩擦力は接触面積の大小には関係せず、垂直抗力と摩擦係数だけで決まる点が重要である。\n【図解】計算のしかた\n★式：F＝μN、水平面では N＝mg\n　代入：N＝50×9.8＝490 N、F＝0.3×490\n○答え：147 N\n×よくある誤り：質量[kg]のまま μ を掛けて15 Nとしない\n→ 摩擦力は接触面積に無関係、垂直抗力に比例する',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-025',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '水平面から 30° 傾いたなめらかな斜面上に、質量 100 kg の物体がある。この物体が滑り落ちないよう斜面に沿って支えるために必要な力として、最も近いものはどれか。重力加速度を 9.8 m/s²、摩擦は無視する。',
    choices: [
      { key: 'A', text: '980 N', explanation: '物体の重さそのもの。斜面上ではこれより小さい力で支えられる。' },
      { key: 'B', text: '849 N', explanation: 'mg cos30°＝849 N であり、これは斜面に垂直な成分（垂直抗力）である。' },
      { key: 'C', text: '196 N', explanation: 'tan の値などを誤って用いた誤答。摩擦がないので tan は使わない。' },
      { key: 'D', text: '490 N', explanation: 'F＝mg sin30°＝980×0.5＝490 N。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      '斜面上の物体の重力 mg＝100×9.8＝980 N は、斜面に平行な成分 mg sin θ と、斜面に垂直な成分 mg cos θ に分解できる。滑り落ちようとするのは平行成分なので、必要な支持力は F＝980×sin30°＝980×0.5＝490 N である。角度が大きいほど必要な力は大きくなる。\n【図解】計算のしかた\n★式：斜面平行成分＝mg sin θ、垂直成分＝mg cos θ\n　代入：F＝100×9.8×sin30°＝980×0.5\n○答え：490 N（重さのちょうど半分）\n×よくある誤り：cos を使って849 Nとしない（それは垂直抗力）\n→ 「滑る方向＝サイン、押しつける方向＝コサイン」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-026',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '水平面に置いた物体を、面を徐々に傾けていったところ、傾斜角が 30° になった瞬間に物体が滑り始めた。この面と物体の間の静止摩擦係数として、最も近いものはどれか。',
    choices: [
      { key: 'A', text: '0.87', explanation: 'cos30°＝0.866 の値である。摩擦係数は tan で求める。' },
      { key: 'B', text: '0.50', explanation: 'sin30°＝0.5 の値である。sin だけでは摩擦係数にならない。' },
      { key: 'C', text: '0.58', explanation: 'μ＝tan30°＝0.577。正しい。' },
      { key: 'D', text: '1.73', explanation: 'tan60°＝1.73 の値であり、角度の取り方を誤っている。' },
    ],
    correctKey: 'C' as const,
    explanation:
      '物体が滑り出す直前では、斜面に沿う重力成分 mg sin θ と最大静止摩擦力 μmg cos θ がつり合う。mg sin θ＝μmg cos θ より μ＝tan θ となる。この角度を摩擦角という。μ＝tan30°＝0.577 である。\n【図解】計算のしかた\n★式：mg sinθ＝μ mg cosθ → μ＝tanθ（摩擦角）\n　代入：μ＝tan30°＝0.5773\n○答え：約0.58\n×よくある誤り：sin30°＝0.5 や cos30°＝0.87 をそのまま答えない\n→ 「滑り出す角度のタンジェント＝摩擦係数」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-027',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '密閉された油圧装置において、断面積 10 cm² の小ピストンに 100 N の力を加えた。断面積 200 cm² の大ピストンに生じる力として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '2000 N', explanation: '圧力 10 N/cm² が全体に伝わり、200 cm²×10＝2000 N。正しい。' },
      { key: 'B', text: '1000 N', explanation: '面積比を 10 倍ではなく 10 分の1 のように誤って扱った誤答。' },
      { key: 'C', text: '200 N', explanation: '断面積の数値をそのまま力とした誤答。圧力を経由して計算する。' },
      { key: 'D', text: '5 N', explanation: '面積比を逆にとった誤答。大ピストン側の力は必ず大きくなる。' },
    ],
    correctKey: 'A' as const,
    explanation:
      'パスカルの原理により、密閉流体に加えた圧力は流体のあらゆる部分に同じ大きさで伝わる。小ピストン側の圧力は p＝F／A＝100 N÷10 cm²＝10 N/cm² であり、大ピストンにはこの圧力が作用するので F＝p×A＝10×200＝2000 N となる。面積比 20 倍だけ力が拡大される。\n【図解】計算のしかた\n★式：p＝F₁／A₁＝F₂／A₂（パスカルの原理）\n　代入：p＝100÷10＝10 N/cm²、F₂＝10×200\n○答え：2000 N（面積比20倍）\n×よくある誤り：面積比を逆にして小さくしない\n→ 力は面積比倍になるが、押し込む距離は逆に1／20になる',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-028',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '水槽の水面から深さ 20 m の位置における水圧（ゲージ圧）として、最も近いものはどれか。ただし水の密度を 1000 kg/m³、重力加速度を 9.8 m/s² とする。',
    choices: [
      { key: 'A', text: '約 0.02 MPa', explanation: '桁を1つ落とした誤答。水深10 mで約0.098 MPa である。' },
      { key: 'B', text: '約 0.196 MPa', explanation: 'p＝ρgh＝1000×9.8×20＝196000 Pa＝0.196 MPa。正しい。' },
      { key: 'C', text: '約 1.96 MPa', explanation: '桁を1つ多く取った誤答。水深20 mで2 MPa近くにはならない。' },
      { key: 'D', text: '約 19.6 MPa', explanation: '桁を2つ多く取った誤答。単位換算 1 MPa＝10⁶ Pa を確認する。' },
    ],
    correctKey: 'B' as const,
    explanation:
      '静止した液体中の圧力は p＝ρgh で求める。p＝1000 kg/m³×9.8 m/s²×20 m＝196000 Pa＝0.196 MPa である。実務的には「水頭 10 m ＝ 約 0.098 MPa（約 0.1 MPa）」と覚えておくと、20 m なら約 0.2 MPa と暗算で確認できる。\n【図解】計算のしかた\n★式：p＝ρgh（水圧＝密度×重力加速度×水深）\n　代入：p＝1000×9.8×20＝196000 Pa\n○答え：約0.196 MPa\n×よくある誤り：Pa と MPa の換算（10⁶）を間違えない\n→ 水頭10 m ≒ 0.1 MPa、を基準に桁を検算する',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-029',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      'ある配管内の水圧が 0.5 MPa であった。この圧力を水頭（水柱の高さ）に換算した値として、最も近いものはどれか。ただし水の密度を 1000 kg/m³、重力加速度を 9.8 m/s² とする。',
    choices: [
      { key: 'A', text: '約 5.1 m', explanation: '桁を1つ落とした誤答。0.1 MPa が約10 m である。' },
      { key: 'B', text: '約 51 m', explanation: 'h＝p／(ρg)＝500000÷9800＝51.0 m。正しい。' },
      { key: 'C', text: '約 0.51 m', explanation: '桁を2つ落とした誤答。単位換算を確認する。' },
      { key: 'D', text: '約 510 m', explanation: '桁を1つ多く取った誤答。0.5 MPa は約50 m 水柱である。' },
    ],
    correctKey: 'B' as const,
    explanation:
      'p＝ρgh を h について解くと h＝p／(ρg) である。0.5 MPa＝500000 Pa なので h＝500000÷(1000×9.8)＝500000÷9800＝51.0 m となる。消防用設備では「0.1 MPa ≒ 10 m 水柱」の換算を頻繁に使う。\n【図解】計算のしかた\n★式：h＝p／(ρg)（圧力→水頭の換算）\n　代入：h＝500000 Pa ÷ (1000×9.8)＝500000÷9800\n○答え：約51 m\n×よくある誤り：MPa を Pa に直さずに計算しない\n→ 覚え方「0.1 MPa ＝ 約10 m水柱」→0.5 MPaなら約50 m',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-030',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '内径 100 mm の管を流速 2 m/s で水が流れている。この管が内径 50 mm に絞られたとき、絞られた部分の流速として正しいものはどれか。',
    choices: [
      { key: 'A', text: '8 m/s', explanation: '連続の式より v₂＝v₁×(d₁／d₂)²＝2×(100／50)²＝8 m/s。正しい。' },
      { key: 'B', text: '4 m/s', explanation: '内径比 2 倍をそのまま掛けた誤答。断面積は内径の2乗に比例する。' },
      { key: 'C', text: '1 m/s', explanation: '内径が小さくなると流速は速くなる。遅くなるとした時点で誤り。' },
      { key: 'D', text: '0.5 m/s', explanation: '面積比を逆にとった誤答。細い管ほど流速は大きくなる。' },
    ],
    correctKey: 'A' as const,
    explanation:
      '非圧縮性流体の連続の式 A₁v₁＝A₂v₂ が成り立つ。断面積は内径の2乗に比例するので、内径が 2分の1 になれば断面積は 4分の1 になり、流速は 4 倍になる。v₂＝2×(100／50)²＝2×4＝8 m/s である。\n【図解】計算のしかた\n★式：A₁v₁＝A₂v₂ → v₂＝v₁(d₁／d₂)²\n　代入：v₂＝2×(100／50)²＝2×4\n○答え：8 m/s\n×よくある誤り：内径比をそのまま掛けて4 m/sとしない（2乗で効く）\n→ 「細くなれば速くなる」＋「面積は直径の2乗」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-031',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '内径 100 mm の管内を、平均流速 2 m/s で水が流れている。この管の流量として最も近いものはどれか。ただし円周率は3.14とする。',
    choices: [
      { key: 'A', text: '約 157 L/min', explanation: '断面積の計算で 4 で割り忘れるなど、面積を誤った誤答。' },
      { key: 'B', text: '約 471 L/min', explanation: '断面積を半分に見積もった誤答。正しい断面積は 7.85×10⁻³ m² である。' },
      { key: 'C', text: '約 942 L/min', explanation: 'Q＝Av＝7.85×10⁻³×2＝0.0157 m³/s＝942 L/min。正しい。' },
      { key: 'D', text: '約 1884 L/min', explanation: '断面積を2倍に見積もった誤答。または直径で計算している。' },
    ],
    correctKey: 'C' as const,
    explanation:
      '管の断面積は A＝πd²／4＝3.14×0.1²÷4＝3.14×0.01÷4＝7.85×10⁻³ m² である。流量は Q＝A×v＝7.85×10⁻³×2＝0.0157 m³/s となる。1 m³＝1000 L、1 分＝60 秒なので 0.0157×1000×60＝942 L/min である。\n【図解】計算のしかた\n★式：Q＝A×v、A＝πd²／4\n　代入：A＝3.14×0.1²÷4＝0.00785 m²、Q＝0.00785×2＝0.0157 m³/s\n○答え：約942 L/min（＝0.0157 m³/s）\n×よくある誤り：mm と m の混在、m³/s→L/min は×60000\n→ 「m³/s に 60000 を掛ければ L/min」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-032',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      'ベルヌーイの定理における速度水頭について、流速が 14 m/s のときの速度水頭として最も近いものはどれか。ただし重力加速度を 9.8 m/s² とする。',
    choices: [
      { key: 'A', text: '約 1.43 m', explanation: 'v／g＝14÷9.8 と計算した誤答。速度は2乗する。' },
      { key: 'B', text: '約 0.71 m', explanation: 'v／2g＝14÷19.6 と計算した誤答。分子は v² である。' },
      { key: 'C', text: '約 20 m', explanation: 'v²／g＝196÷9.8＝20 で、2 で割り忘れた誤答。' },
      { key: 'D', text: '約 10 m', explanation: 'v²／2g＝14²÷(2×9.8)＝196÷19.6＝10 m。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      'ベルヌーイの定理は「位置水頭 z ＋ 圧力水頭 p／ρg ＋ 速度水頭 v²／2g ＝一定」と表される。速度水頭は v²／2g で計算し、14²÷(2×9.8)＝196÷19.6＝10 m となる。速度が2倍になれば速度水頭は4倍になる。\n【図解】計算のしかた\n★式：全水頭＝z＋p／ρg＋v²／2g（ベルヌーイ）\n　代入：速度水頭＝14²÷(2×9.8)＝196÷19.6\n○答え：10 m\n×よくある誤り：分母の 2 を忘れて20 mとしない\n→ 3つの水頭（位置・圧力・速度）はすべて m の単位でそろう',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-033',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '大きな水槽の側面下部に小孔をあけたところ、水面から小孔までの深さは 5 m であった。小孔から噴出する水の理論流速として、最も近いものはどれか。ただし重力加速度を 9.8 m/s²、損失は無視する。',
    choices: [
      { key: 'A', text: '約 9.9 m/s', explanation: 'v＝√(2gh)＝√(2×9.8×5)＝√98＝9.9 m/s。正しい。' },
      { key: 'B', text: '約 98 m/s', explanation: '平方根を取り忘れた誤答。98 は v² の値である。' },
      { key: 'C', text: '約 49 m/s', explanation: 'gh＝49 をそのまま流速とした誤答。2倍して平方根を取る。' },
      { key: 'D', text: '約 4.95 m/s', explanation: '√(gh)／… のように 2 を落とした誤答。正しくは 2gh の平方根である。' },
    ],
    correctKey: 'A' as const,
    explanation:
      'トリチェリの定理により、水頭 h の小孔からの理論流速は v＝√(2gh) である。v＝√(2×9.8×5)＝√98＝9.90 m/s となる。これはベルヌーイの定理で圧力水頭がすべて速度水頭に変換された状態（v²／2g＝h）に相当する。\n【図解】計算のしかた\n★式：v＝√(2gh)（トリチェリの定理）\n　代入：v＝√(2×9.8×5)＝√98\n○答え：約9.9 m/s\n×よくある誤り：平方根を取り忘れて98としない\n→ v²／2g＝h の裏返し。水頭が4倍で流速は2倍',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-034',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '内径 0.1 m、長さ 100 m の直管内を、平均流速 2 m/s で水が流れている。管摩擦係数を 0.03、重力加速度を 9.8 m/s² とするとき、ダルシー・ワイスバッハの式による管摩擦損失水頭として最も近いものはどれか。',
    choices: [
      { key: 'A', text: '約 0.61 m', explanation: '桁を1つ落とした誤答。L／d＝1000 の計算を確認する。' },
      { key: 'B', text: '約 61.2 m', explanation: '桁を1つ多く取った誤答。速度水頭は 0.204 m である。' },
      { key: 'C', text: '約 3.06 m', explanation: '速度水頭の分母を 2 でなく 4 とするなど、係数を誤った誤答。' },
      { key: 'D', text: '約 6.12 m', explanation: 'h＝λ(L／d)(v²／2g)＝0.03×1000×0.204＝6.12 m。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      'ダルシー・ワイスバッハの式は h＝λ×(L／d)×(v²／2g) である。L／d＝100÷0.1＝1000、v²／2g＝2²÷19.6＝0.204 m なので、h＝0.03×1000×0.204＝6.12 m となる。損失水頭は流速の2乗、管長に比例し、内径に反比例する。\n【図解】計算のしかた\n★式：h＝λ×(L／d)×(v²／2g)\n　代入：h＝0.03×(100／0.1)×(2²／19.6)＝0.03×1000×0.204\n○答え：約6.12 m\n×よくある誤り：L／d の単位をそろえ忘れない（両方 m）\n→ 損失は「流速の2乗に比例、管径に反比例」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-035',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      'ポンプの実揚程が 30 m、配管等の全損失水頭が 8 m、ノズル先端に必要な放水圧力を水頭に換算した値が 17 m である消火ポンプがある。このポンプに必要な全揚程として正しいものはどれか。',
    choices: [
      { key: 'A', text: '38 m', explanation: '放水圧力換算水頭を加え忘れた誤答。3項すべてを合計する。' },
      { key: 'B', text: '47 m', explanation: '損失水頭を加え忘れた誤答。30＋17 だけになっている。' },
      { key: 'C', text: '55 m', explanation: 'H＝30＋8＋17＝55 m。正しい。' },
      { key: 'D', text: '30 m', explanation: '実揚程のみの値。損失と放水圧力分を見込む必要がある。' },
    ],
    correctKey: 'C' as const,
    explanation:
      '消火ポンプの全揚程は「実揚程＋配管等の損失水頭＋ノズル放水圧力に相当する水頭」で求める。H＝30＋8＋17＝55 m となる。実揚程は吸水面から放水口までの高低差であり、これに管内摩擦や曲がりの損失、必要放水圧力分を加算する。\n【図解】計算のしかた\n★式：全揚程 H＝実揚程＋損失水頭＋放水圧力換算水頭\n　代入：H＝30＋8＋17\n○答え：55 m\n×よくある誤り：放水圧力分（ノズル圧）の加算を忘れない\n→ 0.17 MPa ≒ 17 m。MPa は×100 で概算 m に直せる',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-036',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '吐出量 2.4 m³/min、全揚程 50 m のポンプがある。ポンプ効率を 0.6 とするとき、必要な軸動力として最も近いものはどれか。ただし軸動力[kW]＝0.163×Q[m³/min]×H[m]／η とする。',
    choices: [
      { key: 'A', text: '約 19.6 kW', explanation: '効率で割る操作を忘れた誤答。これは水動力に相当する。' },
      { key: 'B', text: '約 32.6 kW', explanation: '0.163×2.4×50÷0.6＝19.56÷0.6＝32.6 kW。正しい。' },
      { key: 'C', text: '約 11.7 kW', explanation: '効率を掛けてしまった誤答。効率が悪いほど軸動力は大きくなる。' },
      { key: 'D', text: '約 65.2 kW', explanation: '効率を 0.3 として計算した誤答。条件では 0.6 である。' },
    ],
    correctKey: 'B' as const,
    explanation:
      'ポンプの軸動力は P＝0.163×Q×H／η で求める。P＝0.163×2.4×50÷0.6＝19.56÷0.6＝32.6 kW となる。係数 0.163 は水の密度と重力加速度、単位換算をまとめたもの（1000×9.8÷60÷1000）である。効率が低いほど軸動力は大きくなる。\n【図解】計算のしかた\n★式：P[kW]＝0.163×Q[m³/min]×H[m]／η\n　代入：P＝0.163×2.4×50÷0.6＝19.56÷0.6\n○答え：約32.6 kW\n×よくある誤り：効率を掛けない（割る）。掛けると値が小さくなり不合理\n→ 係数0.163＝1000×9.8÷60000。Qが L/min なら別係数になる',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-037',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '吐出量 0.02 m³/s、全揚程 40 m のポンプの水動力（理論動力）として、最も近いものはどれか。ただし水の密度を 1000 kg/m³、重力加速度を 9.8 m/s² とする。',
    choices: [
      { key: 'A', text: '約 0.784 kW', explanation: '桁を1つ落とした誤答。7840 W は 7.84 kW である。' },
      { key: 'B', text: '約 7.84 kW', explanation: 'P＝ρgQH＝1000×9.8×0.02×40＝7840 W＝7.84 kW。正しい。' },
      { key: 'C', text: '約 78.4 kW', explanation: '桁を1つ多く取った誤答。W→kW は 1000 で割る。' },
      { key: 'D', text: '約 784 kW', explanation: '桁を2つ多く取った誤答。単位換算を確認する。' },
    ],
    correctKey: 'B' as const,
    explanation:
      '水動力（流体に与える理論的な動力）は P＝ρgQH で求める。P＝1000 kg/m³×9.8 m/s²×0.02 m³/s×40 m＝7840 W＝7.84 kW となる。実際の軸動力はこれをポンプ効率で割った値になるので、必ず水動力以上となる。\n【図解】計算のしかた\n★式：水動力 P＝ρgQH（Qは m³/s、Hは m）\n　代入：P＝1000×9.8×0.02×40＝7840 W\n○答え：約7.84 kW\n×よくある誤り：W と kW の換算（1000倍）を間違えない\n→ 軸動力＝水動力÷効率。だから軸動力は必ず水動力より大きい',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-038',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      'ポンプのキャビテーションに関する記述として、誤っているものはどれか。',
    choices: [
      { key: 'A', text: '羽根車入口付近で圧力が飽和蒸気圧以下になると発生する。', explanation: '正しい記述。局部的な圧力低下により水が気化して気泡が生じる。' },
      { key: 'B', text: '発生すると騒音・振動を伴い、羽根車が壊食（エロージョン）することがある。', explanation: '正しい記述。気泡が高圧部で急激に潰れる際の衝撃で金属面が損傷する。' },
      { key: 'C', text: '吸込揚程を小さくし、吸込管の損失を減らすことが防止対策となる。', explanation: '正しい記述。有効吸込ヘッドを大きく保つことが基本的な防止策である。' },
      { key: 'D', text: '水温が低いほど発生しやすくなる。', explanation: '誤り。水温が高いほど飽和蒸気圧が高くなり発生しやすい。これが正解。' },
    ],
    correctKey: 'D' as const,
    explanation:
      'キャビテーションは、ポンプ吸込側や羽根車入口で局部的に圧力がその温度の飽和蒸気圧以下まで下がり、水が気化して気泡を生じる現象である。気泡が高圧部で潰れる際に騒音・振動・壊食を起こす。水温が高いほど飽和蒸気圧が高いため発生しやすく、低温ほど発生しにくい。防止には吸込揚程を小さくする、吸込配管を短く太くする、回転数を上げすぎないなどの対策をとる。\n【図解】計算のしかた\n★式：発生条件＝（吸込側の圧力）≦（その水温の飽和蒸気圧）\n　代入：吸込揚程が大きい・吸込配管損失が大きい・水温が高い＝危険側\n○答え：水温が高いほど発生しやすい\n×よくある誤り：ウォータハンマ（弁急閉による圧力上昇）と混同しない\n→ 対策は「吸込側をやさしく」＝短く・太く・低く・ゆっくり',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-039',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '配管系に生じるウォータハンマ（水撃作用）に関する記述として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '弁を急激に閉じたときなど、流速の急変により管内に異常な圧力上昇が生じる現象である。', explanation: '正しい。運動エネルギーが圧力エネルギーに急変して衝撃圧が発生する。' },
      { key: 'B', text: '管内の流速が小さいほど、生じる圧力上昇は大きくなる。', explanation: '誤り。圧力上昇は流速の変化量に比例するので、流速が大きいほど激しくなる。' },
      { key: 'C', text: '防止のためには、弁をできるだけ速く閉じるとよい。', explanation: '誤り。弁はゆっくり閉じるのが基本的な防止策である。' },
      { key: 'D', text: '空気室（エアチャンバ）を設けると、水撃はかえって増大する。', explanation: '誤り。空気室は圧力変動を吸収して水撃を緩和する装置である。' },
    ],
    correctKey: 'A' as const,
    explanation:
      'ウォータハンマは、弁の急閉やポンプの急停止などで管内の流速が急変したとき、流体の運動エネルギーが圧力エネルギーに変わって異常な圧力上昇（および圧力低下）が伝ぱする現象である。圧力上昇は流速の変化量と管路条件に比例するため、流速が大きいほど激しい。防止策は、弁をゆっくり開閉する、管内流速を抑える、空気室やサージタンク、緩閉形逆止弁を設ける、フライホイールで急停止を防ぐなどである。\n【図解】計算のしかた\n★式：圧力上昇 Δp ∝ ρ×(圧力波速度)×(流速変化Δv)\n　代入：Δv が大きい（急閉）ほど Δp は大きい\n○答え：流速の急変による異常圧力上昇\n×よくある誤り：キャビテーション（圧力低下で気泡）と方向が逆\n→ 対策は「ゆっくり閉じる・流速を下げる・空気室で吸収」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-040',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '回転速度 1500 min⁻¹ のとき全揚程 40 m を示す遠心ポンプがある。回転速度を 1800 min⁻¹ に変更したときの全揚程として、最も近いものはどれか。ただし相似則が成り立つものとする。',
    choices: [
      { key: 'A', text: '約 48 m', explanation: '回転数比 1.2 をそのまま掛けた誤答。揚程は回転数の2乗に比例する。' },
      { key: 'B', text: '約 40 m', explanation: '回転数を変えても揚程が変わらないとした誤答。相似則により変化する。' },
      { key: 'C', text: '約 57.6 m', explanation: 'H₂＝40×(1800／1500)²＝40×1.44＝57.6 m。正しい。' },
      { key: 'D', text: '約 69.1 m', explanation: '回転数比の3乗（1.728倍）を用いた誤答。3乗に比例するのは軸動力である。' },
    ],
    correctKey: 'C' as const,
    explanation:
      'ポンプの相似則では、吐出量は回転数に比例、全揚程は回転数の2乗に比例、軸動力は回転数の3乗に比例する。回転数比は 1800÷1500＝1.2 なので、揚程は 40×1.2²＝40×1.44＝57.6 m となる。なお吐出量は 1.2 倍、軸動力は 1.728 倍になる。\n【図解】計算のしかた\n★式：Q∝N、H∝N²、P∝N³（ポンプの相似則）\n　代入：N比＝1800／1500＝1.2、H＝40×1.2²＝40×1.44\n○答え：約57.6 m（Qは1.2倍、Pは1.728倍）\n×よくある誤り：揚程を1乗、動力を2乗としない\n→ 「量は1乗・揚程は2乗・動力は3乗」と順に増える',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-041',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '炭素鋼における炭素含有量と機械的性質の関係について、正しいものはどれか。',
    choices: [
      { key: 'A', text: '炭素量が増すほど、伸びとじん性はともに増大する。', explanation: '誤り。炭素量が増すと伸び・じん性は低下し、もろくなる。' },
      { key: 'B', text: '炭素量が増すほど、硬さは低下する。', explanation: '誤り。炭素量が増すほど硬さは増す。' },
      { key: 'C', text: '炭素量は機械的性質にほとんど影響しない。', explanation: '誤り。炭素量は炭素鋼の性質を決める最も重要な要素である。' },
      { key: 'D', text: '炭素量が増すほど引張強さと硬さは増すが、伸びとじん性は低下する。', explanation: '正しい。ただし引張強さは約0.8%付近を超えると低下に転じる。' },
    ],
    correctKey: 'D' as const,
    explanation:
      '炭素鋼は炭素量が増すほど硬く強くなる一方、伸び・絞り・じん性が低下してもろくなり、溶接性も悪くなる。引張強さは共析組成（炭素約0.8%）付近まで増加し、それを超えると低下する。一般構造用圧延鋼材（SS400）などの軟鋼は炭素量が少なく、加工性・溶接性に優れる。\n【図解】計算のしかた\n★式：炭素量↑ ⇒ 硬さ・引張強さ↑／伸び・じん性・溶接性↓\n　代入：軟鋼（C少）＝ねばい・溶接しやすい／高炭素鋼＝硬い・もろい\n○答え：強さ硬さは増し、伸びとじん性は低下\n×よくある誤り：引張強さが際限なく増えるとしない（約0.8%で頭打ち）\n→ 「硬くなるほどねばりを失う」がすべての金属に共通する感覚',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-042',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '鋼の熱処理のうち「焼入れ」の説明として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '加熱後に炉内で徐々に冷却し、内部応力を除去して軟らかくする。', explanation: '焼なましの説明である。焼入れは急冷する。' },
      { key: 'B', text: 'オーステナイト化する温度まで加熱した後、水や油で急冷して硬さを高める。', explanation: '正しい。マルテンサイト組織が生成して硬くなる。' },
      { key: 'C', text: '焼入れ後に再加熱して、じん性を回復させる。', explanation: '焼戻しの説明である。焼入れの直後に行う別の処理である。' },
      { key: 'D', text: '加熱後に大気中で放冷し、組織を均一微細にする。', explanation: '焼ならしの説明である。冷却方法が異なる。' },
    ],
    correctKey: 'B' as const,
    explanation:
      '焼入れは、鋼をオーステナイト化する温度（一般に A₃ または A₁ 変態点以上）に加熱し、水や油で急冷する処理である。硬いマルテンサイト組織が生じて硬さ・耐摩耗性が向上するが、同時にもろくなり内部応力が残るため、通常は焼入れ後に焼戻しを行う。\n【図解】計算のしかた\n★式：焼入れ＝高温加熱＋急冷（水・油）→ 硬くなるがもろい\n　代入：加熱→水冷／油冷→マルテンサイト生成\n○答え：急冷して硬さを高める処理\n×よくある誤り：焼なまし（炉冷）・焼ならし（空冷）と冷却方法で区別する\n→ 冷却速度：焼入れ（急冷）＞焼ならし（空冷）＞焼なまし（炉冷）',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-043',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '鋼の熱処理に関する記述の組合せとして、正しいものはどれか。',
    choices: [
      { key: 'A', text: '焼なましは炉内で徐冷して軟化させ、焼ならしは大気中で放冷して組織を均一微細にする。', explanation: '正しい。冷却方法（炉冷と空冷）と目的の対応が正確である。' },
      { key: 'B', text: '焼戻しは焼入れ前に行い、あらかじめ硬さを高める処理である。', explanation: '誤り。焼戻しは焼入れ後に行い、じん性を回復させる処理である。' },
      { key: 'C', text: '焼ならしは水中で急冷するため、焼入れより硬さが高くなる。', explanation: '誤り。焼ならしは空冷であり、焼入れより硬さは低い。' },
      { key: 'D', text: '焼なましは急冷により硬さを高める処理である。', explanation: '誤り。焼なましは徐冷により軟化させる処理である。' },
    ],
    correctKey: 'A' as const,
    explanation:
      '4つの基本熱処理は冷却方法で整理すると覚えやすい。焼入れは水・油で急冷して硬化、焼戻しは焼入れ後に低〜中温で再加熱してじん性を回復、焼なまし（焼鈍）は炉内で徐冷して軟化と内部応力除去、焼ならし（焼準）は大気中で放冷して組織を均一微細にし機械的性質を整える。\n【図解】計算のしかた\n★式：焼入れ＝急冷／焼戻し＝焼入れ後の再加熱／焼なまし＝炉冷／焼ならし＝空冷\n　代入：硬くしたい→焼入れ、ねばりを戻す→焼戻し、軟らかく→焼なまし、整える→焼ならし\n○答え：焼なましは炉冷で軟化、焼ならしは空冷で均一微細化\n×よくある誤り：焼戻しを焼入れの前に行うとしない（必ず後）\n→ 「入れて・戻す」「なまして・ならす」の4語をセットで暗記',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-044',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      'ねずみ鋳鉄の性質に関する記述として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '引張りに強く、展性・延性に富むため板材に加工しやすい。', explanation: '誤り。鋳鉄は引張りに弱く、展延性に乏しい。' },
      { key: 'B', text: '炭素含有量は 0.3% 程度で、軟鋼とほぼ同じである。', explanation: '誤り。鋳鉄の炭素量はおおむね 2.1% を超える。' },
      { key: 'C', text: '圧縮に強く振動吸収性に優れるが、引張りに弱くもろい。', explanation: '正しい。片状黒鉛が振動を吸収する一方、切欠きとして働き引張りに弱い。' },
      { key: 'D', text: '溶融点が鋼より高く、鋳造性に劣る。', explanation: '誤り。鋳鉄は鋼より溶融点が低く、湯流れがよいので鋳造性に優れる。' },
    ],
    correctKey: 'C' as const,
    explanation:
      'ねずみ鋳鉄は炭素をおおむね 2.1% 以上含み、炭素の一部が片状黒鉛として存在する。黒鉛が振動を吸収するため制振性・耐摩耗性・被削性に優れ、鋼より溶融点が低く鋳造性がよい。一方で片状黒鉛が切欠きとして働くため引張りに弱くもろく、圧縮強さは引張強さの3〜4倍程度と圧縮には強い。\n【図解】計算のしかた\n★式：鋳鉄＝C 2.1%以上＋片状黒鉛 ⇒ 圧縮に強い／引張りに弱い\n　代入：圧縮強さ ≒ 引張強さの3〜4倍、制振性・鋳造性は良好\n○答え：圧縮に強く振動吸収性に優れるがもろい\n×よくある誤り：鋼（C 2.1%未満）と鋳鉄の炭素量の境界を取り違えない\n→ 機械のベッドや弁箱に使われる理由＝「重くて振動を吸う」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-045',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      'オーステナイト系ステンレス鋼（SUS304）の性質として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '主成分はクロムのみで、ニッケルを含まない。', explanation: '誤り。SUS304 は約18%Cr と約8%Ni を含む。' },
      { key: 'B', text: '約18%のクロムと約8%のニッケルを含み、一般に非磁性で耐食性に優れる。', explanation: '正しい。いわゆる18-8ステンレスである。' },
      { key: 'C', text: '焼入れによって著しく硬化するため、刃物用として最も多く用いられる。', explanation: '誤り。焼入れ硬化するのはマルテンサイト系（SUS420など）である。' },
      { key: 'D', text: '炭素鋼より熱伝導率が高く、線膨張係数は小さい。', explanation: '誤り。炭素鋼より熱伝導率は低く、線膨張係数は大きい。' },
    ],
    correctKey: 'B' as const,
    explanation:
      'SUS304 は約18%Cr・約8%Ni を含むオーステナイト系ステンレス鋼で、いわゆる18-8ステンレスである。耐食性・加工性・溶接性に優れ、一般に非磁性（加工により弱磁性を帯びることがある）。焼入れによる硬化はせず、加工硬化で強度を高める。炭素鋼と比べて熱伝導率は低く、線膨張係数は大きい。\n【図解】計算のしかた\n★式：SUS304＝18%Cr＋8%Ni（オーステナイト系・非磁性）\n　代入：耐食性◎／溶接性◎／焼入れ硬化×／加工硬化○\n○答え：18-8ステンレスで非磁性・耐食性に優れる\n×よくある誤り：マルテンサイト系（磁性あり・焼入れ硬化する）と混同しない\n→ 耐食性はクロムの不動態皮膜による。Cr が主役、Ni が助演',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-046',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '非鉄金属および合金に関する記述として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '青銅は銅と亜鉛の合金である。', explanation: '誤り。青銅は銅とすずの合金である。' },
      { key: 'B', text: 'アルミニウムは鉄より比重が大きく、電気伝導率は低い。', explanation: '誤り。アルミニウムの比重は約2.7で鉄より小さく、電気伝導率は高い。' },
      { key: 'C', text: '銅は電気伝導率が低く、電線材料には適さない。', explanation: '誤り。銅は銀に次いで電気伝導率が高く、電線の代表的材料である。' },
      { key: 'D', text: '黄銅（真ちゅう）は銅と亜鉛の合金で、加工性がよく管継手などに用いられる。', explanation: '正しい。銅・亜鉛合金で、5類・1類の器具部材にも使われる。' },
    ],
    correctKey: 'D' as const,
    explanation:
      '黄銅（真ちゅう）は銅と亜鉛の合金で、加工性・鋳造性がよく、バルブや管継手に広く用いられる。青銅は銅とすずの合金で耐食性・耐摩耗性に優れる。アルミニウムは比重約2.7と軽く、電気・熱の伝導率が高いが、強度は低いため合金として用いる。銅は銀に次ぐ高い電気伝導率をもち、電線材料の代表である。\n【図解】計算のしかた\n★式：黄銅＝Cu＋Zn／青銅＝Cu＋Sn／アルミ＝比重2.7（鉄7.8の約1／3）\n　代入：管継手・バルブ＝黄銅、耐食耐摩耗＝青銅、軽量＝アルミ\n○答え：黄銅は銅と亜鉛の合金\n×よくある誤り：黄銅（Zn）と青銅（Sn）を取り違えない\n→ 「おう（黄）＝亜鉛（あえん）」で母音「あ」つながりと覚える',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-047',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '金属の腐食に関する記述として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '異種金属が接触して腐食する場合、イオン化傾向の小さい金属のほうが優先して腐食する。', explanation: '誤り。イオン化傾向の大きい金属が陽極となって腐食する。' },
      { key: 'B', text: '乾燥した常温の空気中では、鋼の腐食は湿った空気中より速く進行する。', explanation: '誤り。水分がなければ腐食はほとんど進行しない。' },
      { key: 'C', text: '異種金属が電解質を介して接触すると、イオン化傾向の大きい金属が陽極となって腐食する。', explanation: '正しい。これを異種金属接触腐食（ガルバニック腐食）という。' },
      { key: 'D', text: 'ステンレス鋼が耐食性を示すのは、表面に厚い酸化鉄の層ができるためである。', explanation: '誤り。緻密で薄いクロムの不動態皮膜による。酸化鉄（赤さび）ではない。' },
    ],
    correctKey: 'C' as const,
    explanation:
      '電解質（水分）を介して異種金属が接触すると局部電池が形成され、イオン化傾向の大きい（卑な）金属が陽極となって溶け出し腐食する。これを異種金属接触腐食（ガルバニック腐食）という。防止には絶縁体を介して縁を切る、同種金属を用いる、犠牲陽極を設けるなどの方法がある。腐食には水分と酸素が必要であり、乾燥状態ではほとんど進行しない。\n【図解】計算のしかた\n★式：イオン化傾向 大＝陽極（溶ける）／小＝陰極（守られる）\n　代入：Mg＞Al＞Zn＞Fe＞Sn＞Cu の順で、左側が犠牲になる\n○答え：イオン化傾向の大きい金属が腐食する\n×よくある誤り：大小を逆に覚えない。守られるのは「貴な」金属\n→ 亜鉛めっき（トタン）は Zn が身代わりに溶ける犠牲防食',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-048',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      '溶接部の欠陥に関する記述として、正しいものはどれか。',
    choices: [
      { key: 'A', text: 'アンダカットとは、溶接止端部に沿って母材が溶けて溝状のくぼみが残る欠陥である。', explanation: '正しい。応力集中の原因となり強度低下を招く。' },
      { key: 'B', text: 'ブローホールとは、溶着金属が母材と融合せずに重なった状態をいう。', explanation: '誤り。それはオーバラップの説明である。ブローホールは球状の空洞である。' },
      { key: 'C', text: 'スラグ巻込みとは、溶接部に生じる割れのことである。', explanation: '誤り。溶融したスラグが溶着金属内に残る欠陥である。' },
      { key: 'D', text: '溶込み不足は外観からすぐ判別できるため、非破壊試験を行う必要はない。', explanation: '誤り。内部欠陥は外観では分からず、放射線透過試験や超音波探傷が必要である。' },
    ],
    correctKey: 'A' as const,
    explanation:
      '主な溶接欠陥は、アンダカット（止端部の溝状のくぼみ）、オーバラップ（溶着金属が母材と融合せず重なる）、ブローホール（ガスによる球状の空洞）、スラグ巻込み（スラグの残留）、溶込み不足、割れなどである。内部欠陥は外観検査では検出できず、放射線透過試験・超音波探傷試験などの非破壊試験を用いる。\n【図解】計算のしかた\n★式：外観でわかる欠陥＝アンダカット・オーバラップ／内部欠陥＝ブローホール・スラグ巻込み・溶込み不足\n　代入：内部欠陥→放射線透過試験（RT）・超音波探傷試験（UT）\n○答え：アンダカットは止端部の溝状のくぼみ\n×よくある誤り：アンダカット（えぐれ）とオーバラップ（かぶさり）を逆にしない\n→ 「アンダ＝下にえぐれる」「オーバ＝上に乗る」で形を覚える',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-049',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      'ねじに関する記述として、正しいものはどれか。',
    choices: [
      { key: 'A', text: 'メートル並目ねじの呼び「M12」の12は、ねじのピッチを表す。', explanation: '誤り。12 はおねじの外径（呼び径）をミリメートルで表した値である。' },
      { key: 'B', text: '管用平行ねじは、ねじ部だけで気密を保つことを目的としている。', explanation: '誤り。ねじ部で密封するのは管用テーパねじである。' },
      { key: 'C', text: '左ねじは、時計回りに回すとねじ込まれる。', explanation: '誤り。時計回りでねじ込まれるのは右ねじである。' },
      { key: 'D', text: '管用テーパねじは、ねじ山が1／16のこう配をもち、ねじ部で管の接続を密封できる。', explanation: '正しい。配管の気密が必要な接続に用いられる。' },
    ],
    correctKey: 'D' as const,
    explanation:
      '管用テーパねじ（R・Rc）はねじ山が1／16のこう配をもち、締め付けるにつれてねじ山どうしが密着して気密性を確保できるため、配管接続に用いられる。管用平行ねじ（G）はねじ部だけでは密封できず、ガスケットなどで気密をとる。メートルねじの「M12」の12は呼び径（外径）であり、右ねじは時計回りでねじ込まれる。\n【図解】計算のしかた\n★式：管用テーパねじ＝1／16こう配、ねじ部で密封／管用平行ねじ＝別途パッキン必要\n　代入：M12＝外径12 mm、右ねじ＝時計回りで締まる\n○答え：管用テーパねじはねじ部で密封できる\n×よくある誤り：M の後の数字をピッチと読み違えない（呼び径）\n→ 消火配管のねじ込み継手は基本テーパねじ',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisok-050',
    subject: 'kiso_kikai' as const,
    subjectName: '基礎的知識（機械）',
    question:
      'ピッチ 2 mm の3条ねじがある。このねじを5回転させたとき、軸方向に進む距離として正しいものはどれか。',
    choices: [
      { key: 'A', text: '30 mm', explanation: 'リード＝ピッチ×条数＝2×3＝6 mm、6×5＝30 mm。正しい。' },
      { key: 'B', text: '10 mm', explanation: '1条ねじとして 2×5＝10 mm と計算した誤答。条数を考慮していない。' },
      { key: 'C', text: '6 mm', explanation: '1回転分のリードの値である。5回転分にする必要がある。' },
      { key: 'D', text: '15 mm', explanation: 'ピッチと条数の扱いを誤った誤答。リードは 6 mm である。' },
    ],
    correctKey: 'A' as const,
    explanation:
      'ねじが1回転して軸方向に進む距離をリードといい、リード＝ピッチ×条数で求める。3条ねじでピッチ 2 mm なら、リード＝2×3＝6 mm である。5回転では 6×5＝30 mm 進む。1条ねじではリードとピッチが等しい。\n【図解】計算のしかた\n★式：リード L＝ピッチ P×条数 n、進む距離＝L×回転数\n　代入：L＝2×3＝6 mm、距離＝6×5\n○答え：30 mm\n×よくある誤り：条数を無視してピッチ×回転数としない\n→ 「多条ねじは早く進む」＝リードが条数倍になる',
    difficulty: 'standard' as const,
  },
  // ══════════════════════════════════════════════════════
  // 基礎的知識（電気） sb-kisod-001 〜 sb-kisod-050
  // ══════════════════════════════════════════════════════
  {
    id: 'sb-kisod-001',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '抵抗 25 Ω に、直流 100 V の電圧を加えた。この抵抗に流れる電流として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '0.25 A', explanation: '25÷100 と逆に割った誤答。オームの法則は I＝E／R である。' },
      { key: 'B', text: '4 A', explanation: 'I＝E／R＝100÷25＝4 A。正しい。' },
      { key: 'C', text: '2500 A', explanation: '電圧と抵抗を掛けた誤答。掛けると電力に近い形になる。' },
      { key: 'D', text: '40 A', explanation: '桁を1つ多く取った誤答。100÷25 は 4 である。' },
    ],
    correctKey: 'B' as const,
    explanation:
      'オームの法則 E＝IR より I＝E／R である。I＝100 V÷25 Ω＝4 A となる。E・I・R の関係は、E を上、I と R を下に置いた三角形で表すと、求めたい量を隠すだけで式が得られる。\n【図解】計算のしかた\n★式：E＝IR → I＝E／R（オームの法則）\n　代入：I＝100 V ÷ 25 Ω\n○答え：4 A\n×よくある誤り：R／E と逆に割らない\n→ 三角形の図：上E、下は I と R。隠した文字が答えの式',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-002',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '3 Ω、5 Ω、12 Ω の3個の抵抗を直列に接続し、全体に 100 V を加えた。回路に流れる電流として正しいものはどれか。',
    choices: [
      { key: 'A', text: '20 A', explanation: '合成抵抗を 5 Ω と誤ったときの値。直列合成は単純和である。' },
      { key: 'B', text: '0.2 A', explanation: '桁を誤った答え。100÷20＝5 である。' },
      { key: 'C', text: '5 A', explanation: '合成抵抗 R＝3＋5＋12＝20 Ω、I＝100÷20＝5 A。正しい。' },
      { key: 'D', text: '2 A', explanation: '合成抵抗を 50 Ω とした誤答。3個の抵抗の和は 20 Ω である。' },
    ],
    correctKey: 'C' as const,
    explanation:
      '直列接続の合成抵抗は各抵抗の和であるから R＝3＋5＋12＝20 Ω である。回路電流は I＝E／R＝100÷20＝5 A となる。直列回路では電流はどこでも同じで、各抵抗の端子電圧は抵抗値に比例して分圧される。\n【図解】計算のしかた\n★式：直列 R＝R₁＋R₂＋R₃、I＝E／R\n　代入：R＝3＋5＋12＝20 Ω、I＝100÷20\n○答え：5 A（各抵抗の電圧は15 V・25 V・60 V）\n×よくある誤り：並列の逆数和の式を使わない\n→ 直列は「電流共通・電圧が分かれる」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-003',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '6 Ω と 3 Ω の2個の抵抗を並列に接続したときの合成抵抗として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '2 Ω', explanation: 'R＝(6×3)／(6＋3)＝18÷9＝2 Ω。正しい。' },
      { key: 'B', text: '9 Ω', explanation: '直列接続としたときの値である。並列は和より小さくなる。' },
      { key: 'C', text: '4.5 Ω', explanation: '単純平均した誤答。並列合成は平均ではない。' },
      { key: 'D', text: '18 Ω', explanation: '積だけを求めて和で割り忘れた誤答。' },
    ],
    correctKey: 'A' as const,
    explanation:
      '2個の抵抗の並列合成は「和分の積」で求める。R＝(R₁×R₂)／(R₁＋R₂)＝(6×3)÷(6＋3)＝18÷9＝2 Ω である。並列合成抵抗は必ず最小の抵抗値より小さくなるので、2 Ω＜3 Ω であることが検算になる。\n【図解】計算のしかた\n★式：並列 R＝R₁R₂／(R₁＋R₂)（和分の積）\n　代入：R＝6×3÷(6＋3)＝18÷9\n○答え：2 Ω\n×よくある誤り：積÷和の分母分子を逆にしない\n→ 検算：並列合成は必ず一番小さい抵抗より小さくなる',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-004',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '20 Ω と 30 Ω の抵抗を直列に接続し、全体に 100 V を加えた。30 Ω の抵抗の端子電圧として正しいものはどれか。',
    choices: [
      { key: 'A', text: '40 V', explanation: '20 Ω 側の端子電圧である。問われているのは 30 Ω 側である。' },
      { key: 'B', text: '50 V', explanation: '2等分した誤答。抵抗値が異なるので電圧は等分されない。' },
      { key: 'C', text: '30 V', explanation: '抵抗値をそのまま電圧としてしまった誤答。' },
      { key: 'D', text: '60 V', explanation: 'V＝100×30／(20＋30)＝60 V。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      '直列回路では電流が共通なので、各抵抗の端子電圧は抵抗値に比例して分圧される。V₃₀＝E×R₂／(R₁＋R₂)＝100×30÷50＝60 V である。電流から求めても I＝100÷50＝2 A、V＝2×30＝60 V と一致する。\n【図解】計算のしかた\n★式：分圧 V₂＝E×R₂／(R₁＋R₂)\n　代入：V＝100×30÷(20＋30)＝100×0.6\n○答え：60 V（20 Ω側は40 V、合計100 V）\n×よくある誤り：抵抗の小さい側に大きな電圧が掛かるとしない\n→ 直列は「大きい抵抗に大きい電圧」。合計が電源電圧になるか検算',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-005',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '2 Ω と 4 Ω の抵抗を並列に接続した部分に、合計 9 A の電流が流れ込んでいる。2 Ω の抵抗に流れる電流として正しいものはどれか。',
    choices: [
      { key: 'A', text: '3 A', explanation: '4 Ω 側に流れる電流である。問われているのは 2 Ω 側である。' },
      { key: 'B', text: '4.5 A', explanation: '2等分した誤答。抵抗値が異なるので等分されない。' },
      { key: 'C', text: '6 A', explanation: 'I₂＝9×4／(2＋4)＝6 A。正しい。' },
      { key: 'D', text: '9 A', explanation: '全電流の値である。並列なので分流する。' },
    ],
    correctKey: 'C' as const,
    explanation:
      '並列回路では各抵抗に同じ電圧が掛かるため、電流は抵抗値に反比例して分流する。2 Ω 側の電流は I₂＝I×R₄／(R₂＋R₄)＝9×4÷6＝6 A である。合成抵抗 4／3 Ω に 9 A が流れるときの端子電圧は 12 V で、12÷2＝6 A と検算できる。\n【図解】計算のしかた\n★式：分流 I₁＝I×R₂／(R₁＋R₂)（相手の抵抗が分子）\n　代入：I₂Ω＝9×4÷(2＋4)＝9×2／3\n○答え：6 A（4 Ω側は3 A、合計9 A）\n×よくある誤り：自分の抵抗値を分子にしない（相手の値が分子）\n→ 並列は「抵抗が小さいほうに多く流れる」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-006',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '4 Ω の抵抗と、6 Ω と 3 Ω を並列にした部分とを直列に接続し、全体に 24 V を加えた。回路の全電流として正しいものはどれか。',
    choices: [
      { key: 'A', text: '2 A', explanation: '合成抵抗を 12 Ω とした誤答。並列部分は 2 Ω である。' },
      { key: 'B', text: '4 A', explanation: '並列部 2 Ω＋4 Ω＝6 Ω、I＝24÷6＝4 A。正しい。' },
      { key: 'C', text: '6 A', explanation: '合成抵抗を 4 Ω とした誤答。並列部の 2 Ω を加え忘れている。' },
      { key: 'D', text: '1.85 A', explanation: '全抵抗を単純に 4＋6＋3＝13 Ω とした誤答。並列部の扱いが誤り。' },
    ],
    correctKey: 'B' as const,
    explanation:
      'まず並列部分を計算する。6 Ω と 3 Ω の並列は (6×3)÷(6＋3)＝2 Ω である。これに直列の 4 Ω を加えて全抵抗は 4＋2＝6 Ω となる。したがって全電流は I＝24÷6＝4 A である。並列部の端子電圧は 4×2＝8 V となる。\n【図解】計算のしかた\n★式：まず並列を1つにまとめ、次に直列で足す\n　代入：6//3＝18÷9＝2 Ω、R＝4＋2＝6 Ω、I＝24÷6\n○答え：4 A（並列部の電圧は8 V）\n×よくある誤り：全部を直列とみなして13 Ωとしない\n→ 直並列は「内側の並列から順に潰す」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-007',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '起電力 12 V、内部抵抗 0.5 Ω の電池に、5.5 Ω の負荷抵抗を接続した。このときの電池の端子電圧として正しいものはどれか。',
    choices: [
      { key: 'A', text: '11 V', explanation: 'I＝12÷6＝2 A、端子電圧＝12－2×0.5＝11 V。正しい。' },
      { key: 'B', text: '12 V', explanation: '起電力そのもの。内部抵抗による電圧降下を考慮していない。' },
      { key: 'C', text: '1 V', explanation: '内部抵抗による電圧降下の値である。端子電圧はこれを差し引いた残りである。' },
      { key: 'D', text: '10 V', explanation: '電流を 4 A として計算した誤答。回路電流は 2 A である。' },
    ],
    correctKey: 'A' as const,
    explanation:
      'キルヒホッフの第2法則より、閉回路では起電力の和が電圧降下の和に等しい。回路電流は I＝E／(r＋R)＝12÷(0.5＋5.5)＝12÷6＝2 A である。端子電圧は負荷抵抗に掛かる電圧なので V＝IR＝2×5.5＝11 V、あるいは V＝E－Ir＝12－2×0.5＝11 V となる。\n【図解】計算のしかた\n★式：I＝E／(r＋R)、端子電圧 V＝E－Ir＝IR\n　代入：I＝12÷(0.5＋5.5)＝2 A、V＝12－2×0.5\n○答え：11 V\n×よくある誤り：内部抵抗を無視して12 Vとしない\n→ 端子電圧は「起電力から内部の電圧降下を引いた残り」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-008',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      'ホイートストンブリッジ回路において、辺 P＝20 Ω、Q＝40 Ω、R＝30 Ω のとき、検流計の指示がゼロ（平衡）となった。未知抵抗 X の値として正しいものはどれか。ただし平衡条件は P・X＝Q・R とする。',
    choices: [
      { key: 'A', text: '15 Ω', explanation: 'P・R／Q＝20×30÷40＝15 と組合せを誤った誤答。' },
      { key: 'B', text: '26.7 Ω', explanation: '比の取り方を誤った誤答。平衡条件は対辺の積が等しいことである。' },
      { key: 'C', text: '600 Ω', explanation: 'Q×R＝1200 を P で割り忘れた、あるいは半分にした誤答。' },
      { key: 'D', text: '60 Ω', explanation: 'X＝QR／P＝40×30÷20＝60 Ω。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      'ホイートストンブリッジの平衡条件は、向かい合う辺の抵抗の積が等しいこと、すなわち P・X＝Q・R である。したがって X＝QR／P＝(40×30)÷20＝1200÷20＝60 Ω となる。平衡時は検流計に電流が流れないため、検流計の内部抵抗や電源電圧の値に関係なく未知抵抗を精密に測定できる。\n【図解】計算のしかた\n★式：平衡条件 P・X＝Q・R → X＝QR／P\n　代入：X＝40×30÷20＝1200÷20\n○答え：60 Ω\n×よくある誤り：隣り合う辺どうしの積としない（対辺どうし）\n→ 平衡時は検流計に電流が流れない＝電源電圧に無関係に測定できる',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-009',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '抵抗率 1.72×10⁻⁸ Ω・m の銅線がある。断面積 2 mm²、長さ 200 m のときの導体抵抗として、最も近いものはどれか。',
    choices: [
      { key: 'A', text: '約 1.72 Ω', explanation: 'R＝ρL／A＝1.72×10⁻⁸×200÷(2×10⁻⁶)＝1.72 Ω。正しい。' },
      { key: 'B', text: '約 0.172 Ω', explanation: '桁を1つ落とした誤答。mm²→m² の換算は 10⁻⁶ である。' },
      { key: 'C', text: '約 17.2 Ω', explanation: '桁を1つ多く取った誤答。断面積の換算を確認する。' },
      { key: 'D', text: '約 3.44 Ω', explanation: '断面積で割らずに掛けた、あるいは断面積を 1 mm² とした誤答。' },
    ],
    correctKey: 'A' as const,
    explanation:
      '導体の抵抗は R＝ρL／A で求める。断面積 2 mm²＝2×10⁻⁶ m² に換算し、R＝(1.72×10⁻⁸×200)÷(2×10⁻⁶)＝3.44×10⁻⁶÷2×10⁻⁶＝1.72 Ω となる。抵抗は長さに比例し、断面積に反比例する。\n【図解】計算のしかた\n★式：R＝ρL／A（ρ＝抵抗率、Lは m、Aは m²）\n　代入：R＝1.72×10⁻⁸×200÷(2×10⁻⁶)＝3.44×10⁻⁶÷2×10⁻⁶\n○答え：約1.72 Ω\n×よくある誤り：mm²のまま計算しない（1 mm²＝10⁻⁶ m²）\n→ 「長いほど大きく、太いほど小さい」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-010',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '同一材質の円形断面の導線について、長さを2倍、直径を2倍にした。このときの抵抗は元の何倍になるか。正しいものはどれか。',
    choices: [
      { key: 'A', text: '2倍', explanation: '長さの影響だけを見た誤答。直径を太くした効果を考慮していない。' },
      { key: 'B', text: '4倍', explanation: '断面積の効果を逆向きに考えた誤答。太くすれば抵抗は下がる。' },
      { key: 'C', text: '2分の1倍', explanation: '長さ2倍で2倍、断面積4倍で4分の1、合わせて2分の1倍。正しい。' },
      { key: 'D', text: '4分の1倍', explanation: '長さ2倍の効果を入れ忘れた誤答。' },
    ],
    correctKey: 'C' as const,
    explanation:
      'R＝ρL／A において、長さが2倍になると抵抗は2倍になる。一方、直径が2倍になると断面積は 2²＝4 倍になるので抵抗は 4分の1 になる。したがって全体では 2×(1／4)＝1／2 倍である。長さは1乗、直径は2乗で効く点が要点である。\n【図解】計算のしかた\n★式：R＝ρL／A、A＝πd²／4（直径は2乗で効く）\n　代入：L→2L で×2、d→2d で A→4A なので×1／4\n○答え：2×1／4＝2分の1倍\n×よくある誤り：直径2倍を面積2倍と勘違いしない\n→ 「長さは1乗、直径は2乗」で計算する',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-011',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '20 ℃ で 10 Ω の銅線がある。抵抗温度係数を 0.004 /℃ とするとき、温度が 70 ℃ になったときの抵抗値として最も近いものはどれか。',
    choices: [
      { key: 'A', text: '約 10.2 Ω', explanation: '温度差を 5 ℃ として計算した誤答。温度差は 50 ℃ である。' },
      { key: 'B', text: '約 11 Ω', explanation: '温度係数を 0.002 として計算した誤答。' },
      { key: 'C', text: '約 14 Ω', explanation: '温度差を 100 ℃ として計算した誤答。20 ℃ から 70 ℃ の差は 50 ℃ である。' },
      { key: 'D', text: '約 12 Ω', explanation: 'R＝10×(1＋0.004×50)＝10×1.2＝12 Ω。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      '金属導体の抵抗は温度上昇とともに増加し、R₂＝R₁{1＋α(t₂－t₁)} で表される。温度差は 70－20＝50 ℃ なので、R₂＝10×(1＋0.004×50)＝10×(1＋0.2)＝12 Ω となる。なお半導体やサーミスタは逆に温度上昇で抵抗が減少するものが多い。\n【図解】計算のしかた\n★式：R₂＝R₁{1＋α(t₂－t₁)}\n　代入：R₂＝10×(1＋0.004×50)＝10×1.2\n○答え：約12 Ω\n×よくある誤り：温度差ではなく温度そのもの（70）を代入しない\n→ 金属は温度が上がると抵抗増、半導体は逆に減る',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-012',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '抵抗値 4 Ω の導線がある。同じ材質で、断面積を 2分の1、長さを3倍にした導線の抵抗値として正しいものはどれか。',
    choices: [
      { key: 'A', text: '12 Ω', explanation: '長さ3倍の効果のみを見た誤答。断面積が半分になる効果も加わる。' },
      { key: 'B', text: '24 Ω', explanation: '3×2＝6 倍となり、4×6＝24 Ω。正しい。' },
      { key: 'C', text: '6 Ω', explanation: '倍率を 1.5 倍とした誤答。正しい倍率は 6 倍である。' },
      { key: 'D', text: '2.67 Ω', explanation: '断面積と長さの効果を逆にした誤答。細く長くすれば抵抗は増える。' },
    ],
    correctKey: 'B' as const,
    explanation:
      'R＝ρL／A より、長さが3倍になれば抵抗は3倍、断面積が 2分の1 になれば抵抗は2倍になる。したがって合計で 3×2＝6 倍となり、R＝4×6＝24 Ω である。細く長い導線ほど抵抗が大きいという直感と一致する。\n【図解】計算のしかた\n★式：R＝ρL／A（Lに比例、Aに反比例）\n　代入：長さ3倍→×3、断面積1／2→×2、合計×6、R＝4×6\n○答え：24 Ω\n×よくある誤り：断面積が減ると抵抗も減ると考えない（反比例）\n→ 「細くて長い＝流れにくい＝抵抗大」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-013',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '4 μF と 6 μF のコンデンサを並列に接続したときの合成静電容量として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '2.4 μF', explanation: '直列接続としたときの値である。並列は単純和になる。' },
      { key: 'B', text: '1.2 μF', explanation: '和分の積の計算を誤った値であり、いずれにせよ並列ではない。' },
      { key: 'C', text: '10 μF', explanation: 'C＝4＋6＝10 μF。正しい。' },
      { key: 'D', text: '24 μF', explanation: '積のみを求めた誤答。並列合成は和である。' },
    ],
    correctKey: 'C' as const,
    explanation:
      'コンデンサの合成は抵抗と逆で、並列接続では単純に加算する。C＝C₁＋C₂＝4＋6＝10 μF である。並列では極板面積が増えたのと同じ効果があるため容量が増える。なお直列では和分の積（逆数の和の逆数）となり、最小の容量より小さくなる。\n【図解】計算のしかた\n★式：コンデンサ並列 C＝C₁＋C₂（抵抗の直列と同じ形）\n　代入：C＝4＋6\n○答え：10 μF\n×よくある誤り：抵抗の並列（和分の積）と取り違えない\n→ 「コンデンサは抵抗と逆」：並列で足す、直列で和分の積',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-014',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '6 μF と 3 μF のコンデンサを直列に接続したときの合成静電容量として、正しいものはどれか。',
    choices: [
      { key: 'A', text: '2 μF', explanation: 'C＝(6×3)／(6＋3)＝18÷9＝2 μF。正しい。' },
      { key: 'B', text: '9 μF', explanation: '並列接続としたときの値である。直列では和より小さくなる。' },
      { key: 'C', text: '4.5 μF', explanation: '単純平均した誤答。直列合成は平均ではない。' },
      { key: 'D', text: '18 μF', explanation: '積のみを求めて和で割り忘れた誤答。' },
    ],
    correctKey: 'A' as const,
    explanation:
      'コンデンサの直列合成は 1／C＝1／C₁＋1／C₂、2個なら和分の積で求める。C＝(6×3)÷(6＋3)＝18÷9＝2 μF である。直列合成容量は最小の容量（3 μF）より必ず小さくなるので、2 μF は妥当である。\n【図解】計算のしかた\n★式：直列 1／C＝1／C₁＋1／C₂ → C＝C₁C₂／(C₁＋C₂)\n　代入：C＝6×3÷(6＋3)＝18÷9\n○答え：2 μF\n×よくある誤り：直列で足し算しない（それは並列）\n→ 検算：直列合成は最小の容量より小さくなる',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-015',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '静電容量 100 μF のコンデンサに 200 V を充電したとき、蓄えられる静電エネルギーとして正しいものはどれか。',
    choices: [
      { key: 'A', text: '0.01 J', explanation: 'CV と電圧を2乗せずに計算した誤答。エネルギーは電圧の2乗に比例する。' },
      { key: 'B', text: '20 J', explanation: '桁を1つ多く取った誤答。0.5×100×10⁻⁶×40000＝2 である。' },
      { key: 'C', text: '1 J', explanation: '½ を2回掛けるなど係数を誤った誤答。' },
      { key: 'D', text: '2 J', explanation: 'W＝½CV²＝0.5×100×10⁻⁶×200²＝2 J。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      'コンデンサに蓄えられる静電エネルギーは W＝½CV² である。W＝0.5×100×10⁻⁶ F×(200 V)²＝0.5×10⁻⁴×40000＝2 J となる。電圧の2乗に比例するため、電圧を2倍にするとエネルギーは4倍になる。\n【図解】計算のしかた\n★式：W＝½CV²（＝½QV＝Q²／2C）\n　代入：W＝0.5×100×10⁻⁶×200²＝0.5×10⁻⁴×4×10⁴\n○答え：2 J\n×よくある誤り：μF を F に直し忘れない（×10⁻⁶）\n→ 電圧2倍でエネルギー4倍（2乗で効く）',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-016',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '静電容量 50 μF のコンデンサに 100 V を加えたとき、蓄えられる電荷量として正しいものはどれか。',
    choices: [
      { key: 'A', text: '0.5 mC', explanation: '桁を1つ落とした誤答。50×10⁻⁶×100＝5×10⁻³ C である。' },
      { key: 'B', text: '5 mC', explanation: 'Q＝CV＝50×10⁻⁶×100＝5×10⁻³ C＝5 mC。正しい。' },
      { key: 'C', text: '50 mC', explanation: '桁を1つ多く取った誤答。単位換算を確認する。' },
      { key: 'D', text: '5000 mC', explanation: 'μ（10⁻⁶）の換算を無視した誤答。' },
    ],
    correctKey: 'B' as const,
    explanation:
      'コンデンサに蓄えられる電荷は Q＝CV で求める。Q＝50×10⁻⁶ F×100 V＝5000×10⁻⁶＝5×10⁻³ C＝5 mC となる。電荷量は容量と電圧の積に比例する。\n【図解】計算のしかた\n★式：Q＝CV（電荷＝静電容量×電圧）\n　代入：Q＝50×10⁻⁶×100＝5×10⁻³ C\n○答え：5 mC（＝0.005 C）\n×よくある誤り：μF のまま計算して桁を6つ間違えない\n→ Q・C・V も三角形で覚えられる（上がQ、下がCとV）',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-017',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '平行板コンデンサにおいて、極板の面積を変えずに極板間隔だけを2倍にした。静電容量は元の何倍になるか。正しいものはどれか。',
    choices: [
      { key: 'A', text: '2倍', explanation: '間隔を広げると容量は減る。増えるとした時点で誤り。' },
      { key: 'B', text: '4倍', explanation: '間隔は2乗では効かず、また増加方向でもない。' },
      { key: 'C', text: '4分の1倍', explanation: '間隔は1乗で効くため 4分の1 にはならない。' },
      { key: 'D', text: '2分の1倍', explanation: 'C＝εA／d より d が2倍なら C は 2分の1。正しい。' },
    ],
    correctKey: 'D' as const,
    explanation:
      '平行板コンデンサの静電容量は C＝εA／d で表される。εは誘電率、Aは極板面積、dは極板間隔である。面積が一定で間隔 d が2倍になれば、容量は 2分の1 になる。逆に面積を2倍にすれば容量も2倍、誘電率の大きい誘電体を挟めば容量は増加する。\n【図解】計算のしかた\n★式：C＝εA／d（面積に比例、間隔に反比例）\n　代入：d→2d なので C→C／2\n○答え：2分の1倍\n×よくある誤り：間隔を2乗で効かせない（1乗で反比例）\n→ 「広く近づけるほど容量大」＝面積↑・間隔↓・誘電率↑',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-018',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '2 μF と 3 μF のコンデンサを直列に接続し、全体に 100 V を加えた。2 μF のコンデンサの端子電圧として正しいものはどれか。',
    choices: [
      { key: 'A', text: '60 V', explanation: '直列では容量に反比例して分圧されるので 100×3／5＝60 V。正しい。' },
      { key: 'B', text: '40 V', explanation: '3 μF 側の端子電圧である。問われているのは 2 μF 側である。' },
      { key: 'C', text: '50 V', explanation: '2等分した誤答。容量が異なるので等分されない。' },
      { key: 'D', text: '100 V', explanation: '電源電圧そのもの。直列なので2つに分圧される。' },
    ],
    correctKey: 'A' as const,
    explanation:
      '直列接続されたコンデンサには同じ電荷が蓄えられるので、V＝Q／C より端子電圧は容量に反比例して分圧される。合成容量は (2×3)÷5＝1.2 μF、電荷は Q＝1.2×10⁻⁶×100＝1.2×10⁻⁴ C である。2 μF の端子電圧は V＝1.2×10⁻⁴÷(2×10⁻⁶)＝60 V となる。3 μF 側は 40 V で、合計 100 V となり検算できる。\n【図解】計算のしかた\n★式：直列コンデンサは電荷が共通、V＝Q／C（容量に反比例して分圧）\n　代入：V₂μF＝100×3／(2＋3)＝60 V、V₃μF＝100×2／5＝40 V\n○答え：60 V（合計100 Vで検算）\n×よくある誤り：抵抗の分圧（抵抗に比例）と同じ向きにしない\n→ コンデンサは「小さい容量ほど大きな電圧を負担する」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-019',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '巻数 200 回のコイルを貫く磁束が、0.1 秒間に 0.02 Wb 変化した。このコイルに誘導される起電力の大きさとして正しいものはどれか。',
    choices: [
      { key: 'A', text: '0.4 V', explanation: '巻数を掛け忘れた、または時間の扱いを誤った誤答。' },
      { key: 'B', text: '4 V', explanation: '桁を1つ落とした誤答。200×0.2＝40 である。' },
      { key: 'C', text: '40 V', explanation: 'e＝N・ΔΦ／Δt＝200×0.02÷0.1＝40 V。正しい。' },
      { key: 'D', text: '400 V', explanation: '桁を1つ多く取った誤答。0.02÷0.1＝0.2 である。' },
    ],
    correctKey: 'C' as const,
    explanation:
      'ファラデーの電磁誘導の法則より、誘導起電力の大きさは e＝N×ΔΦ／Δt である。e＝200×(0.02÷0.1)＝200×0.2＝40 V となる。レンツの法則により、この起電力は磁束の変化を妨げる向きに生じる（式の負符号）。\n【図解】計算のしかた\n★式：e＝N×ΔΦ／Δt（ファラデーの法則、向きはレンツの法則）\n　代入：e＝200×0.02÷0.1＝200×0.2\n○答え：40 V\n×よくある誤り：巻数 N を掛け忘れない、Δt で割ることを忘れない\n→ 「速く変化するほど、巻数が多いほど大きな起電力」',
    difficulty: 'standard' as const,
  },
  {
    id: 'sb-kisod-020',
    subject: 'kiso_denki' as const,
    subjectName: '基礎的知識（電気）',
    question:
      '自己インダクタンス 0.5 H のコイルに流れる電流が、1 秒間に 20 A の割合で変化している。このコイルに生じる自己誘導起電力の大きさとして正しいものはどれか。',
    choices: [
      { key: 'A', text: '0.025 V', explanation: 'L を電流変化率で割った誤答。掛け算である。' },
      { key: 'B', text: '10 V', explanation: 'e＝L×(di／dt)＝0.5×20＝10 V。正しい。' },
      { key: 'C', text: '40 V', explanation: '電流変化率を L で割った誤答。20÷0.5＝40 としている。' },
      { key: 'D', text: '100 V', explanation: '桁を誤った誤答。0.5×20 は 10 である。' },
    ],
    correctKey: 'B' as const,
    explanation:
      '自己誘導起電力は e＝L×(di／dt) で表される。e＝0.5 H×20 A/s＝10 V となる。インダクタンスが大きいほど、また電流の変化が急なほど大きな起電力が生じ、その向きは電流の変化を妨げる方向である。\n【図解】計算のしかた\n★式：e＝L×(di／dt)（自己誘導起電力）\n　代入：e＝0.5 H×20 A/s\n○答え：10 V\n×よくある誤り：L で割らない（掛ける）\n→ 単位で確認：H×A/s＝V になる',
    difficulty: 'standard' as const,
  },
];
