import React, { useContext } from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import useInputState from "../../hooks/useInputState";
import { DispatchContext } from "../../context/todos.context";

function EditTodoForm({ id, task, toggleEditForm }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT", id, newTask: value });
    reset();
    toggleEditForm();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: "1 rem", width: "100%" }}>
      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        label="Edit todo"
        fullWidth
        variant="standard"
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;

EditTodoForm.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  toggleEditForm: PropTypes.func.isRequired,
};
