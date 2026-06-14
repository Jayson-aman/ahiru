import Purchases, {
  CustomerInfo,
  LOG_LEVEL,
  PurchasesOffering,
  PurchasesPackage,
} from 'react-native-purchases';
import { Platform } from 'react-native';

// Keys from .env (EXPO_PUBLIC_*) — see .env.example
const RC_API_KEY_IOS =
  process.env.EXPO_PUBLIC_RC_API_KEY_IOS ?? 'appl_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const RC_API_KEY_ANDROID =
  process.env.EXPO_PUBLIC_RC_API_KEY_ANDROID ?? 'goog_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

export type SubscriptionTier = 'free' | 'pro' | 'max';

// Must match entitlement identifiers set in the RevenueCat dashboard
export const ENTITLEMENT_PRO = 'pro';
export const ENTITLEMENT_MAX = 'max';

export function initRevenueCat(): void {
  if (__DEV__) Purchases.setLogLevel(LOG_LEVEL.DEBUG);
  const apiKey =
    Platform.select({ ios: RC_API_KEY_IOS, android: RC_API_KEY_ANDROID }) ??
    RC_API_KEY_IOS;
  Purchases.configure({ apiKey });
}

export function tierFromCustomerInfo(info: CustomerInfo): SubscriptionTier {
  const active = info.entitlements.active;
  if (ENTITLEMENT_MAX in active) return 'max';
  if (ENTITLEMENT_PRO in active) return 'pro';
  return 'free';
}

export function getCustomerInfo(): Promise<CustomerInfo> {
  return Purchases.getCustomerInfo();
}

export async function fetchCurrentOffering(): Promise<PurchasesOffering | null> {
  const offerings = await Purchases.getOfferings();
  return offerings.current;
}

export async function purchasePackage(pkg: PurchasesPackage): Promise<CustomerInfo> {
  const { customerInfo } = await Purchases.purchasePackage(pkg);
  return customerInfo;
}

export function restorePurchases(): Promise<CustomerInfo> {
  return Purchases.restorePurchases();
}
