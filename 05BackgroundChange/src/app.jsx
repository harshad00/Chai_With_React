import { useState } from 'react'
import './app.css'

export function App() {
    let [color, setColor] = useState("olive");
    let [textcolor, setTextColor] = useState("red");

  return (

      <div>

     <div className="w-full h-[100vh] duration-200" style={{backgroundColor: color}}> 
     <p className=' flex justify-center items-center text-[3rem]' style={{ color: textcolor}}> Hello People</p>
        
         <div className=" fixed flex flex-wrap bottom-12 inset-x-0 px-2 bg-yellow-300 items-end rounded-lg p-1  justify-center">

          <button onClick={ ()=> {setColor("red"), setTextColor("white")} }  className='text-center rounded-md mx-1 py-1 px-3 bg-red-600 text-white '> red </button>
          <button onClick={ ()=> {setColor("green"),setTextColor("grey")} }  className='text-center rounded-md mx-1 py-1 px-3 bg-green-600 text-white '> Green </button>
          <button onClick={ ()=> {setColor("white"),setTextColor("black") }}  className='text-center rounded-md mx-1 py-1 px-3 bg-white text-bleck '> white </button>
          <button onClick={ ()=> {setColor("#4158D0"), setTextColor("white")} }  className='text-center rounded-md mx-1 py-1 px-3 bg-blue-600 text-white '> blue </button>
          <button onClick={ ()=> {setColor("gray"),setTextColor("yellow")} }  className='text-center rounded-md mx-1 py-1 px-3 bg-gray-500 text-white '> gray </button>
          <button onClick={ ()=> {setColor("black"),setTextColor("gray")} }  className='text-center rounded-md mx-1 py-1 px-3 bg-black text-white '> black </button>
          <button onClick={ ()=> {setColor("yellow"), setTextColor("#4158D0")} }  className='text-center rounded-md mx-1 py-1 px-3 bg-yellow-600 text-white '> yellow</button>
          <button onClick={ ()=> {setColor("orange"),setTextColor("purple")} }  className='text-center rounded-md mx-1 py-1 px-3 bg-orange-600 text-white '> orange</button>
          <button onClick={ ()=> {setColor("lime"),setTextColor("cyan")} }  className='text-center rounded-md mx-1 py-1 px-3 bg-lime-600 text-white '> lime </button>
          <button onClick={ ()=> {setColor("aqua"),setTextColor("orange")} }  className='text-center rounded-md mx-1 py-1 px-3 bg-cyan-400 text-white '>cyan  </button>
          <button onClick={ ()=> {setColor("purple"),setTextColor("teal")} }  className='text-center rounded-md mx-1 py-1 px-3 bg-purple-600 text-white '> purple </button>
          <button onClick={ ()=> {setColor("teal"),setTextColor("purple")} }  className='text-center rounded-md mx-1 py-1 px-3 bg-teal-600 text-white '> teal </button>
        </div> 

     </div>
   
     </div>
  )
}

export default App