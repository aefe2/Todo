import {defineStore} from "pinia";

interface Todo {
    id: number,
    text: string,
    completed: boolean
}

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [] as Todo[]
    }),
    actions: {
        addTodo(todo: Todo) {
            this.todos.push(todo)
        },
        removeTodo(id: number) {
            // this.todos = this.todos.filter((todo) => todo.id !== id);
            const todoId = this.todos.findIndex((todo) => todo.id === id);
            this.todos.splice(todoId, 1);
        },
        toggleCompletion(id: number) {
            const targetTodo = this.todos.find((todo: Todo) => todo.id === id)

            if (targetTodo) {
                targetTodo.completed = !targetTodo.completed
            }
        }
    },
})