import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VideoTestimonial = ({ thumbnail, title, name, quote }: {
  thumbnail: string;
  title: string;
  name: string;
  quote: string;
}) => (
  <div className="bg-white rounded-lg shadow-FPG Doraemon overflow-hidden">
    <div className="relative">
      <Image
        src={thumbnail}
        alt={title}
        width={400}
        height={225}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
            <Image
              src={`/images/avatar-${name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-FPG Doraemon-text">{name}</h3>
          <p className="text-FPG Doraemon-gray text-sm">{title}</p>
        </div>
      </div>
      <p className="text-FPG Doraemon-gray text-sm italic">"{quote}"</p>
      <Link
        href="#"
        className="mt-4 text-FPG Doraemon-blue hover:text-blue-700 text-sm font-medium inline-flex items-center"
      >
        Read full story
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
);

const SuccessStories: React.FC = () => {
  const testimonials = [
    {
      thumbnail: "/images/video1.jpg",
      title: "Before & After Sessions - Vol. 1",
      name: "Shubham",
      quote: "Signing up for FPG Doraemon was everything and more than what I was expecting! It was well worth the investment."
    },
    {
      thumbnail: "/images/video2.jpg",
      title: "Before & After Sessions - Vol. 2",
      name: "Sakshi",
      quote: "I love how everyone here understood and knew the things that I wanted to do with my career."
    },
    {
      thumbnail: "/images/video3.jpg",
      title: "Before & After Sessions - Vol. 3",
      name: "Monica",
      quote: "FPG Doraemon provided a comprehensive framework for my son's education to achieve our desired goals."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-FPG Doraemon-text text-center mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <VideoTestimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories; 