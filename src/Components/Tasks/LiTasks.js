import React, { useState } from "react";
import styles from "./LiTasks.module.css";
import DeleteTask from "./DeleteTask";
import Input from "../FormTask/Input";

const LiTasks = ({ task, index, array, setTask }) => {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <li className={styles.li}>
      <Input
        value="value"
        checked={checkbox}
        onChange={({ target }) => setCheckbox(target.checked)}
        type="checkbox"
      />
      <p className={checkbox ? 'complete' : ''}>{task}</p>

      <DeleteTask index={index} array={array} setTask={setTask} />
    </li>
  );
};

export default LiTasks;
