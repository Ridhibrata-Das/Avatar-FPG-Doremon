import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Awards from '@/components/Awards';
import Features from '@/components/Features';
import PopularResources from '@/components/PopularResources';
import SuccessStories from '@/components/SuccessStories';
import Webinars from '@/components/Webinars';
import CallToAction from '@/components/CallToAction';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Awards />
      <Features />
      <PopularResources />
      <SuccessStories />
      <Webinars />
      <CallToAction />
    </Layout>
  );
};

export default Home; 