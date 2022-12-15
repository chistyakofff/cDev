import React, { FC } from 'react'
import RegisterForm from '../../components/Navbar/common/RegisterForm'
import styles from './Registration.module.css'
const Registration: FC<any> = () => {
    return (
        <div className={styles.wrapper}>
            <h2>cDev</h2>
            <h4>Регистрация</h4>
            <RegisterForm />
        </div>
    )
}

export default Registration
