import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const DeleteTask = ({ array, index, setTask, opacity }) => {
  const handleDelete = () => {
    const tmpArray = [...array];
    tmpArray.splice(index, 1);
    setTask(tmpArray);
  };

  return (
    <>
      <FaTrashAlt
        onClick={handleDelete}
        style={{ color: "red", cursor: "pointer", opacity: `${opacity}` }}
      />
    </>
  );
};

export default DeleteTask;
