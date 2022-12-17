import React, { FC } from 'react'
import styles from './HomePage.module.css'
import { Link } from 'react-router-dom'
const HomePage: FC<any> = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.main__info}>
                    <h1>cDev - service for developers</h1>
                    <h4>
                        Choose your command & make development more efficient
                    </h4>
                    <div>
                        <ul className={styles.main__advantagesList}>
                            <li>
                                <h2>2</h2>
                                <h4>users</h4>
                            </li>
                            <li>
                                <h2>0</h2>
                                <h4>reviews</h4>
                            </li>
                            <li>
                                <h2>121%</h2>
                                <h4>efficiency</h4>
                            </li>
                        </ul>
                        <button className={styles.main__buttonRegisterWrapper}>
                            <Link
                                className={styles.main__buttonRegister}
                                to="/registration"
                            >
                                Get Started
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
