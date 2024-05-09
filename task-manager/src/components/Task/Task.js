import React, { useState } from 'react';
import './index.css'

function Task({ task, deleteTask, updateTask }) {
  const [editedTask, setEditedTask] = useState({ ...task });
  const [isEditing, setIsEditing] = useState(false);

  const { id, title, description, priority, dueDate, completed } = editedTask;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleToggleCompletion = () => {
    const updatedTask = { ...editedTask, completed: !completed };
    setEditedTask(updatedTask); 
    updateTask(updatedTask); 
  };

  const handleSave = () => {
    updateTask(editedTask);
    setIsEditing(false); 
  };

  const handleEdit = () => {
    setIsEditing(true); 
  };

  const handleCancel = () => {
    setIsEditing(false); 
    setEditedTask({ ...task }); 
  };

  return (
    <div className={`task ${completed ? 'completed' : 'pending'}`}>
      {isEditing ? (
        <div className="edit-task">
          <input type="text" name="title" value={title} onChange={handleChange} className="edit-title" />
          <textarea name="description" value={description} onChange={handleChange} className="edit-description" />
          <input type="text" name="priority" value={priority} onChange={handleChange} className="edit-priority" />
          <input type="date" name="dueDate" value={dueDate} onChange={handleChange} className="edit-dueDate" />
          <button onClick={handleSave} className="save-btn">Save</button>
          <button onClick={handleCancel} className="cancel-btn">Cancel</button>
        </div>
      ) : (
        <div className="view-task">
          <h3>{title}</h3>
          <p className='description'>{description}</p>
          <p>Priority: {priority}</p>
          <p>Due Date: {dueDate}</p>
          <p>Status: {completed ? 'Completed' : 'Pending'}</p>
          <button onClick={handleEdit} className="edit-btn">Edit</button>
          <button onClick={() => deleteTask(id)} className="delete-btn">Delete</button>
          <input type="checkbox" checked={completed} onChange={handleToggleCompletion} className="completion-checkbox" />
          <label className="completion-label">Completed</label>
        </div>
      )}
    </div>
  );
}

export default Task;
