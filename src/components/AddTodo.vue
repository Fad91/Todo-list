<template>
  <div class="add-todo">
    <form class="todo-form" @submit.prevent>
      <label for="title" class="todo-form__label">
        <input type="text" name="title" id="title" v-model.trim="todo.title" placeholder="введите название задачи">
        <!-- <span v-for="error in $v.todo.title.$errors" :key="error.$uid">{{ error.message }}</span> -->
      </label>
      <label for="text" class="todo-form__label">
        <input type="text" name="text" id="text" v-model.trim="todo.text" placeholder="введите описание задачи">
        <!-- <span v-for="error in $v.todo.title.$errors" :key="error.$uid">{{ error.message }}</span> -->
      </label>
      <button type="submit" class="add-todo__button" @click="createTodo">Добавить</button>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
// import { reactive } from 'vue'

// let formData = reactive({
//   title: '',
//   text: ''
// })

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
          title: { required }, // Matches this.firstName
          text: { required }, // Matches this.lastName
        }
    }
  },
  methods: {
    async createTodo() {
      const result = await this.v$.todo.$validate()
      if (result) {
        this.todo.id = Date.now(),
        this.$emit('createTodo', this.todo)
        this.todo = {
          title: "",
          text: ""
        }
      } else {
          alert ('Форма не заполнена')
      }
    }
  }
 }
</script>

<style lang="scss" scoped>

.add-todo {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 95%;
  margin: 0 auto 25px;
}
.todo-form {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
}
</style>