import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState({
    Today: [],
    Tomorrow: [],
    "This Week": [],
    "Next Week": [],
    Unplanned: Array.from({ length: 10 }, (_, i) => `Task ${i + 1}`),
  });

  const moveTask = (task, targetList, sourceList) => {
    const newTasks = { ...tasks };
    if (task) {
      newTasks[sourceList] = tasks[sourceList].filter((t) => t !== task);
    }
    newTasks[targetList] = [...tasks[targetList], task];
    setTasks(newTasks);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {Object.keys(tasks).map((listName) => (
          <TaskList
            key={listName}
            title={listName}
            tasks={tasks[listName]}
            moveTask={moveTask}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default App;
