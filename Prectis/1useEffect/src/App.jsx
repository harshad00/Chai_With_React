import { useState, useEffect} from 'react'

import './App.css'

function App() {

   
  
    const [count, setCount] = useState(0);
  
    // This effect will run after every render
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
      
      // This is the cleanup function
      return () => {
        // This will be called when the component unmounts
        console.log("Cleanup");
      };
    });

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  

export default App
