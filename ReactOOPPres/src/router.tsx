import { RouteObject } from 'react-router-dom'
import Main from '@/pages/Creational/FactoryMethod'
import { Path } from '@/enum/path'
import AbstractFactory from '@/pages/Creational/AbstractFactory'
import { Prototype, PrototypeRegistry } from '@/pages/Creational/Prototype'
import { Singleton } from '@/pages/Creational/Singleton'
import { Builder } from '@/pages/Creational/Builder'
import { AdapterFC, AdapterClassic } from '@/pages/Structure/Adapter'
import BridgeClassic from './pages/Structure/Bridge/BridgeClassic.tsx'
import BridgeFC from './pages/Structure/Bridge/BridgeFC.tsx'
export const routes = (): RouteObject[] => {
  return [
    {
      children: [
        {
          index: true,
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
          element: <Builder />,
          path: Path.Builder
        }
      ]
    },
    {
      children: [
        {
          index: true,
          element: <AdapterFC />,
          path: Path.AdapterFC
        },
        {
          element: <AdapterClassic />,
          path: Path.AdapterClassic
        },
        {
          element: <BridgeFC />,
          path: Path.BridgeFC
        },
        {
          element: <BridgeClassic />,
          path: Path.BridgeClassic
        }
      ]
    },
    {
      element: <h1>Not found</h1>,
      path: '*'
    }
  ]
}
