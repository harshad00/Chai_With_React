
import './App.css'
import Cart from './components/Cart'
function App() {

 
  return (
    <>

    <h1 className=' bg-green-400  rounded-sm p-2 mb-5 '>  Tailwind test</h1>
   
   
   <Cart username = "Harshad "  btntext = " view myProfile"  />
   <Cart username = "MY Frinds "   />

    </>
  )
}

export default App
