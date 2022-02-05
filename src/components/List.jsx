import React, { useState } from "react";
import ListItem from "./ListItem";

function List(props) {
  const [item, setItem] = useState({
    listName: "",
    itemName: "",
    status: "pending",
    assignedTo: "",
  });

  const [itemColl, setItemColl] = useState([]);

  function handleChange(event) {
    const listName = event.target.name;
    const itemName = event.target.value;
    setItem((prevState) => {
      return {
        ...prevState,
        listName: listName,
        itemName: itemName,
      };
    });
  }

  const addItem = () => {
    setItemColl((prevItems) => {
      return [...prevItems, item];
    });
    setItem({
      listName: "",
      itemName: "",
      status: "pending",
      assignedTo: "",
    });
  };

  return (
    <div className="list">
      <button type="button" className="btn-close cancelButton"></button>
      <h1>{props.list}</h1>
      <input
        onChange={handleChange}
        placeholder="Add To Do item"
        name={props.list}
        value={item.itemName}
        className="inputField"
      ></input>
      <button onClick={addItem} className="btn btn-warning">
        Add
      </button>
      <ListItem allItems={itemColl} category={item} />
    </div>
  );
}

export default List;
