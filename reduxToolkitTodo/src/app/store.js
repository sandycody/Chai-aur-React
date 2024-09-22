// Store banane ke liye sabse pehle ek method hai hume woh leke aana ha i.e. configureStore

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})