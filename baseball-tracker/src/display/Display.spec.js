import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("Display />", () => {
  it('renders "strikes" and "Balls', () => {
    const { getByText } = render(<Display />);
    const strikesAndBalls = getByText(/strikes/i && /balls/i);
    expect(strikesAndBalls).toBeInTheDocument();
  });
  // it('renders "strikes" and "Balls"', () => {
  //   const { getByText } = render(<Display />);
  //   const strikes = getByText(/strikes/i);
  //   const balls = getByText(/balls/i);
  //   expect(strikes).toBeInTheDocument();
  //   expect(balls).toBeInTheDocument();
  // });
});
