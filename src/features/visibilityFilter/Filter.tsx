import React from "react";
import FilterButton from "./FilterButton";

import { VisibilityFilter } from "./visibilitySlice";

export default function Filter(): JSX.Element {
  return (
    <div>
      <span>Show: </span>
      <FilterButton visibilityFilter={VisibilityFilter.ShowAll} text={"All"} />
      <FilterButton visibilityFilter={VisibilityFilter.ShowCompleted} text={"Completed"} />
      <FilterButton visibilityFilter={VisibilityFilter.ShowActive} text={"Uncompleted"} />
    </div>
  );
}
