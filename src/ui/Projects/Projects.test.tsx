import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Projects } from "./Projects";

describe("Test Projects component", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: jest.fn().mockReturnValue(null),
      unobserve: jest.fn().mockReturnValue(null),
      disconnect: jest.fn().mockReturnValue(null),
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    );
  });
  test("render component", () => {
    expect(screen.getByTestId("projects")).toBeInTheDocument();
  });
  test("projects has className equal to projects", () => {
    expect(screen.getByTestId("projects").className).toEqual("projects");
  });
  test("render projects-navigation", () => {
    expect(screen.getByTestId("projects-navigation")).toBeInTheDocument();
  });
  test("projects-navigation has className equal to projects__navigation", () => {
    expect(screen.getByTestId("projects-navigation").className).toEqual(
      "projects__navigation"
    );
  });
  test("projects-navigation has borderLeftColor equal rgb(154, 154, 154)", () => {
    expect(
      screen.getByTestId("projects-navigation").style.borderRightColor
    ).toEqual("rgb(154, 154, 154)");
  });
  test("render projects-content", () => {
    expect(screen.getByTestId("projects-content")).toBeInTheDocument();
  });
  test("render projects-product-navigation", () => {
    expect(
      screen.getByTestId("projects-product-navigation")
    ).toBeInTheDocument();
  });
  test("projects-content has className equal to projects__content", () => {
    expect(screen.getByTestId("projects-content").className).toEqual(
      "projects__content"
    );
  });
  test("projects-product-navigation has className equal to projects__product_navigation", () => {
    expect(screen.getByTestId("projects-product-navigation").className).toEqual(
      "projects__product_navigation"
    );
  });
  test("render projects-product-navigation-header", () => {
    expect(
      screen.getByTestId("projects-product-navigation-header")
    ).toBeInTheDocument();
  });
  test("projects-product-navigation-header's text equal to 'Навигация'", () => {
    expect(screen.getByText("Навигация")).toBeInTheDocument();
  });
  test("projects-product-navigation-header's className equal to projects__product_navigation__header", () => {
    expect(
      screen.getByTestId("projects-product-navigation-header").className
    ).toEqual("projects__product_navigation__header");
  });
});
