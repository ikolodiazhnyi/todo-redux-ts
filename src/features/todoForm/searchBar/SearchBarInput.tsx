import { useDispatch } from "react-redux";
import { setSearchBar } from "./TodoSearchSlice";
import "./SearchBar.css"

export default function SearchBarInput(): JSX.Element {
  const dispatch = useDispatch();

  function handleChange(e: { target: HTMLInputElement }) {
    dispatch(setSearchBar(e.target.value));
  }

  return (
    <input
      className="searchBar"
      type="text"
      placeholder="Search here..."
      onChange={handleChange}
    ></input>
  );
}
