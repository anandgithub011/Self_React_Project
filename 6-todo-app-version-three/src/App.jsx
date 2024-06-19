import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoListItems from "./components/TodoListItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New item added: ${itemName} Date: ${itemDueDate}`);

    let newTodoItems = [
      ...todoItems,
      { id: Date.now(), date: itemDueDate, name: itemName },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (id) => {
    // console.log(`Item Deleted: ${todoItemName}`);
    let newTodoItems = todoItems.filter((i) => i.id !== id);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoListItems
        items={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoListItems>
    </center>
  );
}

export default App;
