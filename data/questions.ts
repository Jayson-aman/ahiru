export type Question = {
  id: string;
  subject: 'sansu' | 'kokugo' | 'rika' | 'shakai';
  question: string;
  answer: string;
  hint?: string;
};

export type SubjectKey = 'sansu' | 'kokugo' | 'rika' | 'shakai';

export const questions: Question[] = [
  // 算数 (sansu)
  {
    id: 'sansu_01',
    subject: 'sansu',
    question: '1から100までの整数の和は？',
    answer: '5050',
    hint: '等差数列の公式: n(n+1)/2 を使う',
  },
  {
    id: 'sansu_02',
    subject: 'sansu',
    question: '24と36の最大公約数は？',
    answer: '12',
  },
  {
    id: 'sansu_03',
    subject: 'sansu',
    question: '半径5cmの円の面積は？（円周率は3.14）',
    answer: '78.5㎠',
    hint: '面積 = 半径 × 半径 × 3.14',
  },
  {
    id: 'sansu_04',
    subject: 'sansu',
    question: '鶴と亀が合わせて10匹、足の合計が28本。鶴は何羽？',
    answer: '6羽',
    hint: '鶴亀算: 全部亀なら20本。28-20=8本差 ÷ (4-2)=4で鶴4羽…実際は6羽',
  },
  {
    id: 'sansu_05',
    subject: 'sansu',
    question: '時速60kmで2時間30分走ると何km？',
    answer: '150km',
    hint: '2時間30分 = 2.5時間',
  },
  {
    id: 'sansu_06',
    subject: 'sansu',
    question: '3/4 + 5/6 = ？',
    answer: '19/12（1と7/12）',
    hint: '通分: 12が共通分母',
  },
  {
    id: 'sansu_07',
    subject: 'sansu',
    question: '1辺が8cmの正方形の対角線の長さは？',
    answer: '8√2 cm ≈ 11.31cm',
    hint: 'ピタゴラスの定理: a² + b² = c²',
  },
  {
    id: 'sansu_08',
    subject: 'sansu',
    question: '整数の中で、1と自分自身しか約数を持たない数を何という？',
    answer: '素数',
  },
  {
    id: 'sansu_09',
    subject: 'sansu',
    question: '12%の食塩水200gに含まれる食塩の量は？',
    answer: '24g',
    hint: '200 × 0.12 = 24',
  },
  {
    id: 'sansu_10',
    subject: 'sansu',
    question: '90を素因数分解すると？',
    answer: '2 × 3² × 5',
  },
  {
    id: 'sansu_11',
    subject: 'sansu',
    question: '三角形の内角の和は何度？',
    answer: '180度',
  },
  {
    id: 'sansu_12',
    subject: 'sansu',
    question: '100円の品物を30%引きで買うといくら？',
    answer: '70円',
    hint: '100 × (1 - 0.3) = 70',
  },
  {
    id: 'sansu_13',
    subject: 'sansu',
    question: '1辺10cmの立方体の体積は？',
    answer: '1000cm³',
    hint: '体積 = 辺 × 辺 × 辺',
  },
  {
    id: 'sansu_14',
    subject: 'sansu',
    question: '速さ・時間・距離の関係式は？',
    answer: '距離 = 速さ × 時間',
  },
  {
    id: 'sansu_15',
    subject: 'sansu',
    question: '2けたの整数で、十の位と一の位の数字の和が9になるものは何個？',
    answer: '9個（18, 27, 36, 45, 54, 63, 72, 81, 90）',
  },

  // 国語 (kokugo)
  {
    id: 'kokugo_01',
    subject: 'kokugo',
    question: '「以心伝心」の意味は？',
    answer: '言葉を使わなくても、心と心が通じ合うこと',
  },
  {
    id: 'kokugo_02',
    subject: 'kokugo',
    question: '「光陰矢の如し」の意味は？',
    answer: '時間は矢のように速く過ぎ去るということ',
  },
  {
    id: 'kokugo_03',
    subject: 'kokugo',
    question: '「七転び八起き」の意味は？',
    answer: '何度失敗してもあきらめずに立ち上がること',
  },
  {
    id: 'kokugo_04',
    subject: 'kokugo',
    question: '「一石二鳥」の意味は？',
    answer: '一つの行動で二つの利益を得ること',
  },
  {
    id: 'kokugo_05',
    subject: 'kokugo',
    question: '「温故知新」の意味は？',
    answer: '古いことを学び直し、新しい知識を得ること',
  },
  {
    id: 'kokugo_06',
    subject: 'kokugo',
    question: '「花鳥風月」の意味は？',
    answer: '自然の美しい景色・風雅なこと',
  },
  {
    id: 'kokugo_07',
    subject: 'kokugo',
    question: '「付和雷同」の意味は？',
    answer: '自分の意見を持たず、むやみに他人に同調すること',
  },
  {
    id: 'kokugo_08',
    subject: 'kokugo',
    question: '「急がば回れ」の意味は？',
    answer: '急ぐときほど、安全な方法を選んだほうが結局早い',
  },
  {
    id: 'kokugo_09',
    subject: 'kokugo',
    question: '「五里霧中」の意味は？',
    answer: '物事の見通しが全くつかず、どうすればよいか分からない状態',
  },
  {
    id: 'kokugo_10',
    subject: 'kokugo',
    question: '「起承転結」の意味は？',
    answer: '文章や話の構成：起こし・受けて・転じて・まとめる',
  },
  {
    id: 'kokugo_11',
    subject: 'kokugo',
    question: '「縦」の反対語は？',
    answer: '横',
  },
  {
    id: 'kokugo_12',
    subject: 'kokugo',
    question: '「喜怒哀楽」の意味は？',
    answer: '喜び・怒り・悲しみ・楽しみの4つの感情',
  },
  {
    id: 'kokugo_13',
    subject: 'kokugo',
    question: '「臨機応変」の意味は？',
    answer: '状況に応じて、その場で適切な対応をすること',
  },
  {
    id: 'kokugo_14',
    subject: 'kokugo',
    question: '「切磋琢磨」の意味は？',
    answer: '友人同士で競い合い、互いに励まし向上すること',
  },
  {
    id: 'kokugo_15',
    subject: 'kokugo',
    question: '「自画自賛」の意味は？',
    answer: '自分で自分のことを褒めること',
  },

  // 理科 (rika)
  {
    id: 'rika_01',
    subject: 'rika',
    question: '光合成に必要な3つのものは？',
    answer: '水・二酸化炭素・光（日光）',
  },
  {
    id: 'rika_02',
    subject: 'rika',
    question: 'アンモニアの化学式は？',
    answer: 'NH₃',
  },
  {
    id: 'rika_03',
    subject: 'rika',
    question: '月が地球の周りを一周するのにかかる日数は？',
    answer: '約27.3日',
  },
  {
    id: 'rika_04',
    subject: 'rika',
    question: '水が沸騰する温度は（標準気圧で）？',
    answer: '100℃',
  },
  {
    id: 'rika_05',
    subject: 'rika',
    question: '食塩の化学式は？',
    answer: 'NaCl（塩化ナトリウム）',
  },
  {
    id: 'rika_06',
    subject: 'rika',
    question: 'ヒトの心臓は部屋がいくつ？',
    answer: '4つ（右心房・右心室・左心房・左心室）',
  },
  {
    id: 'rika_07',
    subject: 'rika',
    question: '地球の表面の約何%が海？',
    answer: '約70%',
  },
  {
    id: 'rika_08',
    subject: 'rika',
    question: '花粉を運ぶ虫を何という？',
    answer: '送粉者（花粉媒介者）、代表例はミツバチ',
  },
  {
    id: 'rika_09',
    subject: 'rika',
    question: '音が空気中を伝わる速さは約何m/s？',
    answer: '約340m/s',
  },
  {
    id: 'rika_10',
    subject: 'rika',
    question: '太陽系で最も大きな惑星は？',
    answer: '木星',
  },
  {
    id: 'rika_11',
    subject: 'rika',
    question: '植物の根から水を吸い上げる力を何という？',
    answer: '毛細管現象・蒸散による吸引',
  },
  {
    id: 'rika_12',
    subject: 'rika',
    question: '電流の単位は？',
    answer: 'アンペア（A）',
  },
  {
    id: 'rika_13',
    subject: 'rika',
    question: 'リトマス試験紙：アルカリ性では何色に変わる？',
    answer: '赤→青に変わる',
  },
  {
    id: 'rika_14',
    subject: 'rika',
    question: 'ダイヤモンドの主成分は？',
    answer: '炭素（C）',
  },
  {
    id: 'rika_15',
    subject: 'rika',
    question: '日食が起こるのはなぜ？',
    answer: '月が太陽と地球の間に入り、太陽が隠れるため',
  },

  // 社会 (shakai)
  {
    id: 'shakai_01',
    subject: 'shakai',
    question: '日本で最も長い川は？',
    answer: '信濃川（全長367km）',
  },
  {
    id: 'shakai_02',
    subject: 'shakai',
    question: '聖徳太子が十七条憲法を制定したのは何年？',
    answer: '604年',
  },
  {
    id: 'shakai_03',
    subject: 'shakai',
    question: '日本の標準時子午線は東経何度？',
    answer: '東経135度（兵庫県明石市）',
  },
  {
    id: 'shakai_04',
    subject: 'shakai',
    question: '日本国憲法が公布されたのは何年何月何日？',
    answer: '1946年11月3日',
  },
  {
    id: 'shakai_05',
    subject: 'shakai',
    question: '世界で最も面積が大きい国は？',
    answer: 'ロシア',
  },
  {
    id: 'shakai_06',
    subject: 'shakai',
    question: '参議院議員の任期は何年？',
    answer: '6年（3年ごとに半数改選）',
  },
  {
    id: 'shakai_07',
    subject: 'shakai',
    question: '江戸幕府を開いたのは誰？',
    answer: '徳川家康',
  },
  {
    id: 'shakai_08',
    subject: 'shakai',
    question: '日本の国会は衆議院と何院からなる？',
    answer: '参議院',
  },
  {
    id: 'shakai_09',
    subject: 'shakai',
    question: '縄文時代の次の時代は？',
    answer: '弥生時代',
  },
  {
    id: 'shakai_10',
    subject: 'shakai',
    question: '日本最大の湖は？',
    answer: '琵琶湖（滋賀県）',
  },
  {
    id: 'shakai_11',
    subject: 'shakai',
    question: '関ヶ原の戦いが起きた年は？',
    answer: '1600年',
  },
  {
    id: 'shakai_12',
    subject: 'shakai',
    question: 'アメリカ合衆国の首都は？',
    answer: 'ワシントンD.C.',
  },
  {
    id: 'shakai_13',
    subject: 'shakai',
    question: '日本で最も高い山は？',
    answer: '富士山（3776m）',
  },
  {
    id: 'shakai_14',
    subject: 'shakai',
    question: '明治維新が始まった年は？',
    answer: '1868年',
  },
  {
    id: 'shakai_15',
    subject: 'shakai',
    question: '国連（国際連合）の本部はどこ？',
    answer: 'ニューヨーク（アメリカ）',
  },
];

export const questionsBySubject: Record<SubjectKey, Question[]> = {
  sansu: questions.filter((q) => q.subject === 'sansu'),
  kokugo: questions.filter((q) => q.subject === 'kokugo'),
  rika: questions.filter((q) => q.subject === 'rika'),
  shakai: questions.filter((q) => q.subject === 'shakai'),
};

export const subjectInfo: Record<
  SubjectKey,
  { name: string; emoji: string; color: string }
> = {
  sansu: { name: '算数', emoji: '📐', color: '#4A90D9' },
  kokugo: { name: '国語', emoji: '📖', color: '#E74C3C' },
  rika: { name: '理科', emoji: '🔬', color: '#27AE60' },
  shakai: { name: '社会', emoji: '🌍', color: '#F39C12' },
};
