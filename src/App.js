import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "To-do React Application Project", completed: false },
    { id: 2, text: "Review Task Management DashBoard App", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Task Management Dashboard</h1>
        <p className="tagline">Organize your day Tasks</p>
      </header>

      <div className="task-input-container">
        <input
          type="text"
          className="form-control custom-input"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-success custom-btn" onClick={addTask}>
          ➕ Add Task
        </button>
      </div>

      <div className="stats">
        <p>
          Total Tasks: <b>{tasks.length}</b> | Completed:{" "}
          <b>{tasks.filter((t) => t.completed).length}</b>
        </p>
      </div>

      <div className="task-cards">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-card ${task.completed ? "completed" : ""}`}
            onClick={() => toggleTask(task.id)}
          >
            <p>{task.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


// import React, { createContext, useReducer, useContext, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css"; // we'll add custom styles here

// // ---------------- Context + Reducer ----------------
// const TaskContext = createContext();

// const ACTIONS = {
//   ADD: "ADD",
//   REMOVE: "REMOVE",
//   TOGGLE: "TOGGLE"
// };

// function taskReducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.ADD:
//       return [...state, { id: Date.now(), text: action.payload, completed: false }];
//     case ACTIONS.REMOVE:
//       return state.filter(task => task.id !== action.payload);
//     case ACTIONS.TOGGLE:
//       return state.map(task =>
//         task.id === action.payload ? { ...task, completed: !task.completed } : task
//       );
//     default:
//       return state;
//   }
// }

// function TaskProvider({ children }) {
//   const [tasks, dispatch] = useReducer(taskReducer, [
//     { id: 1, text: "DotNet Project Task", completed: false },
//     { id: 2, text: "React Application Project Task", completed: true }
//   ]);

//   return (
//     <TaskContext.Provider value={{ tasks, dispatch }}>
//       {children}
//     </TaskContext.Provider>
//   );
// }

// // ---------------- Custom Hook ----------------
// function useTasks() {
//   const ctx = useContext(TaskContext);
//   if (!ctx) throw new Error("useTasks must be used inside TaskProvider");
//   const { tasks, dispatch } = ctx;

//   const add = text => dispatch({ type: ACTIONS.ADD, payload: text });
//   const remove = id => dispatch({ type: ACTIONS.REMOVE, payload: id });
//   const toggle = id => dispatch({ type: ACTIONS.TOGGLE, payload: id });

//   return { tasks, add, remove, toggle };
// }

// // ---------------- Components ----------------
// function AddTask() {
//   const [text, setText] = useState("");
//   const { add } = useTasks();

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!text.trim()) return;
//     add(text);
//     setText("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
//       <input
//         type="text"
//         className="form-control custom-input"
//         placeholder="Add new task..."
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button type="submit" className="btn btn-custom">
//         Add
//       </button>
//     </form>
//   );
// }

// function TaskItem({ task }) {
//   const { toggle, remove } = useTasks();
//   return (
//     <li
//       className={`list-group-item task-item d-flex justify-content-between align-items-center ${
//         task.completed ? "completed" : ""
//       }`}
//     >
//       <div>
//         <input
//           type="checkbox"
//           className="form-check-input me-2"
//           checked={task.completed}
//           onChange={() => toggle(task.id)}
//         />
//         <span>{task.text}</span>
//       </div>
//       <button className="btn btn-sm btn-outline-danger" onClick={() => remove(task.id)}>
//         Remove
//       </button>
//     </li>
//   );
// }

// function TaskList() {
//   const { tasks } = useTasks();
//   const total = tasks.length;
//   const completed = tasks.filter(t => t.completed).length;

//   return (
//     <div className="task-container">
//       <h5 className="mb-3">
//         Total Tasks:{" "}
//         <span className="badge bg-secondary">{total}</span> | Completed:{" "}
//         <span className="badge bg-success">{completed}</span>
//       </h5>
//       {tasks.length === 0 ? (
//         <p className="text-muted">No tasks yet. Add one above!</p>
//       ) : (
//         <div className="task-list-container">
//           <ul className="list-group">
//               {tasks.map(task => (
//               <TaskItem key={task.id} task={task} />
//             ))}
//           </ul>
//         </div>
//         // <ul className="list-group custom-list">
//         //   {tasks.map(task => (
//         //     <TaskItem key={task.id} task={task} />
//         //   ))}
//         // </ul>
//       )}
//     </div>
//   );
// }

// // ---------------- Main App ----------------
// function App() {
//   return (
//     <TaskProvider>
//       <div className="App app-background">
//         <header className="App-header mb-4">
//           <h1 className="title">!...Task Management Dashboard...!</h1>
//         </header>
//         <AddTask />
//         <TaskList />
//       </div>
//     </TaskProvider>
//   );
// }
// export default App;