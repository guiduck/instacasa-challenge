import React from 'react';
import { useForm } from 'react-hook-form';
import Router from 'next/router'
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  FormErrorMessage,
  FormControl
} from '@chakra-ui/react';
import { useUserContext } from '../../contexts/UserContext';

type User = {
  name: string,
  email: string,
  username: string,
  phone: string
}

const UserForm: React.FC = () => {

  const formBackground = useColorModeValue('gray.300', 'gray.700');
  const { addUser, setNewUser } = useUserContext();

  const { register, handleSubmit, formState: { errors } }: any = useForm<User>();

  const addUserHandler = async (data: User) => {
    await addUser(data.name, data.email, data.username, data.phone)
    setNewUser({
      name: data.name,
      email: data.email,
      username: data.username,
      phone: data.phone
    })
    Router.reload()
  }

  return (
      <Flex
        direction='column'
        height='405px'
        background={formBackground}
        p={12}
        w='full'
        justifyContent='center'
      >
        <Heading textAlign='center' mb={6}>
          Add new User
        </Heading>
        <form onSubmit={handleSubmit(addUserHandler)}>
          <Flex direction={{base: 'column', '2xl': 'row'}} w='full' gap={3}>
            <Flex w='full' direction={{base: 'column', xl: 'row' }} gap={3}>
              <Flex w='full'>
                <FormControl isInvalid={errors.name && errors.name.type === 'required'}>
                  <Input
                    {...register('name', { required: true })}
                    name='name'
                    placeholder='name'
                    variant='filled'
                    type='text'
                  />
                  <FormErrorMessage>name is required</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex w='full'>
                <FormControl isInvalid={errors.email && errors.email.type === 'required'}>
                  <Input
                    {...register('email', { required: true })}
                    name='email'
                    placeholder='email'
                    variant='filled'
                    type='text'
                  />
                  <FormErrorMessage>email is required</FormErrorMessage>
                </FormControl>
              </Flex>
            </Flex>

            <Flex w='full' direction={{base: 'column', xl: 'row' }} gap={3}>
              <Flex w='full'>
                <FormControl  isInvalid={errors.username && errors.username.type === 'required'}>
                  <Input
                    {...register('username', { required: true })}
                    name='username'
                    placeholder='username'
                    variant='filled'
                    type='text'
                  />
                  <FormErrorMessage>username is required</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex w='full'>
                <FormControl  isInvalid={errors.phone && errors.phone.type === 'required'}>
                  <Input
                    {...register('phone', { required: true })}
                    name='phone'
                    placeholder='55 (61) 9999-9999'
                    variant='filled'
                    type='text'
                  />
                  <FormErrorMessage>phone is required</FormErrorMessage>
                </FormControl>
              </Flex>
            </Flex>
          </Flex>

          <Flex justifyContent='center' mt={5} >
            <Button type='submit' colorScheme={useColorModeValue('red', 'gray')} ><a>Adicionar</a></Button>
          </Flex>
        </form>
        {/* <Flex>{JSON.stringify(user)}</Flex> */}
      </Flex>
  )
}

export default UserForm;