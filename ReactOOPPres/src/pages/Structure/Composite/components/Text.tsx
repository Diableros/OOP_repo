import { TextComponent } from '../type.ts'
import { Typography } from 'antd'

const Text = ({ text }: TextComponent) => {
  return <Typography.Title level={4}>{text}</Typography.Title>
}
export default Text
