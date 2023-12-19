import { Typography } from 'antd'

type PropsType = {
  caption: string
}

const PostContentCaption = ({ caption }: PropsType) => {
  return <Typography.Text>{caption}</Typography.Text>
}

export default PostContentCaption
