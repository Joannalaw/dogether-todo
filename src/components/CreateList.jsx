import React, {useState} from "react";


function CreateList(props){
    const [newList, setList] = useState("");
    function handleChange(event){
        const name = event.target.value;
        setList(name);
    }

    const handleClick = () => {
        props.onCreate(newList);
        setList("")
    }


    return (
        <div>
            <input onChange={handleChange} placeholder="enter the list name" name="listName" value={newList}></input>
            <button onClick={handleClick} className="btn btn-primary">Create</button>
        </div>
    )

}

export default CreateList;
