import React, { useState, useContext } from 'react';
import UserContext from '../context/UseContext';

function Product() {
    const [name, setName] = useState("");
    const { setUser } = useContext(UserContext);
     const onClick1 = function(){
    
         setUser({name})

     }
  return (
    <div>

        <input type="text"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        placeholder='Product Name'

         />
      
       <button onClick={onClick1}> Submit</button>
    </div>
  );
}

export default Product;
