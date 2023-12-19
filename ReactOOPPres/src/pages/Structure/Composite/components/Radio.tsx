import { RadioComponent } from '../type'
import { Form, Radio as RadioAntd, RadioChangeEvent, Space } from 'antd'

import React from 'react'

const Radio = ({
  name,
  title,
  options,
  onChange = () => null
}: RadioComponent) => {
  const [value, setValue] = React.useState(1)

  const handleOnChange = (e: RadioChangeEvent) => {
    const value = e.target.value
    setValue(e.target.value)
    onChange(value)
  }

  return (
    <Form.Item label={title} name={name}>
      <RadioAntd.Group onChange={handleOnChange} value={value}>
        <Space direction='vertical'>
          {options.map(option => (
            <RadioAntd key={option} value={option}>
              {option}
            </RadioAntd>
          ))}
        </Space>
      </RadioAntd.Group>
    </Form.Item>
  )
}
export default Radio
