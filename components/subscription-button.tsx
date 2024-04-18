'use client';

import { Zap } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({
  isPro = false,
}: SubscriptionButtonProps) => {
  const [ loading, setLoading ] = useState(false)
  const onClick = async() => {
    try {
      setLoading(true)
      const response = await fetch('/api/stripe')
      const result = await response.json()
      window.location.href = result.url
      
    } catch (error) {
      console.log('[BILLING_ERROR]', error)
      toast.error('Failed to subscribe to pro plan');
    } finally {
      setLoading(false)
    }
  }
    
  return (
    <Button 
      disabled={loading} 
      variant={isPro ? 'default' : 'premium'}
      onClick={onClick}
    >
      {isPro ? 'Manage subscription' : 'Upgrade'}
      {!isPro && <Zap className="2-4 h-4 mf-2 fill-white" />}
    </Button>
  );
};
