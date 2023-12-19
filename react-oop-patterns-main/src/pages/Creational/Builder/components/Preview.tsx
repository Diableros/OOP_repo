import { Question, QuestionType, Survey } from '../models/basic.ts'
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Typography
} from 'antd'

const { Title } = Typography

type PropsType = {
  survey: Survey
}
const Preview = ({ survey }: PropsType) => {
  const { questions, title } = survey

  const renderQuestion = ({ type, text, options }: Question, index: number) => {
    switch (type) {
      case QuestionType.Number:
        return (
          <Form.Item label={text} key={index}>
            <InputNumber />
          </Form.Item>
        )
      case QuestionType.Select:
        return (
          <Form.Item label={text} key={index}>
            <Select
              options={options?.map(value => ({ value, label: value }))}
            />
          </Form.Item>
        )
      case QuestionType.Text:
        return (
          <Form.Item label={text} key={index}>
            <Input />
          </Form.Item>
        )
      default:
        new Error('type is not supported')
    }
  }

  return (
    <Card title='Предпросмотр'>
      <Space direction='vertical'>
        <Title level={4}>{title}</Title>
        {questions.map(renderQuestion)}
        <Button>Отрпавить</Button>
      </Space>
    </Card>
  )
}

export default Preview
