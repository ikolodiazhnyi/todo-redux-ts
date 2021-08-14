import "./TodoList.css";

interface TodoProps {
  completed: boolean;
  text: string;
  toggleTodo: () => void;
  removeTodo: () => void;
}

export default function TodoListItem({
  completed,
  text,
  toggleTodo,
  removeTodo,
}: TodoProps): JSX.Element {
  return (
    <li className="todoItem">
      <label className={completed ? "completed" : undefined}>
        <input
          className="todoInput"
          type="checkbox"
          onChange={toggleTodo}
          checked={completed}
        />
        {text}
      </label>
      <button className="rb" onClick={removeTodo}>
        x
      </button>
    </li>
  );
}
