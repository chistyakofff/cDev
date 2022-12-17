import React, { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

const App: FC<any> = () => {
    return (
        <div>
            <Navbar />
            <h2>cDev</h2>
            <h4>Registration</h4>
        </div>
    )
}

export default App
