import React, {useState} from "react";


function CreateList(props){
    const [newList, setList] = useState("");
    function handleChange(event){
        const name = event.target.value;
        setList(name);
    }

    const handleClick = () => {
        props.onCreate(newList);
    }
    return (
        <div>
            <input onChange={handleChange} placeholder="enter the list name" name="listName"></input>
            <button onClick={handleClick} >Create</button>
        </div>
    )

}

export default CreateList;
