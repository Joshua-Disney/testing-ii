import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
  // it("renders without crashing", () => {
  //   const div = document.createElement("div");
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('renders "Code me, Disney"', () => {
    const { getByText } = render(<App />);
    const text = getByText(/code me, disney/i);
    expect(text).toBeInTheDocument();
  });
});
