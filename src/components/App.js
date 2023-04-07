import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS)


  function onNewCategories(e) {
    const newTasks = TASKS.filter((task) => {
      if (task.category === e || e === 'All') {
        return task
      }
    })
    setTasks(newTasks)

  }
  function onTaskFormSubmit(e) {
    const newArray = [...tasks, e]
    setTasks(newArray)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onNewCategories={onNewCategories} />
      <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== 'All')} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
