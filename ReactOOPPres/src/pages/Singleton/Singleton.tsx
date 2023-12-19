import { Button, Form, Input, Space } from 'antd'
import Login from '@/pages/Singleton/components/Login.tsx'
import Reg from '@/pages/Singleton/components/Reg.tsx'
import Metric from '@/pages/Singleton/models/basic.ts'

const metric = Metric.getInstance()
const Singleton = () => {
  const [form] = Form.useForm()
  const onFinish = ({ url }: { url: string }) => {
    metric.changeUrl(url)
    form.resetFields()
  }

  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name='url'>
          <Input placeholder={'введите url'} />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit'>Изменить</Button>
        </Form.Item>
      </Form>
      <Space>
        <Login />
        <Reg />
      </Space>
    </>
  )
}
export default Singleton
