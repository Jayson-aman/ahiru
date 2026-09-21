import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MogiExam from '../../components/MogiExam';
import { takkeiQuestions } from '../../data/takkei_questions';

const DISTRIBUTION: Record<string, number> = {
  kenri: 14,
  gyoho: 20,
  horei: 8,
  zei: 8,
};

const SUBJECT_NAMES: Record<string, string> = {
  kenri: '権利関係',
  gyoho: '宅建業法',
  horei: '法令上の制限',
  zei: '税・その他',
};

/**
 * 出題の選び方。
 *
 * 'daily'  … 日付をシードにして毎日1セット。同じ日なら何度入っても同じ50問。
 * 'random' … 入るたびに引き直す。
 *
 * この問題集は**無料**なので 'daily' にしている。'random' にすると、
 * 画面を出入りするだけで解説つきの問題が無限に読めてしまい、
 * 有料バンクの advanced 1,348問がそのまま無課金で読めることになる。
 * （同じ理由で mogi.tsx も無料枠だけはランダムにしていない。）
 *
 * 日替わりなら「今日の50問」として直前対策の使い方にも合い、
 * 1日に出る問題数も50問に収まる。
 */
const SELECTION: 'daily' | 'random' = 'daily';

/**
 * 直前対策なので難問から組む。
 *
 * advanced と standard を連結してからシャッフルすると優先順位が消える
 * （それで一度 standard が 37/50 を占める状態になった）。
 * advanced の中でシャッフルして取り切り、足りない分だけ standard で埋める。
 * 現状はどの科目も advanced が必要数を大きく上回っているので、
 * 実際には advanced だけで 50 問そろう。
 */
function pickForSubject(subject: string, count: number, rand: () => number) {
  const all = takkeiQuestions.filter(q => q.subject === subject);
  const advanced = shuffle(all.filter(q => q.difficulty === 'advanced'), rand);
  if (advanced.length >= count) return advanced.slice(0, count);

  const standard = shuffle(all.filter(q => q.difficulty === 'standard'), rand);
  return [...advanced, ...standard.slice(0, count - advanced.length)];
}

/** 科目名からシードのずらし幅を作る（djb2）。 */
function hashString(s: string) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = (Math.imul(h, 33) + s.charCodeAt(i)) | 0;
  return Math.abs(h) % 100000;
}

/** mulberry32。同じシードなら同じ並びになる。 */
function seededRandom(seed: number) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

/** 日本時間の YYYYMMDD。UTCで切ると日本の朝9時までが前日扱いになる。 */
function jstDateSeed(now: Date) {
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return (
    jst.getUTCFullYear() * 10000 +
    (jst.getUTCMonth() + 1) * 100 +
    jst.getUTCDate()
  );
}

/** Fisher-Yates。sort(() => random() - 0.5) は偏るのでシャッフルは自分で書く。 */
function shuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildExam(seed: number) {
  const result: typeof takkeiQuestions = [];
  for (const [subject, count] of Object.entries(DISTRIBUTION)) {
    // 科目ごとにシードをずらす。同じシードを使い回すと、どの科目も
    // 同じ並び順で選ばれる。文字数でずらすと kenri/gyoho/horei が
    // どれも5文字で衝突するので、中身から作る。
    const rand = seededRandom(seed + hashString(subject));
    result.push(...pickForSubject(subject, count, rand));
  }
  return result.map(q => ({
    id: q.id,
    subject: q.subject,
    subjectName: SUBJECT_NAMES[q.subject] ?? q.subjectName,
    question: q.question,
    choices: q.choices,
    correctKey: q.correctKey,
    explanation: q.explanation,
    examYear: q.examYear,
  }));
}

export default function TakkeiChokuzenScreen() {
  const router = useRouter();

  const questions = useMemo(
    () =>
      buildExam(
        SELECTION === 'daily' ? jstDateSeed(new Date()) : Math.floor(Math.random() * 2 ** 31),
      ),
    [],
  );

  // 課金判定を挟まない。この問題集は無料。
  return (
    <SafeAreaView style={styles.safe}>
      <MogiExam
        questions={questions}
        timeLimitMinutes={120}
        passingScore={36}
        accentColor="#E65100"
        title="宅建 直前問題集"
        onBack={() => router.back()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
});
