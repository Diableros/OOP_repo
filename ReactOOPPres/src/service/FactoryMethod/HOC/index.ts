import React from 'react'

import UiButton1, { Props } from '@/UiKit1/UiButton'
import UiButton2 from '@/UiKit2/UiButton'
import { classHOC } from './HOC.tsx'

type Component<Props> = (props: Props) => React.ReactNode

type ButtonComponent = Component<Props>
interface Button extends Props {
  render(): ButtonComponent
}

class Button1 implements Button {
  render() {
    return classHOC(
      {
        onClick: this.onClick
      },
      UiButton1
    )
  }

  onClick() {
    alert('click1')
  }
}

class Button2 implements Button {
  render() {
    return classHOC(
      {
        onClick: this.onClick
      },
      UiButton2
    )
  }

  onClick() {
    alert('click2')
  }
}

abstract class ButtonFactory {
  abstract createButton(): Button
}

class Button1Factory extends ButtonFactory {
  createButton() {
    return new Button1()
  }
}

class Button2Factory extends ButtonFactory {
  createButton() {
    return new Button2()
  }
}

export default function createButton(version: string): ButtonComponent {
  switch (version) {
    case '1':
      return new Button1Factory().createButton().render()
    case '2':
      return new Button2Factory().createButton().render()
    default:
      throw new Error('Version is not supported')
  }
}
