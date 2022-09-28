import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HeaderNavLink } from "./HeaderNavLink";

describe("Test HeaderNavLink component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HeaderNavLink to="job">Job</HeaderNavLink>
      </BrowserRouter>
    );
  });
  test("should render component", () => {
    expect(screen.getByTestId("header-nav-link-container")).toBeInTheDocument();
  });
  test("should header-nav-link-container className equal to container", () => {
    expect(screen.getByTestId("header-nav-link-container").className).toEqual(
      "container"
    );
  });
  test("should render nav-link", () => {
    expect(screen.getByTestId("nav-link")).toBeInTheDocument();
  });
});
