import React, { Component } from "react";

import Display from "./display/Display";
import Dashboard from "./dashboard/Dashboard";

import "./App.css";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  };

  render() {
    return (
      <div className="App">
        <h2>Code me, Disney</h2>
        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <Dashboard />
      </div>
    );
  }
}

export default App;
