import "./App.css";
// import React from "react";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodArr = [
    "Fresh Vegetables",
    "Dal",
    "Fruits",
    "Fish",
    "Roti",
    "Milk",
    "Hi-Fibre Food",
  ];
  // let foodArr = [];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodArr}></ErrorMessage>
        <FoodInput></FoodInput>
        <FoodItems items={foodArr}></FoodItems>
      </Container>
      <Container>
        <p>
          Above food list are basically used in day to day life for being a
          healthy person.
        </p>
      </Container>
    </>
  );
}

export default App;
