import React, { useState } from 'react';
import Task from '../Task/Task';
import './index.css'

function TaskList({ tasks, deleteTask, toggleTaskCompletion, updateTask }) {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    } else {
      return true; 
    }
  });

  const priorityValues = {
    'High': 3,
    'Medium': 2,
    'Low': 1
  };
  
  const sortedTasks = sortBy ? filteredTasks.sort((a, b) => {
    if (sortBy === 'priority') {
      return priorityValues[b.priority] - priorityValues[a.priority];
    } else if (sortBy === 'dueDate') {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else {
      return 0;
    }
  }) : filteredTasks;

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="task-list-container">
      <div className="task-list-filters">
        <label className="filter-label">
          Filter by:
          <select value={filter} onChange={handleFilterChange} className="filter-select">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </label>
        <label className="sort-label">
          Sort by:
          <select value={sortBy} onChange={handleSortChange} className="sort-select">
            <option value="">None</option>
            <option value="priority">Priority</option>
            <option value="dueDate">Due Date</option>
          </select>
        </label>
      </div>
      <div className="task-list">
        {sortedTasks.map(task => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
