<script setup lang="ts">
import { getTodos, addTodoItem, updateTodoItem, deleteTodoItem } from './todo.service.ts'
import { ref, onMounted } from 'vue'
import type { Todo } from './todo.model'
import TodoForm from './todo-form.vue'
import TodoList from './todo-list.vue'

const todos = ref<Array<Todo>>([])

onMounted(async () => {
  try {
    todos.value = (await getTodos()).slice(0, 10)
  } catch (error) {
    console.log(error)
  }
})

const getNewId = () => {
  if (todos.value.length < 1) return 1
  return todos.value.map((a) => a.id)[todos.value.length - 1] + 1
}

const handleSubmitTodo = async (title: string) => {
  if (title.length < 1) {
    return
  }
  const todoItem: Todo = {
    userId: 11,
    id: getNewId(),
    title,
    completed: false
  }
  try {
    var newTodoItem = await addTodoItem(todoItem)
    if (newTodoItem) {
      // todos.value.push(newTodoItem)
      todos.value = [...todos.value, newTodoItem]
    }
  } catch (error) {
    console.log(error)
  }
}

const handleUpdateTodoItem = async (todo: Todo) => {
  try {
    await updateTodoItem(todo)
    todos.value = todos.value.map((t) => (t.id == todo.id ? todo : t))
  } catch (error) {
    console.error('Failed to update todo item:', error)
  }
}

const handleDeleteTodoItem = async (id: number) => {
  if (window.confirm('Are you sure to delete??')) {
    try {
      await deleteTodoItem(id)
      todos.value = todos.value.filter((t) => t.id !== id)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<template>
  <h1 style="text-align: center">Todos ✅</h1>
  <TodoForm @submit-todo="handleSubmitTodo" />

  <TodoList
    :todos="todos"
    @updateTodoItem="handleUpdateTodoItem"
    @deleteTodoItem="handleDeleteTodoItem"
  />
</template>

<style scoped></style>
