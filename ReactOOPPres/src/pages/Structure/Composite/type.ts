export interface FormComponent {
  isComposite: boolean
  isHidden?: string
}

export interface LeafComponent extends FormComponent {
  isComposite: false
  content: TextComponent | InputComponent | RadioComponent | CheckboxComponent
}

export interface CompositeComponent extends FormComponent {
  isComposite: true
  dropdown: boolean
  titleDropdown?: string
  childrenComponents: (LeafComponent | CompositeComponent)[]
  onChangeValue?: (value: ValueLeaf, name: string) => void
  onChangeValues?: (values: ValuesComposite) => void
}

export type ValueLeaf = boolean | string

export type ValuesComposite = Record<string, ValueLeaf>

export type HiddenStates = Record<string, boolean>

export interface Leaf {
  onChange?: (value: ValueLeaf) => void
  type?: 'text' | 'input' | 'radio' | 'checkbox'
}

export interface TextComponent extends Leaf {
  type?: 'text'
  text: string
}

export interface InputComponent extends Leaf {
  name: string
  placeholder: string
  title?: string
  type?: 'input'
}

export interface RadioComponent extends Leaf {
  name: string
  options: string[]
  title?: string
  type?: 'radio'
}

export interface CheckboxComponent extends Leaf {
  type?: 'checkbox'
  name: string
}
