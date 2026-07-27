import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert, ScrollView, Modal,
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
  isComingSoon,
} from '../services/subscription';
import type { CustomerInfo, PurchasesPackage } from 'react-native-purchases';

type BillingPeriod = 'monthly' | 'yearly';

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
  /**
   * Counter unit shown in the banner. Quiz screens count questions（既定の「問」）,
   * textbook/guide screens count sections, so they pass 「セクション」.
   */
  unitLabel?: string;
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
  certKey, certName, certEmoji, accentColor, totalQuestions, children, freeLimit, unitLabel,
  proMonthlyLabel, proYearlyLabel, proYearlySavingsLabel, proFeatures,
}: Props) {
  const unit = unitLabel ?? '問';
  const router = useRouter();
  const [info, setInfo] = useState<CustomerInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState(false);
  /** オファリング内の全パッケージ。購入時に「資格キー×期間」で選び直す */
  const [packages, setPackages] = useState<PurchasesPackage[]>([]);
  const [period, setPeriod] = useState<BillingPeriod>('yearly');
  const [showPlans, setShowPlans] = useState(false);
  const limit = freeLimit ?? FREE_QUESTION_LIMIT;
  const hasAccess = hasCertAccess(info, certKey);
  const comingSoon = isComingSoon(certKey);

  useEffect(() => {
    let mounted = true;
    (async () => {
      // 権限判定(getCustomerInfo)と商品一覧(fetchCurrentOffering)は独立して扱う。
      // Promise.allだとオフライン等でofferings取得が失敗した瞬間に全体がrejectし、
      // キャッシュから取れているはずの購入情報まで捨てて課金済みユーザーが
      // 無料枠に落ちてしまうため、allSettledで個別に反映する。
      const [ciRes, offRes] = await Promise.allSettled([getCustomerInfo(), fetchCurrentOffering()]);
      if (!mounted) return;
      if (ciRes.status === 'fulfilled') setInfo(ciRes.value);
      if (offRes.status === 'fulfilled' && offRes.value) {
        setPackages(offRes.value.availablePackages);
      }
      setLoading(false);
    })();
    return () => { mounted = false; };
  }, [certKey]);

  /**
   * 「どの資格の」「どの期間の」商品かを厳密に選ぶ。
   *
   * 以前は該当商品が無いとき offering の先頭や任意のANNUALにフォールバックしていたため、
   *  ・商品未登録の資格で購入すると【別の資格】が課金され、目的の資格は解放されない
   *  ・「全資格Max」を押しても単一資格のProが課金される
   *  ・月払い/年払いの切替が購入内容に反映されない
   * という課金事故が起き得た。フォールバックは廃止し、一致しなければ購入させない。
   *
   * 照合はパッケージ識別子と商品ID（例 qualiz_pro_takkei_yearly）の両方で行う。
   * RevenueCat既定の識別子（$rc_annual 等）でも商品ID側で確実に一致させるため。
   */
  const findPackage = useCallback((key: string, want: BillingPeriod): PurchasesPackage | null => {
    const belongs = (p: PurchasesPackage) => {
      const id = `${p.identifier} ${p.product?.identifier ?? ''}`.toLowerCase();
      const k = key.toLowerCase();
      // maxは他の資格キーを含む商品を拾わないよう、単語として判定する
      return key === 'max' ? /(^|[^a-z])max([^a-z]|$)/.test(id) : id.includes(k);
    };
    const pool = packages.filter(belongs);
    if (pool.length === 0) return null;
    const wantType = want === 'yearly' ? 'ANNUAL' : 'MONTHLY';
    return (
      pool.find(p => p.packageType === wantType) ??
      pool.find(p => (p.product?.identifier ?? '').toLowerCase().includes(want === 'yearly' ? 'year' : 'month')) ??
      null
    );
  }, [packages]);

  const certPkg = findPackage(certKey, period);
  const maxPkg = findPackage('max', period);

  const runPurchase = useCallback(async (target: PurchasesPackage | null, planName: string) => {
    if (!target) {
      Alert.alert(
        'ただいま購入できません',
        `${planName}のプランを取得できませんでした。時間をおいて再度お試しください。`
      );
      return;
    }
    try {
      setPurchasing(true);
      const ci = await purchasePackage(target);
      setInfo(ci);
    } catch (e: any) {
      if (!e?.userCancelled) {
        Alert.alert('購入エラー', e?.message ?? '不明なエラーが発生しました。');
      }
    } finally {
      setPurchasing(false);
    }
  }, []);

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

  // Free tier: quiz fills the screen; a slim banner sits at the bottom and
  // opens the full pricing details in a modal so the questions stay readable.
  return (
    <View style={styles.wrapper}>
      <View style={styles.contentArea}>{content}</View>

      {/* Slim upgrade banner (does not cover the quiz) */}
      <TouchableOpacity activeOpacity={0.9} onPress={() => setShowPlans(true)}>
        <LinearGradient colors={[accentColor, accentColor + 'CC']} style={styles.banner}>
          <Text style={styles.bannerLock}>🔒</Text>
          <View style={styles.bannerBody}>
            <Text style={styles.bannerTitle}>無料体験中 — {limit}{unit}まで無料</Text>
            <Text style={styles.bannerSub}>
              {comingSoon
                ? `${certEmoji} ${certName} は準備中です（全${totalQuestions}問を順次公開）`
                : `${certEmoji} ${certName} 全${totalQuestions}${unit}＋詳細解説を${proYearlyLabel ?? PRICING.proYearly}でアンロック`}
            </Text>
          </View>
          <View style={styles.bannerBtn}>
            <Text style={styles.bannerBtnText}>{Platform.OS === 'web' ? '詳細' : 'Proを見る'}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {/* Full pricing details (modal) */}
      <Modal
        visible={showPlans}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowPlans(false)}
      >
        <View style={styles.modalRoot}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>プランを選ぶ</Text>
            <TouchableOpacity onPress={() => setShowPlans(false)} style={styles.modalClose}>
              <Text style={styles.modalCloseText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.modalScroll} showsVerticalScrollIndicator={false}>
            {Platform.OS === 'web' && (
              // Web版では購入導線を出さない（二重払い防止・誤課金防止）。
              // 購入はiOSアプリ内課金に一本化し、Webは案内のみ。
              <View style={styles.webNotice}>
                <Text style={styles.webNoticeTitle}>🍎 ご購入はiOSアプリから</Text>
                <Text style={styles.webNoticeText}>
                  プランのご購入は、iPhone/iPadの「QualiZ」アプリ内で行えます。
                  すでにアプリでご購入済みの方は、同じ端末のアプリでそのままご利用いただけます。
                  二重のお支払いを防ぐため、Web上でのご購入は現在ご用意していません。
                </Text>
              </View>
            )}
            {comingSoon && (
              // 課金商品が未登録の資格。買えないボタンを見せないよう購入UIごと隠す。
              <View style={styles.webNotice}>
                <Text style={styles.webNoticeTitle}>🚧 この資格は準備中です</Text>
                <Text style={styles.webNoticeText}>
                  {certName}の学習コンテンツは収録済みで、いまは無料で{limit}問までお試しいただけます。
                  有料プランは準備が整いしだい公開します。公開までしばらくお待ちください。
                </Text>
              </View>
            )}
            {/* Web版は購入UI（切替・プランカード・復元）を出さない — 課金はiOSアプリに一本化 */}
            {Platform.OS !== 'web' && !comingSoon && (
            <>
            {/* 月払い／年払い切り替え */}
            <View style={styles.periodToggle}>
              <TouchableOpacity
                style={[styles.periodBtn, period === 'monthly' && styles.periodBtnActive]}
                onPress={() => setPeriod('monthly')}
              >
                <Text style={[styles.periodBtnText, period === 'monthly' && styles.periodBtnTextActive]}>月払い</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.periodBtn, period === 'yearly' && styles.periodBtnActive]}
                onPress={() => setPeriod('yearly')}
              >
                <Text style={[styles.periodBtnText, period === 'yearly' && styles.periodBtnTextActive]}>年払い（お得）</Text>
              </TouchableOpacity>
            </View>

            {/* Pricing cards（縦積み） */}
            <View style={styles.plansStack}>
              <PlanCard
                title={`${certEmoji} ${certName} Pro`}
                price={proMonthlyLabel ?? PRICING.proMonthly}
                yearPrice={proYearlyLabel ?? PRICING.proYearly}
                yearSavings={proYearlySavingsLabel ?? PRICING.proYearlySavings}
                features={proFeatures ?? ['全問題アンロック・図解入り詳細解説', 'テキスト・模擬試験・二次試験対策', '動く図解＋音声解説で初心者もわかりやすい', 'iPhone・iPad・Webでいつでも学習']}
                color={accentColor}
                onPress={() => runPurchase(certPkg, `${certName} Pro`)}
                loading={purchasing}
                period={period}
                unavailable={!certPkg}
              />
              <PlanCard
                title="全資格 Max"
                price={PRICING.maxMonthly}
                yearPrice={PRICING.maxYearly}
                yearSavings={PRICING.maxYearlySavings}
                features={['全資格すべてアンロック', '宅建・マン管・FP・建築設備士', '施工管理4種・電験三種・気象予報士', '1つの登録で全資格を追加料金なしで学習']}
                color="#1B2A5C"
                onPress={() => runPurchase(maxPkg, '全資格 Max')}
                loading={purchasing}
                period={period}
                unavailable={!maxPkg}
              />
            </View>

            <TouchableOpacity onPress={handleRestore} style={styles.restoreBtn} disabled={purchasing}>
              <Text style={styles.restoreBtnText}>購入を復元する</Text>
            </TouchableOpacity>
            </>
            )}

            {/* サブスクリプションに関する説明（ストア審査必須項目） */}
            <Text style={styles.legalNote}>
              サブスクリプションは自動更新されます。期間終了の24時間前までに解約しない限り自動的に更新され、
              ご利用のApple ID / Googleアカウントに料金が請求されます。解約は各ストアのアカウント設定
              （サブスクリプション管理）からいつでも行えます。価格は税込表示です。
            </Text>
            <View style={styles.legalLinks}>
              <TouchableOpacity onPress={() => { setShowPlans(false); router.push('/legal/terms' as any); }}>
                <Text style={styles.legalLinkText}>利用規約</Text>
              </TouchableOpacity>
              <Text style={styles.legalLinkSep}>｜</Text>
              <TouchableOpacity onPress={() => { setShowPlans(false); router.push('/legal/privacy' as any); }}>
                <Text style={styles.legalLinkText}>プライバシーポリシー</Text>
              </TouchableOpacity>
              <Text style={styles.legalLinkSep}>｜</Text>
              <TouchableOpacity onPress={() => { setShowPlans(false); router.push('/legal/tokushoho' as any); }}>
                <Text style={styles.legalLinkText}>特定商取引法に基づく表記</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

