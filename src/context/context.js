import React, { createContext, useState } from "react";

const AppContext = createContext()



const AppProvider = (props) => {
  
  const [taskArr, setTaskArr] = useState([])


  let addTask = (task,time,date)=>{
    if (task !=='' && time !=='' && date !=='') {
      setTaskArr(taskArr.concat({task,time,date}))
    }
  }


  return (
    <AppContext.Provider value={{ taskArr, addTask }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }