import type { EikenQuestion } from './eiken_questions';

export const eikenQuestions2kyu3: EikenQuestion[] = [
  // ===== VOCABULARY (001-020) =====

  // 001 — near-synonyms: eminent / imminent / prominent / distinguished
  {
    id: 'eiken_2kyu3_001',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Experts warned that a major earthquake was ( ) and urged residents near the fault line to evacuate immediately.',
    choices: [
      { key: 'A', text: 'eminent' },
      { key: 'B', text: 'distinguished' },
      { key: 'C', text: 'prominent' },
      { key: 'D', text: 'imminent' },
    ],
    correctKey: 'D' as const,
    explanation: '"imminent"は「差し迫った」の意味で、地震がすぐに起こりそうな状況を表します。"eminent"は「著名な」、"prominent"は「目立つ・著名な」、"distinguished"は「著名な・卓越した」で、いずれも人物の評価に使われる形容詞です。\n\nimminent は「（悪いことが）今にも起こりそうな」で、danger、attack、collapse、threat といった好ましくない事態を修飾する。urged residents to evacuate immediately という避難勧告が、切迫した状況であることを裏づけている。\n\n【図解】つづりの似た形容詞\n　語｜意味｜修飾する対象\n　imminent｜差し迫った｜危機, 災害\n　eminent｜著名な｜学者, 人物\n　prominent｜目立つ, 著名な｜人物, 特徴\n　⇒ 地震が今にも起きるなら imminent\n　⚠ eminent と imminent は1文字違い。人の評価か事態の切迫かで確実に区別する。',
    difficulty: 'standard' as const,
  },

  // 002 — elicit / illicit / explicit / implicit
  {
    id: 'eiken_2kyu3_002',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The teacher used thought-provoking questions to ( ) genuine curiosity from her students rather than simply providing answers.',
    choices: [
      { key: 'A', text: 'illicit' },
      { key: 'B', text: 'explicit' },
      { key: 'C', text: 'implicit' },
      { key: 'D', text: 'elicit' },
    ],
    correctKey: 'D' as const,
    explanation: '"elicit"は「（反応・情報などを）引き出す」という動詞です。"illicit"は「違法の」（形容詞）、"explicit"は「明示的な」（形容詞）、"implicit"は「暗黙の」（形容詞）で、動詞として使えません。\n\nelicit は「（反応や情報を）引き出す」という動詞で、response、information、curiosity を目的語にとる。教師が問いかけによって好奇心を引き出す、という文脈にぴったり合う。\n\n【図解】elicit と紛らわしい語\n　語｜品詞｜意味\n　elicit｜動詞｜引き出す\n　illicit｜形容詞｜違法の\n　explicit｜形容詞｜明示的な\n　⇒ 空所に動詞が必要なら elicit\n　⚠ illicit は発音が近いが形容詞。品詞が違うため空所には入らない。',
    difficulty: 'advanced' as const,
  },

  // 003 — ensure / assure / insure / reassure
  {
    id: 'eiken_2kyu3_003',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The supervisor visited the nervous intern before the presentation to ( ) her that the team was fully behind her.',
    choices: [
      { key: 'A', text: 'ensure' },
      { key: 'B', text: 'insure' },
      { key: 'C', text: 'assure' },
      { key: 'D', text: 'reassure' },
    ],
    correctKey: 'D' as const,
    explanation: '"reassure"は「（不安を感じている人を）安心させる・励ます」の意味。"assure"は「（人に）断言する」、"ensure"は「確実にする」（人を目的語に取らない）、"insure"は「保険をかける」です。緊張している人を励ます文脈では"reassure"が最適です。\n\nreassure は re-（再び）＋ assure で「不安を感じている人を安心させる」。すでに緊張している相手を落ち着かせる場面で使う点が、単に断言する assure との違いになる。\n\n【図解】sure 系動詞の使い分け\n　語｜意味｜目的語\n　reassure｜安心させる｜不安な人\n　assure｜請け合う｜人 ＋ that 節\n　ensure｜確実にする｜事柄, that 節\n　⇒ 緊張した実習生を励ますなら reassure\n　⚠ ensure は人を目的語にとらない。her という人が続く本問では使えない。',
    difficulty: 'advanced' as const,
  },

  // 004 — principal / principle
  {
    id: 'eiken_2kyu3_004',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Honesty is the ( ) on which the entire organization was founded, and it guides every business decision we make.',
    choices: [
      { key: 'A', text: 'principle' },
      { key: 'B', text: 'principal' },
      { key: 'C', text: 'primal' },
      { key: 'D', text: 'preview' },
    ],
    correctKey: 'A' as const,
    explanation: '"principle"は「原則・信条」という名詞です。"principal"は「主要な」（形容詞）または「校長・主体」（名詞）で、ここでは不適切。"on which the organization was founded"という関係詞節が続くことからも、組織の基盤となる「原則」を意味する"principle"が正解です。\n\n【図解】principle と principal\n　語｜品詞｜意味\n　principle｜名詞｜原則, 信条\n　principal｜形容詞｜主要な\n　principal｜名詞｜校長, 元本\n　⇒ 組織の基盤となる信条なら principle\n　⚠ 発音が同じなので綴りで判断する。le で終わるほうが「原則」。',
    difficulty: 'standard' as const,
  },

  // 005 — complement / compliment
  {
    id: 'eiken_2kyu3_005',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The crisp white wine perfectly ( ) the delicate flavor of the grilled fish, making the meal a memorable experience.',
    choices: [
      { key: 'A', text: 'compliments' },
      { key: 'B', text: 'competes' },
      { key: 'C', text: 'compromises' },
      { key: 'D', text: 'complements' },
    ],
    correctKey: 'D' as const,
    explanation: '"complement"は「（互いに）引き立て合う・補完する」という動詞です。"compliment"は「褒める」で、食べ物同士には使いません。"compromise"は「妥協する・損なう」、"compete"は「競争する」でいずれも文脈に合いません。\n\ncomplement は「補い合って完全にする」で、料理と飲み物が互いを引き立てる関係を表す。名詞では「補完物」の意味。同音の compliment は「褒め言葉、褒める」で、人に向けて使う語である。\n\n【図解】同音異義語の区別\n　語｜意味｜対象\n　complement｜引き立て合う｜料理と飲み物, 色\n　compliment｜褒める｜人\n　compromise｜妥協する, 損なう｜交渉, 品質\n　⇒ 白ワインが魚の味を引き立てるなら complements\n　⚠ compliment を選ぶと「ワインが魚を褒めた」となり意味をなさない。e と i の綴りで判別する。',
    difficulty: 'standard' as const,
  },

  // 006 — affect / effect / impact / influence (as verbs)
  {
    id: 'eiken_2kyu3_006',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Scientists have found that prolonged exposure to noise pollution can negatively ( ) cognitive performance and concentration.',
    choices: [
      { key: 'A', text: 'effect' },
      { key: 'B', text: 'impact' },
      { key: 'C', text: 'influence' },
      { key: 'D', text: 'affect' },
    ],
    correctKey: 'D' as const,
    explanation: '"affect"は「影響を与える」という動詞で、ここでは認知能力に悪影響を与えるという文脈に最も自然に合います。"effect"は通常名詞（効果）ですが動詞として使う場合は「引き起こす」。"impact"と"influence"も動詞として使えますが、"negatively affect"は英語で最も一般的な表現です。\n\n【図解】affect と effect\n　語｜品詞｜意味\n　affect｜動詞｜影響を与える\n　effect｜名詞｜効果, 影響\n　effect｜動詞（まれ）｜もたらす, 実現する\n　⇒ 動詞として影響を与えるなら affect\n　⚠ have an effect on と affect は同義だが品詞が違う。空所が動詞なら affect を選ぶ。',
    difficulty: 'standard' as const,
  },

  // 007 — vocabulary: academic register
  {
    id: 'eiken_2kyu3_007',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The committee decided to ( ) the proposed budget cuts after members raised concerns about their impact on social services.',
    choices: [
      { key: 'A', text: 'scrutinize' },
      { key: 'B', text: 'accelerate' },
      { key: 'C', text: 'abandon' },
      { key: 'D', text: 'postpone' },
    ],
    correctKey: 'D' as const,
    explanation: '"postpone"は「延期する」の意味で、懸念が提起された後に予算削減案を先送りにするという文脈に合います。"scrutinize"は「精査する」、"accelerate"は「加速する」で文脈に合わず、"abandon"（放棄する）は過激すぎます。\n\npostpone は「（予定を）延期する」で、決定や実施を先送りにすることを表す。懸念が出たので削減案を保留した、という流れに合う。put off の硬い言い換えとして使われる。\n\n【図解】案件への対応を表す動詞\n　語｜対応｜結果\n　postpone｜延期する｜再検討の余地あり\n　abandon｜放棄する｜白紙撤回\n　scrutinize｜精査する｜審議を続ける\n　⇒ 懸念が出て先送りするなら postpone\n　⚠ abandon は完全な放棄で強すぎる。懸念の表明と撤回は別の段階である。',
    difficulty: 'standard' as const,
  },

  // 008 — vocabulary
  {
    id: 'eiken_2kyu3_008',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The diplomat worked tirelessly to ( ) tensions between the two neighboring countries that had been in conflict for decades.',
    choices: [
      { key: 'A', text: 'alleviate' },
      { key: 'B', text: 'escalate' },
      { key: 'C', text: 'fabricate' },
      { key: 'D', text: 'provoke' },
    ],
    correctKey: 'A' as const,
    explanation: '"alleviate"は「（緊張・苦しみなどを）和らげる・緩和する」の意味です。外交官が緊張を和らげるために尽力するという文脈に最も合います。"escalate"は「激化させる」、"fabricate"は「でっち上げる」、"provoke"は「挑発する」でいずれも逆の意味です。\n\nalleviate は「（苦痛や緊張を）和らげる」で、pain、tension、poverty、symptoms を目的語にとる。外交官が長年の対立の緊張を緩和しようと尽力した、という文脈にふさわしい。\n\n【図解】緊張への働きかけ\n　語｜方向｜結果\n　alleviate｜和らげる｜緊張が下がる\n　escalate｜激化させる｜緊張が上がる\n　provoke｜挑発する｜緊張が上がる\n　⇒ 外交努力で対立を緩めるなら alleviate\n　⚠ escalate は正反対の方向。worked tirelessly という肯定的な努力の描写と噛み合わない。',
    difficulty: 'advanced' as const,
  },

  // 009 — vocabulary
  {
    id: 'eiken_2kyu3_009',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The documentary filmmaker sought to ( ) the voices of communities that had long been overlooked by mainstream media.',
    choices: [
      { key: 'A', text: 'amplify' },
      { key: 'B', text: 'suppress' },
      { key: 'C', text: 'distort' },
      { key: 'D', text: 'contradict' },
    ],
    correctKey: 'A' as const,
    explanation: '"amplify"は「増幅させる・広める」の意味で、主流メディアに無視されてきたコミュニティの声を広めるという文脈に合います。"suppress"は「抑圧する」、"distort"は「歪める」、"contradict"は「矛盾する」で文意に反します。\n\namplify は「増幅する、（声や訴えを）広く届ける」で、音響用語から転じて社会的な文脈でも使われる。主流メディアに見過ごされてきた声を広めるという記述にぴったり合う。\n\n【図解】声への働きかけ\n　語｜方向｜結果\n　amplify｜増幅する｜届く範囲が広がる\n　suppress｜抑圧する｜封じ込める\n　distort｜歪める｜内容が変わる\n　⇒ 無視されてきた声を広めるなら amplify\n　⚠ suppress は正反対の方向。overlooked という背景から、埋もれた声を掘り起こす方向を読む。',
    difficulty: 'advanced' as const,
  },

  // 010 — vocabulary
  {
    id: 'eiken_2kyu3_010',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'After years of ( ) research, the medical team finally identified the genetic mutation responsible for the rare disease.',
    choices: [
      { key: 'A', text: 'reckless' },
      { key: 'B', text: 'redundant' },
      { key: 'C', text: 'reluctant' },
      { key: 'D', text: 'rigorous' },
    ],
    correctKey: 'D' as const,
    explanation: '"rigorous"は「厳密な・徹底的な」の意味で、長年にわたる科学的研究を形容する際に適切な学術的語彙です。"reckless"は「無謀な」、"redundant"は「余分な・不要な」、"reluctant"は「気が進まない」で文脈に合いません。\n\nrigorous は「厳密な、徹底した」で、research、testing、standards、training を修飾する学術的な語。厳格な手続きに従うという含みがあり、長年の研究の質を評価する文脈で使われる。\n\n【図解】re で始まる形容詞\n　語｜意味｜評価\n　rigorous｜厳密な｜肯定的\n　reckless｜無謀な｜否定的\n　redundant｜余分な｜否定的\n　⇒ 長年の厳密な研究なら rigorous\n　⚠ reluctant は「気が進まない」で人の態度を表す。研究の質の形容には使えない。',
    difficulty: 'standard' as const,
  },

  // 011 — vocabulary: eminent vs. distinguished
  {
    id: 'eiken_2kyu3_011',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The university invited an ( ) scholar whose research on ancient civilizations had earned international recognition.',
    choices: [
      { key: 'A', text: 'imminent' },
      { key: 'B', text: 'implicit' },
      { key: 'C', text: 'eminent' },
      { key: 'D', text: 'eligible' },
    ],
    correctKey: 'C' as const,
    explanation: '"eminent"は「（学者・専門家として）著名な・卓越した」という意味の形容詞で、国際的に認められた学者を形容するのに適切です。"imminent"は「差し迫った」、"implicit"は「暗黙の」、"eligible"は「資格がある」で文脈に合いません。\n\neminent は「（学者や専門家として）著名な、卓越した」で、scholar、scientist、lawyer といった人物を修飾する。国際的に評価された研究という記述が、この語の使いどころを示している。\n\n【図解】語頭が紛らわしい形容詞\n　語｜意味｜修飾対象\n　eminent｜著名な｜学者, 専門家\n　imminent｜差し迫った｜危機, 出来事\n　eligible｜資格がある｜応募者, 候補\n　⇒ 国際的に評価された学者なら eminent\n　⚠ imminent との取り違えが最頻出。修飾するのが人か事態かで判断する。',
    difficulty: 'standard' as const,
  },

  // 012 — vocabulary
  {
    id: 'eiken_2kyu3_012',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The sudden closure of the factory left hundreds of workers in a ( ) situation, unsure of how to pay their bills.',
    choices: [
      { key: 'A', text: 'precarious' },
      { key: 'B', text: 'prosperous' },
      { key: 'C', text: 'redundant' },
      { key: 'D', text: 'prominent' },
    ],
    correctKey: 'A' as const,
    explanation: '"precarious"は「不安定な・危うい」の意味で、工場閉鎖後に生活費の支払いさえ不安になった労働者の状況を正確に表しています。"prosperous"は「繁栄した」で逆の意味。"redundant"は英国英語で「解雇された」の意味もありますが、"situation"を修飾する場合は不自然です。\n\nprecarious は「不安定な、危うい」で、situation、position、livelihood を修飾する。工場閉鎖で生活費の支払いすら見通せないという記述が、この語の意味をそのまま表している。\n\n【図解】状況を表す形容詞\n　語｜意味｜評価\n　precarious｜不安定で危うい｜否定的\n　prosperous｜繁栄した｜肯定的\n　prominent｜目立つ｜中立から肯定\n　⇒ 生活の見通しが立たないなら precarious\n　⚠ redundant は英国用法で「解雇された」だが、situation を修飾する形では不自然。修飾先を確認する。',
    difficulty: 'advanced' as const,
  },

  // 013 — vocabulary
  {
    id: 'eiken_2kyu3_013',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The charity organization relies heavily on ( ) donations from the public to fund its programs for homeless youth.',
    choices: [
      { key: 'A', text: 'voluntary' },
      { key: 'B', text: 'compulsory' },
      { key: 'C', text: 'statutory' },
      { key: 'D', text: 'mandatory' },
    ],
    correctKey: 'A' as const,
    explanation: '"voluntary"は「自発的な・無償の」の意味で、慈善団体への自由意志による寄付を表すのに適切です。"compulsory"・"mandatory"・"statutory"はいずれも「義務的な・強制的な」の意味で、自由意志による寄付とは矛盾します。\n\nvoluntary は「自発的な、任意の」で、強制ではなく本人の意思による行為を表す。慈善団体が市民の任意の寄付に頼っているという文脈に合う。副詞は voluntarily、名詞は volunteer。\n\n【図解】義務の有無を表す形容詞\n　語｜意味｜強制力\n　voluntary｜自発的な｜なし\n　mandatory｜義務的な｜あり\n　statutory｜法定の｜法律による\n　⇒ 市民の任意の寄付なら voluntary\n　⚠ compulsory と mandatory はほぼ同義で強制を表す。寄付の性質と矛盾する。',
    difficulty: 'standard' as const,
  },

  // 014 — vocabulary
  {
    id: 'eiken_2kyu3_014',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The author\'s new novel was widely praised for its ( ) portrayal of immigrant life, drawing on her own family history.',
    choices: [
      { key: 'A', text: 'authentic' },
      { key: 'B', text: 'artificial' },
      { key: 'C', text: 'ambiguous' },
      { key: 'D', text: 'anonymous' },
    ],
    correctKey: 'A' as const,
    explanation: '"authentic"は「真正な・本物の」の意味で、自身の家族の歴史に基づいた移民生活の描写を形容するのに適しています。"artificial"は「人工的な・作り物の」で逆の意味。"ambiguous"は「曖昧な」、"anonymous"は「匿名の」で文脈に合いません。\n\nauthentic は「本物の、真正な」で、体験や描写が偽りなく本質を捉えていることを表す。自身の家族史に基づく移民生活の描写という記述が、この語の根拠になっている。\n\n【図解】a で始まる形容詞\n　語｜意味｜評価\n　authentic｜真正な, 本物の｜肯定的\n　artificial｜人工的な, 作り物の｜否定的\n　ambiguous｜あいまいな｜中立から否定\n　⇒ 実体験に基づく描写なら authentic\n　⚠ artificial は正反対の評価。praised for という肯定の枠組みを見落とさない。',
    difficulty: 'standard' as const,
  },

  // 015 — vocabulary
  {
    id: 'eiken_2kyu3_015',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The CEO\'s decision to cut bonuses while increasing her own salary drew sharp ( ) from employees and shareholders alike.',
    choices: [
      { key: 'A', text: 'admiration' },
      { key: 'B', text: 'gratitude' },
      { key: 'C', text: 'endorsement' },
      { key: 'D', text: 'criticism' },
    ],
    correctKey: 'D' as const,
    explanation: '"criticism"は「批判」の意味で、自分の給与を上げながら部下のボーナスを削減するというCEOの決定に対する否定的な反応として適切です。"admiration"・"gratitude"・"endorsement"はいずれも肯定的な意味で文脈に反します。\n\ncriticism は「批判」で、draw criticism、face criticism の形で使う。自分の給与を上げながら部下の賞与を削った決定への反応として、否定的な語が入ることは文脈から明らかである。\n\n【図解】反応を表す名詞の方向\n　語｜方向｜使う場面\n　criticism｜否定的｜不公平な決定\n　endorsement｜肯定的｜支持表明\n　admiration｜肯定的｜称賛\n　⇒ 従業員と株主の双方から出るならcriticism\n　⚠ sharp（鋭い）という形容詞は否定的な語と結びつく。修飾語も判断材料になる。',
    difficulty: 'basic' as const,
  },

  // 016 — vocabulary
  {
    id: 'eiken_2kyu3_016',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Governments around the world are under pressure to ( ) their commitment to the Paris Agreement on climate change.',
    choices: [
      { key: 'A', text: 'reaffirm' },
      { key: 'B', text: 'withdraw' },
      { key: 'C', text: 'overlook' },
      { key: 'D', text: 'undermine' },
    ],
    correctKey: 'A' as const,
    explanation: '"reaffirm"は「再確認する・改めて誓約する」の意味で、各国政府がパリ協定への取り組みを改めて確認するという文脈に最も合います。"withdraw"は「撤退する」、"overlook"は「見落とす」、"undermine"は「損なう」で文意に反します。\n\nreaffirm は re-（再び）＋ affirm（断言する）で、「改めて表明する、再確認する」。commitment、support、pledge を目的語にとる。国際的な圧力の中で協定への関与を改めて示す文脈に合う。\n\n【図解】約束への働きかけ\n　語｜方向｜結果\n　reaffirm｜改めて確認する｜維持, 強化\n　withdraw｜撤回する｜離脱\n　undermine｜損なう｜弱体化\n　⇒ 協定への関与を再表明するなら reaffirm\n　⚠ under pressure to は「〜するよう圧力を受けて」。求められている方向が肯定的か否定的かを読む。',
    difficulty: 'advanced' as const,
  },

  // 017 — vocabulary
  {
    id: 'eiken_2kyu3_017',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The local council voted to ( ) the historic building from demolition by listing it as a protected heritage site.',
    choices: [
      { key: 'A', text: 'safeguard' },
      { key: 'B', text: 'exclude' },
      { key: 'C', text: 'exempt' },
      { key: 'D', text: 'surrender' },
    ],
    correctKey: 'A' as const,
    explanation: '"safeguard"は「守る・保護する」の意味で、歴史的建造物を取り壊しから保護するという文脈に最も適しています。"exclude"は「除外する」、"exempt"は「免除する」（from との相性は良いが意味が異なる）、"surrender"は「降伏する・引き渡す」です。\n\nsafeguard は「保護する、守る」で、safeguard A from B の形をとる。歴史的建造物を取り壊しから守るために保護指定した、という文脈に合う。名詞では「安全策、防護措置」の意味。\n\n【図解】from をとる動詞の意味\n　語｜意味｜含み\n　safeguard from｜〜から守る｜保護\n　exempt from｜〜を免除する｜義務の解除\n　exclude from｜〜から除外する｜締め出し\n　⇒ 取り壊しから守るなら safeguard\n　⚠ exempt は義務や負担の免除。物理的な破壊からの保護には使えない。',
    difficulty: 'standard' as const,
  },

  // 018 — vocabulary
  {
    id: 'eiken_2kyu3_018',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The research team\'s findings were so ( ) that they were able to secure additional funding for a second phase of the study.',
    choices: [
      { key: 'A', text: 'inconclusive' },
      { key: 'B', text: 'compelling' },
      { key: 'C', text: 'irrelevant' },
      { key: 'D', text: 'superficial' },
    ],
    correctKey: 'B' as const,
    explanation: '"compelling"は「説得力のある・注目に値する」の意味で、追加資金を獲得できるほど優れた研究結果を形容するのに適しています。"inconclusive"は「結論が出ない」、"irrelevant"は「無関係な」、"superficial"は「表面的な」でいずれも不適切です。\n\ncompelling は「説得力があり無視できない」で、evidence、findings、argument を修飾する。追加資金を獲得できるほどの成果だったという結果が、この語の妥当性を裏づけている。\n\n【図解】研究成果を評価する形容詞\n　語｜評価｜含み\n　compelling｜説得力がある｜肯定的\n　inconclusive｜決定的でない｜結論保留\n　superficial｜表面的な｜否定的\n　⇒ 追加資金につながる成果なら compelling\n　⚠ inconclusive は結論が出ない状態。so 〜 that 構文の結果と論理が合わない。',
    difficulty: 'standard' as const,
  },

  // 019 — vocabulary
  {
    id: 'eiken_2kyu3_019',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The government\'s new housing policy was designed to ( ) affordable homes for low-income families in urban areas.',
    choices: [
      { key: 'A', text: 'demolish' },
      { key: 'B', text: 'restrict' },
      { key: 'C', text: 'provision' },
      { key: 'D', text: 'facilitate' },
    ],
    correctKey: 'D' as const,
    explanation: '"facilitate"は「促進する・可能にする」の意味で、低所得世帯向けの手頃な住宅供給を促進する政策という文脈に適しています。"demolish"は「取り壊す」、"restrict"は「制限する」で逆の意味。"provision"は名詞・動詞両形ありますが、ここでは"facilitate"が最も自然です。\n\nfacilitate は「（物事を）容易にする、促進する」で、access、communication、process、provision を目的語にとる。低所得世帯向け住宅の供給を後押しする政策という文脈に合う。\n\n【図解】政策の働きかけの方向\n　語｜方向｜結果\n　facilitate｜促進する｜供給が増える\n　restrict｜制限する｜供給が減る\n　demolish｜取り壊す｜住宅が減る\n　⇒ 手頃な住宅の供給を後押しするなら facilitate\n　⚠ provision は主に名詞で「供給, 条項」。動詞として使う例は限られ、この位置では不自然。',
    difficulty: 'advanced' as const,
  },

  // 020 — vocabulary
  {
    id: 'eiken_2kyu3_020',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The patient\'s symptoms were ( ) with those of a rare tropical disease, leading doctors to order further tests.',
    choices: [
      { key: 'A', text: 'consistent' },
      { key: 'B', text: 'contradictory' },
      { key: 'C', text: 'irrelevant' },
      { key: 'D', text: 'beneficial' },
    ],
    correctKey: 'A' as const,
    explanation: '"consistent with"は「〜と一致する・〜に合致する」という医学・科学分野でよく使われる表現です。患者の症状が熱帯病の症状と一致しているという文脈に最も適しています。"contradictory"は「矛盾する」、"irrelevant"は「無関係な」で文意に反します。\n\nbe consistent with 〜 は「〜と一致する、〜に符合する」で、医学や科学の記述で頻出する。症状が特定の疾患の特徴と符合するため追加検査を行った、という診断の流れを表している。\n\n【図解】一致と矛盾を表す語\n　表現｜意味｜前置詞\n　consistent with｜〜と一致する｜with\n　contradictory to｜〜と矛盾する｜to\n　irrelevant to｜〜と無関係な｜to\n　⇒ 症状が疾患像と符合するなら consistent with\n　⚠ consistent には「首尾一貫した」の意味もある。with が続くなら「一致」の意味になる。',
    difficulty: 'advanced' as const,
  },

  // ===== GRAMMAR (021-035) =====

  // 021 — Non-defining relative clause
  {
    id: 'eiken_2kyu3_021',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'Dr. Nakamura, ( ) research on Alzheimer\'s disease has been cited over 2,000 times, will deliver the keynote address.',
    choices: [
      { key: 'A', text: 'that' },
      { key: 'B', text: 'whose' },
      { key: 'C', text: 'who' },
      { key: 'D', text: 'which' },
    ],
    correctKey: 'B' as const,
    explanation: 'コンマで区切られた非制限的関係代名詞節で、先行詞はDr. Nakamura（人）。後続する"research"は名詞なので、所有を示す関係代名詞"whose"（〜の）が必要です。"who"の後には動詞が続きます。"that"は非制限的節では使えません。非制限用法は先行詞を限定せず補足情報を加える働きをするため、コンマの有無が関係詞を選ぶ最初の手がかりになる。\n\n【図解】関係代名詞の選択\n　直後に続くもの｜使う関係詞｜例\n　名詞（無冠詞）｜whose｜whose research\n　動詞｜who, which｜who delivered\n　主語 ＋ 動詞｜whom, which｜whom we invited\n　⇒ research という名詞が続くので whose\n　⚠ 非制限用法では that を使えない。コンマの有無も選択肢を絞る手がかりになる。',
    difficulty: 'standard' as const,
  },

  // 022 — Inversion with Hardly
  {
    id: 'eiken_2kyu3_022',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'Hardly ( ) her desk when her manager called an urgent meeting that lasted until midnight.',
    choices: [
      { key: 'A', text: 'had she reached' },
      { key: 'B', text: 'she reached' },
      { key: 'C', text: 'she had reached' },
      { key: 'D', text: 'has she reached' },
    ],
    correctKey: 'A' as const,
    explanation: '"Hardly"が文頭に出ると倒置が起こります。"Hardly had + 主語 + 過去分詞 + when ..."で「〜するかしないうちに…した」という意味です。過去完了形を使い、助動詞hadが主語の前に出ます。"she had reached"では倒置がなく非文法的です。Hardly が文頭に出ると倒置が起こり、過去完了の助動詞 had が主語の前に出る。同義表現の No sooner とは呼応する接続詞が異なる。\n\n【図解】Hardly の倒置構文\n　構文｜語順｜接続詞\n　Hardly had 主語 過去分詞｜had が前｜when\n　No sooner had 主語 過去分詞｜had が前｜than\n　Scarcely had 主語 過去分詞｜had が前｜when\n　⇒ Hardly の直後は had she reached\n　⚠ she had reached では倒置になっていない。文頭が否定的副詞なら必ず語順を入れ替える。',
    difficulty: 'advanced' as const,
  },

  // 023 — Mixed conditional
  {
    id: 'eiken_2kyu3_023',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'If she had taken the doctor\'s advice seriously back then, she ( ) in better health today.',
    choices: [
      { key: 'A', text: 'would be' },
      { key: 'B', text: 'would have been' },
      { key: 'C', text: 'will be' },
      { key: 'D', text: 'had been' },
    ],
    correctKey: 'A' as const,
    explanation: 'これは混合仮定法（mixed conditional）です。If節は過去の事実に反する仮定（仮定法過去完了：had taken）、主節は現在への影響（仮定法過去：would be）を表します。"would have been"は純粋な仮定法過去完了で、現在の状態には使えません。\n\n混合仮定法は、条件節と主節で表す時が異なる仮定法。ここでは過去に助言を聞かなかったという条件（had taken）と、その結果としての現在の健康状態（would be）を組み合わせている。today という語が現在を示す手がかりになる。\n\n【図解】仮定法の組み合わせ\n　条件節｜主節｜表す内容\n　had 過去分詞｜would have 過去分詞｜過去の結果\n　had 過去分詞｜would ＋ 原形｜現在への影響（混合）\n　過去形｜would ＋ 原形｜現在の仮定\n　⇒ today があるので would be\n　⚠ would have been を選ぶと過去の状態になる。主節が指す時を副詞で確認する。',
    difficulty: 'advanced' as const,
  },

  // 024 — Formal passive: It is believed that
  {
    id: 'eiken_2kyu3_024',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: '( ) that the ancient ruins discovered in the valley date back to the third century BCE.',
    choices: [
      { key: 'A', text: 'They believe' },
      { key: 'B', text: 'It is believed' },
      { key: 'C', text: 'Believed it is' },
      { key: 'D', text: 'People believes' },
    ],
    correctKey: 'B' as const,
    explanation: '"It is believed that ..."は「〜と信じられている」というフォーマルな受動態表現で、学術的・報道的な文章でよく使われます。"They believe"も正しい英語ですが、Cは語順が誤り、Dは"people"が複数形なのに"believes"と三単現を使っており非文法的です。\n\nIt is believed that 〜 は「〜と信じられている」を表す形式主語構文で、情報源を明示せずに一般的な見解を述べるときに使う。学術論文や報道でよく用いられるフォーマルな受動表現である。\n\n【図解】伝聞を表す受動構文\n　形｜意味｜例\n　It is believed that 節｜〜と考えられている｜It is believed that\n　It is said that 節｜〜と言われている｜It is said that\n　主語 ＋ is said to do｜〜すると言われる｜He is said to be\n　⇒ 遺跡の年代について一般的見解を述べるなら It is believed\n　⚠ People believes は主語と動詞が一致していない。数の一致も確認する。',
    difficulty: 'standard' as const,
  },

  // 025 — Scarcely ... when
  {
    id: 'eiken_2kyu3_025',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'Scarcely ( ) the announcement when reporters flooded the press room with questions.',
    choices: [
      { key: 'A', text: 'had the minister finished' },
      { key: 'B', text: 'the minister had finished' },
      { key: 'C', text: 'did the minister finish' },
      { key: 'D', text: 'the minister finished' },
    ],
    correctKey: 'A' as const,
    explanation: '"Scarcely"が文頭に来る場合も"Hardly"と同様に倒置が起こります。"Scarcely had + 主語 + 過去分詞 + when ..."という形で「〜するかしないうちに…した」を表します。過去完了形と倒置（had + 主語）の両方が必要です。Scarcely も Hardly と同じく否定的な意味を持つ副詞で、文頭に置かれると主節が倒置される。呼応するのは when である。\n\n【図解】Scarcely の倒置構文\n　文頭の語｜語順｜後半の接続詞\n　Scarcely｜had ＋ 主語 ＋ 過去分詞｜when\n　Hardly｜had ＋ 主語 ＋ 過去分詞｜when\n　No sooner｜had ＋ 主語 ＋ 過去分詞｜than\n　⇒ Scarcely の直後は had the minister finished\n　⚠ Scarcely 〜 than とはしない。when と than の対応を取り違えない。',
    difficulty: 'advanced' as const,
  },

  // 026 — Perfect aspect: future perfect
  {
    id: 'eiken_2kyu3_026',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'By the time the new bridge opens next spring, engineers ( ) on the project for over six years.',
    choices: [
      { key: 'A', text: 'will work' },
      { key: 'B', text: 'are working' },
      { key: 'C', text: 'have worked' },
      { key: 'D', text: 'will have been working' },
    ],
    correctKey: 'D' as const,
    explanation: '"By the time + 現在形"の節に対して主節では未来完了進行形（will have been doing）を使います。「来春開通するまでには、6年以上取り組み続けていることになる」という継続を強調する表現です。未来完了"will have worked"も可能ですが、継続性を示す進行形が最も自然です。\n\n【図解】未来を表す完了形\n　形｜表す内容｜目印\n　will have been doing｜未来の時点までの継続｜for 期間\n　will have done｜未来の時点までの完了｜by 時点\n　will be doing｜未来の時点での進行｜at 時刻\n　⇒ 6年以上の継続なら will have been working\n　⚠ By the time の節は現在形で書く。時を表す副詞節では未来形を使わない。',
    difficulty: 'advanced' as const,
  },

  // 027 — It is reported that (formal passive)
  {
    id: 'eiken_2kyu3_027',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'It ( ) that the two companies have been in secret merger talks for several months.',
    choices: [
      { key: 'A', text: 'is reported' },
      { key: 'B', text: 'reports' },
      { key: 'C', text: 'has reported' },
      { key: 'D', text: 'was reporting' },
    ],
    correctKey: 'A' as const,
    explanation: '"It is reported that ..."は「〜と報告されている・〜と伝えられている」という報道でよく使われるフォーマルな受動態表現です。"It"は形式主語で、that節が真の主語です。"reports"では主語が"it"なので意味が通じません。\n\nIt is reported that 〜 は「〜と報じられている」を表す形式主語構文で、報道記事の定型表現。It が形式主語、that 節が真主語となる。合併協議が進んでいると伝えられている、という伝聞を表す。\n\n【図解】報道で使う受動表現\n　形｜意味｜情報源\n　It is reported that｜報じられている｜報道\n　It is believed that｜考えられている｜一般的見解\n　It is estimated that｜推定されている｜統計\n　⇒ 報道による伝聞なら It is reported\n　⚠ It reports とすると It が報じる主体になり意味をなさない。形式主語構文では受動態を使う。',
    difficulty: 'standard' as const,
  },

  // 028 — Non-defining vs. defining relative clause
  {
    id: 'eiken_2kyu3_028',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The policy ( ) was introduced last year has already reduced traffic congestion by 20 percent.',
    choices: [
      { key: 'A', text: ', which' },
      { key: 'B', text: ', that' },
      { key: 'C', text: 'which' },
      { key: 'D', text: 'that' },
    ],
    correctKey: 'D' as const,
    explanation: 'コンマなしの制限的関係代名詞節で、「昨年導入されたその政策」と特定するために"that"を使います。コンマなしの制限的用法では"that"か"which"が使えますが、"that"の方が制限的節では慣用的です。"that"はコンマを伴う非制限的節では使えないため、コンマ付きの選択肢は除外されます。コンマの有無で使える関係詞が変わるため、選択肢に句読点が含まれている場合はまずそこを確認するのが解法の近道になる。\n\n【図解】関係代名詞とコンマ\n　用法｜コンマ｜使える関係詞\n　制限用法｜なし｜that, which\n　非制限用法｜あり｜which のみ\n　先行詞なし｜（不要）｜what\n　⇒ どの政策かを特定する制限用法なら that\n　⚠ that はコンマとともに使えない。コンマ付きの選択肢は自動的に除外できる。',
    difficulty: 'standard' as const,
  },

  // 029 — Subjunctive: It is necessary that
  {
    id: 'eiken_2kyu3_029',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The committee strongly recommends that the new safety protocol ( ) before the factory reopens.',
    choices: [
      { key: 'A', text: 'is implemented' },
      { key: 'B', text: 'will be implemented' },
      { key: 'C', text: 'was implemented' },
      { key: 'D', text: 'be implemented' },
    ],
    correctKey: 'D' as const,
    explanation: '"recommend that ..."の後のthat節では仮定法現在（動詞の原形）を使います。受動態の場合は"be + 過去分詞"の形になります。三単現の"s"はつけません。"is implemented"は直説法現在で、"recommend"などの提案動詞の後では使いません。recommend、suggest、insist などが提案や要求の意味で that 節をとると、節内の動詞は主語の人称や数に関係なく原形になる。\n\n【図解】仮定法現在の受動態\n　動詞｜that 節の形｜例\n　recommend｜be ＋ 過去分詞｜be implemented\n　require｜be ＋ 過去分詞｜be completed\n　insist｜be ＋ 過去分詞｜be informed\n　⇒ 受動の原形なら be implemented\n　⚠ is implemented は直説法。提案や要求の that 節では時制の一致が起こらない。',
    difficulty: 'advanced' as const,
  },

  // 030 — Cleft sentence
  {
    id: 'eiken_2kyu3_030',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'It was the unexpected cold snap in March ( ) destroyed most of the region\'s cherry blossom crop that year.',
    choices: [
      { key: 'A', text: 'which' },
      { key: 'B', text: 'what' },
      { key: 'C', text: 'that' },
      { key: 'D', text: 'where' },
    ],
    correctKey: 'C' as const,
    explanation: 'これは強調構文（cleft sentence）です。"It was + 強調したい語句 + that + 残りの文"という形で、"the unexpected cold snap in March"を強調しています。強調構文では先行詞が人でも物でも"that"を使うのが一般的です（"which"も可能ですが"that"の方が慣用的）。\n\n【図解】強調構文の形\n　強調する要素｜つなぐ語｜例\n　物, 事｜that, which｜It was the cold snap that\n　人｜that, who｜It was he who\n　時, 場所の副詞句｜that｜It was in March that\n　⇒ 出来事を強調するなら that\n　⚠ what は先行詞を含む関係代名詞で強調構文には使えない。where も先行詞が場所に限られる。',
    difficulty: 'standard' as const,
  },

  // 031 — No sooner ... than
  {
    id: 'eiken_2kyu3_031',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'No sooner ( ) the concert hall than she realized she had left her ticket at home.',
    choices: [
      { key: 'A', text: 'she entered' },
      { key: 'B', text: 'she had entered' },
      { key: 'C', text: 'has she entered' },
      { key: 'D', text: 'had she entered' },
    ],
    correctKey: 'D' as const,
    explanation: '"No sooner"が文頭に来ると倒置が起こります。"No sooner had + 主語 + 過去分詞 + than ..."で「〜するやいなや…した」の意味です。過去完了の助動詞"had"が主語の前に出ます。"she had entered"では倒置がなく非文法的です。No sooner から than までの構文は前半に過去完了、後半に過去形を置き、二つの出来事の時間差がごく小さいことを表す。\n\n【図解】No sooner の倒置\n　構文｜前半｜後半\n　No sooner had 主語 過去分詞｜倒置あり｜than ＋ 過去形\n　Hardly had 主語 過去分詞｜倒置あり｜when ＋ 過去形\n　As soon as 主語 過去形｜倒置なし｜（接続詞が先頭）\n　⇒ No sooner の直後は had she entered\n　⚠ than の前は過去完了、後ろは過去形。時制の組み合わせも確認する。',
    difficulty: 'advanced' as const,
  },

  // 032 — Present perfect vs. simple past
  {
    id: 'eiken_2kyu3_032',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The city ( ) three major earthquakes since the new seismic monitoring system was installed.',
    choices: [
      { key: 'A', text: 'has experienced' },
      { key: 'B', text: 'experienced' },
      { key: 'C', text: 'had experienced' },
      { key: 'D', text: 'was experiencing' },
    ],
    correctKey: 'A' as const,
    explanation: '"since + 過去の時点"で始まる節とともに主節では現在完了形を使います。「地震計が設置されて以来、3回の大地震を経験している」という現在までの経験・継続を表します。単純過去"experienced"はsince節と組み合わせられません。\n\nsince ＋ 過去の時点 は現在完了形とともに使い、その時点から現在までの経験や継続を表す。地震計の設置以来3回の大地震を経験しているという文で、現在とのつながりが保たれている。\n\n【図解】時制を決める副詞句\n　副詞句｜使う時制｜例\n　since ＋ 時点｜現在完了｜since 2010\n　ago｜過去形｜three years ago\n　by the time ＋ 過去形｜過去完了｜by the time he arrived\n　⇒ since 節があるので has experienced\n　⚠ 単純過去は since と併用しない。副詞句と時制の対応が最頻出のポイント。',
    difficulty: 'standard' as const,
  },

  // 033 — Conditional type 3
  {
    id: 'eiken_2kyu3_033',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'If the rescue team ( ) two hours earlier, they might have found more survivors.',
    choices: [
      { key: 'A', text: 'arrived' },
      { key: 'B', text: 'would arrive' },
      { key: 'C', text: 'had arrived' },
      { key: 'D', text: 'have arrived' },
    ],
    correctKey: 'C' as const,
    explanation: '仮定法過去完了の条件節です。"If + 主語 + had + 過去分詞"で過去の事実に反する仮定を表します。主節では"might have found"（〜できたかもしれない）が使われています。"would arrive"は仮定法過去で現在・未来の仮定に使います。仮定法過去完了は過去の事実に反する仮定を表し、条件節に had と過去分詞、帰結節に would や might と have と過去分詞を用いる。\n\n【図解】仮定法過去完了\n　条件節｜主節｜表す内容\n　If had 過去分詞｜would have 過去分詞｜過去の反実仮想\n　If had 過去分詞｜might have 過去分詞｜過去の可能性\n　If 過去形｜would ＋ 原形｜現在の仮定\n　⇒ 主節が might have found なら had arrived\n　⚠ would arrive は現在の仮定形。主節の時制と必ず対応させる。',
    difficulty: 'standard' as const,
  },

  // 034 — Passive: It is said that
  {
    id: 'eiken_2kyu3_034',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The missing explorer ( ) to have reached the summit before the storm struck, but no records have been found.',
    choices: [
      { key: 'A', text: 'is said' },
      { key: 'B', text: 'says' },
      { key: 'C', text: 'has said' },
      { key: 'D', text: 'is saying' },
    ],
    correctKey: 'A' as const,
    explanation: '"is said to have + 過去分詞"は「〜したと言われている」という過去の出来事についての伝聞表現です。"It is said that ..."と同じ意味を持つフォーマルな表現です。主語が"the missing explorer"（人）の場合も同じ形を使います。\n\nbe said to have ＋ 過去分詞 は「〜したと言われている」で、伝聞の内容が主節より前の出来事であることを示す。It is said that he reached 〜 と書き換えられる。単なる be said to do なら現在の状態を表す。\n\n【図解】不定詞の形と時の関係\n　形｜表す時｜例\n　be said to do｜主節と同時｜is said to live there\n　be said to have done｜主節より前｜is said to have reached\n　be said to be doing｜同時進行｜is said to be working\n　⇒ 登頂は過去の出来事なので to have reached\n　⚠ says と能動にすると探検家が語ったことになる。伝聞は受動態で表す。',
    difficulty: 'advanced' as const,
  },

  // 035 — Perfect infinitive with modal
  {
    id: 'eiken_2kyu3_035',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'You ( ) the professor before submitting your thesis; now it is too late to make major changes.',
    choices: [
      { key: 'A', text: 'should consult' },
      { key: 'B', text: 'must consult' },
      { key: 'C', text: 'ought to consult' },
      { key: 'D', text: 'should have consulted' },
    ],
    correctKey: 'D' as const,
    explanation: '"should have + 過去分詞"は「〜すべきだったのに（しなかった）」という過去の後悔・非難を表します。「提出する前に教授に相談すべきだったのに、今となっては遅い」という文脈に合います。"should consult"は現在・未来の義務を表します。\n\nshould have ＋ 過去分詞 は「〜すべきだったのに実際はしなかった」という過去への後悔や非難を表す。now it is too late という後半が、機会がすでに失われたことを示している。\n\n【図解】助動詞 ＋ have ＋ 過去分詞\n　形｜意味｜含み\n　should have done｜すべきだった｜後悔, 非難\n　must have done｜〜したに違いない｜過去の推量\n　could have done｜〜できたのに｜実現しなかった可能性\n　⇒ 相談しなかったことへの指摘なら should have consulted\n　⚠ should consult は現在や未来の義務。時制の違いが意味を大きく変える。',
    difficulty: 'standard' as const,
  },

  // ===== READING (036-050) =====
  // --- PASSAGE 1: Science/Technology (AI & Medicine) — Q036-038 ---
  {
    id: 'eiken_2kyu3_036',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Artificial intelligence is transforming the field of medical diagnosis in ways that were unimaginable a decade ago. Machine learning algorithms trained on millions of medical images can now detect early signs of diseases such as diabetic retinopathy and certain cancers with accuracy that rivals—and in some cases exceeds—that of experienced specialists. In one landmark study, an AI system identified breast cancer from mammograms with a 9.4% reduction in false negatives compared to expert radiologists.\n\nDespite these impressive results, the integration of AI into clinical practice remains cautious. Healthcare professionals emphasize that AI tools must be understood as decision-support systems rather than autonomous diagnosticians. Errors made by AI carry different consequences from those made by humans: a physician can explain her reasoning and adapt when questioned, whereas an AI\'s logic may be opaque even to its developers—a phenomenon known as the \'black box\' problem. Regulatory bodies in several countries now require that medical AI systems demonstrate not only accuracy but also interpretability before receiving approval."\n\nAccording to the passage, what is the "black box" problem?',
    choices: [
      { key: 'A', text: 'AI systems store patient data in encrypted formats that doctors cannot access.' },
      { key: 'B', text: 'AI requires too much electricity to be practical in hospitals.' },
      { key: 'C', text: 'Medical AI must be kept in secure, isolated computer servers.' },
      { key: 'D', text: 'The decision-making process of AI is difficult to understand even for its creators.' },
    ],
    correctKey: 'D' as const,
    explanation: 'パッセージでは「an AI\'s logic may be opaque even to its developers—a phenomenon known as the \'black box\' problem」と説明されています。AIの判断プロセスが開発者にさえ不透明であることを指します。Dがこれを正確に言い換えています。\n\n【図解】black box problem の定義\n　要素｜本文の記述｜内容\n　対象｜AI の判断過程｜logic\n　特徴｜opaque｜不透明\n　範囲｜even to its developers｜開発者にも不明\n　⇒ 判断の理由が説明できない点が問題\n　⚠ データの暗号化や物理的な隔離とは無関係。比喩表現を字義どおりに取らない。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_037',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about AI in medicine and answer the question.\n\n"Artificial intelligence is transforming the field of medical diagnosis in ways that were unimaginable a decade ago. Machine learning algorithms trained on millions of medical images can now detect early signs of diseases such as diabetic retinopathy and certain cancers with accuracy that rivals—and in some cases exceeds—that of experienced specialists. In one landmark study, an AI system identified breast cancer from mammograms with a 9.4% reduction in false negatives compared to expert radiologists.\n\nDespite these impressive results, the integration of AI into clinical practice remains cautious. Healthcare professionals emphasize that AI tools must be understood as decision-support systems rather than autonomous diagnosticians. Errors made by AI carry different consequences from those made by humans: a physician can explain her reasoning and adapt when questioned, whereas an AI\'s logic may be opaque even to its developers—a phenomenon known as the \'black box\' problem. Regulatory bodies in several countries now require that medical AI systems demonstrate not only accuracy but also interpretability before receiving approval."\n\nThe word "rivals" in the first paragraph is closest in meaning to:',
    choices: [
      { key: 'A', text: 'competes with' },
      { key: 'B', text: 'falls short of' },
      { key: 'C', text: 'relies upon' },
      { key: 'D', text: 'replaces entirely' },
    ],
    correctKey: 'A' as const,
    explanation: '"rivals"は「匹敵する・張り合う」の意味です。「経験豊富な専門家の精度に匹敵し、場合によってはそれを上回る」という文脈から、"competes with"（〜と肩を並べる）が最も近い意味です。"falls short of"は「及ばない」で反対の意味になります。語彙の言い換え問題では、前後の文が示す方向、つまり肯定的か否定的かを確認してから選択肢を絞ると誤答を避けやすい。\n\n【図解】rivals の意味の取り方\n　語｜品詞｜意味\n　rival｜動詞｜匹敵する, 肩を並べる\n　rival｜名詞｜競争相手\n　fall short of｜句動詞｜及ばない\n　⇒ 専門家の精度に匹敵するなら competes with\n　⚠ falls short of は正反対の意味。sometimes exceeds という続きが上回る場合もあることを示す。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_038',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about AI in medicine and answer the question.\n\n"Artificial intelligence is transforming the field of medical diagnosis in ways that were unimaginable a decade ago. Machine learning algorithms trained on millions of medical images can now detect early signs of diseases such as diabetic retinopathy and certain cancers with accuracy that rivals—and in some cases exceeds—that of experienced specialists. In one landmark study, an AI system identified breast cancer from mammograms with a 9.4% reduction in false negatives compared to expert radiologists.\n\nDespite these impressive results, the integration of AI into clinical practice remains cautious. Healthcare professionals emphasize that AI tools must be understood as decision-support systems rather than autonomous diagnosticians. Errors made by AI carry different consequences from those made by humans: a physician can explain her reasoning and adapt when questioned, whereas an AI\'s logic may be opaque even to its developers—a phenomenon known as the \'black box\' problem. Regulatory bodies in several countries now require that medical AI systems demonstrate not only accuracy but also interpretability before receiving approval."\n\nWhat can be inferred from the passage about the future of AI in healthcare?',
    choices: [
      { key: 'A', text: 'AI will be fully autonomous in making all medical decisions within the next decade.' },
      { key: 'B', text: 'Regulatory approval processes will be simplified to allow faster adoption of AI tools.' },
      { key: 'C', text: 'Human oversight is likely to remain important even as AI becomes more accurate.' },
      { key: 'D', text: 'AI will eventually make medical specialists unnecessary in most diagnostic fields.' },
    ],
    correctKey: 'C' as const,
    explanation: 'パッセージは「AIは自律的な診断者ではなく意思決定支援システムとして理解されるべき」という専門家の見解と、規制当局が精度に加えて解釈可能性を求めている点を強調しています。これらの点から、AIの精度が向上しても人間による監督が重要であり続けるという推論が導かれます。AとDはパッセージの慎重な立場と矛盾します。\n\n【図解】本文から導ける推論\n　根拠｜本文の記述｜導ける結論\n　AI の位置づけ｜decision support system｜自律的診断者ではない\n　規制当局の要求｜interpretability も求める｜説明可能性が必要\n　帰結｜人間の監督が重要｜精度向上後も継続\n　⇒ 人間の関与が残るという推論が妥当\n　⚠ 「10年以内に完全自律化」「専門医が不要になる」は本文の慎重な論調と矛盾する。',
    difficulty: 'advanced' as const,
  },

  // --- PASSAGE 2: Social/Cultural Commentary (Globalization & Urban Life) — Q039-041 ---
  {
    id: 'eiken_2kyu3_039',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"The rapid expansion of global fast-food chains into traditionally food-rich cultures has sparked a heated debate about culinary identity. Proponents of globalization argue that consumers benefit from greater choice and convenience, and that local cuisines are adaptable enough to coexist with international brands. Critics, however, warn that the dominance of standardized menus is slowly eroding regional culinary traditions that took centuries to develop.\n\nThe situation is more complex than it first appears. In many cities across East Asia and South America, international chains have paradoxically stimulated interest in local street food, as younger generations seeking authentic experiences push back against the uniformity of global brands. Some food anthropologists suggest that globalization does not simply erase local identity but rather forces cultures to define and reassert what makes them distinctive. Nevertheless, in rural communities with fewer resources, the appeal of cheap, consistent fast food continues to challenge traditional food practices."\n\nAccording to the passage, what unexpected effect has the spread of international fast-food chains had in some cities?',
    choices: [
      { key: 'A', text: 'It has caused younger generations to abandon their traditional diets entirely.' },
      { key: 'B', text: 'It has increased interest in local and authentic street food among young people.' },
      { key: 'C', text: 'It has led governments to ban foreign restaurant chains from operating.' },
      { key: 'D', text: 'It has made traditional cuisine more expensive and less accessible.' },
    ],
    correctKey: 'B' as const,
    explanation: '"international chains have paradoxically stimulated interest in local street food, as younger generations seeking authentic experiences push back against the uniformity of global brands"という記述から、国際的チェーンが逆説的に地元の屋台料理への関心を高めたことがわかります。Bがこれを正確に表しています。\n\n【図解】逆説的な効果\n　段階｜本文の記述｜結果\n　国際チェーンの進出｜uniformity of global brands｜画一化\n　若い世代の反応｜seeking authentic experiences｜本物志向\n　帰結｜paradoxically stimulated interest｜地元の屋台料理に関心\n　⇒ 画一化への反発が地元料理への関心を高めた\n　⚠ 「伝統食を完全に捨てた」「チェーンを禁止した」は本文にない。paradoxically の内容を正確に読む。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_040',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about globalization and food culture and answer the question.\n\n"The rapid expansion of global fast-food chains into traditionally food-rich cultures has sparked a heated debate about culinary identity. Proponents of globalization argue that consumers benefit from greater choice and convenience, and that local cuisines are adaptable enough to coexist with international brands. Critics, however, warn that the dominance of standardized menus is slowly eroding regional culinary traditions that took centuries to develop.\n\nThe situation is more complex than it first appears. In many cities across East Asia and South America, international chains have paradoxically stimulated interest in local street food, as younger generations seeking authentic experiences push back against the uniformity of global brands. Some food anthropologists suggest that globalization does not simply erase local identity but rather forces cultures to define and reassert what makes them distinctive. Nevertheless, in rural communities with fewer resources, the appeal of cheap, consistent fast food continues to challenge traditional food practices."\n\nThe word "eroding" in the first paragraph is closest in meaning to:',
    choices: [
      { key: 'A', text: 'supporting' },
      { key: 'B', text: 'expanding' },
      { key: 'C', text: 'gradually destroying' },
      { key: 'D', text: 'quickly replacing' },
    ],
    correctKey: 'C' as const,
    explanation: '"eroding"は"erode"の現在分詞で「徐々に侵食する・少しずつ損なう」の意味です。「標準化されたメニューが数百年かけて発展した地域の食文化を徐々に損なっている」という文脈から、"gradually destroying"（徐々に破壊する）が最も近い意味です。"quickly replacing"は速度が違います。\n\n【図解】erode の意味\n　語｜作用の速さ｜対象\n　erode｜徐々に｜土壌, 文化, 信頼\n　replace｜置き換え｜速さは文脈次第\n　expand｜拡大｜逆方向\n　⇒ 何世紀もかけて育った食文化を徐々に損なうなら gradually destroying\n　⚠ quickly replacing は速度が異なる。erode は少しずつ削り取るという含みを持つ。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_041',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about globalization and food culture and answer the question.\n\n"The rapid expansion of global fast-food chains into traditionally food-rich cultures has sparked a heated debate about culinary identity. Proponents of globalization argue that consumers benefit from greater choice and convenience, and that local cuisines are adaptable enough to coexist with international brands. Critics, however, warn that the dominance of standardized menus is slowly eroding regional culinary traditions that took centuries to develop.\n\nThe situation is more complex than it first appears. In many cities across East Asia and South America, international chains have paradoxically stimulated interest in local street food, as younger generations seeking authentic experiences push back against the uniformity of global brands. Some food anthropologists suggest that globalization does not simply erase local identity but rather forces cultures to define and reassert what makes them distinctive. Nevertheless, in rural communities with fewer resources, the appeal of cheap, consistent fast food continues to challenge traditional food practices."\n\nWhich of the following best describes the overall argument of the passage?',
    choices: [
      { key: 'A', text: 'Globalization is entirely harmful to local food cultures and should be stopped.' },
      { key: 'B', text: 'Traditional food cultures are strong enough to resist globalization without any consequences.' },
      { key: 'C', text: 'Rural communities are better at preserving food traditions than urban areas.' },
      { key: 'D', text: 'The impact of globalization on food culture is complex and varies by context.' },
    ],
    correctKey: 'D' as const,
    explanation: 'パッセージは「The situation is more complex than it first appears」と明言し、都市部では地元料理への関心が高まる一方、農村部では課題が続くという複雑な状況を描いています。Dが「文脈によって影響が異なる」という全体的な主張を最も正確に表しています。本文全体の主張を問う設問では、断定的すぎる選択肢を避けるのが基本になる。\n\n【図解】本文の全体的な主張\n　地域｜本文の記述｜傾向\n　都市部｜地元料理への関心が高まる｜肯定的な側面\n　農村部｜課題が続く｜否定的な側面\n　筆者の立場｜more complex than it appears｜一律には論じない\n　⇒ 影響は文脈によって異なるという主張\n　⚠ 「globalization は完全に有害」と一方に寄せる選択肢は誤り。両面の記述を確認する。',
    difficulty: 'advanced' as const,
  },

  // --- PASSAGE 3: Environmental Topic (Ocean Pollution) — Q042-044 ---
  {
    id: 'eiken_2kyu3_042',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Every year, an estimated eight million metric tons of plastic waste enter the world\'s oceans, threatening marine ecosystems that have evolved over millions of years. Unlike organic matter, most plastics do not biodegrade; instead, they break down into microplastics—particles smaller than five millimeters—which are now found in the deepest ocean trenches and the most remote polar ice. Scientists have detected microplastics in the tissues of fish, seabirds, and marine mammals, raising serious concerns about the long-term consequences for biodiversity.\n\nThe problem is compounded by the fact that much of this pollution originates far from the ocean. Rivers carry plastic waste from inland cities and agricultural areas to coastal waters, making purely coastal cleanup efforts insufficient. Some environmental groups have begun installing interceptor devices in rivers to catch debris before it reaches the sea, a strategy that many scientists consider more effective than post-pollution ocean cleanup operations. International cooperation, however, remains the greatest challenge: plastics produced in one country routinely end up on the beaches of another."\n\nWhy do scientists consider river interception more effective than ocean cleanup?',
    choices: [
      { key: 'A', text: 'Oceans are too deep for cleanup equipment to operate effectively.' },
      { key: 'B', text: 'River interception is cheaper because it requires fewer workers.' },
      { key: 'C', text: 'Stopping plastic before it reaches the ocean prevents further dispersion.' },
      { key: 'D', text: 'Ocean cleanup removes only large pieces of plastic, not microplastics.' },
    ],
    correctKey: 'C' as const,
    explanation: 'パッセージは「interceptor devices in rivers to catch debris before it reaches the sea」が「post-pollution ocean cleanup operations」より効果的だとしています。海に入ってしまった後のクリーンアップより、入る前に止める方が分散を防げるという論理です。Cがこれを最もよく表しています。\n\n【図解】河川での回収が優先される理由\n　段階｜本文の記述｜効果\n　河川での捕捉｜before it reaches the sea｜拡散前に止める\n　海洋での回収｜post-pollution cleanup｜拡散後の対応\n　比較｜前者がより効果的｜分散を防げる\n　⇒ 海に出る前に止めれば拡散を防げる\n　⚠ 費用や作業員数の比較は本文にない。理由の中身を本文の語句で確認する。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_043',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about ocean pollution and answer the question.\n\n"Every year, an estimated eight million metric tons of plastic waste enter the world\'s oceans, threatening marine ecosystems that have evolved over millions of years. Unlike organic matter, most plastics do not biodegrade; instead, they break down into microplastics—particles smaller than five millimeters—which are now found in the deepest ocean trenches and the most remote polar ice. Scientists have detected microplastics in the tissues of fish, seabirds, and marine mammals, raising serious concerns about the long-term consequences for biodiversity.\n\nThe problem is compounded by the fact that much of this pollution originates far from the ocean. Rivers carry plastic waste from inland cities and agricultural areas to coastal waters, making purely coastal cleanup efforts insufficient. Some environmental groups have begun installing interceptor devices in rivers to catch debris before it reaches the sea, a strategy that many scientists consider more effective than post-pollution ocean cleanup operations. International cooperation, however, remains the greatest challenge: plastics produced in one country routinely end up on the beaches of another."\n\nWhat does the passage imply about the relationship between microplastics and wildlife?',
    choices: [
      { key: 'A', text: 'Marine animals have developed immunity to microplastics over time.' },
      { key: 'B', text: 'Microplastics have already been proven to cause extinction of certain species.' },
      { key: 'C', text: 'The presence of microplastics in animal tissues suggests potential harm to ecosystems.' },
      { key: 'D', text: 'Only deep-sea species are affected by microplastics, not coastal animals.' },
    ],
    correctKey: 'C' as const,
    explanation: 'パッセージは「Scientists have detected microplastics in the tissues of fish, seabirds, and marine mammals, raising serious concerns about the long-term consequences for biodiversity」と述べています。「深刻な懸念」を「示唆している」という推論が必要です。Bは証明されたとは書かれていません。Cが「潜在的な害を示唆する」という適切な推論です。\n\n【図解】検出結果からの推論\n　事実｜本文の記述｜推論\n　組織内での検出｜fish, seabirds, marine mammals｜生物体内に蓄積\n　研究者の反応｜raising serious concerns｜懸念の表明\n　結論の段階｜long-term consequences は未確定｜潜在的な害\n　⇒ 生態系への潜在的な害を示唆する、が妥当\n　⚠ 「絶滅を引き起こすと証明された」は言い過ぎ。懸念と証明を区別する。',
    difficulty: 'advanced' as const,
  },

  {
    id: 'eiken_2kyu3_044',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about ocean pollution and answer the question.\n\n"Every year, an estimated eight million metric tons of plastic waste enter the world\'s oceans, threatening marine ecosystems that have evolved over millions of years. Unlike organic matter, most plastics do not biodegrade; instead, they break down into microplastics—particles smaller than five millimeters—which are now found in the deepest ocean trenches and the most remote polar ice. Scientists have detected microplastics in the tissues of fish, seabirds, and marine mammals, raising serious concerns about the long-term consequences for biodiversity.\n\nThe problem is compounded by the fact that much of this pollution originates far from the ocean. Rivers carry plastic waste from inland cities and agricultural areas to coastal waters, making purely coastal cleanup efforts insufficient. Some environmental groups have begun installing interceptor devices in rivers to catch debris before it reaches the sea, a strategy that many scientists consider more effective than post-pollution ocean cleanup operations. International cooperation, however, remains the greatest challenge: plastics produced in one country routinely end up on the beaches of another."\n\nAccording to the passage, which of the following makes solving ocean plastic pollution especially difficult?',
    choices: [
      { key: 'A', text: 'There is no technology capable of removing microplastics from seawater.' },
      { key: 'B', text: 'Most plastic in the ocean comes from ships rather than rivers.' },
      { key: 'C', text: 'Pollution crosses national borders, making international agreement necessary but difficult.' },
      { key: 'D', text: 'Environmental organizations disagree about which cleanup method is best.' },
    ],
    correctKey: 'C' as const,
    explanation: '"International cooperation, however, remains the greatest challenge: plastics produced in one country routinely end up on the beaches of another."という記述から、プラスチック汚染が国境を越えるため国際協力が最大の課題であることがわかります。Cがこれを正確に表しています。\n\n【図解】解決を難しくする要因\n　要因｜本文の記述｜帰結\n　汚染の越境性｜one country から another の海岸へ｜責任の所在が不明確\n　必要な対応｜international cooperation｜多国間の合意\n　現状｜the greatest challenge｜合意形成が難航\n　⇒ 国境を越えるため国際協力が不可欠だが困難\n　⚠ 「技術が存在しない」「船舶が主因」は本文と矛盾。最大の課題として何が挙がるかを読む。',
    difficulty: 'standard' as const,
  },

  // --- PASSAGE 4: Historical/Biographical Excerpt — Q045-047 ---
  {
    id: 'eiken_2kyu3_045',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Marie Curie remains one of the most remarkable figures in the history of science. Born in Warsaw in 1867, she overcame the systemic barriers that barred women from higher education in Russian-controlled Poland by attending a clandestine institution known as the \'Floating University.\'  She later moved to Paris, where she became the first woman to earn a doctoral degree in physics from the Sorbonne.\n\nHer scientific achievements are equally extraordinary. Together with her husband Pierre, she discovered the elements polonium and radium, coining the term \'radioactivity\' to describe the emission of energy from atomic nuclei. In 1903, she became the first woman to receive a Nobel Prize—in Physics—and in 1911, she received a second Nobel Prize in Chemistry, making her the only person in history to win Nobel Prizes in two different sciences. Despite her global renown, she faced persistent prejudice: the French Academy of Sciences refused to admit her as a member, citing her gender. Curie\'s story is not only a testament to scientific brilliance but also to the personal resilience required to succeed in a world not yet ready to recognize it."\n\nWhy did Marie Curie attend the "Floating University"?',
    choices: [
      { key: 'A', text: 'Because it offered the best science program in Eastern Europe.' },
      { key: 'B', text: 'Because women were prevented from attending official universities in Poland at that time.' },
      { key: 'C', text: 'Because she could not afford tuition at formal academic institutions.' },
      { key: 'D', text: 'Because the Floating University was affiliated with the Sorbonne.' },
    ],
    correctKey: 'B' as const,
    explanation: '"she overcame the systemic barriers that barred women from higher education in Russian-controlled Poland by attending a clandestine institution known as the \'Floating University\'"という記述から、女性が高等教育への進学を禁じられていたため、秘密裡に運営される機関に通ったことがわかります。Bが正解です。\n\n【図解】Floating University に通った理由\n　要素｜本文の記述｜内容\n　制度上の障壁｜barred women from higher education｜女性は進学不可\n　地域｜Russian-controlled Poland｜当時のポーランド\n　代替手段｜clandestine institution｜非公認の教育機関\n　⇒ 女性が公式の大学に通えなかったことが理由\n　⚠ 学費や教育水準の問題ではない。制度的な排除が背景である点を読み取る。',
    difficulty: 'basic' as const,
  },

  {
    id: 'eiken_2kyu3_046',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about Marie Curie and answer the question.\n\n"Marie Curie remains one of the most remarkable figures in the history of science. Born in Warsaw in 1867, she overcame the systemic barriers that barred women from higher education in Russian-controlled Poland by attending a clandestine institution known as the \'Floating University.\' She later moved to Paris, where she became the first woman to earn a doctoral degree in physics from the Sorbonne.\n\nHer scientific achievements are equally extraordinary. Together with her husband Pierre, she discovered the elements polonium and radium, coining the term \'radioactivity\' to describe the emission of energy from atomic nuclei. In 1903, she became the first woman to receive a Nobel Prize—in Physics—and in 1911, she received a second Nobel Prize in Chemistry, making her the only person in history to win Nobel Prizes in two different sciences. Despite her global renown, she faced persistent prejudice: the French Academy of Sciences refused to admit her as a member, citing her gender. Curie\'s story is not only a testament to scientific brilliance but also to the personal resilience required to succeed in a world not yet ready to recognize it."\n\nThe word "clandestine" in the first paragraph is closest in meaning to:',
    choices: [
      { key: 'A', text: 'highly expensive' },
      { key: 'B', text: 'internationally recognized' },
      { key: 'C', text: 'conducted in secret' },
      { key: 'D', text: 'open to all students' },
    ],
    correctKey: 'C' as const,
    explanation: '"clandestine"は「秘密の・内密の」という意味の形容詞です。当局に認められていない秘密機関として運営されていた「浮動大学」の文脈から、"conducted in secret"（秘密裏に運営されている）が最も近い意味です。\n\nclandestine は「秘密裏に行われる」で、当局に知られないよう非公然に運営されることを表す。当時の支配下で女性の高等教育が禁じられていたという背景が、この語の必然性を裏づけている。\n\n【図解】clandestine の意味\n　語｜意味｜含み\n　clandestine｜秘密の｜当局に隠れて\n　covert｜隠密の｜同義に近い\n　overt｜公然の｜対義語\n　⇒ 非公認の秘密機関なら conducted in secret\n　⚠ 「国際的に認められた」「誰にでも開かれた」は正反対。文脈の背景から意味を推定する。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_047',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about Marie Curie and answer the question.\n\n"Marie Curie remains one of the most remarkable figures in the history of science. Born in Warsaw in 1867, she overcame the systemic barriers that barred women from higher education in Russian-controlled Poland by attending a clandestine institution known as the \'Floating University.\' She later moved to Paris, where she became the first woman to earn a doctoral degree in physics from the Sorbonne.\n\nHer scientific achievements are equally extraordinary. Together with her husband Pierre, she discovered the elements polonium and radium, coining the term \'radioactivity\' to describe the emission of energy from atomic nuclei. In 1903, she became the first woman to receive a Nobel Prize—in Physics—and in 1911, she received a second Nobel Prize in Chemistry, making her the only person in history to win Nobel Prizes in two different sciences. Despite her global renown, she faced persistent prejudice: the French Academy of Sciences refused to admit her as a member, citing her gender. Curie\'s story is not only a testament to scientific brilliance but also to the personal resilience required to succeed in a world not yet ready to recognize it."\n\nWhat does the passage suggest about the world in which Curie worked?',
    choices: [
      { key: 'A', text: 'Scientific institutions fully supported women researchers once their talent was evident.' },
      { key: 'B', text: 'Curie\'s success was largely due to the encouragement she received from the French government.' },
      { key: 'C', text: 'Even exceptional achievement was not always sufficient to overcome gender-based discrimination.' },
      { key: 'D', text: 'The Nobel Prize committee was the only institution that recognized her contributions fairly.' },
    ],
    correctKey: 'C' as const,
    explanation: 'パッセージは「Despite her global renown, she faced persistent prejudice: the French Academy of Sciences refused to admit her as a member, citing her gender.」と述べています。世界的に有名になっても性差別に直面したという事実から、「卓越した業績でさえ性差別を克服するには不十分な場合があった」という推論が導かれます。Cが正解です。\n\n【図解】業績と差別の関係\n　事実｜本文の記述｜含意\n　世界的名声｜global renown｜業績は突出\n　科学アカデミー｜refused to admit her｜入会を拒否\n　理由｜citing her gender｜性別を理由\n　⇒ 卓越した業績でも差別を覆せなかった\n　⚠ 「才能が明らかになれば支援された」は本文と逆。Despite で始まる文の論理を読む。',
    difficulty: 'advanced' as const,
  },

  // --- PASSAGE 5: Space exploration — Q048-050 ---
  {
    id: 'eiken_2kyu3_048',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"The discovery of exoplanets—planets orbiting stars other than our Sun—has revolutionized our understanding of the universe. As of 2025, astronomers have confirmed more than 5,600 exoplanets, and thousands more await verification. Many of these worlds are nothing like Earth: some are gas giants orbiting closer to their stars than Mercury does to our Sun, while others reside in the \'habitable zone,\' the range of distances from a star where liquid water could potentially exist on a planetary surface.\n\nThe search for life beyond Earth has become one of the most compelling questions in modern science. Next-generation space telescopes are being designed to analyze the atmospheric composition of exoplanets, searching for biosignatures—chemical markers such as oxygen and methane that could indicate biological activity. Scientists caution, however, that the presence of such gases alone does not confirm life; geological and chemical processes can also produce them. The challenge lies in distinguishing between biological and non-biological sources, a task that may require decades of observation and technology that does not yet exist."\n\nAccording to the passage, what is a "habitable zone"?',
    choices: [
      { key: 'A', text: 'A region of space where the gravity is strong enough to support an atmosphere.' },
      { key: 'B', text: 'The distance from a star at which liquid water could exist on a planet\'s surface.' },
      { key: 'C', text: 'An area in our solar system where no asteroids or comets are present.' },
      { key: 'D', text: 'The part of a galaxy that contains the highest concentration of stars.' },
    ],
    correctKey: 'B' as const,
    explanation: 'パッセージでは「the \'habitable zone,\' the range of distances from a star where liquid water could potentially exist on a planetary surface」と定義されています。恒星からの距離が液体の水が存在できる範囲であることがBに正確に示されています。\n\n【図解】habitable zone の定義\n　要素｜本文の記述｜内容\n　基準｜range of distances from a star｜恒星からの距離\n　条件｜liquid water could exist｜液体の水が存在しうる\n　場所｜on a planetary surface｜惑星表面\n　⇒ 液体の水が存在しうる距離帯を指す\n　⚠ 重力や小惑星の有無は定義に含まれない。定義文の語句だけを根拠にする。',
    difficulty: 'basic' as const,
  },

  {
    id: 'eiken_2kyu3_049',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about exoplanets and answer the question.\n\n"The discovery of exoplanets—planets orbiting stars other than our Sun—has revolutionized our understanding of the universe. As of 2025, astronomers have confirmed more than 5,600 exoplanets, and thousands more await verification. Many of these worlds are nothing like Earth: some are gas giants orbiting closer to their stars than Mercury does to our Sun, while others reside in the \'habitable zone,\' the range of distances from a star where liquid water could potentially exist on a planetary surface.\n\nThe search for life beyond Earth has become one of the most compelling questions in modern science. Next-generation space telescopes are being designed to analyze the atmospheric composition of exoplanets, searching for biosignatures—chemical markers such as oxygen and methane that could indicate biological activity. Scientists caution, however, that the presence of such gases alone does not confirm life; geological and chemical processes can also produce them. The challenge lies in distinguishing between biological and non-biological sources, a task that may require decades of observation and technology that does not yet exist."\n\nWhy do scientists say that finding oxygen and methane on an exoplanet is not enough to confirm life?',
    choices: [
      { key: 'A', text: 'Because oxygen and methane cannot exist in the atmospheres of exoplanets.' },
      { key: 'B', text: 'Because these gases can be produced by non-biological processes as well.' },
      { key: 'C', text: 'Because current telescopes are not powerful enough to detect these gases.' },
      { key: 'D', text: 'Because life requires many more chemicals beyond just oxygen and methane.' },
    ],
    correctKey: 'B' as const,
    explanation: '"geological and chemical processes can also produce them"という記述から、酸素やメタンは生物活動以外の地質学的・化学的プロセスによっても生成されるため、それらの存在だけでは生命の確認にならないとわかります。Bが正解です。設問はバイオシグネチャーの限界を問うており、検出できるかどうかではなく、検出結果をどう解釈できるかが論点になっている。\n\n【図解】バイオシグネチャーの限界\n　気体｜生物由来｜非生物由来\n　酸素｜光合成｜地質, 化学過程\n　メタン｜微生物の活動｜地質, 化学過程\n　結論｜検出だけでは断定できない｜追加の証拠が必要\n　⇒ 非生物的な過程でも生成されうる点が理由\n　⚠ 「望遠鏡の性能不足」は別の論点。検出可能性と解釈可能性を混同しない。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_050',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about exoplanets and answer the question.\n\n"The discovery of exoplanets—planets orbiting stars other than our Sun—has revolutionized our understanding of the universe. As of 2025, astronomers have confirmed more than 5,600 exoplanets, and thousands more await verification. Many of these worlds are nothing like Earth: some are gas giants orbiting closer to their stars than Mercury does to our Sun, while others reside in the \'habitable zone,\' the range of distances from a star where liquid water could potentially exist on a planetary surface.\n\nThe search for life beyond Earth has become one of the most compelling questions in modern science. Next-generation space telescopes are being designed to analyze the atmospheric composition of exoplanets, searching for biosignatures—chemical markers such as oxygen and methane that could indicate biological activity. Scientists caution, however, that the presence of such gases alone does not confirm life; geological and chemical processes can also produce them. The challenge lies in distinguishing between biological and non-biological sources, a task that may require decades of observation and technology that does not yet exist."\n\nWhat does the passage imply about the timeline for discovering life on exoplanets?',
    choices: [
      { key: 'A', text: 'Scientists expect to confirm life on an exoplanet within the next ten years.' },
      { key: 'B', text: 'The discovery of life is impossible because no exoplanets are in the habitable zone.' },
      { key: 'C', text: 'Finding conclusive evidence of life will likely take a very long time with current technology.' },
      { key: 'D', text: 'Next-generation telescopes will definitively answer the question of extraterrestrial life.' },
    ],
    correctKey: 'C' as const,
    explanation: 'パッセージの最後の文「a task that may require decades of observation and technology that does not yet exist」から、数十年の観測と現在はまだ存在しない技術が必要かもしれないと述べられています。これは決定的な証拠の発見が非常に長い時間を要することを示唆しており、Cが正解です。「次世代望遠鏡が決定的に答える」という断言はパッセージのそのような確信を示していない記述と矛盾します。\n\n【図解】発見までの見通し\n　要素｜本文の記述｜含意\n　必要な観測期間｜decades of observation｜数十年規模\n　必要な技術｜does not yet exist｜未開発\n　結論｜決定的証拠は容易でない｜長期を要する\n　⇒ 現行技術では長い時間がかかるという推論\n　⚠ 「次世代望遠鏡が決定的に答える」は断定しすぎ。may という控えめな表現に注目する。',
    difficulty: 'advanced' as const,
  },
  // ===== VOCABULARY (051-070) =====

  // 051 — pragmatic / dogmatic / skeptical / naive
  {
    id: 'eiken_2kyu3_051',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Rather than insisting on an ideal solution, the manager took a ( ) approach and focused on what could realistically be achieved with the limited budget.',
    choices: [
      { key: 'A', text: 'dogmatic' },
      { key: 'B', text: 'pragmatic' },
      { key: 'C', text: 'naive' },
      { key: 'D', text: 'skeptical' },
    ],
    correctKey: 'B' as const,
    explanation: '"pragmatic"は「実利的な、現実的な」という意味で、理想にこだわらず現実的に達成可能なことに焦点を当てる態度を表します。"dogmatic"は「独断的な」、"naive"は「世間知らずな」、"skeptical"は「懐疑的な」で文脈に合いません。\n\npragmatic は「理想論ではなく実際の効果を重視する」という態度を表す形容詞で、approach、solution、decision を修飾する。限られた予算の中で現実に達成できることに絞ったという記述が、この語の内容を説明している。\n\n【図解】態度を表す形容詞\n　語｜意味｜評価\n　pragmatic｜現実的な｜柔軟, 肯定的\n　dogmatic｜独断的な｜硬直, 否定的\n　skeptical｜懐疑的な｜疑い深い\n　⇒ 理想より実現可能性を重視するなら pragmatic\n　⚠ naive は「世間知らずな」で現実的の逆。Rather than insisting on an ideal という対比を読む。',
    difficulty: 'advanced' as const,
  },

  // 052 — deteriorate / accelerate / stabilize / fluctuate
  {
    id: 'eiken_2kyu3_052',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The patient\'s condition began to ( ) rapidly overnight, prompting doctors to move her to intensive care.',
    choices: [
      { key: 'A', text: 'stabilize' },
      { key: 'B', text: 'fluctuate' },
      { key: 'C', text: 'deteriorate' },
      { key: 'D', text: 'accelerate' },
    ],
    correctKey: 'C' as const,
    explanation: '"deteriorate"は「（健康状態などが）悪化する」という意味です。集中治療室に移されたという結果と一致します。"stabilize"は「安定する」で逆の意味、"fluctuate"は「変動する」、"accelerate"は「加速する」（通常は速度に使う）で文脈に合いません。\n\ndeteriorate は「（状態が）悪化する」で、condition、health、relations、quality が主語になる自動詞。集中治療室に移されたという結果が、容体の悪化を裏づけている。\n\n【図解】状態変化を表す動詞\n　語｜方向｜使う場面\n　deteriorate｜悪化する｜健康, 関係, 設備\n　stabilize｜安定する｜容体, 相場\n　fluctuate｜上下に変動する｜数値, 気温\n　⇒ 集中治療室への移送につながるなら deteriorate\n　⚠ accelerate は「加速する」で速度の話。悪化の方向を示す語ではない。',
    difficulty: 'standard' as const,
  },

  // 053 — allocate / accumulate / eliminate / delegate
  {
    id: 'eiken_2kyu3_053',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The director decided to ( ) more of her responsibilities to junior staff so she could focus on long-term strategy.',
    choices: [
      { key: 'A', text: 'accumulate' },
      { key: 'B', text: 'eliminate' },
      { key: 'C', text: 'allocate' },
      { key: 'D', text: 'delegate' },
    ],
    correctKey: 'D' as const,
    explanation: '"delegate responsibilities"は「（権限や責任を）部下に委譲する」という意味の定型表現です。"accumulate"は「蓄積する」、"eliminate"は「排除する」、"allocate"は「（資源などを）割り当てる」で、responsibilities を人に委ねる文脈には delegate が最適です。\n\ndelegate は「（権限や責任を）部下に委ねる」で、delegate A to B の形をとる。管理職が実務を任せて自らは長期戦略に集中する、というマネジメントの文脈で頻出する。名詞では「代表者」の意味。\n\n【図解】割り当てを表す動詞\n　語｜割り当てるもの｜相手\n　delegate｜責任, 権限｜部下, 人\n　allocate｜資源, 予算｜部門, 用途\n　assign｜仕事, 役割｜人\n　⇒ 責任を部下に委ねるなら delegate\n　⚠ allocate は資源の配分に使う語。人に責任を委譲する意味は含まない。',
    difficulty: 'advanced' as const,
  },

  // 054 — vocabulary: subtle / blatant / vague / explicit
  {
    id: 'eiken_2kyu3_054',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The company\'s advertisement was criticized for making a ( ) attempt to mislead consumers about the product\'s health benefits.',
    choices: [
      { key: 'A', text: 'subtle' },
      { key: 'B', text: 'blatant' },
      { key: 'C', text: 'vague' },
      { key: 'D', text: 'implicit' },
    ],
    correctKey: 'B' as const,
    explanation: '"blatant"は「あからさまな、露骨な」という意味で、批判の対象になるほど明白な誤解を招く試みを表すのに適切です。"subtle"は「巧妙な、微妙な」で逆のニュアンス、"vague"は「曖昧な」、"implicit"は「暗黙の」で文脈に合いません。\n\nblatant は「あからさまな、露骨な」で、悪い行為が隠しもせず行われていることを強調する。誤解を招く広告が批判されたという文脈で、非難の強さを支えている語である。\n\n【図解】明白さと巧妙さの対比\n　語｜意味｜隠しているか\n　blatant｜露骨な｜隠していない\n　subtle｜巧妙な, 微妙な｜気づかれにくい\n　implicit｜暗黙の｜明示されない\n　⇒ 批判されるほど明白なら blatant\n　⚠ subtle は正反対で「そうと分からない」。criticized for という非難の枠組みに合わない。',
    difficulty: 'advanced' as const,
  },

  // 055 — vocabulary: prudent / reckless / audacious / timid
  {
    id: 'eiken_2kyu3_055',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Given the uncertain economic outlook, financial advisors recommended a ( ) investment strategy that avoided unnecessary risk.',
    choices: [
      { key: 'A', text: 'reckless' },
      { key: 'B', text: 'audacious' },
      { key: 'C', text: 'prudent' },
      { key: 'D', text: 'timid' },
    ],
    correctKey: 'C' as const,
    explanation: '"prudent"は「思慮深い、慎重な」という意味で、不必要なリスクを避けるという文脈に最適です。"reckless"は「無謀な」で逆の意味、"audacious"は「大胆な」、"timid"は「臆病な」で投資戦略を形容する語としては不自然です。\n\nprudent は「思慮深く慎重な」で、投資や判断において不要なリスクを避ける態度を表す。不透明な経済見通しという前提が、慎重さを求める文脈を作っている。名詞形は prudence。\n\n【図解】リスクへの態度\n　語｜態度｜評価\n　prudent｜慎重で賢明｜肯定的\n　reckless｜無謀｜否定的\n　timid｜臆病｜否定的\n　⇒ 不要なリスクを避ける戦略なら prudent\n　⚠ timid も慎重に見えるが「気が小さい」という否定的評価。助言の語としては不自然。',
    difficulty: 'standard' as const,
  },

  // 056 — vocabulary: verify / falsify / justify / clarify
  {
    id: 'eiken_2kyu3_056',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Before publishing the article, the editor asked the reporter to ( ) every fact with at least two independent sources.',
    choices: [
      { key: 'A', text: 'falsify' },
      { key: 'B', text: 'justify' },
      { key: 'C', text: 'clarify' },
      { key: 'D', text: 'verify' },
    ],
    correctKey: 'D' as const,
    explanation: '"verify"は「（事実を）検証する、確認する」という意味で、記事の掲載前に情報源で裏付けを取ることを表します。"falsify"は「偽造する」で逆の意味、"justify"は「正当化する」、"clarify"は「明確にする」で文脈に合いません。\n\nverify は「（事実の正しさを）確認する、裏づけを取る」で、fact、information、identity を目的語にとる。掲載前に二つの独立した情報源で確認するという報道の基本手順を表している。\n\n【図解】fy で終わる動詞\n　語｜意味｜方向\n　verify｜検証する｜真偽を確かめる\n　falsify｜偽造する｜虚偽にする\n　justify｜正当化する｜理由づける\n　⇒ 独立した情報源で裏づけるなら verify\n　⚠ clarify は「明確にする」で真偽の確認ではない。事実確認と説明の明瞭化を区別する。',
    difficulty: 'standard' as const,
  },

  // 057 — vocabulary: dwindle / thrive / expand / stagnate
  {
    id: 'eiken_2kyu3_057',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The town\'s population has begun to ( ) as younger residents move away in search of better job opportunities in the city.',
    choices: [
      { key: 'A', text: 'thrive' },
      { key: 'B', text: 'expand' },
      { key: 'C', text: 'dwindle' },
      { key: 'D', text: 'flourish' },
    ],
    correctKey: 'C' as const,
    explanation: '"dwindle"は「（数量が）徐々に減少する」という意味で、若者が流出して人口が減っていく状況を表すのに適切です。"thrive"と"flourish"は「繁栄する」で逆の意味、"expand"は「拡大する」で文脈に合いません。\n\ndwindle は「徐々に減っていく」で、population、supplies、numbers、resources が主語になる自動詞。若者の流出という原因と、少しずつ減少する過程がぴったり対応している。\n\n【図解】増減を表す動詞\n　語｜方向｜変化のしかた\n　dwindle｜減少｜徐々に\n　thrive｜繁栄｜勢いよく\n　expand｜拡大｜規模が増す\n　⇒ 若者が去って人口が細るなら dwindle\n　⚠ flourish は「繁栄する」で方向が逆。move away という背景から減少方向を読み取る。',
    difficulty: 'advanced' as const,
  },

  // 058 — vocabulary: notorious / renowned / obscure / anonymous
  {
    id: 'eiken_2kyu3_058',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The intersection has become ( ) among local drivers for its frequent accidents and confusing signals.',
    choices: [
      { key: 'A', text: 'renowned' },
      { key: 'B', text: 'obscure' },
      { key: 'C', text: 'anonymous' },
      { key: 'D', text: 'notorious' },
    ],
    correctKey: 'D' as const,
    explanation: '"notorious"は「（悪い意味で）悪名高い」という意味で、事故が多いことで知られる交差点を形容するのに最適です。"renowned"は「（良い意味で）著名な」で意味が逆、"obscure"は「無名の」、"anonymous"は「匿名の」で文脈に合いません。\n\nnotorious は「悪い意味で有名な」で、be notorious for 〜 の形をとる。事故が多く信号が分かりにくい交差点という記述が、悪評の内容を示している。名詞形は notoriety。\n\n【図解】知名度と評価\n　語｜知名度｜評価\n　notorious｜高い｜悪い\n　renowned｜高い｜良い\n　obscure｜低い｜無名\n　⇒ 事故多発で知られるなら notorious\n　⚠ renowned は良い意味の著名。for の後ろが好ましい内容か否かで選び分ける。',
    difficulty: 'advanced' as const,
  },

  // 059 — vocabulary: comprehensive / partial / superficial / fragmentary
  {
    id: 'eiken_2kyu3_059',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The consultant conducted a ( ) review of the company\'s operations, examining everything from staffing to supply chain logistics.',
    choices: [
      { key: 'A', text: 'partial' },
      { key: 'B', text: 'fragmentary' },
      { key: 'C', text: 'comprehensive' },
      { key: 'D', text: 'superficial' },
    ],
    correctKey: 'C' as const,
    explanation: '"comprehensive"は「包括的な、あらゆる面を網羅した」という意味で、人員配置からサプライチェーンまで幅広く調べたという文脈に最適です。"partial"は「部分的な」、"fragmentary"は「断片的な」、"superficial"は「表面的な」で、いずれも網羅性とは逆の意味を持ちます。\n\n【図解】網羅性を表す形容詞\n　語｜範囲｜評価\n　comprehensive｜すべてを網羅｜肯定的\n　partial｜一部のみ｜限定的\n　superficial｜表面的｜否定的\n　⇒ 人員から物流まで調べたなら comprehensive\n　⚠ fragmentary は「断片的」で網羅性の逆。everything from A to B という表現が範囲の広さを示す。',
    difficulty: 'standard' as const,
  },

  // 060 — vocabulary: coincide / conflict / correspond / collide
  {
    id: 'eiken_2kyu3_060',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Unfortunately, the date of the conference happened to ( ) with a national holiday, which reduced attendance significantly.',
    choices: [
      { key: 'A', text: 'correspond' },
      { key: 'B', text: 'conflict' },
      { key: 'C', text: 'collide' },
      { key: 'D', text: 'coincide' },
    ],
    correctKey: 'D' as const,
    explanation: '"coincide with"は「（日時などが）〜と重なる、一致する」という意味です。会議の日程が祝日と重なってしまったという文脈に最適です。"correspond"は「対応する、一致する」（内容の一致に使うことが多い）、"conflict"は「対立する」、"collide"は「衝突する」（物理的な意味が強い）で不適切です。\n\n【図解】重なりや一致を表す動詞\n　語｜対象｜前置詞\n　coincide｜日時, 出来事｜with\n　correspond｜内容, 数値｜with, to\n　collide｜物体｜with\n　⇒ 会議の日と祝日が重なるなら coincide with\n　⚠ conflict with は「対立する」で日程の衝突にも使えるが、単なる重複には coincide が自然。',
    difficulty: 'advanced' as const,
  },

  // 061 — vocabulary: indispensable / redundant / trivial / optional
  {
    id: 'eiken_2kyu3_061',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Access to clean drinking water is ( ) for public health, yet millions of people around the world still lack it.',
    choices: [
      { key: 'A', text: 'redundant' },
      { key: 'B', text: 'optional' },
      { key: 'C', text: 'trivial' },
      { key: 'D', text: 'indispensable' },
    ],
    correctKey: 'D' as const,
    explanation: '"indispensable"は「不可欠な、なくてはならない」という意味で、公衆衛生にとって極めて重要な要素を表すのに最適です。"redundant"は「余分な」、"optional"は「任意の」、"trivial"は「些細な」でいずれも逆の意味合いを持ちます。\n\nindispensable は「なくてはならない、不可欠な」で、in-（否定）＋ dispensable（なくても済む）という成り立ち。清潔な飲料水が公衆衛生に欠かせないという文脈にふさわしい強い語である。\n\n【図解】必要度を表す形容詞\n　語｜必要度｜含み\n　indispensable｜絶対に必要｜代替不可\n　optional｜任意｜あってもなくてもよい\n　trivial｜取るに足りない｜重要でない\n　⇒ 公衆衛生に欠かせないなら indispensable\n　⚠ redundant は「余分な」で正反対。yet 以下の対比構造から必要性の高さを読む。',
    difficulty: 'standard' as const,
  },

  // 062 — vocabulary: exacerbate / alleviate / eradicate / accommodate
  {
    id: 'eiken_2kyu3_062',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Cutting funding for public transportation would likely ( ) traffic congestion in the city rather than reduce it.',
    choices: [
      { key: 'A', text: 'alleviate' },
      { key: 'B', text: 'eradicate' },
      { key: 'C', text: 'exacerbate' },
      { key: 'D', text: 'accommodate' },
    ],
    correctKey: 'C' as const,
    explanation: '"exacerbate"は「（問題を）悪化させる」という意味で、公共交通への予算削減が渋滞を悪化させるという文脈に合います。"alleviate"は「緩和する」で逆の意味、"eradicate"は「根絶する」、"accommodate"は「収容する、対応する」で文脈に合いません。\n\nexacerbate は「（すでにある問題を）さらに悪化させる」で、problem、tension、shortage、congestion を目的語にとる。rather than reduce it という対比が、悪化方向であることを明示している。\n\n【図解】問題への作用の方向\n　語｜方向｜結果\n　exacerbate｜悪化させる｜問題が深刻化\n　alleviate｜和らげる｜問題が軽くなる\n　eradicate｜根絶する｜問題が消える\n　⇒ 渋滞をかえって悪くするなら exacerbate\n　⚠ alleviate は正反対。rather than reduce という対比表現を必ず確認する。',
    difficulty: 'advanced' as const,
  },

  // 063 — vocabulary: withstand / succumb / surrender / retreat
  {
    id: 'eiken_2kyu3_063',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The ancient fortress was built to ( ) even the most prolonged sieges, with walls several meters thick.',
    choices: [
      { key: 'A', text: 'succumb to' },
      { key: 'B', text: 'surrender to' },
      { key: 'C', text: 'retreat from' },
      { key: 'D', text: 'withstand' },
    ],
    correctKey: 'D' as const,
    explanation: '"withstand"は「（攻撃・圧力に）耐える」という意味で、厚い壁を持つ要塞が包囲に耐えられるよう設計されたという文脈に最適です。"succumb to"は「屈する」、"surrender to"は「降伏する」、"retreat from"は「撤退する」でいずれも意味が逆です。\n\nwithstand は「（攻撃や圧力に）耐える、持ちこたえる」で、pressure、siege、heat、criticism を目的語にとる他動詞。数メートルの厚さの壁という記述が、耐える設計であることを裏づけている。\n\n【図解】圧力への反応\n　語｜反応｜結果\n　withstand｜耐える｜持ちこたえる\n　succumb to｜屈する｜負ける\n　surrender to｜降伏する｜明け渡す\n　⇒ 長期の包囲に耐える設計なら withstand\n　⚠ succumb to と surrender to は正反対。built to という目的表現から設計意図を読む。',
    difficulty: 'advanced' as const,
  },

  // 064 — vocabulary: intricate / simplistic / straightforward / crude
  {
    id: 'eiken_2kyu3_064',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The watchmaker spent months assembling the ( ) mechanism, which contained hundreds of tiny interlocking parts.',
    choices: [
      { key: 'A', text: 'intricate' },
      { key: 'B', text: 'simplistic' },
      { key: 'C', text: 'straightforward' },
      { key: 'D', text: 'crude' },
    ],
    correctKey: 'A' as const,
    explanation: '"intricate"は「複雑に入り組んだ、精巧な」という意味で、何百もの小さな部品が組み合わさった機構を形容するのに最適です。"simplistic"は「単純化しすぎた」、"straightforward"は「単純明快な」、"crude"は「粗雑な」でいずれも文脈に合いません。\n\nintricate は「複雑に入り組んだ、精巧な」で、mechanism、design、pattern、network を修飾する。何百もの小さな部品がかみ合っているという記述が、この語の内容そのものである。\n\n【図解】複雑さと単純さの形容詞\n　語｜意味｜評価\n　intricate｜精巧で複雑な｜肯定的\n　crude｜粗雑な｜否定的\n　simplistic｜単純化しすぎた｜否定的\n　⇒ 数百の部品が組み合う機構なら intricate\n　⚠ straightforward は「単純明快な」で複雑さの逆。部品数の記述が判断材料になる。',
    difficulty: 'standard' as const,
  },

  // 065 — vocabulary: unanimous / divided / ambivalent / indifferent
  {
    id: 'eiken_2kyu3_065',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The jury reached a ( ) verdict after only two hours of deliberation, with all twelve members in complete agreement.',
    choices: [
      { key: 'A', text: 'divided' },
      { key: 'B', text: 'ambivalent' },
      { key: 'C', text: 'unanimous' },
      { key: 'D', text: 'indifferent' },
    ],
    correctKey: 'C' as const,
    explanation: '"unanimous"は「全員一致の」という意味で、12人全員が同じ結論に達したという文脈に最適です。"divided"は「意見が分かれた」で逆の意味、"ambivalent"は「相反する感情を持つ」、"indifferent"は「無関心な」で文脈に合いません。\n\nunanimous は「全員一致の」で、verdict、decision、vote、agreement を修飾する。12人全員が完全に同意したという記述が、この語の定義をそのまま示している。副詞は unanimously。\n\n【図解】合意の度合い\n　語｜合意の状態｜例\n　unanimous｜全員一致｜12人全員が同意\n　divided｜意見が割れる｜賛否が分かれる\n　majority｜多数決｜過半数の賛成\n　⇒ 全員が完全に同意したなら unanimous\n　⚠ ambivalent は個人の心が揺れる状態。集団の一致とは論点が異なる。',
    difficulty: 'standard' as const,
  },

  // 066 — vocabulary: dispel / instill / provoke / suppress
  {
    id: 'eiken_2kyu3_066',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The company held a press conference to ( ) rumors that it was planning to lay off a large portion of its workforce.',
    choices: [
      { key: 'A', text: 'instill' },
      { key: 'B', text: 'provoke' },
      { key: 'C', text: 'dispel' },
      { key: 'D', text: 'suppress' },
    ],
    correctKey: 'C' as const,
    explanation: '"dispel rumors"は「うわさを打ち消す、晴らす」という意味の定型表現です。記者会見を開いて誤解を解消しようとした文脈に最適です。"instill"は「（考えなどを）徐々に植え付ける」、"provoke"は「挑発する」、"suppress"は「抑圧する」でいずれも文脈に合いません。\n\ndispel は「（うわさや不安を）払いのける」で、rumors、doubts、fears、myths を目的語にとる。記者会見を開いて大量解雇のうわさを打ち消すという文脈にぴったり合う定型表現である。\n\n【図解】うわさへの働きかけ\n　語｜作用｜結果\n　dispel｜払いのける｜うわさが消える\n　provoke｜引き起こす｜うわさが広がる\n　suppress｜力で抑え込む｜表面上は消える\n　⇒ 会見で誤解を解くなら dispel\n　⚠ suppress は強制的に封じる含み。公開の場で説明して晴らす場合は dispel を使う。',
    difficulty: 'advanced' as const,
  },

  // 067 — vocabulary: feasible / hypothetical / theoretical / fictional
  {
    id: 'eiken_2kyu3_067',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Engineers concluded that building a tunnel beneath the strait was technically ( ), though it would require enormous funding.',
    choices: [
      { key: 'A', text: 'hypothetical' },
      { key: 'B', text: 'theoretical' },
      { key: 'C', text: 'fictional' },
      { key: 'D', text: 'feasible' },
    ],
    correctKey: 'D' as const,
    explanation: '"feasible"は「実行可能な」という意味で、技術的に実現できると結論づけた文脈に最適です。"hypothetical"は「仮説的な」、"theoretical"は「理論上の」、"fictional"は「架空の」でいずれも「実際に実行できる」という意味を持ちません。\n\nfeasible は「実行可能な」で、技術的資金的に実現できるかどうかを述べる語。though it would require enormous funding という譲歩が、技術面では可能だという判断を際立たせている。\n\n【図解】実現性を表す形容詞\n　語｜意味｜現実性\n　feasible｜実行可能な｜現実に可能\n　theoretical｜理論上の｜実践は未確認\n　hypothetical｜仮説的な｜仮定の話\n　⇒ 技術的に実現できるなら feasible\n　⚠ theoretical を「実現可能」と読み替えない。理論上と実行可能は別の段階である。',
    difficulty: 'standard' as const,
  },

  // 068 — vocabulary: unwarranted / justified / deliberate / accidental
  {
    id: 'eiken_2kyu3_068',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Critics called the company\'s price increase entirely ( ), noting that production costs had actually fallen over the past year.',
    choices: [
      { key: 'A', text: 'justified' },
      { key: 'B', text: 'deliberate' },
      { key: 'C', text: 'unwarranted' },
      { key: 'D', text: 'accidental' },
    ],
    correctKey: 'C' as const,
    explanation: '"unwarranted"は「正当な理由のない、不当な」という意味で、生産コストが下がったのに値上げしたことへの批判に最適です。"justified"は「正当化された」で逆の意味、"deliberate"は「意図的な」、"accidental"は「偶発的な」で文脈に合いません。\n\nunwarranted は「正当な理由のない、不当な」で、increase、criticism、assumption を修飾する。生産コストが下がっていたという事実が、値上げに根拠がないことを示している。\n\n【図解】正当性を表す形容詞\n　語｜正当性｜評価\n　unwarranted｜根拠がない｜否定的\n　justified｜正当な｜肯定的\n　deliberate｜意図的な｜正当性とは別軸\n　⇒ コスト減なのに値上げなら unwarranted\n　⚠ deliberate は「わざと」で正当性の有無を述べる語ではない。評価軸が異なる。',
    difficulty: 'advanced' as const,
  },

  // 069 — vocabulary: unravel / assemble / construct / consolidate
  {
    id: 'eiken_2kyu3_069',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Investigators slowly began to ( ) the complex web of financial transactions used to hide the missing funds.',
    choices: [
      { key: 'A', text: 'assemble' },
      { key: 'B', text: 'construct' },
      { key: 'C', text: 'consolidate' },
      { key: 'D', text: 'unravel' },
    ],
    correctKey: 'D' as const,
    explanation: '"unravel"は「（複雑な事情や謎を）解きほぐす、解明する」という意味で、複雑な金融取引の網を捜査官が解明していく文脈に最適です。"assemble"は「組み立てる」、"construct"は「構築する」、"consolidate"は「統合する」でいずれも「解明する」とは逆の方向性を持ちます。\n\nunravel は「（もつれた糸や複雑な事情を）解きほぐす」で、mystery、web、plot、truth を目的語にとる。複雑な取引の網を捜査官が少しずつ解明していく、という文脈に合う。\n\n【図解】方向が逆の動詞\n　語｜方向｜結果\n　unravel｜解きほぐす｜構造が明らかになる\n　assemble｜組み立てる｜まとまる\n　consolidate｜統合する｜一つになる\n　⇒ 複雑な取引を解明するなら unravel\n　⚠ un- が付くと逆の動作になる。construct や assemble とは方向が正反対である。',
    difficulty: 'advanced' as const,
  },

  // 070 — vocabulary: transparent / opaque / ambiguous / covert
  {
    id: 'eiken_2kyu3_070',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Voters demanded a more ( ) process for campaign financing, one in which every donation could be publicly traced.',
    choices: [
      { key: 'A', text: 'opaque' },
      { key: 'B', text: 'covert' },
      { key: 'C', text: 'transparent' },
      { key: 'D', text: 'ambiguous' },
    ],
    correctKey: 'C' as const,
    explanation: '"transparent"は「透明性のある、公開された」という意味で、寄付を公に追跡できる仕組みを求める文脈に最適です。"opaque"は「不透明な」で逆の意味、"covert"は「秘密の」、"ambiguous"は「曖昧な」で文脈に合いません。\n\ntransparent は「透明な、情報が公開されている」で、process、government、accounting を修飾する。すべての寄付が公に追跡できる仕組みという記述が、この語の内容を示している。名詞形は transparency。\n\n【図解】情報公開の度合い\n　語｜公開度｜評価\n　transparent｜公開されている｜肯定的\n　opaque｜不透明｜否定的\n　covert｜秘密裏の｜隠されている\n　⇒ 寄付を公に追跡できるなら transparent\n　⚠ ambiguous は「あいまい」で公開の有無とは別の軸。情報の量と明確さを区別する。',
    difficulty: 'standard' as const,
  },

  // ===== GRAMMAR (071-085) =====

  // 071 — Emphatic inversion with Only when
  {
    id: 'eiken_2kyu3_071',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'Only when the results were double-checked ( ) the extent of the calculation error.',
    choices: [
      { key: 'A', text: 'the scientists realized' },
      { key: 'B', text: 'did the scientists realize' },
      { key: 'C', text: 'the scientists did realize' },
      { key: 'D', text: 'realized the scientists' },
    ],
    correctKey: 'B' as const,
    explanation: '"Only when ..."が文頭に来ると主節で倒置が起こります。一般動詞realizeの倒置には助動詞didを使い、"did the scientists realize"となります。"the scientists realized"は倒置がなく、"realized the scientists"は語順が誤りです。\n\n【図解】Only 句の倒置\n　文頭の要素｜主節の語順｜例\n　Only when 節｜did ＋ 主語 ＋ 原形｜did they realize\n　Only after 句｜did ＋ 主語 ＋ 原形｜did he notice\n　Only then｜did ＋ 主語 ＋ 原形｜did she understand\n　⇒ 一般動詞なので did the scientists realize\n　⚠ Only when 節の中は倒置しない。倒置が起こるのは主節だけである点に注意。',
    difficulty: 'advanced' as const,
  },

  // 072 — Subjunctive with "It is vital that"
  {
    id: 'eiken_2kyu3_072',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'It is vital that the emergency exits ( ) clear of obstacles at all times.',
    choices: [
      { key: 'A', text: 'remain' },
      { key: 'B', text: 'remains' },
      { key: 'C', text: 'remained' },
      { key: 'D', text: 'will remain' },
    ],
    correctKey: 'A' as const,
    explanation: '"It is vital that + 主語 + 動詞の原形"は仮定法現在の構文です。vital、essential、necessaryなどの形容詞に続くthat節では動詞は原形を使います。remainsは三単現、remainedは過去形、will remainは未来形でいずれも不適切です。vital、essential、necessary、important などの形容詞が導く that 節でも、require や demand と同じく動詞は原形になる。\n\n【図解】仮定法現在をとる形容詞\n　形容詞｜意味｜that 節の動詞\n　vital｜きわめて重要な｜原形\n　essential｜不可欠な｜原形\n　necessary｜必要な｜原形\n　⇒ 主語が複数でも動詞は原形 remain\n　⚠ remains と三単現にしない。この構文では数の一致も時制の一致も起こらない。',
    difficulty: 'advanced' as const,
  },

  // 073 — Participle clause (reason)
  {
    id: 'eiken_2kyu3_073',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: '( ) unfamiliar with the local customs, the new employee often felt awkward during business meetings.',
    choices: [
      { key: 'A', text: 'Being' },
      { key: 'B', text: 'To be' },
      { key: 'C', text: 'Been' },
      { key: 'D', text: 'Have been' },
    ],
    correctKey: 'A' as const,
    explanation: '現在分詞Beingで始まる分詞構文は理由を表します。"Being unfamiliar with ..." = "Because he was unfamiliar with ..."という意味になります。To be（不定詞）、Been（過去分詞単独）、Have been（時制が不完全）はこの位置の分詞構文として不適切です。\n\n【図解】分詞構文が表す意味\n　形｜意味｜書き換え\n　Being ＋ 形容詞｜理由｜Because he was\n　Having done｜前に完了した動作｜After he had done\n　Done（過去分詞）｜受動｜When it was done\n　⇒ 慣れていないことが理由なら Being\n　⚠ To be では目的の不定詞になり理由を表せない。分詞構文は ing 形か過去分詞で始まる。',
    difficulty: 'standard' as const,
  },

  // 074 — Comparative: no sooner
  {
    id: 'eiken_2kyu3_074',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The negotiations were ( ) more difficult than either side had anticipated at the outset.',
    choices: [
      { key: 'A', text: 'much' },
      { key: 'B', text: 'very' },
      { key: 'C', text: 'so' },
      { key: 'D', text: 'too' },
    ],
    correctKey: 'A' as const,
    explanation: '比較級を強調する副詞にはmuch、far、a lotなどを使います。"much more difficult"で「はるかに困難」という意味になります。veryは原級を強調する副詞で比較級には使えません。so・tooも比較級を直接強調する形では使いません。比較級を強める副詞と原級を強める副詞は使い分けが決まっており、空所の直後が比較級かどうかで判断できる。\n\n【図解】比較級を強める副詞\n　副詞｜修飾する形｜例\n　much, far, a lot｜比較級｜much more difficult\n　very, quite｜原級｜very difficult\n　by far｜最上級｜by far the best\n　⇒ 比較級 more difficult を強めるなら much\n　⚠ very は原級専用。比較級を very で強めることはできない。',
    difficulty: 'standard' as const,
  },

  // 075 — Relative clause with preposition
  {
    id: 'eiken_2kyu3_075',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The hypothesis ( ) the entire experiment was based turned out to be fundamentally flawed.',
    choices: [
      { key: 'A', text: 'on which' },
      { key: 'B', text: 'which on' },
      { key: 'C', text: 'that' },
      { key: 'D', text: 'where' },
    ],
    correctKey: 'A' as const,
    explanation: '"be based on"という動詞句の前置詞onが関係代名詞の前に置かれる形が"on which"です。"the hypothesis on which the experiment was based"で「その仮説に基づいて実験が行われた」という意味になります。"which on"は語順が誤り、thatは前置詞を直前に置けず、whereは場所を表す関係副詞で不適切です。\n\n【図解】前置詞 ＋ 関係代名詞\n　元の形｜関係詞節の形｜例\n　be based on 〜｜on which｜the hypothesis on which\n　depend on 〜｜on which｜the factor on which\n　refer to 〜｜to which｜the source to which\n　⇒ be based on なので on which\n　⚠ that の直前に前置詞は置けない。前置詞を前に出すときは which や whom を使う。',
    difficulty: 'advanced' as const,
  },

  // 076 — Causative: get + O + to do
  {
    id: 'eiken_2kyu3_076',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The manager finally managed to get the reluctant client ( ) the revised contract.',
    choices: [
      { key: 'A', text: 'sign' },
      { key: 'B', text: 'signing' },
      { key: 'C', text: 'to sign' },
      { key: 'D', text: 'signed' },
    ],
    correctKey: 'C' as const,
    explanation: '"get + 目的語 + to不定詞"は「（人を説得して）〜させる」という意味の使役的表現です。makeやletと異なり、getは不定詞にtoが必要です。sign（原形）、signing（現在分詞）はこの構文に合わず、signed（過去分詞）は受動の意味になり不適切です。使役や依頼を表す動詞は続く形が動詞ごとに決まっており、make と let は原形、get と persuade は to 不定詞をとる。\n\n【図解】使役表現と不定詞の to\n　動詞｜形｜to の有無\n　get｜get ＋ 人 ＋ to do｜必要\n　make, have, let｜＋ 人 ＋ 原形｜不要\n　persuade｜persuade ＋ 人 ＋ to do｜必要\n　⇒ get の後ろなので to sign\n　⚠ make と同じ感覚で原形を選ばない。get だけが to 不定詞をとる点が出題される。',
    difficulty: 'standard' as const,
  },

  // 077 — Conditional: unless
  {
    id: 'eiken_2kyu3_077',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'Unless significant changes ( ) to the current policy, public support will likely continue to decline.',
    choices: [
      { key: 'A', text: 'will be made' },
      { key: 'B', text: 'are made' },
      { key: 'C', text: 'would be made' },
      { key: 'D', text: 'were made' },
    ],
    correctKey: 'B' as const,
    explanation: 'unless節（条件節に相当）では未来のことでも現在形を使います。"Unless significant changes are made"で「大きな変更がなされない限り」という意味です。will be made・would be made・were madeはif/unless節内で使う時制として不適切です。\n\n【図解】副詞節の中の時制\n　節の種類｜未来の内容｜使う時制\n　if, unless（条件）｜未来でも｜現在形\n　when, before（時）｜未来でも｜現在形\n　主節｜未来｜will ＋ 原形\n　⇒ unless 節なので are made\n　⚠ will be made としない。時と条件を表す副詞節では未来を現在形で表す。',
    difficulty: 'standard' as const,
  },

  // 078 — Emphatic cleft: what
  {
    id: 'eiken_2kyu3_078',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: '( ) the committee ultimately decided was to postpone the merger until further financial review could be completed.',
    choices: [
      { key: 'A', text: 'That' },
      { key: 'B', text: 'It' },
      { key: 'C', text: 'What' },
      { key: 'D', text: 'Which' },
    ],
    correctKey: 'C' as const,
    explanation: '"What + 主語 + 動詞 + is/was ..."は擬似分裂文（pseudo-cleft）で、「〜したことは…だった」と主題を強調する構文です。Whatは"the thing that"の意味で先行詞を含む関係代名詞として機能します。That・It・Whichはこの構文の主語として使えません。\n\n【図解】疑似分裂文の形\n　形｜働き｜例\n　What 主語 動詞 is 〜｜主題を強調｜What she wants is time\n　It is 〜 that 節｜要素を強調｜It is time that she wants\n　The thing that 〜｜同義の言い換え｜The thing they decided\n　⇒ 文頭で先行詞を含むなら What\n　⚠ That や Which では文全体の主語になれない。先行詞を含む what の働きを押さえる。',
    difficulty: 'advanced' as const,
  },

  // 079 — Passive causative
  {
    id: 'eiken_2kyu3_079',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The homeowners had their roof ( ) after the storm caused significant damage last month.',
    choices: [
      { key: 'A', text: 'repair' },
      { key: 'B', text: 'repairing' },
      { key: 'C', text: 'to repair' },
      { key: 'D', text: 'repaired' },
    ],
    correctKey: 'D' as const,
    explanation: '"have + 目的語 + 過去分詞"は使役構文で「（人に頼んで）〜させる、してもらう」という意味です。屋根が修理される（受動）関係なので過去分詞repairedが正解です。repair（原形）、repairing（現在分詞）、to repair（不定詞）は能動の意味になり不適切です。使役構文では目的語と動詞の関係が能動か受動かで形が変わるため、まず目的語が動作をする側かされる側かを見極める。\n\n【図解】have の使役構文\n　目的語との関係｜形｜例\n　受動｜過去分詞｜have the roof repaired\n　能動（人）｜原形｜have a worker repair it\n　進行｜doing｜have the engine running\n　⇒ 屋根は修理される側なので repaired\n　⚠ to repair は have の使役構文では使わない。get なら to 不定詞をとる点と区別する。',
    difficulty: 'standard' as const,
  },

  // 080 — Concession: much as
  {
    id: 'eiken_2kyu3_080',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: '( ) she admired her colleague\'s ambition, she found his constant need for recognition exhausting.',
    choices: [
      { key: 'A', text: 'Much as' },
      { key: 'B', text: 'As much' },
      { key: 'C', text: 'So much' },
      { key: 'D', text: 'Too much' },
    ],
    correctKey: 'A' as const,
    explanation: '"Much as + 主語 + 動詞"は「〜ではあるが」という譲歩を表す文語的な構文で、althoughに近い意味です。"Much as she admired ..."で「彼女は同僚の野心を称賛していたが」という意味になります。As much、So much、Too muchはこの譲歩構文としては使えません。\n\n【図解】譲歩を表す構文\n　構文｜意味｜語調\n　Much as 主語 動詞｜〜ではあるが｜文語的\n　Although 主語 動詞｜〜だけれども｜一般的\n　As 形容詞 as 主語 be｜〜ではあるが｜倒置的な譲歩\n　⇒ 称賛しつつ不満を述べるなら Much as\n　⚠ As much や So much では譲歩構文にならない。語順そのものが決まった形である。',
    difficulty: 'advanced' as const,
  },

  // 081 — Reduced relative clause
  {
    id: 'eiken_2kyu3_081',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The documents ( ) to the committee last week are still under review.',
    choices: [
      { key: 'A', text: 'submitting' },
      { key: 'B', text: 'submit' },
      { key: 'C', text: 'submitted' },
      { key: 'D', text: 'having submitted' },
    ],
    correctKey: 'C' as const,
    explanation: '過去分詞submittedが後ろから名詞documentsを修飾する分詞句（省略された関係節）の用法です。「委員会に提出された書類」という受動の意味になるためsubmittedが正解です。submitting（能動・進行）はdocumentsが提出する側になり不自然、submit（原形）、having submitted（能動の完了）はいずれも不適切です。\n\n【図解】名詞を後ろから修飾する分詞\n　形｜意味｜例\n　過去分詞｜受動｜documents submitted\n　現在分詞｜能動, 進行｜people waiting\n　関係詞節｜どちらも可｜which were submitted\n　⇒ 書類は提出される側なので submitted\n　⚠ submitting では書類が提出する側になる。修飾される名詞との関係を確認する。',
    difficulty: 'standard' as const,
  },

  // 082 — Subjunctive: suggest
  {
    id: 'eiken_2kyu3_082',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The consultant suggested that the firm ( ) its marketing budget before launching the new campaign.',
    choices: [
      { key: 'A', text: 'reassesses' },
      { key: 'B', text: 'reassessed' },
      { key: 'C', text: 'reassess' },
      { key: 'D', text: 'will reassess' },
    ],
    correctKey: 'C' as const,
    explanation: '"suggest that + 主語 + 動詞の原形"は仮定法現在の構文です。suggest、recommend、proposeなどの提案動詞に続くthat節では動詞は原形を使います。reassesses（三単現）、reassessed（過去形）、will reassess（未来形）はいずれも不適切です。\n\n【図解】提案動詞と that 節\n　動詞｜意味｜that 節の動詞\n　suggest｜提案する｜原形\n　recommend｜勧める｜原形\n　propose｜提案する｜原形\n　⇒ 三単現でも原形 reassess\n　⚠ suggest が「示唆する」の意味なら直説法になる。動詞の意味で形が変わる点に注意。',
    difficulty: 'advanced' as const,
  },

  // 083 — Inversion: In no way
  {
    id: 'eiken_2kyu3_083',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'In no way ( ) responsible for the delay, since the shipment was held up by customs officials beyond anyone\'s control.',
    choices: [
      { key: 'A', text: 'the company was' },
      { key: 'B', text: 'was the company' },
      { key: 'C', text: 'the company did' },
      { key: 'D', text: 'did the company' },
    ],
    correctKey: 'B' as const,
    explanation: '"In no way"のような否定の意味を持つ副詞句が文頭に来ると倒置が起こります。be動詞wasの倒置は"was the company"となります。was the company respondibleという語順が正しく、did the companyはbe動詞の文には使いません。否定の意味を持つ副詞句が文頭に出ると主節が倒置され、述語が be 動詞か一般動詞かで倒置の形が変わる。\n\n【図解】否定の副詞句と倒置\n　文頭の要素｜述語の種類｜倒置の形\n　In no way｜be 動詞｜was ＋ 主語\n　In no way｜一般動詞｜did ＋ 主語 ＋ 原形\n　Under no circumstances｜助動詞｜助動詞 ＋ 主語\n　⇒ 補語が形容詞なので was the company\n　⚠ be 動詞の文に did は使えない。述語の種類で倒置の形が決まる。',
    difficulty: 'advanced' as const,
  },

  // 084 — Gerund vs. infinitive: regret
  {
    id: 'eiken_2kyu3_084',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'I regret ( ) you that your application has not been successful this time.',
    choices: [
      { key: 'A', text: 'informing' },
      { key: 'B', text: 'to inform' },
      { key: 'C', text: 'having informed' },
      { key: 'D', text: 'inform' },
    ],
    correctKey: 'B' as const,
    explanation: '"regret to do"は「残念ながら〜する」という意味で、これから伝える悪い知らせを述べる際に使うフォーマルな表現です。"regret doing"は「〜したことを後悔する」という過去の行為への後悔を表すため、これから知らせる場面には合いません。informing・having informed・informはこの文脈に不適切です。\n\n【図解】regret の後ろの形\n　形｜意味｜時の関係\n　regret to do｜残念ながら〜する｜これから伝える\n　regret doing｜〜したことを後悔する｜すでに済んだ\n　regret having done｜〜したことを悔やむ｜過去を明示\n　⇒ これから不合格を伝えるなら to inform\n　⚠ remember や forget も同じ対立を持つ。to 不定詞は未来、動名詞は過去を指す。',
    difficulty: 'advanced' as const,
  },

  // 085 — Comparative: the least
  {
    id: 'eiken_2kyu3_085',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'Of all the candidates interviewed, she seemed by far ( ) qualified for the position, despite her impressive resume.',
    choices: [
      { key: 'A', text: 'the less' },
      { key: 'B', text: 'less' },
      { key: 'C', text: 'the least' },
      { key: 'D', text: 'least' },
    ],
    correctKey: 'C' as const,
    explanation: '三者以上を比較する最上級には"the + least + 形容詞"を使います。"by far the least qualified"で「（意外にも）群を抜いて最も不適格に見えた」という意味になります。the less・less・leastは比較級または冠詞の欠如により、この最上級の文脈には合いません。\n\n【図解】比較級と最上級の形\n　形｜意味｜対象の数\n　the least ＋ 形容詞｜最も〜でない｜3つ以上\n　less ＋ 形容詞｜より〜でない｜2つ\n　by far ＋ 最上級｜群を抜いて｜強調\n　⇒ Of all the candidates なので the least\n　⚠ 最上級には the が必要。less と least、冠詞の有無の両方を確認する。',
    difficulty: 'advanced' as const,
  },

  // ===== READING (086-100) =====
  // --- PASSAGE 6: Space debris — Q086-088 ---
  {
    id: 'eiken_2kyu3_086',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Since the launch of Sputnik in 1957, human activity in orbit has left behind an ever-growing cloud of debris—spent rocket stages, defunct satellites, and fragments from past collisions—now numbering in the hundreds of thousands of trackable objects. Even a paint fleck, traveling at orbital velocities of nearly 28,000 kilometers per hour, can puncture a spacecraft\'s hull. The greatest concern among scientists is a scenario known as the Kessler Syndrome, in which a single collision between two large objects generates thousands of smaller fragments, each capable of triggering further collisions in a cascading chain reaction that could eventually render certain orbital altitudes unusable for generations.\n\nSeveral companies and space agencies are now developing debris-removal technologies, including robotic arms, nets, and harpoons designed to capture defunct satellites and guide them toward controlled reentry into Earth\'s atmosphere, where they burn up. However, critics note that removal missions remain extraordinarily expensive relative to the small amount of debris each mission can address, and that international agreements governing responsibility for debris cleanup remain notably underdeveloped."\n\nWhat is the "Kessler Syndrome" as described in the passage?',
    choices: [
      { key: 'A', text: 'A medical condition affecting astronauts during long space missions.' },
      { key: 'B', text: 'A chain reaction of collisions that could make parts of orbit unusable for a long time.' },
      { key: 'C', text: 'A technology used to remove debris from Earth\'s orbit.' },
      { key: 'D', text: 'An international treaty that regulates satellite launches.' },
    ],
    correctKey: 'B' as const,
    explanation: 'パッセージでは「a single collision between two large objects generates thousands of smaller fragments... in a cascading chain reaction that could eventually render certain orbital altitudes unusable for generations」と説明されています。連鎖的な衝突により軌道が長期間使用不能になる可能性を指すBが正解です。\n\n【図解】Kessler Syndrome の仕組み\n　段階｜本文の記述｜結果\n　1｜大型物体同士の衝突｜数千の破片が発生\n　2｜破片がさらに衝突｜cascading chain reaction\n　3｜特定高度が使用不能に｜unusable for generations\n　⇒ 連鎖衝突による軌道の長期利用不能が定義\n　⚠ 宇宙飛行士の病気や除去技術の名称ではない。syndrome という語感に引きずられない。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_087',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about space debris and answer the question.\n\n"Since the launch of Sputnik in 1957, human activity in orbit has left behind an ever-growing cloud of debris—spent rocket stages, defunct satellites, and fragments from past collisions—now numbering in the hundreds of thousands of trackable objects. Even a paint fleck, traveling at orbital velocities of nearly 28,000 kilometers per hour, can puncture a spacecraft\'s hull. The greatest concern among scientists is a scenario known as the Kessler Syndrome, in which a single collision between two large objects generates thousands of smaller fragments, each capable of triggering further collisions in a cascading chain reaction that could eventually render certain orbital altitudes unusable for generations.\n\nSeveral companies and space agencies are now developing debris-removal technologies, including robotic arms, nets, and harpoons designed to capture defunct satellites and guide them toward controlled reentry into Earth\'s atmosphere, where they burn up. However, critics note that removal missions remain extraordinarily expensive relative to the small amount of debris each mission can address, and that international agreements governing responsibility for debris cleanup remain notably underdeveloped."\n\nWhy is even a small paint fleck dangerous in orbit, according to the passage?',
    choices: [
      { key: 'A', text: 'It can block sunlight from reaching solar panels on satellites.' },
      { key: 'B', text: 'It travels at extremely high speed and can puncture a spacecraft.' },
      { key: 'C', text: 'It interferes with radio communication between satellites.' },
      { key: 'D', text: 'It gradually corrodes the metal surfaces of spacecraft over time.' },
    ],
    correctKey: 'B' as const,
    explanation: '「Even a paint fleck, traveling at orbital velocities of nearly 28,000 kilometers per hour, can puncture a spacecraft\'s hull」という記述から、極めて高速で移動するため小さな破片でも宇宙船の外殻を貫通しうることがわかります。Bが正解です。\n\n【図解】微小な破片が危険な理由\n　要素｜本文の記述｜数値\n　速度｜orbital velocities｜時速約28,000キロ\n　破片の例｜paint fleck｜塗料の小片\n　被害｜puncture a spacecraft hull｜船体を貫通\n　⇒ 極端な高速ゆえに小片でも貫通する\n　⚠ 通信妨害や腐食は本文にない。危険の原因が速度である点を読み取る。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_088',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about space debris and answer the question.\n\n"Since the launch of Sputnik in 1957, human activity in orbit has left behind an ever-growing cloud of debris—spent rocket stages, defunct satellites, and fragments from past collisions—now numbering in the hundreds of thousands of trackable objects. Even a paint fleck, traveling at orbital velocities of nearly 28,000 kilometers per hour, can puncture a spacecraft\'s hull. The greatest concern among scientists is a scenario known as the Kessler Syndrome, in which a single collision between two large objects generates thousands of smaller fragments, each capable of triggering further collisions in a cascading chain reaction that could eventually render certain orbital altitudes unusable for generations.\n\nSeveral companies and space agencies are now developing debris-removal technologies, including robotic arms, nets, and harpoons designed to capture defunct satellites and guide them toward controlled reentry into Earth\'s atmosphere, where they burn up. However, critics note that removal missions remain extraordinarily expensive relative to the small amount of debris each mission can address, and that international agreements governing responsibility for debris cleanup remain notably underdeveloped."\n\nWhat criticism do critics raise about current debris-removal efforts?',
    choices: [
      { key: 'A', text: 'The robotic arms and nets used have proven completely ineffective in tests.' },
      { key: 'B', text: 'Missions are costly relative to the small amount of debris removed, and international rules are underdeveloped.' },
      { key: 'C', text: 'Space agencies have refused to fund any debris-removal research.' },
      { key: 'D', text: 'Removing debris causes more collisions than it prevents.' },
    ],
    correctKey: 'B' as const,
    explanation: '「removal missions remain extraordinarily expensive relative to the small amount of debris each mission can address, and that international agreements governing responsibility for debris cleanup remain notably underdeveloped」という記述からBが正解とわかります。\n\n【図解】除去活動への批判\n　論点｜本文の記述｜問題\n　費用対効果｜extraordinarily expensive｜除去量に見合わない\n　国際ルール｜notably underdeveloped｜責任の所在が不明確\n　結論｜現状の枠組みでは不十分｜制度整備が必要\n　⇒ 費用の高さと国際合意の未整備が批判点\n　⚠ 「技術が全く効かない」「資金提供を拒否」は本文と矛盾。批判の内容を正確に読む。',
    difficulty: 'advanced' as const,
  },

  // --- PASSAGE 7: Language extinction — Q089-091 ---
  {
    id: 'eiken_2kyu3_089',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Linguists estimate that of the roughly seven thousand languages spoken in the world today, nearly half may disappear by the end of this century. Language loss tends to accelerate once a community\'s younger generation stops acquiring the language from their parents, often because a dominant national or regional language offers greater economic and social advantages. Once this intergenerational transmission breaks, a language can vanish within two or three generations, even if it was spoken by millions of people at its peak.\n\nThe loss of a language represents more than the disappearance of a communication tool; each language encodes a unique way of categorizing the natural world, unique oral histories, and forms of knowledge—particularly regarding local ecosystems, medicinal plants, and agricultural techniques—that are often not recorded elsewhere. Linguists and community members have undertaken numerous revitalization projects, including immersion schools and digital archiving, though such efforts frequently struggle against the same economic pressures that caused the decline in the first place."\n\nAccording to the passage, what typically triggers the decline of a language?',
    choices: [
      { key: 'A', text: 'A sudden natural disaster that displaces the speaking community.' },
      { key: 'B', text: 'Younger generations no longer learning the language from their parents.' },
      { key: 'C', text: 'Government laws that explicitly ban the use of minority languages.' },
      { key: 'D', text: 'A decrease in the overall population of the speaking community.' },
    ],
    correctKey: 'B' as const,
    explanation: '「Language loss tends to accelerate once a community\'s younger generation stops acquiring the language from their parents」という記述からBが正解とわかります。他の選択肢はパッセージに記載されていません。\n\n【図解】言語衰退の引き金\n　段階｜本文の記述｜結果\n　世代間の断絶｜younger generation stops acquiring｜継承が止まる\n　加速｜accelerate｜衰退が早まる\n　最終段階｜話者の減少｜消滅の危機\n　⇒ 親から子への継承が途切れることが引き金\n　⚠ 災害や法的禁止は本文にない。衰退の要因を本文の記述に限定して読む。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_090',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about language extinction and answer the question.\n\n"Linguists estimate that of the roughly seven thousand languages spoken in the world today, nearly half may disappear by the end of this century. Language loss tends to accelerate once a community\'s younger generation stops acquiring the language from their parents, often because a dominant national or regional language offers greater economic and social advantages. Once this intergenerational transmission breaks, a language can vanish within two or three generations, even if it was spoken by millions of people at its peak.\n\nThe loss of a language represents more than the disappearance of a communication tool; each language encodes a unique way of categorizing the natural world, unique oral histories, and forms of knowledge—particularly regarding local ecosystems, medicinal plants, and agricultural techniques—that are often not recorded elsewhere. Linguists and community members have undertaken numerous revitalization projects, including immersion schools and digital archiving, though such efforts frequently struggle against the same economic pressures that caused the decline in the first place."\n\nWhy does the passage suggest that language loss is significant beyond communication itself?',
    choices: [
      { key: 'A', text: 'Because each language often contains unique knowledge about nature and local traditions.' },
      { key: 'B', text: 'Because languages are the only way to preserve national identity.' },
      { key: 'C', text: 'Because fewer languages make international trade more difficult.' },
      { key: 'D', text: 'Because languages are required for government recognition of ethnic groups.' },
    ],
    correctKey: 'A' as const,
    explanation: '「each language encodes a unique way of categorizing the natural world, unique oral histories, and forms of knowledge...that are often not recorded elsewhere」という記述からAが正解とわかります。\n\n【図解】言語が失われることの意味\n　言語が担うもの｜本文の記述｜特徴\n　自然の分類法｜categorizing the natural world｜独自の体系\n　口承の歴史｜oral histories｜文字記録がない\n　知識の形式｜forms of knowledge｜他に記録がない\n　⇒ 他に残されていない知識が失われる点が重要\n　⚠ 「国家的アイデンティティの唯一の手段」は言い過ぎ。本文の記述の範囲で選ぶ。',
    difficulty: 'advanced' as const,
  },
  {
    id: 'eiken_2kyu3_091',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about language extinction and answer the question.\n\n"Linguists estimate that of the roughly seven thousand languages spoken in the world today, nearly half may disappear by the end of this century. Language loss tends to accelerate once a community\'s younger generation stops acquiring the language from their parents, often because a dominant national or regional language offers greater economic and social advantages. Once this intergenerational transmission breaks, a language can vanish within two or three generations, even if it was spoken by millions of people at its peak.\n\nThe loss of a language represents more than the disappearance of a communication tool; each language encodes a unique way of categorizing the natural world, unique oral histories, and forms of knowledge—particularly regarding local ecosystems, medicinal plants, and agricultural techniques—that are often not recorded elsewhere. Linguists and community members have undertaken numerous revitalization projects, including immersion schools and digital archiving, though such efforts frequently struggle against the same economic pressures that caused the decline in the first place."\n\nWhat challenge do language revitalization projects face, according to the passage?',
    choices: [
      { key: 'A', text: 'They are banned by international law in most countries.' },
      { key: 'B', text: 'They often face the same economic pressures that caused the original decline.' },
      { key: 'C', text: 'They have proven completely successful in every documented case.' },
      { key: 'D', text: 'They require the invention of an entirely new alphabet for each language.' },
    ],
    correctKey: 'B' as const,
    explanation: '「such efforts frequently struggle against the same economic pressures that caused the decline in the first place」という記述からBが正解とわかります。設問は言語復興の取り組みが直面する困難を問うており、取り組みの存在自体は認めたうえでの限界として読む必要がある。\n\n【図解】言語復興の課題\n　要素｜本文の記述｜含意\n　取り組み｜revitalization efforts｜教育, 記録\n　直面する壁｜same economic pressures｜衰退を招いた要因\n　結果｜struggle against｜苦戦が続く\n　⇒ 衰退の原因となった経済的圧力が残る点が課題\n　⚠ 「すべての事例で完全に成功」は本文と逆。struggle という語の含意を読む。',
    difficulty: 'standard' as const,
  },

  // --- PASSAGE 8: The history of the printing press — Q092-094 ---
  {
    id: 'eiken_2kyu3_092',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"When Johannes Gutenberg introduced the movable-type printing press to Europe around 1440, he unleashed a transformation whose consequences extended far beyond the mechanical reproduction of text. Before Gutenberg, books were painstakingly copied by hand, a process so slow and costly that only wealthy institutions—churches, monasteries, and royal courts—could afford substantial libraries. Within decades of the press\'s introduction, the cost of producing a book fell dramatically, and literacy rates across Europe began a steady rise that would continue for centuries.\n\nHistorians argue that the printing press did more than simply make existing knowledge more accessible; it fundamentally altered the way ideas spread and were contested. Standardized printed texts allowed scholars in different cities to reference the exact same edition of a work, enabling more rigorous debate. The press also played an instrumental role in the Protestant Reformation, as Martin Luther\'s writings could be reproduced and distributed far faster than religious authorities could suppress them—a dynamic some historians compare to the way social media has accelerated the spread of ideas in the modern era."\n\nAccording to the passage, what was the situation regarding books before Gutenberg\'s invention?',
    choices: [
      { key: 'A', text: 'Books were mass-produced but of very low quality.' },
      { key: 'B', text: 'Books were copied by hand, making them expensive and rare.' },
      { key: 'C', text: 'Books were freely available to anyone who could read.' },
      { key: 'D', text: 'Books were printed using an early, less efficient version of movable type.' },
    ],
    correctKey: 'B' as const,
    explanation: '「books were painstakingly copied by hand, a process so slow and costly that only wealthy institutions...could afford substantial libraries」という記述からBが正解とわかります。\n\n【図解】グーテンベルク以前の書物\n　項目｜本文の記述｜結果\n　複製方法｜copied by hand｜手写本\n　速度と費用｜slow and costly｜大量生産不可\n　所有者｜wealthy institutions｜富裕層と教会などに限定\n　⇒ 手写しゆえに高価で希少だった\n　⚠ 「大量生産されていた」「誰でも入手できた」は本文と矛盾する。',
    difficulty: 'basic' as const,
  },
  {
    id: 'eiken_2kyu3_093',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about the printing press and answer the question.\n\n"When Johannes Gutenberg introduced the movable-type printing press to Europe around 1440, he unleashed a transformation whose consequences extended far beyond the mechanical reproduction of text. Before Gutenberg, books were painstakingly copied by hand, a process so slow and costly that only wealthy institutions—churches, monasteries, and royal courts—could afford substantial libraries. Within decades of the press\'s introduction, the cost of producing a book fell dramatically, and literacy rates across Europe began a steady rise that would continue for centuries.\n\nHistorians argue that the printing press did more than simply make existing knowledge more accessible; it fundamentally altered the way ideas spread and were contested. Standardized printed texts allowed scholars in different cities to reference the exact same edition of a work, enabling more rigorous debate. The press also played an instrumental role in the Protestant Reformation, as Martin Luther\'s writings could be reproduced and distributed far faster than religious authorities could suppress them—a dynamic some historians compare to the way social media has accelerated the spread of ideas in the modern era."\n\nHow did standardized printed texts change scholarly debate, according to the passage?',
    choices: [
      { key: 'A', text: 'They allowed scholars in different cities to refer to the identical edition of a work.' },
      { key: 'B', text: 'They eliminated the need for scholars to communicate with one another at all.' },
      { key: 'C', text: 'They made it illegal for scholars to disagree publicly about a text.' },
      { key: 'D', text: 'They reduced the overall number of books available to scholars.' },
    ],
    correctKey: 'A' as const,
    explanation: '「Standardized printed texts allowed scholars in different cities to reference the exact same edition of a work, enabling more rigorous debate」という記述からAが正解とわかります。\n\n【図解】標準化された印刷本の効果\n　変化｜本文の記述｜結果\n　同一版の共有｜exact same edition｜引用箇所が一致\n　地理的拡大｜scholars in different cities｜遠隔地でも議論可能\n　議論の質｜more rigorous debate｜厳密さが増す\n　⇒ 同一の版を参照できるようになった点が核心\n　⚠ 「連絡が不要になった」は逆。共通基盤ができて議論が活発化したと読む。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_094',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about the printing press and answer the question.\n\n"When Johannes Gutenberg introduced the movable-type printing press to Europe around 1440, he unleashed a transformation whose consequences extended far beyond the mechanical reproduction of text. Before Gutenberg, books were painstakingly copied by hand, a process so slow and costly that only wealthy institutions—churches, monasteries, and royal courts—could afford substantial libraries. Within decades of the press\'s introduction, the cost of producing a book fell dramatically, and literacy rates across Europe began a steady rise that would continue for centuries.\n\nHistorians argue that the printing press did more than simply make existing knowledge more accessible; it fundamentally altered the way ideas spread and were contested. Standardized printed texts allowed scholars in different cities to reference the exact same edition of a work, enabling more rigorous debate. The press also played an instrumental role in the Protestant Reformation, as Martin Luther\'s writings could be reproduced and distributed far faster than religious authorities could suppress them—a dynamic some historians compare to the way social media has accelerated the spread of ideas in the modern era."\n\nWhat comparison do some historians draw regarding the printing press?',
    choices: [
      { key: 'A', text: 'They compare it to the invention of the telephone in the nineteenth century.' },
      { key: 'B', text: 'They compare its role in spreading ideas quickly to how social media functions today.' },
      { key: 'C', text: 'They compare its cost to that of modern digital publishing.' },
      { key: 'D', text: 'They compare Gutenberg\'s achievements to those of Martin Luther as a religious leader.' },
    ],
    correctKey: 'B' as const,
    explanation: '「a dynamic some historians compare to the way social media has accelerated the spread of ideas in the modern era」という記述からBが正解とわかります。設問は本文中で用いられた比喩の対象を問うもので、技術そのものではなく果たした役割の共通点に注目して読む。\n\n【図解】歴史家が用いる比喩\n　比較対象｜本文の記述｜共通点\n　活版印刷｜思想の急速な拡散｜情報伝達の加速\n　ソーシャルメディア｜accelerated the spread of ideas｜同じ働き\n　時代｜15世紀と現代｜技術は違うが機能は類似\n　⇒ 思想拡散の加速という点での類比\n　⚠ 電話や出版コストとの比較は本文にない。比喩の対象を正確に押さえる。',
    difficulty: 'advanced' as const,
  },

  // --- PASSAGE 9: Circadian rhythms and shift work — Q095-097 ---
  {
    id: 'eiken_2kyu3_095',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Modern economies increasingly depend on workers—hospital staff, factory operators, transportation employees—who labor through the night to keep essential services running around the clock. Yet a growing body of research indicates that chronic night-shift work carries substantial health costs, largely because it forces the body\'s internal circadian clock into persistent conflict with its external environment. The circadian system evolved over millions of years to align hormone release, body temperature, and alertness with the natural cycle of daylight and darkness; night work requires employees to be alert precisely when their bodies are biologically primed for rest.\n\nStudies have linked long-term night-shift work to elevated rates of cardiovascular disease, metabolic disorders, and certain cancers, with the World Health Organization\'s cancer research agency classifying shift work involving circadian disruption as a probable carcinogen. Some employers have begun experimenting with scheduling strategies intended to minimize disruption, such as maintaining consistent shift patterns rather than frequently rotating employees between day and night shifts, since rotation appears to be particularly damaging to the body\'s ability to adapt."\n\nWhy does night-shift work create health risks, according to the passage?',
    choices: [
      { key: 'A', text: 'It requires employees to consume unhealthy food during breaks.' },
      { key: 'B', text: 'It forces the body\'s internal clock into conflict with the external environment.' },
      { key: 'C', text: 'It increases the amount of physical labor employees must perform.' },
      { key: 'D', text: 'It reduces the total number of hours employees are allowed to sleep.' },
    ],
    correctKey: 'B' as const,
    explanation: '「it forces the body\'s internal circadian clock into persistent conflict with its external environment」という記述からBが正解とわかります。設問は夜勤が健康に及ぼす影響の仕組みを問うており、労働時間の長さではなく体内時計と環境のずれが核心である。\n\n【図解】夜勤が健康を害する理由\n　要素｜本文の記述｜作用\n　体内時計｜internal circadian clock｜約24時間周期\n　外部環境｜明暗のサイクル｜昼夜が逆転\n　状態｜persistent conflict｜恒常的な不一致\n　⇒ 体内時計と外部環境のずれが原因\n　⚠ 食事内容や労働量は本文にない。原因が生体リズムの不一致である点を読む。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_096',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about circadian rhythms and shift work and answer the question.\n\n"Modern economies increasingly depend on workers—hospital staff, factory operators, transportation employees—who labor through the night to keep essential services running around the clock. Yet a growing body of research indicates that chronic night-shift work carries substantial health costs, largely because it forces the body\'s internal circadian clock into persistent conflict with its external environment. The circadian system evolved over millions of years to align hormone release, body temperature, and alertness with the natural cycle of daylight and darkness; night work requires employees to be alert precisely when their bodies are biologically primed for rest.\n\nStudies have linked long-term night-shift work to elevated rates of cardiovascular disease, metabolic disorders, and certain cancers, with the World Health Organization\'s cancer research agency classifying shift work involving circadian disruption as a probable carcinogen. Some employers have begun experimenting with scheduling strategies intended to minimize disruption, such as maintaining consistent shift patterns rather than frequently rotating employees between day and night shifts, since rotation appears to be particularly damaging to the body\'s ability to adapt."\n\nWhat scheduling strategy is mentioned as a way to reduce the negative effects of shift work?',
    choices: [
      { key: 'A', text: 'Requiring all employees to work exclusively during daytime hours.' },
      { key: 'B', text: 'Maintaining consistent shift patterns instead of frequently rotating shifts.' },
      { key: 'C', text: 'Eliminating night shifts from all essential industries entirely.' },
      { key: 'D', text: 'Increasing the total number of hours worked per shift.' },
    ],
    correctKey: 'B' as const,
    explanation: '「maintaining consistent shift patterns rather than frequently rotating employees between day and night shifts, since rotation appears to be particularly damaging」という記述からBが正解とわかります。\n\n【図解】シフト設計の工夫\n　方式｜本文の評価｜理由\n　一定のシフトを維持｜推奨される｜体内時計が適応しやすい\n　頻繁な交代制｜particularly damaging｜適応する間もなく変わる\n　夜勤の全廃｜現実的でない｜必須産業がある\n　⇒ 交代を減らし一定のパターンを保つ\n　⚠ 「夜勤を完全になくす」は本文の提案ではない。現実的な緩和策を選ぶ。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_097',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about circadian rhythms and shift work and answer the question.\n\n"Modern economies increasingly depend on workers—hospital staff, factory operators, transportation employees—who labor through the night to keep essential services running around the clock. Yet a growing body of research indicates that chronic night-shift work carries substantial health costs, largely because it forces the body\'s internal circadian clock into persistent conflict with its external environment. The circadian system evolved over millions of years to align hormone release, body temperature, and alertness with the natural cycle of daylight and darkness; night work requires employees to be alert precisely when their bodies are biologically primed for rest.\n\nStudies have linked long-term night-shift work to elevated rates of cardiovascular disease, metabolic disorders, and certain cancers, with the World Health Organization\'s cancer research agency classifying shift work involving circadian disruption as a probable carcinogen. Some employers have begun experimenting with scheduling strategies intended to minimize disruption, such as maintaining consistent shift patterns rather than frequently rotating employees between day and night shifts, since rotation appears to be particularly damaging to the body\'s ability to adapt."\n\nWhat health risks have been linked to long-term night-shift work, according to the passage?',
    choices: [
      { key: 'A', text: 'Cardiovascular disease, metabolic disorders, and certain cancers.' },
      { key: 'B', text: 'Only minor issues such as occasional headaches and fatigue.' },
      { key: 'C', text: 'Vision problems caused by working in poorly lit environments.' },
      { key: 'D', text: 'Hearing loss caused by loud machinery used during night shifts.' },
    ],
    correctKey: 'A' as const,
    explanation: '「Studies have linked long-term night-shift work to elevated rates of cardiovascular disease, metabolic disorders, and certain cancers」という記述からAが正解とわかります。\n\n【図解】長期夜勤と関連する疾患\n　分類｜本文の記述｜例\n　循環器系｜cardiovascular disease｜心疾患\n　代謝系｜metabolic disorders｜糖尿病など\n　腫瘍｜certain cancers｜一部のがん\n　⇒ 本文が列挙する3分類が答えの根拠\n　⚠ 「軽い頭痛程度」と軽く見る選択肢は本文と矛盾。列挙された疾患名を確認する。',
    difficulty: 'basic' as const,
  },

  // --- PASSAGE 10: The rise of citizen science — Q098-100 ---
  {
    id: 'eiken_2kyu3_098',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Citizen science, in which members of the public collaborate with professional researchers by collecting or analyzing data, has grown dramatically alongside the spread of smartphones and internet connectivity. Volunteers now contribute to projects ranging from cataloging bird migrations to classifying distant galaxies in astronomical images that would take professional researchers decades to review manually. Proponents argue that these projects generate valuable scientific data at a fraction of the cost of traditional research while simultaneously fostering public engagement with, and understanding of, the scientific process.\n\nSkeptics, however, raise concerns about data quality, noting that volunteers—however enthusiastic—typically lack the specialized training of professional scientists, which can introduce inconsistencies or errors into datasets. In response, many citizen science platforms have implemented safeguards, such as having multiple volunteers independently classify the same piece of data and using statistical methods to identify and flag ambiguous or contested results before they are incorporated into published research. Studies comparing citizen-generated data with data collected by trained experts have generally found accuracy levels high enough for many, though not all, scientific applications."\n\nWhat is "citizen science" as defined in the passage?',
    choices: [
      { key: 'A', text: 'A government program that funds only professional research institutions.' },
      { key: 'B', text: 'A collaboration in which members of the public help collect or analyze scientific data.' },
      { key: 'C', text: 'A university degree program focused on public policy.' },
      { key: 'D', text: 'A type of software used exclusively by professional astronomers.' },
    ],
    correctKey: 'B' as const,
    explanation: 'パッセージ冒頭で「members of the public collaborate with professional researchers by collecting or analyzing data」と定義されています。Bが正解です。設問は市民科学という語の定義を問うもので、本文冒頭の定義文をそのまま根拠にできる典型的な出題である。\n\n【図解】citizen science の定義\n　要素｜本文の記述｜内容\n　参加者｜members of the public｜一般市民\n　協働相手｜professional researchers｜専門研究者\n　役割｜collecting or analyzing data｜データの収集と分析\n　⇒ 市民が研究者と協働してデータを扱う仕組み\n　⚠ 学位課程や特定のソフトウェアではない。定義文の語句を根拠にする。',
    difficulty: 'basic' as const,
  },
  {
    id: 'eiken_2kyu3_099',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about citizen science and answer the question.\n\n"Citizen science, in which members of the public collaborate with professional researchers by collecting or analyzing data, has grown dramatically alongside the spread of smartphones and internet connectivity. Volunteers now contribute to projects ranging from cataloging bird migrations to classifying distant galaxies in astronomical images that would take professional researchers decades to review manually. Proponents argue that these projects generate valuable scientific data at a fraction of the cost of traditional research while simultaneously fostering public engagement with, and understanding of, the scientific process.\n\nSkeptics, however, raise concerns about data quality, noting that volunteers—however enthusiastic—typically lack the specialized training of professional scientists, which can introduce inconsistencies or errors into datasets. In response, many citizen science platforms have implemented safeguards, such as having multiple volunteers independently classify the same piece of data and using statistical methods to identify and flag ambiguous or contested results before they are incorporated into published research. Studies comparing citizen-generated data with data collected by trained experts have generally found accuracy levels high enough for many, though not all, scientific applications."\n\nWhat concern do skeptics of citizen science raise?',
    choices: [
      { key: 'A', text: 'Volunteers often refuse to participate in scientific projects.' },
      { key: 'B', text: 'The lack of specialized training among volunteers can introduce errors into data.' },
      { key: 'C', text: 'Citizen science projects are far more expensive than traditional research.' },
      { key: 'D', text: 'Government agencies have banned the use of citizen-collected data.' },
    ],
    correctKey: 'B' as const,
    explanation: '「volunteers...typically lack the specialized training of professional scientists, which can introduce inconsistencies or errors into datasets」という記述からBが正解とわかります。\n\n【図解】懐疑論者の指摘\n　論点｜本文の記述｜結果\n　訓練の不足｜lack specialized training｜手法が不統一\n　データへの影響｜inconsistencies or errors｜精度が下がる\n　結論｜品質管理が必要｜補正の仕組みが要る\n　⇒ 専門的訓練の不足による誤差混入が懸念\n　⚠ 「参加を拒む」「費用が高い」は本文にない。懸念の中身を本文で確認する。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_100',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about citizen science and answer the question.\n\n"Citizen science, in which members of the public collaborate with professional researchers by collecting or analyzing data, has grown dramatically alongside the spread of smartphones and internet connectivity. Volunteers now contribute to projects ranging from cataloging bird migrations to classifying distant galaxies in astronomical images that would take professional researchers decades to review manually. Proponents argue that these projects generate valuable scientific data at a fraction of the cost of traditional research while simultaneously fostering public engagement with, and understanding of, the scientific process.\n\nSkeptics, however, raise concerns about data quality, noting that volunteers—however enthusiastic—typically lack the specialized training of professional scientists, which can introduce inconsistencies or errors into datasets. In response, many citizen science platforms have implemented safeguards, such as having multiple volunteers independently classify the same piece of data and using statistical methods to identify and flag ambiguous or contested results before they are incorporated into published research. Studies comparing citizen-generated data with data collected by trained experts have generally found accuracy levels high enough for many, though not all, scientific applications."\n\nHow have citizen science platforms addressed concerns about data quality?',
    choices: [
      { key: 'A', text: 'By banning volunteers who make even a single mistake.' },
      { key: 'B', text: 'By having multiple volunteers independently classify the same data and flagging uncertain results.' },
      { key: 'C', text: 'By requiring all volunteers to obtain a university degree in science.' },
      { key: 'D', text: 'By eliminating human involvement entirely and using only automated systems.' },
    ],
    correctKey: 'B' as const,
    explanation: '「having multiple volunteers independently classify the same piece of data and using statistical methods to identify and flag ambiguous or contested results」という記述からBが正解とわかります。\n\n【図解】データ品質を保つ仕組み\n　手法｜本文の記述｜効果\n　重複分類｜multiple volunteers independently｜個人の誤りを相殺\n　統計処理｜statistical methods｜ばらつきを検出\n　不確実な結果の扱い｜flag ambiguous results｜専門家が再確認\n　⇒ 複数人の独立分類と統計的な検出が対策\n　⚠ 「人間を排除して自動化」は本文と逆。市民参加を保ちつつ精度を上げる工夫である。',
    difficulty: 'advanced' as const,
  },
];
