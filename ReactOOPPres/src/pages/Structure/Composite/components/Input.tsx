import { InputComponent } from '../type'
import { Input as InputAntd } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import React from 'react'

const Input = ({
  title,
  placeholder,
  name,
  onChange = () => {}
}: InputComponent) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <FormItem label={title}>
      <InputAntd
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </FormItem>
  )
}
export default Input
