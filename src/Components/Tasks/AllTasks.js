import React from "react";
import LiTasks from "./LiTasks";
import styles from "./AllTasks.module.css";
import Input from "../CreateTask/Input";
import Button from "../CreateTask/Button";
import { useState } from "react";

const AllTasks = () => {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([]);

  const handleTask = () => {
    setTask([...task, value]);
  };

  return (
    <div>
      <div className={styles.add_task}>
        <Input
          className={styles.input}
          type="text"
          placeholder="Digite sua task"
          onChange={({ target }) => setValue(target.value)}
        />
        <Button onClick={handleTask} text="Add task" />
      </div>
      
      {task.length > 0 ? (
        <ul className={styles.ul}>
          {task.map((task) => (
            <LiTasks task={task} />
          ))}
        </ul>
      ) : (
        <p className={styles.p}>Sem tasks no momento..</p>
      )}
    </div>
  );
};

export default AllTasks;
