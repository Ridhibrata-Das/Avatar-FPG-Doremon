import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArticleCard = ({ title, image, description, link }: {
  title: string;
  image: string;
  description: string;
  link: string;
}) => (
  <div className="bg-white rounded-lg shadow-FPG Doraemon overflow-hidden">
    <Image
      src={image}
      alt={title}
      width={400}
      height={200}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-lg font-semibold text-FPG Doraemon-text mb-2">{title}</h3>
      <p className="text-FPG Doraemon-gray text-sm mb-4">{description}</p>
      <Link
        href={link}
        className="text-FPG Doraemon-blue hover:text-blue-700 font-medium text-sm inline-flex items-center"
      >
        Read More
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
);

const PopularResources: React.FC = () => {
  const articles = [
    {
      title: "What you need to know about new Public Policy",
      image: "/images/article1.png",
      description: "Learn about the latest changes in public policy and how they affect career choices.",
      link: "/articles/public-policy"
    },
    {
      title: "Top career counselling programs in India for graduates",
      image: "/images/article2.png",
      description: "Discover the best career counselling programs available for graduates in India.",
      link: "/articles/counselling-programs"
    },
    {
      title: "Top Student's Choice Programs",
      image: "/images/article3.png",
      description: "Explore the most popular career programs chosen by students.",
      link: "/articles/student-choices"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-FPG Doraemon-text mb-8">Most Popular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-FPG Doraemon-text mb-4">All Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['The Career Counselling Process', 'Career Options After 12th'].map((title, index) => (
              <div key={index} className="bg-white rounded-lg shadow-FPG Doraemon p-4 flex items-center justify-between">
                <span className="text-FPG Doraemon-text font-medium">{title}</span>
                <Link
                  href={`/articles/${title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-FPG Doraemon-blue hover:text-blue-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularResources; 