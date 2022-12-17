import React, { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App: FC<any> = () => {
    return (
        <div>
            <Navbar />
        </div>
    )
}

export default App
