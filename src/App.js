import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([              // Set list of tasks
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false },
  ]);

  const updateProgress = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    return (completedTasks / tasks.length) * 100;       // Return relative value of how many tasks are done
  };

  const handleCheckboxChange = (taskId) => {            // Set the correct completed value
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            id={`task${task.id}`}   // Set task<id> as id
            checked={task.completed}    // Set completed to a boolean value
            onChange={() => handleCheckboxChange(task.id)}  // Handle change
          />
          <label htmlFor={`task${task.id}`}>{task.text}</label>
        </div>
      ))}
      <progress value={updateProgress()} max="100"></progress>
    </div>
  );
};

export default App;
