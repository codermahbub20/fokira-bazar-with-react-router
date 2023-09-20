import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Dashboard from './Components/Dashboard/Dashboard';
import Mainlayout from './Components/MainLayOut/Mainlayout';


const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/products",
          element: <Products></Products>,
          loader: () => fetch(`https://dummyjson.com/products#`)
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
