import type { EikenQuestion } from './eiken_questions';

// 英検2級 追加問題バンク4（語彙40問・文法30問・長文読解30問 = 100問）

const p4_1 = `When the pandemic forced millions of employees to work from home, many companies feared that productivity would collapse. Instead, several large surveys found that output remained stable or even rose slightly, while workers saved an average of nearly an hour a day by not commuting. Yet the picture is not entirely positive. Younger employees, in particular, report feeling isolated and worry that they miss chances to learn informally from senior colleagues. In response, a growing number of firms have adopted "hybrid" schedules, requiring staff to come to the office two or three days a week. Supporters say this arrangement combines the focus of home working with the creativity of face-to-face collaboration, though some researchers caution that its long-term effects remain unclear.`;

const p4_2 = `Beekeeping, once associated with the countryside, is now booming in cities such as Tokyo, Paris, and New York. Hotels and office buildings keep hives on their rooftops, and the honey is often served in their own restaurants or sold as souvenirs. Surprisingly, urban bees frequently produce more honey than their rural cousins because city parks and gardens offer a wide variety of flowers throughout the year, and farm pesticides are rarely used in urban areas. However, experts warn that enthusiasm has its limits. If too many hives are placed in one district, the bees may compete for nectar, and native wild insects could be pushed out. City governments are therefore beginning to require beekeepers to register their hives so that numbers can be managed.`;

const p4_3 = `For decades, students have been told that reviewing notes just before bed is a waste of time, but sleep scientists now disagree. During deep sleep, the brain replays and strengthens memories formed during the day, a process known as consolidation. In one experiment, participants who learned a list of word pairs and then slept for eight hours remembered significantly more than those who stayed awake for the same period. Researchers also found that losing even two hours of sleep reduced this benefit. The lesson for learners is clear: staying up all night to cram for an exam may allow you to recognize material the next morning, but much of it will fade quickly because the brain never had the chance to store it properly.`;

const p4_4 = `Roughly one third of all food produced worldwide is never eaten, and restaurants and bakeries throw away large quantities of unsold items every evening. To tackle this problem, several smartphone apps now connect shops with nearby customers shortly before closing time. Users pay a reduced price — often less than half — for a "surprise bag" of whatever remains, and collect it at the store. The shops recover part of their costs, customers enjoy cheap meals, and less food ends up in landfills, where it would produce methane, a powerful greenhouse gas. Critics point out, however, that such apps deal only with the final stage of the food chain; far more waste occurs earlier, on farms and during transportation, where fruit and vegetables are rejected simply for their appearance.`;

const p4_5 = `Electric vehicles are often described as "zero-emission," yet their environmental record depends heavily on their batteries. Mining lithium, cobalt, and nickel consumes enormous amounts of water and energy, sometimes in regions where water is already scarce. Once on the road, however, an electric car typically produces far less carbon dioxide over its lifetime than a gasoline car, especially in countries that generate electricity from renewable sources. The industry's next challenge is recycling. Today only a small percentage of used batteries are recycled, but new factories in Europe and Asia aim to recover more than ninety percent of the valuable metals inside. If they succeed, future batteries could be built largely from recycled materials, reducing the need for new mining.`;

const p4_6 = `Coral reefs cover less than one percent of the ocean floor, yet they support about a quarter of all marine species. Rising sea temperatures cause corals to expel the tiny algae that live inside them and give them both color and food — a process called bleaching, which can kill entire reefs if it lasts too long. Marine biologists are fighting back with "coral gardening": they grow fragments of heat-resistant corals in underwater nurseries and then transplant them onto damaged reefs. Early results in Australia and the Caribbean are encouraging, with transplanted corals surviving and even reproducing. Scientists stress, however, that gardening alone cannot save the reefs; unless the warming of the oceans is slowed, restored corals will eventually face the same fate as their predecessors.`;

const p4_7 = `Every year, thousands of travelers combine sightseeing with short-term volunteer work, teaching English or building houses in developing countries. Supporters argue that "voluntourism" brings money to poor communities and opens young people's eyes to global issues. Critics, however, question who really benefits. Unskilled volunteers who stay for only a week or two can take jobs away from local workers, and projects are sometimes designed more to satisfy visitors than to meet genuine local needs. Some orphanages have even been accused of keeping children in poor conditions to attract donations from sympathetic tourists. Experts advise would-be volunteers to choose programs run by organizations that employ local staff, operate long-term, and can explain exactly how the money they receive is spent.`;

const p4_8 = `Since electronic books first appeared, commentators have repeatedly predicted the death of print, yet paper books continue to sell strongly, especially among readers in their teens and twenties. Psychologists offer one explanation: studies suggest that people reading long or complicated texts on paper often remember the content slightly better, perhaps because the physical weight of the pages helps them sense where they are in the story. E-books have clear advantages of their own — instant delivery, adjustable print size, and the ability to carry a whole library on one device — which makes them popular with commuters and travelers. Rather than replacing each other, the two formats appear to be settling into different roles, with many readers choosing digital for convenience and paper for concentration.`;

const p4_9 = `As more information moves online, some politicians ask why cities should keep paying for public libraries. Librarians respond that lending books is now only a fraction of what they do. Modern libraries offer free internet access to those who cannot afford it, run language classes for immigrants, and provide quiet study space for students whose homes are crowded or noisy. During heat waves, they serve as cooling shelters for elderly residents. In many neighborhoods the library is the last indoor public space where no purchase is required, and researchers who study cities argue that such places strengthen communities by bringing together people of different ages and backgrounds. Closing them, supporters say, would save little money but cost a great deal in social connection.`;

