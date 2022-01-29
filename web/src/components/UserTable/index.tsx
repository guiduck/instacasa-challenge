import { Button, chakra, Divider, Flex, SimpleGrid, Spinner, Stack, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link'
import { useUserContext } from '../../contexts/UserContext';

type User = {
  _id?: string
  id?: string,
  name: string,
  email: string,
  username: string,
  phone: string
}

const UserTable: React.FC = () => {

  const bg = useColorModeValue("white", "gray.800");
  const { isLocal, deleteUser, setDeletedId, users, loading, deletedId } = useUserContext()

  const handleDelete = async (id: string) => {
    if (id) {
      await deleteUser(id)
      setDeletedId([...deletedId, id])
    }
  }

  return (
    <>
    {!loading && users ?
      <Flex
        w="full"
        bg={bg}
        alignItems="center"
        justifyContent="center"
        h='full'
        zIndex='1'
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
                key={index}
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
                {!deletedId.includes(user.id) ?
                  <>
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

                      <Flex justify={{ md: "end" }} gap={2}>
                        <Button variant="solid" colorScheme="gray" p={-3} size="sm">
                          <Link href={`/users/${user.id}`}>
                            <chakra.a color='' p={4}>Abrir</chakra.a>
                          </Link>
                        </Button>
                        <Button isDisabled={!isLocal} variant="solid" colorScheme="red"  size="sm" onClick={() => handleDelete(user.id)}>
                          <chakra.span _hover={{color: useColorModeValue('#FF8A00', 'white')}} fontSize='sm'>Deletar</chakra.span>
                        </Button>
                      </Flex>
                    </SimpleGrid>
                    <Divider orientation='horizontal' />
                  </>
                  :
                  null
                }
              </Flex>
            );
          })}
        </Stack>
      </Flex>
      :
      <Spinner />
    }
    </>
  )
}

export default UserTable;