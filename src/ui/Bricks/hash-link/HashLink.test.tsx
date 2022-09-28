import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { HashLink } from "./HashLink";

describe("Test HashLink component", () => {
  beforeEach(() => {
    render(
      <HashLink
        hash="game"
        fontSize={14}
        color={"rgba(0, 0, 0, 0.6)"}
        activeColor={"rgba(0, 0, 0, 0.8)"}
      >
        Game
      </HashLink>
    );
  });
  test("render component", () => {
    expect(screen.getByTestId("hash-link")).toBeInTheDocument();
  });
  test("hash-link has text equal to Game", () => {
    expect(screen.getByText("Game")).toBeInTheDocument();
  });
  test("hash-link has color equal to rgba(0, 0, 0, 0.6)", () => {
    expect(screen.getByTestId("hash-link").style.color).toEqual(
      "rgba(0, 0, 0, 0.6)"
    );
  });
  test("hash-link has font size equal to 14px", () => {
    expect(screen.getByTestId("hash-link").style.fontSize).toEqual("14px");
  });
  test("handle mouse over and set color to rgba(0, 0, 0, 0.8)", () => {
    const hashLink = screen.getByTestId("hash-link");
    fireEvent.mouseOver(hashLink);
    expect(hashLink.style.color).toEqual("rgba(0, 0, 0, 0.8)");
  });
  test("handle mouse out and set color to rgba(0, 0, 0, 0.6)", () => {
    const hashLink = screen.getByTestId("hash-link");
    fireEvent.mouseOver(hashLink);
    fireEvent.mouseOut(hashLink);
    expect(hashLink.style.color).toEqual("rgba(0, 0, 0, 0.6)");
  });
  test("handle prop isActive and set color to rgba(0, 0, 0, 0.8)", () => {
    render(
      <HashLink
        isActive
        hash="game"
        fontSize={14}
        color={"rgba(0, 0, 0, 0.6)"}
        activeColor={"rgba(0, 0, 0, 0.8)"}
      >
        Game
      </HashLink>
    );
    expect(screen.getAllByTestId("hash-link")[1].style.color).toEqual(
      "rgba(0, 0, 0, 0.8)"
    );
  });
  test("hash-link's got className equal to hash_link", () => {
    expect(screen.getByTestId("hash-link").className).toEqual("hash_link");
  });
});
