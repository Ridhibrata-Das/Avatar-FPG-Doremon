import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeatureCard = ({ title, description, image, link, linkText }: {
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
}) => (
  <div className="bg-white p-8 rounded-lg shadow-FPG Doraemon">
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-FPG Doraemon-text mb-4">{title}</h3>
          <p className="text-FPG Doraemon-gray mb-6">{description}</p>
          <Link 
            href={link}
            className="text-FPG Doraemon-blue hover:text-blue-700 font-medium inline-flex items-center"
          >
            {linkText}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      title: "Personalised Guidance from Experts",
      description: "Plan your career, stream choices with India's largest career experts and soar through expert guidance. All our career coaches are World Board Certified Career Coaches, with over 15+ years of experience in career specialty. Never be confused about your career choices with career counselling and job guidance.",
      image: "/images/guidance.png",
      link: "/about-our-team",
      linkText: "About Our Team"
    },
    {
      title: "Career Roadmap Planner",
      description: "Compare and analyze from thousands of colleges for your bright and best career. Learn about scholarships and entrance exams for colleges and get expert guidance. Plan a comprehensive roadmap to your dream career with guidance from our career coaches.",
      image: "/images/roadmap.png",
      link: "/schedule-call-back",
      linkText: "Schedule a Call Back"
    },
    {
      title: "Extensive Support & Resources",
      description: "100+ career resource library with articles, blogs, career plans, psychometric tests and more. Access free 200+ articles, webinars and blogs on all things career - trends, opportunities and guidance. Career e-guides, self-assessment calculators, resume preparation and digital courses.",
      image: "/images/resources.png",
      link: "/take-free-demo",
      linkText: "Take Free Demo"
    },
    {
      title: "Nexus: AI-Powered Career Planning Tool",
      description: "Build a digital career roadmap in just a few minutes based on your interests. Interactive group career suggestions. Introduction to Best Matching Top Career Pathways. Suggestion for both short and long-term goals.",
      image: "/images/nexus.png",
      link: "/schedule-call-back",
      linkText: "Schedule a Call Back"
    },
    {
      title: "Orion: AI-Powered Career Mentor/Chatbot",
      description: "Personalized feedback and advice. Help you navigate your career-related queries. Conversational Problem Solver.",
      image: "/images/orion.png",
      link: "/schedule-call-back",
      linkText: "Schedule a Call Back"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 