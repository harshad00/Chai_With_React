

import { useState } from 'react'
import Count from './assets/coutar/Count';
import './App.css'


function App() {
   let [count, setCount] = useState(0); 
   let [thime , setThime] = useState("white");
   function increaseValue(){ 
     if(count < 100){
      // setCount ( count + 1)
      setCount ((count)=> count + 1);
      setCount ((count)=> count + 1);
      setCount ((count)=> count + 1);
     }

    //  console.log("clicked " , {count});  
   }

   function decreaseValue(){
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
   }

  function thime1(){
     console.log( "thime change ");
    if(thime === "white" ){
      setThime("dark");
    }
    else{
      setThime("white"); 
    }
  }
  return (
    <>

    <h1>THIS IS MY COUNT APP </h1>

     <h2>   This is My count value  {count} </h2>

     <button onClick={increaseValue} > IncreaseValue {count} </button>
     <button onClick={decreaseValue} >  decreaseValue {count} </button>
     <button onClick={ () => {thime1()}} >  this is my thime :{thime} </button>
      
      <p> footer:{count}</p>

      <Count />
    </>

  

  )
}

export default App
