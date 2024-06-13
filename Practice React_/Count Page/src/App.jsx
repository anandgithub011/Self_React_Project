import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncreaseClick = (IncValue) => {
    setCount((previous) => previous + IncValue);
    setCount((previous) => previous + IncValue);
  };
  const handleDecreaseClick = (Decvalue) => {
    setCount((previous) => previous - Decvalue);
  };

  return (
    <>
      <h1>{`Count: ${count}`}</h1>
      <button disabled={count >= 100} onClick={() => handleIncreaseClick(10)}>
        Increase
      </button>
      <button disabled={count === 0} onClick={() => handleDecreaseClick(5)}>
        Decrease
      </button>
    </>
  );
}

export default App;
