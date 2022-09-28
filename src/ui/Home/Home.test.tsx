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
  test("render component", () => {
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });
  test("render banner", () => {
    expect(screen.getByTestId("banner")).toBeInTheDocument();
  });
  test("render info-blocks", () => {
    expect(screen.getByTestId("info-blocks")).toBeInTheDocument();
  });
  test("info-blocks has className equal to info_blocks", () => {
    expect(screen.getByTestId("info-blocks").className).toEqual("info_blocks");
  });
});
