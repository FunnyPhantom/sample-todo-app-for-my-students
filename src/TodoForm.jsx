import React from "react";
import "./TodoForm.css";

// props: {onAddingTodo}
class TodoForm extends React.Component {
  state = {
    inputValue: ""
  };

  changeHandler = (text) => {
    this.setState({ inputValue: text });
  };

  onClickHandler = () => {
    this.props.onAddingTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render = () => {
    return (
      <div className="todo-input-container">
        <input
          className="todo-input"
          placeholder="what should you do next"
          value={this.state.inputValue}
          onChange={(event) => {
            this.changeHandler(event.target.value);
          }}
          onKeyUp={(event) => {
            if (event.keyCode === 13) {
              this.onClickHandler();
            }
          }}
        />
        <button onClick={this.onClickHandler}>Add</button>
      </div>
    );
  };
}

export default TodoForm;