const p4_10 = `Vertical farms grow vegetables indoors on tall stacks of shelves, using LED lights instead of sunshine and up to ninety-five percent less water than traditional fields. Because the environment is completely controlled, crops can be produced all year round, free from pesticides, right inside cities where the food is eaten — cutting transportation and its emissions dramatically. The technology, however, has an obvious weakness: electricity. Lighting and air conditioning consume so much power that many vertical farms struggle to make a profit, and if the electricity comes from fossil fuels, the environmental benefit largely disappears. For now, the business works best for fast-growing, high-value crops such as lettuce and herbs, while grains and fruit trees remain far cheaper to grow the traditional way.`;
export const eikenQuestions2kyu4: EikenQuestion[] = [
  // ===== VOCABULARY (001-040) =====
  {
    id: 'eiken_2kyu4_001', level: '2kyu', category: 'vocabulary',
    question: "The company had not ( ) such strong demand for its new product, and many stores sold out within days.",
    choices: [
      { key: 'A', text: "anticipated" },
      { key: 'B', text: "abandoned" },
      { key: 'C', text: "accompanied" },
      { key: 'D', text: "admired" },
    ],
    correctKey: 'A',
    explanation: '「anticipate（〜を予期する・見越す）」が正解。需要を予測していなかったため売り切れた、という文脈です。abandonは「〜を捨てる・断念する」、accompanyは「〜に同行する」、admireは「〜に感心する」でいずれも文意に合いません。関連語のexpectよりもanticipateは「予測して備える」ニュアンスが強い語です。\n\n【図解】「予想する」の使い分け\n　語｜意味｜含み\n　anticipate｜予測して備える｜対策まで含む\n　expect｜当然起こると思う｜備えは含まない\n　predict｜予言する｜根拠に基づく将来予測\n　⇒ 需要を見越して準備するなら anticipate\n　⚠ expect は単に「そうなると思う」だけ。備えの含意まで問う設問では anticipate を選ぶ。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_002', level: '2kyu', category: 'vocabulary',
    question: "At first, Mr. Tanaka was ( ) to accept the transfer to the overseas office, but he eventually agreed.",
    choices: [
      { key: 'A', text: "efficient" },
      { key: 'B', text: "previous" },
      { key: 'C', text: "grateful" },
      { key: 'D', text: "reluctant" },
    ],
    correctKey: 'D',
    explanation: '「be reluctant to do（〜するのに気が進まない）」が正解。「最初は気が進まなかったが最終的に同意した」という流れです。efficientは「効率的な」、previousは「以前の」、gratefulは「感謝している」。反対の意味はbe willing to do（快く〜する）です。\n\nbe reluctant to do は「〜するのに気が進まない」で、心理的な抵抗を表す。at first（最初は）と最終的に同意したという流れが、この語の意味を裏づけている。名詞形は reluctance、副詞は reluctantly。\n\n【図解】意欲の有無を表す形容詞\n　表現｜意味｜意欲\n　be reluctant to do｜気が進まない｜低い\n　be willing to do｜快く〜する｜高い\n　be eager to do｜しきりに〜したがる｜非常に高い\n　⇒ 最初は渋っていたなら reluctant\n　⚠ reluctant の後ろは to 不定詞。動名詞は続かない点も確認しておく。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_003', level: '2kyu', category: 'vocabulary',
    question: "Volunteers ( ) blankets and hot meals to the people who had lost their homes in the flood.",
    choices: [
      { key: 'A', text: "estimated" },
      { key: 'B', text: "distributed" },
      { key: 'C', text: "interrupted" },
      { key: 'D', text: "postponed" },
    ],
    correctKey: 'B',
    explanation: '「distribute（〜を配る・分配する）」が正解。被災者に毛布と温かい食事を配ったという文脈です。estimateは「〜を見積もる」、interruptは「〜をさえぎる」、postponeは「〜を延期する」。名詞形distribution（分配・流通）も頻出です。\n\ndistribute は「（多くの人に）配る、分配する」で、blankets、food、leaflets を目的語にとる。被災者に物資を行き渡らせるという文脈にぴったり合う。名詞形は distribution。\n\n【図解】渡す動作を表す動詞\n　語｜配る相手｜規模\n　distribute｜多数へ｜組織的な配布\n　hand out｜その場の人へ｜小規模\n　deliver｜特定の宛先へ｜配送\n　⇒ 被災者に毛布と食事を配るなら distribute\n　⚠ estimate は「見積もる」で配布とは無関係。動詞の意味を取り違えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_004', level: '2kyu', category: 'vocabulary',
    question: "Because of the typhoon, the organizers decided to ( ) the outdoor concert until the following weekend.",
    choices: [
      { key: 'A', text: "attract" },
      { key: 'B', text: "divide" },
      { key: 'C', text: "postpone" },
      { key: 'D', text: "employ" },
    ],
    correctKey: 'C',
    explanation: '「postpone（〜を延期する）」が正解。until the following weekend（翌週末まで）が延期の手がかりです。attractは「〜を引きつける」、divideは「〜を分ける」、employは「〜を雇う」。put offもpostponeとほぼ同義の熟語です。\n\npostpone は「（予定を）延期する」で、until や to と組んで新しい期日を示す。until the following weekend という表現が延期先を示す手がかりになる。put off が口語的な同義表現である。\n\n【図解】予定の変更を表す語\n　語｜意味｜結果\n　postpone｜延期する｜後日実施\n　cancel｜中止する｜実施しない\n　reschedule｜日程を組み直す｜別日に変更\n　⇒ 翌週末まで先送りなら postpone\n　⚠ cancel は実施そのものを取りやめる。until 〜 が続くなら延期であって中止ではない。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_005', level: '2kyu', category: 'vocabulary',
    question: "The research team could not draw a firm conclusion because they did not have ( ) data.",
    choices: [
      { key: 'A', text: "artificial" },
      { key: 'B', text: "temporary" },
      { key: 'C', text: "sufficient" },
      { key: 'D', text: "previous" },
    ],
    correctKey: 'C',
    explanation: '「sufficient（十分な）」が正解。データが十分でないため結論を出せなかった、という文脈です。artificialは「人工の」、temporaryは「一時的な」、previousは「以前の」。sufficientはenoughのややかたい同義語で、反意語はinsufficient（不十分な）です。\n\n【図解】十分さを表す語\n　語｜意味｜語調\n　sufficient｜十分な｜硬い, 書き言葉\n　enough｜十分な｜一般的\n　insufficient｜不十分な｜対義語\n　⇒ データが足りず結論が出ないなら sufficient を否定する形\n　⚠ efficient（効率的な）と sufficient はつづりが近い。意味で確実に区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_006', level: '2kyu', category: 'vocabulary',
    question: "The union will ( ) with the management over wages and working hours next month.",
    choices: [
      { key: 'A', text: "negotiate" },
      { key: 'B', text: "celebrate" },
      { key: 'C', text: "decorate" },
      { key: 'D', text: "imitate" },
    ],
    correctKey: 'A',
    explanation: '「negotiate with 〜 over ...（...について〜と交渉する）」が正解。労働組合が経営側と賃金について交渉する場面です。celebrateは「〜を祝う」、decorateは「〜を飾る」、imitateは「〜をまねる」。名詞形negotiation（交渉）もセットで覚えましょう。\n\nnegotiate は「交渉する」で、negotiate with 人 over または about 事柄 の形をとる。労働組合が経営側と賃金について協議するという文脈に合う。名詞形 negotiation は複数形で使うことが多い。\n\n【図解】negotiate の構文\n　要素｜前置詞｜例\n　交渉相手｜with｜with management\n　交渉の対象｜over, about｜over wages\n　他動詞用法｜（前置詞不要）｜negotiate a contract\n　⇒ 相手には with、議題には over\n　⚠ negotiate to 人 とはしない。前置詞の組み合わせまで含めて覚える。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_007', level: '2kyu', category: 'vocabulary',
    question: "Lack of funding remains the biggest ( ) to completing the new stadium on schedule.",
    choices: [
      { key: 'A', text: "profit" },
      { key: 'B', text: "instrument" },
      { key: 'C', text: "laboratory" },
      { key: 'D', text: "obstacle" },
    ],
    correctKey: 'D',
    explanation: '「obstacle（障害・妨げ）」が正解。an obstacle to 〜（〜への障害）の形で使い、資金不足が完成の妨げになっているという文意です。profitは「利益」、instrumentは「楽器・器具」、laboratoryは「実験室」。類義語にbarrier、hindranceがあります。\n\nobstacle は「障害、妨げ」で、an obstacle to 〜 の形で何の妨げかを示す。資金不足が完成の妨げになっているという文脈に合う。類義語に barrier、hindrance、impediment がある。\n\n【図解】障害を表す名詞と前置詞\n　語｜意味｜結ぶ前置詞\n　obstacle｜障害物, 妨げ｜to\n　barrier｜壁, 障壁｜to\n　obstruction｜通行の妨げ｜（物理的）\n　⇒ 完成を妨げる要因なら an obstacle to\n　⚠ obstacle for とはしない。to をとる名詞としてまとめて覚える。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_008', level: '2kyu', category: 'vocabulary',
    question: "After the operation, her health improved ( ), and she was able to walk again within two months.",
    choices: [
      { key: 'A', text: "scarcely" },
      { key: 'B', text: "gradually" },
      { key: 'C', text: "previously" },
      { key: 'D', text: "accidentally" },
    ],
    correctKey: 'B',
    explanation: '「gradually（徐々に・だんだんと）」が正解。手術後に健康が少しずつ回復したという文脈です。scarcelyは「ほとんど〜ない」、previouslyは「以前に」、accidentallyは「偶然に」。類義語はlittle by little、by degreesです。\n\ngradually は「徐々に」で、変化がゆっくり進むことを表す副詞。手術後の回復のように、時間をかけて進む過程を描写するときに使う。形容詞は gradual、類義表現に little by little がある。\n\n【図解】変化の速さを表す副詞\n　語｜速さ｜使う場面\n　gradually｜徐々に｜回復, 上昇\n　suddenly｜突然｜事故, 変化\n　scarcely｜ほとんど〜ない｜否定の副詞\n　⇒ 手術後に少しずつ良くなるなら gradually\n　⚠ scarcely は否定語で意味がまったく違う。副詞の役割を取り違えない。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_009', level: '2kyu', category: 'vocabulary',
    question: "The restaurant earned a ( ) for serving fresh seafood at reasonable prices.",
    choices: [
      { key: 'A', text: "departure" },
      { key: 'B', text: "reputation" },
      { key: 'C', text: "ceremony" },
      { key: 'D', text: "circumstance" },
    ],
    correctKey: 'B',
    explanation: '「reputation（評判・名声）」が正解。earn a reputation for 〜（〜で評判を得る）は頻出コロケーションです。departureは「出発」、ceremonyは「式典」、circumstanceは「状況」。have a good/bad reputationの形でもよく使われます。\n\n【図解】reputation のコロケーション\n　表現｜意味｜使う場面\n　earn a reputation for｜〜で評判を得る｜実績\n　have a good reputation｜評判がよい｜評価\n　damage a reputation｜評判を傷つける｜不祥事\n　⇒ for の後ろに評価の理由が来る\n　⚠ reputation は不可算に近い使い方が多いが a reputation の形で冠詞を伴う。冠詞の有無も確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_010', level: '2kyu', category: 'vocabulary',
    question: "The new security system is designed to ( ) the risk of unauthorized access to customer data.",
    choices: [
      { key: 'A', text: "translate" },
      { key: 'B', text: "congratulate" },
      { key: 'C', text: "eliminate" },
      { key: 'D', text: "exaggerate" },
    ],
    correctKey: 'C',
    explanation: '「eliminate（〜を取り除く・排除する）」が正解。不正アクセスの危険を取り除くためのシステムという文意です。translateは「〜を翻訳する」、congratulateは「〜を祝う」、exaggerateは「〜を誇張する」。eliminate the risk of 〜はビジネス文書でも頻出の表現です。\n\n【図解】取り除く動作の強さ\n　語｜意味｜程度\n　eliminate｜完全に取り除く｜徹底的\n　reduce｜減らす｜部分的\n　prevent｜未然に防ぐ｜発生前\n　⇒ 危険を根絶するなら eliminate the risk of\n　⚠ exaggerate（誇張する）と語形が似ているが意味は無関係。語尾 ate の動詞をまとめて整理する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_011', level: '2kyu', category: 'vocabulary',
    question: "Several people ( ) the accident and gave statements to the police.",
    choices: [
      { key: 'A', text: "witnessed" },
      { key: 'B', text: "purchased" },
      { key: 'C', text: "measured" },
      { key: 'D', text: "delivered" },
    ],
    correctKey: 'A',
    explanation: '「witness（〜を目撃する）」が正解。事故を目撃して警察に証言したという文脈です。purchaseは「〜を購入する」、measureは「〜を測る」、deliverは「〜を配達する」。witnessは名詞で「目撃者・証人」の意味もあり、こちらも頻出です。\n\nwitness は動詞で「目撃する」、名詞で「目撃者、証人」の両方に使える語。事故を目撃して警察に証言したという文脈では、動詞と名詞の両用法が背景にある。eyewitness（目撃者）も関連語である。\n\n【図解】witness の品詞\n　品詞｜意味｜例\n　動詞｜目撃する｜witness an accident\n　名詞｜目撃者, 証人｜a witness to the crime\n　名詞｜証言｜bear witness to\n　⇒ 空所が動詞なら「目撃する」の意味\n　⚠ purchase（購入する）や measure（測る）とは意味が無関係。文脈で動作を特定する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_012', level: '2kyu', category: 'vocabulary',
    question: "The doctor received an ( ) call from the hospital and had to leave the party early.",
    choices: [
      { key: 'A', text: "idle" },
      { key: 'B', text: "annual" },
      { key: 'C', text: "obvious" },
      { key: 'D', text: "urgent" },
    ],
    correctKey: 'D',
    explanation: '「urgent(緊急の)」が正解。緊急の呼び出しでパーティーを早退したという文意です。idleは「怠けた・使われていない」、annualは「年1回の」、obviousは「明らかな」。名詞形urgency（緊急性）、副詞urgently（緊急に）も覚えておきましょう。\n\nurgent は「緊急の、急を要する」で、call、matter、need、request を修飾する。パーティーを早退した理由として緊急の連絡が入ったという文脈に合う。名詞形は urgency、副詞は urgently。\n\n【図解】緊急性を表す語\n　語｜品詞｜意味\n　urgent｜形容詞｜緊急の\n　urgency｜名詞｜緊急性\n　urgently｜副詞｜大至急\n　⇒ 呼び出しの性質を表すなら urgent\n　⚠ obvious（明らかな）は緊急性とは別の軸。修飾する名詞との相性で判断する。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_013', level: '2kyu', category: 'vocabulary',
    question: "The bookstore plans to ( ) its business by opening online shops in several countries.",
    choices: [
      { key: 'A', text: "refuse" },
      { key: 'B', text: "expand" },
      { key: 'C', text: "bury" },
      { key: 'D', text: "punish" },
    ],
    correctKey: 'B',
    explanation: '「expand（〜を拡大する）」が正解。オンライン店舗を開いて事業を拡大するという文脈です。refuseは「〜を拒む」、buryは「〜を埋める」、punishは「〜を罰する」。名詞形expansion（拡大）、類義語のextend（〜を延長する）との違いにも注意しましょう。\n\nexpand は「規模を広げる」で、business、market、operations を目的語にとる。オンライン店舗の開設によって事業を拡大するという文脈に合う。名詞形は expansion。\n\n【図解】拡大を表す動詞\n　語｜広げ方｜例\n　expand｜面積や規模を広げる｜business, market\n　extend｜長さや期限を延ばす｜deadline, road\n　enlarge｜大きくする｜photo, room\n　⇒ 事業規模の拡大なら expand\n　⚠ extend は「延長」で方向が一次元的。二次元的な拡大には expand を使う。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_014', level: '2kyu', category: 'vocabulary',
    question: "The famous actor decided to ( ) a large part of his income to children's hospitals.",
    choices: [
      { key: 'A', text: "waste" },
      { key: 'B', text: "borrow" },
      { key: 'C', text: "donate" },
      { key: 'D', text: "charge" },
    ],
    correctKey: 'C',
    explanation: '「donate（〜を寄付する）」が正解。donate A to B（AをBに寄付する）の形です。wasteは「〜を浪費する」、borrowは「〜を借りる」、chargeは「〜を請求する」。名詞形donation（寄付）、donor（寄付者・提供者）も頻出です。\n\ndonate は「寄付する」で、donate A to B の形をとる。無償で与える行為を表し、金銭のほか血液や臓器にも使う。名詞形は donation、寄付する人は donor。\n\n【図解】donate の構文と関連語\n　語｜品詞｜意味\n　donate A to B｜動詞｜AをBに寄付する\n　donation｜名詞｜寄付, 寄贈品\n　donor｜名詞｜寄付者, 提供者\n　⇒ 前置詞は to で固定\n　⚠ charge は「請求する」で金銭の流れが逆。動詞の方向を取り違えない。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_015', level: '2kyu', category: 'vocabulary',
    question: "The police found no ( ) that the man had been at the scene of the crime.",
    choices: [
      { key: 'A', text: "evidence" },
      { key: 'B', text: "appetite" },
      { key: 'C', text: "geography" },
      { key: 'D', text: "harvest" },
    ],
    correctKey: 'A',
    explanation: '「evidence（証拠）」が正解。男が犯行現場にいた証拠が見つからなかったという文意です。appetiteは「食欲」、geographyは「地理」、harvestは「収穫」。evidenceは不可算名詞なので、a piece of evidenceのように数える点にも注意しましょう。\n\nevidence は「証拠」で、原則として不可算名詞。数えるときは a piece of evidence とする。犯行現場にいた証拠が見つからなかったという文脈で、法廷用語としても頻出する。\n\n【図解】evidence の使い方\n　項目｜内容｜例\n　可算性｜不可算｜much evidence\n　数え方｜a piece of evidence｜1つの証拠\n　関連語｜proof（証明）｜より決定的\n　⇒ 証拠が見つからないなら no evidence\n　⚠ an evidence とは言わない。冠詞と複数形の可否が出題される。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_016', level: '2kyu', category: 'vocabulary',
    question: "With the support of her family, she managed to ( ) her fear of speaking in public.",
    choices: [
      { key: 'A', text: "undergo" },
      { key: 'B', text: "obey" },
      { key: 'C', text: "decline" },
      { key: 'D', text: "overcome" },
    ],
    correctKey: 'D',
    explanation: '「overcome（〜を克服する）」が正解。人前で話す恐怖を克服したという文脈です。undergoは「（手術・変化など）を経験する」、obeyは「〜に従う」、declineは「〜を断る・減少する」。overcome difficulties（困難を乗り越える）などの形で頻出します。\n\novercome は「（困難や恐怖を）克服する」で、fear、difficulty、obstacle、addiction を目的語にとる。変化は overcome - overcame - overcome で、原形と過去分詞が同形である点も要注意。\n\n【図解】困難への対応を表す動詞\n　語｜意味｜結果\n　overcome｜克服する｜乗り越える\n　undergo｜経験する｜受け身に耐える\n　decline｜断る, 減少する｜受け入れない\n　⇒ 人前で話す恐怖を克服するなら overcome\n　⚠ 活用は overcome - overcame - overcome。過去分詞を overcomed としない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_017', level: '2kyu', category: 'vocabulary',
    question: "The bridge repairs are only ( ); a full reconstruction will begin next spring.",
    choices: [
      { key: 'A', text: "permanent" },
      { key: 'B', text: "financial" },
      { key: 'C', text: "enormous" },
      { key: 'D', text: "temporary" },
    ],
    correctKey: 'D',
    explanation: '「temporary（一時的な）」が正解。来春に全面的な再建が始まるので、今の修理は一時的なものだという文意です。permanentは「永久的な」で正反対の意味、financialは「財政の」、enormousは「巨大な」。temporaryの副詞形はtemporarily（一時的に）です。\n\ntemporary は「一時的な」で、来春に本格再建が始まるという記述が、今の修理が暫定措置であることを示している。副詞は temporarily、対義語は permanent。\n\n【図解】期間の性質を表す形容詞\n　語｜意味｜期間\n　temporary｜一時的な｜短期\n　permanent｜永続的な｜恒久\n　provisional｜暫定の｜正式決定まで\n　⇒ 本格再建までのつなぎなら temporary\n　⚠ permanent は正反対。until 以下の情報から期間の性質を読み取る。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_018', level: '2kyu', category: 'vocabulary',
    question: "There are five ( ) running for mayor in the election this fall.",
    choices: [
      { key: 'A', text: "refunds" },
      { key: 'B', text: "candidates" },
      { key: 'C', text: "souvenirs" },
      { key: 'D', text: "warehouses" },
    ],
    correctKey: 'B',
    explanation: '「candidate（候補者）」が正解。run for 〜（〜に立候補する）と合わせて、市長選に5人の候補者が立候補しているという文意です。refundは「払い戻し」、souvenirは「土産」、warehouseは「倉庫」。a candidate for 〜（〜の候補者）の形も覚えましょう。\n\ncandidate は「候補者」で、a candidate for 〜 の形で何の候補かを示す。run for 〜（〜に立候補する）と組み合わせて選挙報道で頻出する。job candidate なら「応募者」の意味になる。\n\n【図解】選挙に関する表現\n　表現｜意味｜使う場面\n　candidate for｜〜の候補者｜選挙, 採用\n　run for｜〜に立候補する｜選挙\n　be elected｜当選する｜結果\n　⇒ 市長選に出る5人なら candidates\n　⚠ candidate の前置詞は for。to や of とはしない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_019', level: '2kyu', category: 'vocabulary',
    question: "Please do not ( ) the speaker; there will be time for questions at the end.",
    choices: [
      { key: 'A', text: "obey" },
      { key: 'B', text: "admit" },
      { key: 'C', text: "interrupt" },
      { key: 'D', text: "export" },
    ],
    correctKey: 'C',
    explanation: '「interrupt（〜をさえぎる・邪魔する）」が正解。質問は最後に時間があるので、話し手の話を途中でさえぎらないでくださいという文意です。obeyは「〜に従う」、admitは「〜を認める」、exportは「〜を輸出する」。名詞形interruption（中断）も頻出です。\n\ninterrupt は「（話や作業を）さえぎる」で、話し手や進行中の行為を目的語にとる。質問は最後に受けるので途中で遮らないでほしい、という文脈に合う。名詞形は interruption。\n\n【図解】妨げる動作を表す動詞\n　語｜妨げるもの｜場面\n　interrupt｜発言, 作業｜会議, 講演\n　disturb｜静けさ, 集中｜睡眠, 勉強\n　distract｜注意｜作業中\n　⇒ 話の途中で口を挟むなら interrupt\n　⚠ disturb は「邪魔をして乱す」で対象が異なる。何を妨げるかで選び分ける。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_020', level: '2kyu', category: 'vocabulary',
    question: "We had a new air conditioner ( ) in the meeting room last week.",
    choices: [
      { key: 'A', text: "inherited" },
      { key: 'B', text: "installed" },
      { key: 'C', text: "dismissed" },
      { key: 'D', text: "compared" },
    ],
    correctKey: 'B',
    explanation: '「install（〜を設置する・取り付ける）」が正解。have + 物 + 過去分詞（物を〜してもらう）の形で、エアコンを設置してもらったという文意です。inheritは「〜を相続する」、dismissは「〜を解雇する・退ける」、compareは「〜を比較する」。ソフトウェアを「インストールする」の意味でも使います。\n\n【図解】install の使い方\n　対象｜意味｜例\n　機器｜設置する｜install an air conditioner\n　ソフト｜導入する｜install an application\n　人｜就任させる｜install as chairman\n　⇒ エアコンを取り付けてもらうなら install\n　⚠ have ＋ 目的語 ＋ 過去分詞 の使役構文と組み合わさる。動詞の意味と構文の両方を確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_021', level: '2kyu', category: 'vocabulary',
    question: "Getting enough sleep the night before an exam is ( ) to performing well.",
    choices: [
      { key: 'A', text: "crucial" },
      { key: 'B', text: "guilty" },
      { key: 'C', text: "portable" },
      { key: 'D', text: "rude" },
    ],
    correctKey: 'A',
    explanation: '「crucial（極めて重要な）」が正解。be crucial to 〜（〜にとって極めて重要だ）の形で、十分な睡眠が良い成績に不可欠だという文意です。guiltyは「有罪の」、portableは「持ち運びできる」、rudeは「失礼な」。類義語はessential、vitalです。\n\ncrucial は「決定的に重要な」で、be crucial to 〜 や be crucial for 〜 の形をとる。十分な睡眠が成績にとって欠かせないという文脈に合う。essential や vital とほぼ同義である。\n\n【図解】重要性を表す形容詞\n　語｜意味｜前置詞\n　crucial｜きわめて重要な｜to, for\n　essential｜不可欠な｜to, for\n　vital｜生命線となる｜to, for\n　⇒ 成績を左右する要素なら crucial\n　⚠ これらの形容詞は that 節で仮定法現在をとる。構文上の性質もあわせて覚える。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_022', level: '2kyu', category: 'vocabulary',
    question: "Experts ( ) that the repairs to the old temple will cost more than fifty million yen.",
    choices: [
      { key: 'A', text: "estimate" },
      { key: 'B', text: "bury" },
      { key: 'C', text: "forbid" },
      { key: 'D', text: "worship" },
    ],
    correctKey: 'A',
    explanation: '「estimate（〜を見積もる・推定する）」が正解。修理費用が5000万円を超えると専門家が見積もっているという文意です。buryは「〜を埋める」、forbidは「〜を禁じる」、worshipは「〜を崇拝する」。名詞としてのestimate（見積もり）も頻出です。\n\nestimate は動詞で「見積もる、推定する」、名詞で「見積もり」の両用法を持つ。修理費が5000万円を超えると専門家が推定した、という文脈で使われる。名詞の estimate は発音が異なる点にも注意。\n\n【図解】estimate の品詞と意味\n　品詞｜意味｜例\n　動詞｜見積もる｜estimate the cost\n　名詞｜見積もり｜get an estimate\n　関連語 estimation｜評価, 判断｜in my estimation\n　⇒ 費用を推定するなら動詞の estimate\n　⚠ 名詞と動詞で発音が変わる。品詞によるアクセントの移動も確認しておく。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_023', level: '2kyu', category: 'vocabulary',
    question: "I always ask Keiko for help because she is the most ( ) person in our office.",
    choices: [
      { key: 'A', text: "fragile" },
      { key: 'B', text: "allergic" },
      { key: 'C', text: "extinct" },
      { key: 'D', text: "reliable" },
    ],
    correctKey: 'D',
    explanation: '「reliable（信頼できる）」が正解。いつも助けを求めるのは彼女が最も信頼できる人だからという文意です。fragileは「壊れやすい」、allergicは「アレルギーのある」、extinctは「絶滅した」。動詞rely on 〜（〜に頼る）、類義語dependable、trustworthyも覚えましょう。\n\n【図解】信頼に関する語\n　語｜品詞｜意味\n　reliable｜形容詞｜信頼できる\n　rely on｜句動詞｜〜に頼る\n　reliance｜名詞｜依存, 信頼\n　⇒ 困ったときに頼れる人なら reliable\n　⚠ fragile（壊れやすい）とは無関係。語幹 rely からの派生関係で整理する。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_024', level: '2kyu', category: 'vocabulary',
    question: "The coach ( ) the importance of teamwork rather than individual skill.",
    choices: [
      { key: 'A', text: "dismissed" },
      { key: 'B', text: "soaked" },
      { key: 'C', text: "emphasized" },
      { key: 'D', text: "melted" },
    ],
    correctKey: 'C',
    explanation: '「emphasize（〜を強調する）」が正解。個人技よりチームワークの大切さを強調したという文意です。dismissは「〜を解雇する・退ける」、soakは「〜を浸す」、meltは「〜を溶かす」。名詞形emphasis（強調）を使ったput emphasis on 〜も頻出です。\n\nemphasize は「強調する」で、importance、need、role を目的語にとる。個人技よりチームワークの大切さを強調したという文脈に合う。名詞形 emphasis を使った put emphasis on 〜 も頻出。\n\n【図解】強調の表現\n　形｜品詞｜例\n　emphasize ＋ 目的語｜動詞｜emphasize teamwork\n　put emphasis on｜名詞句｜put emphasis on safety\n　stress ＋ 目的語｜動詞｜stress the need\n　⇒ 動詞が必要なら emphasize\n　⚠ emphasis の前置詞は on。emphasize には前置詞が不要な点と混同しない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_025', level: '2kyu', category: 'vocabulary',
    question: "The bakery made a large ( ) last year by selling its bread to local hotels.",
    choices: [
      { key: 'A', text: "profit" },
      { key: 'B', text: "tragedy" },
      { key: 'C', text: "luggage" },
      { key: 'D', text: "sculpture" },
    ],
    correctKey: 'A',
    explanation: '「profit（利益）」が正解。make a profit（利益を上げる）は頻出コロケーションです。tragedyは「悲劇」、luggageは「手荷物」、sculptureは「彫刻」。形容詞profitable（利益になる）、反意語loss（損失）もあわせて覚えましょう。\n\nprofit は「利益」で、make a profit（利益を上げる）が定番のコロケーション。形容詞 profitable は「もうかる」、対義語は loss（損失）。売上高を表す revenue とは費用を引くかどうかで異なる。\n\n【図解】収益に関する語\n　語｜意味｜計算上の位置\n　revenue｜売上高｜費用を引く前\n　profit｜利益｜費用を引いた後\n　loss｜損失｜利益がマイナス\n　⇒ 利益を出すなら make a profit\n　⚠ profit と revenue の混同に注意。どの段階の金額かで使い分ける。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_026', level: '2kyu', category: 'vocabulary',
    question: "After two years on a temporary contract, she was finally offered a ( ) position.",
    choices: [
      { key: 'A', text: "blank" },
      { key: 'B', text: "raw" },
      { key: 'C', text: "guilty" },
      { key: 'D', text: "permanent" },
    ],
    correctKey: 'D',
    explanation: '「permanent（常勤の・永続的な）」が正解。temporary contract（臨時契約）との対比で、正規の職を提示されたという文意です。blankは「空白の」、rawは「生の」、guiltyは「有罪の」。permanentとtemporaryは対で問われやすい形容詞です。\n\npermanent は「常勤の、永続的な」で、position、job、resident を修飾する。臨時契約との対比で正規職を提示されたという文脈に合う。副詞は permanently、対義語は temporary。\n\n【図解】雇用形態を表す語\n　語｜意味｜期間\n　permanent position｜常勤職｜期限なし\n　temporary contract｜臨時契約｜期限あり\n　part-time｜非常勤｜時間が短い\n　⇒ 臨時契約からの転換なら permanent\n　⚠ permanent と temporary は対で出題される。契約期間の有無が判断基準になる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_027', level: '2kyu', category: 'vocabulary',
    question: "In the past decade, smartphones have completely ( ) the way people communicate.",
    choices: [
      { key: 'A', text: "obeyed" },
      { key: 'B', text: "transformed" },
      { key: 'C', text: "buried" },
      { key: 'D', text: "harvested" },
    ],
    correctKey: 'B',
    explanation: '「transform（〜を一変させる・変容させる）」が正解。スマートフォンが人々のコミュニケーション方法をすっかり変えたという文意です。obeyは「〜に従う」、buryは「〜を埋める」、harvestは「〜を収穫する」。changeより大きく根本的な変化を表すのがtransformです。\n\ntransform は「（性質そのものを）一変させる」で、change よりも根本的で大きな変化を表す。スマートフォンが人々の意思疎通の方法をすっかり変えたという文脈に合う。名詞形は transformation。\n\n【図解】変化の大きさを表す動詞\n　語｜変化の程度｜例\n　transform｜根本的に変える｜society, industry\n　change｜一般的な変化｜plan, mind\n　modify｜部分的に修正する｜design, rule\n　⇒ 通信の在り方を一変させたなら transform\n　⚠ modify は小さな手直し。変化の規模で語を選び分ける。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_028', level: '2kyu', category: 'vocabulary',
    question: "After the long hike, everyone had a big ( ) and finished dinner quickly.",
    choices: [
      { key: 'A', text: "laundry" },
      { key: 'B', text: "costume" },
      { key: 'C', text: "appetite" },
      { key: 'D', text: "quarrel" },
    ],
    correctKey: 'C',
    explanation: '「appetite（食欲）」が正解。長いハイキングの後で食欲旺盛になり、夕食をすぐ平らげたという文意です。laundryは「洗濯物」、costumeは「衣装」、quarrelは「口論」。have a good/poor appetite（食欲がある/ない）の形で覚えましょう。\n\nappetite は「食欲」で、have a good appetite、lose one’s appetite の形で使う。長時間のハイキングの後に食欲が増したという文脈に合う。比喩的に an appetite for knowledge（知識欲）とも使える。\n\n【図解】appetite のコロケーション\n　表現｜意味｜場面\n　have a good appetite｜食欲がある｜健康\n　lose ones appetite｜食欲を失う｜体調不良\n　an appetite for｜〜への欲求｜比喩的用法\n　⇒ 運動後に食が進むなら appetite\n　⚠ laundry や costume とは分野が異なる名詞。文脈で名詞の意味を特定する。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_029', level: '2kyu', category: 'vocabulary',
    question: "All participants must ( ) for the marathon by the end of June.",
    choices: [
      { key: 'A', text: "register" },
      { key: 'B', text: "retire" },
      { key: 'C', text: "rescue" },
      { key: 'D', text: "remind" },
    ],
    correctKey: 'A',
    explanation: '「register for 〜（〜に登録する・申し込む）」が正解。6月末までにマラソンへの参加登録をしなければならないという文意です。retireは「引退する」、rescueは「〜を救助する」、remindは「〜に思い出させる」。名詞形registration（登録）、類義表現sign up for 〜も頻出です。\n\nregister for 〜 は「〜に登録する、参加を申し込む」で、course、race、event を対象にとる。締切までにマラソンの参加登録が必要という文脈に合う。名詞形は registration。\n\n【図解】申し込みを表す表現\n　表現｜意味｜語調\n　register for｜登録する｜公式, 事務的\n　sign up for｜申し込む｜口語的\n　apply for｜応募する｜職, 助成金\n　⇒ 大会への参加登録なら register for\n　⚠ apply for は選考を伴う応募。単なる参加登録とは手続きの性質が異なる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_030', level: '2kyu', category: 'vocabulary',
    question: "The population of the village has fallen by half over the past ( ).",
    choices: [
      { key: 'A', text: "length" },
      { key: 'B', text: "triangle" },
      { key: 'C', text: "decade" },
      { key: 'D', text: "address" },
    ],
    correctKey: 'C',
    explanation: '「decade（10年間）」が正解。over the past decade（過去10年間で）は頻出表現で、村の人口が半減したという文意です。lengthは「長さ」、triangleは「三角形」、addressは「住所」。century（100年）とあわせて期間を表す語として覚えましょう。\n\ndecade は「10年間」で、over the past decade（過去10年で）という形で統計の変化を述べるときに頻出する。century（100年）、millennium（1000年）と合わせて期間の単位として覚えたい。\n\n【図解】期間を表す名詞\n　語｜長さ｜例\n　decade｜10年｜over the past decade\n　century｜100年｜in the 20th century\n　millennium｜1000年｜the new millennium\n　⇒ 過去10年の人口半減なら decade\n　⚠ decade を「10年ごと」と誤読しない。特定の10年間を指す名詞である。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_031', level: '2kyu', category: 'vocabulary',
    question: "Naoko ( ) her parents to let her study abroad by showing them her detailed plan.",
    choices: [
      { key: 'A', text: "blamed" },
      { key: 'B', text: "persuaded" },
      { key: 'C', text: "scattered" },
      { key: 'D', text: "punished" },
    ],
    correctKey: 'B',
    explanation: '「persuade 人 to do（人を説得して〜させる）」が正解。詳しい計画を見せて両親を説得し、留学を許してもらったという文意です。blameは「〜を責める」、scatterは「〜をまき散らす」、punishは「〜を罰する」。反対に「説得して〜をやめさせる」はdiscourage 人 from -ingです。\n\n【図解】説得の方向を表す表現\n　表現｜意味｜方向\n　persuade 人 to do｜説得して〜させる｜させる\n　discourage 人 from doing｜説得してやめさせる｜やめさせる\n　convince 人 that 節｜納得させる｜信じさせる\n　⇒ 両親を説得して許可を得たなら persuaded\n　⚠ persuade の後ろは to 不定詞、discourage は from ＋ 動名詞。構文の違いも押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_032', level: '2kyu', category: 'vocabulary',
    question: "The apartment on the third floor has been ( ) since the previous tenant moved out.",
    choices: [
      { key: 'A', text: "absent" },
      { key: 'B', text: "crowded" },
      { key: 'C', text: "guilty" },
      { key: 'D', text: "vacant" },
    ],
    correctKey: 'D',
    explanation: '「vacant（空いている・空室の）」が正解。前の入居者が退去して以来ずっと空室だという文意です。absentは「（人が）欠席して」の意味で部屋には使いません。crowdedは「混雑した」、guiltyは「有罪の」。名詞形vacancy（空室・欠員）もホテルの掲示などで頻出です。\n\nvacant は「（部屋や席が）空いている」で、room、seat、position を修飾する。前の入居者が退去して以来空室だという文脈に合う。名詞形 vacancy はホテルの掲示でも見かける語。\n\n【図解】空いている状態を表す語\n　語｜対象｜例\n　vacant｜部屋, 席, 職｜a vacant apartment\n　absent｜人｜absent from school\n　empty｜容器, 空間｜an empty box\n　⇒ 入居者のいない部屋なら vacant\n　⚠ absent は人が不在であること。部屋そのものの状態には使えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_033', level: '2kyu', category: 'vocabulary',
    question: "The software company will ( ) a new video-editing application next month.",
    choices: [
      { key: 'A', text: "launch" },
      { key: 'B', text: "witness" },
      { key: 'C', text: "interrupt" },
      { key: 'D', text: "educate" },
    ],
    correctKey: 'A',
    explanation: '「launch（〜を発売する・開始する）」が正解。新しい動画編集アプリを来月発売するという文意です。witnessは「〜を目撃する」、interruptは「〜をさえぎる」、educateは「〜を教育する」。launchは「ロケットを打ち上げる」「事業を立ち上げる」の意味でも頻出です。\n\nlaunch は「（新製品を）売り出す、（事業を）立ち上げる」で、product、campaign、service を目的語にとる。ロケットの打ち上げにも使う語で、勢いよく世に送り出すイメージを共有している。\n\n【図解】launch の対象と意味\n　対象｜意味｜例\n　製品, アプリ｜発売する｜launch an app\n　事業, 運動｜開始する｜launch a campaign\n　ロケット｜打ち上げる｜launch a rocket\n　⇒ 新アプリの発売なら launch\n　⚠ 名詞としても使える。the launch of a new service のような形も確認しておく。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_034', level: '2kyu', category: 'vocabulary',
    question: "Be careful what you say to him — he is very ( ) about his weight.",
    choices: [
      { key: 'A', text: "artificial" },
      { key: 'B', text: "convenient" },
      { key: 'C', text: "distant" },
      { key: 'D', text: "sensitive" },
    ],
    correctKey: 'D',
    explanation: '「sensitive（敏感な・気にしやすい）」が正解。be sensitive about 〜（〜を気にしている）の形で、体重の話題に敏感だという文意です。artificialは「人工の」、convenientは「便利な」、distantは「遠い」。sensible（分別のある）との混同に注意しましょう。\n\n【図解】sensitive と sensible\n　語｜意味｜使う場面\n　sensitive｜敏感な, 気にしやすい｜話題, 肌, 機器\n　sensible｜分別のある｜判断, 助言\n　sensitive about｜〜を気にしている｜体重, 年齢\n　⇒ 体重の話題を気にするなら sensitive about\n　⚠ sensible は「賢明な」でまったく別の意味。語形が近い形容詞の代表例。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_035', level: '2kyu', category: 'vocabulary',
    question: "She moved to Tokyo to ( ) a career in fashion design.",
    choices: [
      { key: 'A', text: "escape" },
      { key: 'B', text: "pursue" },
      { key: 'C', text: "wander" },
      { key: 'D', text: "retire" },
    ],
    correctKey: 'B',
    explanation: '「pursue（〜を追求する）」が正解。pursue a career（キャリアを追い求める）は頻出コロケーションで、ファッションデザインの道に進むため上京したという文意です。escapeは「逃げる」、wanderは「歩き回る」、retireは「引退する」。名詞形pursuit（追求）も覚えましょう。\n\n【図解】pursue のコロケーション\n　表現｜意味｜対象\n　pursue a career｜進路を追い求める｜職業\n　pursue a goal｜目標を追求する｜目的\n　pursue studies｜学業を続ける｜研究\n　⇒ デザインの道を目指すなら pursue a career\n　⚠ 名詞形は pursuit。in pursuit of（〜を求めて）の形も頻出する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_036', level: '2kyu', category: 'vocabulary',
    question: "The concert was canceled, so all ticket holders will receive a full ( ).",
    choices: [
      { key: 'A', text: "fare" },
      { key: 'B', text: "debt" },
      { key: 'C', text: "refund" },
      { key: 'D', text: "salary" },
    ],
    correctKey: 'C',
    explanation: '「refund（払い戻し・返金）」が正解。公演中止のため全額払い戻しを受けられるという文意です。fareは「（乗り物の）運賃」、debtは「借金」、salaryは「給料」。receive/get a refundやrefund（動詞：払い戻す）の形も頻出です。\n\nrefund は名詞で「払い戻し」、動詞で「返金する」の両用法を持つ。公演中止で全額返金を受けられるという文脈に合う。get a refund、a full refund の形でよく使われる。\n\n【図解】お金に関する名詞\n　語｜意味｜場面\n　refund｜払い戻し｜返品, 中止\n　fare｜運賃｜交通機関\n　fee｜料金, 手数料｜サービス\n　⇒ 中止による返金なら refund\n　⚠ salary（給料）や debt（借金）とは資金の性質が異なる。場面で名詞を選び分ける。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_037', level: '2kyu', category: 'vocabulary',
    question: "With both teams playing so defensively, a scoreless draw seemed ( ).",
    choices: [
      { key: 'A', text: "generous" },
      { key: 'B', text: "capable" },
      { key: 'C', text: "artificial" },
      { key: 'D', text: "inevitable" },
    ],
    correctKey: 'D',
    explanation: '「inevitable（避けられない・必然の）」が正解。両チームとも守備的なので、0対0の引き分けは避けられないように思われたという文意です。generousは「寛大な」、capableは「有能な」、artificialは「人工の」。動詞avoid（避ける）から派生したunavoidableも同義です。\n\n【図解】避けられなさを表す形容詞\n　語｜意味｜含み\n　inevitable｜避けられない｜必然\n　unavoidable｜避けようがない｜ほぼ同義\n　likely｜起こりそうな｜可能性が高い\n　⇒ 引き分けが必至に見えたなら inevitable\n　⚠ capable や generous は人の性質を表す語。事態の見通しには使えない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu4_038', level: '2kyu', category: 'vocabulary',
    question: "Local volunteers are working hard to ( ) the town's traditional wooden houses.",
    choices: [
      { key: 'A', text: "witness" },
      { key: 'B', text: "preserve" },
      { key: 'C', text: "scold" },
      { key: 'D', text: "leak" },
    ],
    correctKey: 'B',
    explanation: '「preserve（〜を保存する・保護する）」が正解。伝統的な木造家屋を保存するために努力しているという文意です。witnessは「〜を目撃する」、scoldは「〜を叱る」、leakは「漏れる」。名詞形preservation（保存）、類義語conserve（保護する）も覚えましょう。\n\npreserve は「（元の状態のまま）保存する、保護する」で、tradition、building、food、nature を目的語にとる。伝統的な木造家屋を守る努力という文脈に合う。名詞形は preservation。\n\n【図解】守る動作の使い分け\n　語｜対象｜含み\n　preserve｜建物, 伝統, 食品｜そのまま残す\n　conserve｜資源, 自然｜浪費を防ぐ\n　protect｜人, 財産｜危害から守る\n　⇒ 伝統家屋を残すなら preserve\n　⚠ conserve は資源の節約に重点がある。保存の対象で語を選び分ける。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_039', level: '2kyu', category: 'vocabulary',
    question: "The company changed its marketing ( ) to attract younger customers.",
    choices: [
      { key: 'A', text: "tragedy" },
      { key: 'B', text: "throat" },
      { key: 'C', text: "strategy" },
      { key: 'D', text: "ladder" },
    ],
    correctKey: 'C',
    explanation: '「strategy（戦略）」が正解。若い客層を引きつけるためにマーケティング戦略を変更したという文意です。tragedyは「悲劇」、throatは「のど」、ladderは「はしご」。形容詞strategic（戦略的な）、類義語tactics（戦術）もあわせて覚えましょう。\n\nstrategy は「戦略」で、marketing strategy、business strategy の形で使う。若年層を取り込むために方針を転換したという文脈に合う。形容詞は strategic、より短期的な手立ては tactics。\n\n【図解】計画に関する語\n　語｜範囲｜時間軸\n　strategy｜全体方針｜長期\n　tactics｜個別の手立て｜短期\n　plan｜計画一般｜文脈次第\n　⇒ 顧客層を狙った方針転換なら strategy\n　⚠ tragedy（悲劇）とつづりが似ているが無関係。文脈で確実に区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_040', level: '2kyu', category: 'vocabulary',
    question: "( ) three hundred people attended the lecture, far more than the organizers expected.",
    choices: [
      { key: 'A', text: "Approximately" },
      { key: 'B', text: "Punctually" },
      { key: 'C', text: "Enormously" },
      { key: 'D', text: "Accidentally" },
    ],
    correctKey: 'A',
    explanation: '「approximately（およそ・約）」が正解。約300人が講演に参加したという文意で、数値の前に置いて概数を表します。punctuallyは「時間どおりに」、enormouslyは「非常に」、accidentallyは「偶然に」。aboutやroughlyのかたい同義語として覚えましょう。\n\napproximately は「およそ、約」で、数値の直前に置いて概数を示す副詞。約300人が講演に参加したという文脈に合う。about や roughly の硬い言い換えとして、報告書や統計で用いられる。\n\n【図解】概数を表す表現\n　語｜語調｜位置\n　approximately｜硬い｜数値の前\n　about｜一般的｜数値の前\n　or so｜口語的｜数値の後ろ\n　⇒ 約300人と述べるなら approximately\n　⚠ accidentally（偶然に）とは意味がまったく違う。副詞の役割を混同しない。',
    difficulty: 'standard',
  },

  // ===== GRAMMAR (041-070) =====
  {
    id: 'eiken_2kyu4_041', level: '2kyu', category: 'grammar',
    question: "If I ( ) about the traffic jam, I would have taken the train instead.",
    choices: [
      { key: 'A', text: "knew" },
      { key: 'B', text: "had known" },
      { key: 'C', text: "have known" },
      { key: 'D', text: "know" },
    ],
    correctKey: 'B',
    explanation: '仮定法過去完了の文です。主節がwould have takenなので、if節は過去完了形had knownになります。「渋滞のことを知っていたら電車で行ったのに」と過去の事実と反対の仮定を表します。knewは仮定法過去（現在の仮定）、have known・knowは仮定法の形として不適切です。仮定法では条件節と帰結節の時制が対応するため、片方の形が分かればもう片方も自動的に決まる。\n\n【図解】仮定法の時制対応\n　条件節｜主節｜表す時\n　had 過去分詞｜would have 過去分詞｜過去の反実仮想\n　過去形｜would ＋ 原形｜現在の仮定\n　現在形｜will ＋ 原形｜現実的な条件\n　⇒ 主節が would have taken なら had known\n　⚠ knew は現在の仮定形。主節の形から条件節の時制を決める。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_042', level: '2kyu', category: 'grammar',
    question: "( ) from the top of the hill, the whole city looks like a miniature model.",
    choices: [
      { key: 'A', text: "Seen" },
      { key: 'B', text: "Seeing" },
      { key: 'C', text: "To seeing" },
      { key: 'D', text: "Saw" },
    ],
    correctKey: 'A',
    explanation: '分詞構文の問題です。主語the whole cityは「見られる」側なので、受動を表す過去分詞Seenが正解。「丘の上から見ると、街全体がミニチュア模型のように見える」の意味です。Seeingだと街が「見る」ことになり不自然。When it is seen from ...の省略形と考えると分かりやすいでしょう。\n\n【図解】分詞構文の態\n　主語との関係｜使う形｜例\n　主語が動作を受ける｜過去分詞｜Seen from above\n　主語が動作する｜現在分詞｜Seeing the view\n　完了と受動｜having been done｜Having been built\n　⇒ 街は見られる側なので Seen\n　⚠ Seeing にすると街が見る側になる。主語との能動受動の関係を必ず確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_043', level: '2kyu', category: 'grammar',
    question: "The scholarship gave her ( ) she needed most — time to focus on her research.",
    choices: [
      { key: 'A', text: "that" },
      { key: 'B', text: "which" },
      { key: 'C', text: "what" },
      { key: 'D', text: "whom" },
    ],
    correctKey: 'C',
    explanation: '関係代名詞whatは「〜するもの・こと」（= the thing which）の意味で、先行詞を含みます。ここでは空所の前に先行詞がないためwhatが正解。「奨学金は彼女が最も必要としていたもの、つまり研究に集中する時間を与えた」の意味です。that・which・whomは先行詞が必要なので使えません。\n\n【図解】関係代名詞 what の働き\n　語｜先行詞｜作る節\n　what｜含む｜名詞節\n　which, that｜必要｜形容詞節\n　whom｜必要（人）｜形容詞節\n　⇒ 先行詞がないなら what\n　⚠ that を選ぶには直前に名詞が必要。空所の前に先行詞があるかを確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_044', level: '2kyu', category: 'grammar',
    question: "Mr. Sato had his wallet ( ) while he was riding the crowded train.",
    choices: [
      { key: 'A', text: "steal" },
      { key: 'B', text: "stole" },
      { key: 'C', text: "stealing" },
      { key: 'D', text: "stolen" },
    ],
    correctKey: 'D',
    explanation: 'have + 目的語 + 過去分詞で「〜される（被害）」を表します。財布は「盗まれる」側なので過去分詞stolenが正解。「佐藤さんは混んだ電車で財布を盗まれた」という被害の表現です。have + 目的語 + 原形は「人に〜させる・してもらう」で、目的語が動作をする場合に使います。have と目的語と過去分詞の形は被害と依頼の両方を表すため、文脈から望まない出来事か自分が頼んだことかを判断する。\n\n【図解】have ＋ 目的語 ＋ 過去分詞の2用法\n　意味｜例｜含み\n　被害｜have my wallet stolen｜望まない出来事\n　依頼｜have my hair cut｜自分が頼んだ\n　完了｜have the work done｜やり終える\n　⇒ 財布は盗まれる側なので stolen\n　⚠ 被害と依頼は同じ形をとる。どちらかは文脈で判断する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_045', level: '2kyu', category: 'grammar',
    question: "I wish I ( ) more attention in my high school math classes.",
    choices: [
      { key: 'A', text: "pay" },
      { key: 'B', text: "have paid" },
      { key: 'C', text: "will pay" },
      { key: 'D', text: "had paid" },
    ],
    correctKey: 'D',
    explanation: 'I wish + 過去完了形で「〜していればよかったのに」と過去の事実と反対の願望を表します。「高校の数学の授業でもっと集中していればよかった」という後悔の意味なのでhad paidが正解。pay attention（注意を払う）はコロケーションとしても重要です。現在の願望ならI wish + 過去形を使います。\n\n【図解】I wish の時制\n　形｜表す内容｜例\n　I wish ＋ 過去形｜現在の願望｜I wish I had time\n　I wish ＋ 過去完了｜過去への後悔｜I wish I had studied\n　I wish ＋ would｜相手への要望｜I wish he would stop\n　⇒ 高校時代への後悔なら had paid\n　⚠ 過去のことを過去形で書かない。願望の対象がいつのことかで形が決まる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_046', level: '2kyu', category: 'grammar',
    question: "It's about time you ( ) thinking seriously about your future.",
    choices: [
      { key: 'A', text: "start" },
      { key: 'B', text: "started" },
      { key: 'C', text: "will start" },
      { key: 'D', text: "have started" },
    ],
    correctKey: 'B',
    explanation: 'It is (about) time + 主語 + 過去形で「もう〜してもよい頃だ」を表す仮定法の慣用表現です。形は過去形ですが現在のことを述べています。「そろそろ将来のことを真剣に考え始めてもいい頃だ」の意味でstartedが正解。原形や未来形は使えない点に注意しましょう。It is time の後ろの節では、形の上では過去形を使いながら内容は現在のことを指すという仮定法特有のずれが生じる。\n\n【図解】It is time の構文\n　形｜意味｜動詞の形\n　It is time 主語 過去形｜そろそろ〜する時だ｜過去形\n　It is high time 主語 過去形｜とっくに〜すべき時だ｜過去形\n　It is time to do｜〜する時間だ｜不定詞\n　⇒ 主語が続くなら過去形 started\n　⚠ 形は過去でも内容は現在。仮定法の慣用表現として形ごと覚える。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu4_047', level: '2kyu', category: 'grammar',
    question: "( ) hard he tried, he could not remember where he had left his keys.",
    choices: [
      { key: 'A', text: "Whatever" },
      { key: 'B', text: "Whenever" },
      { key: 'C', text: "Whichever" },
      { key: 'D', text: "However" },
    ],
    correctKey: 'D',
    explanation: 'However + 形容詞/副詞 + 主語 + 動詞で「どんなに〜しても」を表します。「どんなに頑張っても、鍵をどこに置いたか思い出せなかった」の意味でHoweverが正解。直後に副詞hardが続くのがポイントです。Whateverは「何を〜しても」、Wheneverは「いつ〜しても」、Whicheverは「どちらを〜しても」で、hardと直接結びつきません。\n\n【図解】複合関係詞の使い分け\n　語｜後ろに続く形｜意味\n　However｜形容詞または副詞 ＋ 主語 ＋ 動詞｜どんなに〜でも\n　Whatever｜名詞または単独 ＋ 主語 ＋ 動詞｜何を〜しても\n　Whenever｜主語 ＋ 動詞｜いつ〜しても\n　⇒ 直後に副詞 hard が来るなら However\n　⚠ Whatever の後ろに副詞は続かない。空所の直後の品詞が決め手になる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_048', level: '2kyu', category: 'grammar',
    question: "Having lived in London for ten years, she is used to ( ) on the left side of the road.",
    choices: [
      { key: 'A', text: "drive" },
      { key: 'B', text: "drove" },
      { key: 'C', text: "driving" },
      { key: 'D', text: "be driven" },
    ],
    correctKey: 'C',
    explanation: 'be used to -ing（〜することに慣れている）のtoは前置詞なので、後ろは動名詞drivingが正解。「ロンドンに10年住んでいたので左側通行の運転に慣れている」の意味です。used to + 原形（昔は〜したものだ）との区別が頻出ポイント。get used to -ing（〜に慣れる）もあわせて覚えましょう。\n\n【図解】to の後ろの形の見分け\n　表現｜to の品詞｜後ろの形\n　be used to｜前置詞｜動名詞\n　used to｜助動詞相当｜動詞の原形\n　get used to｜前置詞｜動名詞\n　⇒ be 動詞があるので driving\n　⚠ be の有無で to の性質が変わる。文頭から構造を確認してから形を決める。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_049', level: '2kyu', category: 'grammar',
    question: "The ground is wet everywhere. It ( ) rained heavily during the night.",
    choices: [
      { key: 'A', text: "must have" },
      { key: 'B', text: "should" },
      { key: 'C', text: "cannot" },
      { key: 'D', text: "may be" },
    ],
    correctKey: 'A',
    explanation: 'must have + 過去分詞で「〜したに違いない」と過去の出来事についての強い推量を表します。「地面が一面ぬれている。夜の間に激しく雨が降ったに違いない」の意味でmust haveが正解。shouldやcannotの後に直接rainedは続けられず、may beの後ろにも動詞の過去形は置けません。cannot have + 過去分詞（〜したはずがない）との対比も重要です。\n\n【図解】助動詞 ＋ have ＋ 過去分詞\n　形｜意味｜確信度\n　must have done｜〜したに違いない｜高い\n　may have done｜〜したかもしれない｜中\n　cannot have done｜〜したはずがない｜否定の強い推量\n　⇒ 地面が濡れている根拠から must have rained\n　⚠ should have done は「すべきだった」で推量ではない。意味の系統が異なる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_050', level: '2kyu', category: 'grammar',
    question: "He is ( ) a scholar as a businessman who knows how to sell ideas.",
    choices: [
      { key: 'A', text: "not as much" },
      { key: 'B', text: "no more" },
      { key: 'C', text: "nothing but" },
      { key: 'D', text: "not so much" },
    ],
    correctKey: 'D',
    explanation: 'not so much A as B（AというよりむしろB）の構文です。「彼は学者というより、アイデアの売り込み方を知っているビジネスマンだ」の意味でnot so muchが正解。後ろのasと呼応する点がポイントです。nothing but（〜にすぎない）はasと呼応せず、no more、not as muchはこの形の定型表現ではありません。\n\n【図解】not so much A as B の構文\n　構文｜意味｜呼応する語\n　not so much A as B｜AというよりむしろB｜as\n　not A but B｜AではなくB｜but\n　rather than｜〜よりむしろ｜（前置詞的）\n　⇒ 後ろに as があるなら not so much\n　⚠ nothing but は「〜にすぎない」で as と呼応しない。呼応する語で構文を特定する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu4_051', level: '2kyu', category: 'grammar',
    question: "You may borrow my camera ( ) you return it by Sunday.",
    choices: [
      { key: 'A', text: "unless" },
      { key: 'B', text: "in case" },
      { key: 'C', text: "provided that" },
      { key: 'D', text: "even if" },
    ],
    correctKey: 'C',
    explanation: 'provided that（〜という条件で・もし〜ならば）が正解。「日曜日までに返すという条件でカメラを貸してあげる」の意味です。unlessは「〜しない限り」で意味が逆になり、in caseは「〜する場合に備えて」、even ifは「たとえ〜でも」で文意に合いません。providing thatやon condition thatも同様の意味の表現です。\n\n【図解】条件を表す接続表現\n　表現｜意味｜条件の向き\n　provided that｜〜という条件で｜肯定の条件\n　unless｜〜しない限り｜否定の条件\n　in case｜〜する場合に備えて｜備え\n　⇒ 返却を条件に貸すなら provided that\n　⚠ unless は if not に相当し意味が逆になる。条件が肯定か否定かで選び分ける。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_052', level: '2kyu', category: 'grammar',
    question: "By the time the firefighters arrived, the flames ( ) to the neighboring building.",
    choices: [
      { key: 'A', text: "have already spread" },
      { key: 'B', text: "had already spread" },
      { key: 'C', text: "are already spreading" },
      { key: 'D', text: "already spread" },
    ],
    correctKey: 'B',
    explanation: 'by the time + 過去形の節があるので、主節はそれより前に完了した動作を表す過去完了形had already spreadが正解。「消防士が到着した時までに、炎はすでに隣の建物に燃え広がっていた」の意味です。現在完了形や現在進行形は過去の基準時と合いません。過去完了は「過去のある時点より前」を表す時制です。\n\n【図解】過去完了を使う場面\n　形｜表す時｜目印\n　had 過去分詞｜過去のある時点より前｜by the time 過去形\n　過去形｜過去の出来事｜yesterday, ago\n　現在完了｜現在までの継続や経験｜since, for\n　⇒ 消防士到着より前の出来事なら had spread\n　⚠ by the time の節が過去形なら主節は過去完了。基準時との前後関係で時制を決める。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_053', level: '2kyu', category: 'grammar',
    question: "It was not until she read the letter twice ( ) she understood its true meaning.",
    choices: [
      { key: 'A', text: "when" },
      { key: 'B', text: "which" },
      { key: 'C', text: "what" },
      { key: 'D', text: "that" },
    ],
    correctKey: 'D',
    explanation: 'It is not until A that B（Aして初めてBする）の強調構文です。「手紙を2度読んで初めて本当の意味が分かった」の意味でthatが正解。強調構文It is ... that 〜の一種で、not until以下が強調されています。when・which・whatはこの構文では使えません。倒置を使ったNot until she read the letter twice did she understand ...への書き換えも頻出です。\n\n【図解】not until の2つの形\n　形｜語順｜例\n　It is not until A that B｜倒置なし｜It was not until she read it that\n　Not until A ＋ 倒置｜主節が倒置｜Not until she read it did she\n　until 単独｜通常の語順｜She did not understand until\n　⇒ It was not until 〜 に続くのは that\n　⚠ when を選ぶと強調構文にならない。It is 〜 that の枠組みを崩さない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu4_054', level: '2kyu', category: 'grammar',
    question: "The author, ( ) novels have been translated into thirty languages, rarely appears in public.",
    choices: [
      { key: 'A', text: "who" },
      { key: 'B', text: "whose" },
      { key: 'C', text: "whom" },
      { key: 'D', text: "which" },
    ],
    correctKey: 'B',
    explanation: '空所の後ろに名詞novelsが続き、「その作家の小説」という所有関係を表すので、所有格の関係代名詞whoseが正解。「小説が30の言語に翻訳されているその作家は、めったに公の場に姿を見せない」という非制限用法の文です。whoは主格、whomは目的格、whichは物が先行詞の場合に使い、いずれも直後に無冠詞の名詞を従える形にはなりません。\n\n【図解】関係代名詞の格の見分け\n　直後に続くもの｜使う関係詞｜例\n　無冠詞の名詞｜whose｜whose novels\n　動詞｜who, which｜who writes\n　主語 ＋ 動詞｜whom, which｜whom we met\n　⇒ novels という名詞が続くので whose\n　⚠ 先行詞が人でも物でも所有格は whose。人だから who と即断しない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_055', level: '2kyu', category: 'grammar',
    question: "The thief seems ( ) the house through the kitchen window.",
    choices: [
      { key: 'A', text: "to have entered" },
      { key: 'B', text: "entering" },
      { key: 'C', text: "to be entered" },
      { key: 'D', text: "have entered" },
    ],
    correctKey: 'A',
    explanation: 'seem to have + 過去分詞で「〜したように見える」と、seemの時点より前の出来事を表します。「泥棒は台所の窓から侵入したようだ」の意味でto have enteredが正解。It seems that the thief entered ...と書き換えられます。to be enteredは受動態で意味が通らず、enteringやhave enteredはseemの後の形として文法的に誤りです。\n\n【図解】seem の後ろの不定詞\n　形｜表す時｜書き換え\n　seem to do｜seem と同時｜It seems that he is\n　seem to have done｜seem より前｜It seems that he entered\n　seem to be done｜受動｜It seems that it is done\n　⇒ 侵入は過去の出来事なので to have entered\n　⚠ to be entered は受動で泥棒が入れられた意味になる。態と時の両方を確認する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu4_056', level: '2kyu', category: 'grammar',
    question: "The museum is well ( ) even if you have to wait in a long line.",
    choices: [
      { key: 'A', text: "visited" },
      { key: 'B', text: "to visit" },
      { key: 'C', text: "worthy visit" },
      { key: 'D', text: "worth visiting" },
    ],
    correctKey: 'D',
    explanation: 'be worth -ing（〜する価値がある）の慣用表現です。well worth -ingで「十分に〜する価値がある」となり、「長い列に並んででも訪れる価値が十分ある美術館だ」の意味でworth visitingが正解。worthの後ろは動名詞で、to不定詞は使えません。worthyofを使う場合はbe worthy of a visitの形になります。\n\n【図解】worth の使い方\n　形｜品詞｜後ろの形\n　be worth doing｜形容詞｜動名詞\n　be worthy of 名詞｜形容詞句｜名詞\n　It is worthwhile to do｜形容詞｜不定詞も可\n　⇒ worth の後ろは動名詞 visiting\n　⚠ worth to visit とはしない。worth と worthy で後続の形が変わる点が出題される。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_057', level: '2kyu', category: 'grammar',
    question: "Never ( ) such a beautiful sunset before moving to Okinawa.",
    choices: [
      { key: 'A', text: "I had seen" },
      { key: 'B', text: "had I seen" },
      { key: 'C', text: "I have seen" },
      { key: 'D', text: "have I saw" },
    ],
    correctKey: 'B',
    explanation: '否定の副詞Neverが文頭に出ると、後ろは疑問文と同じ語順（倒置）になります。before moving to Okinawa（沖縄に引っ越す前）という過去の基準があるので過去完了の倒置had I seenが正解。「沖縄に引っ越す前はそんなに美しい夕日を見たことがなかった」の意味です。have I sawは過去分詞でないsawを使っており文法的に誤りです。\n\n【図解】Never の倒置と時制\n　基準となる時｜倒置の形｜例\n　過去のある時点より前｜had ＋ 主語 ＋ 過去分詞｜had I seen\n　現在まで｜have ＋ 主語 ＋ 過去分詞｜have I seen\n　過去の一時点｜did ＋ 主語 ＋ 原形｜did I see\n　⇒ 引っ越し前が基準なので had I seen\n　⚠ have I saw は過去分詞になっていない。倒置の形と動詞の活用を両方確認する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu4_058', level: '2kyu', category: 'grammar',
    question: "Take an umbrella with you ( ) it rains on your way home.",
    choices: [
      { key: 'A', text: "so that" },
      { key: 'B', text: "as if" },
      { key: 'C', text: "now that" },
      { key: 'D', text: "in case" },
    ],
    correctKey: 'D',
    explanation: 'in case + 主語 + 動詞で「〜する場合に備えて」を表します。「帰り道に雨が降るといけないから傘を持って行きなさい」の意味でin caseが正解。so thatは「〜するように（目的）」、as ifは「まるで〜のように」、now thatは「今や〜なので」でいずれも文意に合いません。in case of + 名詞（〜の場合には）の形も頻出です。\n\n【図解】目的と備えの表現\n　表現｜意味｜後ろの形\n　in case ＋ 節｜〜する場合に備えて｜主語 ＋ 動詞\n　in case of ＋ 名詞｜〜の場合には｜名詞\n　so that ＋ 節｜〜するように｜主語 ＋ 助動詞 ＋ 動詞\n　⇒ 雨に備えるなら in case it rains\n　⚠ so that は目的、in case は備え。日本語ではどちらも「〜するように」と訳せるので構文で判断する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_059', level: '2kyu', category: 'grammar',
    question: "Whenever I see that video of the dancing cat, I cannot help ( ).",
    choices: [
      { key: 'A', text: "laugh" },
      { key: 'B', text: "to laugh" },
      { key: 'C', text: "laughing" },
      { key: 'D', text: "laughed" },
    ],
    correctKey: 'C',
    explanation: 'cannot help -ing（〜せずにはいられない）の慣用表現です。「その踊る猫の動画を見るたびに笑わずにはいられない」の意味でlaughingが正解。helpの後ろは動名詞を取ります。同じ意味のcannot but + 原形、cannot help but + 原形もあわせて覚えておくと書き換え問題に対応できます。\n\n【図解】cannot help の3つの形\n　形｜後ろの形｜意味\n　cannot help doing｜動名詞｜〜せずにいられない\n　cannot help but do｜原形｜同義\n　cannot but do｜原形｜同義, 硬い\n　⇒ help の直後なら動名詞 laughing\n　⚠ help の後ろに to 不定詞は続かない。but が入るかどうかで後続の形が変わる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_060', level: '2kyu', category: 'grammar',
    question: "Kenji talks about Paris ( ) he had lived there for years, but he has never been abroad.",
    choices: [
      { key: 'A', text: "as if" },
      { key: 'B', text: "even though" },
      { key: 'C', text: "so that" },
      { key: 'D', text: "in order that" },
    ],
    correctKey: 'A',
    explanation: 'as if + 仮定法（まるで〜であるかのように）が正解。「ケンジはまるで何年も住んでいたかのようにパリについて語るが、海外に行ったことは一度もない」の意味です。had livedと仮定法過去完了になっているのは、実際には住んでいなかったからです。even thoughは「〜だけれども」、so that・in order thatは目的を表し、文意に合いません。\n\n【図解】as if の後ろの時制\n　形｜表す内容｜例\n　as if ＋ 過去形｜現在の事実に反する｜as if he were rich\n　as if ＋ 過去完了｜過去の事実に反する｜as if he had lived\n　as if ＋ 直説法｜事実である可能性が高い｜as if he is tired\n　⇒ 住んだ事実がないので had lived\n　⚠ even though は事実を前提とする譲歩。仮定法と事実の区別が論点になる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_061', level: '2kyu', category: 'grammar',
    question: "The instructions were so ( ) that nobody could assemble the bookshelf.",
    choices: [
      { key: 'A', text: "confused" },
      { key: 'B', text: "confuse" },
      { key: 'C', text: "confusing" },
      { key: 'D', text: "confusion" },
    ],
    correctKey: 'C',
    explanation: '説明書は人を「混乱させる」側なので、現在分詞由来の形容詞confusing（分かりにくい・混乱させる）が正解。「説明書があまりに分かりにくくて誰も本棚を組み立てられなかった」というso ... that構文です。confusedは「（人が）混乱した」で人に使います。exciting/excited、boring/boredなど、-ing形と-ed形の使い分けは頻出ポイントです。\n\n【図解】分詞形容詞の ing 形と ed 形\n　形｜意味｜修飾する対象\n　confusing｜混乱させる｜説明書, 状況\n　confused｜混乱した｜人\n　boring と bored｜同じ関係｜物事と人\n　⇒ 説明書は人を混乱させる側なので confusing\n　⚠ 主語が人か物かで形が変わる。感情動詞の分詞形容詞は最頻出のポイント。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_062', level: '2kyu', category: 'grammar',
    question: "This is the hotel ( ) the peace conference was held in 1995.",
    choices: [
      { key: 'A', text: "which" },
      { key: 'B', text: "what" },
      { key: 'C', text: "whose" },
      { key: 'D', text: "where" },
    ],
    correctKey: 'D',
    explanation: '空所の後ろが完全な文（the peace conference was held）なので、関係副詞whereが正解。「これは1995年に平和会議が開かれたホテルです」の意味です。whichを使う場合はin whichのように前置詞が必要です。関係代名詞（which等）は後ろに不完全な文、関係副詞（where等）は後ろに完全な文が続くという見分け方を覚えましょう。\n\n【図解】関係詞の見分け方\n　後ろの文｜使う関係詞｜例\n　完全な文｜where, when, why｜where the conference was held\n　不完全な文｜which, that, who｜which we visited\n　前置詞つき｜in which など｜in which it was held\n　⇒ 後ろが完全な文なので where\n　⚠ which を使うなら前置詞 in が必要。後ろの文に欠けがあるかで判断する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_063', level: '2kyu', category: 'grammar',
    question: "The security guard spoke ( ) quickly for the tourists to understand.",
    choices: [
      { key: 'A', text: "so" },
      { key: 'B', text: "very" },
      { key: 'C', text: "too" },
      { key: 'D', text: "much" },
    ],
    correctKey: 'C',
    explanation: 'too ... for 人 to do（〜には...すぎて…できない）の構文です。「警備員の話し方は速すぎて観光客には理解できなかった」の意味でtooが正解。for the touristsはto understandの意味上の主語です。soを使う場合はso ... that構文（so quickly that the tourists could not understand）になります。\n\n【図解】too と so の構文\n　構文｜意味｜形\n　too 〜 for 人 to do｜…すぎて〜できない｜不定詞\n　so 〜 that 主語 cannot｜とても…なので〜できない｜節\n　enough to do｜〜するのに十分｜不定詞\n　⇒ for the tourists to understand と続くなら too\n　⚠ so を選ぶには that 節が必要。後ろが不定詞か節かで構文を特定する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_064', level: '2kyu', category: 'grammar',
    question: "( ) the weather improves, the ferry service will remain suspended.",
    choices: [
      { key: 'A', text: "Unless" },
      { key: 'B', text: "Whether" },
      { key: 'C', text: "As if" },
      { key: 'D', text: "Now that" },
    ],
    correctKey: 'A',
    explanation: 'unless（〜しない限り）が正解。「天候が回復しない限り、フェリーの運航は見合わせが続く」の意味です。unlessはif ... notに相当する接続詞です。Whetherは「〜かどうか」でor notを伴うことが多く、As ifは「まるで〜のように」、Now thatは「今や〜なので」で、運休が続くという主節の内容とかみ合いません。\n\n【図解】unless の性質\n　表現｜意味｜言い換え\n　unless｜〜しない限り｜if not\n　whether｜〜かどうか｜or not を伴う\n　now that｜今や〜なので｜理由\n　⇒ 天候が回復しない限りなら Unless\n　⚠ unless の節の中はすでに否定の意味を含む。二重に not を入れない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_065', level: '2kyu', category: 'grammar',
    question: "You ( ) me you were coming — I would have prepared dinner.",
    choices: [
      { key: 'A', text: "must have told" },
      { key: 'B', text: "should have told" },
      { key: 'C', text: "cannot have told" },
      { key: 'D', text: "would tell" },
    ],
    correctKey: 'B',
    explanation: 'should have + 過去分詞で「〜すべきだったのに（しなかった）」という過去への非難・後悔を表します。「来るなら言ってくれればよかったのに。夕食を用意したのに」の意味でshould have toldが正解。must have + 過去分詞は「〜したに違いない」、cannot have + 過去分詞は「〜したはずがない」で、いずれも推量を表し文意に合いません。\n\n【図解】助動詞 ＋ have ＋ 過去分詞\n　形｜意味｜方向\n　should have done｜〜すべきだった｜後悔, 非難\n　must have done｜〜したに違いない｜推量\n　cannot have done｜〜したはずがない｜否定の推量\n　⇒ 言ってくれればよかったのに、なら should have told\n　⚠ 推量系と後悔系を混同しない。文脈が事実の推定か非難かを見極める。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_066', level: '2kyu', category: 'grammar',
    question: "Would you mind ( ) the window? It's getting cold in here.",
    choices: [
      { key: 'A', text: "to close" },
      { key: 'B', text: "close" },
      { key: 'C', text: "closing" },
      { key: 'D', text: "closed" },
    ],
    correctKey: 'C',
    explanation: 'mindは動名詞を目的語に取る動詞なのでclosingが正解。Would you mind -ing?で「〜していただけませんか」という丁寧な依頼になります。「窓を閉めていただけませんか。ここは寒くなってきました」の意味です。mind・enjoy・finish・avoid・give upなどは動名詞のみを取る動詞としてまとめて覚えましょう。\n\n【図解】動名詞のみをとる動詞\n　動詞｜意味｜例\n　mind｜気にする, 嫌がる｜mind closing\n　enjoy, finish, avoid｜楽しむ, 終える, 避ける｜enjoy reading\n　give up, put off｜やめる, 延期する｜give up smoking\n　⇒ mind の後ろは動名詞 closing\n　⚠ Would you mind doing は丁寧な依頼。承諾するときは No, not at all. と答える点も確認する。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_067', level: '2kyu', category: 'grammar',
    question: "( ) you practice, the more confident you will become on stage.",
    choices: [
      { key: 'A', text: "The more" },
      { key: 'B', text: "The most" },
      { key: 'C', text: "More" },
      { key: 'D', text: "The much" },
    ],
    correctKey: 'A',
    explanation: 'The + 比較級 ..., the + 比較級 ...（〜すればするほど、ますます…）の構文です。「練習すればするほど、舞台でますます自信が持てるようになる」の意味でThe moreが正解。後半のthe more confidentと呼応します。最上級のThe mostや、theのないMoreはこの構文では使えません。\n\n【図解】比例を表す構文\n　位置｜形｜例\n　前半｜The ＋ 比較級 ＋ 主語 ＋ 動詞｜The more you practice\n　後半｜the ＋ 比較級 ＋ 主語 ＋ 動詞｜the more confident you become\n　短縮形｜The 比較級, the 比較級｜The sooner, the better\n　⇒ 後半に the more confident があるので The more\n　⚠ 前半後半のどちらにも the が必要。片方だけでは構文が成立しない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_068', level: '2kyu', category: 'grammar',
    question: "The suspect was seen ( ) the building shortly before the alarm went off.",
    choices: [
      { key: 'A', text: "leaving" },
      { key: 'B', text: "to leaving" },
      { key: 'C', text: "left" },
      { key: 'D', text: "leaves" },
    ],
    correctKey: 'A',
    explanation: '知覚動詞seeの受動態では、be seen -ing（〜しているところを見られる）またはbe seen to + 原形の形を取ります。ここでは現在分詞leavingが正解。「容疑者は警報が鳴る直前に建物を出るところを目撃された」の意味です。to leavingという形は存在せず、leftやleavesは受動態の後に直接続けられません。\n\n【図解】知覚動詞の受動態\n　能動｜受動｜後ろの形\n　see 人 doing｜be seen doing｜現在分詞\n　see 人 do｜be seen to do｜to 不定詞\n　hear 人 doing｜be heard doing｜現在分詞\n　⇒ 進行中の動作なら leaving\n　⚠ 能動態では原形だが受動態では to が必要になる。形の変化を押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_069', level: '2kyu', category: 'grammar',
    question: "( ) his lack of experience, Daiki was chosen as the new team leader.",
    choices: [
      { key: 'A', text: "Although" },
      { key: 'B', text: "Despite" },
      { key: 'C', text: "However" },
      { key: 'D', text: "Because" },
    ],
    correctKey: 'B',
    explanation: '空所の後ろが名詞句（his lack of experience）なので、前置詞のDespite（〜にもかかわらず）が正解。「経験不足にもかかわらず、ダイキは新しいチームリーダーに選ばれた」の意味です。AlthoughとBecauseは接続詞なので後ろに主語+動詞が必要です。Howeverは副詞で名詞句を導けません。In spite ofもDespiteと同義です。\n\n【図解】譲歩表現の品詞\n　語｜品詞｜後ろに来るもの\n　despite, in spite of｜前置詞｜名詞句\n　although, though｜接続詞｜主語 ＋ 動詞\n　however｜副詞｜文をつなぐ\n　⇒ 後ろが名詞句なので Despite\n　⚠ despite of は誤り。in spite of には of が必要で despite には不要。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_070', level: '2kyu', category: 'grammar',
    question: "( ) arrives first should turn on the heater and open the curtains.",
    choices: [
      { key: 'A', text: "Whoever" },
      { key: 'B', text: "Whatever" },
      { key: 'C', text: "However" },
      { key: 'D', text: "Whomever" },
    ],
    correctKey: 'A',
    explanation: '複合関係代名詞Whoever（〜する人は誰でも = anyone who）が正解。「最初に着いた人が誰であれ、ヒーターをつけてカーテンを開けるべきだ」の意味です。arrivesの主語になるので主格のWhoeverを使います。Whomeverは目的格なので主語になれません。Whateverは「〜するものは何でも」、Howeverは「どんなに〜でも」です。\n\n【図解】複合関係代名詞の格\n　語｜格｜働き\n　whoever｜主格｜節の中で主語になる\n　whomever｜目的格｜節の中で目的語になる\n　whatever｜主格, 目的格｜物や事\n　⇒ arrives の主語になるので Whoever\n　⚠ whomever は主語になれない。関係詞節の中でどの役割かを確認する。',
    difficulty: 'standard',
  },

  // ===== READING (071-100) =====
  {
    id: 'eiken_2kyu4_071', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_1}

According to the passage, what did surveys find about employees working from home?`,
    choices: [
      { key: 'A', text: "Their productivity fell sharply as companies had feared." },
      { key: 'B', text: "Their output stayed the same or increased slightly." },
      { key: 'C', text: "They spent more time commuting than before." },
      { key: 'D', text: "Most of them refused to return to the office." },
    ],
    correctKey: 'B',
    explanation: '本文第2文に"several large surveys found that output remained stable or even rose slightly"（複数の大規模調査で生産量は安定するかわずかに上昇したことが分かった）とあり、Bが正解。Aは企業が恐れていた内容で実際の結果とは逆、Cは通勤時間をむしろ節約したとあり、Dは本文に記述がありません。\n\n【図解】在宅勤務の生産性に関する調査\n　立場｜本文の記述｜結果\n　企業の懸念｜生産性が落ちるのでは｜事前の予想\n　実際の調査｜remained stable or even rose｜安定または微増\n　理由の一つ｜通勤時間の節約｜時間の再配分\n　⇒ 生産量は安定またはわずかに上昇\n　⚠ 企業が恐れていた内容と実際の結果は逆。予想と結果を取り違えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_072', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_1}

In the passage, the word "isolated" most closely means:`,
    choices: [
      { key: 'A', text: "promoted" },
      { key: 'B', text: "exhausted" },
      { key: 'C', text: "relaxed" },
      { key: 'D', text: "lonely and cut off from others" },
    ],
    correctKey: 'D',
    explanation: 'isolatedは「孤立した・切り離された」という意味です。若手社員が在宅勤務で孤独を感じ、先輩から学ぶ機会を失うことを心配しているという文脈からもDが正解。promotedは「昇進した」、exhaustedは「疲れ果てた」、relaxedは「くつろいだ」で文脈に合いません。名詞形isolation（孤立）も頻出です。\n\n【図解】isolated の意味と関連語\n　語｜品詞｜意味\n　isolated｜形容詞｜孤立した, 切り離された\n　isolation｜名詞｜孤立, 隔離\n　exhausted｜形容詞｜疲れ果てた\n　⇒ 若手が孤独を感じるなら isolated\n　⚠ relaxed や promoted とは意味の方向が違う。懸念を述べる文脈では否定的な語を選ぶ。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_073', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_1}

