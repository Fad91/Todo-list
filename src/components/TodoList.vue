<template>
 <ul class="todo-list">
  <transition-group name="todo-list">
    <TodoItem 
      v-for="(todo, index) in todos" 
      :todo="todo"
      :index="index"
      :key="todo"
      @removeTodo="removeTodo"
      @removeTodoAfterClick="removeTodoAfterClick"
    />
  </transition-group>
 </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem';

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data() {
    return {
    }
  },
  props: {
    todos: {
      type: Array,
      required: true
    },
  },
  methods: {
    removeTodo(todo) {
      this.$emit("removeTodo", todo)
    },
    removeTodoAfterClick(todo) {
      this.$emit("removeTodoAfterClick", todo)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
