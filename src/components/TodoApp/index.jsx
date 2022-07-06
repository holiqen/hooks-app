import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppBar, Grid, Paper, Toolbar, Typography } from "@mui/material";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";

const PaperStyle = {
  padding: 0,
  margin: 0,
  height: "100vh",
  backgroundColor: "#fafafa",
};

const AppBarStyle = {
  height: "64px",
};

const GridContainerStyle = {
  marginTop: "1rem",
};

function TodoApp() {
  const initialTodos = [
    { id: uuidv4(), task: "Clean my room", completed: false },
    { id: uuidv4(), task: "Wash car", completed: true },
    { id: uuidv4(), task: "Find job", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTaskText) => {
    setTodos([...todos, { id: uuidv4(), task: newTaskText, completed: false }]);
  };

  return (
    <Paper sx={PaperStyle} elevation={0}>
      <AppBar sx={AppBarStyle} color="primary" position="static">
        <Toolbar>
          <Typography color="inherit">Todos</Typography>
        </Toolbar>
      </AppBar>
      <Grid sx={GridContainerStyle} container justifyContent="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
