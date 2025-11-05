import { useState } from "react";

export default function SimpleTodo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Enter your Name</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        style={{ padding: "8px", width: "70%" }}
      />
      {/* <button onClick={addTask} style={{ padding: "8px" }}>Add</button> */}

      <ul className="bvs">
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button className="bv" onClick={() => removeTask(index)}>Remove</button>
          </li>
       ))}
      </ul>

    </div>
  );
}