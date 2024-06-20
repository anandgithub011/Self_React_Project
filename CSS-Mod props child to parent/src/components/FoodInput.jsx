import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnKeyDown }) => {
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Enter Food Name"
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default FoodInput;
