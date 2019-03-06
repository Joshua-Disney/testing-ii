import React from "react";

import "../App.css";

class Display extends React.Component {
  render() {
    return (
      <div className="displayContainer">
        <div className="strikes">
          <h3>strikes</h3>
          {this.props.strikes}
        </div>
        <div className="balls">
          <h3>balls</h3>
          {this.props.balls}
        </div>
      </div>
    );
  }
}

export default Display;
