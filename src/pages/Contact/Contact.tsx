import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Contact.module.css'

const Contact: FC<any> = () => {
    return (
        <div className="wrapper">
            <h1>Contact</h1>
            <Outlet />
        </div>
    )
}

export default Contact
