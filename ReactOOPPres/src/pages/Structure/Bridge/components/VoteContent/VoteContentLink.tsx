import { Typography } from 'antd'

type PropsType = {
  url: string
}

const VoteContentLink = ({ url }: PropsType) => {
  return <Typography.Link href={url}>Проголосовать</Typography.Link>
}

export default VoteContentLink
