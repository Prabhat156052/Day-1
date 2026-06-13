import React from "react";
import "./AddTodo.css";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/todo/todoSice";
function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos); // Accessing the correct slice of state

  return (
    <div className="todocontainer">
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="item">
            {todo.text || 'Nothing added'}
           
            <button className="btnX" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
