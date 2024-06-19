import Display from "./components/Display";
import styles from "./App.module.css";
import BtnContainer from "./components/BtnContainer";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (event) => {
    // console.log(event.target.innerText);

    if (event.target.innerText === "C") {
      setCalVal("");
    } else if (event.target.innerText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + event.target.innerText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.container}>
      <Display displayValue={calVal}></Display>
      <BtnContainer onButtonClick={onButtonClick}></BtnContainer>
    </div>
  );
}

export default App;
