import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './router'
import MainLayout from '@/Layout/MainLayout.tsx'

function App() {
  const element = useRoutes(routes())

  return (
    <MainLayout>
      <React.Suspense fallback={<div>Loading...</div>}>
        {element}
      </React.Suspense>
    </MainLayout>
  )
}

export default App
