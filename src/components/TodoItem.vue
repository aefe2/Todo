<template>
  <li class="grid grid-cols-3">
    <button @click="toggleCompletion">
      <span v-if="todo.completed" class="bg-green-500"></span>
      <span v-if="!todo.completed" class="bg-red-500"></span>
    </button>
    <span :class="{'line-through' : todo.completed}">{{ todo.text }}</span>
    <button @click="removeTodo" class="text-red-500">X</button>
  </li>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    todo: {
      type: Object,
      required: true
    },
    removeTodo: {
      type: Function as () => void,
      required: true
    },
    toggleCompletion: {
      type: Function as () => void,
      required: true
    }
  },
})
</script>

<style scoped>

</style>