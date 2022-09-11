import { render, screen } from "@testing-library/react";
import React from "react";
import { Home } from "./Home";

describe("Test Home component", () => {
  beforeEach(() => {
    render(<Home />);
  });
  test("should render component", () => {
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });
  test("should render banner", () => {
    expect(screen.getByTestId("banner")).toBeInTheDocument();
  });
  test("should backgroundColor equal to #0D193F", () => {
    expect(screen.getByTestId("banner").style.backgroundColor).toEqual(
      "rgb(13, 25, 63)"
    );
  });
  test("should banner has a className equal to banner", () => {
    expect(screen.getByTestId("banner").className).toEqual("banner");
  });
  test("should rendrer banner-container", () => {
    expect(screen.getByTestId("banner-container")).toBeInTheDocument();
  });
  test("should banner-container has a className equal to banner__container", () => {
    expect(screen.getByTestId("banner-container").className).toEqual(
      "banner__container"
    );
  });
  test("should render banner-container-header", () => {
    expect(screen.getByTestId("banner-container-header")).toBeInTheDocument();
  });
  test("should banner-container-header has a className equal to banner__container__header", () => {
    expect(screen.getByTestId("banner-container-header").className).toEqual(
      "banner__container__header"
    );
  });
  test("should render text in banner-container-header BroToUniverse", () => {
    expect(screen.getByText("BroToUniverse")).toBeInTheDocument();
  });
  test("should banner-container-header has a color equal to rgba(255, 255, 255, 1)", () => {
    expect(screen.getByTestId("banner-container-header").style.color).toEqual(
      "rgb(255, 255, 255)"
    );
  });
});
