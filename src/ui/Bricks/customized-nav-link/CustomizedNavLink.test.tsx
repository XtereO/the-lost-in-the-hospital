import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CustomizedNavLink } from "./CustomizedNavLink";

describe("Test CustomizedNavLink component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CustomizedNavLink
          to="/job"
          fontSize={14}
          color={"rgba(0, 0, 0, 0.6)"}
          activeColor={"rgba(0, 0, 0, 0.8)"}
        >
          Job
        </CustomizedNavLink>
      </BrowserRouter>
    );
  });
  test("render component", () => {
    expect(screen.getByTestId("nav-link")).toBeInTheDocument();
  });
  test("nav-link has className equal to nav_link", () => {
    expect(screen.getByTestId("nav-link").className).toEqual("nav_link");
  });
  test("nav-link has text equal to Job", () => {
    expect(screen.getByText("Job")).toBeInTheDocument();
  });
  test("nav-link has fontSize equal to 14", () => {
    expect(screen.getByTestId("nav-link").style.fontSize).toEqual("14px");
  });
  test("nav-link has color equal to rgba(0, 0, 0, 0.6)", () => {
    expect(screen.getByTestId("nav-link").style.color).toEqual(
      "rgba(0, 0, 0, 0.6)"
    );
  });
  test("nav-link has href equal to http://localhost/job", () => {
    expect(screen.getByTestId("nav-link")).toHaveProperty(
      "href",
      "http://localhost/job"
    );
  });
  test("handle mouse over and set color to rgba(0, 0, 0, 0.8)", () => {
    const navLink = screen.getByTestId("nav-link");
    fireEvent.mouseOver(navLink);
    expect(navLink.style.color).toEqual("rgba(0, 0, 0, 0.8)");
  });
  test("handle mouse out and set color to rgba(0, 0, 0, 0.6)", () => {
    const navLink = screen.getByTestId("nav-link");
    fireEvent.mouseOver(navLink);
    fireEvent.mouseOut(navLink);
    expect(navLink.style.color).toEqual("rgba(0, 0, 0, 0.6)");
  });
});
