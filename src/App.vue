<style>
.ctr {
  padding: 20px;
  font-size: 16px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>

<script setup lang="ts">
import { computed, ref, reactive, watch } from 'vue'
import Todo from './todo/todo.vue'
</script>

<template>
  <div class="ctr">
    <router-view></router-view>
  </div>
</template>
