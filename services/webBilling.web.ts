// Web版のみで使われる、RevenueCat Web Billing (@revenuecat/purchases-js) 経由の課金実装。
// このファイルは Metro のプラットフォーム別ファイル解決により Web向けビルド時のみ選ばれる
// (webBilling.ts が iOS/Android 向けのフォールバック)。
import { ErrorCode, Purchases } from '@revenuecat/purchases-js';
import type { CustomerInfo, PurchasesOffering, PurchasesPackage } from 'react-native-purchases';

const RC_API_KEY_WEB =
  process.env.EXPO_PUBLIC_RC_API_KEY_WEB ?? 'rcb_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

// 匿名ユーザーIDをブラウザに保存し、再訪問時も同じ購入者として扱われるようにする
const USER_ID_STORAGE_KEY = 'qualiz_rc_web_app_user_id';

let configurePromise: Promise<void> | null = null;

function configure(): Promise<void> {
  if (!configurePromise) {
    configurePromise = (async () => {
      if (RC_API_KEY_WEB.includes('XXXXXXXX')) {
        throw new Error('RevenueCat Web APIキーが未設定です');
      }
      if (Purchases.isConfigured()) return;
      let userId = localStorage.getItem(USER_ID_STORAGE_KEY);
      if (!userId) {
        userId = Purchases.generateRevenueCatAnonymousAppUserId();
        localStorage.setItem(USER_ID_STORAGE_KEY, userId);
      }
      Purchases.configure({ apiKey: RC_API_KEY_WEB, appUserId: userId });
    })();
  }
  return configurePromise;
}

/**
 * purchases-jsのPackageを、react-native-purchasesのPurchasesPackageと
 * 互換の形（identifier / product.identifier / packageType）にラップする。
 * CertPaywallの資格×期間の照合ロジックをプラットフォーム間で共通化するため。
 * 実際の購入時に使う元のPackageは _webPackage に保持しておく。
 */
function wrapPackage(pkg: any): PurchasesPackage {
  return {
    identifier: pkg.identifier,
    packageType: pkg.packageType,
    product: { identifier: pkg.webBillingProduct?.identifier ?? '' },
    _webPackage: pkg,
  } as unknown as PurchasesPackage;
}

export function initWeb(): void {
  configure().catch(() => {
    // Web課金キーが未設定の環境では無料モードのまま動作させる
  });
}

export async function getCustomerInfoWeb(): Promise<CustomerInfo> {
  await configure();
  const info = await Purchases.getSharedInstance().getCustomerInfo();
  return info as unknown as CustomerInfo;
}

export async function fetchCurrentOfferingWeb(): Promise<PurchasesOffering | null> {
  await configure();
  const offerings = await Purchases.getSharedInstance().getOfferings();
  const current = offerings.current;
  if (!current) return null;
  return {
    ...current,
    availablePackages: current.availablePackages.map(wrapPackage),
  } as unknown as PurchasesOffering;
}

export async function purchasePackageWeb(pkg: PurchasesPackage): Promise<CustomerInfo> {
  await configure();
  const webPkg = (pkg as any)._webPackage;
  if (!webPkg) return Promise.reject(new Error('この商品はWebで購入できません'));
  try {
    const result = await Purchases.getSharedInstance().purchase({ rcPackage: webPkg });
    return result.customerInfo as unknown as CustomerInfo;
  } catch (e: any) {
    if (e?.errorCode === ErrorCode.UserCancelledError) {
      const cancelled: any = new Error('cancelled');
      cancelled.userCancelled = true;
      throw cancelled;
    }
    throw e;
  }
}
