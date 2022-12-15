import React, { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

const App: FC<any> = () => {
    return (
        <div>
            <Navbar />
        </div>
    )
}

export default App
