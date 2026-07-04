import React from "react";
import "./AddTodo.css";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../Features/todo/todoSice";
function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div className="todo-list-container">
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="item">
            <span>{todo.text || "Nothing added"}</span>

            <button
              className="btnX"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
