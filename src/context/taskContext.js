import { createContext } from "react";

const TaskContext = createContext();

const TaskProvider = (props) => (
  <TaskContext.Provider value={{}}>{props.children}</TaskContext.Provider>
);

export default TaskProvider