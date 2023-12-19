import UiButton1, {Props as PropsButton1} from "@/UiKit1/UiButton";
import UiButton2, {Props as PropsButton2} from "@/UiKit2/UiButton";

import UiCheckbox1, {Props as PropsCheckbox} from "@/UiKit1/UiCheckbox";
import UiCheckbox2 from "@/UiKit2/UiCheckbox";
import React from "react";

type Component<Props> = (props: Props) => React.ReactNode

type ButtonComponent = Component<PropsButton2 & PropsButton1>

type CheckboxComponent = Component<PropsCheckbox>

interface Button {
  render(): ButtonComponent
}

interface Checkbox {
  render(): CheckboxComponent
}

class Button1 implements Button {
  render(){ return UiButton1 }
}

class Button2 implements Button {
  render(){ return UiButton2 }
}

class Checkbox1 implements Checkbox {
  render(){ return UiCheckbox1 }
}

class Checkbox2 implements Checkbox {
  render(){ return UiCheckbox2 }
}

abstract class UiKitFactory {
  abstract createButton(): Button
  abstract createCheckbox(): Checkbox
}


class UiKit1Factory extends UiKitFactory{
  createButton(){
    return new Button1()
  }

  createCheckbox(){
    return new Checkbox1()
  }
}


class UiKit2Factory extends UiKitFactory{
  createButton(){
    return new Button2()
  }

  createCheckbox(){
    return new Checkbox2()
  }
}

export default function createUiKit(version: string): UiKitFactory {
  switch (version) {
    case '1':
      return new UiKit1Factory()
    case '2':
      return new UiKit2Factory()
    default:
      throw new Error("Version is not supported")
  }
}


