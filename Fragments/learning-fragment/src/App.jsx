import "./App.css";
// import React from "react";

function App() {
  let foodItems = ["Fresh Vegetables", "Dal", "Fruits", "Fish", "Roti", "Milk"];
  // let foodItems = [];

  // if (foodItems.length == 0) {
  //   return <p>I am still hungry.</p>;
  // }

  // let emptyArr = foodItems.length == 0 ? <p>I am still hungry</p> : null;

  return (
    <>
      <h1>Healthy Food</h1>

      {foodItems.length == 0 && <p>I am stil hungry.</p>}

      <ul className="list-group">
        {foodItems.map((i) => (
          <li key={i} className="list-group-item">
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
