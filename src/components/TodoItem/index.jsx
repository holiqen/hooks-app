import React from "react";
import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useToggle from "../../hooks/useToggle";
import EditTodoForm from "../EditTodoForm";

function TodoItem({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggle(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} editTodo={editTodo} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox disableRipple tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default TodoItem;

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
