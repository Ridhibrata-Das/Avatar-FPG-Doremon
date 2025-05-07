import React from 'react';
import Image from 'next/image';

const Awards: React.FC = () => {
  const awards = [
    {
      image: '/images/award-1.png',
      alt: 'Recognized by Department of Science & Technology'
    },
    {
      image: '/images/award-2.png',
      alt: 'Member of FICCI'
    },
    {
      image: '/images/award-3.png',
      alt: 'Member of ASSOCHAM'
    },
    {
      image: '/images/award-4.png',
      alt: 'Award by AICTE'
    },
    {
      image: '/images/award-5.png',
      alt: 'Top Startup by Government of India'
    },
    {
      image: '/images/award-6.png',
      alt: 'Award by NASSCOM'
    }
  ];

  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-8">
          {awards.map((award, index) => (
            <div key={index} className="w-24 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={award.image}
                alt={award.alt}
                width={96}
                height={96}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards; 