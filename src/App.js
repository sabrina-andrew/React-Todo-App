import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <label>
          Item:
          <input type="text" />
        </label>
        <button>Add</button>

        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>

        <button>Reset All</button>
      </div>
    );
  }
}

export default App;
