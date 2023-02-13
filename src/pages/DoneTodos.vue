<template>
  <div class="todo-app">
    <h1 class="todo-app__title">{{ title }}</h1>
    <TodoList v-if="$store.getters.DONE_TODOS.length > 0"
    :todos="$store.getters.DONE_TODOS"
    @removeTodo="removeTodo"
    ></TodoList>
    <div v-else>Задач нет</div>
  </div>
</template>

<script>

import TodoList from '@/components/TodoList'
export default {
  components: {
    TodoList
  },
  data() {
    return {
      title : 'Cделанные туду'
    }
  },
  methods: {
    removeTodo(todo) {
        this.$store.commit('removeDoneTodo', this.$store.getters.DONE_TODOS, todo);
    },
    moveToUndoneTodos(todo) {
        this.$store.commit('moveToUndoneTodos', todo);
    }
  },
  mounted () {
      this.$store.dispatch('getDoneTodos')
      this.$store.commit('setTaskDone', true)
    }
}
</script>

<style>
  
</style>