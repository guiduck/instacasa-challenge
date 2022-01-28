import { Button, chakra, Divider, Flex, SimpleGrid, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link'

type User = {
  id: number
  name: string,
  email: string,
}

type Props = {
  users: User[]
}

const UserTable: React.FC<Props> = ({ users }) => {

  const bg = useColorModeValue("white", "gray.800");

  return (
    <>
      <Flex
      w="full"
      bg={bg}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: bg }}
        shadow="lg"
      >
        {users.map((user, index) => {
          return (
            <Flex
              direction={{ base: "row", md: "column" }}
              bg={bg}
              key={user.id}
            >
              {useBreakpointValue({ base: false, md: index === 0 }) && (
                <SimpleGrid
                  columns={{ base: 1, md: 3 }}
                  w={{ base: 120, md: "full" }}
                  textTransform="uppercase"
                  bg={useColorModeValue("gray.100", "gray.700")}
                  color={useColorModeValue("gray.500", "gray.500")}
                  py={{ base: 1, md: 4 }}
                  px={{ base: 2, md: 10 }}
                  fontSize="md"
                  fontWeight="hairline"
                  display="table-header-group"
                  shadow="md"
                  borderBottom='0.4px solid rgba(0, 0, 0, 0.3)'
                >
                  <Flex justifyContent='space-between'>
                    <chakra.span textAlign={{ md: "left" }}>Name</chakra.span>
                    <chakra.span textAlign={{ md: "center" }}>Email</chakra.span>
                    <chakra.span textAlign={{ md: "right" }}>User Details</chakra.span>
                  </Flex>
                </SimpleGrid>
              )}
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                w="full"
                py={4}
                px={10}
                fontWeight="hairline"
                justifyContent='space-between'
              >
                <span>{user.name}</span>
                <Flex
                  justifyContent='left'
                  w='full'
                >
                  <chakra.span w='30%' />
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textAlign='center'
                  >
                    {user.email}
                  </chakra.span>
                </Flex>

                <Flex justify={{ md: "end" }}>
                  <Button variant="solid" colorScheme="gray" p={-3} size="sm">
                    <Link href={`/users/${user.id}`}>
                      <chakra.a color='' p={3}>Abrir</chakra.a>
                    </Link>
                  </Button>
                </Flex>
              </SimpleGrid>
              <Divider orientation='horizontal' />
            </Flex>
          );
        })}
      </Stack>
    </Flex>
    </>
  )
}

export default UserTable;