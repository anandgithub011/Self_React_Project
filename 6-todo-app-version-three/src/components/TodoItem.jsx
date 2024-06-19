import styles from "./TodoItem.module.css";
import { MdDeleteSweep } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className={`${styles["kg-row"]} row`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles["kg-button"]} btn btn-danger`}
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
