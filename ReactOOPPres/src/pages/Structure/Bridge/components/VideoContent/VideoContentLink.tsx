import { Typography } from 'antd'

type PropsType = {
  url: string
}

const VideoContentLink = ({ url }: PropsType) => {
  return <Typography.Link href={url}>Смотреть</Typography.Link>
}

export default VideoContentLink
