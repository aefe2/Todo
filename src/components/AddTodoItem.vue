<template>
  <div class="text-center m-2">
    <div v-if="formVisible">
      <button class="text-cyan-100 mr-5 text-base" @click="closeForm">X</button>
      <input @keyup.enter="addTodo" ref="input" v-model="newTodoText" class="text-neutral-600 border rounded-l-lg p-3" placeholder="Купить хлеб..."/>
      <button @click="addTodo(); this.$refs.input.focus()" class="bg-cyan-500 hover:bg-cyan-800 hover:text-neutral-300 duration-200 active:border-0 text-neutral-800 rounded-r-lg p-2 h-12">Добавить</button>
    </div>
    <div v-if="!formVisible">
      <button @click="showForm" class="text-lg text-cyan-100">+</button>
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
