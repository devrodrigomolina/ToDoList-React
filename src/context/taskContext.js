import { createContext, useEffect, useState } from "react";
export const TaskContext = createContext();
/*   const { returnStorage } = useLocalStorage("test", task); */

const TaskProvider = (props) => {
  const getLocalStorage = localStorage.getItem('tasks')

  const [task, setTask] = useState(() => {
    if(getLocalStorage !== null) {
      return JSON.parse(getLocalStorage)
    }
   return []
  })

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
