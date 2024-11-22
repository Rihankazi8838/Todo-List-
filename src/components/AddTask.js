import React, { useState } from 'react';
import './AddTask.css';

const AddTask = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAdd(newTask);
      setNewTask('');
    }
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
