import React from 'react'

const Task = (props) => {
  
    let color = 'gray'
    
    let currentTime = new Date()
    
    let currentTaskTime = new Date([props.date,props.time])
    
    let nextTsakTime = new Date([props.endDate,props.endTime])
    
    let preTsakTime = new Date([props.preDate,props.preTime])
    
    

    if (currentTaskTime < currentTime && currentTime > nextTsakTime) {
        color = 'green'
    }
    else if(currentTime > currentTaskTime){
        color = 'blue'
    }
    else if(currentTime > currentTaskTime && currentTime < nextTsakTime){
        color = 'blue'
    }
    else if(currentTime < currentTaskTime && currentTime > preTsakTime){
        color = 'purple'
    }
    
    return (
        <div className={`alert alert-${color} d-flex justify-content-between px-4`} role="alert">
           <div>{props.task}</div>
           <div>{props.time} - {!props.endTime?"End time":props.endTime}</div>
        </div>
    )
}

export default Task