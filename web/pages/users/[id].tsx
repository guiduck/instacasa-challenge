import { Box, Button, chakra, Flex, Image, Spinner, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../src/contexts/UserContext';
import { MdEmail, MdAccountCircle, MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { PhoneIcon } from '@chakra-ui/icons';
import InputCustom from '../../src/components/InputCustom/Index';

type User = {
  id?: string,
  _id?: string,
  name: string,
  email: string,
  username: string,
  phone: string
}

const Details: React.FC = () => {

  const { users, loading } = useUserContext()
  const router = useRouter()
  const [user, setUser] = useState<User>(null)

  const {
    query: { id },
  } = router

  useEffect(() => {
    if (users) {
      users.find(user => {(user.id == id) ? setUser(user) : console.log('no id found')})
    }
  }, [id]);

  const inputColor = useColorModeValue("gray.700", "gray.200")

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      {!loading && user ?
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
                color={inputColor}
              >
                <InputCustom value={user?.name} icon={MdOutlineFaceRetouchingNatural} size={25} />
              </Flex>

              <Flex
                alignItems="center"
                w={{base: 'full', lg: 'full', xl: '50%'}}
                mt={4}
                color={inputColor}
              >
                <InputCustom value={user?.phone} icon={PhoneIcon} size={16} />
              </Flex>
            </Flex>

            <Flex direction={{base:'column', lg: 'row', xl: 'row'}}>

              <Flex
                alignItems="center"
                w={{base: 'full', lg: 'full', xl: '50%'}}
                mt={4}
                color={inputColor}
              >
                <InputCustom value={user?.username} icon={MdAccountCircle} size={25} />
              </Flex>
              <Flex
                alignItems="center"
                w={{base: 'full', lg: 'full', xl: '50%'}}
                mt={4}
                color={inputColor}
              >
                <InputCustom value={user?.email} icon={MdEmail} size={23} />
              </Flex>
            </Flex>

            <Button variant="solid" mt={5} colorScheme="gray" p={-2} size="sm" onClick={() => router.back()}>
              <chakra.a  style={{textDecoration: 'none',}}>Voltar</chakra.a>
            </Button>
          </Flex>
        </Box>
      :
        <Spinner size='xl' />
      }
    </Flex>
  )
}

export default Details;