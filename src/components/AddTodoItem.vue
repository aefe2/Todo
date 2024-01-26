<template>
  <div>
    <input v-model="newTodoText" class="border p-2" placeholder="Enter a new todo"/>
    <button @click="addTodo" class="bg-green-500 text-white p-2">Add Todo</button>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {useTodoStore} from "@/stores/todos";

export default defineComponent({
  setup() {
    const todoStore = useTodoStore()
    const newTodoText = ref<string>('')

    const addTodo = () => {
      if (newTodoText.value.trim() !== '') {
        todoStore.addTodo({
          id: new Date().getTime(),
          text: newTodoText.value,
          completed: false
        })
        newTodoText.value = ''
      }
    }
    return {
      newTodoText,
      addTodo
    }
  }
})
</script>

<style scoped>

</style>