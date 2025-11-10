import React, { useState } from "react";
// import "./App.css";
import "./Custom.css";


function App(){
    // ✅ Input ke liye state
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
  if (!taskInput.trim()) return;  // agar input khali ho, kuch na kare
  
  const newTask = {
    text: taskInput,
    seconds: 0, // timer seconds
    running: false // timer start/stop
  };

  setTasks([...tasks, newTask]); // existing tasks me naya add karo
  setTaskInput("");                // input box ko clear karo
  
};

 const deleteTask = (indexToDelete) => {
   setTasks(tasks.filter((_, index) => index !== indexToDelete));
 }

 const toggleTimer = (index) => {
  setTasks(tasks.map((task, i) => {
    if (i === index) {
      return { ...task, running: !task.running };
    }
    return task;
  }));
};

  // 🖼️ Step 4: UI return
  return (
    <div className="todo-container">
    <h1 className="title">My To-Do Tracker</h1>

    <div className="input-area">
      <input type="text" id="taskInput" 
      value={taskInput}
      onChange={(e)=> setTaskInput(e.target.value)} placeholder="Add a new task..." />
      <button id="addBtn" onClick={addTask}>Add</button>
    </div>

    <ul id="taskList" className="task-list">
       {tasks.map((task, index) => (
    <li key={index} className="task-item">{task.text}
    <button
        className={task.running ? "small stop-btn" : "small start-btn"}
        onClick={() => toggleTimer(index)}
      >
        {task.running ? "Stop" : "Start"}
      </button>
    <button className="small delete-btn" onClick={() => deleteTask(index)}>
        Delete
      </button>
    </li>
  ))}
    </ul>
  </div>
    
  );
}

export default App;