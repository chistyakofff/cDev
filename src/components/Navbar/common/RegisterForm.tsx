import React, { FC, useState } from 'react'
import styles from './Form.module.css'
const RegisterForm: FC<any> = () => {
    const [data, setData] = useState({})

    const handleChange = (e: React.SyntheticEvent<EventTarget>) => {
        const target = e.target as HTMLInputElement
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    return (
        <form action="" className={styles.form_wrapper}>
            <div>
                <input
                    type="text"
                    name="login"
                    placeholder="Input login"
                    onChange={handleChange}
                    className={styles.form_input}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Input name"
                    onChange={handleChange}
                    className={styles.form_input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Input password"
                    onChange={handleChange}
                    className={styles.form_input}
                />
            </div>
            <button className={styles.btn_bts}>Register</button>
        </form>
    )
}

export default RegisterForm
