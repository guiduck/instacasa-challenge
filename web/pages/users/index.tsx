import React from 'react';
import UserTable from '../../src/components/UserTable';
import { useUserContext } from '../../src/contexts/UserContext';

const users: React.FC = () => {

  const {users} = useUserContext()

  return (
    <>
      <UserTable users={users} />
    </>
  )
}

export default users;