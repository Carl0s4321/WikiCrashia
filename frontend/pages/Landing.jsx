import { HeroLanding } from '../components/LandingComponents/HeroLanding';
import { FeatureLanding } from '../components/LandingComponents/FeatureLanding';
import { FeedsLanding } from '../components/LandingComponents/FeedsLanding';
import { Layout } from '../components/Layout';

export function Landing() {
  return (
    <>
      <HeroLanding/>
      <FeatureLanding/>
      <FeedsLanding/>
    </>
  )
};