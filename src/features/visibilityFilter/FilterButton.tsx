import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { setVisibilityFilter, VisibilityFilter } from "./visibilitySlice";

interface FilterButtonProps {
  visibilityFilter: VisibilityFilter;
  text: string;
}

export default function FilterButton({ visibilityFilter, text }: FilterButtonProps): JSX.Element {
  const dispatch = useDispatch();

  const currentvisibilityFilter = useSelector((state: RootState) => state.visibilityFilter);

  return (
    <button
      disabled={currentvisibilityFilter === visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}>
      {text}
    </button>
  );
}
