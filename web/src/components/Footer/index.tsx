import {
  chakra,
  Flex,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import LinkCustom from '../LinkCustom';

const Footer: React.FC = () => {

  const bg = useColorModeValue("#212121", "#212121");

  return (
    <>
      <chakra.footer
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py='20px'
        height='auto'
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
              <LinkCustom url='https://github.com/guiduck' icon={AiFillGithub}>
                My Github
              </LinkCustom>
            </chakra.p>
          </VStack>
        </Flex>
      </chakra.footer>
    </>
  )
}

export default Footer;