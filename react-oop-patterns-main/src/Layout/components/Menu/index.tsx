import { Path } from '@/enum/path'
import { Menu as AntDMenu } from 'antd'
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom'
import { routes } from '@/router.tsx'
import { MENU_ITEMS } from '@/Layout/components/Menu/items.tsx'

const Menu = () => {
  const navigate = useNavigate()
  const handleClick = ({ key }: { key: string }) => navigate(key)

  const location = useLocation()
  const [, { route }] = matchRoutes(routes(), location) as {
    route: { path: Path }
  }[]

  return (
    <AntDMenu
      theme='dark'
      mode='inline'
      defaultSelectedKeys={[route.path]}
      defaultOpenKeys={[route.path.split('/')[0]]}
      onClick={handleClick}
      items={MENU_ITEMS}
    />
  )
}

export default Menu
