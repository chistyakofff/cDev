//@ts-nocheck
import { string } from 'prop-types'
import React, { FC, useState } from 'react'
import styles from './RegisterForm.module.css'
const RegisterForm: FC<any> = () => {
    const [data, setData] = useState({})

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    return (
        <form action="" className={styles.form_wrapper}>
            <div>
                <input
                    type="text"
                    name="login"
                    placeholder="Введите Login"
                    onChange={handleChange}
                    className={styles.form_input}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Введите Имя"
                    onChange={handleChange}
                    className={styles.form_input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Введите пароль"
                    onChange={handleChange}
                    className={styles.form_input}
                />
            </div>
            <button className={styles.btn_bts}>Зарегистрироваться</button>
        </form>
    )
}

export default RegisterForm
