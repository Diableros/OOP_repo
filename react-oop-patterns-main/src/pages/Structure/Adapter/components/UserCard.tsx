import { Card, Avatar, Descriptions } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { User1 } from '../types.ts'

const UserCard = ({
  avatarUrl,
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  birthdate,
  company
}: User1) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<Avatar size={64} icon={<UserOutlined />} src={avatarUrl} />}
    >
      <Descriptions title={`${firstName} ${lastName}`} column={1}>
        <Descriptions.Item label='Email'>{email}</Descriptions.Item>
        <Descriptions.Item label='Phone'>{phoneNumber}</Descriptions.Item>
        <Descriptions.Item label='Birthdate'>
          {birthdate.toLocaleDateString()}
        </Descriptions.Item>
        <Descriptions.Item label='Address'>{`${address.street}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}`}</Descriptions.Item>
        {company && (
          <Descriptions.Item label='Company'>{company.name}</Descriptions.Item>
        )}
      </Descriptions>
    </Card>
  )
}

export default UserCard
