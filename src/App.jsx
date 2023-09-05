import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

import Header from './components/Header';
import Tasks from './components/Tasks'
import './App.css'
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
     const newTasks = tasks.map(task => {
        if (task.id === taskId) return { ...task, completed: !task.completed }
        
        return task;
     });

     setTasks(newTasks);
  }

  const handleTaskAddiction = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      }
    ];

    setTasks(newTasks);
  };

  const handleTaskDelection = (taskId) => {
    const newTasks = tasks.filter( task => task.id !== taskId)
    setTasks(newTasks)
  }
  
  return (
    <div className="container">
      <Header />
      <AddTask handleTaskAddiction={handleTaskAddiction} />
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelection={handleTaskDelection} />
    </div>
    )
}

export default App;