What can be inferred about hybrid schedules from the passage?`,
    choices: [
      { key: 'A', text: "Researchers are not yet certain how well they will work over time." },
      { key: 'B', text: "They have been proven to reduce creativity." },
      { key: 'C', text: "Most companies have already abandoned them." },
      { key: 'D', text: "They require employees to work from home every day." },
    ],
    correctKey: 'A',
    explanation: '本文最終文に"some researchers caution that its long-term effects remain unclear"（長期的な影響はまだ不明だと研究者は注意を促している）とあり、Aが正解。Bは支持者が創造性との組み合わせを主張しているので逆、Cは「採用する企業が増えている」とあり矛盾、Dはハイブリッド勤務が週2〜3日の出社を求めるものなので誤りです。\n\n【図解】本文中の慎重な見解\n　立場｜本文の記述｜含み\n　支持者｜創造性との両立を主張｜肯定的\n　研究者の一部｜long-term effects remain unclear｜留保\n　企業の動向｜採用が増えている｜普及は進行中\n　⇒ 長期的影響は未解明という慎重論が答え\n　⚠ 「企業が採用をやめている」は本文と矛盾。誰の立場の発言かを整理して読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_074', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_2}

Why do urban bees often produce more honey than rural bees?`,
    choices: [
      { key: 'A', text: "Rooftop hives keep the bees warmer in winter." },
      { key: 'B', text: "City bees belong to a stronger species." },
      { key: 'C', text: "Cities offer varied flowers all year and few pesticides are used." },
      { key: 'D', text: "Rural beekeepers collect honey less frequently." },
    ],
    correctKey: 'C',
    explanation: '本文に"city parks and gardens offer a wide variety of flowers throughout the year, and farm pesticides are rarely used in urban areas"（都市の公園や庭は一年中多様な花を提供し、農薬もほとんど使われない）と理由が明記されており、Cが正解。A・B・Dはいずれも本文に記述がありません。\n\n【図解】都市が養蜂に向く理由\n　要素｜本文の記述｜利点\n　花の多様性｜公園や庭に一年中｜蜜源が途切れない\n　農薬｜rarely used in urban areas｜蜂への害が少ない\n　結果｜都市の蜂群が育ちやすい｜養蜂ブーム\n　⇒ 花の多様性と農薬の少なさが理由\n　⚠ 気温や天敵の話は本文にない。理由は本文に明記された2点に限られる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_075', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_2}

