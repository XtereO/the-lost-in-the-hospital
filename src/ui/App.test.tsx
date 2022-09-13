import React from "react";
import { render, screen } from "@testing-library/react";
import { AppContainer } from "./App";

describe("Test App component", () => {
  beforeEach(() => {
    render(<AppContainer />);
  });
  test("should render App", () => {
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
  test("should app has className equal to app", () => {
    expect(screen.getByTestId("app").className).toEqual("app");
  });
  test("should app has backgroundColor equal to rgb(245, 245, 245)", () => {
    expect(screen.getByTestId("app").style.backgroundColor).toEqual(
      "rgb(245, 245, 245)"
    );
  });
  test("should render header", () => {
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
  test("should render home", () => {
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });
  test("should render footer", () => {
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
