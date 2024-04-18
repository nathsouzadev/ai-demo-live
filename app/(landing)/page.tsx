import { LandingHero } from '@/components/landing-hero';
import { LandingNavBar } from '@/components/landing-navbar';

export default function LandingPage() {
  return (
    <div className='h-full'>
      <LandingNavBar />
      <LandingHero />
    </div>
  );
}
