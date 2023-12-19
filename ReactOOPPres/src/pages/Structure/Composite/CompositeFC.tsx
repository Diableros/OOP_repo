import { Button, Form, Space } from 'antd'
import CompositeComponent from './components/Composite'
import { mock } from './mock'
import React from 'react'
import { ValuesComposite } from '@/pages/Structure/Composite/type.ts'

const CompositeFC = () => {
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
          isComposite={mock.isComposite}
          childrenComponents={mock.childrenComponents}
          dropdown={mock.dropdown}
          onChangeValues={handleOnChangeValues}
        />
        <Button onClick={handleOnClick}>Отправить</Button>
        {valuesJSON}
      </Space>
    </Form>
  )
}

export default CompositeFC
