import { render, screen } from "@testing-library/react";
import React from "react";
import { Tooltip } from "./Tooltip";

describe("Test Tooltip component", () => {
  beforeEach(() => {
    render(<Tooltip isOpen={true}>Tooltip</Tooltip>);
  });
  test("render compmonent", () => {
    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
  });
  test("render children", () => {
    expect(screen.getByText("Tooltip")).toBeInTheDocument();
  });
  test("tooltip's has className equal to tooltip", () => {
    expect(screen.getByTestId("tooltip").className).toEqual("tooltip");
  });
  test("tooltip's background equal to rgb(255, 255, 255)", () => {
    expect(screen.getByTestId("tooltip").style.background).toEqual(
      "rgb(255, 255, 255)"
    );
  });
  test("tooltip's borderColor equal to rgba(255, 249, 255, 0.5)", () => {
    expect(screen.getByTestId("tooltip").style.borderColor).toEqual(
      "rgba(255, 249, 255, 0.5)"
    );
  });
});
