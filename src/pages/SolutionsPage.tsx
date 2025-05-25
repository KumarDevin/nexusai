import React, { useEffect } from 'react';
import SolutionHero from '../components/solutions/SolutionHero';
import SolutionsNav from '../components/solutions/SolutionsNav';
import SolutionDetail from '../components/solutions/SolutionDetail';
import CtaSection from '../components/home/CtaSection';

const SolutionsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our AI Solutions | NexusAI';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SolutionHero />
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SolutionsNav />
          </div>
          <div className="lg:col-span-3">
            <SolutionDetail />
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
};

export default SolutionsPage;