import type { EikenQuestion } from './eiken_questions';

// 英検2級 追加問題バンク6（語彙40問・文法30問・長文読解30問 = 100問）

const p6_1 = `Online shopping has made home delivery a part of daily life, and some companies believe the next step is to hand the job to flying drones. In trials, small packages such as medicine and hot food have been dropped off within minutes of being ordered, and supporters say drones could be especially valuable for people living on islands or in mountain villages with few delivery drivers. Serious obstacles remain, however. Drones cannot yet carry heavy loads, bad weather grounds them easily, and residents worry about noise and privacy as cameras pass over their gardens. Aviation authorities also strictly limit flights over crowded areas for safety reasons. For the time being, most experts expect drones to serve remote regions and emergencies first, while vans and bicycles continue to handle ordinary city deliveries.`;

const p6_2 = `From Chicago to Singapore, city governments are encouraging builders to cover rooftops with plants. These "green roofs" absorb rainwater, which reduces the flooding that occurs when storms overwhelm drainage systems, and the layer of soil and vegetation insulates the building, cutting heating and cooling costs. On a larger scale, thousands of planted roofs can lower the temperature of an entire neighborhood, easing the "heat island" effect that makes summer in the city several degrees hotter than in the surrounding countryside. The main obstacles are cost and weight: a roof must be strong enough to support wet soil, and installation can be expensive. To overcome this, some cities now offer subsidies or require green roofs only on large new buildings, where the extra cost is a small share of the total budget.`;

const p6_3 = `Anyone who has jogged with headphones knows that the right song can make a hard run feel easier, and sports scientists have confirmed the effect in the laboratory. Music with a strong, steady beat helps athletes keep a regular rhythm, distracts them from feelings of tiredness, and can improve endurance by a small but measurable amount. The benefit is greatest in repetitive activities such as running, cycling, and rowing, where movements can be matched to the tempo. Interestingly, elite athletes appear to gain less than beginners, perhaps because they are trained to listen closely to their bodies rather than block signals out. Some competitions actually ban headphones — partly for safety on open roads, and partly because officials consider music a form of artificial assistance.`;

const p6_4 = `Fashion has never been cheaper or faster. Some chains design, produce, and deliver a new garment in as little as two weeks, encouraging shoppers to treat clothes as almost disposable. The environmental price is high: the fashion industry consumes enormous quantities of water, and mountains of barely worn clothing end up burned or buried in landfills every year. Growing criticism has pushed brands to announce recycling programs and clothing collection boxes, but investigators have found that only a small portion of collected garments is actually turned into new clothes; much is shipped overseas, where it can overwhelm local secondhand markets. Campaigners argue that the real solution lies with consumers themselves: buying fewer, better-made items, repairing them, and wearing them for years rather than months.`;

const p6_5 = `Before booking a hotel or trying a new restaurant, most consumers now read online reviews written by strangers — and businesses know it. A difference of half a star can measurably change a shop's income, which creates a strong temptation to cheat. Some companies pay people to post glowing reviews of their own products or harsh ones about competitors, and researchers estimate that a significant share of reviews on major platforms is fake. Websites fight back with software that spots suspicious patterns, such as bursts of five-star ratings within hours, or reviewers who praise dozens of unrelated businesses in the same week. Consumer groups advise readers to be skeptical of extreme opinions, to pay most attention to detailed reviews that mention both good and bad points, and to check whether a reviewer has a history of balanced comments.`;

const p6_6 = `Seaweed farming is one of the fastest-growing forms of aquaculture, and its supporters believe it could help feed the world while healing the oceans. Unlike land crops, seaweed needs no fresh water, no fertilizer, and no farmland; it simply grows on ropes hanging in the sea, absorbing carbon dioxide and excess nutrients that would otherwise cause harmful algae blooms. The harvest is used not only in food but also in cosmetics, animal feed, and even experimental packaging designed to replace plastic film. Scientists are testing whether adding a small amount of certain seaweeds to cattle feed can sharply cut the methane the animals produce. Challenges remain — warming seas stress some species, and processing facilities are scarce in many regions — but investment in the industry is rising rapidly.`;

const p6_7 = `A growing number of European cities have closed their historic centers to private cars, allowing only buses, bicycles, delivery vehicles, and pedestrians. Shop owners often protest at first, fearing that customers who cannot park nearby will go elsewhere. Studies in several cities, however, tell a different story: pedestrians and cyclists tend to visit more often and stay longer than drivers, and street-level businesses frequently see sales rise after cars are removed. Air quality improves, traffic accidents fall, and cafes spread tables across former parking spaces. The transition must be managed carefully — deliveries need time slots, and people with limited mobility require exceptions and good public transport — but few cities that have pedestrianized their centers have chosen to reverse the change.`;

const p6_8 = `Coffee is grown mainly in a narrow belt of tropical highlands, and the two species that dominate world trade are surprisingly delicate. Arabica, prized for its flavor, thrives only in cool mountain climates; as temperatures rise, suitable land is shifting higher up the slopes, and some studies warn that half of today's coffee-growing areas could become unsuitable by 2050. Farmers are responding by planting shade trees to cool their fields, breeding more heat-resistant varieties, and in some regions switching to robusta, a tougher species with a harsher taste. Scientists have also rediscovered forgotten wild species that tolerate heat far better than arabica, though bringing them into commercial production will take years. For coffee drinkers, the likely future is not the disappearance of their morning cup, but higher prices and changing flavors.`;

const p6_9 = `Armed with a laptop and a stable internet connection, a new class of workers has cut the link between job and location. These "digital nomads" write code, design websites, or teach languages online while moving from country to country, often staying a few months in each. Dozens of governments, from Portugal to Indonesia, now offer special visas to attract them, hoping the newcomers will spend their foreign salaries in local restaurants and apartments. The arrangement is not without friction. In some popular destinations, landlords have discovered they can earn far more renting to nomads than to residents, pushing up housing costs for local families. Some cities are therefore pairing nomad visas with rules on short-term rentals, trying to capture the economic benefits while protecting their own citizens.`;

const p6_10 = `On one Saturday each month, volunteers in hundreds of towns gather in community halls with screwdrivers, sewing machines, and soldering irons. At these "repair cafes," residents bring broken toasters, torn jackets, and silent radios, and fix them together with skilled helpers free of charge. The movement, which began in Amsterdam in 2009, aims to reduce waste, but organizers say the social effects matter just as much: elderly engineers pass on skills that schools no longer teach, and neighbors who had never spoken become friends over a shared repair. Manufacturers have taken notice, too. Campaigners linked to the movement have pushed several governments to adopt "right to repair" laws, which require companies to sell spare parts and publish repair manuals so that products are not thrown away simply because no one knows how to open them.`;

