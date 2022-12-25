// @ts-nocheck
import React, { FC } from 'react'
import styles from './TaskColumn.module.css'
import TaskCard from '../TaskCard/TaskCard'

const TaskColumn: FC<any> = ({ columnName, tasks }) => {
    return (
        <div className={styles.container}>
            <div>{columnName + ' '+ tasks.length}</div>
            {tasks.map((el, index) => (
                <TaskCard card={el} key={index} />
            ))}
        </div>
    )
}

export default TaskColumn
