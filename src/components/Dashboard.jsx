import React from "react";
import List from "./List"

function DashBoard(props){
    const listColl = props.listName
    return listColl.map((listItem, index) => (
        <List list={listItem} key={index}/>
      )); 
}

export default DashBoard;


