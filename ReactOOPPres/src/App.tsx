import { useRoutes } from 'react-router-dom'
import { routes } from './router'
import MainLayout from '@/Layout/MainLayout.tsx'

function App() {
  const element = useRoutes(routes())

  return <MainLayout>{element}</MainLayout>
}

export default App
