import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { CheckboxComponent } from '../type'
import { Checkbox as CheckboxAntd } from 'antd'

const Checkbox = ({ name, onChange = () => {} }: CheckboxComponent) => {
  const onChangeHandler = (event: CheckboxChangeEvent) => {
    onChange(event.target.checked)
  }

  return (
    <CheckboxAntd name={name} onChange={onChangeHandler}>
      {name}
    </CheckboxAntd>
  )
}
export default Checkbox
