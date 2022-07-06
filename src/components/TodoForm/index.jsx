import React from "react";
import { Paper, TextField } from "@mui/material";
import PropTypes from "prop-types";
import useInputState from "../../hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
}

export default TodoForm;

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