export const eikenQuestions2kyu6: EikenQuestion[] = [
  // ===== VOCABULARY (001-040) =====
  {
    id: 'eiken_2kyu6_001', level: '2kyu', category: 'vocabulary',
    question: "You need to ( ) a permit before fishing in this river.",
    choices: [
      { key: 'A', text: "bury" },
      { key: 'B', text: "melt" },
      { key: 'C', text: "scold" },
      { key: 'D', text: "obtain" },
    ],
    correctKey: 'D',
    explanation: '「obtain（〜を取得する・入手する）」が正解。この川で釣りをする前に許可証を取得する必要があるという文意です。buryは「〜を埋める」、meltは「〜を溶かす」、scoldは「〜を叱る」。obtainはgetのかたい同義語で、obtain permission/a license（許可・免許を得る）の形で頻出します。\n\n【図解】obtain の使い方\n　表現｜意味｜対象\n　obtain permission｜許可を得る｜行政手続き\n　obtain a license｜免許を取得する｜資格\n　obtain information｜情報を入手する｜調査\n　⇒ 釣りの許可証を取るなら obtain\n　⚠ get のかたい言い換え。日常会話より書面や規則の文で使われる語である。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_002', level: '2kyu', category: 'vocabulary',
    question: "Students in the biology class ( ) the behavior of ants for a week.",
    choices: [
      { key: 'A', text: "postponed" },
      { key: 'B', text: "observed" },
      { key: 'C', text: "interrupted" },
      { key: 'D', text: "exported" },
    ],
    correctKey: 'B',
    explanation: '「observe（〜を観察する）」が正解。生物の授業でアリの行動を1週間観察したという文意です。postponeは「〜を延期する」、interruptは「〜をさえぎる」、exportは「〜を輸出する」。名詞形observation（観察）、observeには「（規則を）守る」の意味もある点も覚えましょう。\n\n【図解】observe の2つの意味\n　意味｜目的語｜例\n　観察する｜behavior, stars｜observe ants\n　（規則を）守る｜rules, tradition｜observe the law\n　名詞 observation｜観察, 所見｜careful observation\n　⇒ アリの行動を1週間見続けるなら observe\n　⚠ 目的語が規則なら「順守する」の意味になる。文脈で意味を切り替える。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_003', level: '2kyu', category: 'vocabulary',
    question: "Many residents ( ) the plan to build a factory near the elementary school.",
    choices: [
      { key: 'A', text: "oppose" },
      { key: 'B', text: "obey" },
      { key: 'C', text: "melt" },
      { key: 'D', text: "dig" },
    ],
    correctKey: 'A',
    explanation: '「oppose（〜に反対する）」が正解。小学校の近くに工場を建てる計画に多くの住民が反対しているという文意です。opposeは他動詞なので前置詞なしで目的語を取ります。obeyは「〜に従う」、meltは「〜を溶かす」、digは「〜を掘る」。be opposed to 〜、名詞形opposition（反対）も頻出です。\n\n【図解】oppose の構文\n　形｜品詞｜前置詞\n　oppose ＋ 目的語｜他動詞｜不要\n　be opposed to ＋ 名詞｜受動態｜to\n　opposition to｜名詞｜to\n　⇒ 直後に目的語が来るなら oppose\n　⚠ oppose to とはしない。受動態や名詞形になったときだけ to が必要になる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_004', level: '2kyu', category: 'vocabulary',
    question: "More than fifty companies will ( ) in the job fair next month.",
    choices: [
      { key: 'A', text: "apologize" },
      { key: 'B', text: "graduate" },
      { key: 'C', text: "participate" },
      { key: 'D', text: "hesitate" },
    ],
    correctKey: 'C',
    explanation: '「participate in 〜（〜に参加する）」が正解。来月の就職フェアに50社以上が参加するという文意です。apologizeは「謝る」、graduateは「卒業する」、hesitateは「ためらう」。同義の熟語take part in 〜、名詞形participant（参加者）、participation（参加）もあわせて覚えましょう。\n\n【図解】participate の関連語\n　表現｜意味｜前置詞\n　participate in｜参加する｜in\n　take part in｜参加する｜in\n　participant｜参加者｜（名詞）\n　⇒ 就職フェアへの参加なら participate in\n　⚠ 前置詞は in で固定。to や at では成立しない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_005', level: '2kyu', category: 'vocabulary',
    question: "The young pianist has the ( ) to become a world-class performer.",
    choices: [
      { key: 'A', text: "potential" },
      { key: 'B', text: "laundry" },
      { key: 'C', text: "refund" },
      { key: 'D', text: "throat" },
    ],
    correctKey: 'A',
    explanation: '「potential（潜在能力・可能性）」が正解。have the potential to do（〜する潜在能力がある）の形で、若いピアニストには世界的な演奏家になる素質があるという文意です。laundryは「洗濯物」、refundは「払い戻し」、throatは「のど」。形容詞として「潜在的な」（potential customers = 見込み客）の用法も頻出です。\n\n【図解】potential の品詞\n　品詞｜意味｜例\n　名詞｜潜在能力｜have the potential to do\n　形容詞｜潜在的な, 見込みの｜potential customers\n　副詞 potentially｜潜在的に｜potentially dangerous\n　⇒ 素質を指すなら名詞の potential\n　⚠ 名詞のときは the potential to do の形。前置詞 of は続かない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_006', level: '2kyu', category: 'vocabulary',
    question: "It is difficult to ( ) exactly when the volcano will erupt again.",
    choices: [
      { key: 'A', text: "decorate" },
      { key: 'B', text: "celebrate" },
      { key: 'C', text: "predict" },
      { key: 'D', text: "imitate" },
    ],
    correctKey: 'C',
    explanation: '「predict（〜を予測する）」が正解。火山が次にいつ噴火するかを正確に予測するのは難しいという文意です。decorateは「〜を飾る」、celebrateは「〜を祝う」、imitateは「〜をまねる」。pre-（前もって）+ dict（言う）という成り立ちで、名詞形prediction（予測）、類義語forecastも頻出です。\n\n【図解】predict の関連語\n　語｜品詞｜意味\n　predict｜動詞｜予測する\n　prediction｜名詞｜予測\n　forecast｜動詞, 名詞｜予報する, 予報\n　⇒ 噴火時期の予測なら predict\n　⚠ 語源は pre（前もって）＋ dict（言う）。dictionary や dictate と同じ語根を持つ。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_007', level: '2kyu', category: 'vocabulary',
    question: "Smoking is strictly ( ) anywhere inside the hospital building.",
    choices: [
      { key: 'A', text: "divided" },
      { key: 'B', text: "attracted" },
      { key: 'C', text: "employed" },
      { key: 'D', text: "prohibited" },
    ],
    correctKey: 'D',
    explanation: '「prohibit（〜を禁止する）」の受動態が正解。病院の建物内では喫煙が厳しく禁じられているという文意です。divideは「〜を分ける」、attractは「〜を引きつける」、employは「〜を雇う」。prohibit 人 from -ing（人が〜するのを禁じる）、類義語ban・forbidもあわせて覚えましょう。\n\n【図解】禁止を表す動詞\n　語｜構文｜語調\n　prohibit｜prohibit 人 from doing｜公式, 法令\n　ban｜ban 名詞｜報道, 規則\n　forbid｜forbid 人 to do｜一般的\n　⇒ 院内での喫煙禁止なら be prohibited\n　⚠ prohibit は from ＋ 動名詞、forbid は to 不定詞。構文の違いを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_008', level: '2kyu', category: 'vocabulary',
    question: "The city started a campaign to ( ) recycling among young people.",
    choices: [
      { key: 'A', text: "punish" },
      { key: 'B', text: "promote" },
      { key: 'C', text: "bury" },
      { key: 'D', text: "interrupt" },
    ],
    correctKey: 'B',
    explanation: '「promote（〜を促進する・奨励する）」が正解。若者の間でリサイクルを促進するキャンペーンを市が始めたという文意です。punishは「〜を罰する」、buryは「〜を埋める」、interruptは「〜をさえぎる」。promoteには「〜を昇進させる」の意味もあり、名詞形promotion（促進・昇進）も頻出です。\n\n【図解】promote の2つの意味\n　意味｜目的語｜例\n　促進する｜recycling, health｜promote recycling\n　昇進させる｜社員｜be promoted to manager\n　名詞 promotion｜促進, 昇進｜sales promotion\n　⇒ リサイクルの推進なら promote\n　⚠ 目的語が人なら「昇進させる」。目的語の種類で意味を判断する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_009', level: '2kyu', category: 'vocabulary',
    question: "Mr. Ito is always ( ), so it is strange that he has not arrived yet.",
    choices: [
      { key: 'A', text: "absent" },
      { key: 'B', text: "jealous" },
      { key: 'C', text: "punctual" },
      { key: 'D', text: "guilty" },
    ],
    correctKey: 'C',
    explanation: '「punctual（時間を守る）」が正解。いつも時間に正確な伊藤さんがまだ到着していないのは変だという文意です。absentは「欠席の」、jealousは「嫉妬した」、guiltyは「有罪の」。be punctual for 〜（〜に時間どおりに来る）、副詞punctually、名詞punctuality（時間厳守）も覚えましょう。\n\n【図解】punctual の関連語\n　語｜品詞｜意味\n　punctual｜形容詞｜時間を守る\n　punctually｜副詞｜時間どおりに\n　punctuality｜名詞｜時間厳守\n　⇒ いつも遅れない人柄なら punctual\n　⚠ on time は副詞句で人の性質は表さない。人柄なら punctual を使う。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_010', level: '2kyu', category: 'vocabulary',
    question: "Tickets ( ) online are ten percent cheaper than those bought at the door.",
    choices: [
      { key: 'A', text: "purchased" },
      { key: 'B', text: "scolded" },
      { key: 'C', text: "melted" },
      { key: 'D', text: "obeyed" },
    ],
    correctKey: 'A',
    explanation: '「purchase（〜を購入する）」の過去分詞が正解。Tickets purchased online（オンラインで購入されたチケット）と後ろから名詞を修飾する形で、窓口購入より10%安いという文意です。scoldは「〜を叱る」、meltは「〜を溶かす」、obeyは「〜に従う」。purchaseはbuyのかたい同義語で、名詞「購入」としても使います。\n\n【図解】purchase の使い方\n　品詞｜意味｜例\n　動詞｜購入する｜purchase tickets\n　名詞｜購入, 購入品｜make a purchase\n　過去分詞の後置修飾｜購入された｜tickets purchased online\n　⇒ 名詞の後ろから修飾するなら purchased\n　⚠ buy より硬い語。契約書や案内文で使われる点も押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_011', level: '2kyu', category: 'vocabulary',
    question: "Winning this match will ( ) our team for the national tournament.",
    choices: [
      { key: 'A', text: "bury" },
      { key: 'B', text: "qualify" },
      { key: 'C', text: "scold" },
      { key: 'D', text: "soak" },
    ],
    correctKey: 'B',
    explanation: '「qualify A for B（AにBへの出場資格を与える）」が正解。この試合に勝てばチームは全国大会への出場資格を得るという文意です。buryは「〜を埋める」、scoldは「〜を叱る」、soakは「〜を浸す」。be qualified for 〜（〜の資格がある）、名詞形qualification（資格）も頻出です。\n\n【図解】qualify の使い方\n　形｜意味｜例\n　qualify A for B｜AにBの資格を与える｜qualify the team for\n　be qualified for｜〜の資格がある｜受動態\n　qualification｜資格｜名詞形\n　⇒ 全国大会への出場権を得るなら qualify for\n　⚠ 前置詞は for。to をとる形は qualify to do（〜する資格を得る）となる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu6_012', level: '2kyu', category: 'vocabulary',
    question: "The recipe requires only a small ( ) of sugar.",
    choices: [
      { key: 'A', text: "appetite" },
      { key: 'B', text: "tragedy" },
      { key: 'C', text: "triangle" },
      { key: 'D', text: "quantity" },
    ],
    correctKey: 'D',
    explanation: '「quantity（量）」が正解。a small quantity of 〜（少量の〜）の形で、レシピには少量の砂糖しか必要ないという文意です。appetiteは「食欲」、tragedyは「悲劇」、triangleは「三角形」。a large quantity of 〜（大量の〜）、対になる語quality（質）とセットで覚えましょう。\n\n【図解】quantity と quality\n　語｜意味｜結びつく形容詞\n　quantity｜量｜a small quantity of\n　quality｜質｜high quality\n　amount｜量（不可算向き）｜a large amount of\n　⇒ 砂糖の量を述べるなら quantity\n　⚠ quantity と quality はつづりが1文字違い。量か質かで確実に区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_013', level: '2kyu', category: 'vocabulary',
    question: "It took him several months to ( ) from the knee operation.",
    choices: [
      { key: 'A', text: "apologize" },
      { key: 'B', text: "recover" },
      { key: 'C', text: "graduate" },
      { key: 'D', text: "hesitate" },
    ],
    correctKey: 'B',
    explanation: '「recover from 〜（〜から回復する）」が正解。膝の手術から回復するのに数か月かかったという文意です。apologizeは「謝る」、graduateは「卒業する」、hesitateは「ためらう」。名詞形recovery（回復）、make a full recovery（完全に回復する）もあわせて覚えましょう。\n\n【図解】recover の使い方\n　形｜意味｜前置詞\n　recover from｜〜から回復する｜from\n　recovery｜回復｜名詞形\n　make a full recovery｜完全に回復する｜定型表現\n　⇒ 手術からの回復なら recover from\n　⚠ recover には他動詞で「取り戻す」の意味もある。目的語の有無で用法を見分ける。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_014', level: '2kyu', category: 'vocabulary',
    question: "The store ( ) its prices by twenty percent during the summer sale.",
    choices: [
      { key: 'A', text: "buried" },
      { key: 'B', text: "obeyed" },
      { key: 'C', text: "scolded" },
      { key: 'D', text: "reduced" },
    ],
    correctKey: 'D',
    explanation: '「reduce（〜を減らす・下げる）」が正解。夏のセール中に価格を20%下げたという文意です。by twenty percentのbyは差の程度を表します。buryは「〜を埋める」、obeyは「〜に従う」、scoldは「〜を叱る」。名詞形reduction（削減・値下げ）、類義語decrease・lowerも頻出です。\n\n【図解】差の程度を示す by\n　表現｜意味｜例\n　reduce by 20 percent｜20％分下げる｜差の大きさ\n　reduce to 20 percent｜20％まで下げる｜到達点\n　increase by｜〜だけ増やす｜差の大きさ\n　⇒ 20％値下げなら reduce by\n　⚠ by と to で意味が大きく変わる。差か到達点かを読み分ける。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_015', level: '2kyu', category: 'vocabulary',
    question: "Hiroshi ( ) not studying harder when he was a university student.",
    choices: [
      { key: 'A', text: "decorates" },
      { key: 'B', text: "exports" },
      { key: 'C', text: "regrets" },
      { key: 'D', text: "melts" },
    ],
    correctKey: 'C',
    explanation: '「regret -ing（〜したことを後悔する）」が正解。大学生の時にもっと勉強しなかったことを後悔しているという文意です。decorateは「〜を飾る」、exportは「〜を輸出する」、meltは「〜を溶かす」。regret to say（残念ながら〜と言う）との意味の違い、名詞形regret（後悔）も覚えましょう。\n\n【図解】regret の2つの形\n　形｜意味｜時の向き\n　regret doing｜〜したことを後悔する｜過去\n　regret to do｜残念ながら〜する｜これから\n　名詞 regret｜後悔｜with regret\n　⇒ 学生時代の不勉強を悔やむなら doing\n　⚠ to 不定詞にするとこれから伝える悪い知らせの意味になる。時の向きで形を決める。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_016', level: '2kyu', category: 'vocabulary',
    question: "The patient made a ( ) recovery and left the hospital in just one week.",
    choices: [
      { key: 'A', text: "remarkable" },
      { key: 'B', text: "guilty" },
      { key: 'C', text: "jealous" },
      { key: 'D', text: "absent" },
    ],
    correctKey: 'A',
    explanation: '「remarkable（驚くべき・著しい）」が正解。わずか1週間で退院できるほどの目覚ましい回復という文意です。guiltyは「有罪の」、jealousは「嫉妬した」、absentは「欠席の」。動詞remark（述べる）+ -able（〜できる）で「注目に値する」が原義。副詞remarkably（著しく）も頻出です。\n\n【図解】remarkable の成り立ち\n　要素｜意味｜派生\n　remark｜述べる, 言及する｜動詞\n　able｜〜できる｜接尾辞\n　remarkable｜注目に値する｜形容詞\n　⇒ 1週間で退院できる回復なら remarkable\n　⚠ 副詞 remarkably は「著しく」。程度を強める副詞として頻出する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_017', level: '2kyu', category: 'vocabulary',
    question: "This song always ( ) me of the summer I spent in Hokkaido.",
    choices: [
      { key: 'A', text: "repairs" },
      { key: 'B', text: "buries" },
      { key: 'C', text: "scolds" },
      { key: 'D', text: "reminds" },
    ],
    correctKey: 'D',
    explanation: '「remind A of B（AにBを思い出させる）」が正解。この歌を聞くといつも北海道で過ごした夏を思い出すという文意です。repairは「〜を修理する」、buryは「〜を埋める」、scoldは「〜を叱る」。remind 人 to do（人に〜することを思い出させる）の形もあわせて覚えましょう。\n\nremind A of B は「AにBを思い出させる」で、音楽や風景がきっかけで記憶がよみがえる場面で使う。前置詞 of の後ろには思い出す内容が来る。remind 人 to do なら「〜するよう念を押す」の意味になる。\n\n【図解】remind の2つの構文\n　形｜意味｜of や to の後ろ\n　remind A of B｜AにBを思い出させる｜名詞\n　remind A to do｜Aに〜するよう言う｜動詞の原形\n　remind A that 節｜Aに〜だと知らせる｜節\n　⇒ 夏の思い出がよみがえるなら of\n　⚠ remind A about B も可能だが、記憶の想起には of が標準。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_018', level: '2kyu', category: 'vocabulary',
    question: "We need to ( ) the batteries in the smoke alarm twice a year.",
    choices: [
      { key: 'A', text: "apologize" },
      { key: 'B', text: "graduate" },
      { key: 'C', text: "replace" },
      { key: 'D', text: "hesitate" },
    ],
    correctKey: 'C',
    explanation: '「replace（〜を交換する）」が正解。火災報知器の電池は年2回交換する必要があるという文意です。apologizeは「謝る」、graduateは「卒業する」、hesitateは「ためらう」。replace A with B（AをBと取り替える）、名詞形replacement（交換・後任）も頻出です。\n\n【図解】replace の使い方\n　形｜意味｜例\n　replace A｜Aを交換する｜replace the batteries\n　replace A with B｜AをBに取り替える｜replace oil with butter\n　replacement｜交換, 後任｜名詞形\n　⇒ 電池を年2回交換するなら replace\n　⚠ replace A to B とはしない。交換先を示す前置詞は with。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_019', level: '2kyu', category: 'vocabulary',
    question: "The job ( ) at least three years of experience in sales.",
    choices: [
      { key: 'A', text: "melts" },
      { key: 'B', text: "requires" },
      { key: 'C', text: "buries" },
      { key: 'D', text: "obeys" },
    ],
    correctKey: 'B',
    explanation: '「require（〜を必要とする）」が正解。その仕事には少なくとも3年の営業経験が必要だという文意です。meltは「〜を溶かす」、buryは「〜を埋める」、obeyは「〜に従う」。require 人 to do（人に〜するよう要求する）、名詞形requirement（必要条件）もあわせて覚えましょう。\n\n【図解】require の構文\n　形｜意味｜例\n　require ＋ 名詞｜〜を必要とする｜require experience\n　require 人 to do｜人に〜を求める｜require staff to wear\n　require that 主語 原形｜仮定法現在｜require that he be\n　⇒ 営業経験が必要なら requires\n　⚠ that 節では動詞が原形になる。構文により形が変わる点に注意する。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_020', level: '2kyu', category: 'vocabulary',
    question: "Naomi closely ( ) her grandmother when she smiles.",
    choices: [
      { key: 'A', text: "resembles" },
      { key: 'B', text: "scolds" },
      { key: 'C', text: "exports" },
      { key: 'D', text: "decorates" },
    ],
    correctKey: 'A',
    explanation: '「resemble（〜に似ている）」が正解。笑うとナオミは祖母によく似ているという文意です。resembleは他動詞なので前置詞なしで目的語を取り、進行形にしない点が重要です。scoldは「〜を叱る」、exportは「〜を輸出する」、decorateは「〜を飾る」。類義表現look like 〜、take after 〜も覚えましょう。\n\n【図解】resemble の文法上の性質\n　項目｜性質｜例\n　他動詞｜前置詞不要｜resemble her grandmother\n　進行形｜使わない｜is resembling は誤り\n　類義表現｜look like, take after｜前置詞や副詞が必要\n　⇒ 直後に目的語が来るなら resemble\n　⚠ resemble to とはしない。状態動詞なので進行形にもしない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_021', level: '2kyu', category: 'vocabulary',
    question: "I called the restaurant to ( ) a table for six people.",
    choices: [
      { key: 'A', text: "bury" },
      { key: 'B', text: "melt" },
      { key: 'C', text: "reserve" },
      { key: 'D', text: "scold" },
    ],
    correctKey: 'C',
    explanation: '「reserve（〜を予約する）」が正解。6人分の席を予約するためにレストランに電話したという文意です。buryは「〜を埋める」、meltは「〜を溶かす」、scoldは「〜を叱る」。名詞形reservation（予約）、make a reservation（予約する）、類義語book（〜を予約する）も頻出です。\n\n【図解】予約に関する表現\n　語｜品詞｜例\n　reserve｜動詞｜reserve a table\n　reservation｜名詞｜make a reservation\n　book｜動詞｜book a flight\n　⇒ 6人分の席を押さえるなら reserve\n　⚠ reserve には「取っておく, 保留する」の意味もある。目的語で用法を判断する。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_022', level: '2kyu', category: 'vocabulary',
    question: "The minister was forced to ( ) after the scandal became public.",
    choices: [
      { key: 'A', text: "decorate" },
      { key: 'B', text: "resign" },
      { key: 'C', text: "imitate" },
      { key: 'D', text: "celebrate" },
    ],
    correctKey: 'B',
    explanation: '「resign（辞任する）」が正解。スキャンダルが明るみに出た後、大臣は辞任に追い込まれたという文意です。decorateは「〜を飾る」、imitateは「〜をまねる」、celebrateは「〜を祝う」。resign from 〜（〜を辞める）、名詞形resignation（辞任・辞表）もあわせて覚えましょう。\n\n【図解】resign の使い方\n　形｜意味｜前置詞\n　resign｜辞任する｜自動詞\n　resign from｜〜を辞める｜from ＋ 職, 組織\n　resignation｜辞任, 辞表｜名詞形\n　⇒ 大臣が職を辞するなら resign\n　⚠ resign と re-sign（署名し直す）は発音もつづりの区切りも異なる。文脈で判断する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_023', level: '2kyu', category: 'vocabulary',
    question: "Water is a precious ( ) that should never be wasted.",
    choices: [
      { key: 'A', text: "resource" },
      { key: 'B', text: "refund" },
      { key: 'C', text: "costume" },
      { key: 'D', text: "triangle" },
    ],
    correctKey: 'A',
    explanation: '「resource（資源）」が正解。水は決して無駄にしてはならない貴重な資源だという文意です。refundは「払い戻し」、costumeは「衣装」、triangleは「三角形」。natural resources（天然資源）、human resources（人材・人事）などの形で頻出します。\n\nresource は「資源」で、natural resources（天然資源）、human resources（人材）のように複数形で使うことが多い。水を無駄にしてはならない貴重な資源だという文脈に合う。動詞形は resource で「資源を供給する」。\n\n【図解】resource の使い方\n　表現｜意味｜分野\n　natural resources｜天然資源｜環境\n　human resources｜人材, 人事｜企業\n　a valuable resource｜貴重な資源｜一般\n　⇒ 水を貴重な資源と呼ぶなら resource\n　⚠ 複数形で使うことが多い。単数の resource は「手段, 頼み」の意味にもなる。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_024', level: '2kyu', category: 'vocabulary',
    question: "The company failed to ( ) to customer complaints quickly enough.",
    choices: [
      { key: 'A', text: "bury" },
      { key: 'B', text: "melt" },
      { key: 'C', text: "scold" },
      { key: 'D', text: "respond" },
    ],
    correctKey: 'D',
    explanation: '「respond to 〜（〜に対応する・返答する）」が正解。会社は顧客の苦情に十分すばやく対応できなかったという文意です。buryは「〜を埋める」、meltは「〜を溶かす」、scoldは「〜を叱る」。名詞形response（返答・反応）、類義語reply to 〜もあわせて覚えましょう。\n\nrespond to 〜 は「〜に応じる、対応する」で、complaint、question、emergency を対象にとる。会社が苦情に迅速に対応できなかったという文脈に合う。名詞形は response、形容詞は responsive。\n\n【図解】respond の関連語\n　語｜品詞｜前置詞\n　respond to｜動詞｜to\n　response to｜名詞｜to\n　responsible for｜形容詞｜for\n　⇒ 苦情への対応なら respond to\n　⚠ responsible の前置詞は for。同じ語根でも前置詞が異なる点に注意する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_025', level: '2kyu', category: 'vocabulary',
    question: "Experts worked for years to ( ) the damaged painting to its original condition.",
    choices: [
      { key: 'A', text: "restore" },
      { key: 'B', text: "punish" },
      { key: 'C', text: "interrupt" },
      { key: 'D', text: "export" },
    ],
    correctKey: 'A',
    explanation: '「restore A to B（AをBの状態に戻す・修復する）」が正解。損傷した絵画を元の状態に修復するために専門家が何年も作業したという文意です。punishは「〜を罰する」、interruptは「〜をさえぎる」、exportは「〜を輸出する」。名詞形restoration（修復・復元）も美術・建築の文章で頻出です。\n\n【図解】restore の使い方\n　形｜意味｜例\n　restore A to B｜AをBの状態に戻す｜restore to original condition\n　restore order｜秩序を回復する｜社会\n　restoration｜修復, 復元｜名詞形\n　⇒ 絵画を元の状態に戻すなら restore\n　⚠ repair は壊れた箇所を直すこと。元の姿に戻す文化財の修復には restore を使う。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_026', level: '2kyu', category: 'vocabulary',
    question: "The company gave her a special ( ) for her twenty years of service.",
    choices: [
      { key: 'A', text: "throat" },
      { key: 'B', text: "laundry" },
      { key: 'C', text: "tragedy" },
      { key: 'D', text: "reward" },
    ],
    correctKey: 'D',
    explanation: '「reward（報酬・ほうび）」が正解。20年間の勤続に対して特別な報酬を贈ったという文意です。throatは「のど」、laundryは「洗濯物」、tragedyは「悲劇」。a reward for 〜（〜に対する報酬）、動詞reward（〜に報いる）、award（賞）との違いにも注意しましょう。\n\nreward は「（功労に対する）報酬、ほうび」で、a reward for 〜 の形で何に対する報いかを示す。20年の勤続に対する特別な報酬という文脈に合う。動詞では「報いる」の意味になる。\n\n【図解】reward と award\n　語｜意味｜与えられ方\n　reward｜報酬, ほうび｜功労や貢献への見返り\n　award｜賞｜審査による授与\n　prize｜賞品, 賞金｜競技や抽選\n　⇒ 長年の勤続への報いなら reward\n　⚠ award は賞そのもの、reward は行為への報い。授与の性質が異なる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_027', level: '2kyu', category: 'vocabulary',
    question: "Doctors are badly needed in ( ) areas far from big cities.",
    choices: [
      { key: 'A', text: "guilty" },
      { key: 'B', text: "jealous" },
      { key: 'C', text: "rural" },
      { key: 'D', text: "absent" },
    ],
    correctKey: 'C',
    explanation: '「rural（田舎の・農村の）」が正解。大都市から遠く離れた農村部では医師が非常に不足しているという文意です。guiltyは「有罪の」、jealousは「嫉妬した」、absentは「欠席の」。反意語urban（都市の）とセットで覚えましょう。rural areas（農村部）は社会問題の文章で頻出です。\n\n【図解】地域を表す形容詞\n　語｜意味｜対になる語\n　rural｜農村の, 田舎の｜urban\n　urban｜都市の｜rural\n　suburban｜郊外の｜中間\n　⇒ 医師不足が深刻な地方なら rural\n　⚠ rural と urban は対で出題される。r と u の1文字で意味が正反対になる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_028', level: '2kyu', category: 'vocabulary',
    question: "The manager was not ( ) with the quality of the report.",
    choices: [
      { key: 'A', text: "buried" },
      { key: 'B', text: "satisfied" },
      { key: 'C', text: "melted" },
      { key: 'D', text: "employed" },
    ],
    correctKey: 'B',
    explanation: '「be satisfied with 〜（〜に満足している）」が正解。部長は報告書の出来に満足していなかったという文意です。buryは「〜を埋める」、meltは「〜を溶かす」、employは「〜を雇う」。名詞形satisfaction（満足）、形容詞satisfactory（満足のいく）、satisfying（満足感を与える）も頻出です。\n\n【図解】satisfy の派生語\n　語｜品詞｜意味\n　be satisfied with｜受動態｜〜に満足している\n　satisfactory｜形容詞｜満足のいく水準の\n　satisfying｜形容詞｜満足感を与える\n　⇒ 報告書の出来に不満なら satisfied with を否定する形\n　⚠ 前置詞は with。satisfied by も可だが試験では with が標準。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_029', level: '2kyu', category: 'vocabulary',
    question: "The region suffered from a ( ) water shortage last summer.",
    choices: [
      { key: 'A', text: "punctual" },
      { key: 'B', text: "severe" },
      { key: 'C', text: "portable" },
      { key: 'D', text: "jealous" },
    ],
    correctKey: 'B',
    explanation: '「severe（深刻な・厳しい）」が正解。昨年の夏、その地域は深刻な水不足に苦しんだという文意です。punctualは「時間を守る」、portableは「持ち運びできる」、jealousは「嫉妬した」。severe weather（悪天候）、severe pain（激しい痛み）など、程度の激しさを表す形容詞として頻出します。\n\n【図解】severe のコロケーション\n　表現｜意味｜分野\n　severe shortage｜深刻な不足｜社会\n　severe weather｜悪天候｜気象\n　severe pain｜激しい痛み｜医療\n　⇒ 深刻な水不足なら severe\n　⚠ severe には「（人が）厳格な」の意味もある。修飾する名詞で訳し分ける。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_030', level: '2kyu', category: 'vocabulary',
    question: "Many hospitals are facing a serious ( ) of nurses.",
    choices: [
      { key: 'A', text: "shortage" },
      { key: 'B', text: "ceremony" },
      { key: 'C', text: "souvenir" },
      { key: 'D', text: "triangle" },
    ],
    correctKey: 'A',
    explanation: '「shortage（不足）」が正解。多くの病院が深刻な看護師不足に直面しているという文意です。ceremonyは「式典」、souvenirは「土産」、triangleは「三角形」。a shortage of 〜（〜の不足）の形で使い、labor shortage（人手不足）は時事的な文章でも頻出です。形容詞short（不足した）から派生した語です。\n\n【図解】shortage の使い方\n　表現｜意味｜例\n　a shortage of｜〜の不足｜a shortage of nurses\n　labor shortage｜人手不足｜時事\n　short of｜〜が足りない｜形容詞句\n　⇒ 看護師不足なら a shortage of\n　⚠ shortage は名詞、short は形容詞。品詞で使い分ける。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_031', level: '2kyu', category: 'vocabulary',
    question: "Scientists found a ( ) difference between the two groups in the experiment.",
    choices: [
      { key: 'A', text: "guilty" },
      { key: 'B', text: "absent" },
      { key: 'C', text: "jealous" },
      { key: 'D', text: "significant" },
    ],
    correctKey: 'D',
    explanation: '「significant（重要な・意味のある・かなりの）」が正解。実験で2つのグループの間に有意な差が見つかったという文意です。guiltyは「有罪の」、absentは「欠席の」、jealousは「嫉妬した」。a significant difference/increase（大きな差・増加）の形で科学的な文章に頻出します。副詞significantly（著しく）も重要です。\n\n【図解】significant の使い方\n　表現｜意味｜分野\n　a significant difference｜有意な差｜統計, 科学\n　a significant increase｜大幅な増加｜数値\n　significantly｜著しく｜副詞\n　⇒ 実験で見つかった差なら significant\n　⚠ 統計では「有意な」という専門的な意味を持つ。日常語の「重要な」と区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_032', level: '2kyu', category: 'vocabulary',
    question: "This movie contains violent scenes and is not ( ) for small children.",
    choices: [
      { key: 'A', text: "previous" },
      { key: 'B', text: "absent" },
      { key: 'C', text: "suitable" },
      { key: 'D', text: "guilty" },
    ],
    correctKey: 'C',
    explanation: '「suitable（適した・ふさわしい）」が正解。be suitable for 〜（〜に適している）の形で、暴力的な場面を含むため小さな子どもには適さない映画だという文意です。previousは「以前の」、absentは「欠席の」、guiltyは「有罪の」。動詞suit（〜に合う）、類義語appropriate・properも覚えましょう。\n\n【図解】適切さを表す形容詞\n　語｜前置詞｜含み\n　suitable｜for｜目的や対象に合う\n　appropriate｜for, to｜状況にふさわしい\n　proper｜（前置詞なしも可）｜正式で正しい\n　⇒ 幼児向けでない映画なら suitable for を否定する形\n　⚠ suitable の前置詞は for。動詞 suit は前置詞をとらない点も押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_033', level: '2kyu', category: 'vocabulary',
    question: "The charity sent food and medical ( ) to the disaster area.",
    choices: [
      { key: 'A', text: "appetites" },
      { key: 'B', text: "refunds" },
      { key: 'C', text: "throats" },
      { key: 'D', text: "supplies" },
    ],
    correctKey: 'D',
    explanation: '「supplies（物資・必需品）」が正解。慈善団体が被災地に食料と医療物資を送ったという文意です。medical supplies（医療物資）、school supplies（学用品）のように複数形で「物資」を表します。appetiteは「食欲」、refundは「払い戻し」、throatは「のど」。動詞supply（〜を供給する）、supply and demand（需要と供給）も頻出です。\n\n【図解】supply と supplies\n　形｜意味｜例\n　supplies（複数）｜物資, 必需品｜medical supplies\n　supply（名詞単数）｜供給｜supply and demand\n　supply（動詞）｜供給する｜supply water\n　⇒ 食料や医療物資なら supplies\n　⚠ 単数と複数で意味が変わる。物資の意味では必ず複数形になる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_034', level: '2kyu', category: 'vocabulary',
    question: "The old castle is ( ) by a deep moat and high stone walls.",
    choices: [
      { key: 'A', text: "apologized" },
      { key: 'B', text: "graduated" },
      { key: 'C', text: "surrounded" },
      { key: 'D', text: "hesitated" },
    ],
    correctKey: 'C',
    explanation: '「be surrounded by 〜（〜に囲まれている）」が正解。古城は深い堀と高い石垣に囲まれているという文意です。apologizeは「謝る」、graduateは「卒業する」、hesitateは「ためらう」で、いずれも自動詞なのでこの受動態の形を取れません。名詞形surroundings（周囲の環境）も頻出です。\n\n【図解】受動態にできる動詞か\n　動詞｜他動詞か｜受動態\n　surround｜他動詞｜be surrounded by\n　apologize｜自動詞｜受動態にしない\n　graduate｜自動詞｜graduate from\n　⇒ 堀と石垣に囲まれているなら be surrounded by\n　⚠ 自動詞は受動態にできない。選択肢の動詞が他動詞かをまず確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_035', level: '2kyu', category: 'vocabulary',
    question: "The police ( ) that the fire was started deliberately.",
    choices: [
      { key: 'A', text: "decorate" },
      { key: 'B', text: "suspect" },
      { key: 'C', text: "melt" },
      { key: 'D', text: "bury" },
    ],
    correctKey: 'B',
    explanation: '「suspect that 〜（〜ではないかと疑う）」が正解。警察は火事が故意に起こされたのではないかとみているという文意です。decorateは「〜を飾る」、meltは「〜を溶かす」、buryは「〜を埋める」。名詞suspect（容疑者）、doubt（〜ではないと思う）との意味の違いは頻出ポイントです。\n\n【図解】suspect と doubt\n　語｜意味｜think との関係\n　suspect that｜〜ではないかと疑う｜think that に近い\n　doubt that｜〜ではないと思う｜do not think that に近い\n　suspect（名詞）｜容疑者｜警察用語\n　⇒ 放火ではないかとみるなら suspect\n　⚠ suspect と doubt は肯定と否定で意味が逆になる。最頻出のひっかけ。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu6_036', level: '2kyu', category: 'vocabulary',
    question: "People ( ) to eat more than necessary at all-you-can-eat restaurants.",
    choices: [
      { key: 'A', text: "tend" },
      { key: 'B', text: "bury" },
      { key: 'C', text: "scold" },
      { key: 'D', text: "melt" },
    ],
    correctKey: 'A',
    explanation: '「tend to do（〜する傾向がある）」が正解。食べ放題の店では必要以上に食べてしまいがちだという文意です。buryは「〜を埋める」、scoldは「〜を叱る」、meltは「〜を溶かす」で、いずれもto不定詞を続けてこの意味を表せません。名詞形tendency（傾向）、have a tendency to doも覚えましょう。\n\n【図解】傾向を表す表現\n　形｜意味｜品詞\n　tend to do｜〜する傾向がある｜動詞\n　have a tendency to do｜同義｜名詞句\n　be likely to do｜〜しそうだ｜可能性\n　⇒ つい食べ過ぎるなら tend to\n　⚠ tend の後ろは to 不定詞。動名詞は続かない点を確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_037', level: '2kyu', category: 'vocabulary',
    question: "Heavy rain in June is ( ) of the climate in this part of Japan.",
    choices: [
      { key: 'A', text: "guilty" },
      { key: 'B', text: "typical" },
      { key: 'C', text: "absent" },
      { key: 'D', text: "jealous" },
    ],
    correctKey: 'B',
    explanation: '「be typical of 〜（〜に典型的である）」が正解。6月の大雨は日本のこの地方の気候に典型的なものだという文意です。guiltyは「有罪の」、absentは「欠席の」、jealousは「嫉妬した」。名詞type（型）から派生した語で、副詞typically（典型的に・普通は）も頻出です。\n\n【図解】typical の使い方\n　形｜意味｜前置詞\n　be typical of｜〜に典型的である｜of\n　a typical example｜典型例｜形容詞用法\n　typically｜典型的に, 普通は｜副詞\n　⇒ この地方の気候に典型的なら typical of\n　⚠ 前置詞は of。for や to ではこのコロケーションにならない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_038', level: '2kyu', category: 'vocabulary',
    question: "The museum keeps its most ( ) paintings in a special room.",
    choices: [
      { key: 'A', text: "absent" },
      { key: 'B', text: "guilty" },
      { key: 'C', text: "jealous" },
      { key: 'D', text: "valuable" },
    ],
    correctKey: 'D',
    explanation: '「valuable（貴重な・価値の高い）」が正解。美術館は最も貴重な絵画を特別室に保管しているという文意です。absentは「欠席の」、guiltyは「有罪の」、jealousは「嫉妬した」。名詞value（価値）から派生し、priceless（値段がつけられないほど貴重な）、invaluable（極めて貴重な）もプラスの意味である点に注意しましょう。\n\n【図解】価値を表す形容詞\n　語｜意味｜in の働き\n　valuable｜価値の高い｜通常の形容詞\n　invaluable｜計り知れないほど貴重な｜in は強調\n　priceless｜値がつけられないほど貴重｜less でも肯定的\n　⇒ 最も貴重な絵画なら valuable\n　⚠ invaluable と priceless は否定形に見えて肯定的な意味。接辞に惑わされない。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_039', level: '2kyu', category: 'vocabulary',
    question: "Electric ( ) are becoming a common sight on Japanese roads.",
    choices: [
      { key: 'A', text: "vehicles" },
      { key: 'B', text: "throats" },
      { key: 'C', text: "triangles" },
      { key: 'D', text: "appetites" },
    ],
    correctKey: 'A',
    explanation: '「vehicle（車両・乗り物）」が正解。電気自動車（electric vehicles = EV）が日本の道路で当たり前の光景になりつつあるという文意です。throatは「のど」、triangleは「三角形」、appetiteは「食欲」。vehicleは車・バス・トラックなどを含む総称で、環境やテクノロジーの文章で頻出します。\n\n【図解】vehicle の使い方\n　表現｜意味｜分野\n　electric vehicle｜電気自動車｜環境, 技術\n　motor vehicle｜自動車｜法令用語\n　vehicle for｜〜の手段｜比喩的用法\n　⇒ 車の総称を指すなら vehicle\n　⚠ car より広い総称。バスやトラックも含む点を押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_040', level: '2kyu', category: 'vocabulary',
    question: "The Red Cross provided shelter for the ( ) of the earthquake.",
    choices: [
      { key: 'A', text: "refunds" },
      { key: 'B', text: "souvenirs" },
      { key: 'C', text: "victims" },
      { key: 'D', text: "costumes" },
    ],
    correctKey: 'C',
    explanation: '「victim（被害者・犠牲者）」が正解。赤十字が地震の被災者に避難所を提供したという文意です。refundは「払い戻し」、souvenirは「土産」、costumeは「衣装」。the victims of 〜（〜の犠牲者）の形で災害・事故の文章に頻出します。fall victim to 〜（〜の犠牲になる）という表現もあります。\n\n【図解】victim の使い方\n　表現｜意味｜場面\n　the victims of｜〜の犠牲者｜災害, 事故\n　fall victim to｜〜の犠牲になる｜無冠詞の慣用句\n　survivor｜生存者｜対比される語\n　⇒ 地震の被災者なら victims\n　⚠ fall victim to では冠詞を付けない。慣用句としての形を覚える。',
    difficulty: 'standard',
  },

  // ===== GRAMMAR (041-070) =====
  {
    id: 'eiken_2kyu6_041', level: '2kyu', category: 'grammar',
    question: "My daughter has been interested ( ) astronomy since she was ten.",
    choices: [
      { key: 'A', text: "on" },
      { key: 'B', text: "at" },
      { key: 'C', text: "in" },
      { key: 'D', text: "for" },
    ],
    correctKey: 'C',
    explanation: 'be interested in 〜（〜に興味がある）が正解。「娘は10歳の時から天文学に興味を持っている」の意味です。interestedと結びつく前置詞はinで、on・at・forは使えません。名詞interest（興味）を使ったhave an interest in 〜も同じ前置詞を取ります。\n\n【図解】感情形容詞と前置詞\n　表現｜意味｜前置詞\n　be interested in｜興味がある｜in\n　be surprised at｜驚く｜at\n　be worried about｜心配する｜about\n　⇒ 天文学への興味なら interested in\n　⚠ have an interest in も同じ前置詞。名詞形でも in を使う点を押さえる。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_042', level: '2kyu', category: 'grammar',
    question: "( ) we go hiking tomorrow depends on the weather.",
    choices: [
      { key: 'A', text: "Whether" },
      { key: 'B', text: "If" },
      { key: 'C', text: "What" },
      { key: 'D', text: "Which" },
    ],
    correctKey: 'A',
    explanation: 'Whether 〜（〜かどうかということ）の名詞節が文の主語になる形が正解。「明日ハイキングに行くかどうかは天気次第だ」の意味です。ifも「〜かどうか」を表せますが、if節は文の主語としては使えないのがルールです。What・Whichでは節の中の要素が欠けていないため文法的に成り立ちません。\n\n【図解】whether と if の違い\n　用法｜whether｜if\n　主語になる節｜可｜不可\n　目的語になる節｜可｜可\n　or not を直後に置く｜可｜不可\n　⇒ 文の主語になるので Whether\n　⚠ if は目的語の位置でしか使えない。節の役割で使い分ける。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu6_043', level: '2kyu', category: 'grammar',
    question: "I ( ) a bath when the earthquake hit, so I didn't notice it at first.",
    choices: [
      { key: 'A', text: "take" },
      { key: 'B', text: "have taken" },
      { key: 'C', text: "am taking" },
      { key: 'D', text: "was taking" },
    ],
    correctKey: 'D',
    explanation: '過去のある時点（地震が起きた時）に進行中だった動作は過去進行形was takingで表します。「地震が起きたとき私は風呂に入っていたので、最初は気づかなかった」の意味です。when + 過去形の節と組み合わせるのが典型パターン。現在形take・現在進行形am taking・現在完了have takenは過去の場面に合いません。\n\n【図解】過去進行形を使う場面\n　形｜表す内容｜目印\n　was doing｜過去のある時点で進行中｜when ＋ 過去形\n　過去形｜過去の完了した動作｜yesterday\n　現在完了｜現在までの経験や継続｜since, for\n　⇒ 地震の瞬間に入浴中なら was taking\n　⚠ when 節が過去形なら主節は過去進行形が自然。時制の対応を確認する。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_044', level: '2kyu', category: 'grammar',
    question: "You can choose ( ) the meat dish or the fish dish for the main course.",
    choices: [
      { key: 'A', text: "neither" },
      { key: 'B', text: "either" },
      { key: 'C', text: "both" },
      { key: 'D', text: "all" },
    ],
    correctKey: 'B',
    explanation: 'either A or B（AかBのどちらか）の構文が正解。「メインコースには肉料理か魚料理のどちらかを選べます」の意味で、後ろのorと呼応するのはeitherです。neitherはnorと、bothはandと呼応するため、orとは組み合わせられません。allは3つ以上のものに使います。\n\n【図解】相関接続詞の呼応\n　語｜呼応する語｜数の扱い\n　either｜or｜Bに一致\n　neither｜nor｜Bに一致\n　both｜and｜複数扱い\n　⇒ 後ろに or があるので either\n　⚠ 呼応する語の組み合わせは固定。either 〜 nor のような混用はできない。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_045', level: '2kyu', category: 'grammar',
    question: "This is the most exciting game ( ) I have ever watched.",
    choices: [
      { key: 'A', text: "what" },
      { key: 'B', text: "that" },
      { key: 'C', text: "who" },
      { key: 'D', text: "whose" },
    ],
    correctKey: 'B',
    explanation: '先行詞に最上級（the most exciting game）がつく場合、関係代名詞はthatを使うのが好まれます。「これは今まで見た中で一番わくわくする試合だ」の意味です。whatは先行詞を取れず、whoは人に使い、whoseは所有格で後ろに名詞が必要です。先行詞にall・only・最上級がつくとthatが選ばれやすい点を覚えましょう。\n\n【図解】that が好まれる先行詞\n　先行詞の条件｜例｜理由\n　最上級つき｜the best game｜限定が強い\n　all, only, every つき｜the only thing｜同上\n　人と物が並ぶ｜the people and things｜両方に使える\n　⇒ 最上級がついているので that\n　⚠ what は先行詞をとれない。先行詞の有無をまず確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_046', level: '2kyu', category: 'grammar',
    question: "I'll call you as soon as I ( ) at the airport.",
    choices: [
      { key: 'A', text: "will arrive" },
      { key: 'B', text: "arrived" },
      { key: 'C', text: "will have arrived" },
      { key: 'D', text: "arrive" },
    ],
    correctKey: 'D',
    explanation: '時を表す副詞節（as soon as 〜）の中では、未来のことでも現在形で表すのがルールです。「空港に着いたらすぐに電話します」の意味で現在形arriveが正解。will arrive・will have arrivedのように willを使うのは誤りです。when・before・after・untilなどの節でも同じルールが適用されます。\n\n【図解】副詞節の中の時制\n　節の種類｜接続詞｜未来の表し方\n　時｜when, as soon as, before｜現在形\n　条件｜if, unless｜現在形\n　名詞節｜if（〜かどうか）｜will も可\n　⇒ as soon as の節なので arrive\n　⚠ 同じ if でも名詞節なら will が使える。節の働きで判断する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_047', level: '2kyu', category: 'grammar',
    question: "My parents wouldn't ( ) me travel abroad alone when I was in high school.",
    choices: [
      { key: 'A', text: "let" },
      { key: 'B', text: "allow" },
      { key: 'C', text: "permit" },
      { key: 'D', text: "forbid" },
    ],
    correctKey: 'A',
    explanation: '使役動詞let + 目的語 + 原形不定詞（〜に…させてやる・許す）が正解。「高校生の頃、両親は私が一人で海外旅行することを許してくれなかった」の意味です。allowとpermitはallow/permit 人 to doとto不定詞が必要なため、直後に原形travelを続けられません。forbidは「禁じる」で、wouldn\'tと組み合わせると意味が通りません。\n\n【図解】許可を表す動詞の構文\n　動詞｜構文｜後ろの形\n　let｜let 人 do｜原形\n　allow, permit｜allow 人 to do｜to 不定詞\n　forbid｜forbid 人 to do｜to 不定詞\n　⇒ 直後が原形 travel なら let\n　⚠ allow の後ろに原形は置けない。動詞ごとに続く形が決まっている。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_048', level: '2kyu', category: 'grammar',
    question: "Mt. Fuji is the highest mountain ( ) Japan.",
    choices: [
      { key: 'A', text: "of" },
      { key: 'B', text: "at" },
      { key: 'C', text: "in" },
      { key: 'D', text: "on" },
    ],
    correctKey: 'C',
    explanation: '最上級の範囲を表すには、場所・集団にはin、複数を表す語句にはofを使います。Japanは場所なのでin Japanが正解。「富士山は日本で一番高い山です」の意味です。of all the mountains（すべての山の中で）ならofを使います。in / of の使い分けは最上級の頻出ポイントです。\n\n【図解】最上級の範囲を示す前置詞\n　範囲｜前置詞｜例\n　場所, 集団｜in｜in Japan, in my class\n　複数の対象｜of｜of all the mountains\n　期間｜in｜in ten years\n　⇒ Japan は場所なので in\n　⚠ of は複数名詞の前に置く。範囲を示す語が単数か複数かで選ぶ。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_049', level: '2kyu', category: 'grammar',
    question: "( ) is important to check the expiration date before buying milk.",
    choices: [
      { key: 'A', text: "It" },
      { key: 'B', text: "There" },
      { key: 'C', text: "That" },
      { key: 'D', text: "What" },
    ],
    correctKey: 'A',
    explanation: '形式主語のItが正解。It is ... to do（〜することは…だ）の構文で、真の主語はto check以下です。「牛乳を買う前に賞味期限を確認することが大切だ」の意味です。There is構文は存在を表す別の構文で、ThatやWhatをこの位置に置くとto不定詞とつながりません。\n\n【図解】形式主語の構文\n　構文｜真主語｜例\n　It is 形容詞 to do｜to 不定詞｜It is important to check\n　It is 形容詞 that 節｜that 節｜It is clear that\n　There is 構文｜存在を表す｜There is a book\n　⇒ to 不定詞が続くので It\n　⚠ There is は存在文で形式主語ではない。構文の働きを取り違えない。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_050', level: '2kyu', category: 'grammar',
    question: "Both my brother and my sister ( ) working in Nagoya now.",
    choices: [
      { key: 'A', text: "is" },
      { key: 'B', text: "was" },
      { key: 'C', text: "are" },
      { key: 'D', text: "has been" },
    ],
    correctKey: 'C',
    explanation: 'both A and B（AもBも両方）は複数扱いなので、複数形の動詞areが正解。「兄も姉も今は名古屋で働いている」の意味です。is・was・has beenは単数形なので使えません。一方、either A or BやneitherA nor Bは原則としてBに動詞を一致させる点との違いも覚えておきましょう。\n\n【図解】相関接続詞と動詞の一致\n　主語の形｜動詞の一致｜例\n　both A and B｜複数扱い｜are\n　either A or B｜Bに一致｜is または are\n　neither A nor B｜Bに一致｜is または are\n　⇒ both A and B なので are\n　⚠ either と neither は近いほうの主語に合わせる。both だけが常に複数扱い。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_051', level: '2kyu', category: 'grammar',
    question: "( ) you pass me the salt, please?",
    choices: [
      { key: 'A', text: "May" },
      { key: 'B', text: "Could" },
      { key: 'C', text: "Must" },
      { key: 'D', text: "Need" },
    ],
    correctKey: 'B',
    explanation: '相手への丁寧な依頼はCould you 〜?（〜していただけますか）で表します。「塩を取っていただけますか」の意味です。May I 〜?は自分の行動の許可を求める表現で、主語youとは組み合わせません。Must you 〜?は「どうしても〜しなければならないのか」、Need you 〜?は古風な表現で、依頼には使いません。\n\n【図解】依頼と許可の表現\n　表現｜主語｜意味\n　Could you 〜｜you｜〜していただけますか（依頼）\n　May I 〜｜I｜〜してもよいですか（許可）\n　Would you mind doing｜you｜〜していただけますか（丁寧）\n　⇒ 相手に頼むなら Could you\n　⚠ May I の主語は自分。主語が you か I かで表現を選び分ける。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_052', level: '2kyu', category: 'grammar',
    question: "( ) vegetables in your own garden saves money and tastes better.",
    choices: [
      { key: 'A', text: "Grow" },
      { key: 'B', text: "Grown" },
      { key: 'C', text: "To growing" },
      { key: 'D', text: "Growing" },
    ],
    correctKey: 'D',
    explanation: '動名詞Growingが文の主語になる形が正解。「自分の庭で野菜を育てることは節約になるし、味も良い」の意味で、動名詞句全体が単数扱いなのでsavesと呼応します。原形Growでは主語になれず、過去分詞Grownも不可。To growなら正しい形ですが、To growingという形は存在しません。\n\n【図解】主語になれる形\n　形｜主語になれるか｜例\n　動名詞 doing｜なれる｜Growing vegetables saves\n　to 不定詞｜なれる｜To grow vegetables saves\n　動詞の原形｜なれない｜Grow は不可\n　⇒ 動名詞が主語なら単数扱いで saves\n　⚠ To growing という形は存在しない。to の後ろは原形になる。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_053', level: '2kyu', category: 'grammar',
    question: "The train has not arrived ( ), so let's wait a little longer.",
    choices: [
      { key: 'A', text: "already" },
      { key: 'B', text: "still" },
      { key: 'C', text: "never" },
      { key: 'D', text: "yet" },
    ],
    correctKey: 'D',
    explanation: '現在完了の否定文で「まだ〜していない」はnot ... yetで表します。「電車はまだ到着していないので、もう少し待ちましょう」の意味で、文末のyetが正解。alreadyは肯定文で「すでに」、stillは否定文では動詞の前に置き、neverは「一度も〜ない」で文脈に合いません。疑問文のyet（もう〜したか）もあわせて覚えましょう。\n\n【図解】完了形とともに使う副詞\n　語｜使う文｜位置\n　yet｜否定文, 疑問文｜文末\n　already｜肯定文｜動詞の前か文末\n　still｜否定文でも｜not の前\n　⇒ まだ到着していないなら yet\n　⚠ still not と not yet では位置が異なる。副詞ごとの定位置を覚える。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_054', level: '2kyu', category: 'grammar',
    question: "Emma taught ( ) how to play the guitar by watching online videos.",
    choices: [
      { key: 'A', text: "her" },
      { key: 'B', text: "herself" },
      { key: 'C', text: "hers" },
      { key: 'D', text: "she" },
    ],
    correctKey: 'B',
    explanation: '主語Emmaと目的語が同一人物なので、再帰代名詞herselfが正解。teach oneself（独学する）の形で、「エマは動画を見てギターの弾き方を独学した」の意味です。herでは別の女性に教えたことになり、by watching online videosという独学の文脈に合いません。hersは所有代名詞、sheは主格で目的語になれません。\n\n【図解】再帰代名詞を使う表現\n　表現｜意味｜例\n　teach oneself｜独学する｜taught herself\n　enjoy oneself｜楽しむ｜enjoy yourself\n　by oneself｜ひとりで｜by himself\n　⇒ 動画を見て自分で覚えたなら herself\n　⚠ her にすると別人に教えた意味になる。主語と目的語が同一かを確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_055', level: '2kyu', category: 'grammar',
    question: "The town is known ( ) its hot springs and delicious soba noodles.",
    choices: [
      { key: 'A', text: "to" },
      { key: 'B', text: "as" },
      { key: 'C', text: "for" },
      { key: 'D', text: "with" },
    ],
    correctKey: 'C',
    explanation: 'be known for 〜（〜で知られている・〜が有名の理由である）が正解。「その町は温泉とおいしいそばで知られている」の意味です。be known to 人は「人に知られている」、be known as 〜は「〜として知られている」（名称・肩書きが続く）で、それぞれ意味が異なります。この使い分けは頻出ポイントです。\n\n【図解】be known の前置詞\n　形｜意味｜後ろに来るもの\n　be known for｜〜で有名だ｜有名な理由\n　be known as｜〜として知られる｜名称, 肩書き\n　be known to｜〜に知られている｜知る側の人\n　⇒ 温泉とそばが有名の理由なら for\n　⚠ for と as の取り違えが最頻出。理由か名称かで判断する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_056', level: '2kyu', category: 'grammar',
    question: "( ) finished his homework, Taro went out to play soccer.",
    choices: [
      { key: 'A', text: "Having" },
      { key: 'B', text: "Had" },
      { key: 'C', text: "Have" },
      { key: 'D', text: "To have" },
    ],
    correctKey: 'A',
    explanation: '完了形の分詞構文Having + 過去分詞が正解。主節より前に完了した動作を表し、「宿題を終えてから、タロウはサッカーをしに出かけた」の意味です。After he had finished his homeworkの書き換えと考えられます。Had・Haveは分詞構文の形にならず、To haveは不定詞で「〜するために」の意味になり不自然です。\n\n【図解】分詞構文の形\n　形｜表す時間関係｜書き換え\n　Having done｜主節より前｜After he had done\n　Doing｜主節と同時｜While he was doing\n　Done｜受動｜When it was done\n　⇒ 宿題を終えた後なら Having finished\n　⚠ Had や Have では分詞構文にならない。ing 形で始まる点が構文成立の条件。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu6_057', level: '2kyu', category: 'grammar',
    question: "We were very glad ( ) that our team had won the championship.",
    choices: [
      { key: 'A', text: "hearing" },
      { key: 'B', text: "to hear" },
      { key: 'C', text: "heard" },
      { key: 'D', text: "hear" },
    ],
    correctKey: 'B',
    explanation: '感情の原因を表す不定詞の副詞的用法be glad to do（〜してうれしい）が正解。「チームが優勝したと聞いてとてもうれしかった」の意味です。glad・happy・sorry・surprisedなどの感情を表す形容詞の後には、原因を表すto不定詞を続けます。hearingやheardをこの位置に置く形は誤りです。\n\n【図解】感情の原因を表す不定詞\n　形容詞｜構文｜例\n　glad, happy｜be glad to do｜glad to hear\n　sorry｜be sorry to do｜sorry to hear\n　surprised｜be surprised to do｜surprised to see\n　⇒ 知らせを聞いてうれしいなら to hear\n　⚠ 動名詞は続かない。感情形容詞の後ろは to 不定詞が原則。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_058', level: '2kyu', category: 'grammar',
    question: "I have two cats; one is black, and ( ) is white.",
    choices: [
      { key: 'A', text: "the other" },
      { key: 'B', text: "another" },
      { key: 'C', text: "other" },
      { key: 'D', text: "others" },
    ],
    correctKey: 'A',
    explanation: '2つのうち「一方はone、残りのもう一方はthe other」で表します。「猫を2匹飼っていて、1匹は黒、もう1匹は白だ」の意味です。残りが1つに特定されるためtheがつきます。anotherは「（3つ以上の中の）別のもう1つ」、otherは単独では代名詞として使えず、othersは「他の複数のもの」を表すため2匹の場面には合いません。\n\n【図解】不定代名詞の使い分け\n　場面｜表現｜意味\n　2つのうち残り1つ｜the other｜特定される\n　3つ以上のうち別の1つ｜another｜不特定\n　残り全部（複数）｜the others｜特定される複数\n　⇒ 猫が2匹なら one と the other\n　⚠ another は「もう一つ別の」で残りが特定されない場合。総数で使い分ける。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_059', level: '2kyu', category: 'grammar',
    question: "There isn't ( ) milk left in the refrigerator, so I'll buy some.",
    choices: [
      { key: 'A', text: "some" },
      { key: 'B', text: "no" },
      { key: 'C', text: "none" },
      { key: 'D', text: "any" },
    ],
    correctKey: 'D',
    explanation: '否定文ではnot ... any（少しも〜ない）を使います。「冷蔵庫に牛乳が残っていないので買ってきます」の意味でanyが正解。someは肯定文で使うのが原則です。noを使う場合はThere is no milkとnotなしの形になり、isn\'t noは二重否定で誤り。noneは代名詞なので直後に名詞milkを続けられません。\n\n【図解】some と any の使い分け\n　語｜使う文｜例外\n　some｜肯定文｜勧誘の疑問文にも使う\n　any｜否定文, 疑問文｜肯定文では「どんな〜でも」\n　no｜否定の意味を持つ形容詞｜not と併用しない\n　⇒ 否定文なので any\n　⚠ isn’t no は二重否定で誤り。no を使うなら not を消す。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_060', level: '2kyu', category: 'grammar',
    question: "Hurry up, ( ) you will miss the last bus.",
    choices: [
      { key: 'A', text: "and" },
      { key: 'B', text: "so" },
      { key: 'C', text: "or" },
      { key: 'D', text: "but" },
    ],
    correctKey: 'C',
    explanation: '命令文 + or ...（〜しなさい、さもないと…）の構文が正解。「急ぎなさい、さもないと最終バスに乗り遅れますよ」の意味です。命令文 + and ...は「〜しなさい、そうすれば…」と良い結果が続く場合に使います。Hurry up, and you will catch the bus.との対比で覚えましょう。so・butはこの構文では使いません。\n\n【図解】命令文と接続詞\n　形｜意味｜続く結果\n　命令文 ＋ or｜さもないと｜悪い結果\n　命令文 ＋ and｜そうすれば｜良い結果\n　命令文 ＋ 、please｜丁寧な依頼｜（結果なし）\n　⇒ 乗り遅れるという悪い結果なら or\n　⚠ and と or で結果の良し悪しが逆になる。後半の内容で接続詞を選ぶ。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_061', level: '2kyu', category: 'grammar',
    question: "( ) beautiful the cherry blossoms along this river are!",
    choices: [
      { key: 'A', text: "How" },
      { key: 'B', text: "What" },
      { key: 'C', text: "So" },
      { key: 'D', text: "Very" },
    ],
    correctKey: 'A',
    explanation: '感嘆文はHow + 形容詞 + 主語 + 動詞!の語順を取ります。「この川沿いの桜はなんて美しいのだろう」の意味でHowが正解。Whatを使う場合はWhat beautiful cherry blossoms these are!のように後ろに名詞を伴います。直後に形容詞だけが続くか、名詞句が続くかでHowとWhatを使い分けるのがポイントです。\n\n【図解】感嘆文の作り方\n　形｜語順｜例\n　How ＋ 形容詞または副詞 ＋ 主語 ＋ 動詞｜形容詞のみ｜How beautiful they are\n　What ＋ a ＋ 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞｜名詞を伴う｜What a nice day it is\n　省略形｜主語と動詞を省く｜How nice\n　⇒ 直後が形容詞だけなら How\n　⚠ 名詞が続くなら What。空所の直後の品詞で判断する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_062', level: '2kyu', category: 'grammar',
    question: "I ( ) rather stay home tonight than go to the party.",
    choices: [
      { key: 'A', text: "had" },
      { key: 'B', text: "should" },
      { key: 'C', text: "would" },
      { key: 'D', text: "could" },
    ],
    correctKey: 'C',
    explanation: 'would rather A than B（BするよりむしろAしたい）の慣用表現が正解。「今夜はパーティーに行くより家にいたい」の意味です。rather の後は動詞の原形が続きます。had rather は現代英語では使われず、should rather・could ratherという定型表現もありません。would rather not do（むしろ〜したくない）の否定形も覚えましょう。\n\n【図解】would rather の使い方\n　形｜意味｜後ろの形\n　would rather do｜むしろ〜したい｜原形\n　would rather A than B｜BよりAしたい｜原形と原形\n　would rather 主語 過去形｜相手に〜してほしい｜過去形\n　⇒ than と呼応するので would rather\n　⚠ had rather は現代英語ではほぼ使わない。would rather を標準形として覚える。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_063', level: '2kyu', category: 'grammar',
    question: "Please hand in your report ( ) Friday at the latest.",
    choices: [
      { key: 'A', text: "until" },
      { key: 'B', text: "by" },
      { key: 'C', text: "for" },
      { key: 'D', text: "during" },
    ],
    correctKey: 'B',
    explanation: '期限（〜までに完了）を表す前置詞はbyです。「遅くとも金曜日までにレポートを提出してください」の意味です。untilは「〜まで（ずっと）」と継続を表すため、提出のような一回の動作には使えません。stay until Friday（金曜までずっと滞在する）との違いで覚えましょう。for・duringは期間を表し文意に合いません。\n\n【図解】期限と継続の前置詞\n　語｜意味｜動作の性質\n　by｜〜までに｜一回で終わる動作\n　until｜〜までずっと｜継続する状態\n　during｜〜の間に｜期間\n　⇒ 提出という一回の動作なら by\n　⚠ submit until Friday とはしない。動作が継続するかどうかで選ぶ。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_064', level: '2kyu', category: 'grammar',
    question: "It was ( ) an interesting lecture that nobody fell asleep.",
    choices: [
      { key: 'A', text: "so" },
      { key: 'B', text: "very" },
      { key: 'C', text: "too" },
      { key: 'D', text: "such" },
    ],
    correctKey: 'D',
    explanation: 'such + a/an + 形容詞 + 名詞 + that ...（とても…な〜なので…）の構文が正解。「とても面白い講義だったので誰も居眠りしなかった」の意味です。soを使う場合はso interesting a lectureという語順になります。直後に冠詞anが来ているのでsuchを選ぶのがポイント。very・tooはthat節と呼応しません。\n\n【図解】such と so の語順\n　語｜語順｜例\n　such｜such ＋ a ＋ 形容詞 ＋ 名詞｜such an interesting lecture\n　so｜so ＋ 形容詞 ＋ a ＋ 名詞｜so interesting a lecture\n　結果節｜どちらも that｜that nobody slept\n　⇒ 直後が an なら such\n　⚠ so の場合は冠詞の位置が入れ替わる。冠詞の位置で語を選び分ける。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_065', level: '2kyu', category: 'grammar',
    question: "The plane is ( ) to take off, so please fasten your seat belt.",
    choices: [
      { key: 'A', text: "soon" },
      { key: 'B', text: "near" },
      { key: 'C', text: "while" },
      { key: 'D', text: "about" },
    ],
    correctKey: 'D',
    explanation: 'be about to do（まさに〜しようとしている）の慣用表現が正解。「飛行機はまもなく離陸しますので、シートベルトをお締めください」の意味です。be going to doより差し迫った直前の未来を表します。soon・near・whileをbe ... to doの形に当てはめる定型表現はありません。on the point of -ingも同様の意味です。\n\n【図解】直前の未来を表す表現\n　表現｜意味｜差し迫り度\n　be about to do｜まさに〜しようとしている｜非常に高い\n　be going to do｜〜する予定だ｜計画段階\n　be on the point of doing｜〜する寸前だ｜非常に高い\n　⇒ 離陸直前の機内放送なら be about to\n　⚠ about の後ろは to 不定詞。on the point of なら動名詞になる点と区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_066', level: '2kyu', category: 'grammar',
    question: "The language ( ) in Brazil is Portuguese, not Spanish.",
    choices: [
      { key: 'A', text: "speaking" },
      { key: 'B', text: "spoken" },
      { key: 'C', text: "speaks" },
      { key: 'D', text: "to speaking" },
    ],
    correctKey: 'B',
    explanation: '言語は「話される」側なので、受動の意味を持つ過去分詞spokenが名詞The languageを修飾します。「ブラジルで話されている言語はスペイン語ではなくポルトガル語だ」の意味です。speakingでは言語が「話す」ことになり不自然。文全体の動詞はisなので、speaksを入れると動詞が重複してしまいます。\n\n【図解】名詞を修飾する分詞\n　形｜意味｜例\n　過去分詞｜〜される｜the language spoken\n　現在分詞｜〜している｜the man speaking\n　関係詞節｜どちらも可｜which is spoken\n　⇒ 言語は話される側なので spoken\n　⚠ 文の動詞は is。述語動詞を入れると動詞が2つになる点に注意する。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_067', level: '2kyu', category: 'grammar',
    question: "Aki is not answering her phone. She ( ) have left it at home again.",
    choices: [
      { key: 'A', text: "should" },
      { key: 'B', text: "would" },
      { key: 'C', text: "may" },
      { key: 'D', text: "ought" },
    ],
    correctKey: 'C',
    explanation: 'may have + 過去分詞（〜したかもしれない）で過去の出来事への推量を表します。「アキが電話に出ない。また家に置いてきたのかもしれない」の意味でmayが正解。should have leftは「置いてくるべきだったのに」という非難になり文脈に合いません。wouldは条件がないと使えず、oughtはought toの形でtoが必要です。\n\n【図解】助動詞 ＋ have ＋ 過去分詞\n　形｜意味｜含み\n　may have done｜〜したかもしれない｜推量\n　must have done｜〜したに違いない｜強い推量\n　should have done｜〜すべきだった｜非難, 後悔\n　⇒ 置き忘れの可能性を述べるなら may\n　⚠ should have では責める意味になる。推量か非難かを文脈で判断する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_068', level: '2kyu', category: 'grammar',
    question: "This camera is ( ) expensive than that one, but the quality is almost the same.",
    choices: [
      { key: 'A', text: "less" },
      { key: 'B', text: "little" },
      { key: 'C', text: "least" },
      { key: 'D', text: "fewer" },
    ],
    correctKey: 'A',
    explanation: 'less + 形容詞 + than 〜（〜より…でない）の劣等比較が正解。「このカメラはあちらより値段が安いが、品質はほぼ同じだ」の意味です。thanと呼応する比較級はlessです。littleは原級、leastは最上級でthanと呼応せず、fewerは数えられる名詞の数を比べる語なので形容詞expensiveは修飾できません。\n\n【図解】劣等比較の作り方\n　形｜意味｜比べるもの\n　less ＋ 形容詞 ＋ than｜〜ほど…でない｜性質の程度\n　fewer ＋ 可算名詞 ＋ than｜〜より少ない｜数\n　not as ＋ 原級 ＋ as｜〜ほど…でない｜同義表現\n　⇒ than と呼応する比較級なら less\n　⚠ fewer は数を比べる語。形容詞を修飾することはできない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_069', level: '2kyu', category: 'grammar',
    question: "My grandfather enjoys ( ) vegetables in his garden every morning.",
    choices: [
      { key: 'A', text: "grow" },
      { key: 'B', text: "to grow" },
      { key: 'C', text: "growing" },
      { key: 'D', text: "grown" },
    ],
    correctKey: 'C',
    explanation: 'enjoyは動名詞のみを目的語に取る動詞なので、growingが正解。「祖父は毎朝、庭で野菜を育てるのを楽しんでいる」の意味です。enjoy to doという形は誤りです。同じく動名詞のみを取る動詞にfinish・mind・avoid・give up・practiceなどがあり、まとめて覚えると効率的です。\n\n【図解】動名詞のみをとる動詞\n　動詞｜意味｜例\n　enjoy｜楽しむ｜enjoy growing\n　finish, avoid, mind｜終える, 避ける, 気にする｜finish reading\n　give up, practice｜やめる, 練習する｜give up smoking\n　⇒ enjoy の後ろは growing\n　⚠ enjoy to do とはしない。to 不定詞をとる want や hope と区別する。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu6_070', level: '2kyu', category: 'grammar',
    question: "If I had more free time, I ( ) volunteer at the animal shelter.",
    choices: [
      { key: 'A', text: "will" },
      { key: 'B', text: "can" },
      { key: 'C', text: "must" },
      { key: 'D', text: "would" },
    ],
    correctKey: 'D',
    explanation: '仮定法過去の文です。if節が過去形（had）なので、主節はwould + 原形になります。「もっと自由な時間があれば、動物保護施設でボランティアをするのだが」と現在の事実に反する仮定を表します。will・can・mustは直説法の助動詞で、仮定法過去の帰結節には過去形の助動詞（would・could・mightなど）を使います。\n\n【図解】仮定法過去の帰結節\n　if 節｜主節｜表す時\n　過去形｜would, could, might ＋ 原形｜現在の仮定\n　had 過去分詞｜would have ＋ 過去分詞｜過去の仮定\n　現在形｜will ＋ 原形｜現実的な条件\n　⇒ if 節が had なら主節は would\n　⚠ will や can では直説法になる。仮定法では助動詞も過去形にする。',
    difficulty: 'standard',
  },

  // ===== READING (071-100) =====
  {
    id: 'eiken_2kyu6_071', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_1}

According to the passage, for whom could delivery drones be especially valuable?`,
    choices: [
      { key: 'A', text: "People living in city apartments with many shops nearby." },
      { key: 'B', text: "People on islands or in mountain villages with few delivery drivers." },
      { key: 'C', text: "Customers who often order heavy furniture." },
      { key: 'D', text: "Staff working at large international airports." },
    ],
    correctKey: 'B',
    explanation: '本文に"drones could be especially valuable for people living on islands or in mountain villages with few delivery drivers"（配達員の少ない島や山間の村に住む人々にとって特に価値がある）とあり、Bが正解。Cはドローンがまだ重い荷物を運べないとあるため誤り。A・Dは本文に記述がありません。\n\n【図解】ドローン配送が有効な場面\n　条件｜本文の記述｜理由\n　離島｜islands｜輸送手段が限られる\n　山間の村｜mountain villages｜配達員が少ない\n　制約｜重い荷物は運べない｜用途は限定\n　⇒ 配達網が薄い地域で価値が高い\n　⚠ 都市部の一般配送が主用途ではない。適する場面を本文で確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_072', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_1}

In the passage, the word "grounds" most closely means:`,
    choices: [
      { key: 'A', text: "crashes them into fields" },
      { key: 'B', text: "cleans them carefully" },
      { key: 'C', text: "charges their batteries" },
      { key: 'D', text: "prevents them from flying" },
    ],
    correctKey: 'D',
    explanation: 'groundは動詞で「（航空機などを）飛べなくする・地上にとどめる」という意味があり、Dが正解。「悪天候になるとドローンは簡単に飛行できなくなる」という文脈です。名詞の「地面」の意味から派生した用法で、飛行機の欠航のニュースなどでも使われます。A・B・Cはいずれも文脈に合いません。\n\n【図解】ground の品詞と意味\n　品詞｜意味｜例\n　動詞｜飛行を差し止める｜flights were grounded\n　名詞｜地面, 土地｜on the ground\n　名詞（複数）｜根拠｜on the grounds that\n　⇒ 悪天候で飛べなくなるなら grounded\n　⚠ 名詞の「地面」の意味で読むと文意が通らない。動詞用法を押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu6_073', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_1}

