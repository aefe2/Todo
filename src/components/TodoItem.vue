<template>
  <li :class="{'line-through': todo.completed}" class="todo-item">
    <div class="">
      <i class=""></i>
    </div>
    <span class="">{{ todo.text }}</span>
    <button class="">
      <i class=" "></i>
    </button>
  </li>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<{
        id: number,
        text: string,
        completed: boolean
      }>,
      required: true
    }
  }
})
</script>

<style scoped>

</style>