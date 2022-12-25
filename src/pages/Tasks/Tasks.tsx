// @ts-nocheck

import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Tasks.module.css'
import TasksList from '../../components/TasksList/TasksList'
import { data } from '../../mocks/tasks.js'

const Tasks: FC<any> = () => {
    return (
        <div className="wrapper">
            <h1>Tasks</h1>
            <TasksList data={data} />
        </div>
    )
}

export default Tasks
