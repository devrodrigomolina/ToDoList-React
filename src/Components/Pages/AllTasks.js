import React from "react";
import LiTasks from "../Tasks/LiTasks";
import styles from "./AllTasks.module.css";
import Input from "../FormTask/Input";
import Button from "../FormTask/Button";
import { useState } from "react";

const AllTasks = () => {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([]);

  const addTask = () => {
    if(value) setTask([...task, value]);
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
        <Button onClick={addTask} text="Add task" />
      </div>

      {task.length > 0 ? (
        <ul className={styles.ul}>
          {task.map((task, index, array) => (
            <LiTasks
              key={index}
              task={task}
              index={index}
              array={array}
              setTask={setTask}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.p}>Sem tasks no momento..</p>
      )}
    </div>
  );
};

export default AllTasks;
