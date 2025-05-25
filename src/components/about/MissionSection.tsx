import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

const MissionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-lg z-0"></div>
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our Mission" 
                className="rounded-lg shadow-xl relative z-10 w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-100 rounded-lg z-0"></div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-secondary-600 uppercase tracking-wider">Our Purpose</span>
            <h2 className="mt-2 mb-6">Mission, Vision & Values</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mt-1">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To democratize artificial intelligence by creating accessible, powerful, and ethical AI solutions that solve real-world problems and empower businesses of all sizes to thrive in the digital age.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary-100 p-3 rounded-lg text-secondary-600 mt-1">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    A world where AI augments human potential, drives sustainable innovation, and creates a more efficient, equitable, and prosperous society for all.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mt-1">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                      <span><strong>Innovation:</strong> Continuously pushing boundaries and exploring new possibilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                      <span><strong>Ethics:</strong> Developing AI with strong ethical principles and responsibility</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                      <span><strong>Collaboration:</strong> Building partnerships that amplify our collective impact</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                      <span><strong>Excellence:</strong> Committing to the highest standards in everything we do</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;