<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)" class="ml-2 text-red-500">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useTodoStore} from "@/stores/todos";

export default defineComponent({
  setup() {
    const todoStore = useTodoStore()
    return {
      todos: todoStore.todos,
      removeTodo: todoStore.removeTodo
    }
  }
})
</script>

<style scoped>

</style>