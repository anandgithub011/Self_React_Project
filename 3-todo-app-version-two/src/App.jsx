// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoListItems from "./components/TodoListItems";

function App() {
  let todoItems = [
    {
      date: "4/10/2023",
      name: "Buy Milk",
    },
    {
      date: "4/10/2023",
      name: "Go to College",
    },
    {
      date: "24/01/2024",
      name: "Go to Gym",
    },
    {
      date: "Right Now",
      name: "Like this video",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoListItems items={todoItems}></TodoListItems>
    </center>
  );
}

export default App;
