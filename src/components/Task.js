import React from "react";
import { useDrag } from "react-dnd";

const Task = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { task },
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
        marginBottom: "4px",
        cursor: "move",
      }}
    >
      {task}
    </div>
  );
};

export default Task;
