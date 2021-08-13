import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoList/todoSlice";
import SearchBarInput from "./searchBar/SearchBarInput";

export default function TodoForm(): JSX.Element {
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");

  function handleChange(e: { target: HTMLInputElement }) {
    setText(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }
    dispatch(addTodo(text));

    setText("");
  }

  return (
    <React.Fragment>
      <SearchBarInput />
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </React.Fragment>
  );
}
