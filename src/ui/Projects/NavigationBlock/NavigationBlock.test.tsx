import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NavigationBlock } from "./NavigationBlock";

describe("Test NavigationBlock component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavigationBlock
          genre={"Horrors"}
          products={[{ to: "/game", title: "Game" }]}
        />
      </BrowserRouter>
    );
  });
  test("should render component", () => {
    expect(screen.getByTestId("navigation-block")).toBeInTheDocument();
  });
  test("should navigation-block has className equal to navigation_block", () => {
    expect(screen.getByTestId("navigation-block").className).toEqual(
      "navigation_block"
    );
  });
  test("should render navigation-block-genre", () => {
    expect(screen.getByTestId("navigation-block-genre")).toBeInTheDocument();
  });
  test("should navigation-block-genre has text equal to 'Horrors'", () => {
    expect(screen.getByText("Horrors")).toBeInTheDocument();
  });
  test("should navigation-block-genre has className equal to navigation_block__genre", () => {
    expect(screen.getByTestId("navigation-block-genre").className).toEqual(
      "navigation_block__genre"
    );
  });
  test("should navigation-block-ganre has color equal to rgb(0, 0, 0)", () => {
    expect(screen.getByTestId("navigation-block-genre").style.color).toEqual(
      "rgb(0, 0, 0)"
    );
  });
  test("should render navigation-block-nav-links", () => {
    expect(
      screen.getByTestId("navigation-block-nav-links")
    ).toBeInTheDocument();
  });
  test("should navigation-block-nav-links has className equal to navigation_block__nav_links", () => {
    expect(screen.getByTestId("navigation-block-nav-links").className).toEqual(
      "navigation_block__nav_links"
    );
  });
  test("should nav-link rendered", () => {
    expect(screen.getByTestId("nav-link")).toBeInTheDocument();
  });
});
