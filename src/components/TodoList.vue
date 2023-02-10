<template>
 <ul class="todo-list">
  <transition-group name="todo-list">
    <TodoItem 
      v-for="(todo, index) in todos" 
      :todo="todo"
      :index="index"
      :key="todo.id"
      @removeTodo="removeTodo"
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
  props: {
    todos: {
      type: Array,
      required: true
    },
    // todoIsDone: {
    //   type: Boolean,
    //   required: true
    // }
  },
  methods: {
    removeTodo(todo) {
      this.$emit("removeTodo", todo)
    }
  }
}
// @remove="$emit('remove', todo)"
</script>

<style lang="scss" scoped>

</style>
