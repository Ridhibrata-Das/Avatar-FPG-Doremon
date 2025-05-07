import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-[#E5F7FF] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-FPG Doraemon-text mb-2">
          Take the first step towards career clarity!
        </h2>
        <p className="text-FPG Doraemon-gray mb-8">
          Discover your best-fit career with the world's most advanced career assessment
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-FPG Doraemon-blue focus:border-transparent"
          />
          <button className="bg-[#FF6B00] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-200 whitespace-nowrap">
            Take Free Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 