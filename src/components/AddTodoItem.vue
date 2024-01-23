<template>
  <div>
    <input v-model="newTodo" class="border p-2" placeholder="Enter a new todo"/>
    <button @click="addTodo" class="bg-green-500 text-white p-2">Add Todo</button>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {useTodoStore} from "@/stores/todos";

export default defineComponent({
  setup() {
    const todoStore = useTodoStore()
    const newTodo = ref<string>('');

    const addTodo = () => {
      if (newTodo.value.trim() !== '') {
        todoStore.addTodo(newTodo.value)
        newTodo.value = ''
      }
    }

    return {
      newTodo,
      addTodo
    }
  }
})
</script>

<style scoped>

</style>