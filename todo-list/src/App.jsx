import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");          // for input value
  const [todos, setTodos] = useState([]);        // for list of tasks

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask(""); // Clear input
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>📝 To-Do List</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
