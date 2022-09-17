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
  test("should render component", () => {
    expect(screen.getByTestId("nav-link")).toBeInTheDocument();
  });
});
