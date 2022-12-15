import React, { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar: FC<any> = () => {
    return (
        <div>
            <ul className={styles.nav}>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/registration"> Registration </Link>
                </li>
                <li>
                    <Link to="/login"> Login </Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Navbar
