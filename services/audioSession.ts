import { setAudioModeAsync } from 'expo-audio';

/**
 * アプリ起動時に一度だけ呼ぶ。
 * iOS のオーディオセッションを「再生（playback）」カテゴリにし、
 * 本体側面のサイレント（マナー）スイッチがオンでも音声が鳴るようにする。
 *
 * これを設定しないと、expo-speech（英検リスニングの読み上げ等）は
 * デフォルトでサイレントスイッチに従い、マナーモード時に無音になる。
 * 語学の聞き取り練習は消音中でも鳴ってほしいので playsInSilentMode: true にする。
 */
export async function configureAudioSession(): Promise<void> {
  try {
    await setAudioModeAsync({
      playsInSilentMode: true,
      // 他アプリの音楽再生を止めない／中断されたら自動で譲る
      interruptionMode: 'mixWithOthers',
      shouldPlayInBackground: false,
    });
  } catch {
    // 設定に失敗しても致命的ではない（マナーモード以外では鳴る）ため握りつぶす
  }
}
