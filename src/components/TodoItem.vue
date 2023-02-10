<template>
  <li class="todo-item" :class="{ 'todo-item--done': $store.state.taskDone }">
    <h2 class="todo-item__title">{{ index + 1 }}. {{ todo.title }}</h2>
    <p class="todo-item__text">{{ todo.text }}</p>
    <button type="button" 
    @click="removeTodo">
      Удалить
    </button>
    <div class="todo-item__btns-wrapper">
      <el-button v-if="!$store.state.taskDone" class="todo-item__button" type="button" @click="changeTaskStatement">Done</el-button>
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
    // todoIsDone: {
    //   type: Boolean,
    //   required: true
    // }
  },
  data() {
    return {
      // taskDone: false
    }
  }, 
  methods: {
    removeTodo() {
      this.$emit('removeTodo', this.todo);
    },
    changeTaskStatement() {
      // this.taskDone = !this.taskDone
      if (this.$store.state.taskDone) {
        this.$store.commit('moveToUndoneTodos', this.todo)
      } else {
        this.$store.commit('moveToDoneTodos', this.todo)        
      }
      // 
    }
  },
}
</script>

<style lang="scss" scoped>

</style>