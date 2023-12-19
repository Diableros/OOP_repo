import { Avatar } from 'antd'

type PropsType = {
  imageUrl: string
}

const PostContentThumbnail = ({ imageUrl }: PropsType) => {
  return <Avatar size={128} src={<img src={imageUrl} alt='avatar' />} />
}

export default PostContentThumbnail
