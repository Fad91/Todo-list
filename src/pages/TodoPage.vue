<template>
  <div class="todo-app">
    <h1 class="todo-app__title">{{ title }}</h1>
    <AddTodo @createTodo="addTodo"></AddTodo>
    <router-link class="todo-app__link" to="/done-todos">
      Перейти к сделанным туду
    </router-link>
    <!-- пытался тут вместо обращения к стор.геттерс сделать как у Дины
    (с 70 по 72 строку), и запилить :todos = todos, и не работает  -->
    <TodoList v-if="$store.getters.TODOS.length > 0"
    :todos="$store.getters.TODOS"
    :taskDone="$store.getters.TASK_DONE"
    @removeTodo="removeTodo"
    @removeTodoAfterClick="removeTodoAfterClick">
    </TodoList>
    <div v-else>Задач нет</div>
    <el-dialog :isDialogShown="isDialogShown"
    @removeTodoAfterClick="removeTodoAfterClick">
    </el-dialog>
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
        isDialogShown: false
      }
    },
    todo: '', 
    methods: {
      addTodo(newTodo) {
        this.$store.commit('ADD_TODO', { array: 'todos', todo: newTodo});
      },
      
      removeTodo(todo) {
        this.$options.todo = todo
        if (this.isDialogShown) {
          this.$store.commit('REMOVE_TODO', { array: 'todos', todo: todo});
        } else {
          this.$store.commit('SET_DIALOG_VISIBLE', true);
        }
      },

      removeTodoAfterClick() {
        this.$store.commit('REMOVE_TODO', { array: 'todos', todo: this.$options.todo});
        if (!this.isDialogShown) {
          this.hideDialog()
        }
      },
      // Тут в консоли отрабатывает, но isDialogShown в дате не меняется, почему-то меняется только после удаления всех тудушек,
      //  хотя попап больше не показывается после кликнутого чекбокса
      hideDialog() {
        if (this.$store.state.checkedCheckbox) {
          this.isDialogShown = true;
          console.log(this.isDialogShown, 123)
        }
        this.$store.commit('SET_DIALOG_VISIBLE', false)
      },
    },
    computed: {
      // ...mapGetters(['TODOS', 'DONE_TODOS', 'CHECKED_CHECKBOX'])
      // ...mapGetters({
      //   todos: 'TODOS'
      // })
    },
    mounted () {
      this.$store.dispatch('GET_TODOS', 'todos');
      this.$store.commit('SET_TASKDONE', false);
      this.$store.commit('SET_CHECKED_CHECKBOX', false);
    }
  }
  </script>
  
  <style lang="scss" scoped>

  </style>