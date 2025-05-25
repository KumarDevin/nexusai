import React from 'react';
import { useLocation } from 'react-router-dom';
import { LineChart, MessageSquare, Camera, Bot, Brain, Code } from 'lucide-react';

interface SolutionProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  benefits: { title: string; description: string }[];
  isReversed?: boolean;
}

const SolutionDetail: React.FC<SolutionProps> = ({
  id,
  title,
  description,
  icon,
  features,
  image,
  benefits,
  isReversed = false,
}) => {
  const location = useLocation();
  const isActive = location.hash === `#${id}`;

  return (
    <section 
      id={id} 
      className={`py-20 ${isReversed ? 'bg-gray-50' : 'bg-white'} scroll-mt-20 transition-all duration-300 ${isActive ? 'bg-primary-50' : ''}`}
    >
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={isReversed ? 'order-2 lg:order-1' : ''}>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-primary-600">{icon}</div>
              <h2 className="text-3xl font-bold">{title}</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">{description}</p>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="bg-primary-100 text-primary-600 p-1 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className={isReversed ? 'order-1 lg:order-2' : ''}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src={image} 
                alt={title} 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionsContent: React.FC = () => {
  const solutions = [
    {
      id: "predictive-analytics",
      title: "Predictive Analytics",
      description: "Transform raw data into actionable insights with our advanced predictive analytics solutions. We help you anticipate market trends, customer behavior, and business opportunities.",
      icon: <LineChart size={32} />,
      features: [
        "Advanced forecasting models",
        "Trend analysis and pattern recognition",
        "Risk assessment and mitigation",
        "Demand prediction and inventory optimization",
        "Customer churn prediction"
      ],
      image: "https://images.pexels.com/photos/7792547/pexels-photo-7792547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      benefits: [
        {
          title: "Data-Driven Decisions",
          description: "Make informed decisions based on predictive insights rather than guesswork."
        },
        {
          title: "Resource Optimization",
          description: "Allocate resources more efficiently based on predicted demand and usage patterns."
        },
        {
          title: "Risk Reduction",
          description: "Identify potential risks early and implement preventative measures."
        },
        {
          title: "Competitive Advantage",
          description: "Stay ahead of the competition by anticipating market changes before they happen."
        }
      ]
    },
    {
      id: "nlp",
      title: "Natural Language Processing",
      description: "Unlock the power of human language with our NLP solutions. From sentiment analysis to conversational AI, we help you understand and interact with text and speech data.",
      icon: <MessageSquare size={32} />,
      features: [
        "Sentiment analysis and opinion mining",
        "Text classification and categorization",
        "Named entity recognition",
        "Chatbots and conversational interfaces",
        "Automated document processing"
      ],
      image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      benefits: [
        {
          title: "Customer Insights",
          description: "Understand customer sentiment and opinions at scale through automated analysis."
        },
        {
          title: "Operational Efficiency",
          description: "Automate document processing and information extraction from unstructured text."
        },
        {
          title: "Enhanced Engagement",
          description: "Create natural, human-like interactions through advanced conversational AI."
        },
        {
          title: "Multilingual Capabilities",
          description: "Break language barriers with cross-lingual understanding and translation."
        }
      ],
      isReversed: true
    },
    {
      id: "computer-vision",
      title: "Computer Vision",
      description: "Give your systems the ability to see and understand the visual world with our computer vision solutions. From image recognition to video analytics, we help you extract insights from visual data.",
      icon: <Camera size={32} />,
      features: [
        "Object detection and recognition",
        "Image classification and segmentation",
        "Facial recognition and analysis",
        "Video analytics and surveillance",
        "Visual inspection and quality control"
      ],
      image: "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      benefits: [
        {
          title: "Quality Assurance",
          description: "Automate visual inspection processes with greater accuracy than human inspection."
        },
        {
          title: "Enhanced Security",
          description: "Implement advanced surveillance and security systems with real-time alerts."
        },
        {
          title: "Process Automation",
          description: "Automate tasks that require visual understanding and decision-making."
        },
        {
          title: "Customer Experience",
          description: "Create innovative visual interfaces and augmented reality experiences."
        }
      ]
    },
    {
      id: "ai-agents",
      title: "AI Agents",
      description: "Deploy intelligent autonomous agents that can learn, adapt, and perform complex tasks with minimal supervision. Our AI agents help you automate processes and enhance decision-making.",
      icon: <Bot size={32} />,
      features: [
        "Reinforcement learning-based agents",
        "Multi-agent systems and coordination",
        "Autonomous decision-making",
        "Adaptive learning and improvement",
        "Human-AI collaboration frameworks"
      ],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      benefits: [
        {
          title: "Process Automation",
          description: "Automate complex workflows that require intelligence and adaptability."
        },
        {
          title: "Continuous Improvement",
          description: "Benefit from agents that learn and improve over time based on experience."
        },
        {
          title: "24/7 Operation",
          description: "Implement tireless systems that can work around the clock without fatigue."
        },
        {
          title: "Scalable Intelligence",
          description: "Deploy multiple coordinated agents to handle large-scale tasks efficiently."
        }
      ],
      isReversed: true
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      description: "Implement custom machine learning models tailored to your specific business challenges. From supervised learning to deep neural networks, we help you extract patterns and insights from your data.",
      icon: <Brain size={32} />,
      features: [
        "Supervised and unsupervised learning",
        "Deep learning and neural networks",
        "Feature engineering and selection",
        "Model optimization and deployment",
        "Explainable AI and transparency"
      ],
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      benefits: [
        {
          title: "Custom Solutions",
          description: "Get ML models specifically designed for your unique business challenges."
        },
        {
          title: "Competitive Edge",
          description: "Leverage the latest advancements in machine learning to stay ahead."
        },
        {
          title: "Operational Intelligence",
          description: "Enhance operations with smart systems that learn from past performance."
        },
        {
          title: "Scalable Learning",
          description: "Implement solutions that improve as your data grows and evolves."
        }
      ]
    },
    {
      id: "custom-solutions",
      title: "Custom AI Solutions",
      description: "Partner with our experts to develop bespoke AI solutions that address your unique business requirements. We work closely with you to understand your challenges and deliver tailored solutions.",
      icon: <Code size={32} />,
      features: [
        "Comprehensive needs assessment",
        "Customized AI strategy development",
        "Tailored algorithm design",
        "Integration with existing systems",
        "Ongoing support and optimization"
      ],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      benefits: [
        {
          title: "Perfect Fit",
          description: "Get solutions precisely aligned with your specific business needs and goals."
        },
        {
          title: "Competitive Differentiation",
          description: "Develop unique AI capabilities that set you apart from competitors."
        },
        {
          title: "End-to-End Support",
          description: "Receive comprehensive assistance from strategy to implementation and beyond."
        },
        {
          title: "Future-Proofing",
          description: "Build adaptable solutions that can evolve with your changing business needs."
        }
      ],
      isReversed: true
    }
  ];

  return (
    <div>
      {solutions.map((solution, index) => (
        <SolutionDetail
          key={index}
          id={solution.id}
          title={solution.title}
          description={solution.description}
          icon={solution.icon}
          features={solution.features}
          image={solution.image}
          benefits={solution.benefits}
          isReversed={solution.isReversed}
        />
      ))}
    </div>
  );
};

export default SolutionsContent;