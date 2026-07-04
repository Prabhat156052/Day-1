import React from "react";
import "./AddTodo.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Features/todo/todoSice";
import Todos from "./Todos";

function AddTodo() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    dispatch(addTodo({ text: input.trim() }));
    setInput("");
  };
  return (
    <div className="add-todo-container">
      <form onSubmit={addTodoHandler} className="formcontainer">
        <h1>Todo List</h1>

        <input
          type="text"
          className="todotext"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          type="submit"
          className="btn"
          disabled={input.trim().length === 0}
        >
          Add Task
        </button>
      </form>
      <div>
        <Todos />
      </div>
    </div>
  );
}

export default AddTodo;
