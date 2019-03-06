import React from "react";

import "../App.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="buttonContainer">
        <button className="strikeButton" onClick={this.props.strikeButton}>
          Strike
        </button>
        <button className="ballButton" onClick={this.props.ballButton}>
          Ball
        </button>
        <button className="foulButton" onClick={this.props.foulButton}>
          Foul
        </button>
        <button className="hitButton" onClick={this.props.hitButton}>
          Hit
        </button>
      </div>
    );
  }
}

export default Dashboard;