What do most experts expect for the near future of drone delivery?`,
    choices: [
      { key: 'A', text: "Drones will first serve remote regions and emergencies." },
      { key: 'B', text: "Drones will immediately replace all delivery vans." },
      { key: 'C', text: "Bicycle deliveries will be banned in cities." },
      { key: 'D', text: "Drones will mainly carry heavy furniture." },
    ],
    correctKey: 'A',
    explanation: '本文最終文に"most experts expect drones to serve remote regions and emergencies first, while vans and bicycles continue to handle ordinary city deliveries"（専門家の多くは、ドローンはまず遠隔地や緊急時に使われ、通常の市内配達はバンや自転車が担い続けると予想している）とあり、Aが正解。B・C・Dは本文の内容と矛盾します。\n\n【図解】専門家が見込む役割分担\n　用途｜担い手｜本文の記述\n　遠隔地, 緊急時｜ドローン｜serve first\n　通常の市内配達｜バンや自転車｜continue to handle\n　結論｜置き換えではなく補完｜役割分担\n　⇒ 用途に応じた使い分けが進む\n　⚠ 「既存の配送を完全に置き換える」は本文と矛盾。補完関係を読み取る。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_074', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_2}

Which benefit of green roofs is mentioned in the passage?`,
    choices: [
      { key: 'A', text: "They produce vegetables for local supermarkets." },
      { key: 'B', text: "They raise building temperatures throughout the year." },
      { key: 'C', text: "They absorb rainwater and insulate buildings." },
      { key: 'D', text: "They make drainage systems unnecessary." },
    ],
    correctKey: 'C',
    explanation: '本文に「緑化屋根は雨水を吸収して洪水を減らし、土と植物の層が建物を断熱して冷暖房費を削減する」とあり、Cが正解。Dは排水システムが不要になるとまでは述べられておらず、A・Bは本文に記述がありません。多数の緑化屋根が地区全体の気温を下げるヒートアイランド緩和効果も挙げられています。\n\n【図解】緑化屋根の効果\n　効果｜仕組み｜結果\n　洪水の抑制｜雨水を吸収する｜排水負荷の軽減\n　断熱｜土と植物の層｜冷暖房費の削減\n　都市の冷却｜多数設置で地区全体｜ヒートアイランド緩和\n　⇒ 保水と断熱が主な効果\n　⚠ 「排水設備が不要になる」とまでは述べていない。効果の程度を誇張しない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_075', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_2}