In the passage, the word "enthusiasm" most closely means:`,
    choices: [
      { key: 'A', text: "criticism" },
      { key: 'B', text: "strong interest and excitement" },
      { key: 'C', text: "financial investment" },
      { key: 'D', text: "scientific research" },
    ],
    correctKey: 'B',
    explanation: 'enthusiasmは「熱意・熱中」という意味で、Bの「強い興味と興奮」が最も近い言い換えです。都市養蜂ブームへの熱意にも限度がある、という文脈です。criticismは「批判」、financial investmentは「金銭的投資」、scientific researchは「科学研究」。形容詞enthusiastic（熱心な）、be enthusiastic about 〜も頻出です。\n\n【図解】enthusiasm の意味\n　語｜品詞｜意味\n　enthusiasm｜名詞｜熱意, 熱中\n　enthusiastic｜形容詞｜熱心な\n　be enthusiastic about｜句｜〜に熱中している\n　⇒ 強い関心と高揚を指すなら enthusiasm\n　⚠ criticism（批判）とは方向が逆。文脈がブームを述べているか批判かを確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_076', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_2}

According to the passage, what are city governments beginning to do?`,
    choices: [
      { key: 'A', text: "Ban rooftop hives in business districts." },
      { key: 'B', text: "Sell honey produced in public parks." },
      { key: 'C', text: "Import wild insects to compete with bees." },
      { key: 'D', text: "Require beekeepers to register their hives." },
    ],
    correctKey: 'D',
    explanation: '本文最終文に"City governments are therefore beginning to require beekeepers to register their hives so that numbers can be managed"（巣箱の数を管理できるよう、養蜂家に登録を義務づけ始めている）とあり、Dが正解。禁止（A）ではなく登録による管理である点がポイントです。B・Cは本文に記述がありません。\n\n【図解】自治体の対応\n　施策｜本文の記述｜性質\n　巣箱の登録｜require beekeepers to register｜義務づけ\n　目的｜numbers can be managed｜数の管理\n　禁止｜本文にない｜誤答の典型\n　⇒ 禁止ではなく登録による管理\n　⚠ 規制と禁止を同一視しない。require to register の内容を正確に読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_077', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_3}

