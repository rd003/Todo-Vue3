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

export { getTodos }
