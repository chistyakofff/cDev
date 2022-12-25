import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Login from './layout/Login/Login'
import Registration from './layout/Registration/Registration'
import HomePage from './layout/Home/HomePage'
import Contact from './pages/Contact/Contact'
import Terms from './pages/Terms/Terms'
import About from './pages/About/About'
import Tasks from './pages/Tasks/Tasks'

import 'normalize.css'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'registration',
                element: <Registration />,
            },
            {
                path: '/',
                element: <Tasks />,
                // <Homepage/>
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/terms',
                element: <Terms />,
            },
            {
                path: '/tasks',
                element: <Tasks />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />
)
