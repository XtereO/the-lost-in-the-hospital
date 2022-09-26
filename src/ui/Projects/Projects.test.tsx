import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Projects } from "./Projects";

describe("Test Projects component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    );
  });
  test("should render component", () => {
    expect(screen.getByTestId("projects")).toBeInTheDocument();
  });
  test("should projects has className equal to projects", () => {
    expect(screen.getByTestId("projects").className).toEqual("projects");
  });
  test("should render projects-navigation", () => {
    expect(screen.getByTestId("projects-navigation")).toBeInTheDocument();
  });
  test("should projects-navigation has className equal to projects__navigation", () => {
    expect(screen.getByTestId("projects-navigation").className).toEqual(
      "projects__navigation"
    );
  });
  test("should projects-navigation has borderLeftColor equal rgb(154, 154, 154)", () => {
    expect(
      screen.getByTestId("projects-navigation").style.borderRightColor
    ).toEqual("rgb(154, 154, 154)");
  });
  test("should render projects-content", () => {
    expect(screen.getByTestId("projects-content")).toBeInTheDocument();
  });
  test("should render projects-product-navigation", () => {
    expect(
      screen.getByTestId("projects-product-navigation")
    ).toBeInTheDocument();
  });
  test("should projects-content has className equal to projects__content", () => {
    expect(screen.getByTestId("projects-content").className).toEqual(
      "projects__content"
    );
  });
  test("should projects-product-navigation has className equal to projects__product_navigation", () => {
    expect(screen.getByTestId("projects-product-navigation").className).toEqual(
      "projects__product_navigation"
    );
  });
  test("should render projects-product-navigation-header", () => {
    expect(
      screen.getByTestId("projects-product-navigation-header")
    ).toBeInTheDocument();
  });
  test("should projects-product-navigation-header's text equal to 'Навигация'", () => {
    expect(screen.getByText("Навигация")).toBeInTheDocument();
  });
  test("should projects-product-navigation-header's className equal to projects__product_navigation__header", () => {
    expect(screen.getByTestId("projects-product-navigation-header")).toEqual(
      "projects__product_navigation__header"
    );
  });
});
