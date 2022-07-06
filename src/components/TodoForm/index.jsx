import React from "react";
import { Paper, TextField } from "@mui/material";
import PropTypes from "prop-types";
import useInputState from "../../hooks/useInputState";

const PaperStyle = {
  margin: "1rem 0",
  padding: "0 1rem",
};

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
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

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
