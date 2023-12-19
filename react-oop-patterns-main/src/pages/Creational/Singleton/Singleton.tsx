import { Button, Form, Input, Space } from 'antd'
import Login from './components/Login.tsx'
import Reg from './components/Reg.tsx'
import Metric from './models/basic.ts'

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
