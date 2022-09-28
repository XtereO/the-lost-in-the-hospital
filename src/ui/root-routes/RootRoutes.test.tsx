import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RootRoutes } from "./RootRoutes";

describe("Test RootRoutes component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RootRoutes />
      </BrowserRouter>
    );
  });
  test("render home", () => {
    expect(screen.getByTestId("home"));
  });
});
