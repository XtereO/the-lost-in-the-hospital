import React from "react";
import { render, screen } from "@testing-library/react";
import { AppContainer } from "./App";

describe("Test App component", () => {
  beforeEach(() => {
    render(<AppContainer />);
  });
  test("should render App", () => {
    expect(screen.getByTestId("app"));
  });
  test("should render header", () => {
    expect(screen.getByTestId("header"));
  });
});
