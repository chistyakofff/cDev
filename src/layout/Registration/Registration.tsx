import React, { FC } from 'react'
import RegisterForm from '../../components/Navbar/common/RegisterForm'
import styles from './Registration.module.css'
const Registration: FC<any> = () => {
    return (
        <div className="wrapper">
            <h2>cDev</h2>
            <h4>Registration</h4>
            <RegisterForm />
        </div>
    )
}

export default Registration
