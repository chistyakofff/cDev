import React, { FC } from 'react'
import styles from './Login.module.css'
import LoginForm from '../../components/Navbar/common/LoginForm'

const Login: FC<any> = () => {
    return (
        <div className="wrapper">
            <h2>cDev</h2>
            <h4>Login</h4>
            <LoginForm />
        </div>
    )
}

export default Login
