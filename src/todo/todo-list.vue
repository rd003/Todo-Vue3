<script setup lang="ts">
import type { Todo } from './todo.model'

const props = defineProps<{ todos: Array<Todo> }>()
const emit = defineEmits<{
  deleteTodoItem: number
  updateTodoItem: Todo
}>()

function onUpdateTodo(todo: Todo) {
  emit('updateTodoItem', { ...todo, completed: !todo.completed })
}

function onDeleteTodo(id: number) {
  emit('deleteTodoItem', id)
}
</script>
<template>
  <ul>
    <li v-for="todoItem in props.todos" :key="todoItem.id">
      <input type="checkbox" :checked="todoItem.completed" @click="onUpdateTodo(todoItem)" />
      <span :class="{ checked: todoItem.completed }">{{ todoItem.title }}</span>
      <button type="button" @click="onDeleteTodo(todoItem.id)">X</button>
    </li>
  </ul>
</template>

<style scoped>
li {
  font-size: 18px;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 0px;
}

.checked {
  text-decoration: line-through;
}

button {
  padding: 3px 5px;
  border: none;
  background-color: rgb(218, 10, 10);
  color: white;
}
</style>
