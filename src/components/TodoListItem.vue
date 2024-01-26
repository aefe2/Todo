<template>
  <div>
    <ul>
      <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          :remove-todo="() => removeTodo(todo.id)"
          :toggle-completion="() => toggleCompletion(todo.id)"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useTodoStore} from "@/stores/todos";
import TodoItem from "@/components/TodoItem.vue";

export default defineComponent({
  components: {TodoItem},
  setup() {
    const todoStore = useTodoStore();

    return {
      todos: todoStore.todos,
      removeTodo: todoStore.removeTodo,
      toggleCompletion: todoStore.toggleCompletion,
    };
  },
});
</script>

<style scoped>

</style>