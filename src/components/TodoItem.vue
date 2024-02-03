<template>
  <li class="grid grid-cols justify-items-center items-center height">
    <div>
      <button @click="todoStore.toggleCompletion(todo.id)">
      <span v-if="todo.completed" class="text-green-200">
        <img class="h-3" src="@/assets/img/icon-check.png" alt="Выполнено">
      </span>
        <span v-if="!todo.completed" class="text-red-200">
        <img class="h-3" src="@/assets/img/icon-unchek.png" alt="Не выполнено">
      </span>
      </button>
    </div>
    <span v-if="!editing" :class="{'line-through' : todo.completed}" class="break-words">{{ props.todo.text }}</span>
    <input v-if="editing" v-model="editedText" @keyup.enter="saveEdit" @blur="saveEdit"
           class="text-neutral-600 border rounded-lg p-1"/>
    <button @click="startEditing">
      <img src="@/assets/img/edit.png" alt="Редактировать" class="h-5">
    </button>
    <button @click="todoStore.removeTodo(todo.id)" class="text-red-500">X</button>
  </li>
</template>

<script setup lang="ts">
import {useTodoStore} from "@/stores/todos";
import {ref} from "vue";

const todoStore = useTodoStore();

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const editing = ref(false);
const editedText = ref(props.todo.text)

const startEditing = () => {
  console.log(editing.value)
  editing.value = !editing.value;
}

const saveEdit = () => {
  if (editedText.value.trim() === '') {
    editedText.value = props.todo.text
  } else {
    todoStore.editTodo({
      id: props.todo.id,
      text: editedText.value
    })
  }
  editing.value = false
}
</script>

<style scoped>
.height {
  height: 3rem;
}
.grid-cols {
  grid-template-columns: 50px 1fr 50px 50px;
}
</style>
