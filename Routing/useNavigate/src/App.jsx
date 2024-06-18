import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Container from "./components/Container";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar";

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
