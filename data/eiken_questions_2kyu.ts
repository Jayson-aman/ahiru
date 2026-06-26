import type { EikenQuestion } from './eiken_questions';

export const eikenQuestions2kyu: EikenQuestion[] = [
  // ── VOCABULARY 1–20 ──────────────────────────────────────────────
  {
    id: 'eiken_2kyu_001',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The committee decided to ( ) the decision until more data was available, hoping for a clearer picture before committing to any course of action.',
    choices: [
      { key: 'A', text: 'defer' },
      { key: 'B', text: 'delay' },
      { key: 'C', text: 'postpone' },
      { key: 'D', text: 'suspend' },
    ],
    correctKey: 'A',
    explanation:
      '"defer a decision" は「より信頼できる情報や権威が整うまで先送りにする」というニュアンスで、データを待つ文脈に最も適切。delay・postpone も「遅らせる」意味だが deferほど「判断を委ねる」含意がない。suspend は「活動・特権などを一時停止する」場合に使い、通常 decision には使わない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_002',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'His remarks were so ( ) that different members of the audience interpreted them in completely opposite ways.',
    choices: [
      { key: 'A', text: 'ambiguous' },
      { key: 'B', text: 'ambivalent' },
      { key: 'C', text: 'obscure' },
      { key: 'D', text: 'vague' },
    ],
    correctKey: 'A',
    explanation:
      'ambiguous は「（発言・意味が）複数の解釈を許す、曖昧な」で、異なる人が反対の解釈をしたという文脈に最適。ambivalent は「心情が両面にある、矛盾した気持ちを持つ」で主に感情に使う。obscure は「（知識・作品が）無名・難解な」、vague は「漠然とした」で曖昧さは表すが「複数の解釈」のニュアンスは薄い。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_003',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The new medication proved ( ) in clinical trials, reducing symptoms in over 90 percent of participants.',
    choices: [
      { key: 'A', text: 'potent' },
      { key: 'B', text: 'effective' },
      { key: 'C', text: 'efficient' },
      { key: 'D', text: 'capable' },
    ],
    correctKey: 'B',
    explanation:
      '"effective" は「（薬・方法が）意図した効果を上げる」意。症状軽減という結果を強調する文脈に最適。potent は「（薬・物質が）強力な作用を持つ」で効能の強さに焦点があり、症状軽減率には直接つながりにくい。efficient は「効率的な」でプロセスに着目。capable は人や機械の「能力がある」に使う。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_004',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Rising sea levels ( ) a serious threat to coastal communities around the world, potentially displacing millions of people.',
    choices: [
      { key: 'A', text: 'pose' },
      { key: 'B', text: 'raise' },
      { key: 'C', text: 'present' },
      { key: 'D', text: 'provide' },
    ],
    correctKey: 'A',
    explanation:
      '"pose a threat" は英語の固定コロケーションで「脅威をもたらす」の意。present a threat も文法的には成立するが、pose の方がより慣用的で自然。raise a threat という表現は一般的でなく、provide a threat は意味的に不自然。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_005',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The professor\'s lecture was highly ( ); she drew connections between ancient philosophy and contemporary neuroscience that no one had considered before.',
    choices: [
      { key: 'A', text: 'innovative' },
      { key: 'B', text: 'stimulating' },
      { key: 'C', text: 'provocative' },
      { key: 'D', text: 'enlightening' },
    ],
    correctKey: 'D',
    explanation:
      '"enlightening" は「新たな知識や視点をもたらす」意で、誰も考えなかった視点を示した講義の説明として最適。stimulating は「知的好奇心を刺激する」、innovative は「革新的な」でどちらも惜しいが、enlightening は「無知から理解へ導く」ニュアンスがある。provocative は「物議を醸す、挑発的な」で否定的含意もある。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_006',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The charity relies ( ) on donations from the public, as it receives no government funding whatsoever.',
    choices: [
      { key: 'A', text: 'entirely' },
      { key: 'B', text: 'largely' },
      { key: 'C', text: 'solely' },
      { key: 'D', text: 'heavily' },
    ],
    correctKey: 'C',
    explanation:
      '"relies solely on" は「ただ一つの源だけに頼る」という排他的な依存を表し、"no government funding whatsoever" という後半と論理的に一致する。entirely や wholly も類似するが、"relies entirely on" は稀な表現。largely・heavily は部分的依存を示し "no government funding" と矛盾する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_007',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The mayor\'s proposal to build a new stadium was met with ( ) from local residents, who argued that schools and hospitals were more urgently needed.',
    choices: [
      { key: 'A', text: 'opposition' },
      { key: 'B', text: 'resistance' },
      { key: 'C', text: 'objection' },
      { key: 'D', text: 'criticism' },
    ],
    correctKey: 'C',
    explanation:
      '"met with objection" は「異議・反対意見を受ける」という慣用表現。"raise an objection" とも言う。opposition は「反対勢力・組織的抵抗」、resistance は「物理的・継続的な抵抗」、criticism は「批判」でいずれも正しくはあるが、"met with" というコロケーションでは objection が最も自然。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_008',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'After years of ( ) research, the team finally published their findings on the genetic causes of the rare disorder.',
    choices: [
      { key: 'A', text: 'relentless' },
      { key: 'B', text: 'thorough' },
      { key: 'C', text: 'meticulous' },
      { key: 'D', text: 'rigorous' },
    ],
    correctKey: 'A',
    explanation:
      '"relentless research" は「何年もやめることなく続けた研究」という粘り強さを表し、"years of" という時間的長さと最もよく対応する。meticulous は「細部に注意を払った」、rigorous は「厳密な手順に従った」、thorough は「徹底的な」でいずれも研究の質には合うが、長年継続したという粘り強さを最も強く表すのは relentless。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_009',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The documentary ( ) the devastating impact of plastic pollution on marine wildlife, prompting many viewers to change their daily habits.',
    choices: [
      { key: 'A', text: 'depicted' },
      { key: 'B', text: 'portrayed' },
      { key: 'C', text: 'illustrated' },
      { key: 'D', text: 'exposed' },
    ],
    correctKey: 'D',
    explanation:
      '"exposed" は「（隠れていた問題を）明らかにする・暴く」で、視聴者の行動変容を促したという結果と自然につながる。depicted・portrayed は「描写した」、illustrated は「例示・図示した」でいずれも中立的な描写。exposed には「社会的問題を告発する」強い含意がある。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_010',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The two countries signed a trade agreement designed to ( ) tariffs on agricultural products over the next five years.',
    choices: [
      { key: 'A', text: 'abolish' },
      { key: 'B', text: 'reduce' },
      { key: 'C', text: 'phase out' },
      { key: 'D', text: 'eliminate' },
    ],
    correctKey: 'C',
    explanation:
      '"phase out" は「段階的に廃止する」意で、"over the next five years" という時間的段階を示す表現と最も適合する。abolish・eliminate は即時・完全な廃止を示唆し、段階的ニュアンスが薄い。reduce は「削減する」で廃止ではなく量の減少にとどまる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_011',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The new traffic regulations were ( ) on all drivers regardless of the type of vehicle they operated.',
    choices: [
      { key: 'A', text: 'binding' },
      { key: 'B', text: 'compelling' },
      { key: 'C', text: 'obligatory' },
      { key: 'D', text: 'mandatory' },
    ],
    correctKey: 'A',
    explanation:
      '"binding on" は「（規則・契約が）〜に対して法的拘束力を持つ」という法律用語的な表現で、"on all drivers" との相性が最も良い。mandatory・obligatory はいずれも「義務的な」を意味するが、"mandatory/obligatory on" という構文は一般的でない。compelling は「説得力のある」という別義が主で、法的義務の文脈には不適切。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_012',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Scientists warn that the current rate of deforestation is ( ) the natural carbon cycle, making climate targets increasingly difficult to meet.',
    choices: [
      { key: 'A', text: 'disturbing' },
      { key: 'B', text: 'disrupting' },
      { key: 'C', text: 'interrupting' },
      { key: 'D', text: 'interfering' },
    ],
    correctKey: 'B',
    explanation:
      '"disrupting" は「（システム・プロセスを）大規模に乱す、機能不全にする」意で、炭素循環という複雑なシステムへの影響に最適。disturbing は「不安にさせる」という心理的影響が主。interrupting は「短期的・一時的な中断」。interfering は "interfering with" の形を取り他動詞として目的語を直接取れない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_013',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The architect\'s design was both aesthetically pleasing and highly ( ), making excellent use of space without wasting any materials.',
    choices: [
      { key: 'A', text: 'effective' },
      { key: 'B', text: 'functional' },
      { key: 'C', text: 'efficient' },
      { key: 'D', text: 'practical' },
    ],
    correctKey: 'C',
    explanation:
      '"efficient" は「投入資源（素材・スペース）に対して最大の成果を上げる」意。"without wasting any materials" という表現と正確に対応する。functional は「機能する・実用的」、practical は「現実的・実際的」でいずれも近いが、資源の無駄なし、というニュアンスは efficient が最も強く表す。effective は「効果を上げる」で、資源節約ではなく結果に焦点がある。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_014',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The government\'s economic policy was heavily ( ) toward supporting large corporations, leaving small businesses with little assistance.',
    choices: [
      { key: 'A', text: 'inclined' },
      { key: 'B', text: 'biased' },
      { key: 'C', text: 'oriented' },
      { key: 'D', text: 'skewed' },
    ],
    correctKey: 'D',
    explanation:
      '"skewed toward" は「（分配・政策などが）特定の方向に歪んでいる」意で、不公平な偏りを示す最も強い表現。biased は近い意味だが "biased toward" より "biased against" の方が一般的。oriented は「〜向けの」で中立的な方向性のみ示す。inclined は「傾向がある」で個人の意見や感情に使うことが多い。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_015',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The athlete\'s recovery was ( ) by a strict rehabilitation program that combined physical therapy with nutritional support.',
    choices: [
      { key: 'A', text: 'facilitated' },
      { key: 'B', text: 'accelerated' },
      { key: 'C', text: 'promoted' },
      { key: 'D', text: 'enhanced' },
    ],
    correctKey: 'B',
    explanation:
      '"accelerated" は「（回復などの）速度を速める」で、リハビリプログラムの直接的な効果として最も明確。facilitated は「容易にする・促進する」、promoted は「推進する」、enhanced は「質を高める」でいずれも成立しうるが、回復という時間的プロセスの速度向上を表す語は accelerated。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_016',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The historian argued that the treaty, far from resolving tensions, actually ( ) them by leaving key territorial disputes unaddressed.',
    choices: [
      { key: 'A', text: 'aggravated' },
      { key: 'B', text: 'intensified' },
      { key: 'C', text: 'escalated' },
      { key: 'D', text: 'compounded' },
    ],
    correctKey: 'D',
    explanation:
      '"compounded" は「（既存の問題に）さらに問題を重ねて悪化させる」意で、「解決したはずが未解決問題を残した」という構造と最も合う。aggravated は「（状況を）悪化させた」、intensified は「強度を増した」、escalated は「（対立が）段階的に拡大した」でいずれも成立するが、問題の積み重なりを示す compound が文意に最も忠実。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_017',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'It is essential that companies ( ) their supply chains to ensure they are not sourcing materials from regions with poor environmental records.',
    choices: [
      { key: 'A', text: 'investigate' },
      { key: 'B', text: 'audit' },
      { key: 'C', text: 'examine' },
      { key: 'D', text: 'inspect' },
    ],
    correctKey: 'B',
    explanation:
      '"audit" は「（組織・プロセスを）公式・体系的に点検・評価する」意で、特にビジネス・コンプライアンス文脈でのサプライチェーン評価に使う専門的な表現。investigate は「問題があるときに調査する」、examine は「詳しく調べる」（医療や学術でも使う）、inspect は「物理的な検査」が主。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_018',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The CEO\'s resignation came as a complete surprise; until then, her leadership had appeared ( ) and her position secure.',
    choices: [
      { key: 'A', text: 'unshakeable' },
      { key: 'B', text: 'steadfast' },
      { key: 'C', text: 'resolute' },
      { key: 'D', text: 'unwavering' },
    ],
    correctKey: 'A',
    explanation:
      '"unshakeable" は「（地位・信念などが）揺るぎない」で、辞任直前まで地位が安泰に見えた、という文脈に最も合う形容詞。steadfast・resolute・unwavering はいずれも「意志の固い」という個人の態度を表すが、leadership（指導力・リーダーシップ）という抽象概念への修飾には unshakeable が最も自然。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_019',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The report ( ) the need for immediate investment in renewable energy, warning that delays would make the transition far more costly.',
    choices: [
      { key: 'A', text: 'stressed' },
      { key: 'B', text: 'underlined' },
      { key: 'C', text: 'reinforced' },
      { key: 'D', text: 'accentuated' },
    ],
    correctKey: 'B',
    explanation:
      '"underlined the need" は「必要性を強調した」という慣用表現。stressed も同義だが、"underlined" の方が書面・報告書の文脈で格式的。reinforced は「（既にある認識を）補強した」、accentuated は「際立たせた」でニュアンスが異なる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_020',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The country\'s economic growth has been ( ) by decades of political instability, keeping it among the least developed nations in the region.',
    choices: [
      { key: 'A', text: 'constrained' },
      { key: 'B', text: 'impeded' },
      { key: 'C', text: 'hampered' },
      { key: 'D', text: 'hindered' },
    ],
    correctKey: 'C',
    explanation:
      '"hampered by" は「（外的障害によって）妨げられる」の意で、長期的な政治的不安定という外的要因による成長阻害に最も適切なコロケーション。impeded・hindered もほぼ同義だが、"hampered by" は経済・努力・計画などとの相性が特に良い慣用表現。constrained は「制約される」で制度・規則的な制限に使いやすい。',
    difficulty: 'advanced',
  },

  // ── GRAMMAR 21–35 ────────────────────────────────────────────────
  {
    id: 'eiken_2kyu_021',
    level: '2kyu',
    category: 'grammar',
    question:
      'Not until the final results were announced ( ) the team realized they had won the championship.',
    choices: [
      { key: 'A', text: 'that' },
      { key: 'B', text: 'did' },
      { key: 'C', text: 'had' },
      { key: 'D', text: 'was' },
    ],
    correctKey: 'B',
    explanation:
      '"Not until ..." で始まる否定の副詞節が文頭に置かれると、主節に倒置が生じる（否定倒置）。"Not until ... did + 主語 + 動詞原形" が正しい構造。主語 the team に対して did を使い、"did the team realize" となる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_022',
    level: '2kyu',
    category: 'grammar',
    question:
      'Had the engineers identified the flaw earlier, the bridge ( ) collapsed.',
    choices: [
      { key: 'A', text: 'would not have' },
      { key: 'B', text: 'would not' },
      { key: 'C', text: 'had not' },
      { key: 'D', text: 'will not have' },
    ],
    correctKey: 'A',
    explanation:
      '"Had + 主語 + 過去分詞..." は if を省略した仮定法過去完了の条件節。過去の事実に反する仮定を表すため、帰結節は "would not have + 過去分詞" となる。"would not" は仮定法過去（現在の仮定）の帰結節形式で不適切。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_023',
    level: '2kyu',
    category: 'grammar',
    question:
      'The proposal requires that every participant ( ) a signed consent form before the study begins.',
    choices: [
      { key: 'A', text: 'submits' },
      { key: 'B', text: 'submit' },
      { key: 'C', text: 'submitted' },
      { key: 'D', text: 'will submit' },
    ],
    correctKey: 'B',
    explanation:
      '"require that + 主語 + 動詞" の構文では、動詞は仮定法現在（原形）を使う。"every participant submit" と三単現の -s をつけないのが正しい。これは "It is essential/necessary that ..." 構文と同様の用法で、アメリカ英語で特に一般的。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_024',
    level: '2kyu',
    category: 'grammar',
    question:
      'Only after conducting extensive surveys ( ) the researchers able to draw any firm conclusions.',
    choices: [
      { key: 'A', text: 'were' },
      { key: 'B', text: 'are' },
      { key: 'C', text: 'did' },
      { key: 'D', text: 'have' },
    ],
    correctKey: 'A',
    explanation:
      '"Only after ..." が文頭に来ると主節で倒置が起きる。主語が "the researchers"、述語が be動詞 "were able to" なので、倒置後は "were the researchers able to" となる。"did" は一般動詞の倒置に使うが、"be able to" には were を使う。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_025',
    level: '2kyu',
    category: 'grammar',
    question:
      'The museum\'s new exhibit, ( ) is scheduled to open next month, will feature artifacts from ancient civilizations.',
    choices: [
      { key: 'A', text: 'which' },
      { key: 'B', text: 'that' },
      { key: 'C', text: 'what' },
      { key: 'D', text: 'where' },
    ],
    correctKey: 'A',
    explanation:
      'コンマで囲まれた非制限的（非限定）関係節では which を使う。that は制限的関係節にのみ使われ、コンマとともに非制限的関係節で使うことはできない。what は「〜すること・もの」で名詞節を導く。where は場所を表す関係副詞で不適。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_026',
    level: '2kyu',
    category: 'grammar',
    question:
      'The children were made ( ) their rooms before they were allowed to go outside and play.',
    choices: [
      { key: 'A', text: 'clean' },
      { key: 'B', text: 'to clean' },
      { key: 'C', text: 'cleaning' },
      { key: 'D', text: 'cleaned' },
    ],
    correctKey: 'B',
    explanation:
      '使役動詞 make の受動態 "be made to do" では、不定詞の to が必要となる。能動態 "make + 目的語 + 動詞原形" では to を省略するが、受動態に変換すると to が復活する（"The children were made to clean ..."）。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_027',
    level: '2kyu',
    category: 'grammar',
    question:
      'It was the mayor herself ( ) announced the decision to close the factory, surprising many local residents.',
    choices: [
      { key: 'A', text: 'which' },
      { key: 'B', text: 'who' },
      { key: 'C', text: 'that' },
      { key: 'D', text: 'whom' },
    ],
    correctKey: 'C',
    explanation:
      '"It is/was ... that ..." は強調構文（cleft sentence）。強調する要素が人であっても who または that が使える。ただし herself という再帰代名詞が既に強調を担っているこの文では、強調構文の標識として that が最も自然。who も可だが、whom は目的格なので主語位置には使えない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_028',
    level: '2kyu',
    category: 'grammar',
    question:
      'Rarely ( ) such a dramatic shift in public opinion occur within such a short period of time.',
    choices: [
      { key: 'A', text: 'does' },
      { key: 'B', text: 'do' },
      { key: 'C', text: 'has' },
      { key: 'D', text: 'had' },
    ],
    correctKey: 'A',
    explanation:
      '"Rarely" が文頭に置かれると主節で倒置が生じる。主語 "such a dramatic shift"（単数）＋一般動詞 occur に対して助動詞 does を使い、"Rarely does such a shift occur" となる。do は複数主語用、has は現在完了の倒置、had は過去完了の倒置で不適。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_029',
    level: '2kyu',
    category: 'grammar',
    question:
      'The policy change, ( ) many experts had predicted, led to a sharp rise in youth unemployment rates.',
    choices: [
      { key: 'A', text: 'as' },
      { key: 'B', text: 'what' },
      { key: 'C', text: 'which' },
      { key: 'D', text: 'that' },
    ],
    correctKey: 'A',
    explanation:
      '"as many experts had predicted" の as は「専門家が予測したとおり」という様態の接続詞。この as は前の文全体または節を先行詞として受ける関係詞的用法でもある。"which many experts had predicted" も文法的だが、which は先行詞として特定の名詞句（the policy change）を指す非制限的関係節になる。ここでは「予測した（こと＝その結果）」という節全体を受けるので as が適切。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_030',
    level: '2kyu',
    category: 'grammar',
    question:
      'The survey results indicate that the majority of consumers prefer ( ) contacted by email rather than by telephone.',
    choices: [
      { key: 'A', text: 'to be' },
      { key: 'B', text: 'being' },
      { key: 'C', text: 'to have been' },
      { key: 'D', text: 'having been' },
    ],
    correctKey: 'B',
    explanation:
      '"prefer + 動名詞" と "prefer + to不定詞" はどちらも正しいが、"prefer + being done" は「〜されることを好む」という受動態の動名詞。"prefer to be contacted" も文法的だが、prefer に続く動名詞形の受動態 "prefer being contacted" の方が実際には口語・書き言葉ともに一般的。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_031',
    level: '2kyu',
    category: 'grammar',
    question:
      'No sooner ( ) the announcement been made than protesters gathered outside the government building.',
    choices: [
      { key: 'A', text: 'did' },
      { key: 'B', text: 'had' },
      { key: 'C', text: 'has' },
      { key: 'D', text: 'was' },
    ],
    correctKey: 'B',
    explanation:
      '"No sooner ... than ..." は「〜するやいなや」を表す慣用表現で、had を使った倒置構文になる。"No sooner had + 主語 + 過去分詞 + than + 主語 + 過去形動詞" が正しい構造。過去完了の had が倒置されて文頭直後に来る。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_032',
    level: '2kyu',
    category: 'grammar',
    question:
      'The students found the examination far more ( ) than they had anticipated based on the sample questions.',
    choices: [
      { key: 'A', text: 'challenging' },
      { key: 'B', text: 'challenged' },
      { key: 'C', text: 'challenge' },
      { key: 'D', text: 'to challenge' },
    ],
    correctKey: 'A',
    explanation:
      '"find + 目的語 + 形容詞" の構文で、目的語（the examination）を説明する補語には形容詞が来る。"challenging"（困難な・やりがいのある）は形容詞として機能する。"challenged" は受動の意味（困難に直面させられた）で使われる場合があるが、試験自体を形容するには challenging が正しい。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_033',
    level: '2kyu',
    category: 'grammar',
    question:
      'Were the company ( ) declare bankruptcy, thousands of employees would lose their jobs and retirement savings.',
    choices: [
      { key: 'A', text: 'to' },
      { key: 'B', text: 'would' },
      { key: 'C', text: 'should' },
      { key: 'D', text: 'might' },
    ],
    correctKey: 'A',
    explanation:
      '"Were + 主語 + to不定詞 ..." は if を省略した仮定法の倒置形で、「もし〜するとしたら」という意味。"Were the company to declare ..." = "If the company were to declare ..." となる。特に書き言葉・フォーマルな文脈で使われる仮定法の格式表現。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_034',
    level: '2kyu',
    category: 'grammar',
    question:
      'The research paper, along with its supplementary data, ( ) to be reviewed by a panel of international experts.',
    choices: [
      { key: 'A', text: 'are' },
      { key: 'B', text: 'were' },
      { key: 'C', text: 'is' },
      { key: 'D', text: 'have' },
    ],
    correctKey: 'C',
    explanation:
      '"along with ..." は主語に付加された情報であり、主語の数には影響しない。主語は "The research paper"（単数）なので動詞は is が正しい。"along with" は "as well as" "together with" と同様に、後続の句を主語に含めない点に注意。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_035',
    level: '2kyu',
    category: 'grammar',
    question:
      'The government does ( ) take the issue of food security seriously, but its current policies are simply not sufficient to address the scale of the problem.',
    choices: [
      { key: 'A', text: 'so' },
      { key: 'B', text: 'indeed' },
      { key: 'C', text: 'really' },
      { key: 'D', text: 'even' },
    ],
    correctKey: 'B',
    explanation:
      '"does indeed + 動詞原形" は emphatic do（強調の do）を使った表現で、「確かに〜する」という肯定の強調を表す。but で逆説が続く前に主張の誠意を示す際に使う。"does so take" は文法的に不自然。really・even は副詞として機能するが、"does really/even take" という語順は emphatic do の強調構文として成立しない。',
    difficulty: 'advanced',
  },

  // ── READING 36–50 ────────────────────────────────────────────────
  // Passage 1 (Q36–38): Microplastics in drinking water
  {
    id: 'eiken_2kyu_036',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Microplastics — particles smaller than five millimeters — have been detected in virtually every environment on Earth, from the deepest ocean trenches to the peaks of remote mountain ranges. More alarmingly, recent studies have confirmed their presence in municipal tap water, bottled water, and even human blood. Although researchers have not yet established a definitive causal link between microplastic ingestion and specific health conditions in humans, animal studies suggest that chronic exposure may disrupt hormonal function and trigger inflammatory responses. One major source of microplastic contamination in water supplies is the degradation of synthetic textiles during washing: a single load of laundry can release hundreds of thousands of synthetic fibers into wastewater systems. While many water treatment plants successfully filter out larger particles, a significant proportion of microplastics are too small to be captured by conventional filtration methods. Governments in several countries have begun to mandate that new washing machines be equipped with fine-mesh filters, but critics argue that the regulation falls short of addressing the problem at its source — the overproduction of single-use plastics.

According to the passage, which of the following statements about microplastics is TRUE?`,
    choices: [
      {
        key: 'A',
        text: 'Scientists have proven that microplastics directly cause hormonal diseases in humans.',
      },
      {
        key: 'B',
        text: 'Current water treatment methods are entirely unable to remove microplastics from tap water.',
      },
      {
        key: 'C',
        text: 'Synthetic textiles are one confirmed source of microplastic contamination in water supplies.',
      },
      {
        key: 'D',
        text: 'All countries now require washing machines to include fine-mesh filters by law.',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージに "One major source of microplastic contamination in water supplies is the degradation of synthetic textiles during washing" と明記されており、合成繊維が汚染源の一つであることは事実として述べられている。Aは "not yet established a definitive causal link" とあり誤り。Bは "many plants successfully filter out larger particles" とあり全く除去できないとは書かれていない。Dは "several countries" であり全国義務化ではない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_037',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Microplastics — particles smaller than five millimeters — have been detected in virtually every environment on Earth, from the deepest ocean trenches to the peaks of remote mountain ranges. More alarmingly, recent studies have confirmed their presence in municipal tap water, bottled water, and even human blood. Although researchers have not yet established a definitive causal link between microplastic ingestion and specific health conditions in humans, animal studies suggest that chronic exposure may disrupt hormonal function and trigger inflammatory responses. One major source of microplastic contamination in water supplies is the degradation of synthetic textiles during washing: a single load of laundry can release hundreds of thousands of synthetic fibers into wastewater systems. While many water treatment plants successfully filter out larger particles, a significant proportion of microplastics are too small to be captured by conventional filtration methods. Governments in several countries have begun to mandate that new washing machines be equipped with fine-mesh filters, but critics argue that the regulation falls short of addressing the problem at its source — the overproduction of single-use plastics.

In the passage, the phrase "falls short of" most closely means:`,
    choices: [
      { key: 'A', text: 'fails to fully achieve' },
      { key: 'B', text: 'completely ignores' },
      { key: 'C', text: 'successfully prevents' },
      { key: 'D', text: 'exceeds the scope of' },
    ],
    correctKey: 'A',
    explanation:
      '"falls short of" は「〜に達しない、〜を十分に果たしていない」という意味の慣用表現。批評家たちは規制が根本的な解決（過剰なプラスチック生産の抑制）に「及んでいない」と主張しているので、A「完全には達成できていない」が正しい。「完全に無視している」（B）は言い過ぎ。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_038',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Microplastics — particles smaller than five millimeters — have been detected in virtually every environment on Earth, from the deepest ocean trenches to the peaks of remote mountain ranges. More alarmingly, recent studies have confirmed their presence in municipal tap water, bottled water, and even human blood. Although researchers have not yet established a definitive causal link between microplastic ingestion and specific health conditions in humans, animal studies suggest that chronic exposure may disrupt hormonal function and trigger inflammatory responses. One major source of microplastic contamination in water supplies is the degradation of synthetic textiles during washing: a single load of laundry can release hundreds of thousands of synthetic fibers into wastewater systems. While many water treatment plants successfully filter out larger particles, a significant proportion of microplastics are too small to be captured by conventional filtration methods. Governments in several countries have begun to mandate that new washing machines be equipped with fine-mesh filters, but critics argue that the regulation falls short of addressing the problem at its source — the overproduction of single-use plastics.

What is the main point the author makes about government responses to microplastic pollution?`,
    choices: [
      {
        key: 'A',
        text: 'Governments have acted decisively by completely banning single-use plastics.',
      },
      {
        key: 'B',
        text: 'Existing regulations address the symptoms rather than the underlying cause of the problem.',
      },
      {
        key: 'C',
        text: 'Water treatment technology will soon be advanced enough to eliminate microplastics entirely.',
      },
      {
        key: 'D',
        text: 'The regulation of washing machines is the most effective strategy for reducing microplastic pollution.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージの最後で批評家が「規制は洗濯機フィルターにとどまり、根本原因（使い捨てプラスチックの過剰生産）に取り組んでいない」と指摘しており、著者はこの批判的見解を肯定的に紹介している。Bが「症状への対処であり根本原因への対処でない」という内容と一致する。',
    difficulty: 'advanced',
  },

  // Passage 2 (Q39–41): Remote work and urban economics
  {
    id: 'eiken_2kyu_039',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The widespread adoption of remote work following the global pandemic has had profound and lasting effects on urban economies. As office vacancies climbed in major city centers, commercial real estate values fell sharply, reducing the property tax revenues that many municipalities depend upon to fund public services. At the same time, residential property prices in suburban and rural areas surged as urban residents, no longer tied to daily commutes, sought larger homes and lower costs of living. This demographic shift has placed new pressure on regions that previously lacked the infrastructure — broadband connectivity, healthcare facilities, and schools — to accommodate rapid population growth. Proponents of remote work argue that it democratizes opportunity by enabling workers in less affluent areas to access high-paying jobs without relocating. Critics, however, contend that the benefits are unevenly distributed: those who can work remotely tend to be in higher-income, knowledge-based industries, while lower-wage service workers remain tied to physical locations and receive little benefit from the trend.

What economic consequence of remote work does the passage describe for major city centers?`,
    choices: [
      {
        key: 'A',
        text: 'Rising residential property prices have increased local tax revenues.',
      },
      {
        key: 'B',
        text: 'Higher office vacancy rates have led to reduced property tax income for cities.',
      },
      {
        key: 'C',
        text: 'Suburban infrastructure has improved significantly due to city investment.',
      },
      {
        key: 'D',
        text: 'Lower-wage service workers have relocated to rural areas for better pay.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "office vacancies climbed in major city centers, commercial real estate values fell sharply, reducing the property tax revenues" と明記されており、都市部の空室率上昇→商業不動産価値下落→固定資産税収入の減少という因果関係が示されている。Bがこの内容と一致する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_040',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The widespread adoption of remote work following the global pandemic has had profound and lasting effects on urban economies. As office vacancies climbed in major city centers, commercial real estate values fell sharply, reducing the property tax revenues that many municipalities depend upon to fund public services. At the same time, residential property prices in suburban and rural areas surged as urban residents, no longer tied to daily commutes, sought larger homes and lower costs of living. This demographic shift has placed new pressure on regions that previously lacked the infrastructure — broadband connectivity, healthcare facilities, and schools — to accommodate rapid population growth. Proponents of remote work argue that it democratizes opportunity by enabling workers in less affluent areas to access high-paying jobs without relocating. Critics, however, contend that the benefits are unevenly distributed: those who can work remotely tend to be in higher-income, knowledge-based industries, while lower-wage service workers remain tied to physical locations and receive little benefit from the trend.

In the passage, the word "democratizes" most nearly means:`,
    choices: [
      { key: 'A', text: 'makes something available to a wider range of people' },
      { key: 'B', text: 'allows citizens to vote on important decisions' },
      { key: 'C', text: 'reduces the overall number of people seeking employment' },
      { key: 'D', text: 'transfers power from governments to private companies' },
    ],
    correctKey: 'A',
    explanation:
      'パッセージでは "democratizes opportunity by enabling workers in less affluent areas to access high-paying jobs" とあり、「機会を民主化する」は「高収入の仕事へのアクセスをより多くの地域の人々に開放する」という意味で使われている。選択肢Aの「より広い範囲の人々が利用できるようにする」がこの意味に最も近い。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_041',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The widespread adoption of remote work following the global pandemic has had profound and lasting effects on urban economies. As office vacancies climbed in major city centers, commercial real estate values fell sharply, reducing the property tax revenues that many municipalities depend upon to fund public services. At the same time, residential property prices in suburban and rural areas surged as urban residents, no longer tied to daily commutes, sought larger homes and lower costs of living. This demographic shift has placed new pressure on regions that previously lacked the infrastructure — broadband connectivity, healthcare facilities, and schools — to accommodate rapid population growth. Proponents of remote work argue that it democratizes opportunity by enabling workers in less affluent areas to access high-paying jobs without relocating. Critics, however, contend that the benefits are unevenly distributed: those who can work remotely tend to be in higher-income, knowledge-based industries, while lower-wage service workers remain tied to physical locations and receive little benefit from the trend.

Which of the following best describes the author's overall approach to the topic of remote work?`,
    choices: [
      {
        key: 'A',
        text: 'The author strongly advocates for remote work as the best solution to urban economic problems.',
      },
      {
        key: 'B',
        text: 'The author presents both potential benefits and limitations of remote work without taking a clear position.',
      },
      {
        key: 'C',
        text: 'The author argues that remote work has been entirely negative for the economy.',
      },
      {
        key: 'D',
        text: 'The author focuses primarily on the positive effects of remote work on rural communities.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージは "Proponents argue ..." と "Critics, however, contend ..." という両論を公平に提示しており、著者自身は特定の立場を明確にしていない。これは balanced/neutral な論説文の典型的なアプローチで、Bの「明確な立場を取らずに利点と限界の両方を提示している」が最も適切。',
    difficulty: 'advanced',
  },

  // Passage 3 (Q42–44): Antibiotic resistance
  {
    id: 'eiken_2kyu_042',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Antibiotic resistance has emerged as one of the most pressing public health threats of the twenty-first century. When bacteria are repeatedly exposed to antibiotics, those that carry genetic mutations allowing them to survive the drug gradually outcompete non-resistant strains, a process driven by natural selection. The overuse of antibiotics in both human medicine and livestock farming has dramatically accelerated this process. In some regions, farmers administer antibiotics not only to treat disease but also as a growth promoter, a practice now banned in the European Union but still widespread elsewhere. Scientists warn that if resistance continues to spread at the current rate, routine medical procedures such as surgery and chemotherapy — which rely on effective antibiotics to prevent infection — could become life-threatening. Despite international agreements calling for reduced antibiotic use, implementation remains inconsistent, and the development of new antibiotic drugs has slowed considerably, partly because pharmaceutical companies find the research economically unattractive compared to treatments for chronic diseases.

According to the passage, what drives the spread of antibiotic resistance?`,
    choices: [
      {
        key: 'A',
        text: 'Genetic mutations in humans that are triggered by long-term antibiotic use',
      },
      {
        key: 'B',
        text: 'Natural selection favoring bacteria that can survive antibiotic treatment',
      },
      {
        key: 'C',
        text: 'The complete ban on antibiotic use in livestock farming worldwide',
      },
      {
        key: 'D',
        text: 'A deliberate reduction in antibiotic production by pharmaceutical companies',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "those that carry genetic mutations allowing them to survive the drug gradually outcompete non-resistant strains, a process driven by natural selection" と明記されており、自然選択によって耐性菌が広がることが説明されている。Aは「人間の遺伝子変異」で誤り（菌の変異）。Cは「一部の地域でのみ禁止」であり全世界的禁止は誤り。Dは「経済的に魅力がない」ためであって意図的削減ではない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_043',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Antibiotic resistance has emerged as one of the most pressing public health threats of the twenty-first century. When bacteria are repeatedly exposed to antibiotics, those that carry genetic mutations allowing them to survive the drug gradually outcompete non-resistant strains, a process driven by natural selection. The overuse of antibiotics in both human medicine and livestock farming has dramatically accelerated this process. In some regions, farmers administer antibiotics not only to treat disease but also as a growth promoter, a practice now banned in the European Union but still widespread elsewhere. Scientists warn that if resistance continues to spread at the current rate, routine medical procedures such as surgery and chemotherapy — which rely on effective antibiotics to prevent infection — could become life-threatening. Despite international agreements calling for reduced antibiotic use, implementation remains inconsistent, and the development of new antibiotic drugs has slowed considerably, partly because pharmaceutical companies find the research economically unattractive compared to treatments for chronic diseases.

In the passage, what does "implementation remains inconsistent" suggest about international agreements on antibiotic use?`,
    choices: [
      {
        key: 'A',
        text: 'Countries have not agreed on a common definition of antibiotic resistance.',
      },
      {
        key: 'B',
        text: 'Countries have signed agreements but do not uniformly follow through on them.',
      },
      {
        key: 'C',
        text: 'International agreements are regularly updated to match new scientific findings.',
      },
      {
        key: 'D',
        text: 'Most nations have exceeded the targets set by international organizations.',
      },
    ],
    correctKey: 'B',
    explanation:
      '"implementation remains inconsistent" は「実施状況にばらつきがある（=一部の国は守っているが他は守っていない）」という意味。"Despite international agreements calling for reduced antibiotic use" との組み合わせから、合意はあるが国によって実施状況が異なることが読み取れる。Bが最も適切。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_044',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Antibiotic resistance has emerged as one of the most pressing public health threats of the twenty-first century. When bacteria are repeatedly exposed to antibiotics, those that carry genetic mutations allowing them to survive the drug gradually outcompete non-resistant strains, a process driven by natural selection. The overuse of antibiotics in both human medicine and livestock farming has dramatically accelerated this process. In some regions, farmers administer antibiotics not only to treat disease but also as a growth promoter, a practice now banned in the European Union but still widespread elsewhere. Scientists warn that if resistance continues to spread at the current rate, routine medical procedures such as surgery and chemotherapy — which rely on effective antibiotics to prevent infection — could become life-threatening. Despite international agreements calling for reduced antibiotic use, implementation remains inconsistent, and the development of new antibiotic drugs has slowed considerably, partly because pharmaceutical companies find the research economically unattractive compared to treatments for chronic diseases.

Which of the following conclusions can be most reasonably drawn from the passage?`,
    choices: [
      {
        key: 'A',
        text: 'Pharmaceutical companies are primarily responsible for the global rise in antibiotic resistance.',
      },
      {
        key: 'B',
        text: 'Antibiotic resistance is likely to worsen unless both policy and industry approaches change.',
      },
      {
        key: 'C',
        text: 'Livestock farming contributes more to antibiotic resistance than human medicine does.',
      },
      {
        key: 'D',
        text: 'The European Union\'s ban on antibiotic use in farming has resolved the resistance problem in that region.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージ全体を通じて、抗生物質の過剰使用・国際合意の不徹底・新薬開発の停滞という複数の問題が示されており、解決には政策面と産業面の両方での変化が必要だと示唆している。Aは「主な責任が製薬会社にある」という誇張。Cは比較論だがパッセージは明示していない。DはEUの禁止が解決策として機能したとは書かれていない。',
    difficulty: 'advanced',
  },

  // Passage 4 (Q45–47): Sleep science
  {
    id: 'eiken_2kyu_045',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Sleep, once dismissed by many as mere biological downtime, is now understood to be a period of intense neurological activity essential for physical and cognitive health. During deep sleep, the brain's glymphatic system — a network of channels surrounding blood vessels — becomes highly active, flushing out metabolic waste products including beta-amyloid, a protein associated with Alzheimer's disease. Simultaneously, the hippocampus, the brain region central to memory formation, replays and consolidates experiences from the day, transferring information to long-term storage in the cortex. Chronic sleep deprivation, defined as consistently obtaining fewer than six hours per night, has been linked to a significantly elevated risk of cardiovascular disease, type 2 diabetes, and impaired immune function. Despite this evidence, surveys consistently show that a large proportion of adults in industrialized nations fail to achieve the recommended seven to nine hours. Researchers point to artificial light exposure from screens as a major disruptor of the body's circadian rhythm, suppressing melatonin production and delaying the onset of sleep.

What function of the glymphatic system is described in the passage?`,
    choices: [
      {
        key: 'A',
        text: 'It regulates melatonin production to control the sleep-wake cycle.',
      },
      {
        key: 'B',
        text: 'It consolidates daily memories and transfers them to long-term storage.',
      },
      {
        key: 'C',
        text: 'It removes harmful waste products from the brain during deep sleep.',
      },
      {
        key: 'D',
        text: 'It reduces the risk of cardiovascular disease by regulating blood pressure.',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージに "the brain\'s glymphatic system becomes highly active, flushing out metabolic waste products including beta-amyloid" と明記されており、深い睡眠中に老廃物を排出する機能が説明されている。Bはhippocampusの機能、Aはメラトニンに関する記述で別のシステム。Dはパッセージに記載されていない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_046',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Sleep, once dismissed by many as mere biological downtime, is now understood to be a period of intense neurological activity essential for physical and cognitive health. During deep sleep, the brain's glymphatic system — a network of channels surrounding blood vessels — becomes highly active, flushing out metabolic waste products including beta-amyloid, a protein associated with Alzheimer's disease. Simultaneously, the hippocampus, the brain region central to memory formation, replays and consolidates experiences from the day, transferring information to long-term storage in the cortex. Chronic sleep deprivation, defined as consistently obtaining fewer than six hours per night, has been linked to a significantly elevated risk of cardiovascular disease, type 2 diabetes, and impaired immune function. Despite this evidence, surveys consistently show that a large proportion of adults in industrialized nations fail to achieve the recommended seven to nine hours. Researchers point to artificial light exposure from screens as a major disruptor of the body's circadian rhythm, suppressing melatonin production and delaying the onset of sleep.

In the passage, "circadian rhythm" refers to:`,
    choices: [
      { key: 'A', text: 'the brain\'s process of consolidating memories overnight' },
      { key: 'B', text: 'the body\'s natural internal clock regulating sleep and wakefulness' },
      { key: 'C', text: 'the pattern of melatonin release caused by screen exposure' },
      { key: 'D', text: 'the cycle of deep sleep and light sleep within a single night' },
    ],
    correctKey: 'B',
    explanation:
      '"circadian rhythm" は「概日リズム（約24時間周期の体内時計）」で、睡眠と覚醒のサイクルを調節する生体メカニズム。パッセージでは人工光がこのリズムを乱すと述べており、Bの「睡眠と覚醒を調節する体内時計」が最も正確。Dは睡眠サイクル内の段階を指し、circadian rhythmとは異なる概念。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_047',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Sleep, once dismissed by many as mere biological downtime, is now understood to be a period of intense neurological activity essential for physical and cognitive health. During deep sleep, the brain's glymphatic system — a network of channels surrounding blood vessels — becomes highly active, flushing out metabolic waste products including beta-amyloid, a protein associated with Alzheimer's disease. Simultaneously, the hippocampus, the brain region central to memory formation, replays and consolidates experiences from the day, transferring information to long-term storage in the cortex. Chronic sleep deprivation, defined as consistently obtaining fewer than six hours per night, has been linked to a significantly elevated risk of cardiovascular disease, type 2 diabetes, and impaired immune function. Despite this evidence, surveys consistently show that a large proportion of adults in industrialized nations fail to achieve the recommended seven to nine hours. Researchers point to artificial light exposure from screens as a major disruptor of the body's circadian rhythm, suppressing melatonin production and delaying the onset of sleep.

What can be inferred from the passage about sleep habits in industrialized countries?`,
    choices: [
      {
        key: 'A',
        text: 'Most adults are aware of sleep guidelines and choose to ignore them.',
      },
      {
        key: 'B',
        text: 'Screen use is the only factor preventing adults from getting adequate sleep.',
      },
      {
        key: 'C',
        text: 'Many adults sleep less than the amount recommended for good health.',
      },
      {
        key: 'D',
        text: 'Sleep deprivation is more severe in industrialized nations than in developing countries.',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージに "a large proportion of adults in industrialized nations fail to achieve the recommended seven to nine hours" と明記されており、推奨睡眠時間を下回る成人が多いことが述べられている。Cがこれに対応する。Aは「意識的に無視している」とは書かれていない。Bはスクリーン以外の要因が排除されておらず誇張。Dは途上国との比較はパッセージにない。',
    difficulty: 'standard',
  },

  // Passage 5 (Q48–50): Gig economy and labor rights
  {
    id: 'eiken_2kyu_048',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The rise of the gig economy — in which workers are hired on a short-term, task-by-task basis through digital platforms — has fundamentally altered traditional employment relationships. Companies such as food delivery services and ride-hailing platforms typically classify their workers as independent contractors rather than employees, a distinction that has significant legal and financial consequences. Independent contractors are generally not entitled to minimum wage protections, paid leave, or employer contributions to pension schemes. Proponents of the gig model argue that it offers workers flexibility and autonomy that traditional employment cannot match, allowing individuals to set their own hours and work for multiple platforms simultaneously. Opponents counter that this flexibility is largely illusory: platform algorithms closely monitor worker performance and can deactivate accounts — effectively terminating employment — without any of the procedural safeguards that apply in conventional workplaces. Several jurisdictions have moved to reclassify gig workers as employees, but these efforts have faced intense legal challenges from platform companies, which argue that mandatory reclassification would undermine the business model that makes affordable services possible.

According to the passage, why do gig economy companies prefer to classify workers as independent contractors?`,
    choices: [
      {
        key: 'A',
        text: 'Independent contractors are required to pay higher taxes, which benefits the companies.',
      },
      {
        key: 'B',
        text: 'The classification relieves companies of obligations such as minimum wage and pension contributions.',
      },
      {
        key: 'C',
        text: 'It allows workers to receive better pay than they would as full employees.',
      },
      {
        key: 'D',
        text: 'Governments require digital platforms to use this classification for legal reasons.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "Independent contractors are generally not entitled to minimum wage protections, paid leave, or employer contributions to pension schemes" とあり、この分類によって企業が最低賃金保護・有給休暇・年金拠出などの義務を免れることが示されている。Bがこれに対応する。他の選択肢はパッセージに根拠がない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_049',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The rise of the gig economy — in which workers are hired on a short-term, task-by-task basis through digital platforms — has fundamentally altered traditional employment relationships. Companies such as food delivery services and ride-hailing platforms typically classify their workers as independent contractors rather than employees, a distinction that has significant legal and financial consequences. Independent contractors are generally not entitled to minimum wage protections, paid leave, or employer contributions to pension schemes. Proponents of the gig model argue that it offers workers flexibility and autonomy that traditional employment cannot match, allowing individuals to set their own hours and work for multiple platforms simultaneously. Opponents counter that this flexibility is largely illusory: platform algorithms closely monitor worker performance and can deactivate accounts — effectively terminating employment — without any of the procedural safeguards that apply in conventional workplaces. Several jurisdictions have moved to reclassify gig workers as employees, but these efforts have faced intense legal challenges from platform companies, which argue that mandatory reclassification would undermine the business model that makes affordable services possible.

In the passage, the word "illusory" most nearly means:`,
    choices: [
      { key: 'A', text: 'desirable but difficult to achieve' },
      { key: 'B', text: 'not as real or genuine as it appears' },
      { key: 'C', text: 'causing confusion or misunderstanding' },
      { key: 'D', text: 'legally prohibited under current regulations' },
    ],
    correctKey: 'B',
    explanation:
      '"illusory" は「幻想的な・見かけ上のものに過ぎない」という意味。パッセージでは「柔軟性は表面上のものに過ぎず、アルゴリズムによる監視とアカウント停止という現実がある」という文脈で使われており、Bの「見かけほど実質的・真実ではない」が最も正確。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_050',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The rise of the gig economy — in which workers are hired on a short-term, task-by-task basis through digital platforms — has fundamentally altered traditional employment relationships. Companies such as food delivery services and ride-hailing platforms typically classify their workers as independent contractors rather than employees, a distinction that has significant legal and financial consequences. Independent contractors are generally not entitled to minimum wage protections, paid leave, or employer contributions to pension schemes. Proponents of the gig model argue that it offers workers flexibility and autonomy that traditional employment cannot match, allowing individuals to set their own hours and work for multiple platforms simultaneously. Opponents counter that this flexibility is largely illusory: platform algorithms closely monitor worker performance and can deactivate accounts — effectively terminating employment — without any of the procedural safeguards that apply in conventional workplaces. Several jurisdictions have moved to reclassify gig workers as employees, but these efforts have faced intense legal challenges from platform companies, which argue that mandatory reclassification would undermine the business model that makes affordable services possible.

What argument do platform companies make against mandatory reclassification of gig workers as employees?`,
    choices: [
      {
        key: 'A',
        text: 'They claim that most gig workers prefer to remain independent contractors.',
      },
      {
        key: 'B',
        text: 'They argue that reclassification would make their services too expensive to be viable.',
      },
      {
        key: 'C',
        text: 'They insist that current labor laws already provide sufficient protection for gig workers.',
      },
      {
        key: 'D',
        text: 'They suggest that reclassification would eliminate the need for digital platforms entirely.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "mandatory reclassification would undermine the business model that makes affordable services possible" とあり、再分類によってサービスの低価格維持が困難になるというのが企業側の主張。Bの「サービスが高コストになりすぎて成立しなくなる」がこれに最も対応する。Aはパッセージで言及されていない。',
    difficulty: 'advanced',
  },
];
