
import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"


function App() {

  const router = createBrowserRouter([
   {
    path: '/',
    element: <Layout />,
    children: [
    {
      path: '',
      element:<Home/>
    },
    {
      path: 'about',
      element:<About/>
    },
    {
      path: 'contact',
      element:<Contact/>
    },

    ]
   }

 ])


  return (
    <>
      <RouterProvider router={router} />
     </>
  )
}

export default App
