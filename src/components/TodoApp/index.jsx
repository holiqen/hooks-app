import React from "react";
import { AppBar, Grid, Paper, Toolbar, Typography } from "@mui/material";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import { AppBarStyle, GridContainerStyle, PaperStyle } from "./style";
import TodosProvider from "../../context/todos.context";

function TodoApp() {
  return (
    <Paper sx={PaperStyle} elevation={0}>
      <AppBar sx={AppBarStyle} color="primary" position="static">
        <Toolbar>
          <Typography color="inherit">HOOKS TODOS</Typography>
        </Toolbar>
      </AppBar>
      <Grid sx={GridContainerStyle} container justifyContent="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