In the passage, the word "overwhelm" most closely means:`,
    choices: [
      { key: 'A', text: "prove too much for" },
      { key: 'B', text: "clean thoroughly" },
      { key: 'C', text: "cool down" },
      { key: 'D', text: "repair quickly" },
    ],
    correctKey: 'A',
    explanation: 'overwhelmは「〜を圧倒する・（処理能力を）超える」という意味で、Aの「〜の手に負えなくなる」が正解。嵐が排水システムの処理能力を超えると洪水が起こる、という文脈です。cleanは「掃除する」、cool downは「冷やす」、repairは「修理する」。be overwhelmed with 〜（〜で圧倒される）の形でも頻出します。\n\n【図解】overwhelm の意味\n　形｜意味｜例\n　overwhelm ＋ 目的語｜処理能力を超える｜overwhelm the system\n　be overwhelmed with｜圧倒される｜with work\n　overwhelming｜圧倒的な｜形容詞\n　⇒ 排水設備の容量を超えるなら overwhelm\n　⚠ 「掃除する」「冷やす」とは無関係。over（超えて）という接頭辞から意味を推測する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_076', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_2}

How are some cities dealing with the cost and weight problems of green roofs?`,
    choices: [
      { key: 'A', text: "By banning green roofs on old buildings." },
      { key: 'B', text: "By passing laws to make soil lighter." },
      { key: 'C', text: "By removing drainage systems from streets." },
      { key: 'D', text: "By offering subsidies or requiring green roofs only on large new buildings." },
    ],
    correctKey: 'D',
    explanation: '本文最終文に"some cities now offer subsidies or require green roofs only on large new buildings, where the extra cost is a small share of the total budget"（補助金を出すか、追加費用が総予算のごく一部で済む大型新築建物にのみ緑化屋根を義務づける都市もある）とあり、Dが正解。A・B・Cは本文にありません。\n\n【図解】費用問題への行政の対応\n　方策｜本文の記述｜対象\n　補助金｜subsidies｜設置費の一部を支援\n　義務化の範囲｜大型の新築建物のみ｜追加費用の比率が小さい\n　理由｜総予算に占める割合が小｜負担が相対的に軽い\n　⇒ 補助金と対象を絞った義務化が対策\n　⚠ 全建物への一律義務化ではない。適用範囲の限定を読み落とさない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_077', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_3}

