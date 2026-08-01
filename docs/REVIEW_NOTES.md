# App Store 審査メモ（各資格・サブスクリプション別）

App Store Connectの「App Review Information」（アプリ全体の審査メモ）と、
「サブスクリプション（各Pro商品／Max商品）の Review Notes」に貼り付ける内容をまとめたもの。
Appleの審査担当は日本語話者とは限らないため、各サブスクリプションのReview Notesは
英語で用意している（コピペでそのまま使える）。

---

## 1. アプリ全体の Review Notes（App Review Information）

App Store Connect → App Information → App Review Information の「Notes」欄に貼り付け：

```
This app is a study/exam-prep app for 15 different Japanese professional
certification exams (real estate agent, financial planner, condo manager,
building equipment engineer, 1st-class construction management engineers x5,
construction cost manager, water supply installation engineer, fire protection
equipment officer, electrical engineer grade 3, weather forecaster, and the
English proficiency test (Eiken)).

Each subject shows the first 10 questions for free. Unlocking the full
question bank for a specific certification requires either:
  - a per-certification "Pro" subscription (unlocks that one certification), or
  - the "Max" subscription (unlocks all 15 certifications at once)

To verify the paywall: open any certification from the home screen → select
any subject → answer past question 10, or scroll down on the subject screen,
to see the paywall banner and both subscription options with monthly/yearly
toggle, pricing, and a "Restore Purchases" button.

All "mock exam" (模擬試験) questions are original content written to match
the real exam's format and difficulty — they are not reproductions of actual
past exam questions.

There is no account/sign-in system; all learning progress is stored locally
on-device only.
```

---

## 2. サブスクリプションごとの Review Notes（英語・コピペ用）

各Pro商品／Max商品をApp Store Connectの「App内課金」→対象の定期購読→
「Review Information」→「Review Notes」に貼り付ける内容。

### 全資格 Max（`max`）

- 価格：月額 ¥2,800 ／ 年額 ¥28,000
- 内容：15資格すべての全問題・全模擬試験をアンロック

```
Unlocks the full question bank (all subjects, all difficulty levels, and all
mock exams) for all 15 certification exams offered in this app at once. This
is the top-tier "all access" plan; equivalent to purchasing every
per-certification Pro plan individually, at a discounted bundle price.
```

### 宅地建物取引士（`pro_takkei`）

- 商品ID：`qualiz_pro_takkei_m2` / `qualiz_pro_takkei_y2`
  （旧ID `qualiz_pro_takkei_monthly` / `_yearly` は削除済みで再利用不可）
- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：権利関係・法令上の制限・税・宅建業法など全科目 3,590問 ＋ 過去5年分の本試験問題（令和元〜5年）
  ＋ 要点テキスト300セクション（66.2万字）

```
Unlocks the full question bank (3,590 questions) for the Japanese real estate
transaction specialist exam (宅地建物取引士 / Takkenshi), covering civil law,
land-use regulation, tax law, and the Real Estate Brokerage Act, plus 5 years
of past official exam questions (transcribed for study purposes with detailed
explanations, not for redistribution). Also unlocks the full study text of 300
sections across the four subject areas, with diagrams, comparison tables and
frequently-tested figures.
```

### FP（`pro_fp`）

- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：ライフプランニング・リスク管理・金融資産運用・タックスプランニング・不動産・相続 の全級

```
Unlocks the full question bank for the Japanese Financial Planner (FP)
certification across all levels (2nd and 3rd grades) and all 6 subject areas:
life planning, risk management, asset management, tax planning, real estate,
and inheritance/gift planning.
```

### マンション管理士（`pro_mansion`）

- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：民法・区分所有法・規約・管理組合運営・設備 全科目 ＋ 令和6・7年度本試験問題

```
Unlocks the full question bank for the Japanese Condominium Manager
(マンション管理士) certification, covering civil law, the Condominium
Ownership Act, management association bylaws and operations, and building
equipment, plus 2 years of past official exam questions.
```

### 建築設備士（`pro_kenchiku`）

- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：一般（学科I）・建築設備（学科II）全科目 ＋ 基礎/応用モード・模擬試験・製図試験対策ガイド

