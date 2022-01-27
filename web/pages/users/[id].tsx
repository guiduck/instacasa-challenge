import { Box, chakra, Flex, Icon, Image, Input, InputGroup, InputLeftElement, Spinner, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useUserContext } from '../../src/contexts/UserContext';
import { MdEmail, MdAccountCircle, MdOutlineFaceRetouchingNatural, MdPhoneIphone } from "react-icons/md";
import { PhoneIcon } from '@chakra-ui/icons';

type User = {
  id: number,
  name: string,
  email: string,
  username: string
}

const Details: React.FC = () => {

  const router = useRouter()

  const {
    query: { id },
  } = router

  const { users, loading } = useUserContext()

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      {!loading && users ?
        <Box
          w="sm"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <Image
            w="full"
            h={56}
            fit="cover"
            objectPosition="center"
            src="https://via.placeholder.com/150/535353"
            alt="avatar"
          />

          <Flex justifyContent='space-between' alignItems="center" px={6} py={3} bg="gray.900">

            <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
              {users[Number(id)-1]?.name}
            </chakra.h1>

            <Icon as={MdOutlineFaceRetouchingNatural} h={6} w={6} color="white" />
          </Flex>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<PhoneIcon color='gray.300' />}
            />
            <Input borderRadius='4px' placeholder={users[Number(id)-1]?.phone} />
          </InputGroup>
          <Input></Input>

          <Box py={4} px={6}>
            <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
              {`lorem ipsum text`.repeat(12)}
            </chakra.p>

            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon
                as={MdPhoneIphone}
                h={6}
                w={6}
                mr={2}
              />

              <chakra.h1 px={2} fontSize="sm">
                {users[Number(id)-1]?.phone}
              </chakra.h1>
            </Flex>

            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={MdAccountCircle} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                {users[Number(id)-1]?.username}
              </chakra.h1>
            </Flex>
            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={MdEmail} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                {users[Number(id)-1]?.email}
              </chakra.h1>
            </Flex>
          </Box>
        </Box>
      :
        <Spinner size='xl' />
      }
    </Flex>
  )
}

export default Details;