According to the passage, how does music help athletes?`,
    choices: [
      { key: 'A', text: "It directly strengthens their muscles." },
      { key: 'B', text: "It keeps their rhythm, distracts from tiredness, and slightly improves endurance." },
      { key: 'C', text: "It cools their bodies during exercise." },
      { key: 'D', text: "It improves their eyesight on open roads." },
    ],
    correctKey: 'B',
    explanation: '本文に「力強く安定したビートの音楽は、規則的なリズムを保つのを助け、疲労感から注意をそらし、持久力を小幅ながら測定可能な程度に向上させる」とあり、Bが正解。効果が最も大きいのはランニングや自転車など動きをテンポに合わせられる反復運動だとも述べられています。A・C・Dは本文にありません。\n\n【図解】音楽が運動に及ぼす効果\n　要素｜本文の記述｜効果\n　安定したビート｜規則的なリズムの維持｜動きが整う\n　注意の転換｜疲労感からそらす｜つらさが減る\n　持久力｜小幅だが測定可能な向上｜数値で確認できる\n　⇒ リズム維持と注意の転換が主な効果\n　⚠ 効果は「小幅」と明記されている。程度を過大に読み替えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_078', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_3}

Who appears to benefit least from listening to music while exercising?`,
    choices: [
      { key: 'A', text: "Complete beginners." },
      { key: 'B', text: "Recreational cyclists." },
      { key: 'C', text: "Elite athletes." },
      { key: 'D', text: "Rowers of all levels." },
    ],
    correctKey: 'C',
    explanation: '本文に"elite athletes appear to gain less than beginners, perhaps because they are trained to listen closely to their bodies"（エリート選手は初心者より効果が小さいようで、体の信号を注意深く聞くよう訓練されているためかもしれない）とあり、Cが正解。初心者の方が効果が大きいとされているためAは逆です。B・Dの比較は本文にありません。\n\n【図解】効果の個人差\n　対象｜効果の大きさ｜理由\n　初心者｜大きい｜体の信号に頼らない\n　エリート選手｜小さい｜体の信号を読む訓練を受けている\n　適した運動｜反復運動｜テンポに合わせやすい\n　⇒ 熟練者ほど効果が小さい\n　⚠ 効果の大小を逆に読まない。gain less than beginners の比較の向きを確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_079', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_3}

