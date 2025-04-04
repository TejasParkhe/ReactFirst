import "./fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

function Todolist() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setError("Task name cannot be empty!");
      return;
    }
    if (
      tasks.some(
        (task) => task.name.toLowerCase() === trimmedInput.toLowerCase()
      )
    ) {
      setError("Task with the same name already exists!");
      return;
    }
    setTasks([...tasks, { name: trimmedInput, completed: false }]);
    setInput("");
    setError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  const updateTask = (index, newName) => {
    const trimmedName = newName.trim();
    if (!trimmedName) {
      setError("Task name cannot be empty!");
      return;
    }
    if (
      tasks.some(
        (task, i) =>
          task.name.toLowerCase() === trimmedName.toLowerCase() && i !== index
      )
    ) {
      setError("Task with the same name already exists!");
      return;
    }
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, name: trimmedName } : task
    );
    setTasks(updatedTasks);
    setError("");
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return !task.completed;
    if (filter === "uncompleted") return task.completed;
    return true; // "all"
  });
  return (
    <>
      <div className="top">
        <h1>TO DO LIST</h1>
      </div>

      <div className="todolist">
        <div className="list-row">
          <span>
            <input
              type="text"
              placeholder="Add New Task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={addTask}>
              <FontAwesomeIcon icon="plus" />
            </button>
          </span>

          <span className="task-filter">
            <select onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </span>
        </div>
        <script src=""></script>
        <ul>
          {filteredTasks.map((task, index) => (
            <li
              key={index}
              className={`task ${task.completed ? "completed" : ""}`}
            >
              <input
                type="radio"
                checked={task.completed}
                onChange={() => toggleCompletion(index)}
              />
              <input
                type="text"
                value={task.name}
                onChange={(e) => updateTask(index, e.target.value)}
              />
              <button onClick={() => deleteTask(index)}>
                <FontAwesomeIcon icon="trash" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todolist;
