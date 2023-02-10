<template>
  <div class="add-todo">
    <form class="todo-form" @submit.prevent="createTodo">
      <label for="title" class="todo-form__label">
        <el-input name="title" id="title" v-model="v$.todo.title.$model" placeholder="введите название задачи"/>
        <span v-for="error in v$.todo.title.$errors" :key="error.$uid">{{ error.$message }}</span>
      </label>
      <label for="text" class="todo-form__label">
        <el-input type="text" name="text" id="text" v-model="v$.todo.text.$model" placeholder="введите описание задачи"/>
        <span v-for="error in v$.todo.text.$errors" :key="error.$uid">{{ error.$message }}</span>
      </label>
      <button type="submit" class="todo-form__button">Добавить</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

 export default {
  name: "AddTodo",
  setup () {
    return { v$: useVuelidate() }
  },
  components: {},
  data() {
    return {
      todo: {
        title: "",
        text: ""
      }
    }
  },
  validations () {
    return {
        todo: {
          title: { required, $autoDirty: true  },
          text: { required, $autoDirty: true  }
        }
    }
  },
  methods: {
    async createTodo() {
      const result = await this.v$.todo.$validate()
      if (result) {
        const newTodo = {
          id: Date.now(),
          title: this.todo.title,
          text: this.todo.text
        }
        this.$emit('createTodo', newTodo);
        this.clearTodo();
        this.v$.$reset();
      } else {
        return
      }
    },
    clearTodo() {
      this.todo = {
          title: "",
          text: ""
         }
    }
  }, 
  // watch: {
  //   todo: {
  //     handler(newVal) {
  //       console.log(newVal);
  //   }, 
  //     deep: true
  //   }
  // }
 }
</script>

<style lang="scss" scoped>

</style>