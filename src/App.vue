<template>
  <header>
    <HeaderItem></HeaderItem>
  </header>

  <main>
    <FiltersItem></FiltersItem>
    <TodoListItem></TodoListItem>
  </main>
  <FooterItem></FooterItem>
</template>

<script setup lang="ts">

import HeaderItem from "@/components/HeaderItem.vue";
import FiltersItem from "@/components/FiltersItem.vue";
import FooterItem from "@/components/FooterItem.vue";
import TodoListItem from "@/components/TodoListItem.vue";

</script>

<style scoped>

</style>
