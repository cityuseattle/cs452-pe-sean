import React from 'react';

function TodoItem({ task, onDelete }) {
  return (
    <div className="todo-item">
      <span>{task}</span>
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
