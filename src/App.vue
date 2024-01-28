<template>
  <HeaderItem></HeaderItem>
  <main>
    <AddTodoItem></AddTodoItem>
    <TodoListItem></TodoListItem>
  </main>
  <FooterItem></FooterItem>
</template>

<script setup lang="ts">

import HeaderItem from "@/components/HeaderItem.vue";
import FooterItem from "@/components/FooterItem.vue";
import TodoListItem from "@/components/TodoListItem.vue";
import AddTodoItem from "@/components/AddTodoItem.vue";

</script>

