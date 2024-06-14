import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Container from "./component/Container";
import Form from "./component/Form";

function App() {
  const [users, setUsers] = useState([]);
  // console.log(users);

  const handleNewInput = (InputName, InputPassword) => {
    setUsers([
      ...users,
      { id: Date.now(), name: InputName, password: InputPassword },
    ]);
  };

  const handleDeleteClick = (name) => {
    let newDetails = users.filter((i) => {
      return i.name !== name;
    });
    setUsers(newDetails);
  };

  return (
    <>
      <Container>
        <Form onNewInput={handleNewInput}></Form>
      </Container>
      <Container>
        <div>
          {users.map((user, index) => (
            <ul key={index}>
              <li>
                <p>Name: {user.name}</p>
                <p>Password: {user.password}</p>
              </li>
              <button onClick={() => handleDeleteClick(user.name)}>
                Delete
              </button>
            </ul>
          ))}
        </div>
      </Container>
    </>
  );
}

export default App;
