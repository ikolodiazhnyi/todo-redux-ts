import TodoForm from "../features/todoForm/TodoForm";
import TodoList from "../features/todoList/TodoList";
import Filter from "../features/visibilityFilter/Filter";
import "./App.css";

export default function App(): JSX.Element {
  return (
    <div className="wrapper">
      <h1>To Do List</h1>
      <TodoForm />
      <TodoList />
      <Filter />
    </div>
  );
}
