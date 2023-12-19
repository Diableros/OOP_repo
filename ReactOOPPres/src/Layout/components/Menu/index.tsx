import { Path } from '@/enum/path'
import {
  BankOutlined,
  TeamOutlined,
  ToolOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  BuildOutlined
} from '@ant-design/icons'
import { Menu as AntDMenu } from 'antd'
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom'
import { routes } from '@/router.tsx'

const Menu = () => {
  const navigate = useNavigate()
  const handleClick = ({ key }: { key: string }) => navigate(key)

  const location = useLocation()
  const [{ route }] = matchRoutes(routes(), location) as {
    route: { path: Path }
  }[]

  return (
    <AntDMenu
      theme='dark'
      mode='inline'
      defaultSelectedKeys={[route.path]}
      onClick={handleClick}
      items={[
        {
          key: Path.FactoryMethod,
          icon: <ToolOutlined />,
          label: 'Фабричный метод'
        },
        {
          key: Path.AbstractFactory,
          icon: <BankOutlined />,
          label: 'Абстрактная фабрика'
        },
        {
          key: Path.Prototype,
          icon: <TeamOutlined />,
          label: 'Прототип'
        },
        {
          key: Path.PrototypeRegistry,
          icon: <UsergroupAddOutlined />,
          label: 'Прототип (хранилище)'
        },
        {
          key: Path.Singleton,
          icon: <UserOutlined />,
          label: 'Одиночка'
        },
        {
          key: Path.Builder,
          icon: <BuildOutlined />,
          label: 'Строитель'
        }
      ]}
    />
  )
}

export default Menu
