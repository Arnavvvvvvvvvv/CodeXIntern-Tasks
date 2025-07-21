import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Paramcomp from './components/Paramcomp';
import Courses from './components/Courses';
import Mocktest from './components/Mocktest';
import Reports from './components/Reports';
import Notfound from './components/Notfound';

const router= createBrowserRouter(          //            [ {},{},{},{},{} ]
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
      
    },
    {
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div> 

    },
    {
      path:"/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      
      children:[
        {
          path:'courses',
          element: <Courses/>
        },
        {
          path:'mock-test',
          element:<Mocktest/>
        },
        {
          path:'reports',
          element:<Reports/>
        }
      ]

    },
    {
      path:"/student/:id", 
      element:
      <div>
        <Navbar/>
        <Paramcomp/>
      </div>  
    },
    {
      path:"*",
      element: <Notfound/>
    }
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router= {router}/>
    </div>
  )
}

export default App