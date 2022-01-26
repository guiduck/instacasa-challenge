import { Box, Button, chakra, CloseButton, Flex, HStack, IconButton, Image, useColorModeValue, useDisclosure, VisuallyHidden, VStack } from '@chakra-ui/react';
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link'
import React from 'react';

const Menu: React.FC = () => {

  const bg = useColorModeValue("#FCC700", "gray.800");
  const textColor = useColorModeValue('#212121', 'white')
  const mobileNav = useDisclosure();

  return (
    <>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex alignItems='center'>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Image src='https://via.placeholder.com/100/fff' alt='Logo' />
              <VisuallyHidden>Teste Instacasa</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize='20px' fontWeight="medium" ml="2">
              Teste Instacasa
            </chakra.h1>
          </Flex>

          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Usuários</Button>
              <Button variant="ghost">
                <Link href='https://blog.instacasa.com.br/' >
                  <a target='_blank'>
                    Blog
                  </a>
                </Link>
              </Button>
            </HStack>
            <Button colorScheme="yellow" size="sm">
              <Link href='https://instacasa.com.br/'>
                Sair
              </Link>
            </Button>
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

                <Button w="full" variant="ghost">
                  Home
                </Button>
                <Button w="full" variant="ghost">
                  Usuários
                </Button>
                <Button w="full" variant="ghost">
                  <Link href='https://blog.instacasa.com.br/' >
                    <a target='_blank'>
                      Blog
                    </a>
                  </Link>
                </Button>
                <Button w="full" variant="ghost">
                  <Link href='https://instacasa.com.br/'>
                    Sair
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