import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-primary-800 to-secondary-900 text-white">
      <div className="container-custom">
        <div className="max-w-3xl">
          <span className="text-primary-300 font-medium mb-3 block">About Us</span>
          <h1 className="mb-6">Pioneering the Future of AI Technology</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            We're a team of passionate AI experts, engineers, and business strategists on a mission to make artificial intelligence accessible, ethical, and transformative for businesses worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;