import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer: FC<any> = () => {
    return (
        <div className={styles.footer}>
            <ul className={styles.footer_nav}>
                <li>
                    <Link to={'/terms'}>Terms of Service</Link>
                </li>
                <li>
                    <Link to={'/about'}>About cDev</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact us</Link>
                </li>
            </ul>
            <div>All Rights Reserved © 2022 cDev</div>
        </div>
    )
}

export default Footer
