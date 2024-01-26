<template>
  <div class="text-center m-2">
    <input v-model="newTodoText" class="border rounded-3xl p-3 w-" placeholder="Купить хлеб..."/>
    <button @click="addTodo" class="-ml-20 text-cyan-400">Добавить</button>
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