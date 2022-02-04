import React, { useState } from "react";
import CreateList from "./CreateList";
import List from "./List";

function App() {
  const [lists, setLists] = useState([]);
  function createList(props) {
    setLists((prevList) => {
      return [...prevList, props];
    });
  }
  return (
    <div>
      <CreateList onCreate={createList} />
      <List listName={lists} />
    </div>
  );
}

export default App;