```
Unlocks the full question bank and mock exam for the Japanese Building
Equipment Engineer (建築設備士) certification, covering general knowledge and
building equipment engineering, plus a guide for the second-stage design
exam (製図試験).
```

### 一級建築施工管理技士（`pro_sekokan`）

- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：建築学等・躯体施工・仕上施工・施工管理法・法規（全825問：学習775問＋模擬50問）＋ 第二次検定対策ガイド

```
Unlocks the full question bank (775 practice questions + a 50-question full
mock exam) for the Japanese 1st-Class Building Construction Management
Engineer (1級建築施工管理技士) certification, covering building science,
structural/finishing construction, construction management methods, and
construction-related law, plus a guide for the second-stage written exam.
```

### 電験三種（`pro_denken3`）

- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：理論・電力・機械・法規 全科目（1,040問）＋ 図解・導出ステップ付き解説

```
Unlocks the full question bank (1,040 questions) for the Japanese 3rd-Class
Electrical Engineer (電験三種 / Denken San-shu) certification, covering
circuit theory, power systems, electrical machinery, and electrical law and
regulations, with diagram-based and step-by-step derivation explanations.
```

### 気象予報士（`pro_kisho`）

- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：一般知識・専門知識・実技試験 全科目（1,200問）

```
Unlocks the full question bank for the Japanese Weather Forecaster
(気象予報士) certification, covering general meteorological knowledge,
specialized knowledge, and practical forecasting skills.
```

### 建設コスト管理士（`pro_cost`）

- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：概論・積算・契約・経済 全科目（1,220問）＋ 模擬試験・論文対策

```
Unlocks the full question bank (1,220 questions) for the Japanese Construction
Cost Manager (建設コスト管理士) certification, covering cost management
principles, quantity surveying and estimating, construction contracts, and
construction economics, together with a mock exam and essay-writing guidance.
```

### 給水装置工事主任技術者（`pro_kyusui`）

- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：公衆衛生・水道行政・工事法・構造性能・計画論・事務論・概要・施工管理 全科目（1,200問）＋ 模擬試験

```
Unlocks the full question bank (1,200 questions) for the Japanese Water Supply
Installation Chief Engineer (給水装置工事主任技術者) certification, covering
public health, waterworks administration, installation methods, structure and
performance standards, planning, administrative practice, equipment overview,
and construction management, together with a mock exam.
```

### 消防設備士 甲種（`pro_shobo`）

- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：消防関係法令（共通・類別）・基礎的知識・構造機能・規格・実技 全科目（1,200問）＋ 模擬試験

```
Unlocks the full question bank (1,200 questions) for the Japanese Fire
Protection Equipment Officer (消防設備士 甲種, Class A) certification, covering
fire service law (common and category-specific), fundamental mechanical and
electrical knowledge, equipment structure and function, technical standards,
and the practical drawing/identification section, together with a mock exam.
```

### 危険物取扱者 乙種第4類（`pro_kikenbutsu`）

- 商品ID：`qualiz_pro_kikenbutsu_monthly` / `_yearly`
- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：法令・物理化学・性質と消火の全3科目（600問）＋ 模擬試験
  ＋ 要点テキスト300セクション（65.4万字）

```
Unlocks the full question bank (600 questions) for the Japanese Hazardous
Materials Engineer certification, Class B Type 4 (危険物取扱者 乙種第4類),
which authorises the handling of flammable liquids such as gasoline, kerosene
and diesel. Covers all three examination subjects: fire service law on
hazardous materials, basic physics and chemistry including combustion and
extinguishing theory, and the properties, fire prevention and extinguishing
methods for Class 4 substances. Also unlocks a mock exam reproducing the real
35-question format and a study text of 300 sections with diagrams and
comparison tables.
```

### コンクリート技士・診断士（`pro_concrete`）

- 商品ID：`qualiz_pro_concrete_monthly` / `_yearly`
- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：材料・配合・製造・施工・各種・劣化診断の全6科目（600問）＋ 模擬試験
  ＋ 要点テキスト300セクション（69.2万字）

