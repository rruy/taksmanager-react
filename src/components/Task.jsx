import React from 'react';

import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDelection } ) => {
  return (
     <div 
        className='task-container' 
        style={ task.completed ? { borderLeft: "6px solid chartreuse" } : {} } 
      >
          <div className="task-title" onClick={() => handleTaskClick(task.id)}>
            {task.title}
          </div>

          <div className='buttons-container'>
            <button className='remove-task-button' onClick={() => handleTaskDelection(task.id)} >x</button>
          </div>
      </div>
  );
};

export default Task;
