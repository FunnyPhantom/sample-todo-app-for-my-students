import React from "react";

import "./TodoItem.css";

// props : {text, done, onToggleHandler}
class TodoItem extends React.Component {
  render = () => {
    return (
      <div
        className={this.props.done ? "todo-item done-item" : "todo-item"}
        onClick={this.props.onToggleHandler}
      >
        {this.props.text}
      </div>
    );
  };
}

export default TodoItem;
