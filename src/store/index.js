import { createStore } from "vuex";

export default createStore({
   state: {
    todos: [
      { id: "1", title: "Поесть", text: "Пельмешки подойдут2342342" },
      { id: "2", title: "Поспать", text: "Часов бы до июня" },
      { id: "3", title: "Погамать", text: "Evil Dead the Game збс" }
    ],
    doneTodos: [
      { id: "1", title: "Сделанное туту", text: "123123" }
    ],
    taskDone: false
   },
   getters: {
    TODOS: state => {
      return state.todos
    },
    DONE_TODOS: state => {
      return state.doneTodos
    },
    TASK_DONE: state => {
      return state.taskDone
    }
   },
   mutations: {
    setTodos(state, todos) {
      state.todos = todos
    },
    setDoneTodos(state, doneTodos) {
     state.doneTodos = doneTodos
    },
    setTaskDone(state, taskDone) {
     state.taskDone = taskDone;
    },
     ADD_TODO(state, todo) {
       state.todos.push(todo);
       localStorage.setItem('todos', JSON.stringify(state.todos))
     },
    //  REMOVE_TODO(state, todo) {
    //   state.todos = state.todos.filter(el => {
    //     return el.id !== todo.id
    //   })
    //   localStorage.setItem('todos', JSON.stringify(state.todos))
    //  },
    //  REMOVE_DONE_TODO(state, doneTodo) {
    //   state.doneTodos = state.doneTodos.filter(el => {
    //     return el.id !== doneTodo.id
    //   })
    //   localStorage.setItem('doneTodos', JSON.stringify(state.doneTodos))
    //  },
     REMOVE_TODO(state, {array, todo} = {}) {
       state.array = array;
       let id = todo.id;
       console.log(array)
       console.log(todo.id)
       state.array = array.filter((el) => {
         console.log(el.id)
         return el.id != id
       })
     },
     moveToDoneTodos(state, todo) {
       state.todos = state.todos.filter(el => {
         return el.id !== todo.id
       })
       state.doneTodos.push(todo);
       localStorage.setItem('doneTodos', JSON.stringify(state.doneTodos))
     },
     moveToUndoneTodos(state, todo) {
      state.doneTodos = state.doneTodos.filter(el => {
        return el.id !== todo.id
      })
      state.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
   },
   actions: {
    getTodos({commit}) {
      if (localStorage.getItem('todos')) {
        commit('setTodos', JSON.parse(localStorage.getItem('todos')));
      }
    },
    getDoneTodos({commit}) {
      if (localStorage.getItem('doneTodos')) {
        commit('setDoneTodos', JSON.parse(localStorage.getItem('doneTodos')));
      }    
    }
   }
})