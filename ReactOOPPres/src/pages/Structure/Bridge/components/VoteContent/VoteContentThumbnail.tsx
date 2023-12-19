import { Avatar } from 'antd'

type PropsType = {
  thumbnailUrl: string
}

const VoteContentThumbnail = ({ thumbnailUrl }: PropsType) => {
  console.log(thumbnailUrl)
  return (
    <Avatar
      shape='square'
      size={256}
      src={<img src={thumbnailUrl} alt='avatar' />}
    />
  )
}

export default VoteContentThumbnail
