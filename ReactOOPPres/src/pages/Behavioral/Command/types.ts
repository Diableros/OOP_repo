import { TodoList } from './models'

export interface TodoItem {
  id: number
  text: string
  isCompleted: boolean
}

export interface Command {
  readonly todoList: TodoList
  execute(): TodoItem[]
  undo(): TodoItem[]
}
