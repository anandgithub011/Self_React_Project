import { useState } from "react";
import Items_list from "./Items_list";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (i, event) => {
    let newItems = [...activeItems, i];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((i) => (
        <Items_list
          key={i}
          foodList={i}
          bought={activeItems.includes(i)}
          buyButtonClick={(event) => onBuyButton(i, event)}
        ></Items_list>
      ))}
    </ul>
  );
};

export default FoodItems;
