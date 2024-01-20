<script setup lang="ts">
  import {useCounterStore} from "@/stores/counter";
  const counter = useCounterStore()
</script>

<template>
<div>
  <p>{{ counter.count }}</p>
  <button @click="counter.increment()">increment</button>
  <button @click="counter.decrement()">decrement</button>
</div>
</template>

<style scoped>

</style>