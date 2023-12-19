import { List, Space } from 'antd'

import NewsVisualListItemView from './components/FC/NewsVisualListItemView'
import NewsDescriptiveListItemView from './components/FC/NewsDescriptiveListItemView'
import PostContentThumbnail from './components/PostContent/PostContentThumbnail'
import PostContentLink from './components/PostContent/PostContentLink'
import VideoContentThumbnail from './components/VideoContent/VideoContentThumbnail'
import VideoContentLink from './components/VideoContent/VideoContentLink'
import VoteContentThumbnail from './components/VoteContent/VoteContentThumbnail'
import PostContentCaption from './components/PostContent/PostContentCaption'
import PostContentTitle from './components/PostContent/PostContentTitle'
import VideoContentCaption from './components/VideoContent/VideoContentCaption'
import VideoContentTitle from './components/VideoContent/VideoContentTitle'
import VoteContentCaption from './components/VoteContent/VoteContentCaption'
import VoteContentTitle from './components/VoteContent/VoteContentTitle'
import VoteContentLink from './components/VoteContent/VoteContentLink'

import { content } from './mock.ts'

const BridgeFC = () => {
  return (
    <Space direction='vertical'>
      <List bordered itemLayout='horizontal'>
        {content.map(item => {
          switch (item.type) {
            case 'post':
              return (
                <NewsVisualListItemView
                  key={item.id}
                  thumbnail={<PostContentThumbnail imageUrl={item.imageURL} />}
                  link={<PostContentLink url={item.url} />}
                />
              )
            case 'video':
              return (
                <NewsVisualListItemView
                  key={item.id}
                  thumbnail={
                    <VideoContentThumbnail thumbnailUrl={item.thumbnailUrl} />
                  }
                  link={<VideoContentLink url={item.url} />}
                />
              )
            case 'vote':
              return (
                <NewsVisualListItemView
                  key={item.id}
                  thumbnail={
                    <VoteContentThumbnail thumbnailUrl={item.thumbnailUrl} />
                  }
                  link={<VoteContentLink url={item.url} />}
                />
              )
            default:
              return null
          }
        })}
      </List>
      <List bordered itemLayout='horizontal'>
        {content.map(item => {
          switch (item.type) {
            case 'post':
              return (
                <NewsDescriptiveListItemView
                  key={item.id}
                  caption={<PostContentCaption caption={item.caption} />}
                  title={<PostContentTitle title={item.title} />}
                />
              )
            case 'video':
              return (
                <NewsDescriptiveListItemView
                  key={item.id}
                  caption={
                    <VideoContentCaption description={item.description} />
                  }
                  title={<VideoContentTitle title={item.title} />}
                />
              )
            case 'vote':
              return (
                <NewsDescriptiveListItemView
                  key={item.id}
                  caption={<VoteContentCaption options={item.options} />}
                  title={<VoteContentTitle title={item.title} />}
                />
              )
            default:
              return null
          }
        })}
      </List>
    </Space>
  )
}

export default BridgeFC
