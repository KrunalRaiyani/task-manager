import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import Task from './Task'

const TaskContainer = () => {

    const context = useContext(AppContext)

    let {taskArr} = context

  return (
    <div>
        <h2 className='my-4 mt-2'>Tasks</h2>
        {taskArr.length === 0 && <p>There are currently no tasks to display. Please create a new task</p>}
        
        {
            taskArr.map((e,i)=>{  
               return <Task key = {e.time} task = {e.task} time = {e.time} date = {e.date} endTime = {taskArr[i+1]&&taskArr[i+1].time} endDate = {taskArr[i+1] &&taskArr[i+1].date} preTime = {i>=1&&taskArr[i-1].time} preDate = {i>=1&&taskArr[i-1].date} />
            })
        }
    </div>
  )
}

export default TaskContainer