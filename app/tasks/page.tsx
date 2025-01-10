import TaskForm from '@/components/TaskForm'
import TaskList from '@/components/TaskList'
import React from 'react'

const Tasks = async () => {
    return (
        <>
            <TaskForm />
            <TaskList />
        </>
    )
}

export default Tasks