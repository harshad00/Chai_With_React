import  { useState } from 'react';


const Count = () => {

  const [count, setCount] = useState(0);

   function add(){
    setCount (count + 1)
   }
   function remove(){
    if (count > 0){
      setCount (count - 1)
    }
    else{
 
      setCount(0)
    }

   }
  return (
    <div>
      
      <h1> This is my count {count}</h1>
      <button onClick={add}>Add value </button>
      <button onClick={remove}>Add value </button>
    </div>
  );
}

export default Count;
