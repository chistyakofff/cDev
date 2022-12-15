import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Header.module.css'

const Header: FC<any> = () => {
    return (
        <div>
            <h1>Header</h1>
            <Outlet />
        </div>
    )
}

export default Header
