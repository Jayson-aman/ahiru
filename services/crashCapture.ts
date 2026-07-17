import AsyncStorage from '@react-native-async-storage/async-storage';

export const LAST_FATAL_ERROR_KEY = 'qualiz_last_fatal_error';

type ErrorUtilsHandler = (error: unknown, isFatal?: boolean) => void;
type ErrorUtilsGlobal = {
  getGlobalHandler: () => ErrorUtilsHandler;
  setGlobalHandler: (handler: ErrorUtilsHandler) => void;
};

// iOS 26 + このReact Nativeバージョンの組み合わせでは、TurboModuleのvoidメソッドが
// 例外を投げた際の処理に既知の不具合があり（facebook/react-native#53960, #54859）、
// RN標準の致命的エラー報告（RCTExceptionsManager.reportFatal）自体がクラッシュし、
// 本来のJSエラー内容が失われてSIGABRTだけが残ってしまう。
// ここでは標準ハンドラーを呼ばずにエラー内容をAsyncStorageへ保存することで、
// 次回起動時に実際のエラーを確認できるようにする。
if (!__DEV__) {
  const g = globalThis as unknown as { ErrorUtils?: ErrorUtilsGlobal };
  if (g.ErrorUtils) {
    g.ErrorUtils.setGlobalHandler((error, isFatal) => {
      const err = error as { message?: string; stack?: string } | undefined;
      const payload = JSON.stringify({
        message: err?.message ?? String(error),
        stack: err?.stack ?? null,
        isFatal: !!isFatal,
        time: new Date().toISOString(),
      });
      console.error('[QualiZ] captured fatal error:', payload);
      AsyncStorage.setItem(LAST_FATAL_ERROR_KEY, payload).catch(() => {});
    });
  }
}
