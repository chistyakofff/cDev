import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Terms.module.css'

const About: FC<any> = () => {
    return (
        <div className="wrapper">
            <h1>About</h1>
            <Outlet />
        </div>
    )
}

export default About
