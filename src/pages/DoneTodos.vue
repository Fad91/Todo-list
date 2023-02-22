<template>
  <div class="todo-app">
    <h1 class="todo-app__title">{{ title }}</h1>
    <TodoList v-if="$store.getters.DONE_TODOS.length > 0"
    :todos="$store.getters.DONE_TODOS"
    @removeTodo="removeTodo"
    ></TodoList>
    <div v-else>Задач нет</div>
  </div>
  <el-dialog :isDialogShown="isDialogShown"
    @removeTodoAfterClick="removeTodoAfterClick" >
    </el-dialog>
</template>

<script>

import TodoList from '@/components/TodoList'
export default {
  components: {
    TodoList
  },
  data() {
    return {
      title : 'Cделанные туду',
      isDialogShown: false,
    }
  },
  methods: {
    removeTodo(todo) {
        this.$options.todo = todo
        if (this.isDialogShown) {
          this.$store.commit('REMOVE_TODO', { array: 'doneTodos', todo: todo});
        } else {
          this.$store.commit('SET_DIALOG_VISIBLE', true);
        }
    },
    removeTodoAfterClick() {
        this.$store.commit('REMOVE_TODO', { array: 'doneTodos', todo: this.$options.todo});
        this.hideDialog()
    },
    hideDialog() {
        if (this.$store.getters.CHECKED_CHECKBOX) {
          this.isDialogShown = true;
        }
        if (this.$store.getters.DONE_TODOS.length === 0) {
          this.isDialogShown = false;
          this.$store.commit('SET_DIALOG_VISIBLE', false)   
        }
    },
  },
  mounted () {
      this.$store.dispatch('GET_TODOS', 'doneTodos');
      this.$store.commit('SET_TASKDONE', true);
      this.$store.commit('SET_CHECKED_CHECKBOX', false);
    }
}
</script>

<style>
  
</style>