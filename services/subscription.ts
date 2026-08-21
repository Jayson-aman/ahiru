import Purchases, {
  CustomerInfo,
  LOG_LEVEL,
  PurchasesOffering,
  PurchasesPackage,
} from 'react-native-purchases';
import { Platform } from 'react-native';

const RC_API_KEY_IOS =
  process.env.EXPO_PUBLIC_RC_API_KEY_IOS ?? 'appl_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const RC_API_KEY_ANDROID =
  process.env.EXPO_PUBLIC_RC_API_KEY_ANDROID ?? 'goog_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

// SubscriptionTier: free shows 10 questions/subject; per-cert Pro unlocks full cert; max unlocks all
export type SubscriptionTier = 'free' | 'pro' | 'max';

// Certification keys — used as entitlement IDs in RevenueCat dashboard
export type CertKey = 'takkei' | 'fp' | 'mansion' | 'kenchiku' | 'denken3' | 'kisho' | 'juken' | 'eiken' | 'sekokan' | 'kankoji' | 'denkisekou' | 'kikaisekou' | 'dobokusekou' | 'cost' | 'kyusui' | 'shobo' | 'kikenbutsu' | 'concrete' | 'tsushin' | 'nikkyu' | 'denki2' | 'lpgas' | 'koatsu';

// RevenueCat entitlement identifiers (must match dashboard exactly)
export const ENTITLEMENTS: Record<CertKey, string> = {
  takkei:   'pro_takkei',
  fp:       'pro_fp',
  mansion:  'pro_mansion',
  kenchiku: 'pro_kenchiku',
  denken3:  'pro_denken3',
  kisho:    'pro_kisho',
  juken:    'pro_juken',
  eiken:    'pro_eiken',
  sekokan:  'pro_sekokan',
  kankoji:  'pro_kankoji',
  denkisekou: 'pro_denkisekou',
  kikaisekou: 'pro_kikaisekou',
  dobokusekou: 'pro_dobokusekou',
  cost:     'pro_cost',
  kyusui:   'pro_kyusui',
  shobo:    'pro_shobo',
  kikenbutsu: 'pro_kikenbutsu',
  concrete: 'pro_concrete',
  tsushin:  'pro_tsushin',
  nikkyu:   'pro_nikkyu',
  denki2:   'pro_denki2',
  lpgas:    'pro_lpgas',
  koatsu:   'pro_koatsu',
};

// Pricing constants (display only — real prices are set in RevenueCat/App Store)
//
// 訴求方針：App Store審査（ガイドライン2.3.1）に配慮し、根拠を示せない
// 他社比較（「資格学校の◯分の1」等）は表示しない。訴求は自アプリの
// 機能・提供内容（図解・音声解説・本試験レベル問題・全資格見放題）の
// 事実のみに限定する。
export const PRICING = {
  /** Per-certification Pro plan (資格試験) — アプリ型学習の最上位帯 */
  proMonthly: '¥1,800/月',
  proYearly:  '¥18,000/年',
  proYearlySavings: '2か月分お得',
  /** All-certs Max plan — 全資格見放題 */
  maxMonthly: '¥2,800/月',
  maxYearly:  '¥28,000/年',
  maxYearlySavings: '2か月分お得',
  /** 受験対策プラン（中学・高校受験） */
  jukenMonthly: '¥500/月',
  jukenYearly:  '¥5,000/年',
  jukenYearlySavings: '17%OFF',
  /** 英検プラン */
  eikenMonthly: '¥800/月',
  eikenYearly:  '¥8,000/年',
  eikenYearlySavings: '17%OFF',
  /** 気象予報士プラン（他の専門国家資格と同格の価格に統一） */
  kishoMonthly: '¥1,800/月',
  kishoYearly:  '¥18,000/年',
  kishoYearlySavings: '2か月分お得',
} as const;
export const ENTITLEMENT_MAX = 'max';

/**
 * まだ App Store Connect / RevenueCat に課金商品を登録していない資格。
 * 学習コンテンツは収録済みなので無料枠（10問）では利用できる。
 * ここに入れておくと購入UIごと隠れるので、審査担当者が買えないボタンを
 * 押して「In-App Purchaseが機能しない」と判断されるのを防げる。
 *
 * ★商品を登録して Offering に入れたら、必ずこの配列から外すこと。
 *   外し忘れると、商品があるのに永久に「準備中」のまま売れなくなる。
 */
export const CERTS_COMING_SOON: CertKey[] = [];
// ★ 2026-08-21: 液化石油ガス設備士・高圧ガス製造保安責任者の商品登録（ASC・RevenueCat）が
//   完了したため空にした。v1.3.2 でアプリ本体と同時に審査へ提出する。
//   商品未登録の資格を追加するときは、必ずここへ入れてから提出すること。

export function isComingSoon(cert: CertKey): boolean {
  return CERTS_COMING_SOON.includes(cert);
}

// Free-tier question limit per subject
export const FREE_QUESTION_LIMIT = 10;

// Free-tier section limit for textbook / bonus guide screens (per subject or per screen)
export const FREE_TEXT_LIMIT = 2;

export function initRevenueCat(): void {
  if (Platform.OS === 'web') return;
  const apiKey =
    Platform.select({ ios: RC_API_KEY_IOS, android: RC_API_KEY_ANDROID }) ??
    RC_API_KEY_IOS;
  // プレースホルダーのキーのままだとネイティブSDKの初期化でクラッシュするため、
  // 実際のキーが設定されるまでは初期化自体をスキップし、無料モードで動作させる。
  if (apiKey.includes('XXXXXXXX')) return;
  if (__DEV__) Purchases.setLogLevel(LOG_LEVEL.DEBUG);
  Purchases.configure({ apiKey });
}

export function tierFromCustomerInfo(info: CustomerInfo): SubscriptionTier {
  const active = info.entitlements.active;
  if (ENTITLEMENT_MAX in active) return 'max';
  // If any per-cert entitlement is active, the user is at least 'pro'
  for (const id of Object.values(ENTITLEMENTS)) {
    if (id in active) return 'pro';
  }
  return 'free';
}

/** Returns true if the user has full access to the given certification */
export function hasCertAccess(info: CustomerInfo | null, cert: CertKey): boolean {
  if (!info) return false;
  const active = info.entitlements.active;
  return ENTITLEMENT_MAX in active || ENTITLEMENTS[cert] in active;
}

export function getCustomerInfo(): Promise<CustomerInfo> {
  if (Platform.OS === 'web') return Promise.reject(new Error('web'));
  return Purchases.getCustomerInfo();
}

export async function fetchCurrentOffering(): Promise<PurchasesOffering | null> {
  if (Platform.OS === 'web') return null;
  const offerings = await Purchases.getOfferings();
  return offerings.current;
}

export async function purchasePackage(pkg: PurchasesPackage): Promise<CustomerInfo> {
  if (Platform.OS === 'web') return Promise.reject(new Error('web'));
  const { customerInfo } = await Purchases.purchasePackage(pkg);
  return customerInfo;
}

export function restorePurchases(): Promise<CustomerInfo> {
  if (Platform.OS === 'web') return Promise.reject(new Error('web'));
  return Purchases.restorePurchases();
}
