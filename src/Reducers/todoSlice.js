import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    }
  }
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
