# Task Management Dashboard Application

A simple and modern **Task Management Application** built using **React** and styled with **Bootstrap + custom CSS**.  
This app allows users to add, view, and mark tasks as completed in a clean, card-based UI.
---
## Features
- Add new tasks dynamically.
- Mark tasks as **completed / pending**.
- Display **total tasks** and **completed tasks** count.
- Responsive **card-based layout** with olive-green theme.
- Built using **React Hooks** (`useState`) for state management.
- Demonstrates **Context API** structure for scalable global state (future extension).
---

## 📂 Project Structure
task-manager/
│
├── src/
│ ├── App.js # Main application logic
│ ├── App.css # Custom styling
│ ├── index.js # Entry point for React
│ ├── context/
│ │ └── TaskContext.js # Context API (for scalability)
│ └── components/ # (Future extension: reusable components)
│
├── package.json # Dependencies and scripts
├── README.md # Project documentation
└── public/ # Static assets

## Installation & Running Locally

1. **Clone the Repository**
   git clone https://github.com/KRajesh9999/Wipro_ReactAsses_W7_D1_TaskManagementToggle.git
   cd task-manager
2. npm install
3. npm start  --> The app will start at http://localhost:3000/

## Application Architecture

React Components:
App.js → Root component holding state and UI logic.
Future-ready structure: can be extended with reusable components in /components.

State Management:
Uses React Hooks (useState) for:
Storing tasks
Updating completed status
Managing new task input

## UI Layer
Bootstrap + Custom CSS for styling.
Card-based responsive layout instead of table/list.

## Context API (Scalable Extension):
Currently, state is managed in App.js via useState.
For larger applications, Context API can be introduced:
TaskContext.js → Provides global state.
TaskProvider → Wraps app for centralized task management.
Components consume state via useContext.

## React Hooks & Context API
1. React Hooks
Used to manage useState:
tasks (array of task objects)
newTask (string for input field)

Benefits:
Eliminates class components.
Keeps state logic concise and readable.

2. Context API
This app can easily scale to Context API for global state management.
Advantage:
Avoids prop drilling.
Makes it easier to scale for large applications with multiple pages/components.

React Application Snaps:
1. Home page:
<img width="1904" height="868" alt="image" src="https://github.com/user-attachments/assets/9ec663a5-2999-426b-9266-5260e5175d4b" />

2. Completed Task Count and Adding new Task:
<img width="1917" height="895" alt="image" src="https://github.com/user-attachments/assets/4e02c841-118a-49c2-9173-f94f8e3b85ab" />


