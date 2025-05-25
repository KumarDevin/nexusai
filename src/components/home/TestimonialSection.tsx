import React from 'react';
import { Star } from 'lucide-react';

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
      author: "Sarah Johnson",
      role: "COO",
      company: "Global Logistics Inc.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "The computer vision system implemented by NexusAI has revolutionized our quality control process, catching defects that were previously missed.",
      author: "Michael Chen",
      role: "Director of Operations",
      company: "Precision Manufacturing",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "We've seen a 40% increase in customer satisfaction since implementing NexusAI's conversational AI agents for our customer service department.",
      author: "Jessica Patel",
      role: "Customer Experience Director",
      company: "TechSupport Pro",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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