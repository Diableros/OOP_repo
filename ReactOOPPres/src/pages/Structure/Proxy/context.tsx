import React, { createContext, useContext, useState, ReactNode } from 'react'

interface UserRolesContextType {
  roles: string[]
  setRoles: (roles: string[] | ((prevRoles: string[]) => string[])) => void
}

const UserRolesContext = createContext<UserRolesContextType>({
  roles: [],
  setRoles: () => {}
})

export const useUserRoles = () => useContext(UserRolesContext)

interface UserRolesProviderProps {
  children: ReactNode
}

export const UserRolesProvider = ({ children }: UserRolesProviderProps) => {
  const [roles, setRoles] = useState<string[]>([])

  return (
    <UserRolesContext.Provider value={{ roles, setRoles }}>
      {children}
    </UserRolesContext.Provider>
  )
}
