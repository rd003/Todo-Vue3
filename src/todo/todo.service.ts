import type { Todo } from './todo.model'

const url = `${import.meta.env.VITE_API_BASE_URL}/todos`

const getTodos = async () => {
  try {
    const res = await fetch(url)
    const todos: Array<Todo> = await res.json()
    return todos
  } catch (error) {
    console.log(error)
  }
}

const addTodoItem = async (todoItem: Todo) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todoItem)
    })
    const newTodo = await res.json()
    return newTodo
  } catch (error) {
    console.log(error)
  }
}

const updateTodoItem = async (todo: Todo) => {
  try {
    const res = await fetch(`${url}/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
  } catch (error) {
    console.log(error)
  }
}

const deleteTodoItem = async (id: number) => {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.log(error)
  }
}

export { getTodos, addTodoItem, updateTodoItem, deleteTodoItem }
