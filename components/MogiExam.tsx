import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Alert,
} from 'react-native';

export type MogiQuestion = {
  id: string;
  subject: string;
  subjectName: string;
  question: string;
  choices: { key: 'A' | 'B' | 'C' | 'D'; text: string; explanation?: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  examYear?: string;
};

type Props = {
  questions: MogiQuestion[];
  timeLimitMinutes?: number;
  passingScore?: number;
  accentColor?: string;
  title?: string;
  onBack: () => void;
};

const CHOICE_COLORS: Record<string, string> = {
  A: '#1E5FBE', B: '#2E7D32', C: '#C62828', D: '#7B1FA2',
};

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MogiExam({
  questions,
  timeLimitMinutes = 120,
  passingScore = 36,
  accentColor = '#6B3210',
  title = '模擬試験',
  onBack,
}: Props) {
  const [shuffled] = useState(() => shuffle(questions));
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(timeLimitMinutes * 60);
  const [phase, setPhase] = useState<'exam' | 'review' | 'result'>('exam');
  const [reviewMode, setReviewMode] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer
  useEffect(() => {
    if (phase !== 'exam') return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setPhase('result');
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [phase]);

  const handleAnswer = useCallback((key: 'A' | 'B' | 'C' | 'D') => {
    setAnswers(prev => ({ ...prev, [index]: key }));
  }, [index]);

  const toggleFlag = useCallback(() => {
    setFlagged(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, [index]);

  const handleFinish = useCallback(() => {
    const unanswered = shuffled.filter((_, i) => answers[i] === undefined).length;
    if (unanswered > 0) {
      Alert.alert(
        '未回答があります',
        `${unanswered}問が未回答です。このまま終了しますか？`,
        [
          { text: 'キャンセル', style: 'cancel' },
          { text: '終了する', style: 'destructive', onPress: () => { clearInterval(timerRef.current!); setPhase('result'); } },
        ]
      );
    } else {
      clearInterval(timerRef.current!);
      setPhase('result');
    }
  }, [shuffled, answers]);

  // Results calculation
  const calcResults = useCallback(() => {
    let correct = 0;
    const bySubject: Record<string, { correct: number; total: number; name: string }> = {};
    shuffled.forEach((q, i) => {
      const subj = q.subject;
      if (!bySubject[subj]) bySubject[subj] = { correct: 0, total: 0, name: q.subjectName };
      bySubject[subj].total++;
      if (answers[i] === q.correctKey) {
        correct++;
        bySubject[subj].correct++;
      }
    });
    return { correct, total: shuffled.length, bySubject };
  }, [shuffled, answers]);

  // ── RESULT SCREEN ──
  if (phase === 'result') {
    const { correct, total, bySubject } = calcResults();
    const pct = Math.round((correct / total) * 100);
    const passed = correct >= passingScore;
    return (
      <ScrollView contentContainerStyle={styles.resultContainer}>
        <Text style={styles.resultEmoji}>{passed ? '🎉' : '📚'}</Text>
        <Text style={[styles.resultVerdict, { color: passed ? '#2E7D32' : '#C62828' }]}>
          {passed ? '合格ライン突破！' : 'もう一息！'}
        </Text>
        <Text style={[styles.resultScore, { color: accentColor }]}>{correct} / {total}点</Text>
        <Text style={styles.resultPct}>{pct}%</Text>
        <View style={styles.passBadge}>
          <Text style={styles.passBadgeText}>合格基準 {passingScore}点以上</Text>
        </View>

        <View style={styles.subjectBreakdown}>
          <Text style={styles.breakdownTitle}>科目別成績</Text>
          {Object.entries(bySubject).map(([key, s]) => {
            const ratio = s.correct / s.total;
            return (
              <View key={key} style={styles.breakdownRow}>
                <Text style={styles.breakdownName}>{s.name}</Text>
                <View style={styles.breakdownBarBg}>
                  <View style={[styles.breakdownBarFill, {
                    width: `${ratio * 100}%`,
                    backgroundColor: ratio >= 0.7 ? '#2E7D32' : ratio >= 0.5 ? '#E65100' : '#C62828',
                  }]} />
                </View>
                <Text style={styles.breakdownScore}>{s.correct}/{s.total}</Text>
              </View>
            );
          })}
        </View>

        <TouchableOpacity
          style={[styles.reviewBtn, { backgroundColor: accentColor }]}
          onPress={() => { setReviewMode(true); setIndex(0); setPhase('review'); }}
        >
          <Text style={styles.reviewBtnText}>問題を見直す</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backToMenuBtn} onPress={onBack}>
          <Text style={styles.backToMenuBtnText}>メニューに戻る</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // ── REVIEW SCREEN ──
  if (phase === 'review') {
    const q = shuffled[index];
    const userAnswer = answers[index];
    const isCorrect = userAnswer === q.correctKey;
    return (
      <ScrollView style={styles.examScroll} contentContainerStyle={styles.examContent}>
        <View style={styles.reviewHeader}>
          <TouchableOpacity onPress={() => setPhase('result')}>
            <Text style={styles.reviewBackText}>← 結果に戻る</Text>
          </TouchableOpacity>
          <Text style={styles.reviewProgress}>{index + 1} / {shuffled.length}</Text>
        </View>

        <View style={[styles.reviewStatus, { backgroundColor: isCorrect ? '#E8F5E9' : '#FFEBEE' }]}>
          <Text style={[styles.reviewStatusText, { color: isCorrect ? '#2E7D32' : '#C62828' }]}>
            {isCorrect ? '✓ 正解' : `✗ 不正解（あなたの回答: ${userAnswer ?? '未回答'}）`}
          </Text>
        </View>

        <View style={styles.subjectTag}>
          <Text style={styles.subjectTagText}>{q.subjectName}{q.examYear ? ` ／ ${q.examYear}年` : ''}</Text>
        </View>

        <View style={styles.questionBox}>
          <Text style={styles.questionNum}>問{index + 1}</Text>
          <Text style={styles.questionText}>{q.question}</Text>
        </View>

        {(['A', 'B', 'C', 'D'] as const).map(key => {
          const choice = q.choices.find(c => c.key === key);
          if (!choice) return null;
          const isCorrectKey = key === q.correctKey;
          const isUserAnswer = key === userAnswer;
          let bg = '#FFF', border = '#E0E0E0';
          if (isCorrectKey) { bg = '#E8F5E9'; border = '#2E7D32'; }
          else if (isUserAnswer && !isCorrectKey) { bg = '#FFEBEE'; border = '#C62828'; }
          return (
            <View key={key} style={[styles.choice, { backgroundColor: bg, borderColor: border }]}>
              <View style={[styles.choiceKey, { backgroundColor: CHOICE_COLORS[key] }]}>
                <Text style={styles.choiceKeyText}>{key}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.choiceText}>{choice.text}</Text>
                {choice.explanation && (
                  <Text style={styles.choiceExp}>{choice.explanation}</Text>
                )}
              </View>
              {(isCorrectKey || isUserAnswer) && (
                <Text style={[styles.choiceMark, { color: isCorrectKey ? '#2E7D32' : '#C62828' }]}>
                  {isCorrectKey ? '✓' : '✗'}
                </Text>
              )}
            </View>
          );
        })}

        <View style={styles.explanationBox}>
          <Text style={styles.explanationLabel}>解説</Text>
          <Text style={styles.explanationText}>{q.explanation}</Text>
        </View>

        <View style={styles.navRow}>
          <TouchableOpacity
            style={[styles.navBtn, index === 0 && styles.navBtnDisabled]}
            onPress={() => setIndex(i => Math.max(0, i - 1))}
            disabled={index === 0}
          >
            <Text style={styles.navBtnText}>← 前の問題</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navBtn, index === shuffled.length - 1 && styles.navBtnDisabled]}
            onPress={() => setIndex(i => Math.min(shuffled.length - 1, i + 1))}
            disabled={index === shuffled.length - 1}
          >
            <Text style={styles.navBtnText}>次の問題 →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  // ── EXAM SCREEN ──
  const q = shuffled[index];
  const answered = answers[index];
  const isFlagged = flagged.has(index);
  const answeredCount = Object.keys(answers).length;
  const urgent = timeLeft < 600;

  return (
    <View style={{ flex: 1 }}>
      {/* Timer bar */}
      <View style={[styles.timerBar, { backgroundColor: urgent ? '#C62828' : accentColor }]}>
        <View style={styles.timerLeft}>
          <Text style={styles.timerLabel}>残り時間</Text>
          <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
        </View>
        <View style={styles.timerRight}>
          <Text style={styles.timerLabel}>進捗</Text>
          <Text style={styles.timerText}>{answeredCount}/{shuffled.length}問</Text>
        </View>
      </View>

      <ScrollView style={styles.examScroll} contentContainerStyle={styles.examContent}>
        {/* Subject / progress */}
        <View style={styles.examProgressRow}>
          <View style={styles.subjectTagSmall}>
            <Text style={styles.subjectTagSmallText}>{q.subjectName}</Text>
          </View>
          <TouchableOpacity onPress={toggleFlag} style={styles.flagBtn}>
            <Text style={[styles.flagBtnText, isFlagged && styles.flagBtnActive]}>
              {isFlagged ? '🚩 フラグ解除' : '🚩 後で確認'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Question */}
        <View style={styles.questionBox}>
          <Text style={styles.questionNum}>問{index + 1}</Text>
          <Text style={styles.questionText}>{q.question}</Text>
        </View>

        {/* Choices */}
        {(['A', 'B', 'C', 'D'] as const).map(key => {
          const choice = q.choices.find(c => c.key === key);
          if (!choice) return null;
          const isSelected = answered === key;
          return (
            <TouchableOpacity
              key={key}
              style={[styles.choice, isSelected && { backgroundColor: '#EEF4FF', borderColor: accentColor }]}
              onPress={() => handleAnswer(key)}
              activeOpacity={0.75}
            >
              <View style={[styles.choiceKey, { backgroundColor: CHOICE_COLORS[key] }]}>
                <Text style={styles.choiceKeyText}>{key}</Text>
              </View>
              <Text style={styles.choiceText}>{choice.text}</Text>
              {isSelected && <Text style={[styles.choiceMark, { color: accentColor }]}>●</Text>}
            </TouchableOpacity>
          );
        })}

        {/* Navigation */}
        <View style={styles.navRow}>
          <TouchableOpacity
            style={[styles.navBtn, index === 0 && styles.navBtnDisabled]}
            onPress={() => setIndex(i => Math.max(0, i - 1))}
            disabled={index === 0}
          >
            <Text style={styles.navBtnText}>← 前へ</Text>
          </TouchableOpacity>
          {index < shuffled.length - 1 ? (
            <TouchableOpacity style={[styles.navBtn, { backgroundColor: accentColor }]} onPress={() => setIndex(i => i + 1)}>
              <Text style={[styles.navBtnText, { color: '#FFF' }]}>次へ →</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[styles.navBtn, { backgroundColor: '#C62828' }]} onPress={handleFinish}>
              <Text style={[styles.navBtnText, { color: '#FFF' }]}>提出する</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Answer grid */}
        <View style={styles.answerGrid}>
          <Text style={styles.answerGridTitle}>回答一覧（タップで移動）</Text>
          <View style={styles.answerGridRow}>
            {shuffled.map((_, i) => {
              const isAns = answers[i] !== undefined;
              const isFlag = flagged.has(i);
              const isCurrent = i === index;
              return (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.answerCell,
                    isAns && { backgroundColor: accentColor },
                    isFlag && styles.answerCellFlagged,
                    isCurrent && styles.answerCellCurrent,
                  ]}
                  onPress={() => setIndex(i)}
                >
                  <Text style={[styles.answerCellText, isAns && { color: '#FFF' }]}>{i + 1}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <TouchableOpacity style={[styles.submitBtn, { backgroundColor: '#C62828' }]} onPress={handleFinish}>
          <Text style={styles.submitBtnText}>解答提出・採点する</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  timerBar: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 },
  timerLeft: { alignItems: 'flex-start' },
  timerRight: { alignItems: 'flex-end' },
  timerLabel: { fontSize: 10, color: 'rgba(255,255,255,0.7)', fontWeight: '600' },
  timerText: { fontSize: 20, fontWeight: '900', color: '#FFF', fontVariant: ['tabular-nums'] as any },
  examScroll: { flex: 1, backgroundColor: '#F5F7FA' },
  examContent: { padding: 16, paddingBottom: 40 },
  examProgressRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  subjectTagSmall: { backgroundColor: '#EEF4FF', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 },
  subjectTagSmallText: { fontSize: 11, fontWeight: '700', color: '#1E5FBE' },
  flagBtn: { paddingHorizontal: 10, paddingVertical: 4 },
  flagBtnText: { fontSize: 12, color: '#999', fontWeight: '600' },
  flagBtnActive: { color: '#E65100' },
  questionBox: { backgroundColor: '#FFF', borderRadius: 16, padding: 16, marginBottom: 14, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.07, shadowRadius: 6, elevation: 3 },
  questionNum: { fontSize: 12, fontWeight: '700', color: '#999', marginBottom: 6 },
  questionText: { fontSize: 15, fontWeight: '700', color: '#1A1A2E', lineHeight: 26 },
  choice: { flexDirection: 'row', alignItems: 'center', borderRadius: 12, padding: 12, borderWidth: 2, borderColor: '#E0E0E0', backgroundColor: '#FFF', marginBottom: 8, gap: 10 },
  choiceKey: { width: 30, height: 30, borderRadius: 8, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  choiceKeyText: { fontSize: 13, fontWeight: '900', color: '#FFF' },
  choiceText: { flex: 1, fontSize: 13, fontWeight: '600', color: '#1A1A2E', lineHeight: 20 },
  choiceExp: { fontSize: 11, color: '#555', lineHeight: 17, marginTop: 4, fontStyle: 'italic' },
  choiceMark: { fontSize: 18, fontWeight: '900' },
  navRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginBottom: 20, gap: 8 },
  navBtn: { flex: 1, borderRadius: 12, paddingVertical: 12, alignItems: 'center', backgroundColor: '#EEF4FF' },
  navBtnDisabled: { opacity: 0.35 },
  navBtnText: { fontSize: 14, fontWeight: '800', color: '#1E5FBE' },
  answerGrid: { backgroundColor: '#FFF', borderRadius: 16, padding: 14, marginBottom: 12 },
  answerGridTitle: { fontSize: 12, fontWeight: '700', color: '#888', marginBottom: 10 },
  answerGridRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  answerCell: { width: 36, height: 36, borderRadius: 8, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0F0F0', borderWidth: 1, borderColor: '#DDD' },
  answerCellFlagged: { borderColor: '#E65100', borderWidth: 2 },
  answerCellCurrent: { borderColor: '#1E5FBE', borderWidth: 2.5 },
  answerCellText: { fontSize: 11, fontWeight: '700', color: '#555' },
  submitBtn: { borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginTop: 8 },
  submitBtnText: { fontSize: 16, fontWeight: '900', color: '#FFF' },
  // Result styles
  resultContainer: { padding: 24, alignItems: 'center', paddingBottom: 60 },
  resultEmoji: { fontSize: 80, marginBottom: 8 },
  resultVerdict: { fontSize: 22, fontWeight: '900', marginBottom: 8 },
  resultScore: { fontSize: 52, fontWeight: '900', marginBottom: 4 },
  resultPct: { fontSize: 20, fontWeight: '700', color: '#666', marginBottom: 12 },
  passBadge: { backgroundColor: '#EEF4FF', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 6, marginBottom: 24 },
  passBadgeText: { fontSize: 13, fontWeight: '700', color: '#1E5FBE' },
  subjectBreakdown: { width: '100%', backgroundColor: '#FFF', borderRadius: 16, padding: 16, marginBottom: 20 },
  breakdownTitle: { fontSize: 14, fontWeight: '800', color: '#1A1A2E', marginBottom: 12 },
  breakdownRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 8 },
  breakdownName: { width: 90, fontSize: 12, fontWeight: '700', color: '#444' },
  breakdownBarBg: { flex: 1, height: 10, backgroundColor: '#EEE', borderRadius: 5, overflow: 'hidden' },
  breakdownBarFill: { height: '100%', borderRadius: 5 },
  breakdownScore: { width: 36, fontSize: 12, fontWeight: '700', color: '#444', textAlign: 'right' },
  reviewBtn: { width: '100%', borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginBottom: 10 },
  reviewBtnText: { fontSize: 16, fontWeight: '900', color: '#FFF' },
  backToMenuBtn: { width: '100%', borderRadius: 14, paddingVertical: 14, alignItems: 'center', backgroundColor: '#EEF4FF' },
  backToMenuBtnText: { fontSize: 15, fontWeight: '800', color: '#1E5FBE' },
  // Review styles
  reviewHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  reviewBackText: { fontSize: 14, fontWeight: '700', color: '#1E5FBE' },
  reviewProgress: { fontSize: 13, fontWeight: '700', color: '#666' },
  reviewStatus: { borderRadius: 10, padding: 10, marginBottom: 10 },
  reviewStatusText: { fontSize: 14, fontWeight: '800', textAlign: 'center' },
  subjectTag: { backgroundColor: '#EEF4FF', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4, alignSelf: 'flex-start', marginBottom: 10 },
  subjectTagText: { fontSize: 11, fontWeight: '700', color: '#1E5FBE' },
  explanationBox: { backgroundColor: '#FFF8F0', borderRadius: 14, padding: 14, marginTop: 4, borderLeftWidth: 4, borderLeftColor: '#E67E22' },
  explanationLabel: { fontSize: 13, fontWeight: '800', color: '#E67E22', marginBottom: 6 },
  explanationText: { fontSize: 13, color: '#333', lineHeight: 22, fontWeight: '500' },
});
