import { List, Space } from 'antd'
import React from 'react'

type PropsType = {
  title: React.ReactNode
  caption: React.ReactNode
}

const NewsDescriptiveListItemView = ({ title, caption }: PropsType) => {
  return (
    <List.Item>
      <Space direction='vertical'>
        {title}
        {caption}
      </Space>
    </List.Item>
  )
}

export default NewsDescriptiveListItemView
