import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/rootReducer';

import  {SearchBar, setSearchBar} from './TodoSearchSlice'


interface SearchInputProps {
  searchBar: typeof SearchBar,
}

export default function SearchBarInput(): JSX.Element {
  const dispatch = useDispatch();

  const currentSearchBar = useSelector(
    (state: RootState) => state.searchBar
  );

  function handleChange(e: { target: HTMLInputElement }) {
    dispatch(setSearchBar((e.target.value)));
  }

  return (
    <input type="text" placeholder="Search here..." onChange={handleChange}></input>
    // <button
    //   disabled={currentSearchBar === searchBar}
    //   onClick={() => dispatch(setVisibilityFilter(searchBar))}>
    //   {text}
    // </button>
  );
}