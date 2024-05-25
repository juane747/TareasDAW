import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: []
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
      fetch("http://localhost:3001/tasks/addTasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "backendproyecto"
        },
        body: JSON.stringify(action.payload)
      }).catch((err) => {
        console.log(err);
      })
    },
    initAddTodo: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
      fetch("http://localhost:3001/tasks/removeTasks" + action.payload, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "backendproyecto"
        }
      }).catch((err) => {
        console.log(err);
      })
    },
    
  }
});

export const { addTodo, initAddTodo, removeTodo, addGoal, initAddGoal, removeGoal } = todoSlice.actions;
export const selecTodos = (state) => state.todos.value;
export default todoSlice.reducer;
