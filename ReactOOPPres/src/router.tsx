import { RouteObject } from 'react-router-dom'
import Main from '@/pages/FactoryMethod'
import { Path } from '@/enum/path'
import AbstractFactory from '@/pages/AbstractFactory'
import { Prototype, PrototypeRegistry } from '@/pages/Prototype'
import { Singleton } from '@/pages/Singleton'
export const routes = (): RouteObject[] => {
  return [
    {
      element: <Main />,
      path: Path.FactoryMethod
    },
    {
      element: <AbstractFactory />,
      path: Path.AbstractFactory
    },
    {
      element: <Prototype />,
      path: Path.Prototype
    },
    {
      element: <PrototypeRegistry />,
      path: Path.PrototypeRegistry
    },
    {
      element: <Singleton />,
      path: Path.Singleton
    },
    {
      element: <h1>Not found</h1>,
      path: 'NotFound'
    }
  ]
}
