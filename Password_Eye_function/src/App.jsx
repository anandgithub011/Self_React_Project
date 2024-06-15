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
        <input type={password ? "password" : "text"} placeholder="Password" />
        <div>
          {password ? (
            <FaRegEye onClick={handleClick} />
          ) : (
            <FaRegEyeSlash onClick={handleClick} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
