import { Box } from '@chakra-ui/react';
import React from 'react';
import UserForm from '../../src/components/UserForm';
import UserTable from '../../src/components/UserTable';
import { useUserContext } from '../../src/contexts/UserContext';

const users: React.FC = () => {

  const { isLocal } = useUserContext()

  return (
    <>
      <UserTable />
      <Box
        display={isLocal ? 'flex' : 'none'}
        justifyContent='center'
        w='full'
        h='full'
      >
        <UserForm />
      </Box>
    </>
  )
}

export default users;