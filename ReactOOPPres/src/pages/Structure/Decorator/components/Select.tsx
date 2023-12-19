import { Form, Select as SelectAnt } from 'antd'
import { SelectComponent } from '../type'

const Select: SelectComponent = ({
  label = 'Не выбран label',
  options = [{ value: 'нет опций' }]
}) => {
  return (
    <Form.Item label={label}>
      <SelectAnt options={options?.map(value => ({ value, label: value }))} />
    </Form.Item>
  )
}

export default Select
