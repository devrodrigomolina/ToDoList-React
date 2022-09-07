import React, { useContext, useState } from "react";
import styles from "./LiTasks.module.css";
import DeleteTask from "./DeleteTask";
import { useCheckbox } from "../Hooks/useCheckbox";
import Input from "../FormTask/Input";


const LiTasks = ({ task, index, array, setTask }) => {

  const { checkbox, setCheckbox } = useCheckbox();

  
  return (
    <li className={styles.li}>
      <Input
        value="value"
        checked={checkbox}
        onChange={() => setCheckbox(!checkbox)}
        type='checkbox'
      />
      <p className={checkbox ? "complete" : ""}>{task}</p>

      <DeleteTask index={index} array={array} setTask={setTask} opacity={'0'}/>
    </li>
  );
};

export default LiTasks;
