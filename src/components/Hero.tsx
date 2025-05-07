import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Discover Your Perfect Career
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Make smart decisions with our revolutionary AI-enabled guidance tools and expert counsellors
          </p>
          <div className="mt-8">
            <Link href="/get-started" 
              className="bg-[#0096FF] text-white hover:bg-opacity-90 px-8 py-3 rounded-md text-base font-medium transition-colors duration-200 inline-block">
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500 space-x-3">
          {[
            'Career Assessment',
            'Personalized Guidance',
            'Private Tutoring',
            'Virtual Internships',
            'College Roadmap Planning',
            'College Applications',
            'Scholarship Hunt'
          ].map((item, index) => (
            <React.Fragment key={item}>
              {index > 0 && <span>|</span>}
              <span className="inline-block px-2">{item}</span>
            </React.Fragment>
          ))}
        </div>

        <div className="mt-16 relative">
          <div className="relative mx-auto max-w-4xl">
            <Image
              src="/images/hero-illustration.png"
              alt="Career Guidance"
              width={1200}
              height={400}
              className="w-full h-auto"
              priority
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#0096FF] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">Hey! Looking for right Career Guidance?</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Discover the best career path with Online career guidance & personal career goals!
                  </p>
                </div>
                <button className="bg-[#0096FF] text-white px-4 py-2 rounded text-sm">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-[#0096FF]">2.5 Million</div>
            <div className="mt-2 text-sm text-gray-600">Students Impacted</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#0096FF]">60,000</div>
            <div className="mt-2 text-sm text-gray-600">Educators Certified</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#0096FF]">250+</div>
            <div className="mt-2 text-sm text-gray-600">Partner Schools</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#0096FF]">50+</div>
            <div className="mt-2 text-sm text-gray-600">University Partners</div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex justify-center space-x-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="w-24">
                <Image
                  src={`/images/award-${index}.png`}
                  alt={`Award ${index}`}
                  width={96}
                  height={96}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 