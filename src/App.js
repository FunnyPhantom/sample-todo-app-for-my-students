import React from "react";
import "./App.css";

import TodoItem from "./TodoItem.jsx";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";

let currentId = 1;

class App extends React.Component {
  state = {
    visibilityFilter: "all",
    todos: []
  };

  toggleTodo = (id) => {
    // syntax 1
    let newArray = this.state.todos.map((value) => {
      if (value.id === id) {
        return {
          ...value,
          done: !value.done
        };
      } else {
        return value;
      }
    });

    // syntax 2
    // let newArray = [...this.state.todos];
    // for (let i = 0; i < newArray.length; i++) {
    //   if (newArray[i].id === id) {
    //     newArray[i].done = !newArray[i].done;
    //   }
    // }

    this.setState({ todos: newArray });
  };

  addTodo = (text) => {
    this.setState({
      todos: [...this.state.todos, { text: text, done: false, id: currentId }]
    });
    currentId++;
  };

  visibilityFilterHandler = (text) => {
    this.setState({ visibilityFilter: text });
  };

  getTodoItem = () => {
    // syntax 1
    let todoItemArray = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.visibilityFilter === "all") {
        todoItemArray.push(
          <TodoItem
            key={i}
            done={this.state.todos[i].done}
            text={this.state.todos[i].text}
            onToggleHandler={() => {
              this.toggleTodo(this.state.todos[i].id);
            }}
          />
        );
      } else if (this.state.visibilityFilter === "todo") {
        if (this.state.todos[i].done === false) {
          todoItemArray.push(
            <TodoItem
              key={i}
              done={this.state.todos[i].done}
              text={this.state.todos[i].text}
              onToggleHandler={() => {
                this.toggleTodo(this.state.todos[i].id);
              }}
            />
          );
        }
      } else {
        if (this.state.todos[i].done) {
          todoItemArray.push(
            <TodoItem
              key={i}
              done={this.state.todos[i].done}
              text={this.state.todos[i].text}
              onToggleHandler={() => {
                this.toggleTodo(this.state.todos[i].id);
              }}
            />
          );
        }
      }
    }

    //syntax 2
    // let todoItemArray = this.state.todos.filter((value) => {
    //   if (this.state.visibilityFilter === "done") {
    //     return value.done;
    //   } else if (this.state.visibilityFilter === "todo") {
    //     return !value.done;
    //   } else {
    //     return true;
    //   }
    // });
    // todoItemArray = todoItemArray.map((value) => (
    //   <TodoItem
    //     text={value.text}
    //     done={value.done}
    //     onToggleHandler={() => {
    //       this.toggleTodo(value.id);
    //     }}
    //   />
    // ));

    // syntaxt 2.2
    // let todoItemArray = this.state.todos
    //   .filter((value) => {
    //     if (this.state.visibilityFilter === "done") {
    //       return value.done === true;
    //     } else if (this.state.visibilityFilter === "todo") {
    //       return value.done === false;
    //     } else {
    //       return true;
    //     }
    //   })
    //   .map((value) => (
    //     <TodoItem
    //       text={value.text}
    //       done={value.done}
    //       onToggleHandler={() => {
    //         this.toggleTodo(value.id);
    //       }}
    //     />
    //   ));

    return todoItemArray;
  };

  render = () => (
    <div style={{ marginTop: "30px" }}>
      <TodoForm onAddingTodo={this.addTodo} />
      {this.getTodoItem()}
      <TodoFilter
        visibilityFilter={this.state.visibilityFilter}
        visibilityFilterHandler={this.visibilityFilterHandler}
      />
    </div>
  );
}

export default App;
