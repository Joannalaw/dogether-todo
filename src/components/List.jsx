import React from "react";

function List(props) {
  const allLists = props.listName;
  console.log(allLists);
  return allLists.map((item, index) => (
    <div key={index} className="list">
      <h1>{item}</h1>
    </div>
  ));
}

export default List;
