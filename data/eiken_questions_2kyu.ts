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
      { key: 'A', text: 'suspend' },
      { key: 'B', text: 'delay' },
      { key: 'C', text: 'postpone' },
      { key: 'D', text: 'defer' },
    ],
    correctKey: 'D',
    explanation:
      '"defer a decision" は「より信頼できる情報や権威が整うまで先送りにする」というニュアンスで、データを待つ文脈に最も適切。delay・postpone も「遅らせる」意味だが defer ほど「判断を委ねる」含意がない。suspend は「活動・特権などを一時停止する」場合に使い、通常 decision には使わない。\n\n【図解】「延期する」系の語の使い分け\n　語｜中心的な意味｜典型的な目的語\n　defer｜判断を保留し先送りする｜decision, judgment, payment\n　postpone｜日時を後ろにずらす｜meeting, game, trip\n　suspend｜一時的に停止する｜service, license, operations\n　⇒ データ待ちで判断を保留するなら defer\n　⚠ suspend は進行中の活動を止める語。まだ下していない決定には使えない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_002',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'His remarks were so ( ) that different members of the audience interpreted them in completely opposite ways.',
    choices: [
      { key: 'A', text: 'vague' },
      { key: 'B', text: 'ambivalent' },
      { key: 'C', text: 'obscure' },
      { key: 'D', text: 'ambiguous' },
    ],
    correctKey: 'D',
    explanation:
      'ambiguous は「（発言・意味が）複数の解釈を許す、曖昧な」で、異なる人が反対の解釈をしたという文脈に最適。ambivalent は「心情が両面にある、矛盾した気持ちを持つ」で主に感情に使う。obscure は「（知識・作品が）無名・難解な」、vague は「漠然とした」で曖昧さは表すが「複数の解釈」のニュアンスは薄い。\n\n【図解】「あいまい」を表す形容詞\n　語｜意味の中心｜かかる対象\n　ambiguous｜複数の解釈が可能｜言葉, 表現, 規定\n　vague｜輪郭がぼやけて漠然｜記憶, 説明, 約束\n　ambivalent｜相反する感情を併せ持つ｜feelings, attitude\n　⇒ 正反対の解釈が生まれたなら ambiguous\n　⚠ ambivalent は人の気持ちに使う語。発言そのものの多義性には使えない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_003',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The new medication proved ( ) in clinical trials, reducing symptoms in over 90 percent of participants.',
    choices: [
      { key: 'A', text: 'capable' },
      { key: 'B', text: 'potent' },
      { key: 'C', text: 'efficient' },
      { key: 'D', text: 'effective' },
    ],
    correctKey: 'D',
    explanation:
      '"effective" は「（薬・方法が）意図した効果を上げる」意。症状軽減という結果を強調する文脈に最適。potent は「（薬・物質が）強力な作用を持つ」で効能の強さに焦点があり、症状軽減率には直接つながりにくい。efficient は「効率的な」でプロセスに着目。capable は人や機械の「能力がある」に使う。\n\n【図解】「効く・有能な」の使い分け\n　語｜焦点｜典型的な主語\n　effective｜狙った結果が出る｜medication, method, policy\n　efficient｜投入に対する成果の比率｜system, engine, process\n　potent｜作用そのものの強さ｜drug, poison, argument\n　⇒ 症状の軽減という結果を述べるなら effective\n　⚠ efficient は「むだが少ない」で効き目の有無ではない。結果と効率を混同しない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_004',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Rising sea levels ( ) a serious threat to coastal communities around the world, potentially displacing millions of people.',
    choices: [
      { key: 'A', text: 'raise' },
      { key: 'B', text: 'present' },
      { key: 'C', text: 'pose' },
      { key: 'D', text: 'provide' },
    ],
    correctKey: 'C',
    explanation:
      '"pose a threat" は英語の固定コロケーションで「脅威をもたらす」の意。present a threat も文法的には成立するが、pose の方がより慣用的で自然。raise a threat という表現は一般的でなく、provide a threat は意味的に不自然。\n\npose a threat は「脅威をもたらす」という固定コロケーションで、pose は「（問題や脅威を）投げかける」という意味の他動詞。pose a problem、pose a question、pose a risk も同じ形で使われる頻出パターンである。\n\n【図解】threat と結びつく動詞\n　動詞｜コロケーション｜意味\n　pose｜pose a threat to｜脅威をもたらす\n　present｜present a threat｜脅威となる（やや硬い）\n　face｜face a threat｜脅威に直面する\n　⇒ 主語が脅威を与える側なら pose\n　⚠ raise a threat という言い方はしない。raise は question や concern と結ぶ。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_005',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The professor's lecture was highly ( ); she drew connections between ancient philosophy and contemporary neuroscience that no one had considered before.",
    choices: [
      { key: 'A', text: 'innovative' },
      { key: 'B', text: 'provocative' },
      { key: 'C', text: 'stimulating' },
      { key: 'D', text: 'enlightening' },
    ],
    correctKey: 'D',
    explanation:
      '"enlightening" は「新たな知識や視点をもたらす」意で、誰も考えなかった視点を示した講義の説明として最適。stimulating は「知的好奇心を刺激する」、innovative は「革新的な」でどちらも惜しいが、enlightening は「無知から理解へ導く」ニュアンスがある。provocative は「物議を醸す、挑発的な」で否定的含意もある。\n\n【図解】「刺激的・啓発的」の使い分け\n　語｜意味の中心｜含み\n　enlightening｜新たな理解をもたらす｜無知から理解へ\n　stimulating｜知的好奇心を刺激する｜面白さ, 活性化\n　provocative｜挑発的で物議を醸す｜否定的にもなりうる\n　⇒ 誰も気づかなかった視点を示したなら enlightening\n　⚠ provocative を「刺激的でよい」と取らない。批判や反発を招く含みがある。',
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
      { key: 'C', text: 'heavily' },
      { key: 'D', text: 'solely' },
    ],
    correctKey: 'D',
    explanation:
      '"relies solely on" は「ただ一つの源だけに頼る」という排他的な依存を表し、"no government funding whatsoever" という後半と論理的に一致する。entirely や wholly も類似するが、"relies entirely on" は稀な表現。largely・heavily は部分的依存を示し "no government funding" と矛盾する。\n\n【図解】依存の程度を表す副詞\n　副詞｜程度｜含み\n　solely｜それだけに｜他の財源はゼロ\n　heavily｜大きく｜他にも財源がある\n　largely｜おおむね｜例外を含む\n　⇒ 政府の資金が一切ないなら solely\n　⚠ largely や heavily は部分的な依存。no funding whatsoever という後半と論理が食い違う。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_007',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The mayor's proposal to build a new stadium was met with ( ) from local residents, who argued that schools and hospitals were more urgently needed.",
    choices: [
      { key: 'A', text: 'criticism' },
      { key: 'B', text: 'opposition' },
      { key: 'C', text: 'resistance' },
      { key: 'D', text: 'objection' },
    ],
    correctKey: 'D',
    explanation:
      '"met with objection" は「異議・反対意見を受ける」という慣用表現。"raise an objection" とも言う。opposition は「反対勢力・組織的抵抗」、resistance は「物理的・継続的な抵抗」、criticism は「批判」でいずれも正しくはあるが、"met with" というコロケーションでは objection が最も自然。\n\n【図解】反対を表す名詞の使い分け\n　語｜意味｜結びつく動詞\n　objection｜個別の異議｜raise, meet with\n　opposition｜組織的な反対勢力｜face, encounter\n　resistance｜持続的な抵抗｜meet, overcome\n　⇒ be met with と結ぶなら objection\n　⚠ criticism は「批判」で反対意思の表明そのものではない。動詞との相性で選び分ける。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_008',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'After years of ( ) research, the team finally published their findings on the genetic causes of the rare disorder.',
    choices: [
      { key: 'A', text: 'rigorous' },
      { key: 'B', text: 'thorough' },
      { key: 'C', text: 'meticulous' },
      { key: 'D', text: 'relentless' },
    ],
    correctKey: 'D',
    explanation:
      '"relentless research" は「何年もやめることなく続けた研究」という粘り強さを表し、"years of" という時間的長さと最もよく対応する。meticulous は「細部に注意を払った」、rigorous は「厳密な手順に従った」、thorough は「徹底的な」でいずれも研究の質には合うが、長年継続したという粘り強さを最も強く表すのは relentless。\n\n【図解】研究の質を表す形容詞\n　語｜評価軸｜含み\n　relentless｜やめずに続ける粘り強さ｜長期間の継続\n　meticulous｜細部への注意深さ｜精密さ\n　rigorous｜手順の厳密さ｜方法論の妥当性\n　⇒ years of と結んで長年の継続を言うなら relentless\n　⚠ thorough は「徹底的」で網羅性の話。時間的な粘り強さの含意は薄い。',
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
      '"exposed" は「（隠れていた問題を）明らかにする・暴く」で、視聴者の行動変容を促したという結果と自然につながる。depicted・portrayed は「描写した」、illustrated は「例示・図示した」でいずれも中立的な描写。exposed には「社会的問題を告発する」強い含意がある。\n\n【図解】「描く・暴く」の使い分け\n　語｜姿勢｜含み\n　expose｜隠れた問題を暴く｜告発, 行動を促す\n　depict｜描写する｜中立的\n　illustrate｜例示して示す｜説明的\n　⇒ 視聴者の行動変容を促したなら expose\n　⚠ portray も「描く」だが告発の含みはない。中立的描写と告発を区別する。',
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
      '"phase out" は「段階的に廃止する」意で、"over the next five years" という時間的段階を示す表現と最も適合する。abolish・eliminate は即時・完全な廃止を示唆し、段階的ニュアンスが薄い。reduce は「削減する」で廃止ではなく量の減少にとどまる。\n\nphase out は「段階的に廃止する」で、phase が「段階」を意味することから、時間をかけて徐々になくす過程を表す。over the next five years という期間表現と論理的に結びつくのはこの語だけである。\n\n【図解】廃止の速度による使い分け\n　表現｜廃止のしかた｜時間\n　phase out｜段階的に廃止する｜期間をかける\n　abolish｜制度を撤廃する｜一括, 即時\n　eliminate｜完全に除去する｜一括, 即時\n　⇒ 5年かけて撤廃するなら phase out\n　⚠ reduce は量を減らすだけで廃止ではない。撤廃と削減を混同しない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_011',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The new traffic regulations were ( ) on all drivers regardless of the type of vehicle they operated.',
    choices: [
      { key: 'A', text: 'compelling' },
      { key: 'B', text: 'obligatory' },
      { key: 'C', text: 'mandatory' },
      { key: 'D', text: 'binding' },
    ],
    correctKey: 'D',
    explanation:
      '"binding on" は「（規則・契約が）〜に対して法的拘束力を持つ」という法律用語的な表現で、"on all drivers" との相性が最も良い。mandatory・obligatory はいずれも「義務的な」を意味するが、"mandatory/obligatory on" という構文は一般的でない。compelling は「説得力のある」という別義が主で、法的義務の文脈には不適切。\n\n【図解】義務を表す形容詞と構文\n　語｜意味｜典型的な形\n　binding｜法的拘束力がある｜be binding on 人\n　mandatory｜義務的な｜mandatory for 人, 名詞を修飾\n　obligatory｜義務的な｜名詞を修飾\n　⇒ on all drivers と続くなら binding\n　⚠ mandatory on という形は一般的でない。前置詞との相性まで含めて判断する。',
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
      { key: 'B', text: 'interrupting' },
      { key: 'C', text: 'disrupting' },
      { key: 'D', text: 'interfering' },
    ],
    correctKey: 'C',
    explanation:
      '"disrupting" は「（システム・プロセスを）大規模に乱す、機能不全にする」意で、炭素循環という複雑なシステムへの影響に最適。disturbing は「不安にさせる」という心理的影響が主。interrupting は「短期的・一時的な中断」。interfering は "interfering with" の形を取り他動詞として目的語を直接取れない。\n\n【図解】「乱す」の使い分け\n　語｜対象｜程度と構文\n　disrupt｜システム, 流れ｜大規模, 他動詞\n　interrupt｜進行中の行為｜一時的, 他動詞\n　interfere｜他者の領域｜interfere with が必要\n　⇒ 炭素循環というシステムを乱すなら disrupt\n　⚠ interfere は自動詞で with が必要。空所直後に目的語が来る本問では使えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_013',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The architect's design was both aesthetically pleasing and highly ( ), making excellent use of space without wasting any materials.",
    choices: [
      { key: 'A', text: 'effective' },
      { key: 'B', text: 'functional' },
      { key: 'C', text: 'efficient' },
      { key: 'D', text: 'practical' },
    ],
    correctKey: 'C',
    explanation:
      '"efficient" は「投入資源（素材・スペース）に対して最大の成果を上げる」意。"without wasting any materials" という表現と正確に対応する。functional は「機能する・実用的」、practical は「現実的・実際的」でいずれも近いが、資源の無駄なし、というニュアンスは efficient が最も強く表す。effective は「効果を上げる」で、資源節約ではなく結果に焦点がある。\n\n【図解】効率と効果の違い\n　語｜評価するもの｜対応する表現\n　efficient｜投入資源に対する成果｜without wasting materials\n　effective｜目的の達成度｜achieving the goal\n　practical｜現実での使いやすさ｜easy to apply\n　⇒ 材料を無駄にしないなら efficient\n　⚠ effective と efficient の取り違えが最頻出。むだの少なさは efficient。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_014',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The government's economic policy was heavily ( ) toward supporting large corporations, leaving small businesses with little assistance.",
    choices: [
      { key: 'A', text: 'inclined' },
      { key: 'B', text: 'biased' },
      { key: 'C', text: 'oriented' },
      { key: 'D', text: 'skewed' },
    ],
    correctKey: 'D',
    explanation:
      '"skewed toward" は「（分配・政策などが）特定の方向に歪んでいる」意で、不公平な偏りを示す最も強い表現。biased は近い意味だが "biased toward" より "biased against" の方が一般的。oriented は「〜向けの」で中立的な方向性のみ示す。inclined は「傾向がある」で個人の意見や感情に使うことが多い。\n\n【図解】「偏り」を表す語\n　語｜方向の示し方｜対象\n　skewed｜skewed toward｜分配, 統計, 政策\n　biased｜biased against が一般的｜人の判断, 報道\n　oriented｜oriented toward｜中立的な方向性\n　⇒ 分配の歪みを toward で示すなら skewed\n　⚠ oriented は「〜向けの」で不公平の含みがない。歪みの批判には skewed を使う。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_015',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The athlete's recovery was ( ) by a strict rehabilitation program that combined physical therapy with nutritional support.",
    choices: [
      { key: 'A', text: 'facilitated' },
      { key: 'B', text: 'promoted' },
      { key: 'C', text: 'enhanced' },
      { key: 'D', text: 'accelerated' },
    ],
    correctKey: 'D',
    explanation:
      '"accelerated" は「（回復などの）速度を速める」で、リハビリプログラムの直接的な効果として最も明確。facilitated は「容易にする・促進する」、promoted は「推進する」、enhanced は「質を高める」でいずれも成立しうるが、回復という時間的プロセスの速度向上を表す語は accelerated。\n\n【図解】促進を表す動詞の焦点\n　語｜高めるもの｜例\n　accelerate｜速度｜recovery, growth\n　enhance｜質, 程度｜quality, image\n　facilitate｜容易さ｜communication, process\n　⇒ 回復の速さを上げるなら accelerate\n　⚠ promote は「推進する, 宣伝する」。時間短縮の意味はないので速度の話には使わない。',
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
      '"compounded" は「（既存の問題に）さらに問題を重ねて悪化させる」意で、「解決したはずが未解決問題を残した」という構造と最も合う。aggravated は「（状況を）悪化させた」、intensified は「強度を増した」、escalated は「（対立が）段階的に拡大した」でいずれも成立するが、問題の積み重なりを示す compound が文意に最も忠実。\n\n【図解】悪化を表す動詞の違い\n　語｜悪化のしかた｜含み\n　compound｜問題の上に問題を重ねる｜複合的な悪化\n　aggravate｜状態を一段と悪くする｜程度の悪化\n　escalate｜段階的に拡大する｜対立の拡大\n　⇒ 未解決問題を残して悪化させたなら compound\n　⚠ intensify は「強度を増す」。問題が積み重なる構造を表すのは compound。',
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
      { key: 'B', text: 'inspect' },
      { key: 'C', text: 'examine' },
      { key: 'D', text: 'audit' },
    ],
    correctKey: 'D',
    explanation:
      '"audit" は「（組織・プロセスを）公式・体系的に点検・評価する」意で、特にビジネス・コンプライアンス文脈でのサプライチェーン評価に使う専門的な表現。investigate は「問題があるときに調査する」、examine は「詳しく調べる」（医療や学術でも使う）、inspect は「物理的な検査」が主。\n\n【図解】「調べる」の使い分け\n　語｜調べ方｜典型的な場面\n　audit｜体系的に点検し評価する｜会計, 供給網, 法令順守\n　investigate｜問題の原因を追う｜事件, 事故\n　inspect｜物理的に検査する｜設備, 製品\n　⇒ 供給網の適合性を体系的に点検するなら audit\n　⚠ examine は学術や医療での「詳しく調べる」。企業の監査には audit を使う。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_018',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The CEO's resignation came as a complete surprise; until then, her leadership had appeared ( ) and her position secure.",
    choices: [
      { key: 'A', text: 'unwavering' },
      { key: 'B', text: 'steadfast' },
      { key: 'C', text: 'resolute' },
      { key: 'D', text: 'unshakeable' },
    ],
    correctKey: 'D',
    explanation:
      '"unshakeable" は「（地位・信念などが）揺るぎない」で、辞任直前まで地位が安泰に見えた、という文脈に最も合う形容詞。steadfast・resolute・unwavering はいずれも「意志の固い」という個人の態度を表すが、leadership（指導力・リーダーシップ）という抽象概念への修飾には unshakeable が最も自然。\n\n【図解】「揺るぎない」の修飾対象\n　語｜修飾しやすい語｜含み\n　unshakeable｜leadership, position, confidence｜地位や信念の安定\n　steadfast｜support, loyalty｜態度の一貫\n　resolute｜determination, action｜意志の強さ\n　⇒ 指導的地位の安泰なら unshakeable\n　⚠ unwavering は「ぶれない」で人の姿勢に使う。抽象的な地位の修飾には不自然。',
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
      { key: 'B', text: 'reinforced' },
      { key: 'C', text: 'accentuated' },
      { key: 'D', text: 'underlined' },
    ],
    correctKey: 'D',
    explanation:
      '"underlined the need" は「必要性を強調した」という慣用表現。"raise an objection" とも言う。stressed も同義だが、"underlined" の方が書面・報告書の文脈で格式的。reinforced は「（既にある認識を）補強した」、accentuated は「際立たせた」でニュアンスが異なる。\n\n【図解】強調を表す動詞\n　語｜使う場面｜含み\n　underline｜報告書, 文書｜格式的に強調する\n　stress｜発言, 主張｜口頭でも書面でも可\n　reinforce｜既存の認識｜補強する\n　⇒ 報告書が必要性を強調するなら underline\n　⚠ accentuate は「際立たせる」で対比を強める語。必要性の主張には underline や stress。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_020',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The country's economic growth has been ( ) by decades of political instability, keeping it among the least developed nations in the region.",
    choices: [
      { key: 'A', text: 'constrained' },
      { key: 'B', text: 'impeded' },
      { key: 'C', text: 'hampered' },
      { key: 'D', text: 'hindered' },
    ],
    correctKey: 'C',
    explanation:
      '"hampered by" は「（外的障害によって）妨げられる」の意で、長期的な政治的不安定という外的要因による成長阻害に最も適切なコロケーション。impeded・hindered もほぼ同義だが、"hampered by" は経済・努力・計画などとの相性が特に良い慣用表現。constrained は「制約される」で制度・規則的な制限に使いやすい。\n\n【図解】妨害を表す動詞とコロケーション\n　語｜妨げるもの｜相性のよい主語\n　hamper｜努力, 成長, 計画｜外的要因\n　hinder｜進行全般｜障害物\n　constrain｜自由, 選択肢｜制度, 規則\n　⇒ 政治的不安定が成長を妨げるなら hampered by\n　⚠ constrain は制度的な制限。外部要因による妨害には hamper が自然。',
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
      { key: 'B', text: 'had' },
      { key: 'C', text: 'was' },
      { key: 'D', text: 'did' },
    ],
    correctKey: 'D',
    explanation:
      '"Not until ..." で始まる否定の副詞節が文頭に置かれると、主節に倒置が生じる（否定倒置）。"Not until ... did + 主語 + 動詞原形" が正しい構造。主語 the team に対して did を使い、"did the team realize" となる。否定語が文頭に出ると疑問文と同じ語順になるという原則は、Not until、Rarely、Never、Little などに共通して働く。\n\n【図解】否定の副詞句と倒置\n　文頭の要素｜主節の語順｜例\n　Not until 〜｜did ＋ 主語 ＋ 原形｜did the team realize\n　Rarely｜does または did ＋ 主語 ＋ 原形｜does it occur\n　No sooner｜had ＋ 主語 ＋ 過去分詞｜had he left\n　⇒ 否定語が文頭なら疑問文と同じ語順にする\n　⚠ that を入れて Not until 〜 that とするのは強調構文 It was not until 〜 that の形。文頭が Not until だけなら倒置。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_022',
    level: '2kyu',
    category: 'grammar',
    question:
      'Had the engineers identified the flaw earlier, the bridge ( ) collapsed.',
    choices: [
      { key: 'A', text: 'will not have' },
      { key: 'B', text: 'would not' },
      { key: 'C', text: 'had not' },
      { key: 'D', text: 'would not have' },
    ],
    correctKey: 'D',
    explanation:
      '"Had + 主語 + 過去分詞..." は if を省略した仮定法過去完了の条件節。過去の事実に反する仮定を表すため、帰結節は "would not have + 過去分詞" となる。"would not" は仮定法過去（現在の仮定）の帰結節形式で不適切。\n\nif を省略した仮定法では、主語と助動詞を入れ替える倒置が起こる。Had the engineers identified 〜 は If the engineers had identified 〜 と同じ意味で、過去の事実に反する仮定を表す仮定法過去完了である。\n\n【図解】仮定法の時制と帰結節\n　条件節｜帰結節｜表す内容\n　If ＋ 過去形｜would ＋ 原形｜現在の反実仮想\n　If ＋ had 過去分詞｜would have ＋ 過去分詞｜過去の反実仮想\n　Had ＋ 主語 ＋ 過去分詞｜would have ＋ 過去分詞｜if の省略と倒置\n　⇒ 過去の橋の崩落を仮定するなら would not have collapsed\n　⚠ would not だけでは現在の仮定になる。過去の仮定には have ＋ 過去分詞 が必要。',
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
      { key: 'B', text: 'submitted' },
      { key: 'C', text: 'submit' },
      { key: 'D', text: 'will submit' },
    ],
    correctKey: 'C',
    explanation:
      '"require that + 主語 + 動詞" の構文では、動詞は仮定法現在（原形）を使う。"every participant submit" と三単現の -s をつけないのが正しい。これは "It is essential/necessary that ..." 構文と同様の用法で、アメリカ英語で特に一般的。\n\nrequire、suggest、demand、insist、propose などの後の that 節では、動詞が原形になる仮定法現在を使う。主語が三人称単数でも s を付けないのが特徴で、should を入れて every participant should submit としても同じ意味になる。\n\n【図解】仮定法現在をとる語\n　語｜品詞｜例\n　require, demand, suggest｜動詞｜require that he submit\n　essential, necessary, important｜形容詞｜It is essential that he be\n　proposal, suggestion｜名詞｜the proposal that he submit\n　⇒ requires that に続く動詞は原形 submit\n　⚠ 三単現の s を付けた submits は誤り。時制の一致も受けない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_024',
    level: '2kyu',
    category: 'grammar',
    question:
      'Only after conducting extensive surveys ( ) the researchers able to draw any firm conclusions.',
    choices: [
      { key: 'A', text: 'are' },
      { key: 'B', text: 'did' },
      { key: 'C', text: 'have' },
      { key: 'D', text: 'were' },
    ],
    correctKey: 'D',
    explanation:
      '"Only after ..." が文頭に来ると主節で倒置が起きる。主語が "the researchers"、述語が be動詞 "were able to" なので、倒置後は "were the researchers able to" となる。"did" は一般動詞の倒置に使うが、"be able to" には were を使う。\n\nOnly ＋ 副詞句 が文頭に来ると主節が倒置される。倒置の形は述語動詞の種類で決まり、be 動詞や助動詞ならそれ自体を主語の前に出し、一般動詞なら do、does、did を使う。本問は be able to なので were を前に出す。\n\n【図解】倒置の作り方\n　述語の種類｜倒置後の語順｜例\n　be 動詞｜be ＋ 主語 ＋ 補語｜were the researchers able\n　一般動詞｜do 系 ＋ 主語 ＋ 原形｜did they realize\n　完了形｜had ＋ 主語 ＋ 過去分詞｜had he finished\n　⇒ able to の前は be 動詞なので were\n　⚠ 一般動詞と同じ感覚で did を選ばない。述語が be 動詞なら did は使えない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_025',
    level: '2kyu',
    category: 'grammar',
    question:
      "The museum's new exhibit, ( ) is scheduled to open next month, will feature artifacts from ancient civilizations.",
    choices: [
      { key: 'A', text: 'that' },
      { key: 'B', text: 'what' },
      { key: 'C', text: 'which' },
      { key: 'D', text: 'where' },
    ],
    correctKey: 'C',
    explanation:
      'コンマで囲まれた非制限的（非限定）関係節では which を使う。that は制限的関係節にのみ使われ、コンマとともに非制限的関係節で使うことはできない。what は「〜すること・もの」で名詞節を導く。where は場所を表す関係副詞で不適。\n\nコンマで区切られた非制限用法の関係詞では that を使えない。物や事柄を先行詞とするなら which、人なら who を使う。非制限用法は先行詞を限定せず、補足情報を付け加える働きをする。\n\n【図解】関係詞の使い分け\n　用法｜使える関係詞｜コンマ\n　制限用法｜that, which, who｜なし\n　非制限用法｜which, who のみ｜あり\n　先行詞なし｜what｜（名詞節を作る）\n　⇒ コンマの後ろなら which\n　⚠ 非制限用法で that は使えない。コンマの有無が決め手になる。',
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
      { key: 'B', text: 'cleaning' },
      { key: 'C', text: 'cleaned' },
      { key: 'D', text: 'to clean' },
    ],
    correctKey: 'D',
    explanation:
      '使役動詞 make の受動態 "be made to do" では、不定詞の to が必要となる。能動態 "make + 目的語 + 動詞原形" では to を省略するが、受動態に変換すると to が復活する（"The children were made to clean ..."）。\n\n使役動詞 make は能動態では make ＋ 目的語 ＋ 動詞の原形 の形をとるが、受動態にすると原形不定詞が to 不定詞に変わる。これは help や let 以外の使役動詞に共通するルールで、be made to do の形になる。\n\n【図解】使役動詞の受動態\n　能動態｜受動態｜to の有無\n　make 人 do｜be made to do｜受動態で to が必要\n　see 人 do｜be seen to do｜受動態で to が必要\n　let 人 do｜be allowed to do｜let は受動態にしない\n　⇒ were made の後ろは to clean\n　⚠ 能動態の感覚で原形 clean を選ばない。受動態では to が復活する。',
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
      '"It is/was ... that ..." は強調構文（cleft sentence）。強調する要素が人であっても who または that が使える。ただし herself という再帰代名詞が既に強調を担っているこの文では、強調構文の標識として that が最も自然。who も可だが、whom は目的格なので主語位置には使えない。\n\nIt is 〜 that ... の強調構文では、強調される要素が人でも物でも that が使える。人なら who も可能だが、本問は herself という再帰代名詞がすでに強調を担っているため that が自然。whom は目的格なので、直後に動詞が続く主語の位置には使えない。\n\n【図解】強調構文で使える語\n　強調する要素｜使える語｜例\n　人（主格）｜that, who｜It was she that came\n　人（目的格）｜that, whom｜It was him that I saw\n　物, 事｜that, which｜It was the book that I read\n　⇒ 直後に announced が続くので主格。that が最も自然\n　⚠ whom の後ろに動詞は続かない。主格か目的格かで選択肢を絞る。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_028',
    level: '2kyu',
    category: 'grammar',
    question:
      'Rarely ( ) such a dramatic shift in public opinion occur within such a short period of time.',
    choices: [
      { key: 'A', text: 'had' },
      { key: 'B', text: 'do' },
      { key: 'C', text: 'has' },
      { key: 'D', text: 'does' },
    ],
    correctKey: 'D',
    explanation:
      '"Rarely" が文頭に置かれると主節で倒置が生じる。主語 "such a dramatic shift"（単数）＋一般動詞 occur に対して助動詞 does を使い、"Rarely does such a shift occur" となる。do は複数主語用、has は現在完了の倒置、had は過去完了の倒置で不適。\n\nRarely、Seldom、Hardly、Never などの否定の副詞が文頭に来ると倒置が起こる。一般動詞の文では do、does、did を主語の前に置き、本動詞は原形に戻す。主語 such a dramatic shift は単数なので does を使う。\n\n【図解】頻度の否定副詞と倒置\n　文頭の副詞｜意味｜主節の形\n　Rarely, Seldom｜めったに〜ない｜does ＋ 主語 ＋ 原形\n　Never｜決して〜ない｜does ＋ 主語 ＋ 原形\n　Hardly 〜 when｜〜するやいなや｜had ＋ 主語 ＋ 過去分詞\n　⇒ 主語が単数の現在時制なら does\n　⚠ 主語が複数なら do になる。数の一致を見落とさない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_029',
    level: '2kyu',
    category: 'grammar',
    question:
      'The policy change, ( ) many experts had predicted, led to a sharp rise in youth unemployment rates.',
    choices: [
      { key: 'A', text: 'what' },
      { key: 'B', text: 'which' },
      { key: 'C', text: 'as' },
      { key: 'D', text: 'that' },
    ],
    correctKey: 'C',
    explanation:
      '"as many experts had predicted" の as は「専門家が予測したとおり」という様態の接続詞。この as は前の文全体または節を先行詞として受ける関係詞的用法でもある。"which many experts had predicted" も文法的だが、which は先行詞として特定の名詞句（the policy change）を指す非制限的関係節になる。ここでは「予測した（こと＝その結果）」という節全体を受けるので as が適切。\n\n接続詞の as には「〜するとおりに」という様態の用法があり、as many experts had predicted で「多くの専門家が予測していたとおり」を表す。関係代名詞 which も前の節全体を受けられるが、コンマで挿入されるこの位置では as が定型である。\n\n【図解】as の主な用法\n　用法｜意味｜例\n　様態｜〜のとおりに｜as we expected\n　理由｜〜なので｜As it was raining\n　時｜〜するとき｜as he entered\n　⇒ 専門家の予測どおりという挿入なら as\n　⚠ what は先行詞を含む関係代名詞で、節の中に名詞の欠けがないこの位置には置けない。',
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
      { key: 'B', text: 'to have been' },
      { key: 'C', text: 'having been' },
      { key: 'D', text: 'being' },
    ],
    correctKey: 'D',
    explanation:
      '"prefer + 動名詞" と "prefer + to不定詞" はどちらも正しいが、"prefer + being done" は「〜されることを好む」という受動態の動名詞。"prefer to be contacted" も文法的だが、prefer に続く動名詞形の受動態 "prefer being contacted" の方が実際には口語・書き言葉ともに一般的。\n\nprefer は目的語に動名詞も to 不定詞も取れる。受動の意味を表すには being ＋ 過去分詞 の形にし、prefer being contacted で「連絡されることを好む」となる。prefer A to B のように比較の相手を示す形もあるが、本問は rather than で比較している。\n\n【図解】prefer の使い方\n　形｜意味｜例\n　prefer doing｜〜するほうを好む｜prefer walking\n　prefer to do｜〜するほうを好む｜prefer to walk\n　prefer A to B｜BよりAを好む｜prefer tea to coffee\n　⇒ 受動の意味なら being contacted\n　⚠ having been contacted は完了形で、すでに終わった動作を指す。習慣的な好みには不適。',
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
      { key: 'B', text: 'was' },
      { key: 'C', text: 'has' },
      { key: 'D', text: 'had' },
    ],
    correctKey: 'D',
    explanation:
      '"No sooner ... than ..." は「〜するやいなや」を表す慣用表現で、had を使った倒置構文になる。"No sooner had + 主語 + 過去分詞 + than + 主語 + 過去形動詞" が正しい構造。過去完了の had が倒置されて文頭直後に来る。\n\nNo sooner 〜 than ... は「〜するやいなや…」を表す慣用表現で、前半に過去完了、後半に過去形を使う。No sooner が文頭に来るため倒置が起こり、had が主語の前に出る。同義表現の Hardly 〜 when も同じ構造をとる。\n\n【図解】「〜するやいなや」の表現\n　構文｜前半の時制｜後半の接続詞\n　No sooner had 〜｜過去完了｜than\n　Hardly had 〜｜過去完了｜when\n　As soon as 〜｜過去形｜（倒置なし）\n　⇒ No sooner の直後は had\n　⚠ No sooner 〜 when とはしない。than と when の組み合わせを取り違えない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_032',
    level: '2kyu',
    category: 'grammar',
    question:
      'The students found the examination far more ( ) than they had anticipated based on the sample questions.',
    choices: [
      { key: 'A', text: 'challenge' },
      { key: 'B', text: 'challenged' },
      { key: 'C', text: 'challenging' },
      { key: 'D', text: 'to challenge' },
    ],
    correctKey: 'C',
    explanation:
      '"find + 目的語 + 形容詞" の構文で、目的語（the examination）を説明する補語には形容詞が来る。"challenging"（困難な・やりがいのある）は形容詞として機能する。"challenged" は受動の意味（困難に直面させられた）で使われる場合があるが、試験自体を形容するには challenging が正しい。\n\nfind ＋ 目的語 ＋ 補語 の第5文型では、補語の位置に形容詞が来る。challenging は「難しい、やりがいのある」という意味の形容詞で、試験そのものの性質を説明する。far more challenging と比較級を強める far も重要なポイント。\n\n【図解】分詞形容詞の能動と受動\n　形｜意味｜修飾する対象\n　challenging｜困難を感じさせる｜試験, 仕事など物事\n　challenged｜困難に直面させられた｜人\n　interesting と interested｜同じ関係｜物事と人\n　⇒ 試験の性質を言うなら challenging\n　⚠ 人が主語なら challenged になる。ing 形と ed 形の対象を取り違えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_033',
    level: '2kyu',
    category: 'grammar',
    question:
      'Were the company ( ) declare bankruptcy, thousands of employees would lose their jobs and retirement savings.',
    choices: [
      { key: 'A', text: 'should' },
      { key: 'B', text: 'would' },
      { key: 'C', text: 'to' },
      { key: 'D', text: 'might' },
    ],
    correctKey: 'C',
    explanation:
      '"Were + 主語 + to不定詞 ..." は if を省略した仮定法の倒置形で、「もし〜するとしたら」という意味。"Were the company to declare ..." = "If the company were to declare ..." となる。特に書き言葉・フォーマルな文脈で使われる仮定法の格式表現。\n\nWere ＋ 主語 ＋ to do は if を省略した仮定法の倒置形で、If the company were to declare 〜 と同じ意味。were to は実現の可能性が低い、あるいは仮定を強調するときに使うフォーマルな形で、書き言葉で好まれる。\n\n【図解】if 省略の倒置の3パターン\n　元の形｜倒置形｜表す時\n　If 主語 were｜Were 主語｜現在の仮定\n　If 主語 were to do｜Were 主語 to do｜将来の仮定\n　If 主語 had done｜Had 主語 done｜過去の仮定\n　⇒ Were the company の後ろは to declare\n　⚠ should を選ぶなら Should the company declare と原形が続く形になる。were との併用はできない。',
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
      '"along with ..." は主語に付加された情報であり、主語の数には影響しない。主語は "The research paper"（単数）なので動詞は is が正しい。"along with" は "as well as" "together with" と同様に、後続の句を主語に含めない点に注意。\n\nalong with、together with、as well as、in addition to などの句は主語に情報を付け加えるだけで、動詞の数には影響しない。したがって動詞は主語 The research paper に合わせて単数の is を使う。\n\n【図解】数に影響しない付加表現\n　表現｜意味｜動詞の一致\n　along with｜〜とともに｜前の主語に合わせる\n　as well as｜〜と同様に｜前の主語に合わせる\n　and｜〜と｜複数扱いになる\n　⇒ 主語が単数なら is\n　⚠ and でつなぐ場合だけ複数になる。along with を and と同じに扱わない。',
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
      { key: 'B', text: 'even' },
      { key: 'C', text: 'really' },
      { key: 'D', text: 'indeed' },
    ],
    correctKey: 'D',
    explanation:
      '"does indeed + 動詞原形" は emphatic do（強調の do）を使った表現で、「確かに〜する」という肯定の強調を表す。but で逆説が続く前に主張の誠意を示す際に使う。"does so take" は文法的に不自然。really・even は副詞として機能するが、"does really/even take" という語順は emphatic do の強調構文として成立しない。\n\n強調の do は、肯定文の内容を強めるために動詞の前に置く助動詞。does indeed take のように indeed を挟むと「確かに〜している」と譲歩の意味が明確になり、but 以下の反論につなげる働きをする。\n\n【図解】強調の do の使い方\n　形｜意味｜後ろの動詞\n　do または does ＋ 原形｜確かに〜する｜原形\n　did ＋ 原形｜確かに〜した｜原形\n　does indeed ＋ 原形｜まさしく〜する｜原形\n　⇒ but の前で譲歩を示すなら does indeed take\n　⚠ really や even は does の直後に置いて強調の do を作れない。語順の制約に注意。',
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
      'パッセージに "One major source of microplastic contamination in water supplies is the degradation of synthetic textiles during washing" と明記されており、合成繊維が汚染源の一つであることは事実として述べられている。Aは "not yet established a definitive causal link" とあり誤り。Bは "many plants successfully filter out larger particles" とあり全く除去できないとは書かれていない。Dは "several countries" であり全国義務化ではない。\n\n【図解】選択肢と本文の対応\n　選択肢の主張｜本文の記述｜判定\n　合成繊維が汚染源の一つ｜洗濯時の劣化が主要な発生源｜一致\n　因果関係が確立済み｜決定的な因果は未確立｜不一致\n　処理場は全く除去できない｜大きい粒子は除去できる｜不一致\n　⇒ 本文に明記された事実だけを選ぶ\n　⚠ several countries を「全国的な義務化」と読み替えない。数量表現の拡大解釈が定番のひっかけ。',
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
      { key: 'A', text: 'successfully prevents' },
      { key: 'B', text: 'completely ignores' },
      { key: 'C', text: 'fails to fully achieve' },
      { key: 'D', text: 'exceeds the scope of' },
    ],
    correctKey: 'C',
    explanation:
      '"falls short of" は「〜に達しない、〜を十分に果たしていない」という意味の慣用表現。批評家たちは規制が根本的な解決（過剰なプラスチック生産の抑制）に「及んでいない」と主張しているので、A「完全には達成できていない」が正しい。「完全に無視している」（B）は言い過ぎ。設問は本文中の表現を別の語句に言い換えたものを選ぶ形式で、程度を強めすぎた選択肢や弱めすぎた選択肢が誤答として並ぶ。\n\n【図解】fall short of の言い換え\n　表現｜意味｜強さ\n　fall short of｜十分に達していない｜部分的な不足\n　fail to fully achieve｜完全には達成できない｜同義の言い換え\n　completely ignore｜まったく無視する｜言い過ぎ\n　⇒ 規制が根本解決に届いていないなら fails to fully achieve\n　⚠ 部分的な不足を「完全な無視」と読み替えない。程度を強めすぎる選択肢は誤り。',
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
      'パッセージの最後で批評家が「規制は洗濯機フィルターにとどまり、根本原因（使い捨てプラスチックの過剰生産）に取り組んでいない」と指摘しており、著者はこの批判的見解を肯定的に紹介している。Bが「症状への対処であり根本原因への対処でない」という内容と一致する。\n\nこの設問は筆者の立場を問うもので、批評家の指摘を肯定的に紹介している点が手がかりになる。規制が洗濯機のフィルターという対症療法にとどまり、使い捨てプラスチックの過剰生産という根本原因に踏み込んでいない、という論理構造を読み取る。\n\n【図解】対症療法と根本原因の対比\n　観点｜本文での扱い｜評価\n　洗濯機フィルター義務化｜症状への対処｜限定的な効果\n　使い捨てプラの過剰生産｜根本原因｜未対応\n　筆者の姿勢｜批評家の指摘を肯定的に紹介｜懐疑的\n　⇒ 症状への対処にとどまるという要旨を選ぶ\n　⚠ 規制を全面的に否定した選択肢は言い過ぎ。効果を認めたうえでの不足という論調を読み違えない。',
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
      'パッセージに "office vacancies climbed in major city centers, commercial real estate values fell sharply, reducing the property tax revenues" と明記されており、都市部の空室率上昇→商業不動産価値下落→固定資産税収入の減少という因果関係が示されている。Bがこの内容と一致する。\n\n【図解】本文が示す因果の連鎖\n　段階｜本文の記述｜結果\n　1｜都心のオフィス空室率が上昇｜需要の減少\n　2｜商業不動産の価値が急落｜資産価値の下落\n　3｜固定資産税収入が減少｜自治体財政の悪化\n　⇒ 空室増から税収減までの流れをたどる\n　⚠ 途中の段階だけを取り出した選択肢に飛びつかない。因果の最終結果まで一致するか確認する。',
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
      { key: 'A', text: 'reduces the overall number of people seeking employment' },
      { key: 'B', text: 'allows citizens to vote on important decisions' },
      { key: 'C', text: 'makes something available to a wider range of people' },
      { key: 'D', text: 'transfers power from governments to private companies' },
    ],
    correctKey: 'C',
    explanation:
      'パッセージでは "democratizes opportunity by enabling workers in less affluent areas to access high-paying jobs" とあり、「機会を民主化する」は「高収入の仕事へのアクセスをより多くの地域の人々に開放する」という意味で使われている。「より広い範囲の人々が利用できるようにする」という言い換えがこの意味に最も近い。\n\n【図解】democratize の意味の広がり\n　語の使われ方｜本文での内容｜言い換え\n　democratize opportunity｜遠隔地の労働者も高収入職に就ける｜より広い層に開放する\n　democracy の原義｜多数による統治｜投票, 政治参加\n　本文での焦点｜アクセスの拡大｜機会の平等化\n　⇒ 文脈から「利用できる範囲を広げる」と読む\n　⚠ democratize を「投票で決める」と字義どおりに取らない。比喩的な用法であることを見抜く。',
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
      'パッセージは "Proponents argue ..." と "Critics, however, contend ..." という両論を公平に提示しており、著者自身は特定の立場を明確にしていない。これは balanced/neutral な論説文の典型的なアプローチで、Bの「明確な立場を取らずに利点と限界の両方を提示している」が最も適切。\n\n【図解】論説文における筆者の立場\n　本文の構成｜使われる表現｜示す姿勢\n　賛成側の主張｜Proponents argue｜一方の紹介\n　反対側の主張｜Critics contend｜他方の紹介\n　筆者の断定｜見当たらない｜中立\n　⇒ 両論併記なら中立の選択肢を選ぶ\n　⚠ 後半に置かれた主張を筆者の意見と取り違えない。断定表現の有無で判断する。',
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
      'パッセージに "those that carry genetic mutations allowing them to survive the drug gradually outcompete non-resistant strains, a process driven by natural selection" と明記されており、自然選択によって耐性菌が広がることが説明されている。Aは「人間の遺伝子変異」で誤り（菌の変異）。Cは「一部の地域でのみ禁止」であり全世界的禁止は誤り。Dは「経済的に魅力がない」ためであって意図的削減ではない。\n\n【図解】耐性菌が広がる仕組み\n　段階｜本文の記述｜キーワード\n　1｜薬に耐える変異を持つ菌が生き残る｜genetic mutations\n　2｜耐性のない菌より優位に増える｜outcompete\n　3｜自然選択によって耐性が広がる｜natural selection\n　⇒ 変異と自然選択という2語が答えの根拠\n　⚠ 変異するのは細菌であって人間ではない。主体の取り違えが最頻出のひっかけ。',
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
      '"implementation remains inconsistent" は「実施状況にばらつきがある（=一部の国は守っているが他は守っていない）」という意味。"Despite international agreements calling for reduced antibiotic use" との組み合わせから、合意はあるが国によって実施状況が異なることが読み取れる。Bが最も適切。\n\n【図解】implementation remains inconsistent の読み方\n　語｜意味｜文脈での含み\n　implementation｜実施, 履行｜合意内容の実行\n　inconsistent｜一貫していない｜国によってばらつく\n　Despite agreements｜合意にもかかわらず｜合意自体は存在する\n　⇒ 合意はあるが実施状況に差がある、と読む\n　⚠ inconsistent を「合意がない」と読み替えない。合意の有無と実施の程度は別の問題。',
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
        text: "The European Union's ban on antibiotic use in farming has resolved the resistance problem in that region.",
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージ全体を通じて、抗生物質の過剰使用・国際合意の不徹底・新薬開発の停滞という複数の問題が示されており、解決には政策面と産業面の両方での変化が必要だと示唆している。Aは「主な責任が製薬会社にある」という誇張。Cは比較論だがパッセージは明示していない。DはEUの禁止が解決策として機能したとは書かれていない。\n\n【図解】本文が挙げる3つの問題\n　問題｜本文の記述｜必要な対応\n　抗生物質の過剰使用｜農業と医療での多用｜使用の抑制\n　国際合意の不徹底｜実施にばらつき｜政策の強化\n　新薬開発の停滞｜経済的に魅力がない｜産業側の変化\n　⇒ 政策と産業の両面が必要という要旨を選ぶ\n　⚠ 責任を製薬会社だけに帰す選択肢は誇張。本文は複数の要因を並列で挙げている。',
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
        text: 'It consolidates daily memories and transfers them to long-term storage.',
      },
      {
        key: 'B',
        text: 'It reduces the risk of cardiovascular disease by regulating blood pressure.',
      },
      {
        key: 'C',
        text: 'It removes harmful waste products from the brain during deep sleep.',
      },
      {
        key: 'D',
        text: 'It regulates melatonin production to control the sleep-wake cycle.',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージに "the brain\'s glymphatic system becomes highly active, flushing out metabolic waste products including beta-amyloid" と明記されており、深い睡眠中に老廃物を排出する機能が説明されている。Aはhippocampusの機能、Dはメラトニンに関する記述で別のシステム。Bはパッセージに記載されていない。\n\n【図解】睡眠中の脳の働き\n　仕組み｜働き｜本文の記述\n　glymphatic system｜老廃物を洗い流す｜深い睡眠中に活発化\n　beta-amyloid｜排出される老廃物｜認知症との関連\n　hippocampus｜記憶の定着｜別の機能\n　⇒ 老廃物の排出を担うのは glymphatic system\n　⚠ 記憶の定着と老廃物の排出は別の仕組み。設問がどちらを問うているかを確認する。',
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
      { key: 'A', text: "the brain's process of consolidating memories overnight" },
      {
        key: 'B',
        text: "the body's natural internal clock regulating sleep and wakefulness",
      },
      { key: 'C', text: 'the pattern of melatonin release caused by screen exposure' },
      { key: 'D', text: 'the cycle of deep sleep and light sleep within a single night' },
    ],
    correctKey: 'B',
    explanation:
      '"circadian rhythm" は「概日リズム（約24時間周期の体内時計）」で、睡眠と覚醒のサイクルを調節する生体メカニズム。パッセージでは人工光がこのリズムを乱すと述べており、Bの「睡眠と覚醒を調節する体内時計」が最も正確。Dは睡眠サイクル内の段階を指し、circadian rhythmとは異なる概念。\n\n【図解】circadian rhythm の正確な意味\n　用語｜周期｜調節するもの\n　circadian rhythm｜約24時間｜睡眠と覚醒のサイクル\n　sleep cycle｜約90分｜深い睡眠と浅い睡眠の交代\n　melatonin｜（ホルモン）｜眠気を促す物質\n　⇒ 体内時計を指すなら circadian rhythm\n　⚠ 一晩の中の深い眠りと浅い眠りの繰り返しは sleep cycle。24時間周期と混同しない。',
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
      'パッセージに "a large proportion of adults in industrialized nations fail to achieve the recommended seven to nine hours" と明記されており、推奨睡眠時間を下回る成人が多いことが述べられている。Cがこれに対応する。Aは「意識的に無視している」とは書かれていない。Bはスクリーン以外の要因が排除されておらず誇張。Dは途上国との比較はパッセージにない。\n\n【図解】選択肢の吟味\n　選択肢の主張｜本文の記述｜判定\n　推奨睡眠時間に届かない成人が多い｜fail to achieve seven to nine hours｜一致\n　意識的に無視している｜記述なし｜不一致\n　原因はスクリーンだけ｜他の要因も示唆｜言い過ぎ\n　⇒ 本文の数値表現に忠実な選択肢を選ぶ\n　⚠ 途上国との比較は本文にない。書かれていない対比を持ち込まない。',
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
        text: 'Governments require digital platforms to use this classification for legal reasons.',
      },
      {
        key: 'B',
        text: 'The classification relieves companies of obligations such as minimum wage and pension contributions.',
      },
      {
        key: 'C',
        text: 'Independent contractors are required to pay higher taxes, which benefits the companies.',
      },
      {
        key: 'D',
        text: 'It allows workers to receive better pay than they would as full employees.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "Independent contractors are generally not entitled to minimum wage protections, paid leave, or employer contributions to pension schemes" とあり、この分類によって企業が最低賃金保護・有給休暇・年金拠出などの義務を免れることが示されている。Bがこれに対応する。他の選択肢はパッセージに根拠がない。\n\n【図解】独立請負人の分類がもたらす結果\n　項目｜従業員｜独立請負人\n　最低賃金の保護｜あり｜なし\n　有給休暇｜あり｜なし\n　年金への企業拠出｜あり｜なし\n　⇒ 企業が費用負担を免れる点が答えの核心\n　⚠ 分類の違いは働き方の自由度ではなく法的保護の有無。柔軟性の話と取り違えない。',
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
      '"illusory" は「幻想的な・見かけ上のものに過ぎない」という意味。パッセージでは「柔軟性は表面上のものに過ぎず、アルゴリズムによる監視とアカウント停止という現実がある」という文脈で使われており、Bの「見かけほど実質的・真実ではない」が最も正確。\n\nillusory は illusion（幻想）の形容詞形で、「見かけだけの、実質を伴わない」という意味。本文では柔軟性が表向きのものにすぎず、実際にはアルゴリズムによる監視やアカウント停止に縛られている、という対比の中で使われている。\n\n【図解】illusory の意味の取り方\n　語｜語源｜意味\n　illusory｜illusion 幻想｜見かけ倒しの\n　desirable｜desire 願望｜望ましい\n　misleading｜mislead 誤導する｜誤解を招く\n　⇒ 表向きと実態の対比なら illusory\n　⚠ 「望ましいが達成困難」と読み替えない。illusory は実在そのものを否定する語。',
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
        text: 'They insist that current labor laws already provide sufficient protection for gig workers.',
      },
      {
        key: 'C',
        text: 'They suggest that reclassification would eliminate the need for digital platforms entirely.',
      },
      {
        key: 'D',
        text: 'They argue that reclassification would make their services too expensive to be viable.',
      },
    ],
    correctKey: 'D',
    explanation:
      'パッセージに "mandatory reclassification would undermine the business model that makes affordable services possible" とあり、再分類によってサービスの低価格維持が困難になるというのが企業側の主張。Dの「サービスが高コストになりすぎて成立しなくなる」がこれに最も対応する。Aはパッセージで言及されていない。\n\n【図解】企業側の主張の論理\n　前提｜本文の記述｜帰結\n　現在の分類｜独立請負人として扱う｜コストを抑えられる\n　義務的な再分類｜従業員として扱う｜人件費が上昇\n　結果｜business model が成り立たない｜低価格サービスの維持が困難\n　⇒ サービスが高コスト化して成立しなくなる、が正解\n　⚠ 本文にない主張を補って選ばない。企業側の論拠は費用構造に限られている。',
    difficulty: 'advanced',
  },
  // ── VOCABULARY 51–70 ─────────────────────────────────────────────
  {
    id: 'eiken_2kyu_051',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The lawyer presented ( ) evidence that left the jury with little doubt about the defendant\'s guilt.',
    choices: [
      { key: 'A', text: 'compelling' },
      { key: 'B', text: 'convenient' },
      { key: 'C', text: 'considerate' },
      { key: 'D', text: 'consistent' },
    ],
    correctKey: 'A',
    explanation:
      '"compelling evidence" は「説得力があり、疑いの余地を残さない証拠」という意味の定番コロケーション。convenient（都合の良い）、considerate（思いやりのある）、consistent（一貫した）はいずれも証拠の説得力を表す語ではなく文脈に合わない。\n\ncompelling は compel（強いる）から派生した形容詞で、「見る者や聞く者を否応なく納得させる」力を表す。evidence、argument、reason、story と結びついて頻出する。接頭辞 con- で始まる紛らわしい語が並ぶため、意味の中心をつかんでおくことが得点につながる。\n\n【図解】con 系形容詞の意味\n　語｜意味｜結びつく名詞\n　compelling｜説得力のある｜evidence, argument\n　consistent｜一貫した｜policy, performance\n　considerate｜思いやりのある｜person, behavior\n　⇒ 陪審に疑いを残さない証拠なら compelling\n　⚠ convenient は「都合がよい」で説得力とは無関係。つづりの近さに惑わされない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_052',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The new regulations aim to ( ) carbon emissions from factories by 30 percent within the next decade.',
    choices: [
      { key: 'A', text: 'curl' },
      { key: 'B', text: 'curb' },
      { key: 'C', text: 'curve' },
      { key: 'D', text: 'cure' },
    ],
    correctKey: 'B',
    explanation:
      '"curb emissions" は「排出量を抑制する」という意味の固定表現で、環境政策の文脈で頻出する。curl（巻く）、curve（曲げる）、cure（治す）はいずれも綴りは似ているが意味が異なり不適切。\n\ncurb は名詞では「縁石」、動詞では「（増加や欲求を）抑制する」の意味。emissions、inflation、spending、appetite といった増えすぎると困るものを目的語にとる。環境政策や経済政策の記事で頻出する語である。\n\n【図解】cur で始まる紛らわしい動詞\n　語｜意味｜典型目的語\n　curb｜抑制する｜emissions, spending\n　curve｜曲げる｜line, road\n　cure｜治す, 治療する｜disease, patient\n　⇒ 排出量を30％抑えるなら curb\n　⚠ curl は「巻く, カールさせる」。1文字違いの語が並ぶので意味で確実に区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_053',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'It is ( ) that all passengers fasten their seatbelts before the aircraft begins to taxi.',
    choices: [
      { key: 'A', text: 'imperative' },
      { key: 'B', text: 'impressive' },
      { key: 'C', text: 'impartial' },
      { key: 'D', text: 'improbable' },
    ],
    correctKey: 'A',
    explanation:
      '"imperative" は「絶対に必要な、緊急の」という意味で、安全のために欠かせない指示を述べる文脈に最適。impressive（印象的な）、impartial（公平な）、improbable（ありそうもない）はいずれも文脈に合わない。\n\nimperative は「絶対に必要な、避けて通れない」という強い必要性を表す形容詞で、It is imperative that ＋ 主語 ＋ 動詞の原形 という仮定法現在の構文をとる。安全指示や緊急の要請で使われる硬い語である。\n\n【図解】im で始まる形容詞\n　語｜意味｜使う場面\n　imperative｜絶対に必要な｜安全指示, 緊急要請\n　impartial｜公平な｜judge, decision\n　improbable｜ありそうもない｜story, outcome\n　⇒ シートベルト着用の必須性なら imperative\n　⚠ It is imperative that の後ろは動詞の原形。fastens と三単現にしない点も出題される。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_054',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Despite the global recession, the country\'s economy proved remarkably ( ), recovering faster than most analysts had predicted.',
    choices: [
      { key: 'A', text: 'resistant' },
      { key: 'B', text: 'reliant' },
      { key: 'C', text: 'reluctant' },
      { key: 'D', text: 'resilient' },
    ],
    correctKey: 'D',
    explanation:
      '"resilient" は「（打撃を受けても）素早く立ち直る、回復力がある」という意味で、不況からの早い回復を表す文脈に最適。resistant（抵抗力がある）は外的圧力を跳ね返す意味合いが強く、reliant（依存した）・reluctant（気が進まない）は文脈に合わない。\n\nresilient は「打撃を受けてもすぐ元に戻る」弾力性を表す語で、経済・素材・人の精神力に使う。recovering faster than predicted という後半が、跳ね返す力ではなく立ち直る速さを述べている点が手がかりになる。\n\n【図解】re で始まる形容詞\n　語｜意味｜焦点\n　resilient｜回復力がある｜打撃後の立ち直り\n　resistant｜抵抗力がある｜外圧を跳ね返す\n　reluctant｜気が進まない｜人の心理\n　⇒ 不況から早く回復したなら resilient\n　⚠ resistant は「耐える」で回復の速さは表さない。予想より早い回復には resilient。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_055',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'All employees are expected to ( ) the company\'s code of conduct at all times, both in and outside the office.',
    choices: [
      { key: 'A', text: 'adhere to' },
      { key: 'B', text: 'adapt to' },
      { key: 'C', text: 'attend to' },
      { key: 'D', text: 'attribute to' },
    ],
    correctKey: 'A',
    explanation:
      '"adhere to a code of conduct" は「行動規範を遵守する」という意味の固定表現。adapt to（〜に適応する）、attend to（〜に対応する）、attribute to（〜に起因すると考える）はいずれも規則の遵守を表す組み合わせとして不適切。\n\nadhere to 〜 は「（規則や方針を）遵守する」で、adhere の原義は「くっつく」。規範から離れずに従い続けるイメージから、code of conduct、rules、schedule、principles を目的語にとる。\n\n【図解】to をとる紛らわしい句動詞\n　表現｜意味｜典型目的語\n　adhere to｜遵守する｜code, rules, schedule\n　adapt to｜適応する｜change, environment\n　attend to｜対応する, 世話する｜matter, customer\n　⇒ 行動規範を守るなら adhere to\n　⚠ attribute A to B は「AをBのせいにする」で、規則の遵守とはまったく別の意味。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_056',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The new open-plan office was designed to ( ) collaboration among employees from different departments.',
    choices: [
      { key: 'A', text: 'forge' },
      { key: 'B', text: 'foster' },
      { key: 'C', text: 'forbid' },
      { key: 'D', text: 'forecast' },
    ],
    correctKey: 'B',
    explanation:
      '"foster collaboration" は「協力関係を育む、促進する」という意味の定番コロケーション。forge（鍛造する、偽造する）、forbid（禁じる）、forecast（予測する）はいずれもcollaborationとの組み合わせとして不自然。\n\nfoster は「（成長や発展を）育む、促進する」で、collaboration、innovation、creativity、understanding など抽象的なものを育てる文脈で使う。里親制度を表す foster parent と同じ語で、育てるという中心義でつながっている。\n\n【図解】for で始まる動詞\n　語｜意味｜典型目的語\n　foster｜育む, 促進する｜collaboration, innovation\n　forge｜築く, 偽造する｜alliance, signature\n　forecast｜予測する｜weather, demand\n　⇒ 部署間の協力を促すなら foster\n　⚠ forge にも forge ties（関係を築く）の用法があるが、collaboration とは結びつかない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_057',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The city introduced several measures to ( ) traffic congestion during rush hour, including expanded bus lanes.',
    choices: [
      { key: 'A', text: 'mitigate' },
      { key: 'B', text: 'migrate' },
      { key: 'C', text: 'moderate' },
      { key: 'D', text: 'mediate' },
    ],
    correctKey: 'A',
    explanation:
      '"mitigate congestion" は「渋滞を緩和する」という意味で、都市政策の文脈で頻出する表現。migrate（移住する）は無関係、moderate（穏やかにする）は感情や発言に使うことが多く、mediate（仲裁する）は対立の調停に使う語で不適切。\n\nmitigate は「（悪影響を）和らげる、緩和する」で、congestion、damage、risk、impact を目的語にとる。完全に消すのではなく程度を軽くするのが中心義で、都市政策や環境政策の記事で頻出する。\n\n【図解】mi で始まる紛らわしい動詞\n　語｜意味｜典型目的語\n　mitigate｜緩和する｜congestion, damage, risk\n　mediate｜仲裁する｜dispute, conflict\n　moderate｜抑える, 司会する｜tone, discussion\n　⇒ 渋滞を和らげるなら mitigate\n　⚠ migrate は「移住する」で自動詞。目的語をとらないため空所には入らない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_058',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'A cure for the disease has remained ( ) despite decades of intensive research by scientists worldwide.',
    choices: [
      { key: 'A', text: 'elusive' },
      { key: 'B', text: 'exclusive' },
      { key: 'C', text: 'excessive' },
      { key: 'D', text: 'exempt' },
    ],
    correctKey: 'A',
    explanation:
      '"remain elusive" は「（目標や答えが）なかなか手に入らない、捉えどころがない」という意味で、長年研究しても見つからない治療法を表す文脈に最適。exclusive（排他的な）、excessive（過剰な）、exempt（免除された）はいずれも不適切。\n\nelusive は elude（逃れる）の形容詞形で、「なかなかつかまえられない、とらえどころのない」という意味。remain elusive で「依然として見つからない」という定型になり、答え・治療法・成功などを主語にとる。\n\n【図解】ex と el で始まる形容詞\n　語｜意味｜典型的な主語や名詞\n　elusive｜つかみどころがない｜cure, answer, success\n　exclusive｜排他的な, 独占的な｜club, interview\n　excessive｜過剰な｜spending, force\n　⇒ 何十年も見つからない治療法なら elusive\n　⚠ exempt は「免除された」で be exempt from の形をとる。remain とは結びつかない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_059',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The new employee proved to be remarkably ( ), handling everything from customer service to accounting with equal ease.',
    choices: [
      { key: 'A', text: 'versatile' },
      { key: 'B', text: 'valuable' },
      { key: 'C', text: 'vulnerable' },
      { key: 'D', text: 'voluntary' },
    ],
    correctKey: 'A',
    explanation:
      '"versatile" は「多才な、様々な分野に対応できる」という意味で、複数の異なる業務をこなす能力を表す文脈に最適。valuable（貴重な）は能力の多様性を表さず、vulnerable（弱い）、voluntary（自発的な）はいずれも文脈に合わない。\n\nversatile は「多方面に対応できる、多才な」で、人にも道具にも使える。handling everything from customer service to accounting という記述が、業務の幅広さを示す手がかりになっている。\n\n【図解】v で始まる形容詞\n　語｜意味｜評価の軸\n　versatile｜多才な, 用途が広い｜対応範囲の広さ\n　valuable｜価値のある｜重要度\n　vulnerable｜傷つきやすい｜弱さ\n　⇒ 接客から経理までこなすなら versatile\n　⚠ valuable は「貴重な」で能力の幅は表さない。有能さと多才さを区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_060',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The accountant was known for her ( ) attention to detail, rarely making even the smallest error in her reports.',
    choices: [
      { key: 'A', text: 'meticulous' },
      { key: 'B', text: 'moderate' },
      { key: 'C', text: 'modest' },
      { key: 'D', text: 'momentary' },
    ],
    correctKey: 'A',
    explanation:
      '"meticulous attention to detail" は「細部への徹底したこだわり」を表す定番コロケーション。滅多に間違えないという記述と一致する。moderate（適度な）、modest（控えめな）、momentary（一瞬の）はいずれも文脈に合わない。\n\nmeticulous は「細部にまで気を配る、几帳面な」で、attention to detail、record、planning、research と結びつく。rarely making even the smallest error という記述が、細部への徹底ぶりを裏づけている。\n\n【図解】mo と me で始まる形容詞\n　語｜意味｜評価する対象\n　meticulous｜細部まで入念な｜attention, records\n　moderate｜適度な, 穏健な｜amount, opinion\n　modest｜控えめな｜success, personality\n　⇒ 最小の誤りもしない几帳面さなら meticulous\n　⚠ momentary は「一瞬の」で持続的な性質を表さない。人柄の描写には使えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_061',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Although the witness\'s account sounded ( ), detectives later discovered several inconsistencies that raised doubts.',
    choices: [
      { key: 'A', text: 'plausible' },
      { key: 'B', text: 'playful' },
      { key: 'C', text: 'pleasant' },
      { key: 'D', text: 'plentiful' },
    ],
    correctKey: 'A',
    explanation:
      '"plausible" は「もっともらしい、信じられそうな」という意味で、一見信用できそうに聞こえたが後に矛盾が見つかったという文脈に最適。playful（遊び心のある）、pleasant（心地よい）、plentiful（豊富な）はいずれも証言の信憑性とは無関係。\n\nplausible は「一見もっともらしい、ありそうな」で、真実かどうかは保留されている点が重要。sounded plausible の後に矛盾が見つかったという展開は、この語の含みをそのまま利用した典型的な構成である。\n\n【図解】pl で始まる形容詞\n　語｜意味｜含み\n　plausible｜もっともらしい｜真偽は未確定\n　pleasant｜心地よい｜感覚的な快さ\n　plentiful｜豊富な｜数量\n　⇒ 後で矛盾が見つかる証言なら plausible\n　⚠ plausible は「確かに正しい」ではない。真実性を保証する語と取り違えない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_062',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The manager gave ( ) feedback on the proposal, pointing out both its strengths and its serious weaknesses without hesitation.',
    choices: [
      { key: 'A', text: 'candid' },
      { key: 'B', text: 'cautious' },
      { key: 'C', text: 'casual' },
      { key: 'D', text: 'callous' },
    ],
    correctKey: 'A',
    explanation:
      '"candid feedback" は「率直で正直な意見」という意味で、長所も短所も遠慮なく述べたという文脈に最適。cautious（慎重な）、casual（気軽な）、callous（無情な）はいずれも率直さのニュアンスとは異なる。\n\ncandid は「率直な、包み隠さない」で、feedback、conversation、assessment と結びつく。長所も深刻な短所も遠慮なく指摘したという記述が、この語の中心義に対応している。camera の candid shot（隠し撮り）も「作らない自然さ」から来ている。\n\n【図解】ca で始まる形容詞\n　語｜意味｜態度\n　candid｜率直な｜包み隠さない\n　cautious｜慎重な｜控えめ\n　callous｜無情な, 冷淡な｜思いやりがない\n　⇒ 長所も短所も述べたなら candid\n　⚠ callous は「冷酷な」で率直さとは別。率直と無神経を混同しない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_063',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Given the current trends, a further rise in interest rates seems almost ( ), according to most economists.',
    choices: [
      { key: 'A', text: 'inevitable' },
      { key: 'B', text: 'invaluable' },
      { key: 'C', text: 'incidental' },
      { key: 'D', text: 'infinite' },
    ],
    correctKey: 'A',
    explanation:
      '"inevitable" は「避けられない、必然の」という意味で、経済動向から見て金利上昇がほぼ確実だという文脈に最適。invaluable（非常に貴重な）、incidental（付随的な）、infinite（無限の）はいずれも文脈に合わない。\n\ninevitable は「避けられない、必然の」で、in-（否定）＋ evitable（避けうる）という成り立ち。Given the current trends（現在の傾向を踏まえると）という前置きが、成り行き上の必然性を示している。\n\n【図解】in で始まる形容詞\n　語｜意味｜含み\n　inevitable｜避けられない｜必然\n　invaluable｜きわめて貴重な｜価値の高さ\n　incidental｜付随的な｜重要度が低い\n　⇒ 経済動向から見て確実なら inevitable\n　⚠ invaluable は in が否定ではなく強調。「価値がない」と読み違えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_064',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Rainfall in the region has become increasingly ( ), making it difficult for farmers to plan their planting schedules.',
    choices: [
      { key: 'A', text: 'sporadic' },
      { key: 'B', text: 'spontaneous' },
      { key: 'C', text: 'specific' },
      { key: 'D', text: 'spacious' },
    ],
    correctKey: 'A',
    explanation:
      '"sporadic" は「不定期な、散発的な」という意味で、予測しにくい降雨パターンを表す文脈に最適。spontaneous（自発的な）、specific（特定の）、spacious（広々とした）はいずれも降雨の予測不可能性を表す語ではない。\n\nsporadic は「散発的な、不定期の」で、規則性がなく予測しにくい発生を表す。rainfall、outbreaks、attacks、fighting などが典型的な主語になる。農家が作付け計画を立てにくいという記述と論理的に結びつく。\n\n【図解】sp で始まる形容詞\n　語｜意味｜規則性\n　sporadic｜散発的な｜予測できない\n　spontaneous｜自発的な｜計画によらない\n　specific｜特定の｜限定される\n　⇒ 降雨が読めなくなったなら sporadic\n　⚠ spontaneous は「本人の意思による自然発生」。天候の不規則さには使わない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_065',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The connection between the two events turned out to be rather ( ), based more on coincidence than on any real cause.',
    choices: [
      { key: 'A', text: 'tedious' },
      { key: 'B', text: 'tenuous' },
      { key: 'C', text: 'tentative' },
      { key: 'D', text: 'tangible' },
    ],
    correctKey: 'B',
    explanation:
      '"tenuous" は「（つながりや根拠が）薄弱な、こじつけの」という意味で、偶然によるものに過ぎないという文脈に最適。tedious（退屈な）、tentative（暫定的な）、tangible（有形の、明白な）はいずれも文脈に合わない。\n\ntenuous は「（つながりや根拠が）薄弱な、細い」で、link、connection、grasp、evidence と結びつく。based more on coincidence than on any real cause という後半が、根拠の弱さを説明している。\n\n【図解】t で始まる形容詞\n　語｜意味｜評価\n　tenuous｜薄弱な, か細い｜根拠が弱い\n　tentative｜暫定的な｜まだ確定しない\n　tangible｜有形の, 具体的な｜はっきりしている\n　⇒ 偶然に基づく関連なら tenuous\n　⚠ tentative は「仮の」で、根拠の弱さではなく確定していない状態を指す。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_066',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The company reported ( ) growth last quarter, far exceeding anything seen in its thirty-year history.',
    choices: [
      { key: 'A', text: 'unprecedented' },
      { key: 'B', text: 'undisclosed' },
      { key: 'C', text: 'undesirable' },
      { key: 'D', text: 'unfounded' },
    ],
    correctKey: 'A',
    explanation:
      '"unprecedented growth" は「前例のない成長」という意味で、過去30年間で最大の成長を表す文脈に最適。undisclosed（未公開の）、undesirable（望ましくない）、unfounded（根拠のない）はいずれも文脈に合わない。\n\nunprecedented は「前例のない」で、precedent（先例）に un- と -ed が付いた形。growth、levels、crisis、scale と結びつき、記録を塗り替える事態を表す。far exceeding anything seen in its history という記述が根拠になる。\n\n【図解】un で始まる形容詞\n　語｜意味｜使う場面\n　unprecedented｜前例のない｜記録的な成長, 危機\n　undisclosed｜未公開の｜金額, 条件\n　unfounded｜根拠のない｜うわさ, 非難\n　⇒ 30年で最大の成長なら unprecedented\n　⚠ undesirable は「望ましくない」で規模の話ではない。評価と規模を混同しない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_067',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Engineers are exploring whether solar power is a ( ) alternative to fossil fuels for this remote region.',
    choices: [
      { key: 'A', text: 'viable' },
      { key: 'B', text: 'valid' },
      { key: 'C', text: 'vigorous' },
      { key: 'D', text: 'vacant' },
    ],
    correctKey: 'A',
    explanation:
      '"viable alternative" は「実行可能な代替案」という意味の定番コロケーション。validは「（論理・書類などが）正当な」、vigorousは「活発な」、vacantは「空いている」でいずれも文脈に合わない。\n\nviable は「実行可能な、成り立つ」で、alternative、option、solution、business と結びつく。技術的にも経済的にも成り立つかどうかを問う語で、代替エネルギーの議論で頻出する。\n\n【図解】v で始まる形容詞の使い分け\n　語｜意味｜判断の軸\n　viable｜実行可能な｜成り立つかどうか\n　valid｜正当な, 有効な｜論理や書類の妥当性\n　vigorous｜活発な, 力強い｜勢い\n　⇒ 代替案が成り立つかを問うなら viable\n　⚠ valid は論理や証明書の有効性。実現可能性を問う文脈では viable を使う。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_068',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Years of careful negotiation finally ( ) in a landmark peace agreement between the two nations.',
    choices: [
      { key: 'A', text: 'culminated' },
      { key: 'B', text: 'cultivated' },
      { key: 'C', text: 'circulated' },
      { key: 'D', text: 'calculated' },
    ],
    correctKey: 'A',
    explanation:
      '"culminate in" は「最終的に〜という結果に至る」という意味で、長い交渉の末に達成された成果を表す文脈に最適。cultivate（育成する）、circulate（循環させる）、calculate（計算する）はいずれも文脈に合わない。\n\nculminate in 〜 は「最終的に〜に至る」で、長い過程の頂点として結果が現れることを表す。前置詞は in で固定。Years of careful negotiation という長期の積み重ねと、landmark agreement という到達点を結ぶ動詞である。\n\n【図解】c で始まる紛らわしい動詞\n　語｜意味｜前置詞\n　culminate｜最終的に〜に至る｜in\n　cultivate｜育成する, 耕す｜（他動詞）\n　circulate｜循環させる, 広める｜（他動詞, 自動詞）\n　⇒ 交渉の末に合意に至ったなら culminated in\n　⚠ culminate に with は続かない。前置詞 in まで含めて覚える。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_069',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Trained art experts can often ( ) subtle differences between an original painting and a skillful forgery.',
    choices: [
      { key: 'A', text: 'discern' },
      { key: 'B', text: 'disclose' },
      { key: 'C', text: 'discard' },
      { key: 'D', text: 'discourage' },
    ],
    correctKey: 'A',
    explanation:
      '"discern subtle differences" は「微妙な違いを見分ける」という意味で、専門家の鋭い観察力を表す文脈に最適。disclose（暴露する）、discard（捨てる）、discourage（落胆させる）はいずれも文脈に合わない。\n\ndiscern は「（見分けにくいものを）識別する、見分ける」で、difference、pattern、shape、meaning を目的語にとる。訓練を積んだ専門家が微妙な差を見抜くという文脈で使われる硬めの語である。\n\n【図解】dis で始まる動詞\n　語｜意味｜典型目的語\n　discern｜見分ける｜difference, pattern\n　disclose｜開示する, 暴露する｜information, identity\n　discard｜捨てる｜data, old items\n　⇒ 本物と精巧な贋作を見分けるなら discern\n　⚠ discourage は「思いとどまらせる」で識別とは無関係。dis- の語をまとめて整理する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_070',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Even under intense questioning, the spokesperson was able to ( ) the company\'s position clearly and confidently.',
    choices: [
      { key: 'A', text: 'articulate' },
      { key: 'B', text: 'arbitrate' },
      { key: 'C', text: 'accumulate' },
      { key: 'D', text: 'appreciate' },
    ],
    correctKey: 'A',
    explanation:
      '"articulate a position" は「立場を明確に表現する」という意味で、厳しい質問の中でも明確に説明できたという文脈に最適。arbitrate（仲裁する）、accumulate（蓄積する）、appreciate（感謝する、理解する）はいずれも文脈に合わない。\n\narticulate は動詞で「（考えや立場を）明確に言葉にする」、形容詞では「はっきり話せる」の意味。position、view、concerns、vision を目的語にとる。厳しい質問の中でも筋道立てて説明できた、という文脈に合う。\n\n【図解】a で始まる動詞\n　語｜意味｜典型目的語\n　articulate｜明確に述べる｜position, concerns\n　arbitrate｜仲裁する｜dispute\n　accumulate｜蓄積する｜wealth, data\n　⇒ 会社の立場を明確に説明するなら articulate\n　⚠ appreciate は「理解する, 感謝する」で、説明する行為ではない。理解と表現を区別する。',
    difficulty: 'standard',
  },

  // ── GRAMMAR 71–85 ────────────────────────────────────────────────
  {
    id: 'eiken_2kyu_071',
    level: '2kyu',
    category: 'grammar',
    question:
      'So exhausted ( ) the climbers that they decided to set up camp two hours earlier than planned.',
    choices: [
      { key: 'A', text: 'were' },
      { key: 'B', text: 'did' },
      { key: 'C', text: 'had' },
      { key: 'D', text: 'have' },
    ],
    correctKey: 'A',
    explanation:
      '"So + 形容詞 + be動詞 + 主語 ... that ..." は倒置構文で、「非常に〜だったので…」という結果を強調する。主語 the climbers（複数）に対応するbe動詞 were が正しい。did・had・haveは形容詞 exhausted を補語として続ける倒置には使わない。\n\n【図解】So と Such の倒置構文\n　構文｜語順｜例\n　So ＋ 形容詞 ＋ be ＋ 主語 that｜形容詞が前｜So exhausted were they that\n　Such ＋ be ＋ 主語 that｜名詞が後ろ｜Such was the storm that\n　通常の語順｜主語 ＋ be ＋ so 形容詞 that｜They were so exhausted that\n　⇒ 主語が複数の過去なら were\n　⚠ 補語が形容詞の倒置に did は使えない。be 動詞をそのまま前に出す。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_072',
    level: '2kyu',
    category: 'grammar',
    question:
      'The committee insists that the budget report ( ) revised before it is presented to shareholders.',
    choices: [
      { key: 'A', text: 'is' },
      { key: 'B', text: 'be' },
      { key: 'C', text: 'was' },
      { key: 'D', text: 'will be' },
    ],
    correctKey: 'B',
    explanation:
      '"insist that + 主語 + 動詞原形" は仮定法現在の構文。受動態の原形は "be + 過去分詞" となるため be revised が正しい。is・was・will be はいずれも直説法の時制で、insistが要求する仮定法現在には合わない。\n\ninsist、demand、require、request、recommend などが that 節をとると、節内の動詞は原形になる仮定法現在の形をとる。受動態にする場合は be ＋ 過去分詞 の形になり、時制の影響を受けない。\n\n【図解】仮定法現在の受動態\n　能動｜受動｜例\n　主語 ＋ 原形｜主語 ＋ be ＋ 過去分詞｜be revised\n　三単現の s｜付けない｜he submit\n　should の省略｜should ＋ 原形も可｜should be revised\n　⇒ insists that の後ろは be revised\n　⚠ is revised と直説法にしない。要求や提案の that 節は時制に左右されない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_073',
    level: '2kyu',
    category: 'grammar',
    question:
      'Little ( ) that her presentation would later be cited in dozens of academic papers.',
    choices: [
      { key: 'A', text: 'she did know' },
      { key: 'B', text: 'she knew' },
      { key: 'C', text: 'did she know' },
      { key: 'D', text: 'knew she' },
    ],
    correctKey: 'C',
    explanation:
      '"Little" が否定的な意味を持つ副詞として文頭に置かれると倒置が起こる。"Little did + 主語 + 動詞原形" で「〜とは全く知らなかった」という意味になる。she did know・she knew・knew she はいずれも正しい倒置の語順ではない。\n\nLittle は「ほとんど〜ない」という否定の意味を持つ副詞で、文頭に置かれると倒置が起こる。Little did she know that 〜 で「〜とは彼女は夢にも思わなかった」という決まった言い回しになり、物語文でよく使われる。\n\n【図解】否定副詞の倒置\n　文頭の語｜意味｜主節の形\n　Little｜ほとんど〜ない｜did ＋ 主語 ＋ 原形\n　Never｜決して〜ない｜did ＋ 主語 ＋ 原形\n　Seldom｜めったに〜ない｜does ＋ 主語 ＋ 原形\n　⇒ Little の後ろは did she know\n　⚠ she knew と通常の語順にしない。否定副詞が文頭なら必ず倒置する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_074',
    level: '2kyu',
    category: 'grammar',
    question:
      'The novel, ( ) plot twists kept readers guessing until the final page, became an instant bestseller.',
    choices: [
      { key: 'A', text: 'who' },
      { key: 'B', text: 'which' },
      { key: 'C', text: 'whose' },
      { key: 'D', text: 'that' },
    ],
    correctKey: 'C',
    explanation:
      '先行詞 the novel（物）に対して所有格の関係代名詞 whose を使い、"whose plot twists"（その小説の意外な展開）とする。who は人に使う所有格ではなく主格・目的格、which・that は名詞を直接所有する形にならない。\n\nwhose は所有格の関係代名詞で、先行詞が人でも物でも使える。whose plot twists は the novel の plot twists（その小説の筋の展開）を表す。関係詞の直後に無冠詞の名詞が続いているかどうかが見分けの決め手になる。\n\n【図解】関係代名詞の格\n　格｜人｜物\n　主格｜who, that｜which, that\n　目的格｜whom, that｜which, that\n　所有格｜whose｜whose\n　⇒ 関係詞の直後に名詞が続くなら whose\n　⚠ 物が先行詞でも所有格は whose。which の所有格として of which もあるが語順が変わる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_075',
    level: '2kyu',
    category: 'grammar',
    question:
      'By the time the final guests arrive tonight, the caterers ( ) preparing the banquet hall for over six hours.',
    choices: [
      { key: 'A', text: 'will have been' },
      { key: 'B', text: 'have been' },
      { key: 'C', text: 'had been' },
      { key: 'D', text: 'were' },
    ],
    correctKey: 'A',
    explanation:
      '"By the time + 現在形" の節に対して、未来のある時点までの継続を表すには未来完了進行形 "will have been + 〜ing" を使う。「今夜ゲストが到着する頃には、6時間以上準備を続けていることになる」という未来の継続を示す。\n\nBy the time 〜 の節では未来のことでも現在形を使う。主節はその時点までの継続を表すため、未来完了進行形 will have been ＋ doing を用いる。for over six hours という継続の期間表現が手がかりになる。\n\n【図解】完了形の使い分け\n　形｜表す内容｜目印の語句\n　will have been doing｜未来のある時点までの継続｜by the time, for 〜\n　will have done｜未来のある時点までの完了｜by next year\n　had been doing｜過去のある時点までの継続｜by the time 過去形\n　⇒ 未来の時点までの6時間の継続なら will have been\n　⚠ By the time の節を will で書かない。時を表す副詞節では未来も現在形で表す。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_076',
    level: '2kyu',
    category: 'grammar',
    question:
      'The board members were divided over the merger; some favored it enthusiastically, ( ) others remained firmly opposed.',
    choices: [
      { key: 'A', text: 'so' },
      { key: 'B', text: 'while' },
      { key: 'C', text: 'because' },
      { key: 'D', text: 'unless' },
    ],
    correctKey: 'B',
    explanation:
      '"while" は「一方で」という対比を表す接続詞で、賛成派と反対派に分かれた状況を対照的に示す文脈に最適。so（だから）は因果関係、because（なぜなら）は理由、unless（〜しない限り）は条件を表し、いずれも対比のニュアンスを表せない。\n\nwhile は「〜する一方で」という対比を表す接続詞で、二つの立場を並べるときに使う。ここでは賛成派と反対派という対立を示している。while には「〜する間に」という時の用法や「〜だけれども」という譲歩の用法もある。\n\n【図解】while の3つの用法\n　用法｜意味｜見分け方\n　対比｜一方で｜前後で立場が対立\n　時｜〜する間に｜進行中の動作\n　譲歩｜〜だけれども｜though に置き換え可\n　⇒ 賛成派と反対派を並べるなら対比の while\n　⚠ so は結果、because は理由を表す。対比の文脈では因果の接続詞を選ばない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_077',
    level: '2kyu',
    category: 'grammar',
    question:
      'The professor would rather the students ( ) their essays a week before the deadline to allow time for revisions.',
    choices: [
      { key: 'A', text: 'submit' },
      { key: 'B', text: 'submitted' },
      { key: 'C', text: 'will submit' },
      { key: 'D', text: 'to submit' },
    ],
    correctKey: 'B',
    explanation:
      '"would rather + 主語 + 過去形" は「（他の誰かに）〜してほしいのだが」という仮定法過去の構文で、現在または未来の願望を表す。submitは原形（主語+would ratherの構文ではない場合）、will submit・to submitはこの構文に合わない。\n\nwould rather ＋ 主語 ＋ 過去形 は「（相手に）〜してほしいのだが」という願望を表す仮定法の構文で、現在または未来のことでも動詞は過去形になる。主語が続かない場合は would rather ＋ 動詞の原形 で「むしろ〜したい」となる。\n\n【図解】would rather の2つの形\n　形｜意味｜動詞の形\n　would rather do｜自分が〜したい｜原形\n　would rather 主語 過去形｜相手に〜してほしい｜過去形\n　would rather 主語 had done｜〜してほしかった｜過去完了\n　⇒ 学生に提出してほしいなら submitted\n　⚠ 主語が続くのに原形 submit を選ばない。主語の有無で動詞の形が変わる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_078',
    level: '2kyu',
    category: 'grammar',
    question:
      'Such was the intensity of the storm ( ) several coastal towns had to be evacuated overnight.',
    choices: [
      { key: 'A', text: 'so' },
      { key: 'B', text: 'as' },
      { key: 'C', text: 'that' },
      { key: 'D', text: 'which' },
    ],
    correctKey: 'C',
    explanation:
      '"Such + be動詞 + 主語 + that ..." は倒置構文で「〜は非常に…だったので」という結果を強調する。この構文では that が必須であり、so・as・which はこの特定の倒置パターンでは使えない。\n\nSuch ＋ be 動詞 ＋ 主語 ＋ that ... は「〜は非常に…なので」という結果を強調する倒置構文。Such was the intensity of the storm that 〜 は The intensity of the storm was such that 〜 と同じ意味で、that 以下が結果を述べる。\n\n【図解】結果を導く強調構文\n　構文｜語順｜結果を導く語\n　Such ＋ be ＋ 主語｜名詞が主語｜that\n　So ＋ 形容詞 ＋ be ＋ 主語｜形容詞が前｜that\n　so 〜 that｜通常語順｜that\n　⇒ Such was 〜 の結果節は that\n　⚠ as や which では結果を導けない。この構文では that が必須。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_079',
    level: '2kyu',
    category: 'grammar',
    question:
      'The contract stipulates that payment ( ) in full within thirty days of the invoice date.',
    choices: [
      { key: 'A', text: 'is made' },
      { key: 'B', text: 'be made' },
      { key: 'C', text: 'will be made' },
      { key: 'D', text: 'was made' },
    ],
    correctKey: 'B',
    explanation:
      '"stipulate that + 主語 + 動詞原形" は法律・契約文書でよく使われる仮定法現在の構文。受動態の原形は "be + 過去分詞" となるため be made が正しい。is made・will be made・was madeはいずれも直説法で、stipulateが要求する仮定法現在の形にならない。\n\n【図解】仮定法現在をとる動詞\n　動詞｜意味｜that 節の動詞\n　stipulate｜規定する｜原形\n　require｜要求する｜原形\n　recommend｜勧める｜原形\n　⇒ 受動態なら be made\n　⚠ 契約文書でも時制の一致は起きない。will be made と未来形にしない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_080',
    level: '2kyu',
    category: 'grammar',
    question:
      'Not only ( ) the deadline, but she also exceeded every expectation the client had set for the project.',
    choices: [
      { key: 'A', text: 'she met' },
      { key: 'B', text: 'did she meet' },
      { key: 'C', text: 'she did meet' },
      { key: 'D', text: 'meet she did' },
    ],
    correctKey: 'B',
    explanation:
      '"Not only" が文頭に置かれると倒置が生じる。"Not only did + 主語 + 動詞原形 ..., but also ..." が正しい構造で、"did she meet" となる。she met・she did meet・meet she did はいずれも正しい倒置の語順ではない。\n\n【図解】Not only の倒置\n　文頭の要素｜主節の語順｜後半の形\n　Not only ＋ 一般動詞｜did ＋ 主語 ＋ 原形｜but also\n　Not only ＋ be 動詞｜is または was ＋ 主語｜but also\n　Not only ＋ 助動詞｜can など ＋ 主語｜but also\n　⇒ 一般動詞 meet なら did she meet\n　⚠ she did meet は強調の do であって倒置ではない。語順が入れ替わっているか確認する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_081',
    level: '2kyu',
    category: 'grammar',
    question:
      'The researchers acknowledged the limitations of their study, ( ) casting doubt on the broader conclusions they had drawn.',
    choices: [
      { key: 'A', text: 'thereby' },
      { key: 'B', text: 'therefore' },
      { key: 'C', text: 'nonetheless' },
      { key: 'D', text: 'otherwise' },
    ],
    correctKey: 'A',
    explanation:
      '"thereby" は「それによって、その結果として」という意味で、分詞構文 casting doubt を導く副詞として機能する。therefore（それゆえ）は独立した文の接続に使うことが多く、この分詞構文の直前には不自然。nonetheless（それにもかかわらず）、otherwise（さもなければ）は文意に合わない。\n\n【図解】接続副詞と分詞構文\n　語｜品詞｜置ける位置\n　thereby｜副詞｜分詞構文の直前\n　therefore｜接続副詞｜文頭, 主語の前後\n　nonetheless｜接続副詞｜文頭, 文末\n　⇒ casting doubt という分詞の前なら thereby\n　⚠ therefore は独立した節をつなぐ語。分詞構文の直前に置くと不自然になる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_082',
    level: '2kyu',
    category: 'grammar',
    question:
      'The new policy, ( ) beneficial in theory, has proven extremely difficult to implement in practice.',
    choices: [
      { key: 'A', text: 'despite' },
      { key: 'B', text: 'while' },
      { key: 'C', text: 'because of' },
      { key: 'D', text: 'due to' },
    ],
    correctKey: 'B',
    explanation:
      '"while + 形容詞" は分詞構文的に「〜ではあるが」という譲歩を表す省略構文（while it is beneficial の it is が省略された形）。despite・because of・due to は前置詞句であり、直後に形容詞を単独で続けることはできない。\n\nwhile ＋ 形容詞 は while it is ＋ 形容詞 の主語と be 動詞を省略した形で、「〜ではあるが」という譲歩を表す。although や though も同じ省略が可能だが、despite や due to は前置詞なので形容詞を直接続けられない。\n\n【図解】譲歩表現の後ろに来る形\n　語｜品詞｜後ろに来るもの\n　while, although｜接続詞｜節, 形容詞（省略形）\n　despite, in spite of｜前置詞｜名詞, 動名詞\n　because of, due to｜前置詞｜名詞\n　⇒ 直後が形容詞なら接続詞の while\n　⚠ despite の後ろに形容詞は置けない。前置詞と接続詞の区別が決め手になる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_083',
    level: '2kyu',
    category: 'grammar',
    question:
      'It is high time the government ( ) concrete measures to address the housing crisis.',
    choices: [
      { key: 'A', text: 'takes' },
      { key: 'B', text: 'will take' },
      { key: 'C', text: 'took' },
      { key: 'D', text: 'has taken' },
    ],
    correctKey: 'C',
    explanation:
      '"It is high time + 主語 + 過去形" は「もうとっくに〜すべき時だ」という仮定法過去を使う慣用構文で、現在の状況に対する強い不満や催促を表す。takes・will take・has taken はこの構文の後には使えない。\n\nIt is high time ＋ 主語 ＋ 過去形 は「もうとっくに〜してよい頃だ」という仮定法過去の慣用構文で、現状への不満や催促を含む。high の代わりに about を使う It is about time も同じ働きをする。\n\n【図解】time を使う仮定法構文\n　構文｜意味｜動詞の形\n　It is time 主語 過去形｜そろそろ〜する時だ｜過去形\n　It is high time 主語 過去形｜とっくに〜すべき時だ｜過去形\n　It is time to do｜〜する時間だ｜不定詞\n　⇒ 政府への催促なら took\n　⚠ takes と現在形にしない。仮定法なので形は過去でも内容は現在のこと。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_084',
    level: '2kyu',
    category: 'grammar',
    question:
      'The applicant was rejected, ( ) her impressive qualifications and years of relevant experience.',
    choices: [
      { key: 'A', text: 'despite' },
      { key: 'B', text: 'although' },
      { key: 'C', text: 'even though' },
      { key: 'D', text: 'while' },
    ],
    correctKey: 'A',
    explanation:
      '"despite" は前置詞で、後に名詞句（her impressive qualifications）を直接続けることができる。although・even though・while は接続詞であり、後には主語と動詞を含む節が必要なため、名詞句だけを続けることはできない。\n\ndespite は前置詞で、後ろには名詞句か動名詞が来る。although、even though、while は接続詞なので、後ろには主語と動詞を含む節が必要になる。空所の後ろが名詞句だけであることが決め手になる。\n\n【図解】譲歩を表す語の品詞\n　語｜品詞｜後ろに来るもの\n　despite, in spite of｜前置詞｜名詞, 動名詞\n　although, though｜接続詞｜主語 ＋ 動詞\n　even though｜接続詞｜主語 ＋ 動詞\n　⇒ 後ろが名詞句なら despite\n　⚠ despite of という形は誤り。in spite of には of が必要で、despite には不要。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_085',
    level: '2kyu',
    category: 'grammar',
    question:
      'The evacuation plan, ( ) drafted years ago, was finally put to the test during last month\'s earthquake.',
    choices: [
      { key: 'A', text: 'first' },
      { key: 'B', text: 'firstly' },
      { key: 'C', text: 'at first' },
      { key: 'D', text: 'firstborn' },
    ],
    correctKey: 'A',
    explanation:
      '"first drafted" は「最初に起草された」という意味で、過去分詞 drafted を修飾する副詞として first を使う。firstly は文全体を修飾する列挙の副詞（Firstly, ... Secondly, ...）で単独の分詞修飾には不自然。at first（最初のうちは）は対比を含意し文意に合わない。firstborn（第一子の）は形容詞・名詞で無関係。\n\n【図解】first 系の副詞の使い分け\n　語｜働き｜例\n　first｜動詞や分詞を修飾する｜first drafted\n　firstly｜列挙の順序を示す｜Firstly, Secondly\n　at first｜最初のうちは｜対比を含む\n　⇒ 過去分詞 drafted を修飾するなら first\n　⚠ at first は後で状況が変わる含みを持つ。単なる時間の先後には first を使う。',
    difficulty: 'advanced',
  },

  // ── READING 86–100 ───────────────────────────────────────────────
  // Passage 6 (Q86–88): Urban heat islands
  {
    id: 'eiken_2kyu_086',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Cities around the world are experiencing what scientists call the "urban heat island" effect, a phenomenon in which built-up areas become significantly warmer than their rural surroundings. This temperature difference arises primarily because concrete, asphalt, and other construction materials absorb and retain heat far more effectively than natural vegetation. During the day, these surfaces soak up solar radiation; at night, they slowly release it, preventing the air from cooling as it would in a forest or field. The consequences extend beyond simple discomfort: elevated urban temperatures increase electricity demand for air conditioning, worsen air quality by accelerating the formation of ground-level ozone, and disproportionately endanger elderly residents and those without access to cooling systems during heat waves. Urban planners have proposed several countermeasures, including the installation of reflective "cool roofs," the expansion of tree canopy coverage, and the use of lighter-colored pavement that reflects rather than absorbs sunlight. While these interventions have shown promise in pilot projects, implementing them citywide requires substantial investment that many municipal governments have been slow to allocate.

According to the passage, what is the primary cause of the urban heat island effect?`,
    choices: [
      {
        key: 'A',
        text: 'Increased air conditioning use during summer months',
      },
      {
        key: 'B',
        text: 'The tendency of construction materials to absorb and retain heat',
      },
      {
        key: 'C',
        text: 'A general rise in global temperatures caused by climate change',
      },
      {
        key: 'D',
        text: 'The removal of reflective cool roofs from most buildings',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "This temperature difference arises primarily because concrete, asphalt, and other construction materials absorb and retain heat far more effectively than natural vegetation" と明記されている。Bがこれと一致する。Aは結果であって原因ではない。Cは一般論で本文の主旨と異なる。Dは対策として提案されているものであり、原因ではない。\n\n【図解】都市の高温化の原因と結果\n　項目｜本文の記述｜位置づけ\n　コンクリートやアスファルト｜熱を吸収し保持しやすい｜原因\n　植生の少なさ｜自然の冷却効果が失われる｜原因\n　周辺より高い気温｜heat island 現象｜結果\n　⇒ 建材の蓄熱性が原因だと読み取る\n　⚠ 結果を原因として選ばない。設問が原因を問うのか結果を問うのかを確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_087',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Cities around the world are experiencing what scientists call the "urban heat island" effect, a phenomenon in which built-up areas become significantly warmer than their rural surroundings. This temperature difference arises primarily because concrete, asphalt, and other construction materials absorb and retain heat far more effectively than natural vegetation. During the day, these surfaces soak up solar radiation; at night, they slowly release it, preventing the air from cooling as it would in a forest or field. The consequences extend beyond simple discomfort: elevated urban temperatures increase electricity demand for air conditioning, worsen air quality by accelerating the formation of ground-level ozone, and disproportionately endanger elderly residents and those without access to cooling systems during heat waves. Urban planners have proposed several countermeasures, including the installation of reflective "cool roofs," the expansion of tree canopy coverage, and the use of lighter-colored pavement that reflects rather than absorbs sunlight. While these interventions have shown promise in pilot projects, implementing them citywide requires substantial investment that many municipal governments have been slow to allocate.

In the passage, the phrase "disproportionately endanger" most nearly means:`,
    choices: [
      { key: 'A', text: 'put at unusually high risk compared to others' },
      { key: 'B', text: 'completely eliminate the risk for' },
      { key: 'C', text: 'slightly reduce the danger faced by' },
      { key: 'D', text: 'have no measurable effect on' },
    ],
    correctKey: 'A',
    explanation:
      '"disproportionately" は「不釣り合いに、他と比べて過度に」という意味で、高齢者や冷房を使えない人々が他の人々よりも大きな危険にさらされることを表す。Aの「他と比べて異常に高いリスクにさらす」が最も正確。B・C・Dは意味が逆または過度に単純化されている。\n\ndisproportionately は proportion（割合）に由来し、「他と比べて不釣り合いなほど」という意味を表す副詞。本文では高齢者や冷房を使えない人々が、他の層より著しく大きい危険にさらされていることを示している。\n\n【図解】disproportionately の意味\n　語の構成｜意味｜文脈での含み\n　dis ＋ proportion｜均衡を欠く｜偏った影響\n　affect disproportionately｜偏って影響する｜特定層に集中\n　equally｜等しく｜（対になる語）\n　⇒ 他と比べて異常に高いリスク、と読む\n　⚠ 「わずかに減らす」「影響がない」と正反対に読み替えない。dis- は否定ではなく不均衡を示す。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_088',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Cities around the world are experiencing what scientists call the "urban heat island" effect, a phenomenon in which built-up areas become significantly warmer than their rural surroundings. This temperature difference arises primarily because concrete, asphalt, and other construction materials absorb and retain heat far more effectively than natural vegetation. During the day, these surfaces soak up solar radiation; at night, they slowly release it, preventing the air from cooling as it would in a forest or field. The consequences extend beyond simple discomfort: elevated urban temperatures increase electricity demand for air conditioning, worsen air quality by accelerating the formation of ground-level ozone, and disproportionately endanger elderly residents and those without access to cooling systems during heat waves. Urban planners have proposed several countermeasures, including the installation of reflective "cool roofs," the expansion of tree canopy coverage, and the use of lighter-colored pavement that reflects rather than absorbs sunlight. While these interventions have shown promise in pilot projects, implementing them citywide requires substantial investment that many municipal governments have been slow to allocate.

What obstacle to addressing the urban heat island effect does the passage identify?`,
    choices: [
      {
        key: 'A',
        text: 'Scientists have not yet identified any effective countermeasures.',
      },
      {
        key: 'B',
        text: 'Reflective roofs and lighter pavement have failed in every pilot project tested.',
      },
      {
        key: 'C',
        text: 'Citywide implementation demands funding that many local governments have been reluctant to provide.',
      },
      {
        key: 'D',
        text: 'Residents have widely opposed the installation of cool roofs in their neighborhoods.',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージ末尾に "implementing them citywide requires substantial investment that many municipal governments have been slow to allocate" とあり、資金投入の遅れが課題として挙げられている。Cがこれに一致する。Aは対策が提案されている点と矛盾。Bは「pilot projects have shown promise」と矛盾。Dはパッセージに記載がない。\n\n【図解】対策の実施を阻む要因\n　段階｜本文の記述｜評価\n　試験的な取り組み｜pilot projects have shown promise｜効果あり\n　市全域への展開｜requires substantial investment｜費用が課題\n　自治体の対応｜slow to allocate｜資金配分が遅い\n　⇒ 資金投入の遅れが最大の課題\n　⚠ 効果が確認されている点を否定する選択肢は本文と矛盾。部分的な成功を見落とさない。',
    difficulty: 'advanced',
  },

  // Passage 7 (Q89–91): The economics of streaming services
  {
    id: 'eiken_2kyu_089',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The rise of subscription-based streaming services has fundamentally reshaped how consumers access music, television, and film. Initially, these platforms attracted subscribers by offering vast libraries of content for a single, relatively low monthly fee, a proposition that seemed far more economical than purchasing individual albums, DVDs, or cable packages. However, as competition intensified, media companies increasingly withdrew their content from shared platforms to launch proprietary services of their own, fragmenting the market and forcing consumers to subscribe to multiple services to access the content they wanted. This fragmentation has gradually eroded the original cost advantage of streaming, with some households now spending more on a combination of subscriptions than they once paid for traditional cable television. Industry analysts note a related trend known as "subscription fatigue," in which consumers, overwhelmed by the number of services demanding monthly payments, begin canceling subscriptions or reverting to less convenient means of accessing content, including piracy. Streaming companies have responded by introducing tiered pricing models, bundling deals, and advertising-supported plans in an effort to retain price-sensitive customers.

According to the passage, what has caused the fragmentation of the streaming market?`,
    choices: [
      {
        key: 'A',
        text: 'Media companies removing their content to create their own separate platforms',
      },
      {
        key: 'B',
        text: 'Government regulations requiring companies to limit the size of their content libraries',
      },
      {
        key: 'C',
        text: 'A sharp decline in the overall demand for streaming services',
      },
      {
        key: 'D',
        text: 'Consumers demanding that companies offer more advertising-supported plans',
      },
    ],
    correctKey: 'A',
    explanation:
      'パッセージに "media companies increasingly withdrew their content from shared platforms to launch proprietary services of their own, fragmenting the market" とあり、コンテンツの引き上げと独自サービスの立ち上げが市場の分断を招いたと述べられている。Aがこれに一致する。B・C・Dはパッセージに記載がない。\n\n【図解】配信市場が分断された流れ\n　段階｜本文の記述｜結果\n　1｜各社が共有基盤から作品を引き上げる｜withdrew content\n　2｜独自サービスを立ち上げる｜proprietary services\n　3｜市場が細分化する｜fragmenting the market\n　⇒ コンテンツの引き上げと独自展開が原因\n　⚠ 本文に書かれていない理由を推測で補わない。因果は本文中の語句で確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_090',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The rise of subscription-based streaming services has fundamentally reshaped how consumers access music, television, and film. Initially, these platforms attracted subscribers by offering vast libraries of content for a single, relatively low monthly fee, a proposition that seemed far more economical than purchasing individual albums, DVDs, or cable packages. However, as competition intensified, media companies increasingly withdrew their content from shared platforms to launch proprietary services of their own, fragmenting the market and forcing consumers to subscribe to multiple services to access the content they wanted. This fragmentation has gradually eroded the original cost advantage of streaming, with some households now spending more on a combination of subscriptions than they once paid for traditional cable television. Industry analysts note a related trend known as "subscription fatigue," in which consumers, overwhelmed by the number of services demanding monthly payments, begin canceling subscriptions or reverting to less convenient means of accessing content, including piracy. Streaming companies have responded by introducing tiered pricing models, bundling deals, and advertising-supported plans in an effort to retain price-sensitive customers.

In the passage, "subscription fatigue" refers to:`,
    choices: [
      {
        key: 'A',
        text: 'a technical problem that prevents subscriptions from renewing automatically',
      },
      {
        key: 'B',
        text: 'the exhaustion consumers feel from being asked to pay for too many separate services',
      },
      {
        key: 'C',
        text: 'a marketing strategy used by companies to attract new subscribers',
      },
      {
        key: 'D',
        text: 'the declining quality of content offered on streaming platforms',
      },
    ],
    correctKey: 'B',
    explanation:
      '"subscription fatigue" は「consumers, overwhelmed by the number of services demanding monthly payments」と説明されており、多数のサブスクリプション料金に消費者が疲弊する状態を指す。Bがこれに一致する。A・C・Dはパッセージの定義と異なる。\n\n【図解】subscription fatigue の定義\n　要素｜本文の記述｜意味\n　対象｜consumers｜消費者\n　原因｜number of services demanding monthly payments｜毎月の支払いが多すぎる\n　状態｜overwhelmed｜疲弊している\n　⇒ 多数の月額サービスに嫌気がさす状態\n　⚠ 価格の高さそのものではなく契約数の多さが要因。定義は本文の語句に忠実に読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_091',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The rise of subscription-based streaming services has fundamentally reshaped how consumers access music, television, and film. Initially, these platforms attracted subscribers by offering vast libraries of content for a single, relatively low monthly fee, a proposition that seemed far more economical than purchasing individual albums, DVDs, or cable packages. However, as competition intensified, media companies increasingly withdrew their content from shared platforms to launch proprietary services of their own, fragmenting the market and forcing consumers to subscribe to multiple services to access the content they wanted. This fragmentation has gradually eroded the original cost advantage of streaming, with some households now spending more on a combination of subscriptions than they once paid for traditional cable television. Industry analysts note a related trend known as "subscription fatigue," in which consumers, overwhelmed by the number of services demanding monthly payments, begin canceling subscriptions or reverting to less convenient means of accessing content, including piracy. Streaming companies have responded by introducing tiered pricing models, bundling deals, and advertising-supported plans in an effort to retain price-sensitive customers.

How have streaming companies responded to the problem described in the passage?`,
    choices: [
      {
        key: 'A',
        text: 'By merging all of their services back into a single unified platform',
      },
      {
        key: 'B',
        text: 'By raising prices uniformly across all subscription tiers',
      },
      {
        key: 'C',
        text: 'By offering tiered pricing, bundles, and ad-supported options to keep budget-conscious customers',
      },
      {
        key: 'D',
        text: 'By removing all advertising from their platforms permanently',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージ末尾に "Streaming companies have responded by introducing tiered pricing models, bundling deals, and advertising-supported plans in an effort to retain price-sensitive customers" とあり、Cがこれに正確に一致する。A・B・Dはパッセージの内容と矛盾する。\n\n【図解】配信各社の対応策\n　施策｜内容｜狙い\n　tiered pricing｜段階的な料金プラン｜選択肢を増やす\n　bundling deals｜複数サービスの抱き合わせ｜割安感を出す\n　ad-supported plans｜広告付きの低価格プラン｜価格重視層の維持\n　⇒ 価格に敏感な顧客をつなぎとめる狙い\n　⚠ 値上げや撤退といった逆方向の選択肢を選ばない。本文は顧客維持策を列挙している。',
    difficulty: 'standard',
  },

  // Passage 8 (Q92–94): Bilingualism and the brain
  {
    id: 'eiken_2kyu_092',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

For decades, researchers debated whether growing up speaking two languages conferred any cognitive advantage, or whether, as some early studies suggested, it merely caused confusion and delayed language development in children. More recent research employing sophisticated brain-imaging techniques has largely overturned this earlier skepticism. Bilingual individuals, it turns out, must constantly manage two active language systems, suppressing one while using the other — a mental exercise that appears to strengthen the brain's executive control network, the system responsible for tasks such as switching attention, ignoring distractions, and holding multiple pieces of information in mind simultaneously. Some studies have even suggested that lifelong bilingualism may delay the onset of dementia symptoms by several years, though researchers caution that this finding remains under active investigation and may be influenced by other lifestyle factors, such as education level and social engagement. Critics of the "bilingual advantage" hypothesis argue that many of the original studies suffered from small sample sizes and failed to control adequately for socioeconomic differences between bilingual and monolingual participants, and that more rigorous replication is still needed before firm conclusions can be drawn.

According to the passage, what mental process is strengthened by managing two active language systems?`,
    choices: [
      {
        key: 'A',
        text: 'The brain\'s executive control network, involved in attention and multitasking',
      },
      {
        key: 'B',
        text: 'The region of the brain responsible for long-term memory storage',
      },
      {
        key: 'C',
        text: 'The part of the brain that processes visual information',
      },
      {
        key: 'D',
        text: 'The system that regulates emotional responses to stress',
      },
    ],
    correctKey: 'A',
    explanation:
      'パッセージに "a mental exercise that appears to strengthen the brain\'s executive control network, the system responsible for tasks such as switching attention, ignoring distractions, and holding multiple pieces of information in mind simultaneously" とある。Aがこれに一致する。B・C・Dはパッセージに記載されていない。\n\n【図解】二言語使用と実行制御機能\n　鍛えられる機能｜本文の記述｜具体例\n　注意の切り替え｜switching attention｜作業の切り替え\n　妨害の抑制｜ignoring distractions｜雑音を無視する\n　情報の同時保持｜holding multiple pieces of information｜複数の情報の保持\n　⇒ executive control network の強化が要点\n　⚠ 記憶力全般や知能の向上とは書かれていない。本文が挙げる機能に限定して読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_093',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

For decades, researchers debated whether growing up speaking two languages conferred any cognitive advantage, or whether, as some early studies suggested, it merely caused confusion and delayed language development in children. More recent research employing sophisticated brain-imaging techniques has largely overturned this earlier skepticism. Bilingual individuals, it turns out, must constantly manage two active language systems, suppressing one while using the other — a mental exercise that appears to strengthen the brain's executive control network, the system responsible for tasks such as switching attention, ignoring distractions, and holding multiple pieces of information in mind simultaneously. Some studies have even suggested that lifelong bilingualism may delay the onset of dementia symptoms by several years, though researchers caution that this finding remains under active investigation and may be influenced by other lifestyle factors, such as education level and social engagement. Critics of the "bilingual advantage" hypothesis argue that many of the original studies suffered from small sample sizes and failed to control adequately for socioeconomic differences between bilingual and monolingual participants, and that more rigorous replication is still needed before firm conclusions can be drawn.

What criticism do skeptics raise about early studies on the "bilingual advantage"?`,
    choices: [
      {
        key: 'A',
        text: 'The studies were conducted entirely by researchers with no training in neuroscience.',
      },
      {
        key: 'B',
        text: 'The studies often had small samples and did not properly account for socioeconomic differences.',
      },
      {
        key: 'C',
        text: 'The studies focused exclusively on elderly participants, ignoring children entirely.',
      },
      {
        key: 'D',
        text: 'The studies were funded by companies that sell language-learning software.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "many of the original studies suffered from small sample sizes and failed to control adequately for socioeconomic differences between bilingual and monolingual participants" とある。Bがこれに一致する。A・C・Dはパッセージに記載されていない。\n\n【図解】初期研究への批判\n　批判点｜本文の記述｜問題\n　標本の規模｜small sample sizes｜一般化できない\n　交絡要因｜failed to control for socioeconomic differences｜他の要因の影響\n　結論｜効果が過大評価された可能性｜再検証が必要\n　⇒ 標本の小ささと社会経済的差異の未統制が要点\n　⚠ 研究結果が完全に否定されたとは書かれていない。批判の内容と範囲を正確に読む。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_094',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

For decades, researchers debated whether growing up speaking two languages conferred any cognitive advantage, or whether, as some early studies suggested, it merely caused confusion and delayed language development in children. More recent research employing sophisticated brain-imaging techniques has largely overturned this earlier skepticism. Bilingual individuals, it turns out, must constantly manage two active language systems, suppressing one while using the other — a mental exercise that appears to strengthen the brain's executive control network, the system responsible for tasks such as switching attention, ignoring distractions, and holding multiple pieces of information in mind simultaneously. Some studies have even suggested that lifelong bilingualism may delay the onset of dementia symptoms by several years, though researchers caution that this finding remains under active investigation and may be influenced by other lifestyle factors, such as education level and social engagement. Critics of the "bilingual advantage" hypothesis argue that many of the original studies suffered from small sample sizes and failed to control adequately for socioeconomic differences between bilingual and monolingual participants, and that more rigorous replication is still needed before firm conclusions can be drawn.

Which of the following best summarizes the author's overall stance toward the "bilingual advantage" hypothesis?`,
    choices: [
      {
        key: 'A',
        text: 'The author is fully convinced that bilingualism provides guaranteed cognitive benefits to everyone.',
      },
      {
        key: 'B',
        text: 'The author dismisses the idea entirely as a myth with no scientific basis.',
      },
      {
        key: 'C',
        text: 'The author presents supporting evidence while also acknowledging valid scientific criticisms.',
      },
      {
        key: 'D',
        text: 'The author argues that only children, not adults, can benefit from bilingualism.',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージは初期研究への懐疑論を紹介した上で、より新しい研究による支持的な証拠を示し、さらに批判者の指摘も公平に取り上げている。Cが「支持する証拠と妥当な批判の両方を提示している」という著者の姿勢を最も正確に表す。A・B・Dはいずれも一方的すぎる。\n\nこの設問は筆者の論じ方を問うもの。初期研究への懐疑論を紹介したうえで新しい研究の支持的証拠を示し、さらに批判者の指摘も公平に取り上げるという構成から、両論を提示する均衡のとれた姿勢が読み取れる。\n\n【図解】本文の論の運び\n　段階｜内容｜筆者の扱い\n　初期研究｜二言語使用の利点を報告｜紹介\n　批判｜標本の小ささなどを指摘｜公平に提示\n　新しい研究｜支持する証拠を提示｜紹介\n　⇒ 支持する証拠と妥当な批判の両方を示す姿勢\n　⚠ 一方的に肯定または否定する選択肢は誤り。両論併記の構成を見落とさない。',
    difficulty: 'advanced',
  },

  // Passage 9 (Q95–97): The economics of vertical farming
  {
    id: 'eiken_2kyu_095',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Vertical farming — the practice of growing crops in stacked layers within climate-controlled indoor facilities — has been heralded by proponents as a solution to many of agriculture's most pressing challenges. By growing food indoors under artificial lighting and precisely regulated conditions, vertical farms can operate year-round regardless of external weather, use up to ninety percent less water than conventional farming through recirculating irrigation systems, and be located close to urban centers, dramatically reducing the distance food must travel before reaching consumers. Despite these advantages, the industry has struggled to achieve profitability at scale. The enormous energy costs associated with artificial lighting and climate control, combined with high labor and real estate expenses in urban areas, have pushed the production costs of vertically farmed produce well above those of traditionally grown crops. Several high-profile vertical farming startups that raised substantial venture capital have since filed for bankruptcy or significantly scaled back operations. Industry observers now suggest that vertical farming may prove economically viable only for high-value, fast-growing crops such as leafy greens and herbs, rather than as a wholesale replacement for traditional agriculture.

According to the passage, what is one advantage of vertical farming over conventional agriculture?`,
    choices: [
      {
        key: 'A',
        text: 'It requires significantly less water due to recirculating irrigation systems.',
      },
      {
        key: 'B',
        text: 'It has proven far more profitable than traditional farming methods.',
      },
      {
        key: 'C',
        text: 'It eliminates the need for any artificial lighting or climate control.',
      },
      {
        key: 'D',
        text: 'It has completely replaced traditional agriculture in most major cities.',
      },
    ],
    correctKey: 'A',
    explanation:
      'パッセージに "use up to ninety percent less water than conventional farming through recirculating irrigation systems" とある。Aがこれに一致する。Bは本文の「struggled to achieve profitability」と矛盾。Cは人工照明・気候制御が垂直農業の前提であり誤り。Dは誇張で本文に根拠がない。\n\n【図解】垂直農業の利点と課題\n　項目｜本文の記述｜評価\n　水の使用量｜最大90％削減｜利点\n　収益性｜struggled to achieve profitability｜課題\n　人工照明と気候制御｜前提となる設備｜コスト要因\n　⇒ 節水効果が明確な利点として挙げられている\n　⚠ 人工照明を不要とする選択肢は本文と矛盾。前提条件を否定する記述に注意。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu_096',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Vertical farming — the practice of growing crops in stacked layers within climate-controlled indoor facilities — has been heralded by proponents as a solution to many of agriculture's most pressing challenges. By growing food indoors under artificial lighting and precisely regulated conditions, vertical farms can operate year-round regardless of external weather, use up to ninety percent less water than conventional farming through recirculating irrigation systems, and be located close to urban centers, dramatically reducing the distance food must travel before reaching consumers. Despite these advantages, the industry has struggled to achieve profitability at scale. The enormous energy costs associated with artificial lighting and climate control, combined with high labor and real estate expenses in urban areas, have pushed the production costs of vertically farmed produce well above those of traditionally grown crops. Several high-profile vertical farming startups that raised substantial venture capital have since filed for bankruptcy or significantly scaled back operations. Industry observers now suggest that vertical farming may prove economically viable only for high-value, fast-growing crops such as leafy greens and herbs, rather than as a wholesale replacement for traditional agriculture.

Why have several vertical farming startups gone bankrupt, according to the passage?`,
    choices: [
      {
        key: 'A',
        text: 'They were unable to secure any venture capital investment.',
      },
      {
        key: 'B',
        text: 'High energy, labor, and real estate costs made production too expensive.',
      },
      {
        key: 'C',
        text: 'Consumers refused to purchase vegetables grown indoors.',
      },
      {
        key: 'D',
        text: 'Government regulations banned indoor farming in most regions.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "The enormous energy costs associated with artificial lighting and climate control, combined with high labor and real estate expenses in urban areas, have pushed the production costs of vertically farmed produce well above those of traditionally grown crops" とある。Bがこれに一致する。A・C・Dはパッセージに記載がない。\n\n【図解】生産コストが高くなる要因\n　要因｜本文の記述｜影響\n　人工照明と気候制御｜enormous energy costs｜電力費\n　都市部の人件費｜high labor expenses｜労務費\n　都市部の不動産費｜high real estate expenses｜地代\n　⇒ 3要因が重なって従来農法より割高になる\n　⚠ 単一の要因に絞った選択肢は不十分。本文が並列で挙げる要素をすべて確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_097',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Vertical farming — the practice of growing crops in stacked layers within climate-controlled indoor facilities — has been heralded by proponents as a solution to many of agriculture's most pressing challenges. By growing food indoors under artificial lighting and precisely regulated conditions, vertical farms can operate year-round regardless of external weather, use up to ninety percent less water than conventional farming through recirculating irrigation systems, and be located close to urban centers, dramatically reducing the distance food must travel before reaching consumers. Despite these advantages, the industry has struggled to achieve profitability at scale. The enormous energy costs associated with artificial lighting and climate control, combined with high labor and real estate expenses in urban areas, have pushed the production costs of vertically farmed produce well above those of traditionally grown crops. Several high-profile vertical farming startups that raised substantial venture capital have since filed for bankruptcy or significantly scaled back operations. Industry observers now suggest that vertical farming may prove economically viable only for high-value, fast-growing crops such as leafy greens and herbs, rather than as a wholesale replacement for traditional agriculture.

What conclusion do industry observers draw about the future of vertical farming?`,
    choices: [
      {
        key: 'A',
        text: 'It will likely replace all traditional farming within the next decade.',
      },
      {
        key: 'B',
        text: 'It may only be economically practical for certain high-value, quick-growing crops.',
      },
      {
        key: 'C',
        text: 'It will be banned in most countries due to its high energy consumption.',
      },
      {
        key: 'D',
        text: 'It has already proven more profitable than any other form of agriculture.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージ末尾に "vertical farming may prove economically viable only for high-value, fast-growing crops such as leafy greens and herbs, rather than as a wholesale replacement for traditional agriculture" とある。Bがこれに一致する。A・C・Dはパッセージの内容と矛盾または根拠がない。\n\n【図解】垂直農業が成り立つ条件\n　条件｜本文の記述｜作物の例\n　高付加価値｜high-value｜ハーブ\n　成長が速い｜fast-growing｜葉物野菜\n　全面的な置き換え｜否定されている｜穀物などは不向き\n　⇒ 特定の作物に限って経済的に成立する\n　⚠ 従来農業を全面的に置き換えるという選択肢は本文が明確に否定している。',
    difficulty: 'advanced',
  },

  // Passage 10 (Q98–100): The psychology of procrastination
  {
    id: 'eiken_2kyu_098',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Procrastination is often dismissed as a simple failure of time management or willpower, but psychological research suggests a more complex picture. Rather than being a purely rational miscalculation, chronic procrastination is increasingly understood as an emotion-regulation problem: people delay tasks not because they misjudge how long the task will take, but because the task itself triggers negative feelings — anxiety, boredom, self-doubt, or frustration — that they seek to avoid in the short term, even at the cost of greater stress later. This explains why procrastinators often report feeling temporary relief immediately after choosing to delay a task, followed by guilt and heightened anxiety as the deadline approaches. Effective interventions, researchers argue, should therefore focus less on time-management techniques such as scheduling and more on strategies that address the underlying emotional avoidance, such as breaking large tasks into smaller, less intimidating steps or practicing self-compassion rather than self-criticism when setbacks occur. Notably, studies have found that procrastinators who are harshest on themselves after delaying a task are, somewhat counterintuitively, more likely to procrastinate again in the future, suggesting that guilt and shame may perpetuate the very cycle they are meant to break.

According to the passage, what is the primary cause of chronic procrastination?`,
    choices: [
      {
        key: 'A',
        text: 'A rational miscalculation of how much time a task will require',
      },
      {
        key: 'B',
        text: 'An inability to create effective daily schedules',
      },
      {
        key: 'C',
        text: 'A desire to avoid the negative emotions that a task provokes',
      },
      {
        key: 'D',
        text: 'A lack of interest in achieving long-term goals',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージに "people delay tasks not because they misjudge how long the task will take, but because the task itself triggers negative feelings ... that they seek to avoid in the short term" とある。Cがこれに一致する。Aは本文で明確に否定されている。B・Dはパッセージの主張と異なる。\n\n【図解】先延ばしの本当の原因\n　説明｜本文での扱い｜キーワード\n　所要時間の見誤り｜明確に否定される｜not because they misjudge\n　課題が引き起こす負の感情｜原因として肯定｜negative feelings\n　短期的な回避｜行動の動機｜avoid in the short term\n　⇒ 感情の回避が先延ばしの核心\n　⚠ 時間見積もりの誤りを原因とする選択肢は本文が明示的に否定している。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_099',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Procrastination is often dismissed as a simple failure of time management or willpower, but psychological research suggests a more complex picture. Rather than being a purely rational miscalculation, chronic procrastination is increasingly understood as an emotion-regulation problem: people delay tasks not because they misjudge how long the task will take, but because the task itself triggers negative feelings — anxiety, boredom, self-doubt, or frustration — that they seek to avoid in the short term, even at the cost of greater stress later. This explains why procrastinators often report feeling temporary relief immediately after choosing to delay a task, followed by guilt and heightened anxiety as the deadline approaches. Effective interventions, researchers argue, should therefore focus less on time-management techniques such as scheduling and more on strategies that address the underlying emotional avoidance, such as breaking large tasks into smaller, less intimidating steps or practicing self-compassion rather than self-criticism when setbacks occur. Notably, studies have found that procrastinators who are harshest on themselves after delaying a task are, somewhat counterintuitively, more likely to procrastinate again in the future, suggesting that guilt and shame may perpetuate the very cycle they are meant to break.

What did researchers find about procrastinators who are especially self-critical after delaying a task?`,
    choices: [
      {
        key: 'A',
        text: 'They tend to complete future tasks more quickly out of guilt.',
      },
      {
        key: 'B',
        text: 'They are somewhat more likely to procrastinate again later.',
      },
      {
        key: 'C',
        text: 'They rarely experience any anxiety about approaching deadlines.',
      },
      {
        key: 'D',
        text: 'They benefit the most from strict scheduling techniques.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "procrastinators who are harshest on themselves after delaying a task are, somewhat counterintuitively, more likely to procrastinate again in the future" とある。Bがこれに一致する。A・C・Dはパッセージの内容と矛盾する。\n\n【図解】自己批判と先延ばしの関係\n　要素｜本文の記述｜結果\n　先延ばし後の厳しい自己批判｜harshest on themselves｜負の感情が増す\n　その後の行動｜more likely to procrastinate again｜再発しやすい\n　直感との関係｜counterintuitively｜予想に反する\n　⇒ 自分を責めるほど再び先延ばししやすい\n　⚠ 自己批判が改善につながるという常識的な推測を持ち込まない。本文は逆の結果を示す。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_100',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Procrastination is often dismissed as a simple failure of time management or willpower, but psychological research suggests a more complex picture. Rather than being a purely rational miscalculation, chronic procrastination is increasingly understood as an emotion-regulation problem: people delay tasks not because they misjudge how long the task will take, but because the task itself triggers negative feelings — anxiety, boredom, self-doubt, or frustration — that they seek to avoid in the short term, even at the cost of greater stress later. This explains why procrastinators often report feeling temporary relief immediately after choosing to delay a task, followed by guilt and heightened anxiety as the deadline approaches. Effective interventions, researchers argue, should therefore focus less on time-management techniques such as scheduling and more on strategies that address the underlying emotional avoidance, such as breaking large tasks into smaller, less intimidating steps or practicing self-compassion rather than self-criticism when setbacks occur. Notably, studies have found that procrastinators who are harshest on themselves after delaying a task are, somewhat counterintuitively, more likely to procrastinate again in the future, suggesting that guilt and shame may perpetuate the very cycle they are meant to break.

What intervention strategy does the passage suggest is more effective than traditional time-management techniques?`,
    choices: [
      {
        key: 'A',
        text: 'Strictly enforcing daily schedules without exceptions',
      },
      {
        key: 'B',
        text: 'Addressing emotional avoidance through smaller steps and self-compassion',
      },
      {
        key: 'C',
        text: 'Increasing self-criticism to build stronger discipline',
      },
      {
        key: 'D',
        text: 'Avoiding all deadlines to reduce feelings of pressure',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "Effective interventions ... should therefore focus less on time-management techniques such as scheduling and more on strategies that address the underlying emotional avoidance, such as breaking large tasks into smaller, less intimidating steps or practicing self-compassion" とある。Bがこれに一致する。A・C・Dはパッセージの主張と矛盾する。\n\n【図解】有効な介入策の方向性\n　方針｜本文の記述｜評価\n　時間管理の技法｜scheduling など｜重点を置かない\n　感情面への対処｜emotional avoidance に対応｜重視する\n　具体策｜作業の細分化, 自分への思いやり｜推奨\n　⇒ 感情の回避に働きかける方法が有効\n　⚠ スケジュール管理を最善策とする選択肢は本文の主張と逆。何を less、何を more と言うかを読み分ける。',
    difficulty: 'advanced',
  },
];
