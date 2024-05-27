<script setup lang="ts">
import { getTodos, addTodoItem } from './todo.service.ts'
import { ref, onMounted } from 'vue'
import { Todo } from './todo.model'

const todos = ref([])
const title = ref([])

onMounted(async () => {
  todos.value = (await getTodos()).slice(0, 10)
})

const getNewId = () => {
  if (todos.value.length < 1) return 1
  return todos.value.map((a) => a.id)[todos.value.length - 1] + 1
}

const onSubmit = async () => {
  if (title.value.trim().length < 1) {
    return
  }
  const todoItem: Todo = {
    userId: 11,
    id: getNewId(),
    title: title.value,
    completed: false
  }
  var newTodoItem = await addTodoItem(todoItem)
  if (newTodoItem) {
    todos.value.push(newTodoItem)
    title.value = ''
  }
}

const deleteTodoItem = (id: number) => {
  console.log(id)
}
</script>

<template>
  <h3>Todos</h3>

  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button>Add</button>
  </form>

  <ul>
    <li v-for="todoItem in todos" :key="todoItem.id">
      <input type="checkbox" :checked="todoItem.completed" />
      {{ todoItem.title }}
      <button type="button" @click="deleteTodoItem(todoItem.id)">X</button>
    </li>
  </ul>
</template>

<style scoped></style>
