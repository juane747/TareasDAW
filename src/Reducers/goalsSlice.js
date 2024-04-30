import { createSlice } from "@reduxjs/toolkit";
//la nomenclatura siguiente es unica siempre debe agregarse asi.s
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
        addGoal: (state, action)=>{
            state.value.push(action.payload )
        }
    }
})

export const {addGoal}=goalsSlice.actions;
export default goalsSlice.reducer;