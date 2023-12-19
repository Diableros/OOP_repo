import { List, Space } from 'antd'
import { ListNewsItemViewAbstractionProps } from './types'

const NewsDescriptiveListItemView = ({
  contentType
}: ListNewsItemViewAbstractionProps) => {
  const Title = contentType.renderTitle()
  const Caption = contentType.renderCaption()
  return (
    <List.Item>
      <Space direction='vertical'>
        <Title />
        <Caption />
      </Space>
    </List.Item>
  )
}

export default NewsDescriptiveListItemView
