import { Box, Flex, Image, Spinner, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useUserContext } from '../../src/contexts/UserContext';
import { MdEmail, MdAccountCircle, MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { PhoneIcon } from '@chakra-ui/icons';
import InputCustom from '../../src/components/InputCustom/Index';

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
          w="lg"
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

          <Flex direction='column' w='full' py={4} px={6}>

            <Flex w='full' direction={{base:'column', lg: 'row', xl: 'row'}}>

              <Flex
                alignItems="center"
                mt={4}
                w={{base: 'full', lg: 'full', xl: '50%'}}
                color={useColorModeValue("gray.700", "gray.200")}
              >
                <InputCustom placeholder={users[Number(id)-1]?.name} icon={MdOutlineFaceRetouchingNatural} size={25} />
              </Flex>

              <Flex
                alignItems="center"
                w={{base: 'full', lg: 'full', xl: '50%'}}
                mt={4}
                color={useColorModeValue("gray.700", "gray.200")}
              >
                <InputCustom placeholder={users[Number(id)-1]?.phone} icon={PhoneIcon} size={16} />
              </Flex>
            </Flex>

            <Flex direction={{base:'column', lg: 'row', xl: 'row'}}>

              <Flex
                alignItems="center"
                w={{base: 'full', lg: 'full', xl: '50%'}}
                mt={4}
                color={useColorModeValue("gray.700", "gray.200")}
              >
                <InputCustom placeholder={users[Number(id)-1]?.username} icon={MdAccountCircle} size={25} />
              </Flex>
              <Flex
                alignItems="center"
                w={{base: 'full', lg: 'full', xl: '50%'}}
                mt={4}
                color={useColorModeValue("gray.700", "gray.200")}
              >
                <InputCustom placeholder={users[Number(id)-1]?.email} icon={MdEmail} size={23} />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      :
        <Spinner size='xl' />
      }
    </Flex>
  )
}

export default Details;