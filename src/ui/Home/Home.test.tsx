import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./Home";

describe("Test Home component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
  test("should render component", () => {
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });
});
