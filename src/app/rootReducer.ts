import { combineReducers } from "@reduxjs/toolkit";
import searchBar from "../features/todoForm/searchBar/TodoSearchSlice";
import todos from "../features/todoList/todoSlice";
import visibilityFilter from "../features/visibilityFilter/visibilitySlice";

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  searchBar,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
