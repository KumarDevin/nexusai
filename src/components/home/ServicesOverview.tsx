import React from 'react';
import { Brain, LineChart, MessageSquare, Camera, Bot, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <Link 
      to={link}
      className="card p-6 hover:translate-y-[-8px] group"
    >
      <div className="mb-4 text-primary-600 group-hover:text-secondary-600 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary-700 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: <LineChart size={48} />,
      title: "Predictive Analytics",
      description: "Transform data into foresight with our advanced predictive models that help you anticipate market trends and customer behavior.",
      link: "/solutions#predictive-analytics"
    },
    {
      icon: <MessageSquare size={48} />,
      title: "Natural Language Processing",
      description: "Understand and interact with your customers through sophisticated language models and sentiment analysis.",
      link: "/solutions#nlp"
    },
    {
      icon: <Camera size={48} />,
      title: "Computer Vision",
      description: "See the world through AI with image recognition, object detection, and visual data processing solutions.",
      link: "/solutions#computer-vision"
    },
    {
      icon: <Bot size={48} />,
      title: "AI Agents",
      description: "Deploy intelligent autonomous agents that can learn, adapt, and perform complex tasks with minimal supervision.",
      link: "/solutions#ai-agents"
    },
    {
      icon: <Brain size={48} />,
      title: "Machine Learning",
      description: "Implement custom machine learning models tailored to your specific business challenges and opportunities.",
      link: "/solutions#machine-learning"
    },
    {
      icon: <Code size={48} />,
      title: "Custom AI Solutions",
      description: "Partner with our experts to develop bespoke AI solutions that address your unique business requirements.",
      link: "/solutions#custom-solutions"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary-600 uppercase tracking-wider">Our Services</span>
          <h2 className="mt-2 mb-4">Comprehensive AI Solutions for Modern Businesses</h2>
          <p className="text-lg text-gray-600">
            From predictive analytics to autonomous agents, we offer a full spectrum of AI capabilities to drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;