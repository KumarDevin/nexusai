import React from 'react';
import { Zap, Shield, BarChart3, Users } from 'lucide-react';

const FeatureSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-100 rounded-lg z-0"></div>
              <img 
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg" 
                alt="AI Technology" 
                className="rounded-lg shadow-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-secondary-600 uppercase tracking-wider">Why Choose Us</span>
            <h2 className="mt-2 mb-6">The NexusAI Advantage</h2>
            <p className="text-gray-600 mb-8">
              We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business results. Our approach is focused on creating practical, scalable, and ethical AI systems that enhance human capabilities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">High Performance</h4>
                  <p className="text-gray-600">Optimized AI models that deliver fast, accurate results.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary-100 p-3 rounded-lg text-secondary-600">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Secure & Ethical</h4>
                  <p className="text-gray-600">Robust security with ethical AI development practices.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Data-Driven</h4>
                  <p className="text-gray-600">Insights backed by comprehensive data analysis.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary-100 p-3 rounded-lg text-secondary-600">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Expert Team</h4>
                  <p className="text-gray-600">Led by AI researchers and industry professionals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;