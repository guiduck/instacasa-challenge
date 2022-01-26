import { chakra, Flex, Link, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () => {

  const bg = useColorModeValue("#212121", "gray.800");

  return (
    <>
      <chakra.footer
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        height='100px'
      >
        <Flex justifyContent='center'>
          <VStack
            display={{ base: "inline-flex", md: "inline-flex" }}
          >
            <chakra.h1
              color='#FFF'
              fontSize='14px'
            >
              Guilherme Figueiredo
            </chakra.h1>
            <chakra.p fontSize='sm' color='#FFF'>
              25/01/2022
            </chakra.p>
            <chakra.p fontSize='sm' color='#FFF'>
              <Link href='https://github.com/guiduck'>
                <chakra.a target='_blank'>https://github.com/guiduck</chakra.a>
              </Link>
            </chakra.p>
          </VStack>
        </Flex>
      </chakra.footer>
    </>
  )
}

export default Footer;