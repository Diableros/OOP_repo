import React, { useState } from 'react'
import { Button, List, Input, Checkbox, Space } from 'antd'
import { TodoItem, Command } from './types'
import {
  AddTodoCommand,
  DeleteTodoCommand,
  CompleteTodoCommand,
  UncompleteTodoCommand,
  TodoList
} from './models'

const todoList = new TodoList([])

const MainCommand = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [history, setHistory] = useState<Command[]>([])
  const [future, setFuture] = useState<Command[]>([])
  const [newTodoText, setNewTodoText] = useState('')

  const executeCommand = (command: Command) => {
    setHistory([...history, command])
    setFuture([])
    setTodos([...command.execute()])
  }

  const undo = () => {
    const command = history.pop()
    if (command) {
      setFuture([...future, command])
      setTodos([...command.undo()])
    }
  }

  const redo = () => {
    const command = future.pop()
    if (command) {
      setHistory([...history, command])
      setTodos([...command.execute()])
    }
  }

  const addNewTodo = () => {
    if (!newTodoText) return

    executeCommand(
      new AddTodoCommand(todoList, {
        id: Date.now(),
        text: newTodoText,
        isCompleted: false
      })
    )
    setNewTodoText('')
  }

  const onChangeCompleteCheckbox = (item: TodoItem) => () => {
    executeCommand(
      item.isCompleted
        ? new UncompleteTodoCommand(todoList, item.id)
        : new CompleteTodoCommand(todoList, item.id)
    )
  }

  const onDeleteTodo = (item: TodoItem) => () => {
    executeCommand(new DeleteTodoCommand(todoList, item.id))
  }

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Input
        placeholder='Add new todo'
        value={newTodoText}
        onChange={e => setNewTodoText(e.target.value)}
        onPressEnter={addNewTodo}
      />
      <Space>
        <Button onClick={addNewTodo} disabled={!newTodoText}>
          Add Todo
        </Button>
        <Button onClick={undo} disabled={history.length === 0}>
          Undo
        </Button>
        <Button onClick={redo} disabled={future.length === 0}>
          Redo
        </Button>
      </Space>

      <List
        dataSource={todos}
        renderItem={item => (
          <List.Item
            actions={[
              <Checkbox
                checked={item.isCompleted}
                onChange={onChangeCompleteCheckbox(item)}
              />,
              <Button onClick={onDeleteTodo(item)}>Delete</Button>
            ]}
          >
            {item.text}
          </List.Item>
        )}
      />
    </Space>
  )
}

export default MainCommand
