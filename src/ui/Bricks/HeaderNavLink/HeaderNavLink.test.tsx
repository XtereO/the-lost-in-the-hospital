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
  test("should has property to equal to job", () => {
    expect(screen.getByTestId("header-nav-link")).toHaveProperty(
      "href",
      "http://localhost/job"
    );
  });
  test("should render children", () => {
    expect(screen.getByText("Job")).toBeInTheDocument();
  });
  test("should has a style equal to color: rgba(255, 255, 255, 0.6);", () => {
    expect(screen.getByTestId("header-nav-link").style.color).toEqual(
      "rgba(255, 255, 255, 0.6)"
    );
  });
  test("should has a className equal to header_nav_link", () => {
    expect(screen.getByTestId("header-nav-link").className).toEqual(
      "header_nav_link"
    );
  });
});
