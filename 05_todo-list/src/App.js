import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import Todo from "./components/Todo";

function App() {
/* Below array destructure syntax is equivalent to 
const newTodoStateArr = useState("")
const newTodo = newTodoStateArr[0];
const setNewTodo = newTodoStateArr[1]
*/
	const [newTodo, setNewTodo] = useState("");
	const [todos, setTodos] = useState([]);
	
  const handleNewTodoSubmit =(event)=>{
    event.preventDefault();
    console.log(newTodo);
    if (newTodo.length == 0) {
      return;
    }
    
    const todoItem = {
      text: newTodo,
      complete: false
    }

    //set Todos and pass in a brand new array containing all current todos plus 1 more.
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };
  
  const handleTodoDelete = (delIdx)=> {
   const filteredTodos = todos.filter((todo, i)=> {
    return i !== delIdx;
   });
    setTodos(filteredTodos);
  };
  
  const handleToggleComplete = (idx)=> {
    const updatedTodos = todos.map((todo, i)=> {
      if (idx == i) {
        todo.complete = !todo.complete;
        
        // To avoid mutating the todo directly, do this:
        // const updatedTodo = { ...todo, complete: !todo.complete };
        // return updatedTodo;
      }
      return todo;
    });
      setTodos(updatedTodos);
  }
  
  return (
    <div style={{ textAlign: "center" }}>
      <form 
      onSubmit={(event)=>{
        handleNewTodoSubmit(event);
      }}
      >
        <input onChange={(event)=> {
          setNewTodo(event.target.value);
        }} 
        type="text"
        value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr />
      
        {todos.map((todo, i)=>{
        const todoClasses = ["bold", "italic"];
        
        if (todo.complete) {
          todoClasses.push("line-through");
        }
        return (
        <div Key={i}>
          <span className={ todoClasses.join(" ")}>{todo.text} </span>
          <input onChange={(event)=> {
            handleToggleComplete(i);
          }} checked={todo.complete} type="checkbox" />
          <button onClick={(event)=>{
            handleTodoDelete(i);
            
          }}
          style={{marginLeft: "10px"}}
          >
          Delete</button>
        </div>
        );
      })}
    </div>
  );
}


export default App;
