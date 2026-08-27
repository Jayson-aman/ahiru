// ネイティブ(iOS/Android)ビルドではこちらが使われる。
// Web版の実装は webBilling.web.ts にあり、Metroのプラットフォーム別ファイル解決により
// Web向けビルド時のみそちらに自動的に差し替わる。@revenuecat/purchases-js は
// ブラウザ専用のSDKなので、ネイティブのJSバンドルには一切含まれない。
import type { CustomerInfo, PurchasesOffering, PurchasesPackage } from 'react-native-purchases';

export function initWeb(): void {}

export function getCustomerInfoWeb(): Promise<CustomerInfo> {
  return Promise.reject(new Error('web-only'));
}

export function fetchCurrentOfferingWeb(): Promise<PurchasesOffering | null> {
  return Promise.resolve(null);
}

export function purchasePackageWeb(_pkg: PurchasesPackage): Promise<CustomerInfo> {
  return Promise.reject(new Error('web-only'));
}
