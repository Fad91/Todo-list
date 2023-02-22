<template>
  <li class="todo-item" :class="{ 'todo-item--done': $store.state.taskDone }">
    <h2 class="todo-item__title">{{ index + 1 }}. {{ todo.title }}</h2>
    <p class="todo-item__text">{{ todo.text }}</p>
    <button type="button" 
    @click="removeTodo">
      Удалить
    </button>
    <div class="todo-item__btns-wrapper">
      <el-button v-if="!$store.getters.TASK_DONE" class="todo-item__button" type="button" @click="changeTaskStatement">Done</el-button>
      <el-button v-else class="todo-item__button" type="button" @click="changeTaskStatement">Undone</el-button>
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
    },
  },
  data() {
    return {

    }
  }, 
  methods: {
    removeTodo() {
      this.$emit('removeTodo', this.todo);
    },
    changeTaskStatement() {
      if (this.$store.getters.TASK_DONE) {
        console.log(this.todo)
        this.$store.commit('MOVE_TO_OTHER_ARRAY', {array: 'doneTodos', otherArray: 'todos', todo: this.todo}); 
      } else {
        this.$store.commit('MOVE_TO_OTHER_ARRAY', {array: 'todos', otherArray: 'doneTodos', todo: this.todo});        
      }
      // 
    }
  },
}
</script>

<style lang="scss" scoped>

</style>