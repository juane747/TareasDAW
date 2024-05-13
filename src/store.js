import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './Reducers/todoSlice'
import goalReducer from  "./Reducers/goalsSlice";
import optionReducer from './Reducers/optionSlice';


export default configureStore({
    reducer:{
        goals:goalReducer,
        option:optionReducer,
        todos:todoReducer
    }
}) 