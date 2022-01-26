import Head from 'next/head';
import React from 'react';
import Hero from '../src/components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Hero />
    </div>
  )
}

export default Home;