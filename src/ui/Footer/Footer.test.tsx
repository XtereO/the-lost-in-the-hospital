import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Footer";

describe("Test Footer component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });
  test("should render component", () => {
    expect(screen.getByTestId("footer"));
  });
  test("should has className equal to footer", () => {
    expect(screen.getByTestId("footer").className).toEqual("footer");
  });
  test("should backgroundColor equal to rgb(14, 33, 95)", () => {
    expect(screen.getByTestId("footer").style.backgroundColor).toEqual(
      "rgb(14, 33, 95)"
    );
  });
  test("should render info-block with brand name", () => {
    expect(screen.getByText("BroToUniverse")).toBeInTheDocument();
  });
  test("should render brand-logo", () => {
    expect(screen.getByTestId("brand-logo")).toBeInTheDocument();
  });
  test("should render info-block with projects", () => {
    expect(screen.getByText("Проекты")).toBeInTheDocument();
  });
  test("should render game the-lost-in-the-hospital", () => {
    expect(screen.getByText("The Lost In The Hospital")).toBeInTheDocument();
  });
  test("should render info-block with Contacts", () => {
    expect(screen.getByText("Контакты")).toBeInTheDocument();
  });
  test("should render discord link", () => {
    expect(screen.getByText("Дискорд")).toBeInTheDocument();
  });
  test("should render telegram link", () => {
    expect(screen.getByText("Телеграм")).toBeInTheDocument();
  });
  test("should render vkontakte link", () => {
    expect(screen.getByText("ВКонтакте")).toBeInTheDocument();
  });
});
