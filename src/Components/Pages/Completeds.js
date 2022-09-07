import React, { useContext } from "react";
import LiTasks from "../Tasks/LiTasks";
import { TaskContext } from "../../context/taskContext";
import { useCheckbox } from "../Hooks/useCheckbox";

const Completeds = (/* { task } */) => {
  const { task } = useContext(TaskContext)
  const { checkbox } = useCheckbox();
  return (
    <>
    {checkbox && task.map(tasks => <LiTasks task={tasks} />) }
    </>
  );
};

export default Completeds;
