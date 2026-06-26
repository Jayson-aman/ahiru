import 'react-native-reanimated';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { initRevenueCat } from '../services/subscription';

export default function RootLayout() {
  useEffect(() => {
    try {
      initRevenueCat();
    } catch {
      // RevenueCat init failed — app runs in free mode
    }
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
        {/* 電気・理工系 */}
        <Stack.Screen name="denken3/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="denken3/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        {/* 気象予報士 */}
        <Stack.Screen name="kisho/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kisho/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        {/* 汎用クイズ */}
        <Stack.Screen name="quiz/[subject]" options={{ headerShown: false, presentation: 'card' }} />
      </Stack>
    </>
  );
}
