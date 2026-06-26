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
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="juken/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="kouko/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="takkei/index" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen name="takkei/[subject]" options={{ headerShown: false, presentation: 'card' }} />
        <Stack.Screen
          name="quiz/[subject]"
          options={{
            headerShown: false,
            presentation: 'card',
          }}
        />
      </Stack>
    </>
  );
}
