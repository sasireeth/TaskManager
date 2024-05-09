import React, { useState } from 'react';
import './index.css'

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, priority, dueDate });
    setTitle('');
    setDescription('');
    setPriority('');
    setDueDate('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="task-form__label">
        Title:
        <input
          className="task-form__input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label className="task-form__label">
        Description:
        <textarea
          className="task-form__textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label className="task-form__label">
        Priority:
        <select
          className="task-form__select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <label className="task-form__label">
        Due Date:
        <input
          className="task-form__input"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </label>
      <button className="task-form__submit-btn" type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
