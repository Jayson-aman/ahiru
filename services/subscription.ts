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
export type CertKey = 'takkei' | 'fp' | 'mansion' | 'kenchiku' | 'denken3' | 'kisho' | 'juken' | 'eiken';

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
};

// Pricing constants (display only — real prices are set in RevenueCat/App Store)
// App Store Japan pricing tiers are ¥1,000 increments
export const PRICING = {
  /** Per-certification Pro plan (資格試験) */
  proMonthly: '¥2,000/月',
  proYearly:  '¥20,000/年',
  proYearlySavings: '17%OFF',
  /** All-certs Max plan */
  maxMonthly: '¥5,000/月',
  maxYearly:  '¥40,000/年',
  maxYearlySavings: '33%OFF',
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
