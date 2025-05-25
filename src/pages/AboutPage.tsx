import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import MissionSection from '../components/about/MissionSection';
import StatsSection from '../components/about/StatsSection';
import TeamSection from '../components/about/TeamSection';
import CompanyHistory from '../components/about/CompanyHistory';
import CtaSection from '../components/home/CtaSection';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | NexusAI';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutHero />
      <MissionSection />
      <StatsSection />
      <TeamSection />
      <CompanyHistory />
      <CtaSection />
    </>
  );
};

export default AboutPage;