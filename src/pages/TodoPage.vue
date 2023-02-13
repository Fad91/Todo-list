<template>
  <div class="todo-app">
    <h1 class="todo-app__title">{{ title }}</h1>
    <AddTodo @createTodo="addTodo"></AddTodo>
    <router-link class="todo-app__link" to="/done-todos">
      Перейти к сделанным туду
    </router-link>
    <TodoList v-if="$store.getters.TODOS.length > 0"
    :todos="$store.getters.TODOS"
    :taskDone="taskDone"
    @removeTodo="removeTodo"
    ></TodoList>
    <div v-else>Задач нет</div>
  </div>
</template>
  
  <script>
  
  import TodoList from '@/components/TodoList'
  import AddTodo from '@/components/AddTodo'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      TodoList, AddTodo
    },
    data() {
      return {
        title: 'Туду лист',
      }
    }, methods: {
      addTodo(newTodo) {
        this.$store.commit('addTodo', newTodo);
      },
      removeTodo(todo) {
        this.$store.commit('REMOVE_TODO', { array: this.$store.getters.TODOS, todo: todo});
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
      ...mapGetters(['TODOS', 'DONE_TODOS'])
    },
    mounted () {
      this.$store.dispatch('getTodos');
      this.$store.commit('setTaskDone', false)
    }
  }
  </script>
  
  <style lang="scss" scoped>

  </style>