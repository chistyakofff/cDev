import React, { FC } from 'react'
import styles from './TaskCard.module.css'

const TaskCard: FC<any> = ({ card }) => {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                {card.name}
                <p className={styles.description}>{card.description} </p>
                <span>{card.priority}</span>
            </div>
        </div>
    )
}

export default TaskCard
