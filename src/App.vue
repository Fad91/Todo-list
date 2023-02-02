<template>
<div class="todo-app" id="app">
  <h1 class="todo-app__title">{{ title }}</h1>
  <AddTodo @createTodo="addTodo"></AddTodo>
  <TodoList v-if="this.todos.length > 0"
  :todos="todos"
  @removeTodo="removeTodo"
  ></TodoList>
  <div v-else>Задач нет</div>
</div>
</template>

<script>

import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
  components: {
    TodoList, AddTodo
  },
  data() {
    return {
      title: 'Туду лист',
      todos: [
        { id: "1", title: "Поесть", text: "Пельмешки подойдут2342342" },
        { id: "2", title: "Поспать", text: "Часов бы до июня" },
        { id: "3", title: "Погамать", text: "Evil Dead the Game збс" },
      ],
      computedTodos: []
    }
  }, methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    removeTodo(todo) {
      this.todos = this.todos.filter(el => {
        return el.id !== todo.id
      })
    }
    // changedTodos() {
    //   return this.todos.forEach(todo => {
    //       console.log(todo)
    //       return this.computedTodos.push(todo)
    //     })
    // }
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem('todos', JSON.stringify(this.todos))
      },
      deep: true
    }
  }, 
  created () {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'))
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  max-width: 900px;
  margin: 0 auto;
  width: 95%;

  &__title {
    margin: 0 0 30px;
  }
}
</style>