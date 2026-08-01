import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initRevenueCat } from '../services/subscription';
import { LAST_FATAL_ERROR_KEY } from '../services/crashCapture';
import { configureAudioSession } from '../services/audioSession';

export default function RootLayout() {
  useEffect(() => {
    try {
      initRevenueCat();
    } catch {
      // RevenueCat init failed — app runs in free mode
    }
    // マナーモードでも英検リスニング等の読み上げが鳴るようにする
    configureAudioSession();
  }, []);

  useEffect(() => {
    AsyncStorage.getItem(LAST_FATAL_ERROR_KEY)
      .then((raw) => {
        if (!raw) return;
        AsyncStorage.removeItem(LAST_FATAL_ERROR_KEY).catch(() => {});
        Alert.alert('前回のエラー内容', raw);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="juken/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kouko/index" options={{ headerShown: false, presentation: 'card' }} />
        {/* 不動産・法律系 */}
        <Stack.Screen name="takkei/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="takkei/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="mansion/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="mansion/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        {/* 金融・税務系 */}
        <Stack.Screen name="fp/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="fp/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        {/* 建築・設備系 */}
        <Stack.Screen name="kenchiku/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kenchiku/quiz/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kenchiku/text/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        {/* 積算・コスト管理系 */}
        <Stack.Screen name="cost/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="cost/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="cost/mogi" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="cost/ronbun" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="cost/text/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="cost/text/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        {/* 給水装置 */}
        <Stack.Screen name="kyusui/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kyusui/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kyusui/mogi" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kyusui/text/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kyusui/text/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        {/* 消防設備士 */}
        <Stack.Screen name="shobo/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="shobo/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="shobo/mogi" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="shobo/text/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="shobo/text/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        {/* 危険物・保安系 */}
        <Stack.Screen name="kikenbutsu/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kikenbutsu/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kikenbutsu/mogi" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kikenbutsu/text/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kikenbutsu/text/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        {/* 電気・理工系 */}
        <Stack.Screen name="denken3/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="denken3/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        {/* 気象予報士 */}
        <Stack.Screen name="kisho/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kisho/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kisho/text/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kisho/text/[subject]" options={{ headerShown: false, presentation: 'card' }} />
      </Stack>
    </>
  );
}
