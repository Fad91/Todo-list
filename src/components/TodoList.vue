<template>
    <!-- <el-dialog :show="$store.getters.DIALOG_VISIBLE" v-show="!isDialogShown">
      <p>Вы точно хотите удалить эту туду?</p>
      <label>
        <input type="checkbox" name="checkbox" v-model="checkedCheckbox">
        Больше не показывать это окно
      </label>
      <el-button @click="removeTodoAfterClick">Подтвердить</el-button>
  </el-dialog> -->
 <ul class="todo-list">
  <transition-group name="todo-list">
    <TodoItem 
      v-for="(todo, index) in todos" 
      :todo="todo"
      :index="index"
      :key="todo.id"
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
      // checkedCheckbox: false,
      // isDialogShown: false,
      // popupButtonClicked: false
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
    // hideDialog() {
    //   this.$store.commit('setDialogVisible', false)
    // },
    // removeTodoAfterClick(todo) {
    //   this.$emit("removeTodoAfterClick", todo)
    // }
  }
}
// @remove="$emit('remove', todo)"
</script>

<style lang="scss" scoped>

</style>
