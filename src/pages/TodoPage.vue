<template>
  <div class="todo-app">
    <h1 class="todo-app__title">{{ title }}</h1>
    <AddTodo @createTodo="addTodo"></AddTodo>
    <router-link class="todo-app__link" to="/done-todos">
      Перейти к сделанным туду
    </router-link>
    <TodoList v-if="$store.getters.TODOS.length > 0"
    :todos="$store.getters.TODOS"
    :taskDone="$store.getters.TASK_DONE"
    @removeTodo="removeTodo"
    @removeTodoAfterClick="removeTodoAfterClick"
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
        popupButtonClicked: false,
        isDialogShown: false,
      }
    }, methods: {
      addTodo(newTodo) {
        this.$store.commit('ADD_TODO', { array: 'todos', todo: newTodo});
      },
      removeTodo(todo) {
        if (this.isDialogShown) {
          this.$store.commit('REMOVE_TODO', { array: 'todos', todo: todo})
        } else {
          this.$store.commit('setDialogVisible', true)
          // this.removeTodoAfterClick(todo)
          
          // setTimeout(function() {
          // this.$store.commit('REMOVE_TODO', { array: 'todos', todo: todo})            
          // }, 2000)
          // if (this.popupButtonClicked) {
            // this.$store.commit('setDialogVisible', false)
            // setTimeout(() => {
            //   this.$store.commit('REMOVE_TODO', { array: 'todos', todo: todo}) 
            // }, 2000)
          // }
        }
      },
      removeTodoAfterClick() {
        this.popupButtonClicked = true;
        // setTimeout(() => {
        //   this.$store.commit('REMOVE_TODO', { array: 'todos', todo: todo})
        // }, 2000)
        // this.hideDialog()
      },
      moveToDoneTodos(todo) {
        this.$store.commit('moveToDoneTodos', todo);
      },
      hideDialog() {
        if (this.checkedCheckbox) {
          this.isDialogShown = true;
        }
        this.$store.commit('setDialogVisible', false)
        // this.removeTodo(todo)
      },
    },
    watch: {
      todos: {
        handler() {
          if (this.todos.length === 0) {
            this.isDialogShown = false;            
          }
        },
        deep: true
      },
      popupButtonClicked() {
        this.hideDialog()
      }
    },
    computed: {
      ...mapGetters(['TODOS', 'DONE_TODOS'])
    },
    mounted () {
      this.$store.dispatch('getTodos');
      // this.$store.commit('setTaskDone', false)
    }
  }
  </script>
  
  <style lang="scss" scoped>

  </style>