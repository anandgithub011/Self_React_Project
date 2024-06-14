import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { useRef } from "react";

function App() {
  const [data, SetData] = useState([]);

  console.log(data);

  const ref = useRef();
  const handleClick = () => {
    ref.current.focus();

    let newData = {
      title: ref.current.value,
      id: Date.now(),
    };
    SetData([...data, newData]);
    ref.current.value = "";

    // console.log(ref.current.value);
  };

  return (
    <>
      <div>
        <input class="form-control" type="text" ref={ref} />
        <button class="btn btn-success" onClick={handleClick}>
          Add
        </button>
      </div>
      {data.map((i) => (
        <p key={i.id}>
          {i.title} - {i.id}
        </p>
      ))}
    </>
  );
}

export default App;
