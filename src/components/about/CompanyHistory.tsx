import React from 'react';

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLeft = true }) => {
  return (
    <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center`}>
      {/* Content */}
      <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <span className="text-sm font-semibold text-secondary-600">{year}</span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      {/* Timeline */}
      <div className="w-2/12 flex justify-center">
        <div className="relative flex flex-col items-center">
          <div className="h-full w-1 bg-primary-200 absolute"></div>
          <div className="w-5 h-5 rounded-full bg-primary-600 z-10 shadow-lg"></div>
        </div>
      </div>
      
      {/* Empty space for the other side */}
      <div className="w-5/12"></div>
    </div>
  );
};

const CompanyHistory: React.FC = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'NexusAI was founded with a vision to democratize artificial intelligence and make it accessible to businesses of all sizes.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and successfully deployed a predictive analytics solution that generated over $2M in cost savings.'
    },
    {
      year: '2022',
      title: 'Research Lab Established',
      description: 'Launched the NexusAI Research Lab focused on developing novel algorithms and pushing the boundaries of what\'s possible with AI.'
    },
    {
      year: '2023',
      title: 'International Expansion',
      description: 'Opened offices in London and Singapore, expanding our global footprint and bringing our AI solutions to new markets.'
    },
    {
      year: '2024',
      title: 'Major Funding Round',
      description: 'Secured $50M in Series B funding to accelerate product development and scale our operations to meet growing demand.'
    },
    {
      year: '2025',
      title: 'Today',
      description: 'Leading the industry with innovative AI solutions that are transforming businesses across various sectors worldwide.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary-600 uppercase tracking-wider">Our Journey</span>
          <h2 className="mt-2 mb-4">The NexusAI Story</h2>
          <p className="text-lg text-gray-600">
            From a small team with big ideas to a global AI innovator, our journey has been defined by a commitment to excellence and pushing the boundaries of what AI can achieve.
          </p>
        </div>

        <div className="relative space-y-12 mt-16">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;