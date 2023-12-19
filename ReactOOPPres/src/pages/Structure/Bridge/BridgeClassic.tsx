import { content } from './models/mock.ts'
import { List, Space } from 'antd'

import NewsVisualListItemView from './components/Classic/NewsVisualListItemView'
import NewsDescriptiveListItemView from './components/Classic/NewsDescriptiveListItemView'

const BridgeClassic = () => {
  return (
    <Space direction='vertical'>
      <List bordered itemLayout='horizontal'>
        {content.map(item => (
          <NewsVisualListItemView contentType={item} key={item.id} />
        ))}
      </List>
      <List bordered itemLayout='horizontal'>
        {content.map(item => (
          <NewsDescriptiveListItemView contentType={item} key={item.id} />
        ))}
      </List>
    </Space>
  )
}

export default BridgeClassic
