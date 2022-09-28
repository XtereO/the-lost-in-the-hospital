import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBlock } from "./NavBlock";

describe("Test NavigationBlock component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavBlock
          genre={"Horrors"}
          products={[{ to: "/game", title: "Game" }]}
        />
      </BrowserRouter>
    );
  });
  test("render component", () => {
    expect(screen.getByTestId("navigation-block")).toBeInTheDocument();
  });
  test("navigation-block has className equal to navigation_block", () => {
    expect(screen.getByTestId("navigation-block").className).toEqual(
      "navigation_block"
    );
  });
  test("render navigation-block-genre", () => {
    expect(screen.getByTestId("navigation-block-genre")).toBeInTheDocument();
  });
  test("navigation-block-genre has text equal to 'Horrors'", () => {
    expect(screen.getByText("Horrors")).toBeInTheDocument();
  });
  test("navigation-block-genre has className equal to navigation_block__genre", () => {
    expect(screen.getByTestId("navigation-block-genre").className).toEqual(
      "navigation_block__genre"
    );
  });
  test("navigation-block-ganre has color equal to rgb(0, 0, 0)", () => {
    expect(screen.getByTestId("navigation-block-genre").style.color).toEqual(
      "rgb(0, 0, 0)"
    );
  });
  test("render navigation-block-nav-links", () => {
    expect(
      screen.getByTestId("navigation-block-nav-links")
    ).toBeInTheDocument();
  });
  test("navigation-block-nav-links has className equal to navigation_block__nav_links", () => {
    expect(screen.getByTestId("navigation-block-nav-links").className).toEqual(
      "navigation_block__nav_links"
    );
  });
  test("nav-link rendered", () => {
    expect(screen.getByTestId("nav-link")).toBeInTheDocument();
  });
});
