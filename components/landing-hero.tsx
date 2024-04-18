'use client'

import Link from 'next/link';
import TypewriterComponent from 'typewriter-effect';
import { Button } from './ui/button';

export const LandingHero = () => {
  
  
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>AI Generation Tool</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent 
            options={{
              strings: ['Chatbot', 'Code Generation', 'Text Generation'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
            Create content using AI
      </div>
      <div>
        <Link href='/dashboard'>
          <Button variant='premium' className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start generating free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
          Demo version. No data is stored.
      </div>
    </div>
    );
};
