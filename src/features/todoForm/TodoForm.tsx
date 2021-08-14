import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoList/todoSlice";
import SearchBarInput from "./searchBar/SearchBarInput";
import "./AddTodo.css"

export default function TodoForm(): JSX.Element {
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");

  function handleChange(e: { target: HTMLInputElement }) {
    setText(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="inputTodo"
          value={text}
          onChange={handleChange}
          placeholder="Wat're u gonna do?.."
        />
        <button className="addTodo" type="submit">Add</button>
      </form>
    </React.Fragment>
  );
}
