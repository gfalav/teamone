import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './comps/home/home'
import SignIn from './comps/auth/SignIn'
import SignUp from './comps/auth/SignUp'
import Reset from './comps/auth/Reset'

const router = createBrowserRouter([
 { path: '/', element: <Home />},
 { path: '/auth/signin', element: <SignIn />},
 { path: '/auth/signup', element: <SignUp />},
 { path: '/auth/reset', element: <Reset />}
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)