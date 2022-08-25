import React from "react";
import styles from "./LiTasks.module.css";
import { FaTrashAlt } from "react-icons/fa";
import Input from "../CreateTask/Input";

const LiTasks = ({ task }) => {
  return (
    <li className={styles.li}>
      <Input type='checkbox' className={styles.input}/>
      {task} 
      <FaTrashAlt style={{color: 'red'}} />
    </li>
  );
};

export default LiTasks;
