<template>
  <li class="grid justify-items-center grid-cols-4 ml-3">
    <button @click="todoStore.toggleCompletion(todo.id)">
      <span v-if="todo.completed" class="text-green-200">
        <img class="h-4" src="@/assets/img/icon-check.png" alt="Выполнено">
      </span>
      <span v-if="!todo.completed" class="text-red-200">
        <img class="h-4" src="@/assets/img/icon-unchek.png" alt="Не выполнено">
      </span>
    </button>
    <button @click="startEditing">Edit</button>
    <div>
      <span v-if="!editing" :class="{'line-through' : todo.completed}">{{ props.todo.text }}</span>
      <input v-if="editing" v-model="editedText" @keyup.enter="saveEdit" class=""/>
    </div>
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
