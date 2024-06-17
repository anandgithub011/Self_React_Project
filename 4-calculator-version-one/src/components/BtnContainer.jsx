import styles from "./BtnContainer.module.css";

const BtnContainer = () => {
  let btnName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btnContainer}>
      {btnName.map((i) => (
        <button className={styles.btn} key={i}>
          {i}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
