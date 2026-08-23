import React, { useEffect, useRef, useState } from 'react';
import { Animated, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { checkForAppUpdate, dismissAppUpdate, UpdateInfo } from '../services/updateCheck';

/** アプリ起動時にApp Storeの新バージョンを確認し、あれば画面上部に案内バナーを出す */
export default function UpdateBanner() {
  const insets = useSafeAreaInsets();
  const [info, setInfo] = useState<UpdateInfo | null>(null);
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-16)).current;

  useEffect(() => {
    let active = true;
    checkForAppUpdate().then((result) => {
      if (active && result) setInfo(result);
    });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!info) return;
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 320, useNativeDriver: true }),
      Animated.timing(translateY, { toValue: 0, duration: 320, useNativeDriver: true }),
    ]).start();
  }, [info]);

  if (!info) return null;

  const handleUpdate = () => {
    Linking.openURL(info.storeUrl).catch(() => {});
  };

  const handleDismiss = () => {
    dismissAppUpdate(info.latestVersion);
    setInfo(null);
  };

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        s.wrap,
        { paddingTop: insets.top + 8, opacity, transform: [{ translateY }] },
      ]}
    >
      <View style={s.card}>
        <View style={s.textBox}>
          <Text style={s.title}>新しいバージョンがあります</Text>
          <Text style={s.subtitle}>v{info.latestVersion} が公開されています</Text>
        </View>
        <TouchableOpacity style={s.updateBtn} onPress={handleUpdate} activeOpacity={0.85}>
          <Text style={s.updateBtnText}>更新する</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.dismissBtn} onPress={handleDismiss} activeOpacity={0.7} hitSlop={8}>
          <Text style={s.dismissBtnText}>×</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const s = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    paddingHorizontal: 12,
    zIndex: 1000,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#101A38',
    borderRadius: 14,
    paddingVertical: 10,
    paddingLeft: 14,
    paddingRight: 10,
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  textBox: { flex: 1 },
  title: { color: '#FFFFFF', fontSize: 13, fontWeight: '800' },
  subtitle: { color: '#B8C4E0', fontSize: 11.5, marginTop: 2 },
  updateBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  updateBtnText: { color: '#101A38', fontSize: 12.5, fontWeight: '800' },
  dismissBtn: { padding: 4 },
  dismissBtnText: { color: '#B8C4E0', fontSize: 16, fontWeight: '600', lineHeight: 18 },
});
