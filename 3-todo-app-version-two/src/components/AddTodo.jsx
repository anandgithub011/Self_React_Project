import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className="container">
      <div className={`${styles["kg-row"]} row`}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            className={styles.input}
          />
        </div>
        <div className="col-4">
          <input type="date" className={styles.input} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles["kg-button"]} btn btn-success`}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
