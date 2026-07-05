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
export type CertKey = 'takkei' | 'fp' | 'mansion' | 'kenchiku' | 'denken3' | 'kisho' | 'juken' | 'eiken' | 'sekokan';

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
};

// Pricing constants (display only — real prices are set in RevenueCat/App Store)
//
// 価格戦略：資格学校（日建学院・総合資格等）の年間費用は40〜50万円。
// アプリ型プレミアム教材として、per-cert Pro は学校の約1/8（年4.98万）、
// 全資格 Max は学校1講座の約1/5（年7.98万）に設定。
// 低価格帯アプリより明確に上位の内容（図解・導出ステップ・本試験レベル）を
// 備えつつ、学校より圧倒的に安い実利を訴求する。
// 動画講義・質問対応を追加した段階で値上げ余地を残す。
export const PRICING = {
  /** Per-certification Pro plan (資格試験) — アプリ型学習の最上位帯 */
  proMonthly: '¥4,980/月',
  proYearly:  '¥49,800/年',
  proYearlySavings: '2か月分お得',
  /** All-certs Max plan — 全資格見放題 */
  maxMonthly: '¥7,980/月',
  maxYearly:  '¥79,800/年',
  maxYearlySavings: '2か月分お得',
  /** 資格学校との比較訴求用 */
  schoolComparison: '資格学校（年40〜50万円）の約1/8',
  maxSchoolComparison: '全資格見放題で資格学校1講座の約1/5',
  /** 受験対策プラン（中学・高校受験） */
  jukenMonthly: '¥500/月',
  jukenYearly:  '¥5,000/年',
  jukenYearlySavings: '17%OFF',
  /** 英検プラン */
  eikenMonthly: '¥500/月',
  eikenYearly:  '¥5,000/年',
  eikenYearlySavings: '17%OFF',
} as const;
export const ENTITLEMENT_MAX = 'max';

// Free-tier question limit per subject
export const FREE_QUESTION_LIMIT = 10;

export function initRevenueCat(): void {
  if (Platform.OS === 'web') return;
  if (__DEV__) Purchases.setLogLevel(LOG_LEVEL.DEBUG);
  const apiKey =
    Platform.select({ ios: RC_API_KEY_IOS, android: RC_API_KEY_ANDROID }) ??
    RC_API_KEY_IOS;
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
