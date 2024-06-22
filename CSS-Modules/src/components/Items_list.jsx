import styles from "./Items_list.module.css";

const Items_list = ({ foodList }) => {
  const buyButtonClick = () => {
    // console.log(event);
    console.log(`${foodList} being bought.`);
  };

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodList}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={buyButtonClick}
      >
        Buy
      </button>
    </li>
  );
};

export default Items_list;
