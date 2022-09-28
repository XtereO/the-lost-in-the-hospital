import { store } from "@core/store";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

describe("Test Header component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  });
  test("render component", () => {
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
  test("has a className equal to header", () => {
    expect(screen.getByTestId("header").className).toEqual("header");
  });
  test("has a backgroundColor equal to rgb(14, 33, 95)", () => {
    expect(screen.getByTestId("header").style.backgroundColor).toEqual(
      "rgb(14, 33, 95)"
    );
  });
  test("render header-nav-links", () => {
    expect(screen.getByTestId("header-nav-links")).toBeInTheDocument();
  });
  test("header-nav-links has a className equal to header__nav_links", () => {
    expect(screen.getByTestId("header-nav-links").className).toEqual(
      "header__nav_links"
    );
  });
  test("header-nav-links has a navlink Главная", () => {
    expect(screen.getByText("Главная")).toBeInTheDocument();
  });
  test("header-nav-linkg has a navlink Проекты", () => {
    expect(screen.getByText("Проекты")).toBeInTheDocument();
  });
  test("header-nav-linkg has a navlink Работа", () => {
    expect(screen.getByText("Работа")).toBeInTheDocument();
  });
  test("render header-settings", () => {
    expect(screen.getByTestId("header-settings")).toBeInTheDocument();
  });
  test("header-settings has a className equal to header__settings", () => {
    expect(screen.getByTestId("header-settings").className).toEqual(
      "header__settings"
    );
  });
  test("render moon-icon", () => {
    expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
  });
  test("render language-icon", () => {
    expect(screen.getByTestId("language-icon")).toBeInTheDocument();
  });
});
