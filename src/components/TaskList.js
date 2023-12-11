import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const Task = ({ task, moveTask, list }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { task: task, list: list },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: "1px solid #ccc",
        padding: "8px",
        marginBottom: "8px",
        backgroundColor: "white",
        cursor: "move",
      }}
    >
      {task}
    </div>
  );
};

const TaskList = ({ title, tasks, moveTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item) => {
      moveTask(item.task, title, item.list);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        marginBottom: "16px",
        backgroundColor: isOver ? "lightgreen" : "white",
      }}
    >
      <h3>{title}</h3>
      {tasks.map((task, index) => (
        <Task key={index} task={task} moveTask={moveTask} list={title} />
      ))}
    </div>
  );
};

export default TaskList;
