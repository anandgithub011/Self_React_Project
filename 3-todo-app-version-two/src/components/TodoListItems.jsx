import TodoItem from "./TodoItem";
import styles from "./TodoListItems.module.css";

const TodoListItems = ({ items }) => {
  return (
    <div className={styles.itemContainer}>
      {items.map((i) => (
        <TodoItem todoName={i.name} todoDate={i.date}></TodoItem>
      ))}
    </div>
  );
};

export default TodoListItems;
