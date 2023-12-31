import React from 'react'
import { useUserRoles } from '../context'
import { Checkbox } from 'antd'

const AdminToggle = () => {
  const { roles, setRoles } = useUserRoles()

  const isAdmin = roles.includes('admin')

  const toggleAdminRole = () => {
    setRoles(prevRoles =>
      isAdmin
        ? prevRoles.filter(role => role !== 'admin')
        : [...prevRoles, 'admin']
    )
  }

  return (
    <label>
      <Checkbox type='checkbox' checked={isAdmin} onChange={toggleAdminRole}>
        Стать админом
      </Checkbox>
    </label>
  )
}

export default AdminToggle
