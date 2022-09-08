import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Test Header component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });
  test("should render component", () => {
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
  test("should has a className equal to header", () => {
    expect(screen.getByTestId("header").className).toEqual("header");
  });
  test("should has a backgroundColor equal to #0E215F", () => {
    expect(screen.getByTestId("header").style.backgroundColor).toEqual(
      "rgb(14, 33, 95)"
    );
  });
  test("should render header-nav-links", () => {
    expect(screen.getByTestId("header-nav-links")).toBeInTheDocument();
  });
  test("should header-nav-links has a className equal to header__nav_links", () => {
    expect(screen.getByTestId("header-nav-links").className).toEqual(
      "header__nav_links"
    );
  });
  test("should header-nav-links has a navlink Главная", () => {
    expect(screen.getByText("Главная")).toBeInTheDocument();
  });
  test("should header-nav-linkg has a navlink Проекты", () => {
    expect(screen.getByText("Проекты")).toBeInTheDocument();
  });
  test("should header-nav-linkg has a navlink Работа", () => {
    expect(screen.getByText("Работа")).toBeInTheDocument();
  });
  test("should render header-settings", () => {
    expect(screen.getByTestId("header-settings")).toBeInTheDocument();
  });
  test("should header-settings has a className equal to header__settings", () => {
    expect(screen.getByTestId("header-settings").className).toEqual(
      "header__settings"
    );
  });
});
