import Items_list from "./Items_list";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((i) => (
        <Items_list key={i} foodList={i}></Items_list>
      ))}
    </ul>
  );
};

export default FoodItems;