```
Unlocks the full question bank (600 questions) for the Japanese Concrete
Engineer and Concrete Diagnosis Engineer certifications (コンクリート技士・
コンクリート診断士), administered by the Japan Concrete Institute. Covers
concrete materials, mix design and properties, manufacturing and quality
control, construction practice, special concretes, and deterioration
diagnosis, repair and strengthening. Also unlocks a 40-question mock exam and
a study text of 300 sections with diagrams, JIS reference values and worked
calculation examples.
```

### ~~中学受験対策（`pro_juken`）~~ ※現在は提供なし

> **審査提出時はこの節を含めないこと。** 受験対策（中学受験）はホーム画面から
> 外しており（「資格のみ」方針）、特定商取引法に基づく表記からもプランを削除済み、
> App Store Connect にも商品を作成していません。将来公開する場合に備えて記載のみ残します。

- 価格：月額 ¥500 ／ 年額 ¥5,000（**未提供**）
- 内容：算数・国語・理科・社会・英語 全科目（難関校対応）

```
Unlocks the full question bank for Japanese junior-high school entrance exam
preparation (中学受験), covering math, Japanese language, science, social
studies, and English, targeted at competitive private junior-high schools.
```

### 英検（`pro_eiken`）

- 価格：月額 ¥800 ／ 年額 ¥8,000
- 内容：2級・3級・4級 全問題（5,160問／語彙・文法・長文・リスニング含む）

```
Unlocks the full question bank (5,160 questions) for the EIKEN English
proficiency test (英検), covering grades 2, 3, and 4, including vocabulary,
grammar, reading comprehension, and listening questions.
```

### 管工事施工管理技士（`pro_kankoji`）

- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：原論・専門土木・施工管理法・法規 全科目

```
Unlocks the full question bank for the Japanese Plumbing/HVAC Construction
Management Engineer (管工事施工管理技士) certification.
```

### 電気工事施工管理技士（`pro_denkisekou`）

- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：電気理論・施工・施工管理法・法規 全科目

```
Unlocks the full question bank for the Japanese Electrical Construction
Management Engineer (電気工事施工管理技士) certification.
```

### 建設機械施工管理技士（`pro_kikaisekou`）

- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：土木・機械・施工管理法・法規 全科目

```
Unlocks the full question bank for the Japanese Construction Machinery
Management Engineer (建設機械施工管理技士) certification.
```

### 一級土木施工管理技士（`pro_dobokusekou`）

- 価格：月額 ¥1,800 ／ 年額 ¥18,000
- 内容：土木一般・専門土木・施工管理法・土木法規（全760問：学習710問＋模擬50問）＋ 基礎/応用モード・第二次検定対策ガイド

```
Unlocks the full question bank (710 practice questions + a 50-question full
mock exam) for the Japanese 1st-Class Civil Engineering Construction
Management Engineer (1級土木施工管理技士) certification, covering general
civil engineering, specialized civil engineering, construction management
methods, and civil-engineering-related law, plus a guide for the
second-stage written exam.
```

---

## 3. 審査で聞かれやすいこと（想定問答）

| 想定される質問 | 回答 |
|---|---|
| 「本試験問題」は著作権的に問題ないか | 本アプリの模擬試験・オリジナル問題はすべて出題傾向を分析して独自作成したものであり、実際の試験問題の転載ではない旨をReview Notesに明記済み。宅建・マンション管理士の「本試験問題」は過去問を教育目的で使用しているが、著作権法上の引用・学習目的の利用範囲内としている（心配な場合は該当ファイルの扱いを個別に確認可能）。 |
| 15資格分の課金がなぜ別々に必要か | 各資格は独立した学習コンテンツであり、受験生は通常1〜2資格しか必要としないため、資格ごとの個別課金（Pro）と、複数資格を学ぶユーザー向けの全資格課金（Max）の2階建てにしている。 |
| 無料で試せる範囲 | 各科目最初の10問は無料（`FREE_QUESTION_LIMIT`）。購入前に内容を確認できる。 |
| サブスクリプションの復元 | 各Paywall画面に「購入を復元する」ボタンを実装済み。 |

---

*このファイルは各資格の内容・価格が変わるたびに更新すること。*
