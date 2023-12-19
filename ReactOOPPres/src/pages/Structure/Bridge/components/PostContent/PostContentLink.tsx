import { Typography } from 'antd'

type PropsType = {
  url: string
}

const PostContentLink = ({ url }: PropsType) => {
  return <Typography.Link href={url}>Читать все</Typography.Link>
}

export default PostContentLink
