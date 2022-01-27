import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';

const Layout: React.FC = ({ children }) => {

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex direction='column' >

      <Menu />

      <Flex style={{position: 'absolute', right: 20}}>
        <IconButton
          bg={useColorModeValue('rgba(0, 0, 0, 0)', 'gray.700')}
          _hover={{bg: useColorModeValue('#ffe60081', '#dbddff73')}}
          p={2}
          aria-label="theme"
          fontSize="20px"
          icon={<>{colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}</>}
          onClick={toggleColorMode}
        />
      </Flex>
      {children}

      <Flex
        w='full'
      >
        <Footer />
      </Flex>
    </Flex>
  )
}

export default Layout;