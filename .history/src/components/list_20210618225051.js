import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            date={todo.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
