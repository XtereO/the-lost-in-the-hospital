import React from "react";
import { render, screen } from "@testing-library/react";
import { RootRoutes } from "./RootRoutes";
import { BrowserRouter } from "react-router-dom";

describe("Test RootRoutes component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RootRoutes />
      </BrowserRouter>
    );
  });
  test("should render home", () => {
    expect(screen.getByTestId("home"));
  });
});
