import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

const initialTodo = [
  {
    todoname: "go to the gym",
  },
  {
    todoname: "finish IBM",
  },
];
function Input(props) {
  const [input, setInput] = useState("");
  const [list, setTodo] = React.useState(initialTodo);

  function handleAdd() {
    const newList = list.concat({ input });

    setTodo(newList);
  }
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          onChange={(v) => {
            setInput(v);
          }}
          // onEnter={() => {
          //   list.push(input);
          // }}
          // id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </form>
      <Button onClick={handleAdd} variant="contained" color="primary">
        Submit
      </Button>

      {list &&
        list.map((item, index) => {
          return <li key={index}>{item.todoname}</li>;
        })}
    </div>
  );
}

export default Input;