According to the passage, what happens during deep sleep?`,
    choices: [
      { key: 'A', text: "The brain replays and strengthens the day's memories." },
      { key: 'B', text: "The brain erases unnecessary word pairs." },
      { key: 'C', text: "Memories are transferred into written notes." },
      { key: 'D', text: "The brain almost completely stops working." },
    ],
    correctKey: 'A',
    explanation: '本文に"During deep sleep, the brain replays and strengthens memories formed during the day"（深い睡眠中、脳は日中に形成された記憶を再生して強化する）とあり、Aが正解。この過程はconsolidation（固定化）と呼ばれると説明されています。B・C・Dはいずれも本文の内容と一致しません。\n\n【図解】睡眠と記憶の関係\n　段階｜本文の記述｜働き\n　深い睡眠｜replays memories｜日中の記憶を再生\n　強化｜strengthens memories｜結びつきを固める\n　名称｜consolidation｜固定化\n　⇒ 記憶の再生と強化が深い睡眠の役割\n　⚠ 記憶の消去や新規学習の話ではない。consolidation の意味を押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_078', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_3}

In the passage, the word "cram" most closely means:`,
    choices: [
      { key: 'A', text: "exercise lightly" },
      { key: 'B', text: "sleep deeply" },
      { key: 'C', text: "study intensively in a short time" },
      { key: 'D', text: "forget on purpose" },
    ],
    correctKey: 'C',
    explanation: 'cramは「詰め込み勉強をする」という意味で、Cの「短時間で集中的に勉強する」が正解。staying up all night to cram for an exam（試験のために徹夜で詰め込む）という文脈からも判断できます。日本語の「一夜漬け」に相当する表現です。もともとcramには「詰め込む」という意味があります。\n\n【図解】cram の意味\n　語｜原義｜派生した意味\n　cram｜詰め込む｜短期間で集中的に勉強する\n　cram for an exam｜句｜試験のために一夜漬けする\n　cram school｜名詞句｜学習塾\n　⇒ 徹夜で試験対策するなら cram\n　⚠ 単なる復習ではなく短期集中の詰め込みを指す。長期的な学習とは区別される。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_079', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_3}

