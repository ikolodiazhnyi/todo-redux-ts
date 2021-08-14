import TodoForm from "../features/todoForm/TodoForm";
import TodoList from "../features/todoList/TodoList";;
import Filter from "../features/visibilityFilter/Filter";
import "./App.css";

const apps = 0;

export default function App(): JSX.Element {
  return (
    <div>
      <TodoForm />   
        <TodoList />
      <Filter />      
    </div> 
  );
}
