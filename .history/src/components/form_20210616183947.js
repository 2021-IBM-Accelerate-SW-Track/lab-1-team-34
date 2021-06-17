import React from "react";

const form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const inputValidation = (e) => {
    e.preventDefault();
    if (
      inputText != "" &&
      todos.some(inputText === todos) &&
      // todos.includes(inputText) == false &&
      // not checking duplicate items
      // todos is an object

      inputText != " "
    ) {
      console.log(todos);
      submitTodoHandler(e);
    }
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        //data testing
        data-testid="new-item-input"
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i id="plus" className="fas fa-plus-square"></i>
      </button>
      {/* <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div> */}
    </form>
  );
};

export default form;