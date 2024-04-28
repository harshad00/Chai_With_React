import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState  =  {
     todos: [{ id:1, text: "Hello world", date:"2014-4-28"}]
}

export const todoSlice =  createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = { 
                id: nanoid(),
                text: action.payload,
                date: Date.now(),
            }
            state.todos.push(todo);
        },
        removeTodo:(state, action) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer