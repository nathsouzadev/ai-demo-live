'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Zap } from 'lucide-react';
import { useProModal } from '@/hooks/use-pro-model';

export const Contact = () => {
  const proModal = useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <Button 
            className='w-full' 
            variant='premium'
            onClick={proModal.onOpen}
          >
            Contact us
            <Zap className='2-4 h-4 ml-2 fill-white'/>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
