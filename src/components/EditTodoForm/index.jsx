import React from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import useInputState from "../../hooks/useInputState";

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={value} onChange={handleChange} margin="normal" label="Edit todo" fullWidth variant="standard" />
    </form>
  );
}

export default EditTodoForm;

EditTodoForm.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleEditForm: PropTypes.func.isRequired,
};
