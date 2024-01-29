<template>
  <div class="text-center m-2">
    <div v-if="!formVisible" class="text-center">
      <button @click="showForm" class="text-lg text-sky-700">+</button>
    </div>
    <div v-if="formVisible" class="grid grid-rows-3 justify-items-center">
      <div>
        <button class="text-sky-700 text-base" @click="closeForm">X</button>
      </div>
      <input @keyup.enter="addTodo" ref="input" v-model="newTodoText" class="text-neutral-600 border rounded-lg p-2 mb-2 w-2/4" placeholder="Купить хлеб..."/>
      <button @click="addTodo(); this.$refs.input.focus()" class="bg-sky-500 hover:bg-sky-700 text-white rounded-lg p-1 w-1/4 h-4/5">Добавить</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {useTodoStore} from "@/stores/todos";

interface State {
  formVisible: boolean,
}

export default defineComponent({
  data(): State {
    return {
      formVisible: true,
    }
  },
  methods: {
    showForm() {
      this.formVisible = true
    },
    closeForm() {
      this.formVisible = false
    }
  },
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
      addTodo,
    }
  }
})
</script>
