<template>
 <ul class="todo-list">
  <TodoItem 
    v-for="(todo, index) in todos" 
    :todo="todo"
    :index="index"
    :key="todo.id"
    @removeTodo="removeTodo"
  >
  </TodoItem>
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
    }
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
.todo-list {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  list-style: none;
  width: 95%;
  border: 1px solid rgb(34, 136, 252);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
