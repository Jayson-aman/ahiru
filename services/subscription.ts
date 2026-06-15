import { Platform } from 'react-native';

export type SubscriptionTier = 'free' | 'pro' | 'max';
export const ENTITLEMENT_PRO = 'pro';
export const ENTITLEMENT_MAX = 'max';

const isWeb = Platform.OS === 'web';

export function initRevenueCat(): void {
  if (isWeb) return;
  // Native only
  (async () => {
    try {
      const Purchases = (await import('react-native-purchases')).default;
      if (__DEV__) {
        const { LOG_LEVEL } = await import('react-native-purchases');
        Purchases.setLogLevel(LOG_LEVEL.DEBUG);
      }
      const apiKey = Platform.select({
        ios: 'appl_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        android: 'goog_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      }) ?? 'appl_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      Purchases.configure({ apiKey });
    } catch {}
  })();
}

export function tierFromCustomerInfo(_info: unknown): SubscriptionTier {
  return 'free';
}

export async function getCustomerInfo(): Promise<unknown> {
  if (isWeb) return { entitlements: { active: {} } };
  const Purchases = (await import('react-native-purchases')).default;
  return Purchases.getCustomerInfo();
}

export async function fetchCurrentOffering(): Promise<unknown> {
  return null;
}

export async function purchasePackage(_pkg: unknown): Promise<unknown> {
  return { entitlements: { active: {} } };
}

export async function restorePurchases(): Promise<unknown> {
  return { entitlements: { active: {} } };
}
