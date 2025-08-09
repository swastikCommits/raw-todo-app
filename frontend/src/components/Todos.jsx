import { useEffect, useState } from "react";

export function Todos(){
    return(
        <div>
            <ShowTodos/>
        </div>
    )
}

function ShowTodos(){
    const [todos, setTodos ] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/todos")
            .then(async (res)=>{
                const json = await res.json();
                setTodos(json.todos);
            })
    }, [todos])

    return(
        <div>
            {todos.map((todo)=> (
                <div key={todo._id} style={{padding: 10}}>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <div>
                        <HandleCompletion id={todo._id} completed={todo.completed} />
                    </div>
                </div>
            ))}
        </div>
    )
}

function HandleCompletion({ id, completed }){
  if (completed) {
    return <div>
            Completed
        </div>
  }
 
  const markAsCompleted = async () => {
      await fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id }),
    });
  };

  return <div>
    <button onClick={markAsCompleted}>Mark as Completed</button>
  </div>
}


