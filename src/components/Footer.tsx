import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Help Center', href: '/help' },
        { name: 'Terms', href: '/terms' },
      ],
    },
    {
      title: 'Features',
      links: [
        { name: 'Live Classes', href: '/live-classes' },
        { name: 'Self Study', href: '/self-study' },
        { name: 'Practice', href: '/practice' },
      ],
    },
  ];

  const socialMedia = [
    { name: 'Facebook', href: '#', icon: '/images/facebook.png' },
    { name: 'Twitter', href: '#', icon: '/images/twitter.png' },
    { name: 'Instagram', href: '#', icon: '/images/instagram.png' },
    { name: 'LinkedIn', href: '#', icon: '/images/linkedin.png' },
    { name: 'YouTube', href: '#', icon: '/images/youtube.png' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Language Learning Platform"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Making language learning accessible and effective for everyone.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-base text-gray-500 hover:text-gray-900">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {socialMedia.map((social) => (
              <a key={social.name} href={social.href} className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                <span className="sr-only">{social.name}</span>
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Language Learning Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 