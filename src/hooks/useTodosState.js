import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "./useLocalStorageState";

const useTodosState = (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  const addTodo = (newTaskText) => {
    setTodos([...todos, { id: uuidv4(), task: newTaskText, completed: false }]);
  };

  const removeTodo = (todoId) => {
    const updateTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updateTodos);
  };

  const toggleTodo = (todoId) => {
    const updateTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
    setTodos(updateTodos);
  };

  const editTodo = (todoId, newTaskText) => {
    const updateTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, task: newTaskText } : todo));
    setTodos(updateTodos);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
  };
};

export default useTodosState;