Why do some competitions ban headphones?`,
    choices: [
      { key: 'A', text: "Because loud music damages the hearing of spectators." },
      { key: 'B', text: "Because batteries make runners too heavy." },
      { key: 'C', text: "Because most songs are protected by copyright." },
      { key: 'D', text: "For safety reasons and because music is seen as artificial assistance." },
    ],
    correctKey: 'D',
    explanation: '本文最終文に"partly for safety on open roads, and partly because officials consider music a form of artificial assistance"（一般道での安全のためと、音楽を人工的な補助とみなす主催者がいるため）とあり、Dが正解。A・B・Cはいずれも本文に記述のない理由です。\n\n【図解】大会で音楽が禁止される理由\n　理由｜本文の記述｜観点\n　安全｜一般道での危険｜周囲の音が聞こえない\n　公平性｜artificial assistance とみなす｜補助具の扱い\n　結果｜使用を禁じる大会がある｜規則で制限\n　⇒ 安全と公平性の2点が理由\n　⚠ 記録の信頼性や機器の故障は本文にない。理由を本文の記述に限定する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_080', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_4}

What have investigators found about clothing recycling programs?`,
    choices: [
      { key: 'A', text: "Only a small portion of collected garments becomes new clothes." },
      { key: 'B', text: "Collection boxes are usually empty." },
      { key: 'C', text: "Recycled clothes cost more than new ones." },
      { key: 'D', text: "Brands refuse to announce any recycling programs." },
    ],
    correctKey: 'A',
    explanation: '本文に"investigators have found that only a small portion of collected garments is actually turned into new clothes"（回収された衣類のうち実際に新しい服に生まれ変わるのはごく一部だと調査で判明した）とあり、Aが正解。多くは海外に送られ、現地の古着市場を圧迫しかねないとも述べられています。B・C・Dは本文にありません。\n\n【図解】衣料リサイクルの実態\n　段階｜本文の記述｜結果\n　回収｜店頭などで回収｜量は多い\n　再生｜only a small portion｜新しい服になるのは一部\n　残り｜海外へ送られる｜現地の古着市場を圧迫\n　⇒ 実際に再生される割合はごく一部\n　⚠ 回収量と再生量を同一視しない。数量表現の限定に注意する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_081', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_4}

