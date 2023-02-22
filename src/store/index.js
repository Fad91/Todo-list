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
    taskDone: false,
    dialogVisible: false,
    checkedCheckbox: false
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
    },
    DIALOG_VISIBLE: state => {
      return state.dialogVisible
    },
    CHECKED_CHECKBOX: state => {
      return state.checkedCheckbox      
    }
   },
   mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    },
    SET_DONETODOS(state, doneTodos) {
     state.doneTodos = doneTodos
    },
    SET_TASKDONE(state, taskDone) {
     state.taskDone = taskDone;
    },
    SET_DIALOG_VISIBLE(state, dialogVisible) {
      state.dialogVisible = dialogVisible
    },
    SET_CHECKED_CHECKBOX(state, checkedCheckbox) {
      state.checkedCheckbox = checkedCheckbox
    },
    ADD_TODO(state, {array, todo} = {}) {
      state[array].push(todo);
      localStorage.setItem(array, JSON.stringify(state[array]))
    },
     REMOVE_TODO(state, {array, todo} = {}) {
       state[array] = state[array].filter((el) => {
         return el.id != todo.id
       })
       localStorage.setItem(array, JSON.stringify(state[array]))
     },
     MOVE_TO_OTHER_ARRAY(state, {array, otherArray, todo} = {}) {
        state[array] = state[array].filter((el) => {
          localStorage.setItem(array, JSON.stringify(state[otherArray]))
          return el.id != todo.id
        })
       state[otherArray].push(todo);
       localStorage.setItem(otherArray, JSON.stringify(state[otherArray]))
     },
   },
   actions: {
    GET_TODOS({commit}, array) {
      if (localStorage.getItem(`${array}`)) {
        commit(`SET_${array.toUpperCase()}`, JSON.parse(localStorage.getItem(`${array}`)));
      }
    },
   }
})