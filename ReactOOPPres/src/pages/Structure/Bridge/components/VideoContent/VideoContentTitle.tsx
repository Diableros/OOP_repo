import { Typography } from 'antd'

type PropsType = {
  title: string
}

const PostContentTitle = ({ title }: PropsType) => {
  return <Typography.Title level={3}>Видео: {title}</Typography.Title>
}

export default PostContentTitle
