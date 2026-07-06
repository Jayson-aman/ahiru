import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert, ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';
import { useRouter } from 'expo-router';
import {
  CertKey,
  FREE_QUESTION_LIMIT,
  PRICING,
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
  /**
   * Either static content, or a render function receiving `hasAccess` so the
   * caller can actually slice questions to `freeLimit` when access is denied.
   * Always use the function form for quiz screens — passing static children
   * means the full question set renders regardless of subscription status.
   */
  children: React.ReactNode | ((hasAccess: boolean) => React.ReactNode);
  /** If provided, only this many questions are shown in free tier instead of the default */
  freeLimit?: number;
  /** Override Pro plan price labels */
  proMonthlyLabel?: string;
  proYearlyLabel?: string;
  proYearlySavingsLabel?: string;
  /** Override Pro plan features list */
  proFeatures?: string[];
};

/**
 * Wraps content that requires a Pro subscription for a specific certification.
 * Pass `children` as a function `(hasAccess) => ReactNode` and slice the
 * question array yourself when `hasAccess` is false — CertPaywall does not
 * slice anything on its own, it only renders the upgrade banner.
 */
export default function CertPaywall({
  certKey, certName, certEmoji, accentColor, totalQuestions, children, freeLimit,
  proMonthlyLabel, proYearlyLabel, proYearlySavingsLabel, proFeatures,
}: Props) {
  const router = useRouter();
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

  const content = typeof children === 'function' ? children(hasAccess) : children;

  if (hasAccess) {
    return <>{content}</>;
  }

  // Free tier: render the host's free-tier content (already sliced to freeLimit) + upgrade banner
  return (
    <View style={styles.wrapper}>
      {content}
      {/* Upgrade banner */}
      <View style={styles.bannerContainer}>
        <LinearGradient colors={[accentColor, accentColor + 'CC']} style={styles.banner}>
          <Text style={styles.bannerLock}>🔒</Text>
          <View style={styles.bannerBody}>
            <Text style={styles.bannerTitle}>無料体験中 — {limit}問まで無料</Text>
            <Text style={styles.bannerSub}>
              {certEmoji} {certName} 全{totalQuestions}問＋詳細解説を{PRICING.proYearly}でアンロック
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
            price={proMonthlyLabel ?? PRICING.proMonthly}
            yearPrice={proYearlyLabel ?? PRICING.proYearly}
            yearSavings={proYearlySavingsLabel ?? PRICING.proYearlySavings}
            features={proFeatures ?? ['全問題アンロック・図解入り詳細解説', 'テキスト・模擬試験・二次試験対策', '資格学校（年40〜50万円）の約1/8', 'iPhone・iPad・Webでいつでも学習']}
            color={accentColor}
            onPress={handlePurchase}
            loading={purchasing}
          />
          <PlanCard
            title="全資格 Max"
            price={PRICING.maxMonthly}
            yearPrice={PRICING.maxYearly}
            yearSavings={PRICING.maxYearlySavings}
            features={['全資格すべてアンロック', '宅建・マン管・FP・建築設備士', '施工管理4種・電験三種・気象予報士', '資格学校1講座の約1/5で全資格見放題']}
            color="#1B2A5C"
            onPress={handlePurchase}
            loading={purchasing}
          />
        </ScrollView>

        <TouchableOpacity onPress={handleRestore} style={styles.restoreBtn} disabled={purchasing}>
          <Text style={styles.restoreBtnText}>購入を復元する</Text>
        </TouchableOpacity>

        {/* サブスクリプションに関する説明（ストア審査必須項目） */}
        <Text style={styles.legalNote}>
          サブスクリプションは自動更新されます。期間終了の24時間前までに解約しない限り自動的に更新され、
          ご利用のApple ID / Googleアカウントに料金が請求されます。解約は各ストアのアカウント設定
          （サブスクリプション管理）からいつでも行えます。価格は税込表示です。
        </Text>
        <View style={styles.legalLinks}>
          <TouchableOpacity onPress={() => router.push('/legal/terms' as any)}>
            <Text style={styles.legalLinkText}>利用規約</Text>
          </TouchableOpacity>
          <Text style={styles.legalLinkSep}>｜</Text>
          <TouchableOpacity onPress={() => router.push('/legal/privacy' as any)}>
            <Text style={styles.legalLinkText}>プライバシーポリシー</Text>
          </TouchableOpacity>
          <Text style={styles.legalLinkSep}>｜</Text>
          <TouchableOpacity onPress={() => router.push('/legal/tokushoho' as any)}>
            <Text style={styles.legalLinkText}>特定商取引法に基づく表記</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function PlanCard({ title, price, yearPrice, yearSavings, features, color, onPress, loading }: {
  title: string; price: string; yearPrice: string; yearSavings: string; features: string[];
  color: string; onPress: () => void; loading: boolean;
}) {
  return (
    <View style={planStyles.card}>
      <Text style={[planStyles.title, { color }]}>{title}</Text>
      <Text style={planStyles.price}>{price}</Text>
      <Text style={planStyles.yearPrice}>{yearPrice}（{yearSavings}）</Text>
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
  legalNote: {
    fontSize: 10, color: '#999', lineHeight: 15, fontWeight: '500',
    paddingHorizontal: 20, marginTop: 4, textAlign: 'center',
  },
  legalLinks: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    flexWrap: 'wrap', marginTop: 8, paddingHorizontal: 16,
  },
  legalLinkText: { fontSize: 11, color: '#1E5FBE', fontWeight: '600', paddingVertical: 4 },
  legalLinkSep: { fontSize: 11, color: '#CCC' },
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
