// src/components/TaskList.js
import React from 'react';
import DeleteTask from './DeleteTask';
import MarkTask from './MarkTask';
import './TaskList.css';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          <MarkTask 
            onToggle={onToggle} 
            index={index} 
            completed={task.completed}
          />
          <span>{task.text}</span>
          <DeleteTask onDelete={onDelete} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
