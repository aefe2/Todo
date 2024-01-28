<template>
  <div class="p-2 rounded-xl">
    <ul class="p-1 divide-slate-200">
      <li v-if="todoStore.todos.length === 0">
        Пока пусто...
      </li>
      <TodoItem
          class="bg-neutral-700 rounded-lg m-2 flex py-2"
          v-for="todo in todoStore.todos"
          :key="todo.id"
          :todo="todo"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useTodoStore} from "@/stores/todos";
import TodoItem from "@/components/TodoItem.vue";

const todoStore = useTodoStore();
</script>
