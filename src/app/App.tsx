import TodoForm from "../features/todoForm/TodoForm";;
import TodoList from "../features/todoList/TodoList";
import Filter from "../features/visibilityFilter/Filter";

import "./App.css";

export default function App() {
  return (
    <div>
      <TodoForm />
      <TodoList />
      <Filter />
    </div>
  );
}
