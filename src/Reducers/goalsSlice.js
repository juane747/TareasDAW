import { createSlice } from "@reduxjs/toolkit";
//la nomenclatura siguiente es unica siempre debe agregarse asi.s Los estados creados
export const goalsSlice =createSlice({
    name:'goals',
    initialState:{
        value:[
          {
          'name':'',
          'description':'',
          'dueDate':'' 
        } 
        ]
    },
    reducers:{
        addGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
            fetch("http://localhost:3001/goals/addGoals", {
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
          initAddGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
          },
          removeGoal: (state, action) => {
            state.value = state.value.filter((task) => task.id !== action.payload);
            fetch("http://localhost:3001/goals/removeGoals" + action.payload, {
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
})

export const {addGoal}=goalsSlice.actions;

export default goalsSlice.reducer;