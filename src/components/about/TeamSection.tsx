import React from 'react';
import devin from "./images/Resume_image_devin.jpg";
import bhagat from "./images/bhagat.png";
import sudhansh from "./images/sudhansh.jpg";
import bharat from "./images/bharat.png";
import anuradha from "./images/anurandha.png"
import devanshu from "./images/devu.png"
import { Linkedin, Twitter, Github } from 'lucide-react';

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio, social }) => {
  return (
    <div className="card p-6 group hover:transform hover:translate-y-[-8px] transition-all duration-300">
      <div className="relative mb-6 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-secondary-600 font-medium mb-3">{role}</p>
      <p className="text-gray-600 mb-4">{bio}</p>
      <div className="flex space-x-3">
        {social.linkedin && (
          <a 
            href={social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary-600 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        )}
        {social.twitter && (
          <a 
            href={social.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary-600 transition-colors"
          >
            <Twitter size={20} />
          </a>
        )}
        {social.github && (
          <a 
            href={social.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary-600 transition-colors"
          >
            <Github size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Devin Shanesha",
      role: "Founder & CEO",
      image: devin,
      bio: "With a Ph.D. in Machine Learning from Stanford, Sophia has led AI research at top tech companies before founding NexusAI to bring cutting-edge AI to businesses worldwide.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Bharat Agrawal",
      role: "CTO",
      image: bharat,
      bio: "Former lead engineer at Google AI, Marcus brings over 15 years of experience in developing scalable AI systems and deep learning architectures.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Anuradha",
      role: "Chief Data Scientist",
      image: anuradha,
      bio: "Specializing in predictive analytics and NLP, Aisha has published numerous papers on efficient algorithms and leads our data science initiatives.",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Devanshu Tiwari",
      role: "VP of Engineering",
      image: devanshu,
      bio: "With expertise in distributed systems and cloud architecture, David ensures our AI solutions are robust, scalable and optimized for performance.",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sudhansh Dugat",
      role: "Head of Ethics & Governance",
      image: sudhansh,
      bio: "Elena combines her background in philosophy and computer science to guide our ethical AI development and responsible innovation practices.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Bhagat Singh",
      role: "Director of Business Development",
      image: bhagat,
      bio: "James bridges the gap between technology and business value, helping clients identify the right AI solutions for their specific challenges.",
      social: {
        linkedin: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary-600 uppercase tracking-wider">Our Team</span>
          <h2 className="mt-2 mb-4">Meet the Experts Behind NexusAI</h2>
          <p className="text-lg text-gray-600">
            Our diverse team of AI researchers, engineers, and business strategists are united by a passion for creating AI that makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              social={member.social}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;