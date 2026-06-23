import { useState } from "react";


function    Todo(){

    const [NewTodo , setNewTodo] = useState("");
    const [Todo  , setTodo] = useState([]);


    const   handleSubmit = (e) =>{

        e.preventDefault();
        if(NewTodo) {
            setTodo([...Todo , {text:NewTodo , completed:false}])
            setNewTodo("")
        }

    }

    const  handleDelet = (index) =>{
        const newTodos = [...Todo ];
        newTodos[index].completed=!newTodos[index].completed
        setTodo(newTodos)

    }

    return (
        <>
        <h1>Todo App</h1>
        
        <form onSubmit={handleSubmit}>
            <h2>Todo App</h2>

            <input type="text"  placeholder="Add Todo" value={NewTodo}  onChange={(e) => setNewTodo(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>

        <ul> 
            {Todo.map((todo , index) =>  ( 
                <li key={index}>
                    <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
                    <button onClick={() => handleDelet(index)}>Delet</button>
                </li>
            ))}
        </ul>
        
        </>
    )
}

export default Todo 
