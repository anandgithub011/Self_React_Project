import "./App.css";
// import React from "react";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodArr = [];
  // let foodArr = [
  //   "Fresh Vegetables",
  //   "Dal",
  //   "Fruits",
  //   "Fish",
  //   "Roti",
  //   "Milk",
  //   "Hi-Fibre Food",
  //   "Salad",
  // ];

  // let textStateArr = useState("Food item entered by user.");
  // let inputTextToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [inputTextToShow, setTextState] = useState();

  // console.log(`current value of textState: ${inputTextToShow}`);

  let [foodArr, setfoodArr] = useState([
    "Dal",
    "Fruits",
    "Fish",
    "Roti",
    "Milk",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newfoodItem = event.target.value;
      event.target.value = "";
      // console.log(`new food item entered is:` + newfoodItem);
      const newfoodArr = [...foodArr, newfoodItem];
      setfoodArr(newfoodArr);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodArr}></ErrorMessage>
        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        {/* <p>{inputTextToShow}</p> */}
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
