import {
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  VStack
} from '@chakra-ui/react';
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link'
import React from 'react';
import Router from 'next/router'

const Menu: React.FC = () => {

  const bg = useColorModeValue("#FCC700", "#212121");
  const textColor = useColorModeValue('#212121', 'gray.200')
  const mobileNav = useDisclosure();

  const handleRedirect = (url: string) => {
    Router.push(`${url}`)
  }

  return (
    <>
      <chakra.header
        bg={bg}
        w="full"
        shadow="md"
        zIndex={2}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto" p='20px'>
          <Flex alignItems='center'>
            <chakra.a
              href="/"
              title="Home Page"
              display="flex"
              alignItems="center"
            >
              <Image src='https://via.placeholder.com/100/fff' alt='Logo' />
              <VisuallyHidden>Teste Instacasa</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize='20px' color={textColor} fontWeight="bold" ml="2">
              Teste Instacasa
            </chakra.h1>
          </Flex>

          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              gap={10}
              mr={1}
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link href='/' >
                <chakra.a color={textColor}> Home</chakra.a>
              </Link>
              <Link href='/users' >
                <chakra.a color={textColor}>Usuários </chakra.a>
              </Link>
              <Link href='https://blog.instacasa.com.br/' >
                <a target='_blank' ><Text color={textColor} _hover={{ color:'#FF8A00' }}>Blog</Text></a>
              </Link>
              <Link  href='https://instacasa.com.br/' >
                <a><Text color={textColor} _hover={{ color:'#FF8A00' }}>Sair</Text></a>
              </Link>

            </HStack>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Button
                  w="full"
                >
                  <Link href='/' >
                    <chakra.a color={textColor}> Home</chakra.a>
                  </Link>
                </Button>
                <Button
                  w="full"
                >
                  <Link href='/users' >
                    <chakra.a color={textColor}>Usuários </chakra.a>
                  </Link>
                </Button>
                <Button w="full" >
                  <Link href='https://blog.instacasa.com.br/' >
                    <a target='_blank' ><Text color={textColor} _hover={{ color:'#FF8A00' }}>Blog</Text></a>
                  </Link>
                </Button>
                <Button w="full">
                  <Link href='https://instacasa.com.br/' >
                    <chakra.a color={textColor}>Sair</chakra.a>
                  </Link>
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  )
}

export default Menu;