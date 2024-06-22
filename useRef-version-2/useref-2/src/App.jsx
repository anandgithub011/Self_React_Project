import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);

  const inputUserId = useRef();
  const inputUserPass = useRef();

  const handleSubmitClick = (e) => {
    e.preventDefault();

    inputUserId.current.focus();

    if (inputUserId.current.value == "" || inputUserPass.current.value == "") {
      alert("Fill the UserId and Password");
    } else {
      let newData = [
        ...userData,
        {
          id: Date.now(),
          Username: inputUserId.current.value,
          Password: inputUserPass.current.value,
        },
      ];
      setUserData(newData);
      inputUserId.current.value = "";
      inputUserPass.current.value = "";
    }
  };

  const handleDeleteClick = (id) => {
    let newUserData = userData.filter((el) => el.id !== id);
    setUserData(newUserData);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmitClick}>
          <input ref={inputUserId} type="text" />
          <input ref={inputUserPass} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {userData.map((i) => (
          <div key={i.id} className="container border">
            <div className="row">
              <p className="col-4 modal-header">{`UserName: ${i.Username}`}</p>
              <p className="col-4 modal-header">{`Password: ${i.Password}`}</p>
              <button
                className="btn btn-outline-danger col-2"
                onClick={() => handleDeleteClick(i.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
