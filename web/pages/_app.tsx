import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../src/components/Layout';
import { UserProvider } from '../src/contexts/UserContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp