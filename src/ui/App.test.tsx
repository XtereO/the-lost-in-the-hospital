import { render, screen } from "@testing-library/react";
import React from "react";
import { AppContainer } from "./App";

describe("Test App component", () => {
  beforeEach(() => {
    render(<AppContainer />);
  });
  test("render App", () => {
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
  test("app has className equal to app", () => {
    expect(screen.getByTestId("app").className).toEqual("app");
  });
  test("app has backgroundColor equal to rgb(245, 245, 245)", () => {
    expect(screen.getByTestId("app").style.backgroundColor).toEqual(
      "rgb(245, 245, 245)"
    );
  });
  test("render header", () => {
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
  test("render home", () => {
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });
  test("render footer", () => {
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
