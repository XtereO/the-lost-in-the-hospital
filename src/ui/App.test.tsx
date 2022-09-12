import React from "react";
import { render, screen } from "@testing-library/react";
import { AppContainer } from "./App";

describe("Test App component", () => {
  beforeEach(() => {
    render(<AppContainer />);
  });
  test("should render App", () => {
    expect(screen.getByTestId("app"));
  });
  test("should app has backgroundColor equal to rgb(245, 245, 245)", () => {
    expect(screen.getByTestId("app").style.backgroundColor).toEqual(
      "rgb(245, 245, 245)"
    );
  });
  test("should render header", () => {
    expect(screen.getByTestId("header"));
  });
  test("should render home", () => {
    expect(screen.getByTestId("home"));
  });
});
