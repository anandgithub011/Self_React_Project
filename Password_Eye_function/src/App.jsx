import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

function App() {
  const [password, setPassword] = useState(true);
  const handleClick = () => {
    setPassword(!password);
  };

  return (
    <>
      <div className="d-inline-flex">
        <input
          type={password ? "password" : "text"}
          placeholder="Enter Password"
        />
        <div className="eye">
          {password ? (
            <FaRegEyeSlash onClick={handleClick} />
          ) : (
            <FaRegEye onClick={handleClick} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
