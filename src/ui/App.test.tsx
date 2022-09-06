import React from "react";
import { render, screen } from "@testing-library/react";
import { AppContainer } from "./App";

describe("Test App component", () => {
  beforeEach(() => {
    render(<AppContainer />);
  });
  test("Is component rendered", () => {
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });
});
