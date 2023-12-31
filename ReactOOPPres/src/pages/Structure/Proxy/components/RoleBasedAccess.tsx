import React from 'react'
import { useUserRoles } from '../context'

type PropsType = {
  requiredRole: string
  children: React.ReactNode
  errorComponent?: React.ReactNode
}

const RoleBasedAccess = ({
  requiredRole,
  children,
  errorComponent
}: PropsType) => {
  const { roles } = useUserRoles()

  if (roles.includes(requiredRole)) {
    return children
  } else {
    return errorComponent ?? <div>У вас нет доступа к этому содержимому.</div>
  }
}

export default RoleBasedAccess
