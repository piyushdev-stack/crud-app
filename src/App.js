import React, { useState, useEffect } from 'react';
import Form from './Mycomponents/Form';
import Header from './Mycomponents/Header';
import Todolist from './Mycomponents/Todolist';
import "./App.css"

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);


  const editState = (id, value) => {
    let todoList = [...todos]
    if (value) {
      todoList.map((todo, index) => {
        if (todo.id === id) {
          if (index >= 0) {
            todoList[index].title = value;
          }
          setTodos(todoList);
        }
      })
    }
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos} />
        </div>
        <div>
          <Todolist
            todos={todos}
            editFunction={editState}
            setTodos={setTodos} />
        </div>

      </div>
    </div>
  );
}

export default App;
