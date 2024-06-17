import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <Container>
        <Navbar></Navbar>
        <AllRoutes></AllRoutes>
      </Container>
    </>
  );
}

export default App;
