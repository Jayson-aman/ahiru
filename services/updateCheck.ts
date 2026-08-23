import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

/**
 * App Storeに新しいバージョンが公開されているかを確認する。
 * iTunes Lookup APIでbundleIdから最新の公開バージョンを取得し、
 * 端末にインストールされているバージョン（app.jsonのversion）と比較する。
 */

const BUNDLE_ID = 'com.jaysonaman.qualiz';
const CHECK_INTERVAL_MS = 6 * 60 * 60 * 1000; // 同じ端末で6時間に1回だけApp Storeへ問い合わせる
const DISMISS_COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000; // 「あとで」を押したら同じバージョンは3日間出さない

const LAST_CHECK_KEY = 'update_check_last_at';
const CACHED_VERSION_KEY = 'update_check_cached_version';
const CACHED_URL_KEY = 'update_check_cached_url';
const DISMISSED_VERSION_KEY = 'update_check_dismissed_version';
const DISMISSED_AT_KEY = 'update_check_dismissed_at';

export type UpdateInfo = {
  currentVersion: string;
  latestVersion: string;
  storeUrl: string;
};

/** "1.10.2" のようなバージョン文字列を比較する（aがbより新しければ true） */
function isNewerVersion(a: string, b: string): boolean {
  const pa = a.split('.').map((n) => parseInt(n, 10) || 0);
  const pb = b.split('.').map((n) => parseInt(n, 10) || 0);
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const va = pa[i] ?? 0;
    const vb = pb[i] ?? 0;
    if (va !== vb) return va > vb;
  }
  return false;
}

/**
 * App Store側のバージョンを確認する。更新があれば情報を返し、なければ null。
 * ネットワークエラー時やAndroid等でも例外を投げず null を返す（アプリの動作に影響しない）。
 */
export async function checkForAppUpdate(): Promise<UpdateInfo | null> {
  if (Platform.OS !== 'ios') return null;

  try {
    const now = Date.now();
    const lastAtRaw = await AsyncStorage.getItem(LAST_CHECK_KEY);
    const lastAt = lastAtRaw ? Number(lastAtRaw) : 0;

    let latestVersion: string | null = null;
    let storeUrl: string | null = null;

    if (now - lastAt > CHECK_INTERVAL_MS) {
      const res = await fetch(
        `https://itunes.apple.com/lookup?bundleId=${BUNDLE_ID}&country=jp&_=${now}`
      );
      const json = await res.json();
      const entry = json?.results?.[0];
      if (entry?.version && entry?.trackViewUrl) {
        latestVersion = String(entry.version);
        storeUrl = String(entry.trackViewUrl);
        await AsyncStorage.multiSet([
          [LAST_CHECK_KEY, String(now)],
          [CACHED_VERSION_KEY, latestVersion],
          [CACHED_URL_KEY, storeUrl],
        ]);
      }
    } else {
      latestVersion = await AsyncStorage.getItem(CACHED_VERSION_KEY);
      storeUrl = await AsyncStorage.getItem(CACHED_URL_KEY);
    }

    if (!latestVersion || !storeUrl) return null;

    const currentVersion = Constants.expoConfig?.version ?? '0.0.0';
    if (!isNewerVersion(latestVersion, currentVersion)) return null;

    const dismissedVersion = await AsyncStorage.getItem(DISMISSED_VERSION_KEY);
    const dismissedAtRaw = await AsyncStorage.getItem(DISMISSED_AT_KEY);
    if (dismissedVersion === latestVersion && dismissedAtRaw) {
      if (now - Number(dismissedAtRaw) < DISMISS_COOLDOWN_MS) return null;
    }

    return { currentVersion, latestVersion, storeUrl };
  } catch {
    return null;
  }
}

/** 「あとで」を選んだとき、同じバージョンをしばらく表示しないようにする */
export async function dismissAppUpdate(version: string): Promise<void> {
  try {
    await AsyncStorage.multiSet([
      [DISMISSED_VERSION_KEY, version],
      [DISMISSED_AT_KEY, String(Date.now())],
    ]);
  } catch {
    // 保存に失敗しても致命的ではない（次回また表示されるだけ）
  }
}