What does the writer suggest about staying up all night before an exam?`,
    choices: [
      { key: 'A', text: "It is the best way to prepare for a morning exam." },
      { key: 'B', text: "Much of what is learned will soon be forgotten." },
      { key: 'C', text: "It improves deep sleep the following night." },
      { key: 'D', text: "It helps only with learning word pairs." },
    ],
    correctKey: 'B',
    explanation: '本文最終文に「徹夜で詰め込めば翌朝は内容を認識できるかもしれないが、脳が適切に記憶を保存する機会がなかったため、多くはすぐに消えてしまう」とあり、Bが正解。Aは本文の主張と正反対、C・Dは本文に記述がありません。睡眠が記憶の定着に不可欠だというのが本文全体の主旨です。\n\n設問は詰め込み学習の効果について問うている。本文は、徹夜で覚えた内容は翌朝は再認できても、脳が記憶を適切に保存する機会を得ていないため多くがすぐ消える、と述べており、睡眠が定着に不可欠だという全体の主旨と結びついている。\n\n【図解】詰め込み学習の結果\n　段階｜本文の記述｜結果\n　徹夜の暗記｜翌朝は認識できる｜一時的な保持\n　睡眠の欠如｜脳が保存する機会がない｜固定化されない\n　その後｜多くがすぐ消える｜長期記憶に残らない\n　⇒ 一時的に覚えても長続きしない\n　⚠ 「詰め込みが効果的」とする選択肢は本文と正反対。結論の向きを取り違えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_080', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_4}

How do the smartphone apps described in the passage work?`,
    choices: [
      { key: 'A', text: "They deliver fresh ingredients directly from farms." },
      { key: 'B', text: "They donate all unsold food to charities." },
      { key: 'C', text: "They predict how much food a shop will sell each day." },
      { key: 'D', text: "They let customers buy leftover food cheaply near closing time." },
    ],
    correctKey: 'D',
    explanation: '本文に「閉店時間の少し前に店と近くの客をつなぎ、利用者は割引価格で残り物の入ったサプライズバッグを買い、店で受け取る」と説明されており、Dが正解。Aの産地直送、Bの寄付、Cの販売予測はいずれもこのアプリの仕組みとして本文に書かれていません。\n\n設問はアプリの仕組みを問うている。本文によれば、閉店間際の店と近隣の利用者を結び、売れ残りを詰めたサプライズバッグを割引価格で購入して店頭で受け取る、という流れになっている。\n\n【図解】アプリの仕組み\n　段階｜本文の記述｜内容\n　時間帯｜閉店少し前｜売れ残りが出る時間\n　商品｜サプライズバッグ｜残り物の詰め合わせ\n　受け取り｜店で受け取る｜配送ではない\n　⇒ 割引価格での店頭受け取りが仕組み\n　⚠ 産地直送や寄付とは異なる。仕組みの各段階を本文で確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_081', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_4}

