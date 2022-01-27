import { createContext, useContext, useEffect, useState } from "react"
import useApi from '../hooks/useApi'

type User = {
  id: number,
  name: string,
  email: string,
  username: string,
  phone: string
}

type UserContextType = {
  users: User[],
  loading: boolean
}

export const UserContext = createContext({} as UserContextType)

export const UserProvider = ({ children }) => {

  const [users, setUsers] = useState([])

  const { response, loading, error } = useApi({
    method: "GET",
    url: `/users`,
    headers: {
      accept: '*/*'
    }
  })

  useEffect(() => {
    if (response) {
      const { data } = response
      setUsers(data)
    }

  }, [response]);

  return (
    <UserContext.Provider value={{ users, loading }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)