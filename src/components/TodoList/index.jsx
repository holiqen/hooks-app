import React from "react";
import PropTypes from "prop-types";
import { Divider, List, ListItem, ListItemText, Paper } from "@mui/material";

function TodoList({ todos }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <ListItem>
              <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
