import React from "react";
import "./AddTodo.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/todo/todoSice";

function AddTodo() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
   
    dispatch(addTodo({text:input}));
    setInput(''); 
  };
  return (
    <form onSubmit={addTodoHandler} className="formcontainer">
      <input
        type="text"
        className="todotext"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button type="submit" className="btn">
        Add Task
      </button>
    </form>
  );
}

export default AddTodo;
