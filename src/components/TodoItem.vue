<template>
  <li class="todo-item" :class="{ 'todo-item--done': taskDone }">
    <h2 class="todo-item__title">{{ index + 1 }}. {{ todo.title }}</h2>
    <p class="todo-item__text">{{ todo.text }}</p>
    <button type="button" 
    @click="removeTodo">
      Удалить
    </button>
    <div class="todo-item__btns-wrapper">
      <el-button type="button" :disabled="taskDone" @click="changeTaskStatement">Done</el-button>
      <el-button type="button" :disabled="!taskDone" @click="changeTaskStatement">Undone</el-button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  components: {},
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      taskDone: false
    }
  }, 
  methods: {
    removeTodo() {
      this.$emit('removeTodo', this.todo);
    },
    changeTaskStatement() {
      this.taskDone = !this.taskDone
    }
  }
}
</script>

<style lang="scss" scoped>

.todo-item {
  text-align: left;
  display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr min-content;

  &--done {
    background: greenyellow;
    opacity: 0.8;

    & .todo-item__title,
    & .todo-item__text {
      text-decoration: line-through;
    }
  }

  &__title {
    margin: 0 0 20px;
  }

  &__text {
    margin: 0 0 20px;
    grid-row: 2;
  }

  &__btns-wrapper {
    display: flex;
    grid-row: 3;
  }
}

button {
  align-self: center;
}

</style>