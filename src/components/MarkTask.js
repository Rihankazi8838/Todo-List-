import React from 'react';
import './MarkTask.css';

const MarkTask = ({ onToggle, index, completed }) => {
  return (
    <span 
      className={`mark-task ${completed ? 'completed' : ''}`} 
      onClick={() => onToggle(index)}
    >
      {completed ? '✔️' : '◻️'}
    </span>
  );
};

export default MarkTask;
