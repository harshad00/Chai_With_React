import './App.css'
import UseContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import Product from './components/Product'

function App() {
  return (
    <UseContextProvider>
  <h1> React Context  </h1>
  <Login/>
  <Product/>
  <Profile/>


    </UseContextProvider>
     
  )
}

export default App
