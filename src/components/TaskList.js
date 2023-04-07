import { useState } from 'react';
import React from "react";
import Task from './Task'

function TaskList({ tasks }) {

  const renderedTasks = tasks.map((task) => {
    return (<Task text={task.text} category={task.category} key={task.text} />)
  })

  return (
    <div className="tasks">
      {renderedTasks}
    </div>
  );
}

export default TaskList;
