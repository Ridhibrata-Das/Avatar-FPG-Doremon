import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Enhance Your Career Path with FPG Doraemon FPG Doraemon!",
      description: "Unlock personalized career guidance with our AI chatbot. Get tailored advice to reach your full potential today!",
      image: "/images/orion-bot.png"
    }
    // Add more slides if needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/FPG Doraemon-logo.png"
                alt="FPG Doraemon Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
              <nav className="ml-8 flex space-x-4">
                <Link href="/dashboard" className="text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-blue-600">
                  Dashboard
                </Link>
                <Link href="/orion-ai" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  FPG Doraemon
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">+91 7744957449</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                All Services
              </button>
              <div className="flex items-center">
                <span className="mr-2">Ridhibrata</span>
                <button className="p-2" aria-label="User menu">
                  <Image
                    src="/images/avatar.png"
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Hi There! Ridhibrata
            </h1>
            <p className="text-gray-600 mt-1">Let's Start Your Career Journey</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Current Program:</span>
            <span className="text-gray-900">Preview</span>
            <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm">
              UPGRADE
            </button>
          </div>
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* My Progress */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">MY PROGRESS</h2>
              <Link href="#" className="text-blue-600 text-sm flex items-center">
                Know More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-600 mr-2">🏃</span>
                <div>
                  <div className="flex items-center">
                    <span className="font-medium">0/10</span>
                    <span className="text-gray-500 text-sm ml-2">Milestone Completed</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">👤</span>
                  <div>
                    <div className="text-red-500 text-sm font-medium">Not started</div>
                    <div className="text-gray-500 text-sm">Profile Level</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500">😊</span>
                  <div className="ml-2">
                    <div className="font-medium">0/14</div>
                    <div className="text-gray-500 text-sm">Badges Unlocked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ongoing */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">ONGOING</h2>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Continue Upcoming Milestones</h3>
            <p className="text-gray-600 text-sm mb-4">
              Plan your career journey with us. Click to see all your upcoming milestones yet to be achieved
            </p>
            <button className="text-white bg-blue-600 px-4 py-2 rounded text-sm">
              Show Milestones
            </button>
          </div>

          {/* Coming Up Next */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">COMING UP NEXT</h2>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Complete Career Assessment</h3>
            <p className="text-gray-600 text-sm mb-4">
              Your Psychometric Assessment is yet to be completed. Head over now to get one step ahead in your career planning.
            </p>
            <button className="text-white bg-blue-600 px-4 py-2 rounded text-sm">
              Start Now
            </button>
          </div>
        </div>

        {/* FPG Doraemon Banner */}
        <div className="relative bg-[#000B29] rounded-lg overflow-hidden mb-8">
          <div className="flex items-center justify-between p-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-gray-300 mb-6">
                {slides[currentSlide].description}
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
                Learn More
              </button>
            </div>
            <div className="relative w-1/3">
              <Image
                src={slides[currentSlide].image}
                alt="FPG Doraemon Bot"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">FIND SOLUTIONS FOR</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Career Shortlisting",
                description: "Understand your inclination and shortlist your Best-Fit Career through our Psychometric Assessment and Internship Program",
                icon: "📋",
              },
              {
                title: "Personalized Guidance",
                description: "Gain better career clarity by getting in touch with our Expert Counsellors by scheduling one-on-one sessions.",
                icon: "👥",
              },
              {
                title: "Planning Tools",
                description: "Plan your career path by enhancing your Profile, and creating the roadmap to your dream colleges by accessing our resources",
                icon: "⏰",
              },
              {
                title: "College Application",
                description: "Let our Expert Counsellors help you in creating the perfect College Application strategy to get in to your Dream College",
                icon: "🎓",
              },
              {
                title: "My Resources",
                description: "Get access to exclusive FPG Doraemon Resources to understand your career options better and plan the perfect path for yourself",
                icon: "📚",
              },
              {
                title: "Test Prep & Others",
                description: "Find other career development and assistance plans to kick-start your career journey",
                icon: "✅",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow flex items-start">
                <span className="text-2xl mr-4">{item.icon}</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <svg className="w-4 h-4 ml-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Application Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Overseas College Application",
              description: "End-to-end Overseas admission guidance to help you build the perfect Applications for your target universities.",
              image: "/images/overseas.png",
              buttonText: "Apply Now",
            },
            {
              title: "Liberal Education College Application",
              description: "Comprehensive guidance and personalized application development for admissions to Liberal Arts programs.",
              image: "/images/liberal-arts.png",
              buttonText: "Apply Now",
            },
            {
              title: "Avail low interest Education Loans",
              description: "FPG Doraemon Education Brings you Financial Support By offering smart education loans upto INR 5 lakh.",
              image: "/images/education-loan.png",
              buttonText: "Apply Now",
            },
          ].map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-medium text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
              <div className="flex justify-between items-end">
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
                  {card.buttonText}
                </button>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Recent Articles */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">RECENT ARTICLES</h2>
            <Link href="#" className="text-blue-600 text-sm">
              VIEW ALL
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                title: "Best Dance Schools in India: Where to Train for a Professional Dance Career",
                date: "Sat, Apr 12, 2023",
                image: "/images/dance-schools.jpg",
                preview: "Introduction Dance is more than movement—it's a passion, culture, and storytelling. In India, it's deeply rooted in artistic heritage, from classical...",
              },
              {
                title: "How to Join the Indian Defence Forces: 5 Competitive Exams You Must Know",
                date: "Mon, Apr 7, 2023",
                image: "/images/defence-forces.jpg",
                preview: "Each year, over 4-5 lakh candidates aspire to join the Indian Defence Forces through the National Defence Academy (NDA)...",
              },
              {
                title: "Passionate About Movies? Here's How You Can Become a Film Critic in India",
                date: "Fri, Apr 6, 2023",
                image: "/images/film-critic.jpg",
                preview: "If you're passionate about films and love sharing your thoughts on them, a career as a film critic in India might...",
              },
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-medium text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{article.date}</p>
                  <p className="text-gray-600 text-sm">{article.preview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 