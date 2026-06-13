import { useEffect, useRef, useState } from 'react';
import Purchases, { CustomerInfo } from 'react-native-purchases';
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
      .catch(() => {
        // SDK not configured or offline — stay on free tier
      })
      .finally(() => {
        if (mounted.current) setLoading(false);
      });

    let listener: { remove(): void } | null = null;
    try {
      listener = Purchases.addCustomerInfoUpdateListener((info: CustomerInfo) => {
        if (mounted.current) setTier(tierFromCustomerInfo(info));
      });
    } catch {
      // Listener setup failed in dev/web — no-op
    }

    return () => {
      mounted.current = false;
      listener?.remove();
    };
  }, []);

  return {
    tier,
    loading,
    isPro: tier === 'pro' || tier === 'max',
    isMax: tier === 'max',
  };
}
