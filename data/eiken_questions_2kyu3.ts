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
      { key: 'B', text: 'imminent' },
      { key: 'C', text: 'prominent' },
      { key: 'D', text: 'distinguished' },
    ],
    correctKey: 'B' as const,
    explanation: '"imminent"は「差し迫った」の意味で、地震がすぐに起こりそうな状況を表します。"eminent"は「著名な」、"prominent"は「目立つ・著名な」、"distinguished"は「著名な・卓越した」で、いずれも人物の評価に使われる形容詞です。',
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
      { key: 'C', text: 'elicit' },
      { key: 'D', text: 'implicit' },
    ],
    correctKey: 'C' as const,
    explanation: '"elicit"は「（反応・情報などを）引き出す」という動詞です。"illicit"は「違法の」（形容詞）、"explicit"は「明示的な」（形容詞）、"implicit"は「暗黙の」（形容詞）で、動詞として使えません。',
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
    explanation: '"reassure"は「（不安を感じている人を）安心させる・励ます」の意味。"assure"は「（人に）断言する」、"ensure"は「確実にする」（人を目的語に取らない）、"insure"は「保険をかける」です。緊張している人を励ます文脈では"reassure"が最適です。',
    difficulty: 'advanced' as const,
  },

  // 004 — principal / principle
  {
    id: 'eiken_2kyu3_004',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Honesty is the ( ) on which the entire organization was founded, and it guides every business decision we make.',
    choices: [
      { key: 'A', text: 'principal' },
      { key: 'B', text: 'principle' },
      { key: 'C', text: 'primal' },
      { key: 'D', text: 'preview' },
    ],
    correctKey: 'B' as const,
    explanation: '"principle"は「原則・信条」という名詞です。"principal"は「主要な」（形容詞）または「校長・主体」（名詞）で、ここでは不適切。"on which the organization was founded"という関係詞節が続くことからも、組織の基盤となる「原則」を意味する"principle"が正解です。',
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
      { key: 'B', text: 'complements' },
      { key: 'C', text: 'compromises' },
      { key: 'D', text: 'competes' },
    ],
    correctKey: 'B' as const,
    explanation: '"complement"は「（互いに）引き立て合う・補完する」という動詞です。"compliment"は「褒める」で、食べ物同士には使いません。"compromise"は「妥協する・損なう」、"compete"は「競争する」でいずれも文脈に合いません。',
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
      { key: 'C', text: 'affect' },
      { key: 'D', text: 'influence' },
    ],
    correctKey: 'C' as const,
    explanation: '"affect"は「影響を与える」という動詞で、ここでは認知能力に悪影響を与えるという文脈に最も自然に合います。"effect"は通常名詞（効果）ですが動詞として使う場合は「引き起こす」。"impact"と"influence"も動詞として使えますが、"negatively affect"は英語で最も一般的な表現です。',
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
    explanation: '"postpone"は「延期する」の意味で、懸念が提起された後に予算削減案を先送りにするという文脈に合います。"scrutinize"は「精査する」、"accelerate"は「加速する」で文脈に合わず、"abandon"（放棄する）は過激すぎます。',
    difficulty: 'standard' as const,
  },

  // 008 — vocabulary
  {
    id: 'eiken_2kyu3_008',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The diplomat worked tirelessly to ( ) tensions between the two neighboring countries that had been in conflict for decades.',
    choices: [
      { key: 'A', text: 'escalate' },
      { key: 'B', text: 'alleviate' },
      { key: 'C', text: 'fabricate' },
      { key: 'D', text: 'provoke' },
    ],
    correctKey: 'B' as const,
    explanation: '"alleviate"は「（緊張・苦しみなどを）和らげる・緩和する」の意味です。外交官が緊張を和らげるために尽力するという文脈に最も合います。"escalate"は「激化させる」、"fabricate"は「でっち上げる」、"provoke"は「挑発する」でいずれも逆の意味です。',
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
    explanation: '"amplify"は「増幅させる・広める」の意味で、主流メディアに無視されてきたコミュニティの声を広めるという文脈に合います。"suppress"は「抑圧する」、"distort"は「歪める」、"contradict"は「矛盾する」で文意に反します。',
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
    explanation: '"rigorous"は「厳密な・徹底的な」の意味で、長年にわたる科学的研究を形容する際に適切な学術的語彙です。"reckless"は「無謀な」、"redundant"は「余分な・不要な」、"reluctant"は「気が進まない」で文脈に合いません。',
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
    explanation: '"eminent"は「（学者・専門家として）著名な・卓越した」という意味の形容詞で、国際的に認められた学者を形容するのに適切です。"imminent"は「差し迫った」、"implicit"は「暗黙の」、"eligible"は「資格がある」で文脈に合いません。',
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
    explanation: '"precarious"は「不安定な・危うい」の意味で、工場閉鎖後に生活費の支払いさえ不安になった労働者の状況を正確に表しています。"prosperous"は「繁栄した」で逆の意味。"redundant"は英国英語で「解雇された」の意味もありますが、"situation"を修飾する場合は不自然です。',
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
    explanation: '"voluntary"は「自発的な・無償の」の意味で、慈善団体への自由意志による寄付を表すのに適切です。"compulsory"・"mandatory"・"statutory"はいずれも「義務的な・強制的な」の意味で、自由意志による寄付とは矛盾します。',
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
    explanation: '"authentic"は「真正な・本物の」の意味で、自身の家族の歴史に基づいた移民生活の描写を形容するのに適しています。"artificial"は「人工的な・作り物の」で逆の意味。"ambiguous"は「曖昧な」、"anonymous"は「匿名の」で文脈に合いません。',
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
    explanation: '"criticism"は「批判」の意味で、自分の給与を上げながら部下のボーナスを削減するというCEOの決定に対する否定的な反応として適切です。"admiration"・"gratitude"・"endorsement"はいずれも肯定的な意味で文脈に反します。',
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
    explanation: '"reaffirm"は「再確認する・改めて誓約する」の意味で、各国政府がパリ協定への取り組みを改めて確認するという文脈に最も合います。"withdraw"は「撤退する」、"overlook"は「見落とす」、"undermine"は「損なう」で文意に反します。',
    difficulty: 'advanced' as const,
  },

  // 017 — vocabulary
  {
    id: 'eiken_2kyu3_017',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The local council voted to ( ) the historic building from demolition by listing it as a protected heritage site.',
    choices: [
      { key: 'A', text: 'exclude' },
      { key: 'B', text: 'safeguard' },
      { key: 'C', text: 'exempt' },
      { key: 'D', text: 'surrender' },
    ],
    correctKey: 'B' as const,
    explanation: '"safeguard"は「守る・保護する」の意味で、歴史的建造物を取り壊しから保護するという文脈に最も適しています。"exclude"は「除外する」、"exempt"は「免除する」（from との相性は良いが意味が異なる）、"surrender"は「降伏する・引き渡す」です。',
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
    explanation: '"compelling"は「説得力のある・注目に値する」の意味で、追加資金を獲得できるほど優れた研究結果を形容するのに適しています。"inconclusive"は「結論が出ない」、"irrelevant"は「無関係な」、"superficial"は「表面的な」でいずれも不適切です。',
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
    explanation: '"facilitate"は「促進する・可能にする」の意味で、低所得世帯向けの手頃な住宅供給を促進する政策という文脈に適しています。"demolish"は「取り壊す」、"restrict"は「制限する」で逆の意味。"provision"は名詞・動詞両形ありますが、ここでは"facilitate"が最も自然です。',
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
    explanation: '"consistent with"は「〜と一致する・〜に合致する」という医学・科学分野でよく使われる表現です。患者の症状が熱帯病の症状と一致しているという文脈に最も適しています。"contradictory"は「矛盾する」、"irrelevant"は「無関係な」で文意に反します。',
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
    explanation: 'コンマで区切られた非制限的関係代名詞節で、先行詞はDr. Nakamura（人）。後続する"research"は名詞なので、所有を示す関係代名詞"whose"（〜の）が必要です。"who"の後には動詞が続きます。"that"は非制限的節では使えません。',
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
    explanation: '"Hardly"が文頭に出ると倒置が起こります。"Hardly had + 主語 + 過去分詞 + when ..."で「〜するかしないうちに…した」という意味です。過去完了形を使い、助動詞hadが主語の前に出ます。"she had reached"では倒置がなく非文法的です。',
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
    explanation: 'これは混合仮定法（mixed conditional）です。If節は過去の事実に反する仮定（仮定法過去完了：had taken）、主節は現在への影響（仮定法過去：would be）を表します。"would have been"は純粋な仮定法過去完了で、現在の状態には使えません。',
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
    explanation: '"It is believed that ..."は「〜と信じられている」というフォーマルな受動態表現で、学術的・報道的な文章でよく使われます。"They believe"も正しい英語ですが、Cは語順が誤り、Dは"people"が複数形なのに"believes"と三単現を使っており非文法的です。',
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
    explanation: '"Scarcely"が文頭に来る場合も"Hardly"と同様に倒置が起こります。"Scarcely had + 主語 + 過去分詞 + when ..."という形で「〜するかしないうちに…した」を表します。過去完了形と倒置（had + 主語）の両方が必要です。',
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
    explanation: '"By the time + 現在形"の節に対して主節では未来完了進行形（will have been doing）を使います。「来春開通するまでには、6年以上取り組み続けていることになる」という継続を強調する表現です。未来完了"will have worked"も可能ですが、継続性を示す進行形が最も自然です。',
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
    explanation: '"It is reported that ..."は「〜と報告されている・〜と伝えられている」という報道でよく使われるフォーマルな受動態表現です。"It"は形式主語で、that節が真の主語です。"reports"では主語が"it"なので意味が通じません。',
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
    explanation: 'コンマなしの制限的関係代名詞節で、「昨年導入されたその政策」と特定するために"that"を使います。コンマなしの制限的用法では"that"か"which"が使えますが、"that"の方が制限的節では慣用的です。"that"はコンマを伴う非制限的節では使えません（選択肢AとBは除外）。',
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
    explanation: '"recommend that ..."の後のthat節では仮定法現在（動詞の原形）を使います。受動態の場合は"be + 過去分詞"の形になります。三単現の"s"はつけません。"is implemented"は直説法現在で、"recommend"などの提案動詞の後では使いません。',
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
    explanation: 'これは強調構文（cleft sentence）です。"It was + 強調したい語句 + that + 残りの文"という形で、"the unexpected cold snap in March"を強調しています。強調構文では先行詞が人でも物でも"that"を使うのが一般的です（"which"も可能ですが"that"の方が慣用的）。',
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
    explanation: '"No sooner"が文頭に来ると倒置が起こります。"No sooner had + 主語 + 過去分詞 + than ..."で「〜するやいなや…した」の意味です。過去完了の助動詞"had"が主語の前に出ます。"she had entered"では倒置がなく非文法的です。',
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
    explanation: '"since + 過去の時点"で始まる節とともに主節では現在完了形を使います。「地震計が設置されて以来、3回の大地震を経験している」という現在までの経験・継続を表します。単純過去"experienced"はsince節と組み合わせられません。',
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
    explanation: '仮定法過去完了の条件節です。"If + 主語 + had + 過去分詞"で過去の事実に反する仮定を表します。主節では"might have found"（〜できたかもしれない）が使われています。"would arrive"は仮定法過去で現在・未来の仮定に使います。',
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
    explanation: '"is said to have + 過去分詞"は「〜したと言われている」という過去の出来事についての伝聞表現です。"It is said that ..."と同じ意味を持つフォーマルな表現です。主語が"the missing explorer"（人）の場合も同じ形を使います。',
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
    explanation: '"should have + 過去分詞"は「〜すべきだったのに（しなかった）」という過去の後悔・非難を表します。「提出する前に教授に相談すべきだったのに、今となっては遅い」という文脈に合います。"should consult"は現在・未来の義務を表します。',
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
    explanation: 'パッセージでは「an AI\'s logic may be opaque even to its developers—a phenomenon known as the \'black box\' problem」と説明されています。AIの判断プロセスが開発者にさえ不透明であることを指します。Dがこれを正確に言い換えています。',
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
    explanation: '"rivals"は「匹敵する・張り合う」の意味です。「経験豊富な専門家の精度に匹敵し、場合によってはそれを上回る」という文脈から、"competes with"（〜と肩を並べる）が最も近い意味です。"falls short of"は「及ばない」で反対の意味になります。',
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
    explanation: 'パッセージは「AIは自律的な診断者ではなく意思決定支援システムとして理解されるべき」という専門家の見解と、規制当局が精度に加えて解釈可能性を求めている点を強調しています。これらの点から、AIの精度が向上しても人間による監督が重要であり続けるという推論が導かれます。AとDはパッセージの慎重な立場と矛盾します。',
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
    explanation: '"international chains have paradoxically stimulated interest in local street food, as younger generations seeking authentic experiences push back against the uniformity of global brands"という記述から、国際的チェーンが逆説的に地元の屋台料理への関心を高めたことがわかります。Bがこれを正確に表しています。',
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
    explanation: '"eroding"は"erode"の現在分詞で「徐々に侵食する・少しずつ損なう」の意味です。「標準化されたメニューが数百年かけて発展した地域の食文化を徐々に損なっている」という文脈から、"gradually destroying"（徐々に破壊する）が最も近い意味です。"quickly replacing"は速度が違います。',
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
    explanation: 'パッセージは「The situation is more complex than it first appears」と明言し、都市部では地元料理への関心が高まる一方、農村部では課題が続くという複雑な状況を描いています。Dが「文脈によって影響が異なる」という全体的な主張を最も正確に表しています。',
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
    explanation: 'パッセージは「interceptor devices in rivers to catch debris before it reaches the sea」が「post-pollution ocean cleanup operations」より効果的だとしています。海に入ってしまった後のクリーンアップより、入る前に止める方が分散を防げるという論理です。Cがこれを最もよく表しています。',
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
    explanation: 'パッセージは「Scientists have detected microplastics in the tissues of fish, seabirds, and marine mammals, raising serious concerns about the long-term consequences for biodiversity」と述べています。「深刻な懸念」を「示唆している」という推論が必要です。Bは証明されたとは書かれていません。Cが「潜在的な害を示唆する」という適切な推論です。',
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
    explanation: '"International cooperation, however, remains the greatest challenge: plastics produced in one country routinely end up on the beaches of another."という記述から、プラスチック汚染が国境を越えるため国際協力が最大の課題であることがわかります。Cがこれを正確に表しています。',
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
    explanation: '"she overcame the systemic barriers that barred women from higher education in Russian-controlled Poland by attending a clandestine institution known as the \'Floating University\'"という記述から、女性が高等教育への進学を禁じられていたため、秘密裡に運営される機関に通ったことがわかります。Bが正解です。',
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
    explanation: '"clandestine"は「秘密の・内密の」という意味の形容詞です。当局に認められていない秘密機関として運営されていた「浮動大学」の文脈から、"conducted in secret"（秘密裏に運営されている）が最も近い意味です。',
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
    explanation: 'パッセージは「Despite her global renown, she faced persistent prejudice: the French Academy of Sciences refused to admit her as a member, citing her gender.」と述べています。世界的に有名になっても性差別に直面したという事実から、「卓越した業績でさえ性差別を克服するには不十分な場合があった」という推論が導かれます。Cが正解です。',
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
    explanation: 'パッセージでは「the \'habitable zone,\' the range of distances from a star where liquid water could potentially exist on a planetary surface」と定義されています。恒星からの距離が液体の水が存在できる範囲であることがBに正確に示されています。',
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
    explanation: '"geological and chemical processes can also produce them"という記述から、酸素やメタンは生物活動以外の地質学的・化学的プロセスによっても生成されるため、それらの存在だけでは生命の確認にならないとわかります。Bが正解です。',
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
    explanation: 'パッセージの最後の文「a task that may require decades of observation and technology that does not yet exist」から、数十年の観測と現在はまだ存在しない技術が必要かもしれないと述べられています。これは決定的な証拠の発見が非常に長い時間を要することを示唆しており、Cが正解です。選択肢Dは「次世代望遠鏡が決定的に答える」と断言していますが、パッセージはそのような確信を示していません。',
    difficulty: 'advanced' as const,
  },
];
