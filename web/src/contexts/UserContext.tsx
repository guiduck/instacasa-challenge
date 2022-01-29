import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import useApi from '../hooks/useApi'
import { api, isLocal } from "../services/api"

type User = {
  _id?: string,
  id?: string,
  name: string,
  email: string,
  username: string,
  phone: string
}

type NewUser = {
  name: string,
  email: string,
  username: string,
  phone: string
}

type UserContextType = {
  users: User[],
  loading: boolean,
  addUser: (name: string, email: string, username: string, phone: string) => Promise<void>,
  deleteUser: (id: string) => Promise<void>,
  isLocal: boolean,
  setNewUser: Dispatch<SetStateAction<NewUser>>
  setDeletedId: Dispatch<SetStateAction<string[]>>,
  newUser: NewUser,
  setUsers: Dispatch<SetStateAction<User[]>>,
  deletedId: string[]
}

export const UserContext = createContext({} as UserContextType)

export const UserProvider = ({ children }) => {

  const { response, loading, error } = useApi({
    method: "GET",
    url: `/users`,
    headers: {
      accept: '*/*'
    }
  })

  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    username: '',
    phone: ''
  })
  const [deletedId, setDeletedId] = useState([''])

  const addUser = async (name: string, email: string, username: string, phone: string) => {
    try {
      await api.post('/users', {
        name: name,
        email: email,
        username: username,
        phone: phone
      })
    } catch (e) {
      console.log(e.message)
    }
  }

  const deleteUser = async (id: string) => {
    try {
      await api.delete(`/users/${id}`)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    if (response) {
      const { data } = response
      setUsers(data)
      console.log(response.data)
    }
  }, [response]);

  return (
    <UserContext.Provider value={{
      users,
      loading,
      addUser,
      isLocal,
      deleteUser,
      setNewUser,
      setDeletedId,
      newUser,
      setUsers,
      deletedId
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)