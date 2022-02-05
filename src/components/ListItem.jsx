import React from "react";

function ListItem(props){
    const itemColl = props.allItems
    const cat = props.category
    return(
        <ul className="list-group">
        {itemColl.filter(allItem => allItem.listName = ({cat})).map((filteredItem,index) => (
            <label key={index} className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value=""></input>
                {filteredItem.itemName}
            </label>
        ))}


        </ul>
    )
}


export default ListItem;

