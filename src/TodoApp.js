import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Frame from './components/Frame';
import './TodoApp.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task, taskIndex) => taskIndex !== index));
  };

  const handleToggleTask = (index) => {
    setTasks(tasks.map((task, taskIndex) => 
      taskIndex === index ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <Frame>
      <div className="todo-app">
        <h1>To-Do List</h1>
        <AddTask onAdd={handleAddTask} />
        <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
      </div>
    </Frame>
  );
};

export default TodoApp;
