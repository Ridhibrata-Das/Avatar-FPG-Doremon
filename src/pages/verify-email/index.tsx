import React from 'react';
import Link from 'next/link';
import AuthLayout from '@/components/auth/AuthLayout';

const VerifyEmail: React.FC = () => {
  return (
    <AuthLayout
      title="Check your email"
      subtitle="Back to"
      alternateLink={{
        text: "Back to",
        href: "/login",
        linkText: "Sign in"
      }}
    >
      <div className="space-y-6 text-center">
        <div className="text-FPG Doraemon-gray">
          <p className="mb-4">
            We've sent you an email with a verification link. Please check your inbox and click the link to verify your email address.
          </p>
          <p>
            If you don't see the email, check your spam folder or{' '}
            <Link href="/get-started" className="text-FPG Doraemon-blue hover:text-blue-700">
              try signing up again
            </Link>
            .
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmail; 