According to critics, what is a weakness of these apps?`,
    choices: [
      { key: 'A', text: "They address only the last stage of the food chain." },
      { key: 'B', text: "They raise prices for regular customers." },
      { key: 'C', text: "They increase methane emissions from landfills." },
      { key: 'D', text: "They encourage farms to grow too many vegetables." },
    ],
    correctKey: 'A',
    explanation: '本文最終文に"such apps deal only with the final stage of the food chain; far more waste occurs earlier"（こうしたアプリはフードチェーンの最終段階しか扱っておらず、廃棄の大半はもっと早い段階で起きている）とあり、Aが正解。Bの値上げ、Dの過剰生産の助長は本文になく、Cは埋立地のメタンをむしろ減らすとあるので逆です。\n\n【図解】アプリの限界\n　段階｜本文の記述｜廃棄の量\n　小売段階｜アプリが扱う範囲｜final stage\n　生産, 流通段階｜far more waste occurs earlier｜より大量\n　結論｜根本的な解決には至らない｜対象範囲が狭い\n　⇒ 扱えるのは最終段階のみという点が限界\n　⚠ 「値上げにつながる」「過剰生産を助長する」は本文にない。限界の中身を正確に読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_082', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_4}

In the passage, the word "rejected" most closely means:`,
    choices: [
      { key: 'A', text: "harvested" },
      { key: 'B', text: "transported" },
      { key: 'C', text: "refused or thrown out" },
      { key: 'D', text: "repackaged" },
    ],
    correctKey: 'C',
    explanation: 'rejectedは「拒否された・はねられた」という意味で、Cが正解。果物や野菜が見た目だけを理由に出荷からはねられ廃棄される、という文脈です。harvestedは「収穫された」、transportedは「輸送された」、repackagedは「再包装された」。動詞reject（〜を拒む）は、acceptの反意語として覚えましょう。\n\n【図解】reject の意味\n　語｜意味｜対義語\n　reject｜拒む, はねる｜accept\n　rejected produce｜規格外としてはねられた作物｜見た目が理由\n　harvest｜収穫する｜（別の段階）\n　⇒ 見た目を理由にはねられるなら rejected\n　⚠ transported や repackaged は流通段階の動作。廃棄の理由を表す語ではない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_083', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_5}

According to the passage, mining metals for batteries:`,
    choices: [
      { key: 'A', text: "produces no carbon dioxide at all." },
      { key: 'B', text: "uses large amounts of water and energy." },
      { key: 'C', text: "takes place only in European countries." },
      { key: 'D', text: "is no longer necessary because of recycling." },
    ],
    correctKey: 'B',
    explanation: '本文に"Mining lithium, cobalt, and nickel consumes enormous amounts of water and energy"（リチウム・コバルト・ニッケルの採掘は莫大な水とエネルギーを消費する）とあり、Bが正解。Cの採掘地域の限定は本文になく、Dはリサイクルがまだ一部にとどまると書かれているため誤り。Aも本文からは読み取れません。\n\n【図解】電池材料の採掘が抱える問題\n　資源｜本文の記述｜負荷\n　リチウム, コバルト, ニッケル｜enormous amounts of water and energy｜水と電力\n　採掘地｜水が乏しい地域を含む｜地域社会への影響\n　リサイクル｜まだ一部にとどまる｜代替が不十分\n　⇒ 水とエネルギーの大量消費が問題\n　⚠ 「採掘地が限られる」は本文にない。問題の中身を本文の語句で確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_084', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_5}

In the passage, the word "scarce" most closely means:`,
    choices: [
      { key: 'A', text: "polluted" },
      { key: 'B', text: "expensive" },
      { key: 'C', text: "frozen" },
      { key: 'D', text: "in short supply" },
    ],
    correctKey: 'D',
    explanation: 'scarceは「乏しい・不足している」という意味で、Dの「供給が不足している」が正解。「水がすでに乏しい地域で採掘が行われることもある」という文脈です。pollutedは「汚染された」、expensiveは「高価な」、frozenは「凍った」。名詞形scarcity（不足）、類義語のshort・insufficientもあわせて覚えましょう。\n\n【図解】scarce の意味と関連語\n　語｜品詞｜意味\n　scarce｜形容詞｜乏しい, 不足している\n　scarcity｜名詞｜不足\n　abundant｜形容詞｜豊富な（対義語）\n　⇒ 水がすでに足りない地域なら scarce\n　⚠ polluted（汚染された）とは問題の種類が違う。量の不足か質の悪化かを区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_085', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_5}

What is hoped about future batteries, according to the passage?`,
    choices: [
      { key: 'A', text: "They will be smaller than gasoline engines." },
      { key: 'B', text: "They will contain more cobalt than today's batteries." },
      { key: 'C', text: "They could be made largely from recycled materials." },
      { key: 'D', text: "They will never need to be replaced." },
    ],
    correctKey: 'C',
    explanation: '本文最終文に"future batteries could be built largely from recycled materials, reducing the need for new mining"（将来の電池は大部分をリサイクル材料から作れるようになり、新規採掘の必要性を減らせる）とあり、Cが正解。新工場は金属の90%以上の回収を目指しているという記述が根拠です。A・B・Dは本文にありません。\n\n【図解】リサイクル工場が目指すもの\n　項目｜本文の記述｜効果\n　回収率｜金属の90％以上｜高効率\n　将来の電池｜largely from recycled materials｜再生材が主体\n　結果｜reducing the need for new mining｜新規採掘の削減\n　⇒ 新たな採掘の必要性が減る点が要点\n　⚠ 「採掘が完全になくなる」とは書かれていない。reduce の程度を読み違えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_086', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_6}

According to the passage, what is coral bleaching?`,
    choices: [
      { key: 'A', text: "Corals expel the algae that give them color and food." },
      { key: 'B', text: "Divers remove seaweed from damaged reefs." },
      { key: 'C', text: "Nurseries grow white corals for aquariums." },
      { key: 'D', text: "Algae eat fragments of transplanted coral." },
    ],
    correctKey: 'A',
    explanation: '本文に「海水温の上昇によりサンゴは体内に住み、色と栄養を与えてくれる小さな藻類を追い出してしまう。これが白化（bleaching）と呼ばれる過程だ」とあり、Aが正解。expelは「追い出す」の意味です。B・C・Dはいずれも本文の白化の説明と一致しません。\n\n設問はサンゴの白化の仕組みを問うている。本文によれば、海水温の上昇によってサンゴが体内に共生する微細な藻類を放出してしまい、色と栄養の供給源を失う。この過程が bleaching と呼ばれる。\n\n【図解】白化の仕組み\n　段階｜本文の記述｜結果\n　水温上昇｜rising sea temperatures｜ストレス\n　藻類の放出｜expel the algae｜共生関係の崩壊\n　影響｜色と栄養を失う｜白くなり衰弱する\n　⇒ 共生藻の放出が白化の正体\n　⚠ 汚染や食害ではなく水温が引き金。expel という動詞の意味が読解の鍵になる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_087', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_6}

