import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login'
import ShopByCategories from './Components/ShopByCategories';
import Blog from './Components/Blog';
import Main from './Components/Layout/Main';
import SignUp from './Components/SignUp';
import AuthProvider from './providers/AuthProvider';
import Toys from './Components/Toys';
import Private from './Components/Private';
import AddToy from './Components/AddToy';
import AllToys from './Components/AllToys';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/addtoy',
        element:<Private><AddToy></AddToy></Private>
      },
      {
        path: '/alltoys',
        element:<AllToys></AllToys>,
        loader:()=>fetch('http://localhost:5000/addtoy')
      },
      {
        path:"/toys/:id",
        element:<Private><Toys></Toys></Private>,
        loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
      }
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
