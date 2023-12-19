import { Button, Form, Space } from 'antd'
import CompositeComponent from './components/CompositeClass'
import mock from './models/mock'
import { ValuesComposite } from '@/pages/Structure/Composite/type.ts'
import React from 'react'

const CompositeClassic = () => {
  const values = React.useRef<ValuesComposite>({})

  const [valuesJSON, setValuesJSON] = React.useState('')

  const handleOnChangeValues = (changesValues: ValuesComposite) => {
    values.current = changesValues
  }

  const handleOnClick = () => {
    setValuesJSON(JSON.stringify(values.current))
  }

  return (
    <Form layout='vertical'>
      <Space direction='vertical'>
        <CompositeComponent
          content={mock}
          onChangeValues={handleOnChangeValues}
        />
        <Button onClick={handleOnClick}>Отправить</Button>
        {valuesJSON}
      </Space>
    </Form>
  )
}

export default CompositeClassic
