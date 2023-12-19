import { Radio, RadioChangeEvent, Space } from 'antd'
import React from 'react'

type PropsType = {
  options: string[]
}

const VoteContentCaption = ({ options }: PropsType) => {
  const [value, setValue] = React.useState(1)

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction='vertical'>
        {options.map(option => (
          <Radio key={option} value={option}>
            {option}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  )
}

export default VoteContentCaption
