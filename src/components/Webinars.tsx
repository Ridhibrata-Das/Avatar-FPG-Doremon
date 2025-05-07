import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WebinarCard = ({ image, title, link }: {
  image: string;
  title: string;
  link: string;
}) => (
  <div className="bg-white rounded-lg shadow-FPG Doraemon overflow-hidden">
    <Link href={link} className="block">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-20 transition-opacity duration-200" />
      </div>
      <div className="p-4">
        <h3 className="text-FPG Doraemon-text font-medium text-lg line-clamp-2">{title}</h3>
      </div>
    </Link>
  </div>
);

const Webinars: React.FC = () => {
  const webinars = [
    {
      image: "/images/webinar1.jpg",
      title: "Building A Strong Profile For Academic, Extracurricular, And Personal Development",
      link: "/webinars/building-strong-profile"
    },
    {
      image: "/images/webinar2.jpg",
      title: "Putting Math To Work: A Career In Data Science & Analytics",
      link: "/webinars/data-science-career"
    },
    {
      image: "/images/webinar3.jpg",
      title: "SIU University's Interdisciplinary UG Programs 2023",
      link: "/webinars/siu-programs-2023"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-FPG Doraemon-text mb-2">
            FPG Doraemon Webinars and Vlogs
          </h2>
          <Link 
            href="/webinars"
            className="text-FPG Doraemon-blue hover:text-blue-700 font-medium"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <WebinarCard key={index} {...webinar} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webinars; 