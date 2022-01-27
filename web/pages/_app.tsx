import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../src/components/Layout';
import { UserProvider } from '../src/contexts/UserContext';
import global from '../src/theme/global';
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans'
import '@fontsource/raleway/400.css'
import styled from "@emotion/styled";

const Font = styled.div`
  font-family: "Open Sans";
`;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={global}>
      <Font>
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </Font>
    </ChakraProvider>
  );
}

export default MyApp