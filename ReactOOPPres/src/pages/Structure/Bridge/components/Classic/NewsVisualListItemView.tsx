import { List, Space } from 'antd'
import { ListNewsItemViewAbstractionProps } from './types'

const NewsVisualListItemView = ({
  contentType
}: ListNewsItemViewAbstractionProps) => {
  const Thumbnail = contentType.renderThumbnail()
  const Link = contentType.renderLink()

  return (
    <List.Item>
      <Space direction='vertical'>
        <Thumbnail />
        <Link />
      </Space>
    </List.Item>
  )
}

export default NewsVisualListItemView
