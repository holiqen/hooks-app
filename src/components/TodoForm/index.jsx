import React, { useContext } from "react";
import { Paper, TextField } from "@mui/material";
import useInputState from "../../hooks/useInputState";
import PaperStyle from "./style";
import { DispatchContext } from "../../context/todos.context";

function TodoForm() {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", task: value });
    reset();
  };

  return (
    <Paper sx={PaperStyle}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add new todo"
          fullWidth
          variant="standard"
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
