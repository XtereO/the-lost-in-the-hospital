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
    expect(screen.getByTestId("footer-nav-link-container")).toBeInTheDocument();
  });
  test("should has property to equal to job", () => {
    expect(screen.getByTestId("footer-nav-link")).toHaveProperty(
      "href",
      "http://localhost/job"
    );
  });
  test("should render children", () => {
    expect(screen.getByText("Job")).toBeInTheDocument();
  });
  test("should has color equal to rgba(255, 255, 255, 0.8)", () => {
    expect(screen.getByTestId("footer-nav-link").style.color).toEqual(
      "rgba(255, 255, 255, 0.8)"
    );
  });
  test("should has a className equal to footer_nav_link", () => {
    expect(screen.getByTestId("footer-nav-link").className).toEqual(
      "footer_nav_link"
    );
  });
  test("should render footer-link", () => {
    render(
      <BrowserRouter>
        <FooterNavLink to="https://job.com" isLink>
          Job
        </FooterNavLink>
      </BrowserRouter>
    );
    expect(screen.getByTestId("footer-link")).toBeInTheDocument();
  });
});
