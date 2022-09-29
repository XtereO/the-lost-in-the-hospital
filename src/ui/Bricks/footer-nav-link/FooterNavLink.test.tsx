import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { FooterNavLink } from "./FooterNavLink";

describe("Test FooterNavLink component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <FooterNavLink to="job">Job</FooterNavLink>
      </BrowserRouter>
    );
  });
  test("render component", () => {
    expect(screen.getByTestId("nav-link")).toBeInTheDocument();
  });
  test("footer-nav-link's className equal to footer_nav_link", () => {
    expect(screen.getByTestId("footer-nav-link-container").className).toEqual(
      "footer_nav_link"
    );
  });
});
