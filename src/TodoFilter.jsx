import React from "react";
import "./TodoFilter.css";
import TodoFilterButton from "./TodoFilterButton";
// props : {visibilityFilterHandler, visibilityFilter}
const TodoFilter = (props) => {
  return (
    <div className="todo-button-group">
      <TodoFilterButton
        visibilityFilter={props.visibilityFilter}
        visibilityFilterHandler={props.visibilityFilterHandler}
        value="all"
      >
        All
      </TodoFilterButton>
      <TodoFilterButton
        visibilityFilter={props.visibilityFilter}
        visibilityFilterHandler={props.visibilityFilterHandler}
        value="todo"
      >
        Todo
      </TodoFilterButton>
      <TodoFilterButton
        visibilityFilter={props.visibilityFilter}
        visibilityFilterHandler={props.visibilityFilterHandler}
        value="done"
      >
        Done
      </TodoFilterButton>
    </div>
  );
};

export default TodoFilter;
