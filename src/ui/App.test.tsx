import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("Test App component", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("Is component rendered", () => {
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });
});
