import React, { Component } from "react";

import Display from "./display/Display";
import Dashboard from "./dashboard/Dashboard";

import "./App.css";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  };

  strikeButton = event => {
    event.preventDefault();
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 });
    } else {
      this.setState({ strikes: 0, balls: 0 });
    }
  };

  ballButton = event => {
    event.preventDefault();
    if (this.state.balls < 3) {
      this.setState({ balls: this.state.balls + 1 });
    } else {
      this.setState({ strikes: 0, balls: 0 });
    }
  };

  foulButton = event => {
    event.preventDefault();
    if (this.state.strikes < 2) {
      return this.setState({ strikes: this.state.strikes + 1 });
    }
  };

  hitButton = event => {
    event.preventDefault();
    this.setState({ strikes: 0, balls: 0 });
  };

  render() {
    return (
      <div className="App">
        <h2>Step up to bat!</h2>
        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <Dashboard
          strikeButton={this.strikeButton}
          ballButton={this.ballButton}
          foulButton={this.foulButton}
          hitButton={this.hitButton}
        />
      </div>
    );
  }
}

export default App;
