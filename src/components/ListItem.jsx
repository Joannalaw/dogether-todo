import React from "react";

function ListItem(props){
    const itemColl = props.allItems
    const cat = props.category
    return(
        <ul className="list-group">
        {itemColl.filter(allItem => allItem.listName = ({cat})).map((filteredItem,index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">{filteredItem.itemName}</li>
        ))}


        </ul>
    )
}


export default ListItem;

