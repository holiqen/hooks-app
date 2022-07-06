import React from "react";
import PropTypes from "prop-types";
import { Divider, List, Paper } from "@mui/material";
import TodoItem from "../TodoItem";

function TodoList({ todos }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <TodoItem task={todo.task} key={todo.id} completed={todo.completed} />
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
