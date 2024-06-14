import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ onNewInput }) => {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    // console.log(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log(e.target.value);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    onNewInput(name, password);
    setName("");
    setPassword("");
  };

  return (
    <form className={styles.form}>
      <input
        onChange={handleNameChange}
        value={name}
        className={styles.user}
        type="text"
        placeholder="Enter Username"
      />
      <input
        onChange={handlePasswordChange}
        value={password}
        className={styles.user}
        type="text"
        placeholder="Enter Password"
      />
      <button onClick={handleLoginClick}>Add</button>
    </form>
  );
};

export default Form;
