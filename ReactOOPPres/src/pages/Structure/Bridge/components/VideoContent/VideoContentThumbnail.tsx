import { Image } from 'antd'

type PropsType = {
  thumbnailUrl: string
}

const VideoContentThumbnail = ({ thumbnailUrl }: PropsType) => {
  return <Image width={200} src={thumbnailUrl} />
}

export default VideoContentThumbnail
