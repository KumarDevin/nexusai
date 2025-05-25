import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LineChart, MessageSquare, Camera, Bot, Brain, Code } from 'lucide-react';

interface NavItemProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ id, title, icon, isActive }) => {
  return (
    <Link
      to={`#${id}`}
      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
        isActive
          ? 'bg-primary-100 text-primary-700'
          : 'hover:bg-gray-100 text-gray-700'
      }`}
      onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${id}`);
        }
      }}
    >
      <div className={isActive ? 'text-primary-600' : 'text-gray-500'}>
        {icon}
      </div>
      <span className="font-medium">{title}</span>
    </Link>
  );
};

const SolutionsNav: React.FC = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    // Set active section based on hash in URL
    if (location.hash) {
      setActiveSection(location.hash.substring(1));
    } else {
      setActiveSection('predictive-analytics'); // Default
    }
    
    // Add scroll event listener to update active section
    const handleScroll = () => {
      const sections = [
        'predictive-analytics',
        'nlp',
        'computer-vision',
        'ai-agents',
        'machine-learning',
        'custom-solutions'
      ];
      
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // When the section is at the top of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
        window.history.replaceState(null, '', `#${current}`);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.hash, activeSection]);

  const navItems = [
    { id: 'predictive-analytics', title: 'Predictive Analytics', icon: <LineChart size={20} /> },
    { id: 'nlp', title: 'Natural Language Processing', icon: <MessageSquare size={20} /> },
    { id: 'computer-vision', title: 'Computer Vision', icon: <Camera size={20} /> },
    { id: 'ai-agents', title: 'AI Agents', icon: <Bot size={20} /> },
    { id: 'machine-learning', title: 'Machine Learning', icon: <Brain size={20} /> },
    { id: 'custom-solutions', title: 'Custom Solutions', icon: <Code size={20} /> }
  ];

  return (
    <div className="sticky top-20 pt-8 pb-8">
      <div className="bg-white rounded-xl shadow-md p-3">
        <h3 className="text-lg font-semibold px-3 pb-2 mb-2 border-b">Our Solutions</h3>
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              id={item.id}
              title={item.title}
              icon={item.icon}
              isActive={activeSection === item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsNav;