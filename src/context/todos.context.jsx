import React, { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import reducer from "../reducers/todo.reducer";

const initialTodos = [
  { id: uuidv4(), task: "Clean my room", completed: false },
  { id: uuidv4(), task: "Wash car", completed: true },
  { id: uuidv4(), task: "Find job", completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

function TodosProvider({ children }) {
  const [todos, dispatch] = useLocalStorageReducer("todos", initialTodos, reducer);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export default TodosProvider;

TodosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
