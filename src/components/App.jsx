import React, { useState } from "react";
import CreateList from "./CreateList";
import DashBoard from "./Dashboard";

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
      <DashBoard listName={lists} />
    </div>
  );
}

export default App;
