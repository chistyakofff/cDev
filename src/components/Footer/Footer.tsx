import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer: FC<any> = () => {
    return (
        <div>
            <h1>Footer</h1>
            <Outlet />
        </div>
    )
}

export default Footer
