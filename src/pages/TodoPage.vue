<template>
  <div class="todo-app">
    <h1 class="todo-app__title">{{ title }}</h1>
    <AddTodo @createTodo="addTodo"></AddTodo>
    <router-link class="todo-app__link" to="/done-todos">
      Перейти к сделанным туду
    </router-link>
    <TodoList v-if="$store.state.todos.length > 0"
    :todos="$store.state.todos"
    :taskDone="taskDone"
    @removeTodo="removeTodo"
    ></TodoList>
    <div v-else>Задач нет</div>
  </div>
</template>
  
  <script>
  
  import TodoList from '@/components/TodoList'
  import AddTodo from '@/components/AddTodo'
  // import {mapActions} from 'vuex'
  export default {
    components: {
      TodoList, AddTodo
    },
    data() {
      return {
        title: 'Туду лист'
      }
    }, methods: {
      addTodo(newTodo) {
        this.$store.commit('addTodo', newTodo);
      },
      removeTodo(todo) {
        this.$store.commit('removeTodo', todo);
      },
      moveToDoneTodos(todo) {
        this.$store.commit('moveToDoneTodos', todo);
      }
      // changedTodos() {
      //   return this.todos.forEach(todo => {
      //       console.log(todo)
      //       return this.computedTodos.push(todo)
      //     })
      // }
    },
    // watch: {
    //   todos: {
    //     handler() {
    //       localStorage.setItem('todos', JSON.stringify(this.$store.state.todos))
    //     },
    //     deep: true
    //   }
    // },
    computed: {

    },
    mounted () {
      this.$store.dispatch('getTodos');
      this.$store.commit('setTaskDone', false)
    }
  }
  </script>
  
  <style lang="scss" scoped>

  </style>