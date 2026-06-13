import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Question, subjectInfo } from '../data/questions';

type Props = {
  question: Question;
  onReveal?: () => void;
};

const DIFF_STYLES: Record<string, { icon: string; color: string; bg: string }> = {
  basic:    { icon: '🌱', color: '#27AE60', bg: '#F0FFF4' },
  standard: { icon: '⭐', color: '#F39C12', bg: '#FFFBEB' },
  advanced: { icon: '🔥', color: '#E74C3C', bg: '#FFF5F5' },
};

const { width } = Dimensions.get('window');

export default function QuizCard({ question, onReveal }: Props) {
  const [revealed, setRevealed] = useState(false);
  const info = subjectInfo[question.subject];
  const diffStyle = DIFF_STYLES[question.difficulty ?? 'basic'];

  function handlePress() {
    if (!revealed) {
      setRevealed(true);
      onReveal?.();
    }
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.85}
      style={[styles.card, revealed && styles.cardRevealed]}
    >
      {!revealed ? (
        <View style={styles.questionSide}>
          <View style={styles.cardTopRow}>
            <Text style={styles.subjectEmoji}>{info.emoji}</Text>
            <View style={[styles.diffTag, { backgroundColor: diffStyle.bg, borderColor: diffStyle.color }]}>
              <Text style={[styles.diffTagText, { color: diffStyle.color }]}>
                {diffStyle.icon}
              </Text>
            </View>
          </View>
          <Text style={styles.questionLabel}>問題</Text>
          <Text style={styles.questionText}>{question.question}</Text>
          <View style={styles.tapHint}>
            <Text style={styles.tapHintText}>タップして答えを見る 👆</Text>
          </View>
        </View>
      ) : (
        <View style={styles.answerSide}>
          <Text style={styles.answerLabel}>答え</Text>
          <Text style={styles.answerText}>{question.answer}</Text>
          {question.hint != null && (
            <View style={styles.hintBox}>
              <Text style={styles.hintLabel}>💡 ヒント</Text>
              <Text style={styles.hintText}>{question.hint}</Text>
            </View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 28,
    marginHorizontal: 16,
    minHeight: 260,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },
  cardRevealed: {
    backgroundColor: '#F0FFF4',
    borderWidth: 2,
    borderColor: '#00A651',
  },
  questionSide: {
    alignItems: 'center',
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 12,
  },
  subjectEmoji: {
    fontSize: 52,
  },
  diffTag: {
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  diffTagText: {
    fontSize: 16,
    fontWeight: '700',
  },
  questionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#888',
    letterSpacing: 2,
    marginBottom: 14,
    textTransform: 'uppercase',
  },
  questionText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A2E',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 24,
  },
  tapHint: {
    backgroundColor: '#EEF4FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tapHintText: {
    fontSize: 13,
    color: '#1E5FBE',
    fontWeight: '600',
  },
  answerSide: {
    alignItems: 'center',
  },
  answerLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#00A651',
    letterSpacing: 2,
    marginBottom: 14,
    textTransform: 'uppercase',
  },
  answerText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A2E',
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 20,
  },
  hintBox: {
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    padding: 14,
    width: '100%',
    borderLeftWidth: 3,
    borderLeftColor: '#F59E0B',
  },
  hintLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#B45309',
    marginBottom: 4,
  },
  hintText: {
    fontSize: 13,
    color: '#78350F',
    lineHeight: 20,
  },
});