In the passage, the word "transplant" most closely means:`,
    choices: [
      { key: 'A', text: "photograph carefully" },
      { key: 'B', text: "move and attach to a new place" },
      { key: 'C', text: "freeze for long-term storage" },
      { key: 'D', text: "sell to overseas buyers" },
    ],
    correctKey: 'B',
    explanation: 'transplantは「移植する」という意味で、Bの「移動させて新しい場所に定着させる」が正解。海中の苗床で育てたサンゴの断片を傷んだ礁に移植する、という文脈です。trans-（別の場所へ）+ plant（植える）という語の成り立ちから推測できます。臓器移植（organ transplant）の意味でも頻出の語です。\n\n【図解】transplant の意味\n　語の構成｜意味｜例\n　trans（別の場所へ）＋ plant（植える）｜移植する｜transplant coral\n　名詞用法｜移植｜organ transplant\n　類義｜move and establish｜定着させる\n　⇒ 苗床の断片を礁へ移すなら transplant\n　⚠ 単に移動させるだけでなく、新しい場所に根づかせる含みがある点が重要。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_088', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_6}

What do scientists say about coral gardening?`,
    choices: [
      { key: 'A', text: "It has failed everywhere it has been tried." },
      { key: 'B', text: "It is a complete solution to reef damage." },
      { key: 'C', text: "It works only in the Caribbean." },
      { key: 'D', text: "It cannot succeed in the long run unless ocean warming slows." },
    ],
    correctKey: 'D',
    explanation: '本文最終文に「ガーデニングだけでは礁を救えない。海洋の温暖化が減速しない限り、再生されたサンゴもいずれ同じ運命をたどる」とあり、Dが正解。Aはオーストラリアとカリブ海で良好な初期結果が出ているため誤り、Bは「それだけでは救えない」と明言されており誤り、Cは2地域で成果があるため誤りです。\n\n設問はサンゴ礁再生の限界を問うている。本文はオーストラリアとカリブ海で良好な初期結果が出ていることを認めつつ、海洋の温暖化が鈍化しない限り再生されたサンゴも同じ運命をたどると結んでいる。\n\n【図解】再生活動の評価\n　側面｜本文の記述｜評価\n　初期成果｜2地域で良好｜肯定的\n　限界｜温暖化が続けば同じ運命｜条件つき\n　結論｜ガーデニングだけでは救えない｜根本対策が必要\n　⇒ 温暖化対策なしでは効果が続かない\n　⚠ 「成果がまったくない」は本文と矛盾。成果を認めたうえでの限界という論調を読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_089', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_7}

According to critics, what is one problem with voluntourism?`,
    choices: [
      { key: 'A', text: "Volunteers usually stay in one place for too many years." },
      { key: 'B', text: "It brings no money at all to local communities." },
      { key: 'C', text: "Short-term unskilled volunteers may take work away from local people." },
      { key: 'D', text: "Teaching English abroad is prohibited in most countries." },
    ],
    correctKey: 'C',
    explanation: '本文に"Unskilled volunteers who stay for only a week or two can take jobs away from local workers"（1〜2週間しか滞在しない未熟練のボランティアは地元労働者から仕事を奪いかねない）とあり、Cが正解。Aは滞在が短いことが問題なので逆、Bは支持者が地域にお金をもたらすと主張しており本文と矛盾、Dは本文にありません。\n\n【図解】ボランティア観光への批判\n　論点｜本文の記述｜問題\n　滞在期間｜only a week or two｜短すぎる\n　技能｜unskilled volunteers｜専門性がない\n　影響｜take jobs away from local workers｜地元の雇用を奪う\n　⇒ 短期の未熟練参加が地元雇用を圧迫する\n　⚠ 支持者の主張（地域にお金が入る）と批判を混同しない。誰の立場かを整理する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_090', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_7}

In the passage, the word "genuine" most closely means:`,
    choices: [
      { key: 'A', text: "real" },
      { key: 'B', text: "temporary" },
      { key: 'C', text: "foreign" },
      { key: 'D', text: "expensive" },
    ],
    correctKey: 'A',
    explanation: 'genuineは「本物の・真の」という意味で、Aのrealが最も近い言い換えです。「プロジェクトが地元の真のニーズを満たすためというより、訪問者を満足させるために設計されることがある」という文脈です。temporaryは「一時的な」、foreignは「外国の」、expensiveは「高価な」。類義語にauthentic（本物の）があります。\n\n【図解】genuine の意味\n　語｜意味｜類義語\n　genuine｜本物の, 真の｜real, authentic\n　genuine needs｜真のニーズ｜見せかけでない必要\n　superficial｜表面的な｜対になる語\n　⇒ 地元の真の必要を指すなら genuine\n　⚠ foreign や expensive とは意味の軸が違う。真偽の軸で語を選ぶ。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_091', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_7}

What do experts advise people who want to volunteer abroad?`,
    choices: [
      { key: 'A', text: "Avoid all volunteer programs in developing countries." },
      { key: 'B', text: "Choose organizations with local staff, long-term operations, and clear spending." },
      { key: 'C', text: "Donate money directly to orphanages instead of visiting." },
      { key: 'D', text: "Volunteer only in their own home countries." },
    ],
    correctKey: 'B',
    explanation: '本文最終文に「地元スタッフを雇い、長期的に活動し、受け取ったお金の使い道を正確に説明できる団体のプログラムを選ぶよう専門家は助言している」とあり、Bが正解。Aの全面回避やDの国内限定は助言されておらず、Cは孤児院が寄付集めのために子どもを劣悪な環境に置く例が批判されているため不適切です。\n\n設問は専門家の助言内容を問うている。本文は、地元スタッフを雇い、長期的に活動し、資金の使途を明確に説明できる団体を選ぶよう勧めており、参加そのものを否定してはいない。\n\n【図解】団体を選ぶ基準\n　基準｜本文の記述｜意味\n　雇用｜地元スタッフを雇う｜地域経済に還元\n　期間｜長期的に活動する｜継続性\n　説明責任｜資金の使途を説明できる｜透明性\n　⇒ 3つの基準を満たす団体を選ぶ\n　⚠ 「参加を全面的に避けるべき」とは述べていない。助言の方向を読み違えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_092', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_8}

According to the passage, what do studies suggest about reading on paper?`,
    choices: [
      { key: 'A', text: "Young readers strongly dislike paper books." },
      { key: 'B', text: "E-books help people remember stories better." },
      { key: 'C', text: "Print books will disappear within a decade." },
      { key: 'D', text: "Readers of long texts on paper may remember the content slightly better." },
    ],
    correctKey: 'D',
    explanation: '本文に"people reading long or complicated texts on paper often remember the content slightly better"（長い文章や複雑な文章を紙で読む人は内容をやや良く記憶していることが多い）とあり、Dが正解。ページの物理的な重みが物語のどこにいるかを感じる助けになる、という理由も述べられています。A・B・Cは本文と矛盾します。\n\n【図解】紙と電子の記憶の違い\n　条件｜本文の記述｜結果\n　長く複雑な文章｜紙のほうがやや優位｜内容の記憶が良い\n　手がかり｜ページの物理的な重み｜位置の把握\n　短い文章｜差は小さい｜媒体の影響は限定的\n　⇒ 長文では紙のほうがやや記憶に残る\n　⚠ 「電子書籍は常に劣る」と一般化しない。条件つきの差である点を押さえる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_093', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_8}

In the passage, the word "formats" most closely means:`,
    choices: [
      { key: 'A', text: "bookstores" },
      { key: 'B', text: "authors" },
      { key: 'C', text: "forms in which something is produced" },
      { key: 'D', text: "reading speeds" },
    ],
    correctKey: 'C',
    explanation: 'formatは「形式・形態」という意味で、Cの「何かが作られる形」が正解。ここでのthe two formatsは電子書籍と紙の書籍という2つの形態を指しています。bookstoreは「書店」、authorは「著者」、reading speedは「読む速さ」で、いずれも文脈に合いません。データの「フォーマット」としても使われる語です。\n\n【図解】format の意味\n　語｜意味｜例\n　format｜形式, 形態｜print and digital formats\n　medium｜媒体｜紙, 画面\n　edition｜版｜初版, 改訂版\n　⇒ 電子と紙という2つの形態なら formats\n　⚠ bookstore や author とは指すものが違う。文中の the two formats が何を指すかを確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_094', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_8}

What is the main idea of the passage?`,
    choices: [
      { key: 'A', text: "E-books and paper books are coming to serve different purposes." },
      { key: 'B', text: "E-books have no advantages over paper books." },
      { key: 'C', text: "Paper books are now bought only by elderly readers." },
      { key: 'D', text: "Commuters have stopped reading books entirely." },
    ],
    correctKey: 'A',
    explanation: '本文最終文に"Rather than replacing each other, the two formats appear to be settling into different roles"（互いに取って代わるのではなく、2つの形態は異なる役割に落ち着きつつある）とあり、これが本文全体の主旨です。Aが正解。Bは電子書籍の利点（即時配信・文字サイズ調整など）が挙げられており誤り、Cは紙の本は10代20代にもよく売れているとあり誤り、Dは本文にありません。\n\n【図解】本文全体の結論\n　観点｜本文の記述｜含意\n　置き換え｜Rather than replacing each other｜一方が消えるのではない\n　役割分担｜settling into different roles｜用途で使い分け\n　現状｜紙も若年層に売れている｜共存\n　⇒ 互いに異なる役割へ落ち着きつつある\n　⚠ 「電子書籍に利点がない」は本文と矛盾。両者の長所が併記されている点を読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_095', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_9}

According to the passage, what do modern libraries do besides lending books?`,
    choices: [
      { key: 'A', text: "They sell coffee to raise money for new buildings." },
      { key: 'B', text: "They offer free internet access, language classes, and study space." },
      { key: 'C', text: "They charge entrance fees during heat waves." },
      { key: 'D', text: "They publish local newspapers for elderly residents." },
    ],
    correctKey: 'B',
    explanation: '本文に「現代の図書館は、インターネットを利用できない人への無料アクセス、移民向けの語学教室、家が狭かったり騒がしかったりする学生のための静かな学習スペースを提供している」とあり、Bが正解。猛暑の際には高齢者の避暑シェルターにもなるが、入場料を取るとは書かれていないためCは誤り。A・Dも本文にありません。\n\n【図解】現代の図書館の役割\n　サービス｜対象｜内容\n　無料のネット接続｜利用できない人｜情報格差の是正\n　語学教室｜移民｜言語支援\n　静かな学習空間｜家が手狭な学生｜学習環境\n　⇒ 貸出以外の公共サービスが中心\n　⚠ 猛暑時の避暑シェルターは無料。入場料を取るという記述はない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_096', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_9}

In the passage, the word "fraction" most closely means:`,
    choices: [
      { key: 'A', text: "an official duty" },
      { key: 'B', text: "a serious problem" },
      { key: 'C', text: "a small part" },
      { key: 'D', text: "a written rule" },
    ],
    correctKey: 'C',
    explanation: 'fractionは「ごく一部・断片」という意味で、Cが正解。「本の貸し出しは今や図書館の仕事のほんの一部にすぎない」という文脈です。数学では「分数」の意味でも使われます。official dutyは「公式の義務」、serious problemは「深刻な問題」、written ruleは「成文の規則」で、いずれも文脈に合いません。\n\n【図解】fraction の意味\n　語｜意味｜使う場面\n　fraction｜ごく一部, 断片｜only a fraction of\n　数学用語｜分数｜1 over 2\n　対になる語｜majority（大部分）｜割合の対比\n　⇒ 仕事のごく一部を指すなら fraction\n　⚠ 「重要な義務」ではなく「わずかな部分」。only という語が量の少なさを示す。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_097', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_9}

Why do researchers who study cities value public libraries?`,
    choices: [
      { key: 'A', text: "They raise the value of nearby properties." },
      { key: 'B', text: "They train young people to become librarians." },
      { key: 'C', text: "They reduce the amount cities spend on schools." },
      { key: 'D', text: "They strengthen communities by bringing different people together." },
    ],
    correctKey: 'D',
    explanation: '本文に"researchers who study cities argue that such places strengthen communities by bringing together people of different ages and backgrounds"（都市を研究する学者は、そうした場所は年齢や背景の異なる人々を結びつけることで地域社会を強くすると主張している）とあり、Dが正解。A・B・Cはいずれも本文に記述がありません。\n\n【図解】研究者が指摘する図書館の価値\n　要素｜本文の記述｜効果\n　集まる人々｜different ages and backgrounds｜多様な層\n　場の働き｜bringing together｜交流を生む\n　結果｜strengthen communities｜地域社会の強化\n　⇒ 異なる背景の人をつなぐ点が価値\n　⚠ 蔵書数や建物の規模の話ではない。研究者が評価している側面を正確に読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_098', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_10}

Which advantage of vertical farms is mentioned in the passage?`,
    choices: [
      { key: 'A', text: "They use far less water than traditional farming." },
      { key: 'B', text: "They operate without any electricity." },
      { key: 'C', text: "They can grow grains more cheaply than fields." },
      { key: 'D', text: "They depend entirely on natural sunlight." },
    ],
    correctKey: 'A',
    explanation: '本文冒頭に"using LED lights instead of sunshine and up to ninety-five percent less water than traditional fields"（太陽光の代わりにLED照明を使い、従来の畑より最大95%少ない水で栽培する）とあり、Aが正解。Bは電力消費の大きさが弱点とされており逆、Cは穀物は従来農法の方がはるかに安いとあり誤り、Dは太陽光ではなくLEDを使うため誤りです。\n\n【図解】垂直農業の特徴\n　項目｜本文の記述｜評価\n　光源｜LED lights instead of sunshine｜人工照明\n　水の使用｜最大95％削減｜大きな利点\n　電力｜消費が大きい｜弱点\n　⇒ 節水効果が明確な利点として挙げられる\n　⚠ 「太陽光を使う」は本文と逆。LED という語を見落とさない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu4_099', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_10}

In the passage, the word "obvious" most closely means:`,
    choices: [
      { key: 'A', text: "hidden" },
      { key: 'B', text: "temporary" },
      { key: 'C', text: "acceptable" },
      { key: 'D', text: "easy to see or understand" },
    ],
    correctKey: 'D',
    explanation: 'obviousは「明らかな・誰の目にも明白な」という意味で、Dが正解。「この技術には明白な弱点、すなわち電力の問題がある」という文脈です。hiddenは「隠れた」で正反対、temporaryは「一時的な」、acceptableは「許容できる」。副詞obviously（明らかに）、類義語clear・evidentもあわせて覚えましょう。\n\n【図解】obvious の意味\n　語｜意味｜含み\n　obvious｜明らかな｜誰の目にも明白\n　hidden｜隠れた｜対義語\n　evident, clear｜明白な｜類義語\n　⇒ 電力という明白な弱点なら obvious\n　⚠ hidden とは正反対。文脈が弱点を明示しているか隠れているかで判断する。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu4_100', level: '2kyu', category: 'reading',
    question: `Read the following passage and answer the question below.

${p4_10}

According to the passage, which crops are best suited to vertical farms at present?`,
    choices: [
      { key: 'A', text: "Fruit trees such as apples and oranges." },
      { key: 'B', text: "Grains such as rice and wheat." },
      { key: 'C', text: "Fast-growing, high-value crops such as lettuce and herbs." },
      { key: 'D', text: "Root vegetables such as potatoes." },
    ],
    correctKey: 'C',
    explanation: '本文最終文に"the business works best for fast-growing, high-value crops such as lettuce and herbs"（この事業はレタスやハーブのような成長が早く付加価値の高い作物に最も適している）とあり、Cが正解。穀物や果樹は従来の方法で育てる方がはるかに安いと述べられているため、A・Bは誤り。Dのイモ類は本文にありません。\n\n【図解】垂直農業に向く作物\n　条件｜本文の記述｜作物例\n　成長が速い｜fast-growing｜レタス\n　付加価値が高い｜high-value｜ハーブ\n　向かない作物｜穀物, 果樹｜従来農法が安い\n　⇒ 葉物とハーブなど高付加価値作物に適する\n　⚠ 穀物での代替を述べる選択肢は本文と矛盾。コスト比較の記述を確認する。',
    difficulty: 'standard',
  },
];
