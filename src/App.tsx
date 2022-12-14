import React, { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './layout/Login/Login'
import Main from './layout/Main/Main'
import Registration from './layout/Registration/Registration'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/registration',
        element: <Registration />,
    },
])

const App: FC<any> = () => {
    return <RouterProvider router={router} />
}

export default App
