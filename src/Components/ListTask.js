import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import "./ListTask.css";

const ListTask = () => {
  const list = useSelector((state) => state.tasks);
  return (
    <div className="list">
      {list.map((el) => (
        <TaskItem key={el.id} el={el} />
      ))}
    </div>
  );
};

export default ListTask;
