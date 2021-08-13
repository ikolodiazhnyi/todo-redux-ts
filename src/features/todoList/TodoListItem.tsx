import './TodoList.css'

interface TodoProps {
  completed: boolean;
  text: string;
  toggleTodo: () => any;
  removeTodo: () => void;
}

export default function TodoListItem({ completed, text, toggleTodo, removeTodo }: TodoProps) {
  return (
    <li >
      <label className={completed ? "completed" : undefined}>
        <input type="checkbox" onChange={toggleTodo} checked={completed} />
        {text}
      </label>
      <button onClick={removeTodo}>x</button>
    </li>
  );
}
