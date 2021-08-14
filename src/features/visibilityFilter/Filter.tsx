import FilterButton from "./FilterButton";
import "./Filter.css";
import { VisibilityFilter } from "./visibilitySlice";

export default function Filter(): JSX.Element {
  return (
    <div>
      <span>Show: </span>
      <div className="filter">
        <FilterButton
          visibilityFilter={VisibilityFilter.ShowAll}
          text={"All"}
        />
        <FilterButton
          visibilityFilter={VisibilityFilter.ShowCompleted}
          text={"Completed"}
        />
        <FilterButton
          visibilityFilter={VisibilityFilter.ShowActive}
          text={"Uncompleted"}
        />
      </div>
    </div>
  );
}
