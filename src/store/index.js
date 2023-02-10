import { createStore } from "vuex";

export default createStore({
   state: {
    todos: [],
    doneTodos: [],
    taskDone: false
   },
   getters: {

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
     addTodo(state, todo) {
       state.todos.push(todo);
       localStorage.setItem('todos', JSON.stringify(state.todos))
     },
     removeTodo(state, todo) {
      state.todos = state.todos.filter(el => {
        return el.id !== todo.id
      })
      localStorage.setItem('todos', JSON.stringify(state.todos))
     },
     removeDoneTodo(state, doneTodo) {
      state.doneTodos = state.doneTodos.filter(el => {
        return el.id !== doneTodo.id
      })
      localStorage.setItem('doneTodos', JSON.stringify(state.doneTodos))
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
      } else {
        commit('setTodos', [
          { id: "1", title: "Поесть", text: "Пельмешки подойдут2342342" },
          { id: "2", title: "Поспать", text: "Часов бы до июня" },
          { id: "3", title: "Погамать", text: "Evil Dead the Game збс" }
        ])
      }
    },
    getDoneTodos({commit}) {
      if (localStorage.getItem('doneTodos')) {
        commit('setDoneTodos', JSON.parse(localStorage.getItem('doneTodos')));
      } else {
        commit('setDoneTodos', [
          { id: "1", title: "Сделанное туту", text: "123123" },
        ])
      }      
    }
   }
})