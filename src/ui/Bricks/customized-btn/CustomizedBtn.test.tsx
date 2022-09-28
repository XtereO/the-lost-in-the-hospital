import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { CustomizedBtn } from "./CustomizedBtn";

describe("Test Button component", () => {
  beforeEach(() => {
    render(<CustomizedBtn onClick={() => {}}>Click</CustomizedBtn>);
  });
  test("should render component", () => {
    expect(fireEvent.click(screen.getByTestId("btn"))).toBeTruthy();
  });
  test("should className equal to btn", () => {
    expect(screen.getByTestId("btn").className).toEqual("btn");
  });
  test("should render text Click", () => {
    expect(screen.getByText("Click")).toBeInTheDocument();
  });
  test("should color equal to rgba(255, 255, 255, 0.9)", () => {
    expect(screen.getByTestId("btn").style.color).toEqual(
      "rgba(255, 255, 255, 0.9)"
    );
  });
  test("should borderColor to rgba(255, 255, 255, 0.9)", () => {
    expect(screen.getByTestId("btn").style.borderColor).toEqual(
      "rgba(255, 255, 255, 0.9)"
    );
  });
  test("should backgroundColor to transparent", () => {
    expect(screen.getByTestId("btn").style.backgroundColor).toEqual(
      "transparent"
    );
  });
  test("should mouseOver rewrite color to rgba(0, 0, 0, 0.9)", () => {
    const btn = screen.getByTestId("btn");
    fireEvent.mouseOver(btn);
    expect(btn.style.color).toEqual("rgba(0, 0, 0, 0.9)");
  });
  test("should mouseOut, after mouseOver, rewrite color to rgba(255, 255, 255, 0.9)", () => {
    const btn = screen.getByTestId("btn");
    fireEvent.mouseOver(btn);
    fireEvent.mouseOut(btn);
    expect(btn.style.color).toEqual("rgba(255, 255, 255, 0.9)");
  });
});
