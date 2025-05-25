import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Enterprise Clients' },
    { value: '200+', label: 'AI Projects Deployed' },
    { value: '25+', label: 'AI Researchers & Engineers' },
    { value: '15', label: 'Industry Awards' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;