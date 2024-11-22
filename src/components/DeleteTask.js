// src/components/DeleteTask.js
import React from 'react';
import './DeleteTask.css';

const DeleteTask = ({ onDelete, index }) => {
  return (
    <button className="delete-task" onClick={() => onDelete(index)}>
      Delete
    </button>
  );
};

export default DeleteTask;