In the passage, the word "disposable" most closely means:`,
    choices: [
      { key: 'A', text: "extremely valuable" },
      { key: 'B', text: "highly fashionable" },
      { key: 'C', text: "made to be thrown away after brief use" },
      { key: 'D', text: "resistant to water" },
    ],
    correctKey: 'C',
    explanation: 'disposableは「使い捨ての」という意味で、Cが正解。ファストファッションが買い物客に服をほとんど使い捨てのように扱わせている、という文脈です。動詞dispose of 〜（〜を処分する）から派生した形容詞で、disposable chopsticks（割り箸）などにも使われます。A・B・Dは文脈に合いません。\n\n【図解】disposable の意味\n　語｜意味｜例\n　disposable｜使い捨ての｜disposable chopsticks\n　dispose of｜処分する｜動詞句\n　durable｜耐久性のある｜対になる語\n　⇒ 服を使い捨て同然に扱うなら disposable\n　⚠ 動詞 dispose の後ろには of が必要。形容詞形との構文の違いを押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_082', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_4}

According to campaigners, what is the real solution to fast fashion's problems?`,
    choices: [
      { key: 'A', text: "Burning old clothes at home instead of in landfills." },
      { key: 'B', text: "Buying fewer, better-made items and wearing them for years." },
      { key: 'C', text: "Shipping more used clothing overseas." },
      { key: 'D', text: "Producing new garments in one week instead of two." },
    ],
    correctKey: 'B',
    explanation: '本文最終文に"the real solution lies with consumers themselves: buying fewer, better-made items, repairing them, and wearing them for years"（本当の解決策は消費者自身にあり、より少なく質の良い服を買い、修理し、何年も着ることだ）とあり、Bが正解。Cは古着の海外輸送がむしろ問題とされており、A・Dは本文の趣旨に反します。\n\n【図解】本文が示す解決策\n　主体｜行動｜本文の記述\n　消費者｜買う量を減らす｜buying fewer\n　消費者｜質の良い物を選ぶ｜better-made\n　消費者｜修理して長く着る｜repairing, wearing for years\n　⇒ 消費者側の行動変容が本当の解決策\n　⚠ リサイクルへの依存は解決にならないという論調。回収制度の拡充を答えにしない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_083', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_5}

Why are businesses tempted to post fake reviews?`,
    choices: [
      { key: 'A', text: "Because writing honest reviews takes too much time." },
      { key: 'B', text: "Because platforms pay companies for every review." },
      { key: 'C', text: "Because software deletes all real reviews." },
      { key: 'D', text: "Because a small difference in ratings can measurably change income." },
    ],
    correctKey: 'D',
    explanation: '本文に"A difference of half a star can measurably change a shop\'s income, which creates a strong temptation to cheat"（星半分の差が店の収入を目に見えて変えるため、不正への強い誘惑が生まれる）とあり、Dが正解。A・B・Cはいずれも本文に記述がありません。\n\n【図解】不正レビューが生まれる仕組み\n　要素｜本文の記述｜影響\n　評価の差｜星半分｜収入が目に見えて変わる\n　誘因｜strong temptation to cheat｜不正の動機\n　結果｜業者による偽レビュー｜信頼性の低下\n　⇒ わずかな評価差が大きな収入差を生む\n　⚠ 評価制度そのものの廃止は論じられていない。原因の説明に絞って読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_084', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_5}

In the passage, the word "glowing" most closely means:`,
    choices: [
      { key: 'A', text: "shining with electric light" },
      { key: 'B', text: "highly enthusiastic and full of praise" },
      { key: 'C', text: "angry and critical" },
      { key: 'D', text: "written anonymously" },
    ],
    correctKey: 'B',
    explanation: 'glowingは「絶賛の・べたぼめの」という意味で、Bが正解。自社製品への絶賛レビューを書かせ、競合には辛辣なレビューを書かせる業者がいる、という文脈です。直後のharsh ones（辛辣なレビュー）との対比からも判断できます。「光り輝く」という文字どおりの意味から比喩的に発展した用法です。\n\n【図解】glowing の意味\n　語｜意味｜文脈\n　glowing｜絶賛の｜glowing reviews\n　harsh｜辛辣な｜対比される語\n　原義｜光り輝く｜比喩的に発展\n　⇒ harsh ones と対比されるなら絶賛の意味\n　⚠ 文字どおり「光る」と読むと文意が通らない。対比表現から意味を推定する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_085', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_5}

What do consumer groups advise readers of online reviews to do?`,
    choices: [
      { key: 'A', text: "Pay most attention to detailed reviews that mention both good and bad points." },
      { key: 'B', text: "Trust only reviews with five-star ratings." },
      { key: 'C', text: "Ignore every review on major platforms." },
      { key: 'D', text: "Post fake reviews to balance out the others." },
    ],
    correctKey: 'A',
    explanation: '本文最終文に「極端な意見には懐疑的になり、良い点と悪い点の両方に触れた詳細なレビューに最も注意を払い、レビュアーにバランスの取れたコメントの履歴があるか確認するよう助言している」とあり、Aが正解。Bの五つ星だけを信じる行動はむしろ危険とされ、C・Dは本文にありません。\n\n【図解】レビューの見極め方\n　助言｜本文の記述｜理由\n　極端な意見に懐疑的になる｜be skeptical｜偏りの可能性\n　詳細なレビューを重視｜良い点と悪い点の両方｜バランス\n　投稿者の履歴を確認｜balanced comments｜信頼性の判断\n　⇒ 詳細でバランスのとれた評価を重視する\n　⚠ 五つ星だけを見る行動は危険とされる。助言の内容を正確に読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_086', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_6}

Why is seaweed farming considered environmentally attractive?`,
    choices: [
      { key: 'A', text: "It requires large amounts of chemical fertilizer." },
      { key: 'B', text: "It can be done on abandoned farmland." },
      { key: 'C', text: "It needs no fresh water, fertilizer, or farmland, and absorbs carbon dioxide." },
      { key: 'D', text: "It raises the temperature of the surrounding sea." },
    ],
    correctKey: 'C',
    explanation: '本文に"seaweed needs no fresh water, no fertilizer, and no farmland; it simply grows on ropes hanging in the sea, absorbing carbon dioxide and excess nutrients"（海藻は真水も肥料も農地も必要とせず、海中のロープで育ち、二酸化炭素や過剰な栄養分を吸収する）とあり、Cが正解。A・B・Dは本文と矛盾します。\n\n【図解】海藻養殖の利点\n　必要としないもの｜本文の記述｜比較対象\n　真水｜no fresh water｜陸上の農業\n　肥料｜no fertilizer｜陸上の農業\n　農地｜no farmland｜陸上の農業\n　⇒ 資源を使わず二酸化炭素と栄養分を吸収する\n　⚠ 「大量の淡水が必要」といった記述は本文と正反対。否定形の列挙を読み落とさない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_087', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_6}

What are scientists testing about cattle feed?`,
    choices: [
      { key: 'A', text: "Whether adding certain seaweeds can sharply cut the methane cattle produce." },
      { key: 'B', text: "Whether cows can live in shallow ocean water." },
      { key: 'C', text: "Whether seaweed makes milk taste sweeter." },
      { key: 'D', text: "Whether cattle can digest plastic packaging." },
    ],
    correctKey: 'A',
    explanation: '本文に"Scientists are testing whether adding a small amount of certain seaweeds to cattle feed can sharply cut the methane the animals produce"（特定の海藻を少量、牛の飼料に加えることで牛が出すメタンを大幅に減らせるか科学者が検証している）とあり、Aが正解。B・C・Dは本文にありません。\n\n【図解】飼料への海藻添加の狙い\n　要素｜本文の記述｜効果\n　添加量｜a small amount｜少量でよい\n　対象｜cattle feed｜牛の飼料\n　狙い｜メタンの大幅削減｜温室効果ガス対策\n　⇒ 牛のメタン排出を減らせるかを検証中\n　⚠ 牛乳の増産や飼料費の削減が目的ではない。検証中である点も押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_088', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_6}

In the passage, the word "scarce" most closely means:`,
    choices: [
      { key: 'A', text: "dangerous to operate" },
      { key: 'B', text: "enormous in size" },
      { key: 'C', text: "extremely modern" },
      { key: 'D', text: "not available in sufficient numbers" },
    ],
    correctKey: 'D',
    explanation: 'scarceは「乏しい・不足している」という意味で、Dが正解。多くの地域では加工施設が不足している、という文脈です。dangerousは「危険な」、enormousは「巨大な」、modernは「現代的な」。名詞形scarcity（不足）、類義語insufficient・limitedもあわせて覚えましょう。\n\n【図解】scarce の意味\n　語｜品詞｜意味\n　scarce｜形容詞｜乏しい, 不足している\n　scarcity｜名詞｜不足\n　abundant｜形容詞｜豊富な（対義語）\n　⇒ 加工施設が足りないなら scarce\n　⚠ 「巨大な」「危険な」とは意味の軸が違う。数量の不足を表す語である。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_089', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_7}

