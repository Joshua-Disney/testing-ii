import React, { Component } from "react";

import Display from "./display/Display";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Code me, Disney</h2>
        <Display />
      </div>
    );
  }
}

export default App;
