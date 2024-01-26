<template>
  <li>
    <span :class="{'line-through' : todo.completed}">{{ todo.text }}</span>
    <button @click="toggleCompletion">Выполненно</button>
    <button @click="removeTodo">Удалить</button>
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