How do shop owners usually react when car-free plans are first announced?`,
    choices: [
      { key: 'A', text: "They immediately support the change." },
      { key: 'B', text: "They often protest, fearing customers will go elsewhere." },
      { key: 'C', text: "They move their shops to the suburbs at once." },
      { key: 'D', text: "They start buying delivery vehicles." },
    ],
    correctKey: 'B',
    explanation: '本文に"Shop owners often protest at first, fearing that customers who cannot park nearby will go elsewhere"（店主たちは当初、近くに駐車できない客が他へ行ってしまうことを恐れてしばしば抗議する）とあり、Bが正解。しかし研究では歩行者や自転車利用者の方が来店頻度が高く、売上はむしろ増えることが多いと続きます。A・C・Dは本文にありません。\n\n【図解】歩行者空間化への反応\n　立場｜当初の反応｜根拠\n　店主｜抗議する｜近くに駐車できず客が減ると考える\n　調査結果｜売上はむしろ増える｜来店頻度と滞在時間\n　結論｜懸念と実態が食い違う｜事前予想は外れる\n　⇒ 駐車できないと客が減るという懸念が理由\n　⚠ 懸念と実際の結果は逆。どちらを問われているかを設問で確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_090', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_7}

What did studies in several cities find about car-free centers?`,
    choices: [
      { key: 'A', text: "Sales usually fall permanently after cars are banned." },
      { key: 'B', text: "Drivers visit shops more often than cyclists." },
      { key: 'C', text: "Air quality becomes worse in the city center." },
      { key: 'D', text: "Pedestrians and cyclists visit more often, and sales often rise." },
    ],
    correctKey: 'D',
    explanation: '本文に"pedestrians and cyclists tend to visit more often and stay longer than drivers, and street-level businesses frequently see sales rise after cars are removed"（歩行者と自転車利用者は車の運転者より頻繁に訪れて長く滞在し、路面店の売上は車の排除後にしばしば増加する）とあり、Dが正解。A・B・Cは調査結果と正反対です。\n\n【図解】歩行者と運転者の比較\n　項目｜歩行者と自転車｜運転者\n　来店頻度｜高い｜低い\n　滞在時間｜長い｜短い\n　売上への影響｜増加する傾向｜（比較対象）\n　⇒ 車の排除後に路面店の売上は増えることが多い\n　⚠ 直感に反する結果である点が出題の狙い。調査結果を本文どおりに読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_091', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_7}

In the passage, the word "reverse" most closely means:`,
    choices: [
      { key: 'A', text: "repeat many times" },
      { key: 'B', text: "announce officially" },
      { key: 'C', text: "change back to the previous state" },
      { key: 'D', text: "expand to other areas" },
    ],
    correctKey: 'C',
    explanation: 'reverseは「〜を元に戻す・逆転させる」という意味で、Cが正解。中心部を歩行者空間にした都市のうち、その変更を撤回した都市はほとんどない、という文脈です。repeatは「繰り返す」、announceは「発表する」、expandは「拡大する」。名詞・形容詞としての用法（the reverse = 逆）も覚えておきましょう。\n\n【図解】reverse の意味\n　品詞｜意味｜例\n　動詞｜元に戻す, 逆転させる｜reverse the change\n　名詞｜逆, 反対｜the reverse\n　形容詞｜逆の｜in reverse order\n　⇒ 変更を撤回するなら reverse\n　⚠ 「繰り返す」「拡大する」とは方向が違う。元に戻すという意味を押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_092', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_8}

What warning do some studies give about coffee growing?`,
    choices: [
      { key: 'A', text: "Half of today's coffee-growing areas could become unsuitable by 2050." },
      { key: 'B', text: "All coffee will disappear from shops by 2030." },
      { key: 'C', text: "Robusta will become extinct within a decade." },
      { key: 'D', text: "Shade trees are killing most coffee plants." },
    ],
    correctKey: 'A',
    explanation: '本文に"some studies warn that half of today\'s coffee-growing areas could become unsuitable by 2050"（現在のコーヒー栽培地の半分が2050年までに栽培に適さなくなる可能性があると警告する研究もある）とあり、Aが正解。Bはコーヒーが消えるのではなく価格と味が変わる未来だと述べられており誤り。C・Dは本文にありません。\n\n【図解】コーヒー栽培地の見通し\n　項目｜本文の記述｜時期\n　適地の減少｜半分が不適に｜2050年まで\n　根拠｜気温上昇と病害｜気候変動\n　結論｜生産地の移動が必要｜対応が急務\n　⇒ 現在の栽培地の半分が使えなくなる可能性\n　⚠ 「コーヒーが消える」とは述べていない。価格と味の変化という結論と区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_093', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_8}

In the passage, the word "tolerate" most closely means:`,
    choices: [
      { key: 'A', text: "strongly dislike" },
      { key: 'B', text: "endure without being harmed" },
      { key: 'C', text: "produce in large amounts" },
      { key: 'D', text: "hide from view" },
    ],
    correctKey: 'B',
    explanation: 'tolerateは「〜に耐える・〜を許容する」という意味で、Bが正解。忘れられていた野生種はアラビカよりはるかに暑さに耐えられる、という文脈です。dislikeは「嫌う」、produceは「生産する」、hideは「隠す」。名詞形tolerance（耐性・寛容）、形容詞tolerant（寛容な）もあわせて覚えましょう。\n\n【図解】tolerate の意味\n　語｜品詞｜意味\n　tolerate｜動詞｜耐える, 許容する\n　tolerance｜名詞｜耐性, 寛容\n　tolerant｜形容詞｜寛容な\n　⇒ 暑さに強い品種なら tolerate heat\n　⚠ 「嫌う」「隠す」とは無関係。耐性を表す語として覚える。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_094', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_8}

According to the passage, what future is likely for coffee drinkers?`,
    choices: [
      { key: 'A', text: "Coffee will become free in most cafes." },
      { key: 'B', text: "Nothing about coffee will change at all." },
      { key: 'C', text: "Morning coffee will completely disappear." },
      { key: 'D', text: "Higher prices and changing flavors." },
    ],
    correctKey: 'D',
    explanation: '本文最終文に"the likely future is not the disappearance of their morning cup, but higher prices and changing flavors"（朝の一杯がなくなるのではなく、価格の上昇と味の変化が起こりそうだ）とあり、Dが正解。Cの「完全に消える」は明確に否定されています。A・Bは本文にありません。\n\n【図解】将来のコーヒーの姿\n　項目｜本文の予測｜方向\n　入手可能性｜なくなりはしない｜維持\n　価格｜higher prices｜上昇\n　風味｜changing flavors｜変化\n　⇒ 消滅ではなく価格上昇と味の変化\n　⚠ 「完全に消える」は明確に否定されている。not A but B の構造を読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_095', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_9}

Why do dozens of governments offer special visas to digital nomads?`,
    choices: [
      { key: 'A', text: "To increase the number of flights at their airports." },
      { key: 'B', text: "To train local people as computer programmers." },
      { key: 'C', text: "Because they hope nomads will spend their foreign salaries locally." },
      { key: 'D', text: "To reduce the number of ordinary tourists." },
    ],
    correctKey: 'C',
    explanation: '本文に"now offer special visas to attract them, hoping the newcomers will spend their foreign salaries in local restaurants and apartments"（外国で得た給料を地元のレストランや住居で使ってくれることを期待して特別ビザを提供している）とあり、Cが正解。A・B・Dは本文に記述がありません。\n\n【図解】特別ビザを設ける狙い\n　要素｜本文の記述｜期待\n　対象｜デジタルノマド｜海外の給料を得る人\n　消費先｜地元の飲食店や住居｜地域経済への還元\n　手段｜特別ビザ｜長期滞在を認める\n　⇒ 外貨収入を地域で消費してもらう狙い\n　⚠ 労働力不足の解消が目的とは書かれていない。狙いを本文の記述に限定する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_096', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_9}

What friction has appeared in some popular destinations?`,
    choices: [
      { key: 'A', text: "Nomads refuse to eat at local restaurants." },
      { key: 'B', text: "Internet connections have slowed down for residents." },
      { key: 'C', text: "Nomad visas expire after only a few days." },
      { key: 'D', text: "Housing costs rise for local families as landlords prefer renting to nomads." },
    ],
    correctKey: 'D',
    explanation: '本文に"landlords have discovered they can earn far more renting to nomads than to residents, pushing up housing costs for local families"（家主はノマドに貸す方がはるかに稼げると気づき、地元家族の住居費を押し上げている）とあり、Dが正解。そのため短期賃貸への規制とビザを組み合わせる都市も出ています。A・B・Cは本文にありません。\n\n【図解】受け入れ側で生じた問題\n　当事者｜行動｜結果\n　家主｜ノマドに貸すほうが高収入｜短期賃貸へ移行\n　地元家族｜住居費が上昇｜居住が困難に\n　自治体｜短期賃貸の規制｜ビザ政策と併用\n　⇒ 住宅費の上昇が地元住民を圧迫する\n　⚠ 治安や言語の問題は本文にない。生じた問題を本文の記述で確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_097', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_9}

In the passage, the word "capture" most closely means:`,
    choices: [
      { key: 'A', text: "arrest and question" },
      { key: 'B', text: "obtain and keep" },
      { key: 'C', text: "photograph in detail" },
      { key: 'D', text: "imprison for a long time" },
    ],
    correctKey: 'B',
    explanation: 'captureはここでは「（利益などを）獲得する・取り込む」という意味で、Bが正解。経済的な利益を取り込みつつ自国民を守ろうとしている、という文脈です。「逮捕する」「撮影する」「捕虜にする」もcaptureの意味ですが、capture the economic benefitsという抽象的な目的語との組み合わせではBの意味になります。\n\n【図解】capture の意味の広がり\n　目的語｜意味｜例\n　benefits, market share｜取り込む｜capture the benefits\n　criminal｜逮捕する｜capture a suspect\n　image, moment｜記録する｜capture on camera\n　⇒ 経済的利益を取り込むなら capture\n　⚠ 目的語が抽象名詞なら「獲得する」の意味。物理的な捕獲と読み替えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_098', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_10}

What happens at repair cafes?`,
    choices: [
      { key: 'A', text: "Residents fix broken items together with skilled volunteers free of charge." },
      { key: 'B', text: "Companies sell new products at discount prices." },
      { key: 'C', text: "Schools hold science classes for children." },
      { key: 'D', text: "Broken items are collected and burned as fuel." },
    ],
    correctKey: 'A',
    explanation: '本文に"residents bring broken toasters, torn jackets, and silent radios, and fix them together with skilled helpers free of charge"（住民が壊れたトースターや破れた上着、鳴らないラジオを持ち込み、熟練した助っ人と一緒に無料で修理する）とあり、Aが正解。B・C・Dはいずれも本文に記述がありません。\n\n【図解】修理カフェの仕組み\n　要素｜本文の記述｜特徴\n　持ち込む物｜トースター, 上着, ラジオ｜家庭用品全般\n　作業｜熟練の助っ人と一緒に直す｜共同作業\n　費用｜free of charge｜無料\n　⇒ 住民が持ち込み無料で一緒に修理する\n　⚠ 業者が代行して有料で修理する仕組みではない。共同作業と無料の2点を押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_099', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_10}

Besides reducing waste, what do organizers say the movement achieves?`,
    choices: [
      { key: 'A', text: "Large profits from repair fees." },
      { key: 'B', text: "Free advertising for manufacturers." },
      { key: 'C', text: "Social effects such as passing on skills and making neighbors friends." },
      { key: 'D', text: "A reduction in the number of volunteers needed." },
    ],
    correctKey: 'C',
    explanation: '本文に"organizers say the social effects matter just as much: elderly engineers pass on skills that schools no longer teach, and neighbors who had never spoken become friends"（社会的効果も同じくらい重要で、年配の技術者が学校ではもう教えない技能を伝え、話したことのなかった隣人同士が友人になる）とあり、Cが正解。修理は無料なのでAは誤り。B・Dは本文にありません。\n\n【図解】修理カフェの社会的効果\n　効果｜本文の記述｜対象\n　技能の継承｜学校で教えない技術を伝える｜年配の技術者から\n　交流の創出｜話したことのない隣人が友人に｜地域住民\n　ごみの削減｜製品の寿命を延ばす｜環境面\n　⇒ 技能継承と地域交流が同じくらい重要\n　⚠ 修理は無料。収益事業として評価する選択肢は本文と矛盾する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu6_100', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p6_10}

What do "right to repair" laws require companies to do?`,
    choices: [
      { key: 'A', text: "Repair every product themselves for free." },
      { key: 'B', text: "Sell spare parts and publish repair manuals." },
      { key: 'C', text: "Pay fees to repair cafes every month." },
      { key: 'D', text: "Throw away products after ten years of use." },
    ],
    correctKey: 'B',
    explanation: '本文最終文に"require companies to sell spare parts and publish repair manuals so that products are not thrown away simply because no one knows how to open them"（部品の販売と修理マニュアルの公開を企業に義務づけ、開け方が分からないという理由だけで製品が捨てられないようにする）とあり、Bが正解。A・C・Dは本文にありません。\n\n【図解】修理する権利の法制化\n　要求｜本文の記述｜目的\n　部品の販売｜sell spare parts｜修理を可能にする\n　マニュアルの公開｜publish repair manuals｜開け方を知らせる\n　狙い｜不必要な廃棄を防ぐ｜製品寿命の延長\n　⇒ 部品供給と情報公開の義務づけが柱\n　⚠ 製造の禁止や課税ではない。義務づけの内容を本文で確認する。',
    difficulty: 'standard',
  },
];
