import React from "react";
import PropTypes from "prop-types";
import { Divider, List, Paper } from "@mui/material";
import TodoItem from "../TodoItem";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <>
            <TodoItem
              id={todo.id}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {index < todos.length - 1 && <Divider />}
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
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
