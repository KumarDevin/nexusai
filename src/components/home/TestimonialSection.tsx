import React from 'react';
import { Star } from 'lucide-react';
import ganpatji from './images/Ganpat_Lal.png';
import anirudh from './images/anirudh.png';
import indu from './images/Indubala.png'; 

type TestimonialProps = {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, company, image }) => {
  return (
    <div className="card p-8 h-full flex flex-col">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="italic text-gray-700 mb-6 flex-grow">{content}</p>
      <div className="flex items-center mt-auto">
        <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      content: "NexusAI's predictive analytics solution transformed our supply chain management, reducing costs by 23% while improving delivery times.",
      author: "Indubala Sharma",
      role: "COO",
      company: "Global Logistics Inc.",
      image: indu
    },
    {
      content: "The computer vision system implemented by NexusAI has revolutionized our quality control process, catching defects that were previously missed.",
      author: "Anirudh Shanesha",
      role: "Director of Operations",
      company: "Precision Manufacturing",
      image: anirudh},
    {
      content: "We've seen a 40% increase in customer satisfaction since implementing NexusAI's conversational AI agents for our customer service department.",
      author: "Ganpat Lal",
      role: "Customer Experience Director",
      company: "TechSupport Pro",
      image: ganpatji
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary-600 uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            See how our AI solutions have helped businesses across various industries achieve their goals and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;