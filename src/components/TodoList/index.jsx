import React, { useContext } from "react";
import { Divider, List, Paper } from "@mui/material";
import TodoItem from "../TodoItem";
import { TodosContext } from "../../context/todos.context";

function TodoList() {
  const todos = useContext(TodosContext);

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <React.Fragment key={todo.id}>
              <TodoItem id={todo.id} task={todo.task} completed={todo.completed} />
              {index < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );

  return null;
}

export default TodoList;
