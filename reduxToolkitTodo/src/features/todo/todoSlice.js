// nanoid generates a unique id everytime like uuid
import { createSlice, nanoid } from '@reduxjs/toolkit';

// initialState refers to store starting mein kasa dikhega (empty hoga, kuch value hogi, db se fetch karke kuch value daloge mtlb starting mein kasa dikhega )

const initialState = {
    todos: [{id: 1, text: "Add Todo"}],
    editId: null
}

// Slice is nothing but a wide version of reducer(reducer is nothing but a functionality which is used to change the state)

export const todoSlice = createSlice({
    name: 'todo',
    initialState, //har slice ka ek initialState hota hai joki humne upar define kar dia ha
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload //this payload is an object
            }
            state.todos.push(todo); 
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo);
        },
        setTodoToEdit: (state, action) => {
            state.editId = action.payload;
        }
    }
})

// addTodo, removeTodo, updateTodo ko hum individually export karenge kyonki yahi functionalities reducers ki jiske thorugh hum state update karne ka kaam karenge components mein

export const { addTodo, removeTodo, updateTodo, setTodoToEdit } = todoSlice.actions;

export default todoSlice.reducer; //ye hume export karna padega taaki store mein use kar ske kyonki store ke andhar jo jo reducers import honge woh unse hi value leke update karega toh individually karna zaroori hai procedure hai ye