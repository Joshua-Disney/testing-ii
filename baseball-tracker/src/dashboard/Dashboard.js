import React from "react";

import "../App.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="buttonContainer">
        <button className="strikeButton">Strike</button>
        <button className="ballButton">Ball</button>
        <button className="foulButton">Foul</button>
        <button className="hitButton">Hit</button>
      </div>
    );
  }
}

export default Dashboard;
