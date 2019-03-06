import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
  // ^^^ Does the same as vvv
  // it("renders without crashing", () => {
  //   const div = document.createElement("div");
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('renders "step up to bat"', () => {
    const { getByText } = render(<App />);
    const text = getByText(/step up to bat/i);
    expect(text).toBeInTheDocument();
  });
});
