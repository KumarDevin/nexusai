import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import FeatureSection from '../components/home/FeatureSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'NexusAI - Advanced AI Solutions for Business';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeatureSection />
      <TestimonialSection />
      <CtaSection />
    </>
  );
};

export default HomePage;