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
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        toggleCompletion(id: number) {
            this.todos = this.todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            );
        }
    }
})