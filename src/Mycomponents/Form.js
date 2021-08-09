import React from 'react'
import {v4 as uuidV4} from "uuid";

const Form = ({input, setInput, todos, setTodos}) => {
    const onInputChange = (event) =>{
        setInput(event.target.value);
    }
    const onFormSubmit = (event) =>{
        event.preventDefault()
        // The code below will check if the task is empty,  it will give the prompt to the user.
        if(input){
        setTodos([...todos, {id:uuidV4(), title:input, completed:false}]);
        setInput("")} else{
            prompt("You have forgot to enter the task.")
        }
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Please enter your Task here..." classsName="task-Input" value={input} onChange={onInputChange} />
            <button className="add-Button" type="submit">Enter</button>
        </form>
    )
}

export default Form
