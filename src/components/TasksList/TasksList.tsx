// @ts-nocheck
import React, { useState, useEffect } from 'react'
import TaskColumn from '../TaskColumn/TaskColumn'
import styles from './TasksList.module.css'

const TasksList = ({ data }) => {
    const [backlogTasks, setBacklogTasks] = useState([])
    const [selectedForDevelopmentTasks, setSelectedForDevelopmentTasks] =
        useState([])
    const [inProgressTasks, setInProgressTasks] = useState([])
    const [doneTasks, setDoneTasks] = useState([])

    useEffect(() => {
        data.forEach((el) => {
            switch (el.status) {
                case 'backlog':
                    setBacklogTasks((prevState) => [...prevState, el])
                    break
                case 'selected for development':
                    setSelectedForDevelopmentTasks((prevState) => [
                        ...prevState,
                        el,
                    ])
                    break
                case 'in progress':
                    setInProgressTasks((prevState) => [...prevState, el])
                    break
                case 'done':
                    setDoneTasks((prevState) => [...prevState, el])
                    break
                default:
                    break
            }
        })
    }, [])

    /*

	*/

    return (
        <div className={styles.container}>
            <TaskColumn tasks={backlogTasks} columnName="Backlog" />
            <TaskColumn
                tasks={selectedForDevelopmentTasks}
                columnName="Selected for development"
            />
            <TaskColumn tasks={inProgressTasks} columnName="In Progress" />
            <TaskColumn tasks={doneTasks} columnName="Done" />
        </div>
    )
}

export default TasksList
