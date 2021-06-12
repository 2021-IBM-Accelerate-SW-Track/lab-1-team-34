import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

const initialTodo = ["finish IBM", "go to school"];

function Input(props) {
  const [input, setInput] = useState("");
  const [list, setTodo] = React.useState(initialTodo);

  function handleAdd() {
    const newList = list;
    newList.push(input);
    setTodo(newList);
    console.log(list);
    // debugger;
  }
  return (
    <div>
      <TextField
        onChange={(event) => {
          setInput(event.target.value);
          console.log(input);
        }}
        // onEnter={() => {
        //   list.push(input);
        // }}
        // id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />

      <Button onClick={handleAdd} variant="contained" color="primary">
        Submit
      </Button>

      {list &&
        list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
    </div>
  );
}

export default Input;
