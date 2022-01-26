import { createContext, useContext, useEffect, useState } from "react"
import useApi from '../hooks/useApi'

type User = {
  name: string,
  email: string,
  username: string,
  phone: string
}

type UserContextType = {
  users: User[],
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
      console.log(data)
    }

  }, [response]);


  return (
    <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)