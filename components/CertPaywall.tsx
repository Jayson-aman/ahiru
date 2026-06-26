import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert, ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';
import {
  CertKey,
  FREE_QUESTION_LIMIT,
  fetchCurrentOffering,
  getCustomerInfo,
  hasCertAccess,
  purchasePackage,
  restorePurchases,
} from '../services/subscription';
import type { CustomerInfo, PurchasesPackage } from 'react-native-purchases';

type Props = {
  certKey: CertKey;
  certName: string;
  certEmoji: string;
  accentColor: string;
  totalQuestions: number;
  children: React.ReactNode;
  /** If provided, only this many questions are shown in free tier instead of the default */
  freeLimit?: number;
};

/**
 * Wraps content that requires a Pro subscription for a specific certification.
 * In free tier, children still render but the calling component should limit
 * questions to FREE_QUESTION_LIMIT using the `isFree` prop pattern.
 *
 * Use <CertPaywall> around the quiz header area; pass isFree down so MCQQuiz
 * can slice questions accordingly.
 */
export default function CertPaywall({
  certKey, certName, certEmoji, accentColor, totalQuestions, children, freeLimit,
}: Props) {
  const [info, setInfo] = useState<CustomerInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState(false);
  const [pkg, setPkg] = useState<PurchasesPackage | null>(null);
  const limit = freeLimit ?? FREE_QUESTION_LIMIT;
  const hasAccess = hasCertAccess(info, certKey);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [ci, offering] = await Promise.all([getCustomerInfo(), fetchCurrentOffering()]);
        if (!mounted) return;
        setInfo(ci);
        if (offering) {
          // Look for a per-cert package first, fall back to annual/monthly
          const certPkg =
            offering.availablePackages.find(p => p.identifier.includes(certKey)) ??
            offering.availablePackages.find(p => p.packageType === 'ANNUAL') ??
            offering.availablePackages[0] ?? null;
          setPkg(certPkg);
        }
      } catch {
        // No RevenueCat in dev/web — treat as free
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [certKey]);

  const handlePurchase = useCallback(async () => {
    if (!pkg) {
      Alert.alert('購入できません', 'プランが見つかりません。後でお試しください。');
      return;
    }
    try {
      setPurchasing(true);
      const ci = await purchasePackage(pkg);
      setInfo(ci);
    } catch (e: any) {
      if (!e?.userCancelled) {
        Alert.alert('購入エラー', e?.message ?? '不明なエラーが発生しました。');
      }
    } finally {
      setPurchasing(false);
    }
  }, [pkg]);

  const handleRestore = useCallback(async () => {
    try {
      setPurchasing(true);
      const ci = await restorePurchases();
      setInfo(ci);
      if (hasCertAccess(ci, certKey)) {
        Alert.alert('復元完了', 'ご購入内容が復元されました。');
      } else {
        Alert.alert('復元結果', 'このコースのご購入履歴が見つかりませんでした。');
      }
    } catch {
      Alert.alert('復元エラー', '復元に失敗しました。後でお試しください。');
    } finally {
      setPurchasing(false);
    }
  }, [certKey]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={accentColor} />
      </View>
    );
  }

  if (hasAccess) {
    return <>{children}</>;
  }

  // Free tier: show children (host component limits to freeLimit questions) + upgrade banner
  return (
    <View style={styles.wrapper}>
      {children}
      {/* Upgrade banner */}
      <View style={styles.bannerContainer}>
        <LinearGradient colors={[accentColor, accentColor + 'CC']} style={styles.banner}>
          <Text style={styles.bannerLock}>🔒</Text>
          <View style={styles.bannerBody}>
            <Text style={styles.bannerTitle}>無料体験中 — {limit}問まで</Text>
            <Text style={styles.bannerSub}>
              {certEmoji} {certName} 全{totalQuestions}問＋詳しい解説をアンロック
            </Text>
          </View>
          <TouchableOpacity
            style={styles.bannerBtn}
            onPress={handlePurchase}
            disabled={purchasing}
          >
            {purchasing
              ? <ActivityIndicator color="#FFF" size="small" />
              : <Text style={styles.bannerBtnText}>Pro</Text>
            }
          </TouchableOpacity>
        </LinearGradient>

        {/* Pricing cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.plans} contentContainerStyle={styles.plansContent}>
          <PlanCard
            title={`${certEmoji} ${certName} Pro`}
            price="¥980/月"
            yearPrice="¥7,800/年"
            features={['全問題アンロック', '詳細解説付き', '学習履歴', '聞き流しモード']}
            color={accentColor}
            onPress={handlePurchase}
            loading={purchasing}
          />
          <PlanCard
            title="すべて解放 Max"
            price="¥2,480/月"
            yearPrice="¥19,800/年"
            features={['全資格アンロック', '宅建・FP・マンション・建築設備士・電験三種・気象予報士', 'すべての機能']}
            color="#1B2A5C"
            onPress={handlePurchase}
            loading={purchasing}
          />
        </ScrollView>

        <TouchableOpacity onPress={handleRestore} style={styles.restoreBtn} disabled={purchasing}>
          <Text style={styles.restoreBtnText}>購入を復元する</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function PlanCard({ title, price, yearPrice, features, color, onPress, loading }: {
  title: string; price: string; yearPrice: string; features: string[];
  color: string; onPress: () => void; loading: boolean;
}) {
  return (
    <View style={planStyles.card}>
      <Text style={[planStyles.title, { color }]}>{title}</Text>
      <Text style={planStyles.price}>{price}</Text>
      <Text style={planStyles.yearPrice}>{yearPrice}（33%OFF）</Text>
      {features.map((f, i) => (
        <Text key={i} style={planStyles.feature}>✓ {f}</Text>
      ))}
      <TouchableOpacity style={[planStyles.btn, { backgroundColor: color }]} onPress={onPress} disabled={loading}>
        {loading
          ? <ActivityIndicator color="#FFF" size="small" />
          : <Text style={planStyles.btnText}>このプランを始める</Text>
        }
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  wrapper: { flex: 1 },
  bannerContainer: { backgroundColor: '#F5F7FA', paddingBottom: 24 },
  banner: { flexDirection: 'row', alignItems: 'center', padding: 16, gap: 12, marginHorizontal: 0 },
  bannerLock: { fontSize: 28 },
  bannerBody: { flex: 1 },
  bannerTitle: { fontSize: 14, fontWeight: '900', color: '#FFF' },
  bannerSub: { fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: '500', marginTop: 2 },
  bannerBtn: { backgroundColor: 'rgba(255,255,255,0.25)', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 8 },
  bannerBtnText: { fontSize: 14, fontWeight: '900', color: '#FFF' },
  plans: { marginTop: 12 },
  plansContent: { paddingHorizontal: 16, gap: 12 },
  restoreBtn: { alignSelf: 'center', marginTop: 12, paddingVertical: 8 },
  restoreBtnText: { fontSize: 13, color: '#999', fontWeight: '600' },
});

const planStyles = StyleSheet.create({
  card: { backgroundColor: '#FFF', borderRadius: 18, padding: 20, width: 260, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.12, shadowRadius: 12, elevation: 5 },
  title: { fontSize: 14, fontWeight: '900', marginBottom: 8 },
  price: { fontSize: 28, fontWeight: '900', color: '#1A1A2E', marginBottom: 2 },
  yearPrice: { fontSize: 13, color: '#888', fontWeight: '600', marginBottom: 12 },
  feature: { fontSize: 13, color: '#444', fontWeight: '500', marginBottom: 4 },
  btn: { borderRadius: 12, paddingVertical: 12, alignItems: 'center', marginTop: 14 },
  btnText: { fontSize: 14, fontWeight: '900', color: '#FFF' },
});
