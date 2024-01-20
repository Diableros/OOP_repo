import { Command, TodoItem } from './types'

export class TodoList {
  private todos: TodoItem[]

  constructor(todos: TodoItem[]) {
    this.todos = [...todos]
  }

  getTodos() {
    return this.todos
  }

  add(todo: TodoItem) {
    this.todos.push(todo)
  }

  delete(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  complete(id: number) {
    const todo = this.todos.find(todo => todo.id === id)
    if (todo) todo.isCompleted = true
  }

  uncomplete(id: number) {
    const todo = this.todos.find(todo => todo.id === id)
    if (todo) todo.isCompleted = false
  }
}

export class AddTodoCommand implements Command {
  private todoList: TodoList
  private newTodo: TodoItem

  constructor(todoList: TodoList, newTodo: TodoItem) {
    this.todoList = todoList
    this.newTodo = newTodo
  }

  execute() {
    this.todoList.add(this.newTodo)
    return this.todoList.getTodos()
  }

  undo() {
    this.todoList.delete(this.newTodo.id)
    return this.todoList.getTodos()
  }
}

export class DeleteTodoCommand implements Command {
  private todoList: TodoList
  private id: number
  private deletedTodo: TodoItem | null

  constructor(todoList: TodoList, id: number) {
    this.todoList = todoList
    this.id = id
    this.deletedTodo =
      this.todoList.getTodos().find(todo => todo.id === id) || null
  }

  execute() {
    this.todoList.delete(this.id)
    return this.todoList.getTodos()
  }

  undo() {
    if (this.deletedTodo) {
      this.todoList.add(this.deletedTodo)
    }
    return this.todoList.getTodos()
  }
}

export class CompleteTodoCommand implements Command {
  private todoList: TodoList
  private id: number

  constructor(todoList: TodoList, id: number) {
    this.todoList = todoList
    this.id = id
  }

  execute() {
    this.todoList.complete(this.id)
    return this.todoList.getTodos()
  }

  undo() {
    this.todoList.uncomplete(this.id)
    return this.todoList.getTodos()
  }
}

export class UncompleteTodoCommand implements Command {
  private readonly todoList: TodoList
  private readonly id: number

  constructor(todoList: TodoList, id: number) {
    this.todoList = todoList
    this.id = id
  }

  execute() {
    this.todoList.uncomplete(this.id)
    return this.todoList.getTodos()
  }

  undo() {
    this.todoList.complete(this.id)
    return this.todoList.getTodos()
  }
}
