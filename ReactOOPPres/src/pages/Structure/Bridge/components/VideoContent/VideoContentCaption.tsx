import { Typography } from 'antd'

type PropsType = {
  description: string
}

const VideoContentCaption = ({ description }: PropsType) => {
  return <Typography.Text keyboard>{description}</Typography.Text>
}

export default VideoContentCaption
