'use client';

import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useProModal } from '@/hooks/use-pro-model';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavBar = () => {
  const proModal = useProModal();
  
  return (
    <div className="p-4 bg-transparent flex items-center justify-between">
      <Link href='/' className='flex items-center'>
        <div className='relative h-8 w-8 mr-4'>
          <Image 
            alt='Logo'
            fill
            src='/logo.jpeg'
          />
        </div>
        <h1 className={cn('text-2xl font-bold text-white', montserrat.className)}>
          Genius
        </h1>
      </Link>
      <div className='flex items-center gap-x-2'>
        <Link href='/dashboard'>
          <Button 
            variant='outline'
            className='rounded-full'
            onClick={proModal.onOpen}
          >
            Contact us
          </Button>
        </Link>
      </div>
    </div>
  );
};
