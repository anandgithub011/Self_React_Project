import styles from "./AddTodo.module.css";
import { useState } from "react";
import { MdAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTodoNameChange = (event) => {
    // console.log(event.target.value);
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    // console.log(event.target.value);
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (todoName === "" || dueDate === "") {
      alert("Please check and Fill the Todo Input Box");
    } else {
      onNewItem(todoName, dueDate);
      setTodoName("");
      setDueDate("");
    }
  };

  return (
    <div className="container">
      <div className={`${styles["kg-row"]} row`}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            className={styles.input}
            value={todoName}
            onChange={handleTodoNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={styles.input}
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles["kg-button"]} btn btn-success`}
            onClick={handleAddButtonClicked}
          >
            <MdAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
