import React from "react";

//props: {visibilityFilter, visibilityFilterHandler, value}
const TodoFilterButton = (props) => {
  return (
    <button
      className={
        props.visibilityFilter === props.value
          ? "todo-filter-button todo-filter-button__active"
          : "todo-filter-button"
      }
      onClick={() => {
        props.visibilityFilterHandler(props.value);
      }}
    >
      {props.children}
    </button>
  );
};

export default TodoFilterButton;
