import React, { memo, useContext } from "react";
import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useToggle from "../../hooks/useToggle";
import EditTodoForm from "../EditTodoForm";
import { DispatchContext } from "../../context/todos.context";

function TodoItem({ id, task, completed }) {
  const [isEditing, toggle] = useToggle(false);
  const dispatch = useContext(DispatchContext);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} editTodo={() => dispatch({ type: "EDIT", id })} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox disableRipple tabIndex={-1} checked={completed} onClick={() => dispatch({ type: "TOGGLE", id })} />
          <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => dispatch({ type: "REMOVE", id })}>
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

export default memo(TodoItem);

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
