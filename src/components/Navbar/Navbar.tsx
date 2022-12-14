import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Navbar: FC<any> = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <ul>
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
        </div>
    )
}

export default Navbar
