import {
  emailValidatorChain,
  usernameValidatorChain,
  passwordValidatorChain
} from './validatorChains'
import { Button, Form, Input, message } from 'antd'
import React from 'react'

const ChainsOfResponsibility = () => {
  const [email, setEmail] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = () => {
    const emailResult = emailValidatorChain.validate(email)
    const usernameResult = usernameValidatorChain.validate(username)
    const passwordResult = passwordValidatorChain.validate(password)

    let allIsPassed = true

    if (emailResult) {
      message.error(`Email Error: ${emailResult}`)
      allIsPassed = false
    }

    if (usernameResult) {
      message.error(`Username Error: ${usernameResult}`)
      allIsPassed = false
    }

    if (passwordResult) {
      message.error(`Password Error: ${passwordResult}`)
      allIsPassed = false
    }

    if (allIsPassed) {
      message.success('All validations passed!')
    }
  }

  return (
    <Form layout='vertical' onFinish={handleSubmit}>
      <Form.Item label='Email'>
        <Input value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item label='Username'>
        <Input value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item label='Password'>
        <Input.Password
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ChainsOfResponsibility
