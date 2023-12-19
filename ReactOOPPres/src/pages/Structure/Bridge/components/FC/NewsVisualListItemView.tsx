import { List, Space } from 'antd'
import React from 'react'

type PropsType = {
  thumbnail: React.ReactNode
  link: React.ReactNode
}

const NewsVisualListItemView = ({ thumbnail, link }: PropsType) => {
  return (
    <List.Item>
      <Space direction='vertical'>
        {thumbnail}
        {link}
      </Space>
    </List.Item>
  )
}

export default NewsVisualListItemView
