import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("Dashboard />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("adds one strike", () => {
    const { getByText } = render(<Dashboard />);
    const strikeButton = getByText(/strike/i);

    fireEvent.click(strikeButton);
  });

  it("adds one ball", () => {
    const { getByText } = render(<Dashboard />);
    const ballButton = getByText(/ball/i);

    fireEvent.click(ballButton);
  });

  it("adds one strike if strikes are less than 2", () => {
    const { getByText } = render(<Dashboard />);
    const foulButton = getByText(/foul/i);

    fireEvent.click(foulButton);
  });

  it("clears all strikes and balls", () => {
    const { getByText } = render(<Dashboard />);
    const hitButton = getByText(/hit/i);

    fireEvent.click(hitButton);
  });
});
