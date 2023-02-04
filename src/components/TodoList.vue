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

.todo-list-item {
  display: inline-block;
  margin-right: 10px;
}
.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 1s ease;
}
.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
