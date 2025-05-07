import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/FPG Doraemon-logo.png"
                alt="FPG Doraemon"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <Link href="/for-students" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium inline-flex items-center">
                For Students
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <Link href="/for-institutions" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium inline-flex items-center">
                For Institutions
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <Link href="/for-career-professionals" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium inline-flex items-center">
                For Career Professionals
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <Link href="/resources" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium inline-flex items-center">
                Resources
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
              Log In
            </Link>
            <Link href="/get-started" 
              className="bg-[#0096FF] text-white hover:bg-opacity-90 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 