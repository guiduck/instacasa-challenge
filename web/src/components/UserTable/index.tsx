import { Button, chakra, Divider, Flex, SimpleGrid, Stack, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
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

  return (
    <>
      <Flex
      w="full"
      bg={useColorModeValue("white", "gray.800")}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: useColorModeValue("white", "gray.800") }}
        shadow="lg"
      >
        {users.map((user, index) => {
          return (
            <Flex
              direction={{ base: "row", md: "column" }}
              bg={useColorModeValue("white", "gray.800")}
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
                  <Flex justifyContent='space-between' >
                    <chakra.span textAlign={{ md: "left" }}>Name</chakra.span>
                    <chakra.span textAlign={{ md: "center" }}>Email</chakra.span>
                    <chakra.span textAlign={{ md: "right" }}>User Details</chakra.span>
                  </Flex>
                </SimpleGrid>
              )}
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <span>{user.name}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                  ml={10}
                >
                  {user.email}
                </chakra.span>
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