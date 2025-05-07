import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  alternateLink: {
    text: string;
    href: string;
    linkText: string;
  };
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  alternateLink
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center">
          <Image
            src="/images/FPG Doraemon-logo.png"
            alt="FPG Doraemon Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <h2 className="mt-6 text-center text-3xl font-extrabold text-FPG Doraemon-text">
          {title}
        </h2>
        <p className="mt-2 text-center text-sm text-FPG Doraemon-gray">
          {subtitle}{' '}
          <Link href={alternateLink.href} className="font-medium text-FPG Doraemon-blue hover:text-blue-700">
            {alternateLink.linkText}
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-FPG Doraemon sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout; 