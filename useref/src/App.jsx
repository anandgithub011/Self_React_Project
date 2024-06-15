import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const [data, SetData] = useState([]);

  console.log(data);

  const ref = useRef();
  const handleAddClick = () => {
    ref.current.focus();

    // let newData = {
    //   title: ref.current.value,
    //   id: Date.now(),
    // };
    // SetData([...data, newData]);

    // let newData = [...data, { id: Date.now(), title: ref.current.value }];
    // SetData(newData);
    // ref.current.value = "";

    if (ref.current.value == "") {
      alert("Fill the Box");
    } else {
      let newData = [...data, { id: Date.now(), title: ref.current.value }];
      SetData(newData);
      ref.current.value = "";
    }
  };

  const handleDeleteClick = (id) => {
    let newArr = data.filter((i) => i.id !== id);
    SetData(newArr);
  };

  return (
    <>
      <div>
        <input className="form-control" type="text" ref={ref} />
        <button className="btn btn-success" onClick={handleAddClick}>
          Add
        </button>
      </div>
      {data.map((i) => (
        <div key={i.id}>
          <p>
            {i.title} - {i.id}
          </p>
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteClick(i.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
