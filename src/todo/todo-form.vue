<script setup>
import { ref } from 'vue'
const title = ref('')
const emit = defineEmits(['submit-todo'])

const onSubmit = () => {
  emit('submit-todo', title.value.trim())
  title.value = ''
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button>Add</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
}

input[type='text'] {
  font-size: 18px;
  width: 95%;
  padding: 8px 12px;
}

button {
  font-size: 18px;
  padding: 10px 12px;
  border: none;
  background-color: blueviolet;
  color: white;
}
</style>
