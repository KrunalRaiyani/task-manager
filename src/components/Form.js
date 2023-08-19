import React, { useContext, useRef } from 'react'
import { AppContext } from '../context/context'

const Form = () => {

    const context = useContext(AppContext)

    let {addTask} = context

    const taskVal = useRef()
    const timeVal = useRef()
    const DateVal = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        addTask(taskVal.current.value,timeVal.current.value,DateVal.current.value)
    }


    return (
        <form className='mt-4 form d-flex flex-column' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="task" className="form-label">Task</label>
                <input type="text" className="form-control task-inp" id="task" ref={taskVal} required />
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input type="date" className="form-control task-inp" id="date" ref={DateVal} required />
            </div>
            <div className="mb-3">
                <label htmlFor="time" className="form-label">Time</label>
                <input type="time" className="form-control task-inp" id="time" ref={timeVal} required />
            </div>
            <button type="submit" className="btn btn-primary my-4 align-self-center add-btn">Add Task</button>
        </form>
    )
}

export default Form