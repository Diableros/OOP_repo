import UiButton1, { Props } from "@/UiKit1/UiButton"
import UiButton2 from "@/UiKit2/UiButton"

type Component<Props> = (props: Props) => React.ReactNode

type ButtonComponent = Component<Props>

interface Button {
  render(): ButtonComponent
}

class Button1 implements Button {
  render(){ return UiButton1 }
}

class Button2 implements Button {
  render(){ return UiButton2 }
}

abstract class ButtonFactory {
  abstract createButton(): Button
}

class Button1Factory extends ButtonFactory{
  createButton(){
    return new Button1()
  }
}

class Button2Factory extends ButtonFactory{
  createButton(){
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
      throw new Error("Version is not supported")
  }
}



