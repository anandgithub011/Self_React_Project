import TodoItem from "./TodoItem";
import styles from "./TodoListItems.module.css";

const TodoListItems = ({ items, onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      {items.map((i) => (
        <TodoItem
          todoName={i.name}
          key={i.id}
          todoDate={i.date}
          onDeleteClick={() => onDeleteClick(i.id)}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoListItems;
