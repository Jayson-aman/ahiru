import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import * as Speech from 'expo-speech';
import { Question } from '../data/questions';

type Phase = 'idle' | 'reading_q' | 'pause_q' | 'reading_a' | 'pause_a' | 'done';

type Props = {
  visible: boolean;
  questions: Question[];
  subjectName: string;
  subjectEmoji: string;
  subjectColor: string;
  onClose: () => void;
};

const SPEEDS = [
  { label: '0.8x', value: 0.8 },
  { label: '1x',   value: 1.0 },
  { label: '1.3x', value: 1.3 },
  { label: '1.6x', value: 1.6 },
];

const PAUSE_Q_MS = 2200;
const PAUSE_A_MS = 3000;

export default function ListenMode({
  visible,
  questions,
  subjectName,
  subjectEmoji,
  subjectColor,
  onClose,
}: Props) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [phase, setPhase] = useState<Phase>('idle');
  const [speedIdx, setSpeedIdx] = useState(1);

  const playingRef = useRef(false);
  const indexRef = useRef(0);
  const speedRef = useRef(SPEEDS[1].value);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { playingRef.current = playing; }, [playing]);
  useEffect(() => { indexRef.current = index; }, [index]);

  const stopAll = useCallback(() => {
    if (timerRef.current != null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    Speech.stop();
  }, []);

  useEffect(() => {
    if (!visible) {
      stopAll();
      setPlaying(false);
      setPhase('idle');
      setIndex(0);
      indexRef.current = 0;
      playingRef.current = false;
    }
  }, [visible, stopAll]);

  const beginReading = useCallback(
    (startIdx: number) => {
      const readQ = (i: number) => {
        if (!playingRef.current) return;
        setIndex(i);
        indexRef.current = i;
        setPhase('reading_q');
        Speech.speak(`問題${i + 1}。${questions[i].question}`, {
          language: 'ja-JP',
          rate: speedRef.current,
          onDone: () => {
            if (!playingRef.current) return;
            setPhase('pause_q');
            timerRef.current = setTimeout(() => {
              if (!playingRef.current) return;
              readA(i);
            }, PAUSE_Q_MS);
          },
        });
      };

      const readA = (i: number) => {
        if (!playingRef.current) return;
        setPhase('reading_a');
        const answerText = questions[i].hint
          ? `${questions[i].answer}。ヒント。${questions[i].hint}`
          : questions[i].answer;
        Speech.speak(`答え。${answerText}`, {
          language: 'ja-JP',
          rate: speedRef.current,
          onDone: () => {
            if (!playingRef.current) return;
            setPhase('pause_a');
            timerRef.current = setTimeout(() => {
              if (!playingRef.current) return;
              if (i + 1 >= questions.length) {
                setPhase('done');
                setPlaying(false);
                playingRef.current = false;
              } else {
                readQ(i + 1);
              }
            }, PAUSE_A_MS);
          },
        });
      };

      readQ(startIdx);
    },
    [questions],
  );

  function handlePlayPause() {
    if (playing) {
      setPlaying(false);
      playingRef.current = false;
      stopAll();
      if (phase === 'done') {
        setPhase('done');
      } else {
        setPhase('idle');
      }
    } else {
      const startIdx = phase === 'done' ? 0 : indexRef.current;
      if (phase === 'done') {
        setIndex(0);
        indexRef.current = 0;
      }
      setPlaying(true);
      playingRef.current = true;
      beginReading(startIdx);
    }
  }

  function handlePrev() {
    stopAll();
    const newIdx = Math.max(0, indexRef.current - 1);
    setIndex(newIdx);
    indexRef.current = newIdx;
    setPhase('idle');
    if (playing) {
      setTimeout(() => {
        if (playingRef.current) beginReading(newIdx);
      }, 100);
    }
  }

  function handleNext() {
    stopAll();
    const newIdx = Math.min(questions.length - 1, indexRef.current + 1);
    setIndex(newIdx);
    indexRef.current = newIdx;
    setPhase('idle');
    if (playing) {
      setTimeout(() => {
        if (playingRef.current) beginReading(newIdx);
      }, 100);
    }
  }

  function handleSpeedChange(si: number) {
    setSpeedIdx(si);
    speedRef.current = SPEEDS[si].value;
    if (playing) {
      stopAll();
      setTimeout(() => {
        if (playingRef.current) beginReading(indexRef.current);
      }, 150);
    }
  }

  const q = questions[index];
  const total = questions.length;
  const showAnswer = phase === 'reading_a' || phase === 'pause_a';

  const phaseLabel =
    phase === 'reading_q' ? '問題を読んでいます...' :
    phase === 'pause_q'   ? '少しお待ちください...' :
    phase === 'reading_a' ? '答えを読んでいます...' :
    phase === 'pause_a'   ? '次の問題へ...' :
    phase === 'done'      ? '🎉 全問終了！' :
    playing               ? '準備中...' :
                            '▶ 再生ボタンでスタート';

  return (
    <Modal visible={visible} animationType="slide" statusBarTranslucent>
      <SafeAreaView style={styles.root}>
        <View style={[styles.header, { backgroundColor: subjectColor }]}>
          <Text style={styles.headerTitle}>{subjectEmoji} 聞き流しモード</Text>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeBtnText}>✕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.progressRow}>
          <Text style={styles.progressText}>{index + 1} / {total}問</Text>
        </View>
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${((index + 1) / total) * 100}%`, backgroundColor: subjectColor },
            ]}
          />
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              styles.card,
              (phase === 'reading_q' || phase === 'pause_q') && {
                borderWidth: 2,
                borderColor: subjectColor,
              },
            ]}
          >
            <Text style={styles.cardLabel}>問題</Text>
            <Text style={styles.questionText}>{q.question}</Text>
          </View>

          <View
            style={[
              styles.card,
              showAnswer
                ? styles.answerCardActive
                : styles.answerCardHidden,
            ]}
          >
            <Text style={[styles.cardLabel, { color: '#00A651' }]}>答え</Text>
            <Text style={styles.answerText}>
              {showAnswer ? q.answer : '？？？'}
            </Text>
          </View>

          <View style={styles.statusRow}>
            <View
              style={[
                styles.statusDot,
                { backgroundColor: playing ? '#00A651' : '#CCC' },
              ]}
            />
            <Text style={[styles.statusText, { color: playing ? '#00A651' : '#999' }]}>
              {phaseLabel}
            </Text>
          </View>

          <Text style={styles.speedLabel}>再生速度</Text>
          <View style={styles.speedRow}>
            {SPEEDS.map((s, si) => (
              <TouchableOpacity
                key={s.label}
                style={[
                  styles.speedBtn,
                  speedIdx === si && { backgroundColor: subjectColor, borderColor: subjectColor },
                ]}
                onPress={() => handleSpeedChange(si)}
              >
                <Text
                  style={[
                    styles.speedBtnText,
                    speedIdx === si && styles.speedBtnTextActive,
                  ]}
                >
                  {s.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.controls}>
            <TouchableOpacity style={styles.controlBtn} onPress={handlePrev}>
              <Text style={styles.controlBtnText}>⏮</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.playBtn, { backgroundColor: subjectColor }]}
              onPress={handlePlayPause}
              activeOpacity={0.85}
            >
              <Text style={styles.playBtnText}>{playing ? '⏸' : '▶'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlBtn} onPress={handleNext}>
              <Text style={styles.controlBtnText}>⏭</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tipBox}>
            <Text style={styles.tipText}>
              🎧 イヤホンをつけて電車・車の中で聞き流そう！{'\n'}
              問題 → 間 → 答え の順に自動で読み上げます
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  closeBtn: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtnText: { fontSize: 16, color: '#FFFFFF', fontWeight: '700' },
  progressRow: { alignItems: 'center', paddingVertical: 8 },
  progressText: { fontSize: 14, fontWeight: '700', color: '#555' },
  progressTrack: { height: 4, backgroundColor: 'rgba(0,0,0,0.1)' },
  progressFill: { height: '100%', borderRadius: 2 },
  content: { padding: 20, paddingBottom: 40 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#888',
    letterSpacing: 2,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  questionText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1A1A2E',
    lineHeight: 26,
  },
  answerCardActive: {
    backgroundColor: '#F0FFF4',
    borderWidth: 2,
    borderColor: '#00A651',
    borderRadius: 16,
    padding: 20,
    marginBottom: 14,
  },
  answerCardHidden: {
    opacity: 0.45,
  },
  answerText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1A1A2E',
    lineHeight: 26,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statusText: { fontSize: 14, fontWeight: '600' },
  speedLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  speedRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  speedBtn: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#DDD',
  },
  speedBtnText: { fontSize: 13, fontWeight: '700', color: '#555' },
  speedBtnTextActive: { color: '#FFFFFF' },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 24,
  },
  controlBtn: {
    width: 56,
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  controlBtnText: { fontSize: 24 },
  playBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  playBtnText: { fontSize: 30, color: '#FFFFFF' },
  tipBox: {
    backgroundColor: '#EEF4FF',
    borderRadius: 12,
    padding: 16,
  },
  tipText: {
    fontSize: 13,
    color: '#1E5FBE',
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
  },
});
