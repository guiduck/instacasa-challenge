import { Box, chakra, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
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
            color='#FCC700'
            fontWeight="extrabold"
          >
           Seja Bem-Vindo!!
          </Text>
        </chakra.h1>
        {/* <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600",'gray.300')}
        >
          uma startup inovadora que possui aspectos que colaboram com o mercado Imobiliário nacional,
          criada com o objetivo de ajudar as pessoas a visualizarem a casa dos sonhos no momento da compra de seu lote.
        </chakra.p> */}
      </Box>
    </Box>
  )
}

export default Hero;