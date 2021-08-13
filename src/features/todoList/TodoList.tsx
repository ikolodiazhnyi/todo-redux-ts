import TodoListItem from "./TodoListItem";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./todoSlice";

import { Todo } from "./types";
import { VisibilityFilter } from "../visibilityFilter/visibilitySlice";
import { RootState } from "../../app/rootReducer";

const getSearchedTodos = (todos: Todo[], search: string, state: RootState) => {
  let currentTodos: Todo[] = [];
  let newTodos: Todo[] = [];
  if (search.trim() !== "") {
    currentTodos = state.todos;
    newTodos = currentTodos.filter((todo) => {
      const todoLowCase = todo.text.toLowerCase();
      const filterLowCase = search.toLowerCase();
      return todoLowCase.includes(filterLowCase);
    });
    return newTodos;
  } else {
    return todos;
  }
};

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.ShowAll:
      return todos;
    case VisibilityFilter.ShowCompleted:
      return todos.filter((t) => t.completed);
    case VisibilityFilter.ShowActive:
      return todos.filter((t) => !t.completed);
  }
};

export default function TodoList(): JSX.Element {
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) =>
    getVisibleTodos(getSearchedTodos(state.todos, state.searchBar, state), state.visibilityFilter),
  );

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          {...todo}
          toggleTodo={() => dispatch(toggleTodo(todo))}
          removeTodo={() => dispatch(removeTodo(todo))}
        />
      ))}
    </ul>
  );
}
