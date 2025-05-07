import React, { useState } from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import { supabase } from '@/lib/supabase';

const ForgotPassword: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      setIsEmailSent(true);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isEmailSent) {
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
        <div className="space-y-6">
          <div className="text-sm text-FPG Doraemon-gray">
            We've sent you an email with a password reset link. Please check your inbox and click the link to reset your password.
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Remember your password?"
      alternateLink={{
        text: "Remember your password?",
        href: "/login",
        linkText: "Sign in"
      }}
    >
      <div className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <div className="text-sm text-FPG Doraemon-gray">
          Enter your email address and we'll send you a link to reset your password.
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-FPG Doraemon-text">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={isLoading}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-FPG Doraemon-blue focus:border-FPG Doraemon-blue sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-FPG Doraemon-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-FPG Doraemon-blue disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending reset link...' : 'Send reset link'}
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword; 