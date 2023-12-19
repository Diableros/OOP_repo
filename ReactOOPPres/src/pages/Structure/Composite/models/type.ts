import CompositeComponent from './CompositeComponent'
import { ValueLeaf, ValuesComposite } from '../type.ts'

export interface FormComponent {
  isHidden?: string
}

export interface LeafComponent extends FormComponent {
  name: string
}

export interface CompositePropsType {
  onChangeValue?: (value: ValueLeaf, name: string) => void
  onChangeValues?: (values: ValuesComposite) => void
  content: CompositeComponent
}
