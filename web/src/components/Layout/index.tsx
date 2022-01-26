import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';

const Layout: React.FC = ({ children }) => {

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex direction='column'>

      <Menu />

      <Flex style={{position: 'absolute', right: 20}}>
        <IconButton
          bg={useColorModeValue('gray.200', 'gray.700')}
          p={2}
          aria-label="theme"
          fontSize="20px"
          icon={<>{colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}</>}
          onClick={toggleColorMode}
        />
      </Flex>
      {children}

      <Box
        position='fixed'
        bottom='0'
        w='full'
      >
        <Footer />
      </Box>
    </Flex>
  )
}

export default Layout;