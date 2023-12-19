import {
  Button,
  Card,
  Form,
  Input,
  List,
  Radio,
  RadioChangeEvent,
  Space,
  Typography
} from 'antd'
import React from 'react'
import {
  Question,
  QuestionType,
  Survey,
  SurveyBuilder
} from './models/basic.ts'
import Preview from './components/Preview.tsx'
import { DeleteOutlined } from '@ant-design/icons'

const Builder = () => {
  const [title, setTitle] = React.useState<string>('')
  const [questionText, setQuestionText] = React.useState('')
  const [questionType, setQuestionType] = React.useState<QuestionType>(
    QuestionType.Text
  )
  const [questions, setQuestions] = React.useState<Question[]>([])
  const [options, setOptions] = React.useState<string[]>(['', ''])
  const [survey, setSurvey] = React.useState<Survey>(new Survey())

  const addQuestion = () => {
    setQuestions(questions => [
      ...questions,
      {
        text: questionText,
        type: questionType,
        options: questionType === QuestionType.Select ? [...options] : []
      }
    ])
    setQuestionText('')
    setQuestionType(QuestionType.Text)
    if (options.length) setOptions(['', ''])
  }

  const addOption = () => {
    setOptions([...options, ''])
  }
  const onChangeTitle = ({
    currentTarget
  }: React.FormEvent<HTMLInputElement>) => {
    setTitle(currentTarget.value)
  }

  const onChangeQuestionText = ({
    currentTarget
  }: React.FormEvent<HTMLInputElement>) => {
    setQuestionText(currentTarget.value)
  }

  const onChangeQuestionType = (e: RadioChangeEvent) => {
    setQuestionType(e.target.value)
  }

  const onChangeOption = (
    { currentTarget }: React.FormEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = currentTarget
    setOptions(options.map((option, i) => (i === index ? value : option)))
  }

  const removeQuestion = (index: number) => {
    setQuestions(questions => questions.filter((_question, id) => id !== index))
  }

  const save = () => {
    const surveyBuilder = new SurveyBuilder()
    surveyBuilder.setTitle(title)
    questions.forEach(({ text, type, options }) => {
      switch (type) {
        case QuestionType.Text:
          surveyBuilder.addTextQuestion(text)
          break
        case QuestionType.Number:
          surveyBuilder.addNumberQuestion(text)
          break
        case QuestionType.Select:
          surveyBuilder.addSelectQuestion(text, options)
          break
        default:
          throw new Error('type question is not supported')
      }
    })
    setSurvey(surveyBuilder.getResult())
  }

  return (
    <Space direction='vertical'>
      <Form.Item label='Введите заголовок анкеты'>
        <Input
          value={title}
          onInput={onChangeTitle}
          placeholder={'Введите заголовок анкеты'}
        />
      </Form.Item>

      {questions.length ? (
        <List
          bordered
          dataSource={questions}
          renderItem={({ text, options }, index) => (
            <List.Item>
              <Space direction='vertical'>
                <Typography.Text>{text}</Typography.Text>
                <Typography.Text>
                  {options?.length ? `Варианты: ${options.join(', ')}` : ''}
                </Typography.Text>
              </Space>

              <DeleteOutlined onClick={() => removeQuestion(index)} />
            </List.Item>
          )}
        />
      ) : null}

      <Card>
        <Space direction='vertical'>
          <Form.Item label='Введите вопрос'>
            <Input
              value={questionText}
              onInput={onChangeQuestionText}
              placeholder={'Введите вопрос'}
            />
          </Form.Item>

          {questionType === QuestionType.Select ? (
            <Space direction='vertical'>
              {options.map((option, index) => (
                <Form.Item label={`Вариант ответа #${index + 1}`} key={index}>
                  <Input
                    value={option}
                    onInput={event => onChangeOption(event, index)}
                    placeholder={'Введите вариант ответа'}
                  />
                </Form.Item>
              ))}

              <Button onClick={addOption}>Добавить вариант ответа</Button>
            </Space>
          ) : null}
          <Form.Item label='Выберите тип вопроса'>
            <Radio.Group
              onChange={onChangeQuestionType}
              name='questionType'
              value={questionType}
            >
              <Radio value={QuestionType.Text}>Текст</Radio>
              <Radio value={QuestionType.Number}>Число</Radio>
              <Radio value={QuestionType.Select}>Список</Radio>
            </Radio.Group>
          </Form.Item>

          <Button onClick={addQuestion}>Добавить вопрос</Button>
        </Space>
      </Card>

      <Button onClick={save}>Cохранить</Button>

      {survey.questions.length ? <Preview survey={survey} /> : null}
    </Space>
  )
}
export default Builder
