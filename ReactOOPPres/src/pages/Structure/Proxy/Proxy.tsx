import RoleBasedAccess from './components/RoleBasedAccess'
import { UserRolesProvider } from './context'
import AdminToggle from './components/AdminToggle'
import { Space } from 'antd'

const Proxy = () => {
  return (
    <UserRolesProvider>
      <h1>Добро пожаловать в приложение!</h1>
      <Space direction='vertical'>
        <AdminToggle />
        <RoleBasedAccess requiredRole='admin'>
          <p>Этот контент доступен только для администраторов.</p>
        </RoleBasedAccess>
      </Space>
    </UserRolesProvider>
  )
}

export default Proxy
