import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    initAddTodo:(state, action)=>{
      console.log(action.payload);
      state.value.push(action.payload);
    },
    removeTodo:(state,action)=>{
      state.value = state.value.filter((task)=>task.id!==action.payload);
    }
  }
});

export const { addTodo, initAddTodo, removeTodo } = todoSlice.actions;
export const selecTodos = (state)=>state.todos.value
export default todoSlice.reducer;
