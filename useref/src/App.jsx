import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const [data, SetData] = useState([]);

  // console.log(data);

  const inputUserName = useRef();
  const handleAddClick = () => {
    inputUserName.current.focus();

    if (inputUserName.current.value == "") {
      alert("Fill the Box");
    } else {
      let newData = [
        ...data,
        { id: Date.now(), title: inputUserName.current.value },
      ];
      SetData(newData);
      inputUserName.current.value = "";
    }

    // let newData = {
    //   title: inputUserName.current.value,
    //   id: Date.now(),
    // };
    // SetData([...data, newData]);

    // let newData = [...data, { id: Date.now(), title: inputUserName.current.value }];
    // SetData(newData);
    // inputUserName.current.value = "";
  };

  const handleDeleteClick = (id) => {
    let newArr = data.filter((i) => i.id !== id);
    SetData(newArr);
  };

  return (
    <>
      <div>
        <input
          className="form-control"
          placeholder="Enter Title"
          type="text"
          ref={inputUserName}
        />
        <button
          className="btn btn-success"
          type="button"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>
      {data.map((i) => (
        <div key={i.id} className="container border">
          <div className="row">
            <p className="col-4 modal-header">{`Title Name: ${i.title}`}</p>
            <p className="col-4 modal-header">{`ID: ${i.id}`}</p>
            <button
              className="btn btn-outline-danger col-2 float-end"
              onClick={() => handleDeleteClick(i.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
