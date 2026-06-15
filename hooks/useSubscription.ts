import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import {
  getCustomerInfo,
  tierFromCustomerInfo,
  SubscriptionTier,
} from '../services/subscription';

export interface SubscriptionState {
  tier: SubscriptionTier;
  loading: boolean;
  isPro: boolean;
  isMax: boolean;
}

export function useSubscription(): SubscriptionState {
  const [tier, setTier] = useState<SubscriptionTier>('free');
  const [loading, setLoading] = useState(true);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    getCustomerInfo()
      .then((info) => {
        if (mounted.current) setTier(tierFromCustomerInfo(info));
      })
      .catch(() => {})
      .finally(() => {
        if (mounted.current) setLoading(false);
      });

    let cleanup: (() => void) | null = null;
    if (Platform.OS !== 'web') {
      (async () => {
        try {
          const Purchases = (await import('react-native-purchases')).default;
          const listener = Purchases.addCustomerInfoUpdateListener((info: any) => {
            if (mounted.current) setTier(tierFromCustomerInfo(info));
          });
          cleanup = () => listener?.remove();
        } catch {}
      })();
    }

    return () => {
      mounted.current = false;
      cleanup?.();
    };
  }, []);

  return {
    tier,
    loading,
    isPro: tier === 'pro' || tier === 'max',
    isMax: tier === 'max',
  };
}