/** Parses a "¥50,000/年" style label and returns a "¥4,167/月相当" style label */
function monthlyEquivalentLabel(yearPriceLabel: string): string {
  const num = parseInt(yearPriceLabel.replace(/[^\d]/g, ''), 10);
  if (!num) return '';
  const perMonth = Math.round(num / 12);
  return `¥${perMonth.toLocaleString('ja-JP')}/月相当`;
}

function PlanCard({ title, price, yearPrice, yearSavings, features, color, onPress, loading, period, unavailable }: {
  title: string; price: string; yearPrice: string; yearSavings: string; features: string[];
  color: string; onPress: () => void; loading: boolean; period: BillingPeriod;
  /** 対応する商品が取得できていない場合はボタンを無効化する（誤課金の防止） */
  unavailable?: boolean;
}) {
  const isYearly = period === 'yearly';
  return (
    <View style={planStyles.card}>
      {isYearly && (
        <View style={[planStyles.badge, { backgroundColor: color }]}>
          <Text style={planStyles.badgeText}>{yearSavings}</Text>
        </View>
      )}
      <Text style={[planStyles.title, { color }]}>{title}</Text>
      {isYearly ? (
        <>
          <Text style={planStyles.price}>{yearPrice}</Text>
          <Text style={planStyles.yearPrice}>{monthlyEquivalentLabel(yearPrice)}（{price}で月払いも選択可）</Text>
        </>
      ) : (
        <>
          <Text style={planStyles.price}>{price}</Text>
          <Text style={planStyles.yearPrice}>年払いなら {yearPrice}（{yearSavings}）</Text>
        </>
      )}
      {features.map((f, i) => (
        <Text key={i} style={planStyles.feature}>✓ {f}</Text>
      ))}
      <TouchableOpacity
        style={[planStyles.btn, { backgroundColor: unavailable ? '#B0BEC5' : color }]}
        onPress={onPress}
        disabled={loading || unavailable}
      >
        {loading
          ? <ActivityIndicator color="#FFF" size="small" />
          : <Text style={planStyles.btnText}>{unavailable ? 'ただいま購入できません' : 'このプランを始める'}</Text>
        }
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  wrapper: { flex: 1 },
  contentArea: { flex: 1 },
  banner: { flexDirection: 'row', alignItems: 'center', padding: 14, gap: 12 },
  bannerLock: { fontSize: 26 },
  modalRoot: { flex: 1, backgroundColor: '#F5F7FA' },
  modalHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    paddingVertical: 16, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#E6EAF0',
    backgroundColor: '#FFFFFF',
  },
  modalTitle: { fontSize: 17, fontWeight: '900', color: '#1A1A2E' },
  modalClose: { position: 'absolute', right: 16, top: 12, padding: 6 },
  modalCloseText: { fontSize: 20, fontWeight: '700', color: '#888' },
  modalScroll: { paddingTop: 20, paddingBottom: 40 },
  plansStack: { paddingHorizontal: 20, gap: 16, marginTop: 16 },
  webNotice: {
    marginHorizontal: 20, marginBottom: 8, backgroundColor: '#FFFFFF',
    borderRadius: 14, padding: 16, borderWidth: 1, borderColor: '#E0E8F0',
  },
  webNoticeTitle: { fontSize: 15, fontWeight: '900', color: '#1A1A2E', marginBottom: 6 },
  webNoticeText: { fontSize: 13, color: '#555', lineHeight: 21, fontWeight: '500' },
  bannerBody: { flex: 1 },
  periodToggle: {
    flexDirection: 'row', alignSelf: 'center', backgroundColor: '#E8EAF0',
    borderRadius: 14, padding: 4, marginTop: 16, gap: 4,
  },
  periodBtn: { paddingVertical: 8, paddingHorizontal: 18, borderRadius: 11 },
  periodBtnActive: { backgroundColor: '#FFFFFF', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 },
  periodBtnText: { fontSize: 13, fontWeight: '700', color: '#888' },
  periodBtnTextActive: { color: '#1A1A2E' },
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
  card: { backgroundColor: '#FFF', borderRadius: 18, padding: 20, alignSelf: 'stretch', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.12, shadowRadius: 12, elevation: 5 },
  badge: { alignSelf: 'flex-start', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3, marginBottom: 8 },
  badgeText: { fontSize: 11, fontWeight: '800', color: '#FFF' },
  title: { fontSize: 14, fontWeight: '900', marginBottom: 8 },
  price: { fontSize: 28, fontWeight: '900', color: '#1A1A2E', marginBottom: 2 },
  yearPrice: { fontSize: 13, color: '#888', fontWeight: '600', marginBottom: 12 },
  feature: { fontSize: 13, color: '#444', fontWeight: '500', marginBottom: 4 },
  btn: { borderRadius: 12, paddingVertical: 12, alignItems: 'center', marginTop: 14 },
  btnText: { fontSize: 14, fontWeight: '900', color: '#FFF' },
});
