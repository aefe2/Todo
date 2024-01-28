<template>
  <li class="grid justify-items-center grid-cols-3 ml-3 overflow-hidden">
    <button @click="todoStore.toggleCompletion(todo.id)">
      <span v-if="todo.completed" class="text-green-200">
        <img class="h-4" src="@/assets/img/icon-check.png" alt="Выполнено">
      </span>
      <span v-if="!todo.completed" class="text-red-200">
        <img class="h-4" src="@/assets/img/icon-unchek.png" alt="Не выполнено">
      </span>
    </button>
    <span :class="{'line-through' : todo.completed}">{{ props.todo.text }}</span>
    <button @click="todoStore.removeTodo(todo.id)" class="text-red-500">X</button>
  </li>
</template>

<script setup lang="ts">
import {useTodoStore} from "@/stores/todos";

const todoStore = useTodoStore();
const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})
//туду как дата, надо компутед
//убрать функции из пропс
//
//
//
//
</script>

<style scoped>

</style>