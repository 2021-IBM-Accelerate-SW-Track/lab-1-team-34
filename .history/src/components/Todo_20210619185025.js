import React, { useState } from "react";

import Edit from "./edit";

const Todo = ({ text, setTodos, todos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const [copytext, setcopytext] = useState(text);
  const [ifHit, setifHit] = useState(false);
  const edit = () => {
    setifHit(!ifHit);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""} `} onCh>
        {ifHit == true ? (
          // if hit is true then render the 1st div(runs the code)
          <div
            contenteditable="false"
            // onInput={(e) =>
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                edit();
              }
            }}
          >
            {copytext}
          </div>
        ) : (

          <div
            contenteditable="false"

          <div contenteditable="true">
            <br />
            {copytext}


            // onInput={(e) =>
          >
            {copytext}
          </div>
        )}
      </li>

      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>

      {/* edit handled should be here */}
      <button className="edit-btn" onClick={edit}>
        <i class="fas fa-pencil-alt"></i>
      </button>

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
