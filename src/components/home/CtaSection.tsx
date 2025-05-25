import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Take the first step toward a more intelligent future. Our team of experts is ready to help you explore how AI can address your unique business challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-4 focus:ring-white/30"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/solutions" 
              className="btn border border-white/30 text-white hover:bg-white/10 focus:ring-4 focus:ring-white/20 group"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;