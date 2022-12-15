import React, { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

const App: FC<any> = () => {
    return (
        <div>
            <Navbar />
            <h1>HomePage</h1>
        </div>
    )
}

export default App
