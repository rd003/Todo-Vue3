<script setup>
import { getTodos } from './todo.service.ts'
import { ref, onMounted } from 'vue'

const todos = ref([])
const title = ref([])

onMounted(async () => {
  todos.value = (await getTodos()).slice(0, 10)
})

function onSubmit() {
  alert(title.value)
}
</script>

<template>
  <h3>Todos</h3>

  <form @submit="onSubmit">
    <input type="text" v-model="title" />
    <button>Add</button>
  </form>

  <ul>
    <li v-for="todoItem in todos" :key="todoItem.id">
      <input type="checkbox" :checked="todoItem.completed" />
      {{ todoItem.title }}
      <button type="button">X</button>
    </li>
  </ul>
</template>

<style scoped></style>
