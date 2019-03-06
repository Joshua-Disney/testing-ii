import React from "react";

class Display extends React.Component {
  state = {
    strikes: 0,
    balls: 0
  };

  render() {
    return (
      <div>
        <h3>strikes</h3>
        <h3>balls</h3>
      </div>
    );
  }
}

export default Display;
