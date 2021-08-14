import { useDispatch } from "react-redux";
import { setSearchBar } from "./TodoSearchSlice";

export default function SearchBarInput(): JSX.Element {
  const dispatch = useDispatch();

  function handleChange(e: { target: HTMLInputElement }) {
    dispatch(setSearchBar(e.target.value));
  }

  return <input type="text" placeholder="Search here..." onChange={handleChange}></input>;
}
