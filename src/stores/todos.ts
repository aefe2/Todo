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
            this.todos = this.todos.filter((todo) => todo.id !== id);
        },
        toggleCompletion(id: number) {
            const targetTodo = this.todos.find((todo: Todo) => todo.id === id)

            if (targetTodo) {
                targetTodo.completed = !targetTodo.completed
            }
        },
        editTodo({id, text}: { id: number, text: string }) {
            this.todos = this.todos.map(todo => todo.id === id ? {...todo, text} : todo)
        }
    },
})