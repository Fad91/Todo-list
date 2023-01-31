<template>
  <li class="todo-item">
    <h2 class="todo-item__title">{{ index + 1 }}. {{ todo.title }}</h2>
    <p class="todo-item__text">{{ todo.text }}</p>
    <button type="button" 
    @click="removeTodo">
      Удалить
    </button>
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

    }
  }, 
  methods: {
    removeTodo() {
      this.$emit('removeTodo', this.todo);
    }
  }
}
</script>

<style lang="scss" scoped>

.todo-item {
  text-align: left;
  display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr min-content;

  &__title {
    margin: 0 0 20px;
  }

  &__text {
    margin: 0 0 20px;
    grid-row: 2;
  }
}

button {
  align-self: center;
}

</style>