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
