'use client';
import { Github } from 'lucide-react';
import MobileSidebar from './mobile-sidebar';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex items-center p-4'>
      <MobileSidebar />

      <Link href='https://github.com/nathsouzadev/ai-demo-live' target='_blank' className='flex w-full justify-end'>
        Code
        <div className='ml-2'>
          <Github />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
