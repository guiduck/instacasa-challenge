import { Box, chakra, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Hero: React.FC = () => {

  return (
    <Flex px={8} py={24} mx="auto" height='80vh' alignItems='center' justifyContent='center'>
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "center", md: "center" }}

      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "24px", md: "24px" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
        >
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            color={useColorModeValue('#212121', '#FCC700')}
            fontWeight="extrabold"
          >
           Seja Bem-Vindo!!
          </Text>
        </chakra.h1>
      </Box>
    </Flex>
  )
}

export default Hero;