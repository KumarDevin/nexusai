import React from 'react';

const SolutionHero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-primary-800 to-secondary-900 text-white">
      <div className="container-custom">
        <div className="max-w-3xl">
          <span className="text-primary-300 font-medium mb-3 block">Our Solutions</span>
          <h1 className="mb-6">AI-Powered Solutions That Drive Innovation</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Discover our comprehensive suite of AI technologies designed to solve complex business challenges and create new opportunities for growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;