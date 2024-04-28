import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {removeTodo} from "../features/todo/todoSlice"

function Todos() {
    const todos = useSelector(state => state.todos)
     const dispatch = useDispatch()
    
  return (
    <div>
      <div> my Todos</div>

      {todos.map((todo) => (

        <li key={todo.id}> 
        {todo.text} 
        <p> {todo.date} </p>
        <button onClick={() =>
        dispatch(removeTodo(todo.id))}>
          X
          </button>

        </li>

      ))}

      
    </div>
  );
}

export default Todos;
