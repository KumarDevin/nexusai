import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary-900/80 z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
        >
          <source 
            src="https://player.vimeo.com/external/477294144.sd.mp4?s=5d3c61155c231c3ca9ff1b6752600e1dcaa15aee&profile_id=139&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container-custom relative z-20">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-white mb-6 leading-tight">
            Transforming Tomorrow with Intelligent AI Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Harness the power of artificial intelligence to drive innovation, optimize operations, and unlock new possibilities for your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/solutions" className="btn btn-primary">
              Explore Solutions
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-1">Scroll to explore</span>
        <ArrowRight className="rotate-90 w-5 h-5" />
      </div>
    </section>
  );
};

export default HeroSection;