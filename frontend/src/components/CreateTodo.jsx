import { useState } from 'react';

export  function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input placeholder='title' onChange={(e)=>setTitle(e.target.value)}></input>
        <input placeholder='description' onChange={(e)=>setDescription(e.target.value)}></input>
        <button onClick={ ()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title,
                    description
                }),
                headers:{
                    "Content-type": "application/json"
                }
            }).then(async ()=>{
                alert("Todo created");
            })
        }
        }>Add Todo</button>
    </div>
    
}