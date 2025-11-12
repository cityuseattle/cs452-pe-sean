import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() === '') return;
    setTodos([...todos, task]);
    setTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1>CS452 - Sean's To Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task description"
          value={task}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <TodoList todos={todos} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
