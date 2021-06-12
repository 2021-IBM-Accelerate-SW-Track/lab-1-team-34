import React from "react";
import { TextField } from "@material-ui/core";

function Input(props) {
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </div>
  );
}

export default Input;
