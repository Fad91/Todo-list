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
    ></TodoList>
    <div v-else>Задач нет</div>
    <el-dialog :show="dialogVisible" v-show="!isDialogShown">
      <p>Вы точно хотите удалить эту туду?</p>
      <label>
        <input type="checkbox" name="checkbox" v-model="checkedCheckbox">
        Больше не показывать это окно
      </label>
      <el-button @click="hideDialog">Подтвердить</el-button>
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
        dialogVisible: false,
        checkedCheckbox: false,
        isDialogShown: false
      }
    }, methods: {
      addTodo(newTodo) {
        this.$store.commit('ADD_TODO', newTodo);
      },
      removeTodo() {
        // this.$store.commit('REMOVE_TODO', { array: this.$store.getters.TODOS, todo: todo});
        this.dialogVisible = true
      },
      moveToDoneTodos(todo) {
        this.$store.commit('moveToDoneTodos', todo);
      },
      hideDialog() {
        if (this.checkedCheckbox) {
          this.isDialogShown = true;
        }
        this.dialogVisible = false;
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
          if (this.todos.length === 0) {
            this.isDialogShown = false;            
          }
        },
        deep: true
      }
    },
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