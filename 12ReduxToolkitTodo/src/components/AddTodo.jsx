import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from "../features/todo/todoSlice"
 function AddTodo() {

    const [input,setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput(" ")
    } 

  return (
   
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>

        <input type="text"
        className='bg-gray-800 text-white' 
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button type='submit' 
        className=' bg-indigo-500 border-0 py-2'
        > Submin</button>
    </form>
  );
}

export default AddTodo;

