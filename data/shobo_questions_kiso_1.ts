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
];
