<template>
  <header>
    <HeaderItem></HeaderItem>
  </header>

  <main>
    <TodoListItem></TodoListItem>
    <AddTodoItem></AddTodoItem>
  </main>
  <FooterItem></FooterItem>
</template>

<script setup lang="ts">

import HeaderItem from "@/components/HeaderItem.vue";
import FooterItem from "@/components/FooterItem.vue";
import TodoListItem from "@/components/TodoListItem.vue";
import AddTodoItem from "@/components/AddTodoItem.vue";

</script>

<style scoped>

</style>
