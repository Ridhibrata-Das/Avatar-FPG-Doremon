import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';
import AuthLayout from '@/components/auth/AuthLayout';
import { supabase } from '@/lib/supabase';

const SignUp: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const firstName = formData.get('first-name') as string;
    const lastName = formData.get('last-name') as string;

    try {
      const { data: { user }, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          },
        },
      });

      if (error) throw error;

      // Redirect to email verification page or dashboard
      router.push('/verify-email');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthSignUp = async (provider: 'google' | 'linkedin') => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) throw error;
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Already have an account?"
      alternateLink={{
        text: "Already have an account?",
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

        {/* OAuth Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleOAuthSignUp('google')}
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-FPG Doraemon-blue"
            disabled={isLoading}
          >
            <FcGoogle className="h-5 w-5 mr-2" />
            <span>Google</span>
          </button>
          <button
            type="button"
            onClick={() => handleOAuthSignUp('linkedin')}
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-FPG Doraemon-blue"
            disabled={isLoading}
          >
            <FaLinkedin className="h-5 w-5 mr-2 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        {/* Email/Password Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-FPG Doraemon-text">
                First name
              </label>
              <div className="mt-1">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  required
                  disabled={isLoading}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-FPG Doraemon-blue focus:border-FPG Doraemon-blue sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-FPG Doraemon-text">
                Last name
              </label>
              <div className="mt-1">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  required
                  disabled={isLoading}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-FPG Doraemon-blue focus:border-FPG Doraemon-blue sm:text-sm"
                />
              </div>
            </div>
          </div>

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
            <label htmlFor="password" className="block text-sm font-medium text-FPG Doraemon-text">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                disabled={isLoading}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-FPG Doraemon-blue focus:border-FPG Doraemon-blue sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              disabled={isLoading}
              className="h-4 w-4 text-FPG Doraemon-blue focus:ring-FPG Doraemon-blue border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-FPG Doraemon-gray">
              I agree to the{' '}
              <a href="/terms" className="text-FPG Doraemon-blue hover:text-blue-700">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-FPG Doraemon-blue hover:text-blue-700">
                Privacy Policy
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-FPG Doraemon-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-FPG Doraemon-blue disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating account...' : 'Create account'}
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp; 