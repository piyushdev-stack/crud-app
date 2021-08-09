import React, { useState,useEffect} from 'react'

const Todolist = ({ todos, setTodos, editFunction }) => {
    const [show, setShow] = useState();
    const [inputState, setInputState] = useState();
    const handelDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const changeEdit = (e,id) => {
        setInputState(e.target.value);
     
    }
    const editRow = (id)=>{
        todos.forEach((todo)=>{
            if(todo.id === id){
                setShow(id)
            }
        })
        if(id){
            editFunction(id, inputState)
        }
    }

    useEffect(() => {
        setShow()
    }, [JSON.stringify(todos)])

    return (
        <div className="MAIN">
            {todos.length > 0 && todos.map((todo) => (
                <li className="todo-list" key={todo.id}>
                    {(show === todo.id )? (<input onChange={(e) => changeEdit(e,todo.id)} />) : (<p>{todo.title}</p>)}
                    <button className="Edit" onClick={(e) => {editRow(todo.id) }}>Edit</button>
                    <button className="Delete" onClick={() => handelDelete(todo)}>Delete</button>
                </li>
            ))}
        </div>

    )
}

export default Todolist
