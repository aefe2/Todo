<template>
  <li class="grid justify-items-center grid-cols-3 ml-3 overflow-hidden">
    <button @click="toggleCompletion">
      <span v-if="todo.completed" class="text-green-200">
        <img class="h-4" src="@/assets/img/icon-check.png" alt="Выполнено">
      </span>
      <span v-if="!todo.completed" class="text-red-200">
        <img class="h-4" src="@/assets/img/icon-unchek.png" alt="Не выполнено">
      </span>
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