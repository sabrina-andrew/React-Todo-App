import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    //["Foo", "Bar", "Baz"]
    //Should become:
    //<li>Foo</li><li>Bar</li>
    const todoListItems = todos.map(item => <li key={item}> {item}</li>);
    return <ul>{todoListItems}</ul>;
  }
}

export default TodoList;
